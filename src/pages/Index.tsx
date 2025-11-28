import { Chatbot } from "@/components/Chatbot";
import { MessageCircle, Sparkles, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <Sparkles className="w-4 h-4" />
            Sistema Inteligente de FAQ
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
            Central de Ajuda MR3X
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-0 slide-in-from-bottom-8 duration-900">
            Tire suas dúvidas sobre gestão de imóveis, cobranças, pagamentos e muito mais. 
            Nosso assistente inteligente está sempre pronto para ajudar!
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Respostas Instantâneas</h3>
              <p className="text-muted-foreground text-sm">
                Obtenha respostas imediatas para suas perguntas sobre a plataforma
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Inteligência Artificial</h3>
              <p className="text-muted-foreground text-sm">
                IA avançada que pesquisa e aprende para oferecer as melhores respostas
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Suporte Completo</h3>
              <p className="text-muted-foreground text-sm">
                FAQ completo e integração direta com o time de suporte quando necessário
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
            <h2 className="text-2xl font-semibold mb-3">Comece a conversar agora!</h2>
            <p className="text-muted-foreground mb-6">
              Clique no botão de chat no canto inferior direito e faça sua primeira pergunta
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MessageCircle className="w-4 h-4 animate-bounce" />
              <span>Procure o ícone de chat →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default Index;