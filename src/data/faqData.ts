export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqData: FAQItem[] = [
  // Cadastro e Conta
  {
    question: "Como faço para criar uma conta na MR3X?",
    answer: "Acesse o site www.mr3x.com.br, clique em 'Criar Conta' e preencha seus dados: nome, e-mail, senha, tipo de perfil (Inquilino, Proprietário, Gestor ou Imobiliária).",
    category: "Cadastro e Conta",
    keywords: ["criar", "conta", "cadastro", "registrar", "novo"]
  },
  {
    question: "Quais dados são obrigatórios no cadastro?",
    answer: "Nome completo, CPF/CNPJ, e-mail válido, número de celular e senha. No caso de empresas, o CNPJ e razão social também são obrigatórios.",
    category: "Cadastro e Conta",
    keywords: ["dados", "obrigatório", "cadastro", "cpf", "cnpj", "email"]
  },
  {
    question: "Posso cadastrar mais de um imóvel em um único perfil?",
    answer: "Sim. Os planos pagos permitem múltiplos imóveis por usuário, e o plano gratuito aceita até 1 imóvel.",
    category: "Cadastro e Conta",
    keywords: ["imóvel", "múltiplos", "vários", "plano"]
  },
  {
    question: "Como altero meu e-mail cadastrado?",
    answer: "Vá em 'Minha Conta' > 'Configurações' > 'Alterar E-mail'. Um código de verificação será enviado para o novo endereço.",
    category: "Cadastro e Conta",
    keywords: ["alterar", "mudar", "email", "trocar"]
  },
  {
    question: "Como faço para alterar minha senha?",
    answer: "No menu superior, acesse 'Minha Conta' > 'Segurança' > 'Alterar senha'. É necessário digitar a senha atual.",
    category: "Cadastro e Conta",
    keywords: ["senha", "alterar", "mudar", "segurança"]
  },
  {
    question: "Posso excluir minha conta da plataforma?",
    answer: "Sim. Entre em contato com suporte@mr3x.com.br ou vá em 'Minha Conta' > 'Privacidade' > 'Excluir Conta'.",
    category: "Cadastro e Conta",
    keywords: ["excluir", "deletar", "remover", "conta"]
  },
  {
    question: "A conta é gratuita?",
    answer: "Sim, o plano Free oferece funcionalidades básicas sem custo. Os planos pagos ampliam funcionalidades e suporte.",
    category: "Cadastro e Conta",
    keywords: ["gratuito", "grátis", "free", "plano", "custo"]
  },
  
  // Cobrança e Pagamentos
  {
    question: "Como crio uma cobrança mensal para um imóvel?",
    answer: "Acesse o painel do imóvel desejado > clique em 'Nova Cobrança' > selecione o tipo (boleto, Pix, cartão), defina a data de vencimento e valor. Você pode programar recorrência mensal.",
    category: "Cobrança e Pagamentos",
    keywords: ["cobrança", "mensal", "criar", "boleto", "pix"]
  },
  {
    question: "O sistema gera cobranças automaticamente todo mês?",
    answer: "Sim. Se o imóvel estiver com locação ativa e opção de recorrência habilitada, a cobrança será gerada de forma automática com base nas configurações.",
    category: "Cobrança e Pagamentos",
    keywords: ["automático", "recorrente", "mensal", "cobrança"]
  },
  {
    question: "O que acontece se o inquilino atrasar o pagamento?",
    answer: "A plataforma envia notificações por e-mail e WhatsApp, calcula multa e juros conforme configurado e, se habilitado, oferece acordo com desconto automático.",
    category: "Cobrança e Pagamentos",
    keywords: ["atraso", "inadimplente", "multa", "juros"]
  },
  {
    question: "A cobrança pode ser feita via cartão de crédito?",
    answer: "Sim. Basta habilitar a opção no plano pago e ativar o meio de pagamento.",
    category: "Cobrança e Pagamentos",
    keywords: ["cartão", "crédito", "pagamento"]
  },
  {
    question: "É possível fazer split de valores entre gestor e proprietário?",
    answer: "Sim. Ao ativar o split na cobrança, a MR3X direciona automaticamente os valores conforme o percentual configurado.",
    category: "Cobrança e Pagamentos",
    keywords: ["split", "dividir", "repasse", "gestor", "proprietário"]
  },
  {
    question: "Como vejo se um pagamento foi compensado?",
    answer: "Acesse o painel do imóvel ou inquilino e veja o status da cobrança: 'Pendente', 'Pago', 'Atrasado' ou 'Compensado'.",
    category: "Cobrança e Pagamentos",
    keywords: ["compensado", "pago", "status", "pagamento"]
  },
  {
    question: "Posso aplicar multa por atraso?",
    answer: "Sim. Você pode configurar multa fixa (ex: 2%) e juros diários (ex: 0,033%).",
    category: "Cobrança e Pagamentos",
    keywords: ["multa", "atraso", "juros", "configurar"]
  },
  {
    question: "Como funciona o acordo automático?",
    answer: "Após um número de dias de atraso, o sistema pode oferecer um link ao inquilino com proposta de acordo (com desconto sobre juros e multa). Ao aceitar, o sistema registra e envia novo boleto.",
    category: "Cobrança e Pagamentos",
    keywords: ["acordo", "negociação", "desconto", "atraso"]
  },

  // Planos e Assinaturas
  {
    question: "Quais são os planos disponíveis na MR3X?",
    answer: "Oferecemos: Free (até 1 imóvel com funcionalidades básicas), Essencial (até 5 imóveis), Profissional (até 20 imóveis com acordos automáticos), e Imobiliária (uso ilimitado).",
    category: "Planos e Assinaturas",
    keywords: ["planos", "valores", "preço", "assinatura"]
  },
  {
    question: "Como faço upgrade do meu plano?",
    answer: "Acesse 'Minha Conta' > 'Assinatura' > selecione o novo plano desejado e siga as instruções de pagamento.",
    category: "Planos e Assinaturas",
    keywords: ["upgrade", "melhorar", "plano", "trocar"]
  },
  {
    question: "O plano Free é mesmo gratuito?",
    answer: "Sim. O plano Free é gratuito, mas possui limitações de funcionalidades (1 imóvel, sem notificações via WhatsApp, relatórios simplificados).",
    category: "Planos e Assinaturas",
    keywords: ["free", "gratuito", "grátis", "limitações"]
  },
  {
    question: "Posso testar um plano pago gratuitamente?",
    answer: "Sim. Oferecemos 7 dias de teste do plano Profissional. Basta selecionar 'Teste Grátis' no momento do cadastro.",
    category: "Planos e Assinaturas",
    keywords: ["teste", "trial", "grátis", "experimentar"]
  },
  {
    question: "Existe fidelidade ou multa por cancelamento?",
    answer: "Não. Você pode cancelar a qualquer momento. O acesso permanece até o final do ciclo vigente.",
    category: "Planos e Assinaturas",
    keywords: ["cancelar", "fidelidade", "multa", "desistir"]
  },
  {
    question: "A MR3X oferece descontos para planos anuais?",
    answer: "Sim. O pagamento anual oferece até 20% de desconto em relação à mensalidade.",
    category: "Planos e Assinaturas",
    keywords: ["desconto", "anual", "economia", "ano"]
  },

  // Funcionalidades da Plataforma
  {
    question: "Quais são as principais funcionalidades da MR3X?",
    answer: "A plataforma permite: gestão de cobranças, emissão de boletos/Pix/cartão, notificações automatizadas, acordos extrajudiciais, assinatura digital de contratos, relatórios financeiros, dashboards por perfil, e integração com APIs.",
    category: "Funcionalidades",
    keywords: ["funcionalidades", "recursos", "features", "o que faz"]
  },
  {
    question: "A MR3X funciona em qualquer dispositivo?",
    answer: "Sim. A plataforma é responsiva e otimizada para uso em navegador web (desktop e mobile), com tecnologia PWA (funciona como app sem precisar baixar da loja).",
    category: "Funcionalidades",
    keywords: ["mobile", "celular", "dispositivo", "app", "responsivo"]
  },
  {
    question: "O sistema mostra relatórios financeiros por imóvel?",
    answer: "Sim. Você pode filtrar por imóvel, inquilino ou período. O relatório exibe valores cobrados, pagos, inadimplência, acordos e taxas.",
    category: "Funcionalidades",
    keywords: ["relatório", "financeiro", "imóvel", "análise"]
  },
  {
    question: "Como funciona a assinatura digital de contratos?",
    answer: "Por integração com APIs (ex: Clicksign), você cadastra o contrato e envia para inquilino assinar digitalmente. Tudo com validade jurídica.",
    category: "Funcionalidades",
    keywords: ["assinatura", "digital", "contrato", "eletrônica"]
  },
  {
    question: "A MR3X envia notificações automáticas?",
    answer: "Sim. Você configura dias antes e depois do vencimento, além de notificações em acordos e reemissão de boletos.",
    category: "Funcionalidades",
    keywords: ["notificação", "aviso", "alerta", "automático"]
  },
  {
    question: "Tem como o proprietário ou gestor se comunicar com o inquilino pela plataforma?",
    answer: "Sim. Há um módulo de mensagens estilo chat, com histórico por imóvel.",
    category: "Funcionalidades",
    keywords: ["mensagem", "comunicação", "chat", "falar"]
  }
];

export const searchFAQ = (query: string): FAQItem[] => {
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(' ').filter(word => word.length > 2);
  
  return faqData.filter(item => {
    const questionLower = item.question.toLowerCase();
    const answerLower = item.answer.toLowerCase();
    const keywordsLower = item.keywords.join(' ').toLowerCase();
    
    return words.some(word => 
      questionLower.includes(word) || 
      answerLower.includes(word) || 
      keywordsLower.includes(word)
    );
  }).slice(0, 5);
};