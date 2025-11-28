import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Loader2, List, History, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { CategoryBrowser } from "./CategoryBrowser";
import { ConversationHistory } from "./ConversationHistory";
import { Auth } from "./Auth";
import { searchFAQ } from "@/data/faqData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

interface Message {
  id?: string;
  text: string;
  isUser: boolean;
}

type ViewMode = "chat" | "categories" | "history";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("chat");
  const [user, setUser] = useState<any>(null);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! 👋 Sou o assistente virtual da MR3X. Como posso ajudá-lo hoje?",
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthChecked(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user && currentConversationId) {
      loadMessages(currentConversationId);
    }
  }, [user, currentConversationId]);

  const loadMessages = async (conversationId: string) => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        setMessages(
          data.map((msg) => ({
            id: msg.id,
            text: msg.content,
            isUser: msg.is_user,
          }))
        );
      }
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
    }
  };

  const saveMessage = async (content: string, isUser: boolean) => {
    if (!user || !currentConversationId) return;

    try {
      const { error } = await supabase.from("messages").insert({
        conversation_id: currentConversationId,
        content,
        is_user: isUser,
      });

      if (error) throw error;

      await supabase
        .from("conversations")
        .update({ updated_at: new Date().toISOString() })
        .eq("id", currentConversationId);
    } catch (error) {
      console.error("Erro ao salvar mensagem:", error);
    }
  };

  const createNewConversation = async (firstMessage: string) => {
    if (!user) return null;

    try {
      const title = firstMessage.slice(0, 50) + (firstMessage.length > 50 ? "..." : "");
      
      const { data, error } = await supabase
        .from("conversations")
        .insert({
          user_id: user.id,
          title,
        })
        .select()
        .single();

      if (error) throw error;
      return data.id;
    } catch (error) {
      console.error("Erro ao criar conversa:", error);
      return null;
    }
  };

  const handleNewConversation = () => {
    setCurrentConversationId(null);
    setMessages([
      {
        text: "Olá! 👋 Sou o assistente virtual da MR3X. Como posso ajudá-lo hoje?",
        isUser: false,
      },
    ]);
    setViewMode("chat");
  };

  const handleConversationSelect = (conversationId: string) => {
    setCurrentConversationId(conversationId);
    setViewMode("chat");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentConversationId(null);
    setMessages([
      {
        text: "Olá! 👋 Sou o assistente virtual da MR3X. Como posso ajudá-lo hoje?",
        isUser: false,
      },
    ]);
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
  };

  const handleSendMessage = async (message: string) => {
    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    let convId = currentConversationId;
    if (user && !convId) {
      convId = await createNewConversation(message);
      setCurrentConversationId(convId);
    }

    if (user && convId) {
      await saveMessage(message, true);
    }

    try {
      // Buscar no FAQ local
      const faqResults = searchFAQ(message);
      const faqContext = faqResults.length > 0
        ? faqResults.map(item => `P: ${item.question}\nR: ${item.answer}`).join('\n\n')
        : '';

      console.log('FAQ encontrado:', faqResults.length, 'resultados');

      // Chamar edge function com IA
      const { data, error } = await supabase.functions.invoke('chat-faq', {
        body: { 
          message,
          context: faqContext 
        },
      });

      if (error) {
        console.error('Erro ao invocar função:', error);
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const reply = data.reply || data.fallback;
      const assistantMessage = { text: reply, isUser: false };
      setMessages((prev) => [...prev, assistantMessage]);

      if (user && convId) {
        await saveMessage(reply, false);
      }

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      let errorMessage = 'Desculpe, houve um erro ao processar sua mensagem.';
      
      if (error instanceof Error) {
        if (error.message.includes('429')) {
          errorMessage = 'Muitas requisições. Por favor, aguarde um momento e tente novamente.';
        } else if (error.message.includes('402')) {
          errorMessage = 'Serviço temporariamente indisponível.';
        }
      }
      
      const errorMsg = {
        text: `${errorMessage}\n\nPor favor, entre em contato com suporte@mr3x.com.br para obter ajuda.`,
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMsg]);

      if (user && convId) {
        await saveMessage(errorMsg.text, false);
      }

      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!authChecked) {
    return null;
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-16 w-16 rounded-full z-50",
          "bg-gradient-to-br from-primary via-accent-1 to-secondary",
          "hover:scale-110 transition-all duration-300",
          "animate-pulse-glow",
          isOpen && "rotate-90 scale-95"
        )}
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6 animate-spin" /> : <MessageCircle className="w-6 h-6 animate-float" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card 
          className={cn(
            "fixed bottom-24 right-6 w-[400px] h-[600px] z-50",
            "flex flex-col shadow-chat border-2",
            "border-transparent bg-gradient-to-br from-primary/10 via-accent-1/10 to-secondary/10",
            "backdrop-blur-xl",
            "animate-in slide-in-from-bottom-8 fade-in-0 duration-500"
          )}
        >
          {showAuth && !user ? (
            <Auth onAuthSuccess={() => {
              setShowAuth(false);
              setViewMode("chat");
            }} />
          ) : (
            <>
              {/* Header */}
              <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary via-accent-1 to-secondary text-white rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" 
                     style={{ backgroundSize: '200% 100%' }} />
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse-glow backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Assistente MR3X</h3>
                    <p className="text-xs text-white/90 flex items-center gap-1">
                      <span className="w-2 h-2 bg-accent-2 rounded-full animate-pulse" />
                      Online • Respostas instantâneas
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-white/20 transition-all hover:scale-110"
                      onClick={() => setViewMode("categories")}
                      title="Categorias"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                    {user && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20 transition-all hover:scale-110"
                          onClick={() => setViewMode("history")}
                          title="Histórico"
                        >
                          <History className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-white hover:bg-white/20 transition-all hover:scale-110"
                          onClick={handleLogout}
                          title="Sair"
                        >
                          <LogOut className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              {viewMode === "categories" ? (
                <CategoryBrowser
                  onQuestionSelect={handleSendMessage}
                  onClose={() => setViewMode("chat")}
                />
              ) : viewMode === "history" && user ? (
                <ConversationHistory
                  currentConversationId={currentConversationId}
                  onConversationSelect={handleConversationSelect}
                  onNewConversation={handleNewConversation}
                />
              ) : (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background via-background to-accent/5">
                    {messages.map((msg, idx) => (
                      <div key={idx} className="animate-slide-up">
                        <ChatMessage message={msg.text} isUser={msg.isUser} />
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start animate-slide-up">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-accent-1 to-secondary flex items-center justify-center shadow-glow">
                          <Loader2 className="w-5 h-5 text-white animate-spin" />
                        </div>
                        <div className="bg-card text-card-foreground rounded-2xl rounded-bl-md px-4 py-3 border border-primary/20 shadow-message">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-accent-1 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
                    <ChatInput onSend={handleSendMessage} disabled={isLoading} />
                    {!user && (
                      <div className="px-4 pb-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowAuth(true)}
                          className="w-full text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
                        >
                          Login para salvar conversas
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </Card>
      )}
    </>
  );
};