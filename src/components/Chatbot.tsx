import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { searchFAQ } from "@/data/faqData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  isUser: boolean;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Olá! 👋 Sou o assistente virtual da MR3X. Como posso ajudá-lo hoje?",
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setIsLoading(true);

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
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);

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
      
      setMessages((prev) => [
        ...prev,
        {
          text: `${errorMessage}\n\nPor favor, entre em contato com suporte@mr3x.com.br para obter ajuda.`,
          isUser: false,
        },
      ]);

      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-chat z-50",
          "bg-gradient-to-br from-primary to-secondary",
          "hover:shadow-xl hover:scale-110 transition-all duration-300",
          isOpen && "rotate-90"
        )}
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card 
          className={cn(
            "fixed bottom-24 right-6 w-[400px] h-[600px] z-50",
            "flex flex-col shadow-chat border-2 border-primary/20",
            "animate-in slide-in-from-bottom-8 fade-in-0 duration-300"
          )}
        >
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Assistente MR3X</h3>
                <p className="text-xs text-white/80">Online • Responde em segundos</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-accent/5">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                </div>
                <div className="bg-chat-assistant text-chat-assistant-foreground rounded-2xl rounded-bl-md px-4 py-3 border border-border">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <ChatInput onSend={handleSendMessage} disabled={isLoading} />
        </Card>
      )}
    </>
  );
};