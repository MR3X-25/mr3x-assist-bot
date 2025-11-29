import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";
import { cn } from "@/lib/utils";

interface MessageFeedbackProps {
  conversationId: string;
  messageContent: string;
  userId: string;
}

export const MessageFeedback = ({ conversationId, messageContent, userId }: MessageFeedbackProps) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (rating === 0) {
      toast({
        title: "Avaliação necessária",
        description: "Por favor, selecione uma quantidade de estrelas.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("message_feedback").insert({
        conversation_id: conversationId,
        message_content: messageContent,
        rating,
        feedback_text: feedbackText || null,
        user_id: userId,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Obrigado pelo feedback!",
        description: "Sua avaliação nos ajuda a melhorar.",
      });
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar o feedback.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-xs text-muted-foreground italic animate-slide-up">
        ✓ Feedback enviado
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-2 animate-slide-up">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Esta resposta foi útil?</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => {
                setRating(star);
                setIsExpanded(true);
              }}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="transition-all hover:scale-110"
            >
              <Star
                className={cn(
                  "w-4 h-4 transition-colors",
                  star <= (hoveredRating || rating)
                    ? "fill-accent-2 text-accent-2"
                    : "text-muted-foreground"
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-2 animate-slide-up">
          <Textarea
            placeholder="Comentário opcional..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            className="text-xs resize-none h-16"
          />
          <Button
            onClick={handleSubmit}
            size="sm"
            className="w-full text-xs"
          >
            Enviar Avaliação
          </Button>
        </div>
      )}
    </div>
  );
};
