export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqCategories = [
  "Planos e Assinaturas",
  "CRUD e Gestão",
  "Pagamentos e Split",
  "Contratos e Documentos",
  "Agência e Hierarquia",
  "Problemas Técnicos",
  "Contratos Digitais e Assinaturas",
  "Validações e Cadastros",
  "Índices, Multas e Despesas",
  "Hierarquia de Usuários",
  "Operações Financeiras e Split",
  "ACL e Permissões",
  "Fluxogramas e Arquitetura"
];

export const faqData: FAQItem[] = [
  // Planos e Assinaturas (1-25)
  {
    question: "O que acontece se minha agência ultrapassar o limite de propriedades do plano contratado?",
    answer: "As propriedades excedentes continuam salvas, porém entram em modo congelado (somente leitura). Para utilizá-las, é necessário fazer upgrade para um plano superior.",
    category: "Planos e Assinaturas",
    keywords: ["limite", "propriedades", "plano", "ultrapassar", "exceder"]
  },
  {
    question: "Posso perder dados se eu fizer downgrade para o plano FREE?",
    answer: "Não. A MR3X nunca apaga dados. Tudo é apenas bloqueado e congelado até upgrade.",
    category: "Planos e Assinaturas",
    keywords: ["downgrade", "dados", "free", "perder", "apagar"]
  },
  {
    question: "O plano FREE permite realmente apenas 1 imóvel ativo?",
    answer: "Sim. Mesmo se você tiver 200 cadastrados, somente 1 poderá ser ativado e operado.",
    category: "Planos e Assinaturas",
    keywords: ["free", "imóvel", "ativo", "limite"]
  },
  {
    question: "Quantos usuários posso ter no plano FREE para agência?",
    answer: "Até 5 usuários ativos. Os demais ficam desativados automaticamente.",
    category: "Planos e Assinaturas",
    keywords: ["free", "usuários", "agência", "limite"]
  },
  {
    question: "No FREE, quantos usuários o proprietário independente pode ter?",
    answer: "O proprietário independente pode manter apenas 2 usuários ativos.",
    category: "Planos e Assinaturas",
    keywords: ["free", "proprietário", "independente", "usuários"]
  },
  {
    question: "O que acontece com usuários excedentes do plano?",
    answer: "Eles são desativados, não podem entrar na conta e não aparecem para novas operações.",
    category: "Planos e Assinaturas",
    keywords: ["usuários", "excedentes", "desativados", "limite"]
  },
  {
    question: "Posso escolher quais usuários permanecerão ativos no FREE?",
    answer: "Sim. A agência pode selecionar manualmente quais perfis ficam ativos.",
    category: "Planos e Assinaturas",
    keywords: ["escolher", "usuários", "ativos", "free"]
  },
  {
    question: "Como faço upgrade de plano dentro da MR3X?",
    answer: "Basta acessar Configurações → Planos e selecionar o plano desejado. O Asaas processará o pagamento automaticamente.",
    category: "Planos e Assinaturas",
    keywords: ["upgrade", "plano", "como", "mudar"]
  },
  {
    question: "O upgrade é imediato após o pagamento?",
    answer: "Sim. Após compensação, a MR3X libera as funcionalidades imediatamente.",
    category: "Planos e Assinaturas",
    keywords: ["upgrade", "imediato", "pagamento"]
  },
  {
    question: "O que acontece se o pagamento atrasar?",
    answer: "O sistema retorna para o plano FREE e aplica as restrições automaticamente.",
    category: "Planos e Assinaturas",
    keywords: ["pagamento", "atraso", "free", "retornar"]
  },
  {
    question: "Se eu voltar para o plano pago, meus dados congelados reativam?",
    answer: "Sim. Tudo é reativado instantaneamente, sem perda.",
    category: "Planos e Assinaturas",
    keywords: ["voltar", "pago", "reativar", "dados"]
  },
  {
    question: "No plano Essential posso usar API?",
    answer: "Não. API é liberada apenas no Professional e Enterprise.",
    category: "Planos e Assinaturas",
    keywords: ["essential", "api", "acesso"]
  },
  {
    question: "O que é 'imóvel ativo' no plano FREE?",
    answer: "É o único imóvel que pode receber cobranças, contratos, boletos e vistorias.",
    category: "Planos e Assinaturas",
    keywords: ["imóvel", "ativo", "free", "definição"]
  },
  {
    question: "Posso alternar o imóvel ativo no FREE?",
    answer: "Sim, mas apenas um por vez. Ao ativar um, o outro congela.",
    category: "Planos e Assinaturas",
    keywords: ["alternar", "imóvel", "ativo", "free"]
  },
  {
    question: "O que significa 'propriedade congelada'?",
    answer: "O imóvel fica visível, mas não permite edição, emissão de boletos, criação de contratos nem envio de cobranças.",
    category: "Planos e Assinaturas",
    keywords: ["propriedade", "congelada", "significado"]
  },
  {
    question: "Quantos imóveis posso cadastrar no plano Enterprise?",
    answer: "Até 500 imóveis ativos, com possibilidade de expansão sob negociação.",
    category: "Planos e Assinaturas",
    keywords: ["enterprise", "imóveis", "limite"]
  },
  {
    question: "Qual a diferença entre limite de propriedades e limite de usuários?",
    answer: "Propriedades representam imóveis gerenciados; usuários representam pessoas acessando a plataforma.",
    category: "Planos e Assinaturas",
    keywords: ["diferença", "propriedades", "usuários"]
  },
  {
    question: "A MR3X cobra taxa sobre repasses?",
    answer: "Não. A MR3X só retém as taxas do serviço e o restante vai para a agência ou proprietário.",
    category: "Planos e Assinaturas",
    keywords: ["taxa", "repasse", "cobra"]
  },
  {
    question: "O plano FREE tem suporte prioritário?",
    answer: "Não. Apenas suporte via e-mail com tempo prolongado.",
    category: "Planos e Assinaturas",
    keywords: ["free", "suporte", "prioritário"]
  },
  {
    question: "Quais planos têm relatórios avançados?",
    answer: "A partir do plano Professional.",
    category: "Planos e Assinaturas",
    keywords: ["relatórios", "avançados", "professional"]
  },
  {
    question: "O que acontece se meu cartão expirar?",
    answer: "O sistema tenta cobrar novamente. Se falhar, você retorna ao FREE.",
    category: "Planos e Assinaturas",
    keywords: ["cartão", "expirar", "pagamento"]
  },
  {
    question: "Posso pagar o plano anual com desconto?",
    answer: "Sim, o Admin MR3X pode liberar planos anuais para agências.",
    category: "Planos e Assinaturas",
    keywords: ["anual", "desconto", "plano"]
  },
  {
    question: "A troca de plano afeta meus contratos existentes?",
    answer: "Não. Os contratos permanecem intactos, mas podem ficar inoperantes se estiverem vinculados a imóveis congelados.",
    category: "Planos e Assinaturas",
    keywords: ["troca", "plano", "contratos", "afetar"]
  },
  {
    question: "A MR3X oferece teste grátis dos planos pagos?",
    answer: "Sim, por tempo limitado mediante ativação da equipe comercial.",
    category: "Planos e Assinaturas",
    keywords: ["teste", "grátis", "trial"]
  },
  {
    question: "A MR3X permite white-label?",
    answer: "Sim, mas exclusivamente no plano Enterprise.",
    category: "Planos e Assinaturas",
    keywords: ["white-label", "marca", "enterprise"]
  },
  
  // CRUD (26-50)
  {
    question: "Posso excluir um imóvel que possui contrato ativo?",
    answer: "Não. Primeiro é necessário encerrar o contrato.",
    category: "CRUD e Gestão",
    keywords: ["excluir", "imóvel", "contrato", "ativo"]
  },
  {
    question: "Por que não consigo editar dados do imóvel?",
    answer: "Provavelmente o imóvel está congelado devido ao plano atual.",
    category: "CRUD e Gestão",
    keywords: ["editar", "imóvel", "congelado"]
  },
  {
    question: "O que significa erro 'Usuário sem permissão'?",
    answer: "O perfil não tem ACL (permissão) para operar aquela ação.",
    category: "CRUD e Gestão",
    keywords: ["erro", "permissão", "acl"]
  },
  {
    question: "Como reativo um usuário desativado?",
    answer: "Aumente o plano ou reduza o número de usuários ativos.",
    category: "CRUD e Gestão",
    keywords: ["reativar", "usuário", "desativado"]
  },
  {
    question: "Como o inquilino é criado no sistema?",
    answer: "Somente via convite enviado pela agência ou proprietário independente.",
    category: "CRUD e Gestão",
    keywords: ["inquilino", "criar", "convite"]
  },
  {
    question: "O inquilino pode editar o contrato?",
    answer: "Não. O contrato pode ser editado somente antes da assinatura.",
    category: "CRUD e Gestão",
    keywords: ["inquilino", "editar", "contrato"]
  },
  {
    question: "Como remover um usuário da agência?",
    answer: "Em Configurações → Usuários o gestor pode desativar ou remover.",
    category: "CRUD e Gestão",
    keywords: ["remover", "usuário", "agência"]
  },
  {
    question: "Por que não consigo excluir um usuário?",
    answer: "Perfis vinculados a contratos assinados não podem ser apagados, apenas desativados.",
    category: "CRUD e Gestão",
    keywords: ["excluir", "usuário", "vinculado"]
  },
  {
    question: "O corretor pode criar imóveis?",
    answer: "Depende da permissão configurada pelo gestor da agência.",
    category: "CRUD e Gestão",
    keywords: ["corretor", "criar", "imóveis"]
  },
  {
    question: "Como adiciono um proprietário vinculado?",
    answer: "O gestor ou diretor da agência cria o proprietário.",
    category: "CRUD e Gestão",
    keywords: ["adicionar", "proprietário", "vinculado"]
  },
  {
    question: "O proprietário independente pode excluir contratos?",
    answer: "Sim, desde que não haja boletos emitidos ou assinaturas finalizadas.",
    category: "CRUD e Gestão",
    keywords: ["proprietário", "excluir", "contratos"]
  },
  {
    question: "Como funciona a atualização automática de dados?",
    answer: "Os dados são atualizados em tempo real graças ao back-end Node/TypeScript.",
    category: "CRUD e Gestão",
    keywords: ["atualização", "automática", "tempo", "real"]
  },
  {
    question: "A plataforma salva histórico de alterações?",
    answer: "Sim. Todas as ações ficam registradas em logs para auditoria.",
    category: "CRUD e Gestão",
    keywords: ["histórico", "alterações", "logs"]
  },
  {
    question: "Posso subir documentos nos contratos?",
    answer: "Sim. A plataforma permite anexos PDF, imagem e documentos complementares.",
    category: "CRUD e Gestão",
    keywords: ["documentos", "anexos", "upload"]
  },
  {
    question: "A MR3X aceita upload de vídeos nas vistorias?",
    answer: "Sim, vídeos curtos podem ser anexados.",
    category: "CRUD e Gestão",
    keywords: ["vídeos", "upload", "vistorias"]
  },
  {
    question: "Como duplico um contrato?",
    answer: "O módulo permite duplicar apenas contratos ainda não assinados.",
    category: "CRUD e Gestão",
    keywords: ["duplicar", "contrato", "copiar"]
  },
  {
    question: "Posso reverter uma vistoria finalizada?",
    answer: "Não. Apenas adicionar uma complementação.",
    category: "CRUD e Gestão",
    keywords: ["reverter", "vistoria", "finalizada"]
  },
  {
    question: "Posso editar o boleto após emissão?",
    answer: "Depende do Asaas. Boletos vencidos não permitem edição de valor.",
    category: "CRUD e Gestão",
    keywords: ["editar", "boleto", "emissão"]
  },
  {
    question: "O que é 'modo leitura' em imóveis?",
    answer: "Permite visualizar, mas não editar ou gerar novas operações.",
    category: "CRUD e Gestão",
    keywords: ["modo", "leitura", "imóveis"]
  },
  {
    question: "Como remover o síndico de um imóvel?",
    answer: "O gestor pode excluir ou substituir no painel do imóvel.",
    category: "CRUD e Gestão",
    keywords: ["remover", "síndico", "imóvel"]
  },
  {
    question: "O inquilino pode alterar dados pessoais?",
    answer: "Sim, após validação de e-mail ou WhatsApp.",
    category: "CRUD e Gestão",
    keywords: ["inquilino", "alterar", "dados"]
  },
  {
    question: "O corretor pode criar inquilinos?",
    answer: "Não. Apenas agência ou proprietário independente.",
    category: "CRUD e Gestão",
    keywords: ["corretor", "criar", "inquilinos"]
  },
  {
    question: "Por que não consigo emitir contrato?",
    answer: "Possíveis causas: imóvel congelado, plano FREE, ou falta de campos obrigatórios.",
    category: "CRUD e Gestão",
    keywords: ["emitir", "contrato", "erro"]
  },
  {
    question: "Como apago uma propriedade congelada?",
    answer: "É necessário primeiro reativá-la e depois excluir (se permitido).",
    category: "CRUD e Gestão",
    keywords: ["apagar", "propriedade", "congelada"]
  },
  {
    question: "Por que não consigo cadastrar mais usuários?",
    answer: "Seu plano atingiu o número máximo permitido.",
    category: "CRUD e Gestão",
    keywords: ["cadastrar", "usuários", "limite"]
  },

  // Pagamentos e Split (51-75)
  {
    question: "Como funciona o split do Asaas para repasses?",
    answer: "A MR3X retém somente a taxa de serviço; o restante vai para agência/proprietário.",
    category: "Pagamentos e Split",
    keywords: ["split", "asaas", "repasses"]
  },
  {
    question: "O dinheiro passa pela MR3X?",
    answer: "Não. A MR3X não retém valores de aluguel.",
    category: "Pagamentos e Split",
    keywords: ["dinheiro", "passa", "mr3x"]
  },
  {
    question: "Quem configura o repasse no Asaas?",
    answer: "A agência configura para cada proprietário ligado.",
    category: "Pagamentos e Split",
    keywords: ["configura", "repasse", "asaas"]
  },
  {
    question: "O que acontece se o split for configurado errado?",
    answer: "O repasse pode ir para pessoa errada. É responsabilidade da agência corrigir.",
    category: "Pagamentos e Split",
    keywords: ["split", "errado", "configuração"]
  },
  {
    question: "Posso emitir boleto manualmente?",
    answer: "Sim, desde que o imóvel esteja ativo.",
    category: "Pagamentos e Split",
    keywords: ["emitir", "boleto", "manual"]
  },
  {
    question: "O inquilino recebe o boleto automaticamente?",
    answer: "Sim, por e-mail ou WhatsApp.",
    category: "Pagamentos e Split",
    keywords: ["inquilino", "boleto", "automático"]
  },
  {
    question: "Existe taxa de emissão de boleto?",
    answer: "Sim, a taxa é repassada pela Asaas conforme tabela vigente.",
    category: "Pagamentos e Split",
    keywords: ["taxa", "boleto", "emissão"]
  },
  {
    question: "O split funciona para PIX?",
    answer: "Sim, PIX também pode ser configurado com split.",
    category: "Pagamentos e Split",
    keywords: ["split", "pix", "funciona"]
  },
  {
    question: "Posso alterar o valor do aluguel depois do boleto emitido?",
    answer: "Não, é necessário cancelar e emitir outro.",
    category: "Pagamentos e Split",
    keywords: ["alterar", "valor", "boleto"]
  },
  {
    question: "O que acontece quando o boleto vence?",
    answer: "Pode gerar multa automática configurada no contrato.",
    category: "Pagamentos e Split",
    keywords: ["boleto", "vence", "multa"]
  },
  {
    question: "Posso aplicar juros diferentes?",
    answer: "Sim, o contrato permite configurar taxas personalizadas.",
    category: "Pagamentos e Split",
    keywords: ["juros", "diferentes", "taxas"]
  },
  {
    question: "A MR3X tem taxa fixa?",
    answer: "Sim, taxa de serviço definida conforme plano.",
    category: "Pagamentos e Split",
    keywords: ["taxa", "fixa", "mr3x"]
  },
  {
    question: "Como recebo comprovantes de repasse?",
    answer: "O sistema envia automaticamente ao proprietário via e-mail.",
    category: "Pagamentos e Split",
    keywords: ["comprovantes", "repasse", "receber"]
  },
  {
    question: "Posso pagar aluguel por cartão?",
    answer: "Sim, desde que o proprietário habilite no Asaas.",
    category: "Pagamentos e Split",
    keywords: ["pagar", "cartão", "aluguel"]
  },
  {
    question: "A MR3X permite cobrança recorrente?",
    answer: "Sim, via fatura mensal automatizada.",
    category: "Pagamentos e Split",
    keywords: ["cobrança", "recorrente", "mensal"]
  },
  {
    question: "Como faço reembolso?",
    answer: "Reembolso é feito pela Asaas, não pela MR3X.",
    category: "Pagamentos e Split",
    keywords: ["reembolso", "asaas", "fazer"]
  },
  {
    question: "A MR3X gera nota fiscal?",
    answer: "Sim, a Asaas gera a nota fiscal automática.",
    category: "Pagamentos e Split",
    keywords: ["nota", "fiscal", "gerar"]
  },
  {
    question: "O proprietário independente precisa de Asaas?",
    answer: "Sim, é obrigatório para operacionalizar pagamentos.",
    category: "Pagamentos e Split",
    keywords: ["proprietário", "asaas", "obrigatório"]
  },
  {
    question: "Posso usar outra plataforma de pagamento?",
    answer: "Não, a integração oficial é Asaas.",
    category: "Pagamentos e Split",
    keywords: ["plataforma", "pagamento", "outra"]
  },
  {
    question: "O split funciona quando há vários proprietários?",
    answer: "Sim, o contrato permite divisão proporcional.",
    category: "Pagamentos e Split",
    keywords: ["split", "vários", "proprietários"]
  },
  {
    question: "A MR3X cobra por repasse?",
    answer: "Não, apenas taxa de serviço da plataforma.",
    category: "Pagamentos e Split",
    keywords: ["cobra", "repasse", "taxa"]
  },
  {
    question: "Posso configurar desconto por antecipação?",
    answer: "Sim, via painel de cobrança.",
    category: "Pagamentos e Split",
    keywords: ["desconto", "antecipação", "configurar"]
  },
  {
    question: "O inquilino consegue parcelar o aluguel?",
    answer: "Depende do Asaas e das regras da agência.",
    category: "Pagamentos e Split",
    keywords: ["parcelar", "aluguel", "inquilino"]
  },
  {
    question: "Há recibo automático após pagamento?",
    answer: "Sim, enviado por e-mail ou WhatsApp.",
    category: "Pagamentos e Split",
    keywords: ["recibo", "automático", "pagamento"]
  },
  {
    question: "Como funciona multa por atraso?",
    answer: "O contrato define percentual, aplicado automaticamente.",
    category: "Pagamentos e Split",
    keywords: ["multa", "atraso", "funciona"]
  },

  // Contratos e Documentos (76-100)
  {
    question: "Como funciona a assinatura digital?",
    answer: "Assinatura com hash, IP, token e registro auditado.",
    category: "Contratos e Documentos",
    keywords: ["assinatura", "digital", "funciona"]
  },
  {
    question: "Posso alterar o contrato depois da assinatura?",
    answer: "Não. Somente aditivos.",
    category: "Contratos e Documentos",
    keywords: ["alterar", "contrato", "assinatura"]
  },
  {
    question: "O que é hash do contrato?",
    answer: "Um código único que garante autenticidade e integridade.",
    category: "Contratos e Documentos",
    keywords: ["hash", "contrato", "código"]
  },
  {
    question: "O QR Code no PDF serve para quê?",
    answer: "Para validar assinatura, identidade e integridade do documento.",
    category: "Contratos e Documentos",
    keywords: ["qr", "code", "pdf", "validar"]
  },
  {
    question: "Quantas partes podem assinar um contrato?",
    answer: "Ilimitadas, desde que incluídas.",
    category: "Contratos e Documentos",
    keywords: ["partes", "assinar", "contrato"]
  },
  {
    question: "O corretor precisa ter CRECI?",
    answer: "Sim, obrigatório para assinar como intermediador.",
    category: "Contratos e Documentos",
    keywords: ["corretor", "creci", "obrigatório"]
  },
  {
    question: "Posso gerar contrato sem vistoria?",
    answer: "Sim, mas não é recomendado.",
    category: "Contratos e Documentos",
    keywords: ["gerar", "contrato", "vistoria"]
  },
  {
    question: "A vistoria tem validade jurídica?",
    answer: "Sim, é anexada ao contrato com hash.",
    category: "Contratos e Documentos",
    keywords: ["vistoria", "validade", "jurídica"]
  },
  {
    question: "Quem pode assinar vistoria?",
    answer: "Inquilino, proprietário e corretor.",
    category: "Contratos e Documentos",
    keywords: ["assinar", "vistoria", "quem"]
  },
  {
    question: "Posso enviar contrato para assinatura via WhatsApp?",
    answer: "Sim, link seguro é enviado ao contato validado.",
    category: "Contratos e Documentos",
    keywords: ["enviar", "contrato", "whatsapp"]
  },
  {
    question: "É possível acompanhar quem assinou?",
    answer: "Sim, painel exibe status em tempo real.",
    category: "Contratos e Documentos",
    keywords: ["acompanhar", "assinou", "status"]
  },
  {
    question: "O que é certificação MR3X?",
    answer: "Validação legal do documento com hash e QR Code.",
    category: "Contratos e Documentos",
    keywords: ["certificação", "mr3x", "validação"]
  },
  {
    question: "Posso anexar fotos ilimitadas na vistoria?",
    answer: "Sim, dentro do limite de tamanho.",
    category: "Contratos e Documentos",
    keywords: ["anexar", "fotos", "vistoria"]
  },
  {
    question: "A plataforma aceita documentos em PNG, JPG e PDF?",
    answer: "Sim.",
    category: "Contratos e Documentos",
    keywords: ["documentos", "png", "jpg", "pdf"]
  },
  {
    question: "O síndico precisa assinar algo?",
    answer: "Não. Ele fornece informações apenas.",
    category: "Contratos e Documentos",
    keywords: ["síndico", "assinar", "precisa"]
  },
  {
    question: "Posso cancelar contrato já assinado?",
    answer: "Sim, desde que ambas as partes concordem (rescisão).",
    category: "Contratos e Documentos",
    keywords: ["cancelar", "contrato", "assinado"]
  },
  {
    question: "Contrato pode ser exportado?",
    answer: "Sim, via PDF.",
    category: "Contratos e Documentos",
    keywords: ["exportar", "contrato", "pdf"]
  },
  {
    question: "Há marca d'água da MR3X?",
    answer: "Nos planos FREE, sim. Nos pagos, não.",
    category: "Contratos e Documentos",
    keywords: ["marca", "água", "free"]
  },
  {
    question: "Posso adicionar testemunhas?",
    answer: "Sim.",
    category: "Contratos e Documentos",
    keywords: ["adicionar", "testemunhas", "contrato"]
  },
  {
    question: "Posso anexar laudos externos?",
    answer: "Sim, como PDF.",
    category: "Contratos e Documentos",
    keywords: ["anexar", "laudos", "externos"]
  },
  {
    question: "A vistoria final compara com a inicial?",
    answer: "Sim, o sistema mostra comparações.",
    category: "Contratos e Documentos",
    keywords: ["vistoria", "final", "inicial", "comparar"]
  },
  {
    question: "Posso gerar checklist personalizado?",
    answer: "Sim, a plataforma permite customização.",
    category: "Contratos e Documentos",
    keywords: ["checklist", "personalizado", "gerar"]
  },
  {
    question: "O contrato tem validade internacional?",
    answer: "Assinaturas digitais são aceitas conforme legislação local.",
    category: "Contratos e Documentos",
    keywords: ["validade", "internacional", "contrato"]
  },
  {
    question: "Há histórico de alterações?",
    answer: "Sim, tudo auditado.",
    category: "Contratos e Documentos",
    keywords: ["histórico", "alterações", "auditado"]
  },
  {
    question: "Como valido um contrato baixado?",
    answer: "Via QR Code ou hash na MR3X.",
    category: "Contratos e Documentos",
    keywords: ["validar", "contrato", "baixado"]
  },

  // Agência e Hierarquia (101-125)
  {
    question: "Qual a diferença entre proprietário e proprietário independente?",
    answer: "Um usa agência; o outro opera sozinho na MR3X.",
    category: "Agência e Hierarquia",
    keywords: ["diferença", "proprietário", "independente"]
  },
  {
    question: "O proprietário independente pode contratar plano?",
    answer: "Sim, igual às agências.",
    category: "Agência e Hierarquia",
    keywords: ["proprietário", "plano", "contratar"]
  },
  {
    question: "O que o corretor pode acessar?",
    answer: "Somente imóveis atribuídos a ele.",
    category: "Agência e Hierarquia",
    keywords: ["corretor", "acessar", "permissões"]
  },
  {
    question: "Quem cria o Gestor da Agência?",
    answer: "O Diretor da agência.",
    category: "Agência e Hierarquia",
    keywords: ["criar", "gestor", "agência"]
  },
  {
    question: "Quantos corretores posso ter no Essential?",
    answer: "Até 10 usuários ao total.",
    category: "Agência e Hierarquia",
    keywords: ["corretores", "essential", "limite"]
  },
  {
    question: "O Gestor pode ver dados financeiros?",
    answer: "Sim, se autorizado.",
    category: "Agência e Hierarquia",
    keywords: ["gestor", "dados", "financeiros"]
  },
  {
    question: "O corretor pode desativar imóveis?",
    answer: "Não.",
    category: "Agência e Hierarquia",
    keywords: ["corretor", "desativar", "imóveis"]
  },
  {
    question: "O síndico pode ver valores de aluguel?",
    answer: "Não.",
    category: "Agência e Hierarquia",
    keywords: ["síndico", "valores", "aluguel"]
  },
  {
    question: "O inquilino tem acesso aos documentos?",
    answer: "Sim, somente aos dele.",
    category: "Agência e Hierarquia",
    keywords: ["inquilino", "documentos", "acesso"]
  },
  {
    question: "O CEO MR3X pode acessar contas de clientes?",
    answer: "Não. Apenas leitura técnica se autorizado para suporte.",
    category: "Agência e Hierarquia",
    keywords: ["ceo", "acessar", "contas"]
  },
  {
    question: "O Admin MR3X cria quem?",
    answer: "Auditor, Gestor MR3X, Representante e API Client.",
    category: "Agência e Hierarquia",
    keywords: ["admin", "criar", "usuários"]
  },
  {
    question: "O proprietário independente consegue gerar contrato sozinho?",
    answer: "Sim.",
    category: "Agência e Hierarquia",
    keywords: ["proprietário", "contrato", "sozinho"]
  },
  {
    question: "A agência pode cadastrar ilimitados proprietários vinculados?",
    answer: "Sim, conforme limite do plano.",
    category: "Agência e Hierarquia",
    keywords: ["agência", "proprietários", "ilimitados"]
  },
  {
    question: "O corretor assina contratos?",
    answer: "Sim, com CRECI.",
    category: "Agência e Hierarquia",
    keywords: ["corretor", "assinar", "contratos"]
  },
  {
    question: "Quem aprova cadastro de inquilino?",
    answer: "Agência ou proprietário independente.",
    category: "Agência e Hierarquia",
    keywords: ["aprovar", "inquilino", "cadastro"]
  },
  {
    question: "A MR3X faz gestão de inquilinos?",
    answer: "Não. Apenas opera como ferramenta.",
    category: "Agência e Hierarquia",
    keywords: ["mr3x", "gestão", "inquilinos"]
  },
  {
    question: "A agência é responsável por valores e cálculos?",
    answer: "Sim, não a MR3X.",
    category: "Agência e Hierarquia",
    keywords: ["agência", "responsável", "valores"]
  },
  {
    question: "O proprietário independente pode trabalhar com vários imóveis?",
    answer: "Sim, conforme seu plano.",
    category: "Agência e Hierarquia",
    keywords: ["proprietário", "vários", "imóveis"]
  },
  {
    question: "O síndico consegue editar dados?",
    answer: "Somente os referentes ao condomínio.",
    category: "Agência e Hierarquia",
    keywords: ["síndico", "editar", "dados"]
  },
  {
    question: "O Auditor MR3X pode alterar algo?",
    answer: "Nunca. Apenas vê logs.",
    category: "Agência e Hierarquia",
    keywords: ["auditor", "alterar", "logs"]
  },
  {
    question: "A MR3X recebe aluguel?",
    answer: "Não. Apenas processa split e disponibiliza ferramentas.",
    category: "Agência e Hierarquia",
    keywords: ["mr3x", "recebe", "aluguel"]
  },
  {
    question: "O proprietário pode ter mais de um inquilino?",
    answer: "Sim, por imóvel.",
    category: "Agência e Hierarquia",
    keywords: ["proprietário", "inquilinos", "múltiplos"]
  },
  {
    question: "O corretor pode enviar notificação extrajudicial?",
    answer: "Sim, via módulo.",
    category: "Agência e Hierarquia",
    keywords: ["corretor", "notificação", "extrajudicial"]
  },
  {
    question: "O gestor pode remover corretores?",
    answer: "Sim.",
    category: "Agência e Hierarquia",
    keywords: ["gestor", "remover", "corretores"]
  },
  {
    question: "A agência consegue importar imóveis em lote?",
    answer: "Sim, via API.",
    category: "Agência e Hierarquia",
    keywords: ["agência", "importar", "lote"]
  },

  // Problemas Técnicos (126-150)
  {
    question: "O que fazer se aparecer 'Erro 500 – Internal Server Error'?",
    answer: "Tente novamente. Se persistir, envie para suporte@mr3x.com.br.",
    category: "Problemas Técnicos",
    keywords: ["erro", "500", "servidor"]
  },
  {
    question: "O que significa 'Erro 403 – Acesso Negado'?",
    answer: "Você não tem permissão para essa ação.",
    category: "Problemas Técnicos",
    keywords: ["erro", "403", "acesso"]
  },
  {
    question: "O que significa 'Erro 404 – Recurso Não Encontrado'?",
    answer: "A URL ou item não existe mais.",
    category: "Problemas Técnicos",
    keywords: ["erro", "404", "não", "encontrado"]
  },
  {
    question: "A plataforma está lenta, o que fazer?",
    answer: "Pode ser internet, cache ou carga no servidor. Recarregue.",
    category: "Problemas Técnicos",
    keywords: ["lenta", "devagar", "performance"]
  },
  {
    question: "Por que o boleto não foi enviado?",
    answer: "Possível falha da Asaas. Tente reenviar.",
    category: "Problemas Técnicos",
    keywords: ["boleto", "não", "enviado"]
  },
  {
    question: "Não recebi e-mail de validação. E agora?",
    answer: "Verifique spam e solicite novo envio.",
    category: "Problemas Técnicos",
    keywords: ["email", "validação", "não", "recebeu"]
  },
  {
    question: "O sistema não salva minhas alterações. Por quê?",
    answer: "Possível imóvel congelado ou falta de permissão.",
    category: "Problemas Técnicos",
    keywords: ["não", "salva", "alterações"]
  },
  {
    question: "Por que meu PDF sai em branco?",
    answer: "Pode ser bloqueio no navegador. Tente baixar.",
    category: "Problemas Técnicos",
    keywords: ["pdf", "branco", "vazio"]
  },
  {
    question: "O QR Code não abre. Por quê?",
    answer: "Documento pode ter sido modificado externamente.",
    category: "Problemas Técnicos",
    keywords: ["qr", "code", "não", "abre"]
  },
  {
    question: "Não consigo fazer login.",
    answer: "Pode ser usuário desativado ou plano FREE limitando acesso.",
    category: "Problemas Técnicos",
    keywords: ["login", "não", "consigo"]
  },
  {
    question: "Não consigo convidar inquilino.",
    answer: "Verifique se o imóvel está ativo.",
    category: "Problemas Técnicos",
    keywords: ["convidar", "inquilino", "não", "consigo"]
  },
  {
    question: "Plataforma travou ao enviar fotos.",
    answer: "Tamanho excedeu o limite. Reduza a imagem.",
    category: "Problemas Técnicos",
    keywords: ["travou", "fotos", "upload"]
  },
  {
    question: "Não aparece API. Por quê?",
    answer: "Somente Professional e Enterprise têm acesso.",
    category: "Problemas Técnicos",
    keywords: ["api", "não", "aparece"]
  },
  {
    question: "O split não foi aplicado.",
    answer: "Verifique se o proprietário está configurado na Asaas.",
    category: "Problemas Técnicos",
    keywords: ["split", "não", "aplicado"]
  },
  {
    question: "Inquilino diz que pagou, mas não aparece.",
    answer: "Aguarde compensação da Asaas.",
    category: "Problemas Técnicos",
    keywords: ["pagou", "não", "aparece"]
  },
  {
    question: "Documento não assina.",
    answer: "Alguma parte não validou e-mail/WhatsApp.",
    category: "Problemas Técnicos",
    keywords: ["documento", "não", "assina"]
  },
  {
    question: "Erro 'Contrato inválido'.",
    answer: "Campo obrigatório faltando.",
    category: "Problemas Técnicos",
    keywords: ["contrato", "inválido", "erro"]
  },
  {
    question: "Assinatura travada.",
    answer: "Sessão pode ter expirado. Recarregue.",
    category: "Problemas Técnicos",
    keywords: ["assinatura", "travada", "sessão"]
  },
  {
    question: "Notificação extrajudicial não foi enviada.",
    answer: "Número de WhatsApp inválido.",
    category: "Problemas Técnicos",
    keywords: ["notificação", "não", "enviada"]
  },
  {
    question: "Recibo não chegou.",
    answer: "O servidor de e-mail pode ter bloqueado.",
    category: "Problemas Técnicos",
    keywords: ["recibo", "não", "chegou"]
  },
  {
    question: "Erro ao ativar imóvel.",
    answer: "Você já atingiu o limite do plano.",
    category: "Problemas Técnicos",
    keywords: ["ativar", "imóvel", "erro"]
  },
  {
    question: "Não consigo alterar data de vencimento.",
    answer: "Boleto já emitido pela Asaas.",
    category: "Problemas Técnicos",
    keywords: ["alterar", "vencimento", "boleto"]
  },
  {
    question: "Erro ao gerar vistoria.",
    answer: "Imóvel congelado ou usuário sem permissão.",
    category: "Problemas Técnicos",
    keywords: ["vistoria", "erro", "gerar"]
  },
  {
    question: "Plataforma deslogando sozinha.",
    answer: "Sessão expirou por segurança.",
    category: "Problemas Técnicos",
    keywords: ["deslogando", "sessão", "expira"]
  },
  {
    question: "Como reporto um erro crítico?",
    answer: "Envie para suporte@mr3x.com.br com print e descrição.",
    category: "Problemas Técnicos",
    keywords: ["reportar", "erro", "crítico"]
  },
  
  // Novas perguntas sobre lógica de planos e limites
  {
    question: "O que significa 'imóvel congelado' ou 'modo somente leitura'?",
    answer: "Quando você ultrapassa o limite de imóveis do seu plano, os imóveis excedentes ficam visíveis mas bloqueados para edição, emissão de boletos, criação de contratos e envio de cobranças. Seus dados não são perdidos, apenas ficam temporariamente inacessíveis até fazer upgrade do plano.",
    category: "Planos e Assinaturas",
    keywords: ["congelado", "bloqueado", "somente leitura", "modo", "imóvel"]
  },
  {
    question: "O que acontece quando um usuário é desativado por limite de plano?",
    answer: "Usuários desativados podem visualizar informações, mas não podem criar, editar ou excluir nada. Eles também não conseguem se autenticar no sistema e não aparecem em novas operações. Os dados do usuário não são perdidos.",
    category: "Planos e Assinaturas",
    keywords: ["usuário", "desativado", "limite", "plano", "bloqueado"]
  },
  {
    question: "Como funciona o pré-cadastro na MR3X?",
    answer: "No pré-cadastro, você escolhe entre criar uma Agência (PJ) ou Proprietário Independente (PF/PJ). Após preencher os dados básicos e confirmar e-mail/WhatsApp, você entra automaticamente no Plano FREE. Os demais planos (Essential, Professional, Enterprise) ficam disponíveis somente após entrar no painel.",
    category: "Planos e Assinaturas",
    keywords: ["pré-cadastro", "cadastro", "registro", "criar conta", "plano free"]
  },
  {
    question: "A migração de plano é automática após o pagamento?",
    answer: "Sim. Quando você escolhe um plano e realiza o pagamento via Asaas, a MR3X recebe o webhook de confirmação e muda automaticamente seu plano, limites de propriedades, limites de usuários e permissões extras. Não é necessária intervenção manual ou suporte.",
    category: "Planos e Assinaturas",
    keywords: ["migração", "upgrade", "automático", "pagamento", "plano"]
  },
  {
    question: "A MR3X retém dinheiro dos aluguéis?",
    answer: "Não. A MR3X apenas desconta automaticamente sua taxa (plano + taxas reduzidas do gateway) e envia o restante. O split de pagamento divide os valores entre as taxas MR3X, valor da agência e valor do proprietário vinculado (se aplicável). Para proprietários independentes, o split divide apenas as taxas MR3X e o valor líquido do proprietário.",
    category: "Pagamentos e Split",
    keywords: ["retém", "dinheiro", "aluguel", "split", "taxa"]
  },
  {
    question: "Qual a diferença entre usuários internos da MR3X e clientes?",
    answer: "Usuários internos (CEO, Admin, Auditor, Suporte) pertencem à operação da MR3X como empresa de tecnologia e não gerenciam imóveis, contratos ou clientes. Usuários externos (Agência, Proprietário Independente, Inquilino, Síndico) são clientes que usam a MR3X para gerir seus próprios processos imobiliários. A MR3X é apenas o intermediário tecnológico, não uma imobiliária.",
    category: "Agência e Hierarquia",
    keywords: ["usuários", "internos", "externos", "diferença", "hierarquia", "ceo", "admin"]
  },
  {
    question: "Quem pode criar o Admin da MR3X?",
    answer: "Somente o CEO (dono da plataforma) pode criar o Admin. O Admin é o administrador operacional da plataforma e responsável pela gestão do SaaS, incluindo planos, ativação/desativação de contas, monitoramento de logs e integrações.",
    category: "Agência e Hierarquia",
    keywords: ["admin", "criar", "ceo", "hierarquia"]
  },
  {
    question: "O que é o Auditor da MR3X?",
    answer: "O Auditor é um usuário interno da MR3X com acesso somente leitura. Ele verifica logs, compliance, tokens, hashes, assinaturas e transações para garantir segurança e conformidade do sistema.",
    category: "Agência e Hierarquia",
    keywords: ["auditor", "logs", "compliance", "leitura"]
  },
  {
    question: "Ao fazer upgrade, meus dados congelados são reativados?",
    answer: "Sim. Sem intervenção de suporte, sem perda de dados e sem reprocessamento. Imóveis congelados são ativados, usuários desativados são reativados, funções bloqueadas são liberadas, cobranças suspensas são retomadas e a API é reativada. Tudo automático.",
    category: "Planos e Assinaturas",
    keywords: ["upgrade", "reativar", "dados", "congelados", "automático"]
  },
  {
    question: "Posso escolher qual imóvel será o ativo no plano FREE?",
    answer: "Sim. A plataforma permite que você visualize a lista completa de imóveis e escolha qual será o único imóvel ativo. Se tentar ativar outro, aparecerá uma janela pedindo upgrade ou permitindo trocar o ativo (desativando o anterior).",
    category: "Planos e Assinaturas",
    keywords: ["escolher", "imóvel", "ativo", "free", "trocar"]
  },
  {
    question: "Por que apenas o plano FREE aparece no pré-cadastro?",
    answer: "Para simplificar o onboarding, reduzir atrito, evitar escolha incorreta e permitir testar a plataforma sem barreiras. Somente usuários autenticados podem fazer upgrade. Após entrar na plataforma, os demais planos (Essential, Professional, Enterprise) ficam disponíveis no menu Financeiro/Planos e Assinaturas.",
    category: "Planos e Assinaturas",
    keywords: ["pré-cadastro", "free", "planos", "onboarding", "upgrade"]
  },
  {
    question: "O que acontece com as cobranças de imóveis congelados?",
    answer: "Cobranças automáticas de imóveis congelados são suspensas. O sistema envia alertas informando que seu plano atual não suporta este número de imóveis e solicita renovação para reativar cobranças. Nada é apagado, apenas fica inoperante.",
    category: "Pagamentos e Split",
    keywords: ["cobranças", "imóveis", "congelados", "suspensas"]
  },
  {
    question: "A API é bloqueada no plano FREE?",
    answer: "Sim. Se a agência tiver API ativa e cair para o plano FREE, a API é automaticamente suspensa, as chaves ficam inválidas e os webhooks deixam de ser enviados. Isso impede uso indevido. A API é liberada apenas nos planos Professional e Enterprise.",
    category: "Planos e Assinaturas",
    keywords: ["api", "bloqueada", "free", "suspensa"]
  },
  {
    question: "A MR3X gerencia proprietários e imóveis dos clientes?",
    answer: "Não. A MR3X não gerencia proprietários, imóveis ou inquilinos. A MR3X é apenas o intermediário tecnológico, não uma imobiliária. Toda a relação jurídica e operacional de imóveis é responsabilidade da Agência imobiliária ou do Proprietário Independente.",
    category: "Agência e Hierarquia",
    keywords: ["gerenciar", "proprietários", "imóveis", "responsabilidade"]
  },
  {
    question: "Como a agência configura o repasse para os proprietários?",
    answer: "Dentro de cada contrato, a agência define quanto o proprietário receberá e se o repasse é percentual, valor fixo ou repasse integral. Essas configurações são usadas no split. A MR3X não interfere nos acordos entre a agência e o proprietário.",
    category: "Pagamentos e Split",
    keywords: ["repasse", "agência", "proprietário", "split", "configurar"]
  },

  // Contratos Digitais e Assinaturas
  {
    question: "Como funciona a assinatura digital na MR3X?",
    answer: "A MR3X utiliza assinatura digital com hash SHA-256, registro de IP, timestamp RFC3161 e token de autenticação. Cada documento possui metadados internos (document_id UUID, created_by, timestamp) e QR Code lateral em cada página para verificação de autenticidade. A assinatura segue o padrão PAdES (PDF Advanced Electronic Signature) compatível com ICP-Brasil.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["assinatura", "digital", "hash", "token", "pades", "icp-brasil", "segurança"]
  },
  {
    question: "O que é o hash do contrato e para que serve?",
    answer: "O hash é um código único SHA-256 gerado a partir dos bytes do documento. Ele garante autenticidade e integridade do contrato. Qualquer alteração no documento muda o hash, permitindo detectar adulterações. O hash é armazenado com timestamp e usado na verificação via QR Code.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["hash", "sha-256", "integridade", "autenticidade", "segurança", "verificação"]
  },
  {
    question: "Como funciona o QR Code no PDF do contrato?",
    answer: "Cada página do PDF possui um QR Code lateral contendo: document_id, número da página, hash SHA-256 da página, data/hora e URL de verificação. O QR Code permite validar a autenticidade do documento offline através de qualquer leitor de QR Code, direcionando para o verificador público da MR3X.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["qr code", "pdf", "verificação", "autenticidade", "validação", "documento"]
  },
  {
    question: "Posso verificar se um contrato foi adulterado?",
    answer: "Sim. Acesse o verificador público através do QR Code no documento ou em /api/v1/verify/{document_id}. O sistema recalcula o hash e compara com o original, valida assinaturas digitais PAdES, verifica carimbo de tempo TSA e retorna o status: 'valid', 'tampered', 'unsigned', 'revoked' ou 'invalid_signature'.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["verificação", "adulteração", "validação", "hash", "verificador", "segurança"]
  },
  {
    question: "O que é o token JWT e para que serve?",
    answer: "JWT (JSON Web Token) com algoritmo RS256 é usado para autenticação entre frontend, backend e microserviços. Contém: issuer (iss), user_id (sub), roles (ADMIN/OWNER/AGENCY/INQUILINO/AUDITOR), timestamps (iat/exp) e key id (kid). Token de curta duração (15-60 min) com refresh tokens criptografados em DB para ações sensíveis.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["jwt", "token", "autenticação", "rs256", "segurança", "api"]
  },
  {
    question: "Como funciona o registro de IP e trilha de auditoria?",
    answer: "Todas as ações são registradas com: timestamp UTC ISO8601, IP (v4/v6), user_agent, user_id, tipo de ação (create/edit/sign/verify), document_id, geolocalização opcional e request_id UUID. Logs são criptografados, armazenados em modo append-only (WORM) e mantidos conforme LGPD. Permite rastreamento completo de todas operações.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["ip", "auditoria", "logs", "rastreamento", "lgpd", "segurança"]
  },
  {
    question: "Quantas partes podem assinar um contrato?",
    answer: "Ilimitadas. O sistema permite incluir quantas partes forem necessárias: proprietários, inquilinos, corretores (com CRECI), testemunhas, fiadores, etc. Cada assinatura é registrada com timestamp, IP, certificado digital e hash individual. O painel exibe status em tempo real de quem assinou.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["assinatura", "partes", "múltiplos", "signatários", "contrato", "creci"]
  },
  {
    question: "Posso alterar o contrato depois da assinatura?",
    answer: "Não. Após assinatura digital, o contrato é imutável. Qualquer alteração requer criar um aditivo contratual (novo documento vinculado ao original). Isso garante integridade jurídica e validade legal. O hash e carimbo de tempo impedem modificações não autorizadas.",
    category: "Contratos Digitais e Assinaturas",
    keywords: ["alteração", "contrato", "assinado", "imutável", "aditivo", "jurídico"]
  },

  // Validações e Cadastros
  {
    question: "Como funciona a validação de CPF?",
    answer: "Utilizamos algoritmo módulo 11 com pesos decrescentes (10 a 2 para primeiro dígito, 11 a 2 para segundo). Se resultado ≥ 10, dígito = 0. O sistema remove pontuação, valida formato, calcula dígitos verificadores e bloqueia sequências repetidas (ex: 111.111.111-11). Validação conforme padrão oficial da Receita Federal.",
    category: "Validações e Cadastros",
    keywords: ["cpf", "validação", "módulo 11", "documento", "receita federal"]
  },
  {
    question: "A MR3X aceita o novo CNPJ alfanumérico?",
    answer: "Sim. A partir de julho/2026, a Receita Federal permitirá CNPJs com letras A-Z nas 12 primeiras posições (raiz e ordem do estabelecimento). Os 2 últimos dígitos verificadores continuam numéricos. Nosso sistema aceita tanto CNPJs numéricos antigos quanto os novos alfanuméricos, aplicando o algoritmo mod 11 adaptado conforme norma da Receita Federal.",
    category: "Validações e Cadastros",
    keywords: ["cnpj", "alfanumérico", "2026", "validação", "receita federal", "novo"]
  },
  {
    question: "O que é CRECI e por que é obrigatório para corretores?",
    answer: "CRECI (Conselho Regional de Corretores de Imóveis) é o registro profissional obrigatório para corretores. O cadastro na MR3X exige: número CRECI, UF, tipo (PF/PJ), documento escaneado PDF e validade. Corretores só podem assinar contratos e atuar sobre imóveis após verificação do CRECI. Todos os dados são registrados com hash e timestamp para auditoria.",
    category: "Validações e Cadastros",
    keywords: ["creci", "corretor", "registro", "validação", "obrigatório", "profissional"]
  },
  {
    question: "Como validar se um CRECI é verdadeiro?",
    answer: "A MR3X registra número CRECI, UF e documentos do corretor. A verificação pode ser manual (via auditor) ou automática se houver integração com APIs públicas. O sistema armazena: creci_verified_by (user_id do aprovador), creci_verified_at (timestamp) e hash dos documentos. Corretores não verificados ficam bloqueados para ações sensíveis.",
    category: "Validações e Cadastros",
    keywords: ["creci", "verificação", "validação", "aprovação", "corretor", "autenticação"]
  },

  // Índices, Multas e Despesas
  {
    question: "Quais índices de reajuste a MR3X suporta?",
    answer: "A MR3X suporta os principais índices oficiais: IPCA (mais recomendado, inflação oficial IBGE), IGP-M (FGV, histórico mas volátil), INPC (IBGE para renda baixa). O reajuste é feito 1 vez por ano na data de aniversário do contrato. O sistema pode aplicar reajuste automático com aviso prévio ao inquilino.",
    category: "Índices, Multas e Despesas",
    keywords: ["índice", "reajuste", "ipca", "igp-m", "inpc", "inflação", "aluguel"]
  },
  {
    question: "Como funciona a multa por atraso de pagamento?",
    answer: "Multa padrão: 2% sobre o valor do aluguel (conforme legislação) + juros diários até 1% ao mês. Os valores são configuráveis no contrato e aplicados automaticamente pelo sistema quando o boleto vence. A multa é incluída na segunda via do boleto.",
    category: "Índices, Multas e Despesas",
    keywords: ["multa", "atraso", "pagamento", "juros", "boleto", "2%"]
  },
  {
    question: "O que é multa rescisória e quando é aplicada?",
    answer: "Multa aplicada quando inquilino sai antes do prazo contratual. Geralmente equivale a 3 meses de aluguel, proporcional ao tempo restante. O valor e regras são definidos no contrato. A MR3X calcula automaticamente considerando data de saída, tempo restante e cláusulas contratuais.",
    category: "Índices, Multas e Despesas",
    keywords: ["multa", "rescisória", "quebra", "contrato", "saída antecipada", "3 meses"]
  },
  {
    question: "Quem paga IPTU: proprietário ou inquilino?",
    answer: "Responsabilidade padrão é do proprietário, mas cláusula contratual pode repassar ao inquilino. Na MR3X você configura quem paga e o sistema inclui no boleto automaticamente se for responsabilidade do inquilino. O repasse deve estar expressamente previsto no contrato.",
    category: "Índices, Multas e Despesas",
    keywords: ["iptu", "imposto", "proprietário", "inquilino", "despesa", "responsabilidade"]
  },
  {
    question: "Quem paga condomínio e taxas extraordinárias?",
    answer: "Taxa condominial mensal: paga pelo inquilino. Taxas extraordinárias (reformas, obras do prédio): responsabilidade do proprietário. O sistema permite configurar e separar esses valores. Comprovantes de condomínio podem ser anexados e integrados à cobrança.",
    category: "Índices, Multas e Despesas",
    keywords: ["condomínio", "taxa", "extraordinária", "despesa", "responsabilidade", "reforma"]
  },
  {
    question: "Como funcionam melhorias e avarias no imóvel?",
    answer: "Melhorias úteis (armários, reformas): geram indenização se autorizadas previamente pelo proprietário. Melhorias necessárias (reparos urgentes): podem ser reembolsadas se proprietário for omisso. Avarias (danos causados pelo inquilino): cobradas na devolução. A vistoria de entrada/saída da MR3X com fotos, vídeos e QR Code comprova o estado inicial e final, reduzindo disputas.",
    category: "Índices, Multas e Despesas",
    keywords: ["melhoria", "avaria", "dano", "indenização", "vistoria", "reforma"]
  },

  // Hierarquia de Usuários
  {
    question: "Qual a diferença entre usuários internos MR3X e usuários clientes?",
    answer: "Usuários internos (CEO, Admin, Auditor, Suporte) pertencem à MR3X e gerenciam a plataforma SaaS - nunca operam imóveis de clientes. Usuários clientes (Agências, Proprietários Independentes, Inquilinos, Síndicos) usam a MR3X como ferramenta para gerir seus processos imobiliários. A MR3X não faz gestão de imóveis, apenas fornece a tecnologia.",
    category: "Hierarquia de Usuários",
    keywords: ["usuário", "interno", "cliente", "hierarquia", "separação", "mr3x"]
  },
  {
    question: "O que é e o que faz o CEO da MR3X?",
    answer: "Perfil raiz (root) da plataforma, criado apenas 1 vez. Possui acesso total: configurações globais, segurança, tokens internos. Cria apenas o Admin MR3X. Não participa de operações imobiliárias, contratos ou usuários de agências. Papel estratégico e estrutural.",
    category: "Hierarquia de Usuários",
    keywords: ["ceo", "root", "perfil", "máximo", "hierarquia", "dono"]
  },
  {
    question: "Quais são as funções do Admin MR3X?",
    answer: "Administrador operacional da plataforma SaaS. Ativa/desativa contas de agências, cria perfis internos (Auditor, Suporte, API Client, Representante), monitora logs e integridade, controla planos e faturamento, gerencia integrações (API, webhooks, Asaas). Não gerencia imóveis, proprietários ou inquilinos de clientes.",
    category: "Hierarquia de Usuários",
    keywords: ["admin", "administrador", "operacional", "gerenciamento", "plataforma"]
  },
  {
    question: "O que é o Auditor e o que ele pode fazer?",
    answer: "Perfil criado pelo Admin MR3X com acesso somente leitura. Visualiza: logs, tokens, hashes de assinaturas, comprovantes, splits, transações, histórico de alterações. Não pode criar, editar, excluir ou assinar documentos. Garante transparência e conformidade LGPD sem poder modificar dados.",
    category: "Hierarquia de Usuários",
    keywords: ["auditor", "leitura", "logs", "auditoria", "conformidade", "lgpd"]
  },
  {
    question: "Como funciona a hierarquia dentro de uma Agência?",
    answer: "Diretor/Dono da Agência (topo) → cria Gestor da Agência → Gestor cria Corretores e Proprietários Vinculados → Agência convida Inquilinos. Diretor e Gestor acessam relatórios financeiros, gerenciam contratos e imóveis. Corretor acessa apenas imóveis atribuídos a ele. Proprietário vinculado acompanha apenas seus repasses e imóveis.",
    category: "Hierarquia de Usuários",
    keywords: ["agência", "hierarquia", "diretor", "gestor", "corretor", "estrutura"]
  },
  {
    question: "Qual a diferença entre Proprietário vinculado à agência e Proprietário Independente?",
    answer: "Proprietário vinculado: cadastrado pela agência, recebe repasses, assina contratos, mas a agência gerencia tudo. Proprietário Independente: opera sozinho como 'mini-imobiliária', possui CRUD completo de inquilinos, imóveis, contratos, vistorias, notificações. Configura split diretamente com Asaas e funciona sem intermediários.",
    category: "Hierarquia de Usuários",
    keywords: ["proprietário", "independente", "vinculado", "agência", "diferença", "autonomia"]
  },
  {
    question: "O que o Corretor pode fazer na plataforma?",
    answer: "Acessa somente imóveis e contratos vinculados a ele. Faz captação de imóveis, realiza vistorias, gera documentos (contrato, notificação, acordo). Pode assinar como intermediador (CRECI obrigatório). Não pode criar usuários, visualizar contratos de outros corretores ou alterar configurações financeiras/split.",
    category: "Hierarquia de Usuários",
    keywords: ["corretor", "permissões", "acesso", "creci", "imóveis", "função"]
  },
  {
    question: "Qual o papel do Síndico na MR3X?",
    answer: "Fornece informações sobre condomínio, gera documentos de regularidade (2ª via de taxas, convenção, atas), é ponto de contato oficial, valida vistorias sobre áreas comuns, informa valores de taxas condominiais, fundo de reserva, multas coletivas e despesas extraordinárias. Não acessa financeiro privado entre proprietário e inquilino.",
    category: "Hierarquia de Usuários",
    keywords: ["síndico", "condomínio", "função", "papel", "taxas", "áreas comuns"]
  },
  {
    question: "O que é API Client e para que serve?",
    answer: "Perfil criado pelo Admin MR3X para integrações externas. Recebe credenciais para apps parceiros, ERPs, sistemas de imóveis, plataformas regionais. Gera tokens de acesso e permite operações automatizadas. O Admin define níveis de permissão: leitura, escrita, edição, webhooks, funções específicas (ex: criar imóveis, emitir boletos).",
    category: "Hierarquia de Usuários",
    keywords: ["api", "client", "integração", "automatização", "webhook", "erp"]
  },

  // Operações Financeiras e Split
  {
    question: "Como funciona o split Asaas na MR3X?",
    answer: "Quando inquilino paga boleto/PIX/cartão: 1) Asaas recebe valor total, 2) Asaas divide automaticamente: taxa Asaas + taxa/plano MR3X + valor para imobiliária + (opcional) repasse direto ao proprietário, 3) Proprietário recebe valor líquido sem esforço manual. A MR3X não retém dinheiro do aluguel, apenas suas taxas de serviço.",
    category: "Operações Financeiras e Split",
    keywords: ["split", "asaas", "pagamento", "repasse", "divisão", "automático"]
  },
  {
    question: "A MR3X recebe ou retém o dinheiro dos aluguéis?",
    answer: "Não. A MR3X nunca recebe ou retém valores de aluguel. O dinheiro vai direto do inquilino para Asaas, que divide automaticamente conforme configuração de split: Asaas fica com sua taxa, MR3X recebe apenas taxa de serviço, e o restante vai para agência/proprietário. Isso garante segurança jurídica e transparência total.",
    category: "Operações Financeiras e Split",
    keywords: ["dinheiro", "retenção", "aluguel", "mr3x", "segurança", "transparência"]
  },
  {
    question: "Como funciona a emissão de notas fiscais?",
    answer: "Nota fiscal do boleto/PIX/cartão: emitida automaticamente pelo Asaas e enviada ao inquilino. Nota fiscal da MR3X: emitida apenas sobre planos e taxas de serviço MR3X (nunca sobre aluguel), pode ser enviada automaticamente por e-mail. A agência também emite suas próprias notas fiscais de serviços de administração.",
    category: "Operações Financeiras e Split",
    keywords: ["nota fiscal", "nf", "emissão", "asaas", "tributação", "serviço"]
  },
  {
    question: "Como o inquilino recebe comprovantes de pagamento?",
    answer: "Automaticamente após cada pagamento via WhatsApp e/ou e-mail (escolha do usuário). Cada comprovante inclui: recibo digital, hash de autenticação, QR Code de verificação, informações completas do pagamento. O sistema também envia avisos de vencimento, confirmações e segunda via quando solicitado.",
    category: "Operações Financeiras e Split",
    keywords: ["comprovante", "recibo", "pagamento", "whatsapp", "email", "automático"]
  },
  {
    question: "Posso configurar repasse diferente para cada proprietário?",
    answer: "Sim. Dentro de cada contrato, a agência define quanto o proprietário receberá: percentual, valor fixo ou repasse integral. Essas configurações são usadas no split automático do Asaas. A MR3X não interfere nos acordos entre agência e proprietário - a responsabilidade é da agência.",
    category: "Operações Financeiras e Split",
    keywords: ["repasse", "proprietário", "configuração", "split", "personalização", "flexível"]
  },

  // ACL e Permissões
  {
    question: "O que é ACL (Access Control List)?",
    answer: "Lista de controle de acesso que define exatamente o que cada perfil de usuário pode fazer na plataforma: criar, ler, editar, deletar (CRUD), assinar, visualizar logs, acessar financeiro, etc. A ACL da MR3X é rigorosa e garante que usuários só acessem dados e funções permitidas para seu perfil, seguindo princípio de menor privilégio.",
    category: "ACL e Permissões",
    keywords: ["acl", "permissão", "acesso", "controle", "segurança", "crud"]
  },
  {
    question: "Quem pode criar novos usuários na plataforma?",
    answer: "CEO cria Admin. Admin cria perfis internos (Auditor, Gestor MR3X, Representante, API Client). Diretor/Gestor de Agência cria Gestor, Corretor, Proprietário. Proprietário Independente cria Inquilino e Síndico. Inquilinos e Síndicos são criados via convite. Corretor, Proprietário vinculado e Inquilino não podem criar usuários.",
    category: "ACL e Permissões",
    keywords: ["criar", "usuário", "permissão", "hierarquia", "acl", "convite"]
  },
  {
    question: "Quem pode assinar contratos digitalmente?",
    answer: "Diretor/Gestor da Agência, Corretor (com CRECI válido), Proprietário (vinculado ou independente), Inquilino. Todos com validação de identidade (e-mail/WhatsApp). Perfis internos MR3X (CEO, Admin, Auditor) não podem assinar contratos de clientes. Cada assinatura registra timestamp, IP, certificado e hash.",
    category: "ACL e Permissões",
    keywords: ["assinar", "contrato", "permissão", "digital", "quem pode", "creci"]
  },
  {
    question: "Quem pode acessar dados financeiros?",
    answer: "Admin MR3X: parcial (somente para suporte). Agência (Diretor/Gestor): acesso completo aos repasses e cobranças. Corretor: não tem acesso. Proprietário: somente extratos próprios. Inquilino: somente seus boletos e recibos. Auditor: leitura para conformidade. Cada perfil vê apenas dados relevantes ao seu escopo.",
    category: "ACL e Permissões",
    keywords: ["financeiro", "acesso", "dados", "permissão", "sigilo", "privacidade"]
  },
  {
    question: "Quem pode deletar imóveis e contratos?",
    answer: "Agência: pode deletar imóvel/contrato SEM assinaturas. Proprietário Independente: mesma regra. Corretor: nunca pode deletar. Contratos assinados não podem ser deletados, apenas rescindidos. MR3X nunca deleta dados (mantém para auditoria LGPD). Exclusões geram log permanente com user_id, timestamp e motivo.",
    category: "ACL e Permissões",
    keywords: ["deletar", "excluir", "contrato", "imóvel", "permissão", "lgpd"]
  },
  {
    question: "O CEO ou Admin MR3X pode acessar dados dos clientes?",
    answer: "Não podem operar contratos, imóveis ou gestão de clientes. Acesso técnico somente para suporte autorizado (logs, debug). Dados sensíveis são criptografados. Toda ação é auditada. A MR3X não gerencia imóveis dos clientes, apenas fornece a plataforma. Separação rigorosa para compliance LGPD e segurança jurídica.",
    category: "ACL e Permissões",
    keywords: ["admin", "ceo", "acesso", "dados", "privacidade", "lgpd", "segurança"]
  },

  // Fluxogramas e Arquitetura
  {
    question: "Quais são os módulos principais da plataforma MR3X?",
    answer: "1) Cadastro (imobiliárias, proprietários, inquilinos, imóveis, funcionários), 2) Financeiro (boletos, PIX, cartão, split Asaas, conciliação, relatórios), 3) Contratos (criação, assinatura digital, anexos, renovação), 4) Vistoria (inicial/final, fotos, vídeos, PDF com hash), 5) Notificações (extrajudicial, avisos, lembretes), 6) Manutenção (chamados, orçamentos, fornecedores), 7) Auditoria (logs, tokens, verificador), 8) Portal do Inquilino, 9) Integrações (API, webhooks).",
    category: "Fluxogramas e Arquitetura",
    keywords: ["módulos", "funcionalidades", "plataforma", "arquitetura", "sistema", "estrutura"]
  },
  {
    question: "Como é o fluxo completo de criação de um contrato?",
    answer: "1) Cadastro → Agência/Prop. Independente cria imóvel, 2) Convida inquilino, 3) Cria contrato com template e campos obrigatórios, 4) Anexa vistoria com fotos/vídeos, 5) Gera PDF com hash SHA-256 e QR Code em cada página, 6) Envia para assinatura digital (PAdES), 7) Partes assinam (registro de IP, timestamp, certificado), 8) Contrato finalizado com carimbo de tempo TSA, 9) Split → Financeiro → Emissão de boletos automáticos.",
    category: "Fluxogramas e Arquitetura",
    keywords: ["fluxo", "contrato", "processo", "etapas", "criação", "assinatura"]
  },
  {
    question: "Como funciona o fluxo de pagamento e split?",
    answer: "1) Sistema gera boleto/PIX/link cartão, 2) Inquilino paga via Asaas, 3) Asaas recebe valor total, 4) Split automático: taxa Asaas + taxa MR3X + valor agência + repasse proprietário, 5) Confirmação de pagamento (webhook), 6) Sistema envia comprovante ao inquilino (WhatsApp/e-mail), 7) Repasses liberados conforme cronograma Asaas, 8) Relatórios financeiros atualizados em tempo real.",
    category: "Fluxogramas e Arquitetura",
    keywords: ["fluxo", "pagamento", "split", "processo", "financeiro", "automático"]
  },
  {
    question: "Como funciona a verificação de documentos?",
    answer: "1) Usuário escaneia QR Code no PDF ou acessa /api/v1/verify/{document_id}, 2) Sistema recalcula hash SHA-256 de cada página e do documento completo, 3) Compara com hash original armazenado, 4) Valida assinaturas digitais PAdES e certificados (OCSP/CRL), 5) Verifica carimbo de tempo TSA, 6) Retorna status JSON: 'valid', 'tampered', 'unsigned', 'revoked' ou 'invalid_signature'. Todo acesso é logado.",
    category: "Fluxogramas e Arquitetura",
    keywords: ["verificação", "fluxo", "documento", "validação", "processo", "qr code"]
  }
];

export function searchFAQ(query: string): FAQItem[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];

  return faqData.filter(item => {
    const questionMatch = item.question.toLowerCase().includes(normalizedQuery);
    const answerMatch = item.answer.toLowerCase().includes(normalizedQuery);
    const categoryMatch = item.category.toLowerCase().includes(normalizedQuery);
    const keywordsMatch = item.keywords.some(keyword => 
      keyword.toLowerCase().includes(normalizedQuery) || 
      normalizedQuery.includes(keyword.toLowerCase())
    );
    
    return questionMatch || answerMatch || categoryMatch || keywordsMatch;
  });
}

export function getFAQsByCategory(category: string): FAQItem[] {
  return faqData.filter(item => item.category === category);
}