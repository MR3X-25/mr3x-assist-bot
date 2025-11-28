import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY não configurada');
    }

    console.log('Processando pergunta:', message);
    console.log('Contexto do FAQ:', context);

    const systemPrompt = `Você é um assistente inteligente da MR3X, uma plataforma de gestão de imóveis e cobranças.

IMPORTANTE: Responda SEMPRE em português brasileiro de forma clara, educada e profissional.

Se a pergunta do usuário puder ser respondida com as informações do FAQ fornecidas no contexto, use essas informações.

Se não houver informações suficientes no FAQ, pesquise na internet e explique de forma semelhante ao estilo do FAQ - clara, direta e útil.

Se mesmo após pesquisar você não tiver uma resposta adequada, informe ao usuário para entrar em contato com suporte@mr3x.com.br descrevendo a dúvida, e a equipe responderá em breve.

Mantenha um tom amigável e profissional. Seja conciso mas completo nas respostas.

${context ? `FAQ Disponível:\n${context}` : 'Nenhum FAQ correspondente encontrado. Pesquise informações relevantes.'}`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'Limite de requisições excedido. Por favor, tente novamente em alguns instantes.' 
          }), 
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'Créditos insuficientes. Por favor, adicione créditos ao seu workspace Lovable.' 
          }), 
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const errorText = await response.text();
      console.error('Erro da API:', response.status, errorText);
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log('Resposta gerada com sucesso');

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erro no chat-faq:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Erro desconhecido',
        fallback: 'Desculpe, estou tendo dificuldades no momento. Por favor, entre em contato com suporte@mr3x.com.br para obter ajuda.'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});