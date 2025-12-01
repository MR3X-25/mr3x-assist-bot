import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Loader2 } from "lucide-react";

interface MermaidDiagramProps {
  chart: string;
  title?: string;
}

export const MermaidDiagram = ({ chart, title }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Importar mermaid dinamicamente
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
          fontFamily: "system-ui, sans-serif",
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error("Erro ao renderizar diagrama:", err);
        setError("Não foi possível renderizar o diagrama");
      } finally {
        setIsLoading(false);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <Card className="p-4 my-3 bg-gradient-to-br from-accent/5 to-secondary/5">
      {title && (
        <h4 className="font-semibold mb-3 text-sm text-primary">{title}</h4>
      )}
      
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}
      
      {error && (
        <div className="text-sm text-destructive text-center py-4">
          {error}
        </div>
      )}
      
      <div
        ref={containerRef}
        className="mermaid-container overflow-x-auto"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </Card>
  );
};
