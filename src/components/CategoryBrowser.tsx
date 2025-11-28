import { Book, Users, FileText, Home, FileSignature, ClipboardCheck, DollarSign, Bell, Code, AlertCircle, Shield, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { faqCategories, faqData } from "@/data/faqData";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CategoryBrowserProps {
  onQuestionSelect: (question: string) => void;
  onClose: () => void;
}

const categoryIcons: Record<string, any> = {
  "Conceito Geral da MR3X": Book,
  "Usuários e Hierarquia": Users,
  "CRUD de Usuários": FileText,
  "Cadastro e Gestão de Imóveis": Home,
  "Contratos e Assinatura": FileSignature,
  "Vistoria Digital": ClipboardCheck,
  "Cobranças, Pagamentos e Split": DollarSign,
  "Acordos e Notificações": Bell,
  "API, Tokens e Auditoria": Code,
  "Erros Comuns": AlertCircle,
  "Segurança e Privacidade": Shield,
  "Suporte e Operação": HelpCircle,
};

export const CategoryBrowser = ({ onQuestionSelect, onClose }: CategoryBrowserProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleQuestionClick = (question: string) => {
    onQuestionSelect(question);
    onClose();
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-gradient-to-r from-primary to-secondary text-white">
        <h3 className="font-semibold text-lg">Categorias do FAQ</h3>
        <p className="text-xs text-white/80">Navegue por categorias ou pesquise</p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {faqCategories.map((category) => {
            const Icon = categoryIcons[category] || Book;
            const questionsInCategory = faqData.filter((faq) => faq.category === category);
            const isExpanded = selectedCategory === category;

            return (
              <div key={category} className="space-y-2">
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left h-auto py-3 transition-all",
                    isExpanded && "bg-primary/10 border-primary"
                  )}
                  onClick={() => handleCategoryClick(category)}
                >
                  <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">{category}</div>
                    <div className="text-xs text-muted-foreground">
                      {questionsInCategory.length} perguntas
                    </div>
                  </div>
                </Button>

                {isExpanded && (
                  <div className="ml-8 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {questionsInCategory.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuestionClick(faq.question)}
                        className="w-full text-left p-2 text-sm rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="font-medium text-foreground">
                          {faq.question}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
