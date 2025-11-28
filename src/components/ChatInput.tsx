import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-background border-t border-border">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite sua pergunta sobre a MR3X..."
        disabled={disabled}
        className={cn(
          "min-h-[60px] max-h-[120px] resize-none bg-chat-input transition-all",
          "focus:ring-2 focus:ring-primary focus:ring-offset-2",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      <Button 
        type="submit" 
        size="icon"
        disabled={!message.trim() || disabled}
        className={cn(
          "h-[60px] w-[60px] rounded-xl shadow-lg",
          "bg-gradient-to-br from-primary to-secondary",
          "hover:shadow-xl hover:scale-105 transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        )}
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};