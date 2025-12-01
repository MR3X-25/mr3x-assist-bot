import { useState } from "react";
import { ThumbsUp, ThumbsDown, X } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

interface SatisfactionSurveyProps {
  conversationId: string;
  messageContent: string;
  userId: string;
  onComplete?: () => void;
}

export const SatisfactionSurvey = ({
  conversationId,
  messageContent,
  userId,
  onComplete
}: SatisfactionSurveyProps) => {
  const [satisfaction, setSatisfaction] = useState<"satisfied" | "unsatisfied" | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const getContactEmail = (messageText: string): string => {
    const lowerMessage = messageText.toLowerCase();
    
    // Problemas técnicos, erros
    if (lowerMessage.includes("erro") || lowerMessage.includes("problema") || 
        lowerMessage.includes("bug") || lowerMessage.includes("não funciona")) {
      return "suporte@mr3x.com.br";
    }
    
    // Planos, valores, contratar
    if (lowerMessage.includes("plano") || lowerMessage.includes("preço") || 
        lowerMessage.includes("valor") || lowerMessage.includes("contratar") ||
        lowerMessage.includes("assinatura")) {
      return "vendas@mr3x.com.br";
    }
    
    // Geral - dúvidas sobre uso da plataforma
    return "contato@mr3x.com.br";
  };

  const handleSatisfactionClick = async (satisfied: boolean) => {
    setSatisfaction(satisfied ? "satisfied" : "unsatisfied");
    
    if (satisfied) {
      // Se satisfeito, salvar direto
      await submitFeedback(5, "");
      toast({
        title: "Obrigado!",
        description: "Ficamos felizes que a resposta foi útil.",
      });
      onComplete?.();
    } else {
      // Se insatisfeito, mostrar formulário
      setShowFeedback(true);
    }
  };

  const submitFeedback = async (rating: number, feedback: string) => {
    setSubmitting(true);
    try {
      // Salvar feedback no banco
      const { error } = await supabase.from("message_feedback").insert({
        conversation_id: conversationId,
        message_content: messageContent,
        user_id: userId,
        rating,
        feedback_text: feedback || null,
      });

      if (error) throw error;

      // Se insatisfeito, sugerir melhoria na base de conhecimento
      if (rating < 3 && feedback) {
        await supabase.from("chatbot_analytics").insert({
          user_id: userId,
          question: feedback,
          category: "Feedback de Melhoria",
          response_type: "improvement_suggestion",
        });
      }
    } catch (error) {
      console.error("Erro ao salvar feedback:", error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitFeedback = async () => {
    if (!feedbackText.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, descreva o que podemos melhorar.",
        variant: "destructive",
      });
      return;
    }

    try {
      await submitFeedback(2, feedbackText);
      
      const contactEmail = getContactEmail(messageContent);
      
      toast({
        title: "Feedback enviado",
        description: `Obrigado pelo feedback! Para mais ajuda, entre em contato: ${contactEmail}`,
        duration: 5000,
      });
      
      onComplete?.();
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível enviar o feedback.",
        variant: "destructive",
      });
    }
  };

  if (satisfaction === "satisfied") {
    return null;
  }

  if (showFeedback) {
    return (
      <Card className="p-4 mt-2 space-y-3 border-2 border-primary/20 animate-in slide-in-from-top-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-sm">Como podemos melhorar?</h4>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => {
              setShowFeedback(false);
              setSatisfaction(null);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <Textarea
          placeholder="Descreva o que não ficou claro ou o que você esperava encontrar..."
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          rows={3}
          className="text-sm"
        />
        
        <div className="text-xs text-muted-foreground">
          <p className="mb-1">📧 Também pode entrar em contato:</p>
          <ul className="space-y-1 ml-4">
            <li>• <span className="font-medium">contato@mr3x.com.br</span> - Dúvidas gerais</li>
            <li>• <span className="font-medium">suporte@mr3x.com.br</span> - Problemas técnicos</li>
            <li>• <span className="font-medium">vendas@mr3x.com.br</span> - Planos e vendas</li>
          </ul>
        </div>

        <Button
          onClick={handleSubmitFeedback}
          disabled={submitting}
          className="w-full"
          size="sm"
        >
          {submitting ? "Enviando..." : "Enviar Feedback"}
        </Button>
      </Card>
    );
  }

  return (
    <div className="mt-2 p-3 rounded-lg bg-accent/10 border border-border">
      <p className="text-xs font-medium mb-2 text-muted-foreground">
        Esta resposta foi útil?
      </p>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSatisfactionClick(true)}
          className={cn(
            "flex-1 gap-2 transition-all",
            "hover:bg-green-500/10 hover:border-green-500 hover:text-green-700"
          )}
        >
          <ThumbsUp className="w-4 h-4" />
          Sim
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSatisfactionClick(false)}
          className={cn(
            "flex-1 gap-2 transition-all",
            "hover:bg-red-500/10 hover:border-red-500 hover:text-red-700"
          )}
        >
          <ThumbsDown className="w-4 h-4" />
          Não
        </Button>
      </div>
    </div>
  );
};
