import { useState, useMemo } from "react";
import { Search, Filter, X, ArrowUpDown } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { faqData, faqCategories } from "@/data/faqData";
import { cn } from "@/lib/utils";

interface AdvancedSearchProps {
  onQuestionSelect: (question: string) => void;
  onClose: () => void;
}

type SortOption = "relevance" | "category" | "alphabetical";

export const AdvancedSearch = ({ onQuestionSelect, onClose }: AdvancedSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [showFilters, setShowFilters] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSortBy("relevance");
  };

  const searchResults = useMemo(() => {
    if (!searchTerm.trim() && selectedCategories.length === 0) {
      return [];
    }

    const keywords = searchTerm.toLowerCase().split(/\s+/).filter(k => k.length > 0);
    
    let results = faqData.map(faq => {
      const questionLower = faq.question.toLowerCase();
      const answerLower = faq.answer.toLowerCase();
      
      // Calcular relevância baseada em múltiplas palavras-chave
      let relevanceScore = 0;
      
      keywords.forEach(keyword => {
        // Pontuação por correspondência exata
        if (questionLower.includes(keyword)) {
          relevanceScore += 10;
        }
        if (answerLower.includes(keyword)) {
          relevanceScore += 5;
        }
        
        // Pontuação por correspondência no início
        if (questionLower.startsWith(keyword)) {
          relevanceScore += 5;
        }
      });

      // Filtro por categoria
      const categoryMatch = selectedCategories.length === 0 || 
        selectedCategories.includes(faq.category);

      return {
        ...faq,
        relevanceScore,
        matches: relevanceScore > 0 && categoryMatch
      };
    });

    // Filtrar apenas resultados relevantes
    results = results.filter(r => r.matches);

    // Ordenação
    switch (sortBy) {
      case "relevance":
        results.sort((a, b) => b.relevanceScore - a.relevanceScore);
        break;
      case "category":
        results.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case "alphabetical":
        results.sort((a, b) => a.question.localeCompare(b.question));
        break;
    }

    return results;
  }, [searchTerm, selectedCategories, sortBy]);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-gradient-to-r from-primary via-accent-1 to-secondary text-white">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-lg">Busca Avançada</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Barra de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
          <Input
            type="text"
            placeholder="Digite múltiplas palavras-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
          />
        </div>
      </div>

      {/* Controles */}
      <div className="p-4 border-b space-y-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            Filtros
            {selectedCategories.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedCategories.length}
              </Badge>
            )}
          </Button>

          <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
            <SelectTrigger className="w-[180px]">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevância</SelectItem>
              <SelectItem value="category">Categoria</SelectItem>
              <SelectItem value="alphabetical">Alfabética</SelectItem>
            </SelectContent>
          </Select>

          {(searchTerm || selectedCategories.length > 0) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-auto"
            >
              Limpar
            </Button>
          )}
        </div>

        {/* Filtros de categoria */}
        {showFilters && (
          <div className="animate-in slide-in-from-top-2">
            <p className="text-sm font-medium mb-2">Categorias:</p>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer transition-all",
                    selectedCategories.includes(category) && "bg-primary"
                  )}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Resultados */}
      <ScrollArea className="flex-1 p-4">
        {searchResults.length === 0 && (searchTerm || selectedCategories.length > 0) ? (
          <div className="text-center py-8 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Nenhum resultado encontrado</p>
            <p className="text-sm mt-1">Tente outras palavras-chave ou filtros</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Digite algo para pesquisar</p>
            <p className="text-sm mt-1">Use múltiplas palavras-chave para melhor resultado</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              {searchResults.length} resultado(s) encontrado(s)
            </p>
            {searchResults.map((result, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onQuestionSelect(result.question);
                  onClose();
                }}
                className="w-full text-left p-4 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {result.category}
                  </Badge>
                  {sortBy === "relevance" && (
                    <Badge variant="outline" className="text-xs">
                      Relevância: {result.relevanceScore}
                    </Badge>
                  )}
                </div>
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {result.question}
                </p>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {result.answer}
                </p>
              </button>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
