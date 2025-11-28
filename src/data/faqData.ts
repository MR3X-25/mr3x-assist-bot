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
  "Problemas Técnicos"
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