import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { BarChart3, MessageSquare, Star, TrendingUp, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalyticsData {
  totalQuestions: number;
  totalFeedback: number;
  averageRating: number;
  topQuestions: Array<{ question: string; count: number; category: string }>;
  ratingDistribution: Array<{ rating: number; count: number }>;
  recentFeedback: Array<{
    rating: number;
    feedback_text: string;
    created_at: string;
    message_content: string;
  }>;
}

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/");
        return;
      }

      const { data: roleData, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();

      if (error || !roleData) {
        toast({
          title: "Acesso negado",
          description: "Você não tem permissão para acessar esta área.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAdmin(true);
      await loadAnalytics();
    } catch (error) {
      console.error("Erro ao verificar permissões:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  const loadAnalytics = async () => {
    try {
      // Total de perguntas
      const { count: totalQuestions } = await supabase
        .from("chatbot_analytics")
        .select("*", { count: "exact", head: true });

      // Total de feedbacks
      const { count: totalFeedback } = await supabase
        .from("message_feedback")
        .select("*", { count: "exact", head: true });

      // Rating médio
      const { data: ratings } = await supabase
        .from("message_feedback")
        .select("rating");

      const averageRating = ratings && ratings.length > 0
        ? ratings.reduce((sum, item) => sum + item.rating, 0) / ratings.length
        : 0;

      // Top perguntas
      const { data: questionsData } = await supabase
        .from("chatbot_analytics")
        .select("question, category")
        .order("created_at", { ascending: false })
        .limit(100);

      const questionCounts: Record<string, { count: number; category: string }> = {};
      questionsData?.forEach(item => {
        if (!questionCounts[item.question]) {
          questionCounts[item.question] = { count: 0, category: item.category || "Geral" };
        }
        questionCounts[item.question].count++;
      });

      const topQuestions = Object.entries(questionCounts)
        .map(([question, data]) => ({
          question,
          count: data.count,
          category: data.category,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

      // Distribuição de ratings
      const ratingDistribution = [1, 2, 3, 4, 5].map(rating => ({
        rating,
        count: ratings?.filter(r => r.rating === rating).length || 0,
      }));

      // Feedbacks recentes
      const { data: recentFeedback } = await supabase
        .from("message_feedback")
        .select("rating, feedback_text, created_at, message_content")
        .order("created_at", { ascending: false })
        .limit(10);

      setAnalytics({
        totalQuestions: totalQuestions || 0,
        totalFeedback: totalFeedback || 0,
        averageRating,
        topQuestions,
        ratingDistribution,
        recentFeedback: recentFeedback || [],
      });
    } catch (error) {
      console.error("Erro ao carregar analytics:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar as estatísticas.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin || !analytics) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-primary/10"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Dashboard Administrativo
              </h1>
              <p className="text-muted-foreground">Estatísticas e métricas do chatbot MR3X</p>
            </div>
          </div>
        </div>

        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-2 hover:border-primary/50 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Total de Perguntas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{analytics.totalQuestions}</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent-1/50 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-1" />
                Total de Avaliações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent-1">{analytics.totalFeedback}</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Star className="w-4 h-4 text-secondary" />
                Média de Satisfação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary flex items-center gap-1">
                {analytics.averageRating.toFixed(1)}
                <Star className="w-5 h-5 fill-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent-2/50 transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent-2" />
                Taxa de Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent-2">
                {analytics.totalQuestions > 0
                  ? ((analytics.totalFeedback / analytics.totalQuestions) * 100).toFixed(0)
                  : 0}
                %
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs com dados detalhados */}
        <Tabs defaultValue="questions" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="questions">Perguntas Frequentes</TabsTrigger>
            <TabsTrigger value="ratings">Distribuição de Avaliações</TabsTrigger>
            <TabsTrigger value="feedback">Feedbacks Recentes</TabsTrigger>
          </TabsList>

          <TabsContent value="questions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Top 10 Perguntas Mais Frequentes
                </CardTitle>
                <CardDescription>
                  Perguntas mais feitas pelos usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.topQuestions.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium break-words">{item.question}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Categoria: {item.category} • {item.count} vez(es)
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ratings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Distribuição de Avaliações
                </CardTitle>
                <CardDescription>
                  Como os usuários avaliam as respostas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.ratingDistribution.reverse().map((item) => (
                    <div key={item.rating} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.rating}</span>
                          <Star className="w-4 h-4 fill-accent-2 text-accent-2" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item.count} avaliações</span>
                      </div>
                      <div className="w-full bg-accent/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent-2 h-2 rounded-full transition-all"
                          style={{
                            width: analytics.totalFeedback > 0
                              ? `${(item.count / analytics.totalFeedback) * 100}%`
                              : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Feedbacks Recentes
                </CardTitle>
                <CardDescription>
                  Últimos comentários dos usuários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.recentFeedback.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating
                                ? "fill-accent-2 text-accent-2"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-auto">
                          {new Date(item.created_at).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                      {item.feedback_text && (
                        <p className="text-sm italic text-muted-foreground">
                          "{item.feedback_text}"
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground border-t pt-2">
                        Resposta: {item.message_content.slice(0, 100)}...
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
