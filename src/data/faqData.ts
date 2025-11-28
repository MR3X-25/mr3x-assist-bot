export interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqData: FAQItem[] = [
  // ========== CONCEITO GERAL DA MR3X ==========
  {
    question: "O que é a MR3X?",
    answer: "A MR3X é uma plataforma completa de gestão de locações especializada em automatizar pagamentos, contratos, vistorias e comunicação entre imobiliárias, proprietários independentes e inquilinos. Oferecemos tecnologia avançada para simplificar toda a gestão imobiliária.",
    category: "Conceito Geral",
    keywords: ["o que é", "plataforma", "sistema", "mr3x", "definição"]
  },
  {
    question: "A MR3X é uma imobiliária?",
    answer: "Não. A MR3X não atua como imobiliária e não intermedeia locações. Somos uma plataforma de tecnologia que fornece ferramentas para gestão imobiliária, permitindo que imobiliárias e proprietários independentes gerenciem suas operações de forma mais eficiente.",
    category: "Conceito Geral",
    keywords: ["imobiliária", "intermediação", "função", "atuação"]
  },
  {
    question: "A MR3X administra proprietários e inquilinos?",
    answer: "Não. A plataforma apenas oferece recursos e ferramentas tecnológicas. A gestão operacional e relacionamento com proprietários e inquilinos continua sendo de responsabilidade da agência imobiliária ou do proprietário independente.",
    category: "Conceito Geral",
    keywords: ["administração", "gestão", "responsabilidade", "operação"]
  },
  {
    question: "A MR3X recebe valores de aluguel?",
    answer: "Sim, mas apenas para processar pagamentos. A MR3X processa os valores através do sistema de split, desconta as taxas configuradas e repassa automaticamente para os proprietários e agências conforme os percentuais estabelecidos. Não retemos valores além das taxas acordadas.",
    category: "Conceito Geral",
    keywords: ["recebe", "valores", "pagamento", "repasse", "split"]
  },
  {
    question: "Quem controla os dados do imóvel e do contrato?",
    answer: "Os dados são controlados pela agência imobiliária ou pelo proprietário independente, conforme o tipo de conta utilizada. A MR3X apenas armazena e gerencia as informações de forma segura, mas o controle e propriedade dos dados permanecem com o usuário gestor.",
    category: "Conceito Geral",
    keywords: ["controle", "dados", "propriedade", "gestão", "acesso"]
  },
  {
    question: "A MR3X faz cobrança judicial?",
    answer: "Não, a MR3X não realiza cobranças judiciais. No entanto, a plataforma oferece recursos completos para notificações automatizadas, propostas de acordos extrajudiciais e relatórios detalhados que podem auxiliar em eventuais ações judiciais futuras.",
    category: "Conceito Geral",
    keywords: ["judicial", "cobrança", "jurídico", "ação"]
  },
  {
    question: "A MR3X funciona como sistema de cobrança?",
    answer: "Sim. A MR3X automatiza todo o processo de cobrança, incluindo geração de boletos, PIX e cobranças por cartão, além de enviar lembretes automáticos e realizar repasses para proprietários de forma programada e transparente.",
    category: "Conceito Geral",
    keywords: ["cobrança", "sistema", "boleto", "pix", "automático"]
  },
  {
    question: "A MR3X gera documentos legais?",
    answer: "Sim. A plataforma gera diversos documentos com validade legal, incluindo contratos de locação personalizados, notificações, recibos de pagamento, termos de acordo, laudos de vistoria e relatórios completos de auditoria, todos com hash de validação e rastreabilidade.",
    category: "Conceito Geral",
    keywords: ["documentos", "legais", "contratos", "validade", "gerar"]
  },
  {
    question: "A MR3X controla inadimplência?",
    answer: "Sim. A plataforma oferece controle completo de inadimplência através de relatórios detalhados, alertas automáticos, notificações programadas e regras personalizáveis de cobrança com aplicação automática de multas e juros.",
    category: "Conceito Geral",
    keywords: ["inadimplência", "controle", "atraso", "relatório"]
  },
  {
    question: "A MR3X integra com sistemas externos?",
    answer: "Sim. A MR3X possui integrações com diversos sistemas externos, incluindo Asaas para pagamentos, WhatsApp API para comunicação, serviços de assinatura digital e possibilidade de integração com ERPs através de nossa API REST.",
    category: "Conceito Geral",
    keywords: ["integração", "api", "sistemas", "externo", "conectar"]
  },

  // ========== USUÁRIOS E HIERARQUIA ==========
  {
    question: "Quem é o CEO na MR3X?",
    answer: "O CEO é o proprietário e administrador máximo da plataforma MR3X. Este perfil tem controle total sobre o sistema, podendo criar Admins, Auditores e gerenciar toda a equipe interna da MR3X, mas não opera diretamente com imóveis ou agências.",
    category: "Usuários e Hierarquia",
    keywords: ["ceo", "proprietário", "administrador", "máximo"]
  },
  {
    question: "O CEO opera imóveis?",
    answer: "Não. O CEO administra exclusivamente a plataforma em nível sistêmico. A operação de imóveis, contratos e gestão imobiliária é realizada pelos Gestores, Corretores e Proprietários.",
    category: "Usuários e Hierarquia",
    keywords: ["ceo", "operar", "imóveis", "função"]
  },
  {
    question: "O que é o Admin da MR3X?",
    answer: "O Admin é um funcionário da equipe MR3X responsável por realizar manutenção interna do sistema, prestar suporte técnico aos usuários e executar operações sistêmicas como ajustes de configuração e resolução de problemas técnicos.",
    category: "Usuários e Hierarquia",
    keywords: ["admin", "administrador", "suporte", "técnico"]
  },
  {
    question: "O que é o Auditor?",
    answer: "O Auditor é um perfil especializado com acesso aos logs completos do sistema, histórico de tokens de API, trilhas de auditoria e registros de todas as operações realizadas na plataforma, garantindo transparência e rastreabilidade.",
    category: "Usuários e Hierarquia",
    keywords: ["auditor", "auditoria", "logs", "histórico"]
  },
  {
    question: "O que é o Gestor?",
    answer: "O Gestor é o gerente ou responsável por uma agência imobiliária na plataforma. Este perfil possui acesso amplo aos módulos administrativos, podendo gerenciar imóveis, contratos, equipe de corretores, proprietários vinculados e todas as operações da agência.",
    category: "Usuários e Hierarquia",
    keywords: ["gestor", "gerente", "agência", "imobiliária"]
  },
  {
    question: "O que é o Corretor?",
    answer: "O Corretor é um profissional da equipe da agência imobiliária responsável por inserir novos imóveis no sistema, gerenciar relacionamento com inquilinos, realizar atendimentos e executar operações diárias sob supervisão do Gestor.",
    category: "Usuários e Hierarquia",
    keywords: ["corretor", "agente", "equipe", "imobiliária"]
  },
  {
    question: "O que é Proprietário vinculado?",
    answer: "O Proprietário vinculado é o dono de um ou mais imóveis que são administrados por uma agência imobiliária cadastrada na MR3X. Ele tem acesso para visualizar seus imóveis, contratos e receber repasses, mas a gestão operacional é feita pela agência.",
    category: "Usuários e Hierarquia",
    keywords: ["proprietário", "vinculado", "dono", "imóvel", "agência"]
  },
  {
    question: "O que é Proprietário Independente?",
    answer: "O Proprietário Independente é uma pessoa física ou jurídica que utiliza a MR3X diretamente, sem intermediação de agência imobiliária. Este perfil possui controle total sobre seus imóveis, podendo gerenciar contratos, cobranças e inquilinos de forma autônoma.",
    category: "Usuários e Hierarquia",
    keywords: ["proprietário", "independente", "autônomo", "direto"]
  },
  {
    question: "O que é o Inquilino na MR3X?",
    answer: "O Inquilino é o locatário de um imóvel cadastrado na plataforma. Este perfil possui acesso para visualizar e baixar contratos, realizar pagamentos, acessar documentos como recibos e vistorias, e comunicar-se através do sistema de suporte.",
    category: "Usuários e Hierarquia",
    keywords: ["inquilino", "locatário", "morador"]
  },
  {
    question: "O que é o Síndico?",
    answer: "O Síndico é um perfil especial que gerencia documentos e pagamentos relacionados ao condomínio quando estes estão vinculados a um imóvel específico na plataforma. Permite controle de taxas condominiais e comunicação com proprietários.",
    category: "Usuários e Hierarquia",
    keywords: ["síndico", "condomínio", "gestão", "taxas"]
  },
  {
    question: "O que é Representante?",
    answer: "O Representante é uma pessoa autorizada pelo proprietário para realizar gestão parcial de imóveis específicos. Este perfil possui permissões limitadas configuradas pelo proprietário, permitindo delegar responsabilidades sem conceder acesso total.",
    category: "Usuários e Hierarquia",
    keywords: ["representante", "autorizado", "procurador", "delegado"]
  },
  {
    question: "O que é Cliente API?",
    answer: "Cliente API é um tipo de conta especial destinada exclusivamente para integrações técnicas com sistemas externos. Este perfil permite conectar ERPs, sistemas de gestão ou outras plataformas à MR3X através de nossa API REST.",
    category: "Usuários e Hierarquia",
    keywords: ["api", "integração", "cliente", "sistema", "externo"]
  },
  {
    question: "Qual usuário pode criar outros usuários?",
    answer: "A hierarquia de criação é: CEO pode criar Admin e Auditor; Gestor pode criar e convidar Corretores, Proprietários vinculados e Inquilinos; Proprietário Independente pode convidar Inquilinos. Cada nível possui permissões específicas de criação conforme sua função.",
    category: "Usuários e Hierarquia",
    keywords: ["criar", "usuários", "hierarquia", "permissão"]
  },
  {
    question: "O corretor pode criar outros corretores?",
    answer: "Não. Apenas o Gestor da agência imobiliária possui permissão para criar e gerenciar o cadastro de corretores na equipe. Isso garante controle centralizado sobre a equipe comercial.",
    category: "Usuários e Hierarquia",
    keywords: ["corretor", "criar", "equipe", "permissão"]
  },
  {
    question: "O inquilino pode criar usuários?",
    answer: "Não. O inquilino possui um perfil de acesso restrito focado em consulta de documentos, pagamentos e comunicação, não tendo permissão para criar outros usuários no sistema.",
    category: "Usuários e Hierarquia",
    keywords: ["inquilino", "criar", "usuário", "permissão"]
  },

  // ========== CRUD DE USUÁRIOS ==========
  {
    question: "Quem pode cadastrar usuários diretamente?",
    answer: "Podem cadastrar usuários diretamente: Agências (através do Gestor) e Proprietários Independentes. Estes perfis possuem permissão para criar usuários relacionados à sua operação, como corretores, proprietários vinculados e inquilinos.",
    category: "CRUD de Usuários",
    keywords: ["cadastrar", "criar", "usuários", "direto", "permissão"]
  },
  {
    question: "Como funciona o cadastro via convite?",
    answer: "O cadastro via convite funciona através do envio de um link personalizado por e-mail ou WhatsApp. O usuário convidado recebe o link, acessa a plataforma e confirma seus dados pessoais para completar o cadastro. Este método garante segurança e validação da identidade.",
    category: "CRUD de Usuários",
    keywords: ["convite", "cadastro", "link", "email", "whatsapp"]
  },
  {
    question: "Quais usuários são sempre por convite?",
    answer: "Os seguintes perfis são sempre criados através de convite: Corretor, Proprietário vinculado, Síndico, Inquilino e Representante. Isso garante que haja sempre uma relação pré-estabelecida e autorização do responsável antes da criação do acesso.",
    category: "CRUD de Usuários",
    keywords: ["convite", "obrigatório", "perfis", "autorização"]
  },
  {
    question: "O cadastro via convite exige validação?",
    answer: "Sim. Todo cadastro via convite exige validação através de e-mail ou WhatsApp. O sistema envia um código de confirmação que deve ser inserido pelo usuário para ativar sua conta, garantindo a segurança e autenticidade do cadastro.",
    category: "CRUD de Usuários",
    keywords: ["validação", "convite", "confirmação", "segurança"]
  },
  {
    question: "O CEO precisa validar convites?",
    answer: "O CEO não precisa validar convites de usuários operacionais (gestores, proprietários, inquilinos). A validação do CEO é necessária apenas para criação de usuários internos da MR3X, como Admins e Auditores.",
    category: "CRUD de Usuários",
    keywords: ["ceo", "validação", "aprovação", "convite"]
  },
  {
    question: "Editar um usuário altera seus acessos?",
    answer: "Sim. Ao editar um usuário, caso sejam ajustadas suas permissões ou nível de acesso, as mudanças são aplicadas imediatamente. O sistema mantém registro histórico de todas as alterações realizadas para fins de auditoria.",
    category: "CRUD de Usuários",
    keywords: ["editar", "alterar", "acessos", "permissões"]
  },
  {
    question: "Um usuário pode ser desativado?",
    answer: "Sim. Usuários podem ser desativados temporariamente sem perder seu histórico de operações, contratos ou documentos. A desativação bloqueia o acesso mas mantém todos os dados e vínculos intactos para futuras consultas ou reativação.",
    category: "CRUD de Usuários",
    keywords: ["desativar", "suspender", "bloquear", "temporário"]
  },
  {
    question: "Pode-se excluir um usuário totalmente?",
    answer: "A exclusão total só é possível se o usuário não possuir vínculos ativos como contratos, imóveis cadastrados ou cobranças em aberto. Caso existam vínculos, o sistema recomenda desativação ao invés de exclusão para manter a integridade dos dados.",
    category: "CRUD de Usuários",
    keywords: ["excluir", "deletar", "remover", "definitivo"]
  },
  {
    question: "O inquilino pode editar seus dados?",
    answer: "Sim. O inquilino pode editar seus dados pessoais como nome, telefone, endereço e e-mail. Porém, documentos como CPF e CNPJ não podem ser alterados após o cadastro, garantindo a integridade e rastreabilidade das informações.",
    category: "CRUD de Usuários",
    keywords: ["inquilino", "editar", "dados", "alterar"]
  },
  {
    question: "Posso mudar o número de telefone de um usuário?",
    answer: "Sim, mas a alteração de número de telefone exige verificação de segurança. Um código de confirmação é enviado para o novo número e deve ser validado antes que a mudança seja efetivada no sistema.",
    category: "CRUD de Usuários",
    keywords: ["telefone", "mudar", "alterar", "verificação"]
  },
  {
    question: "Como redefinir senha de um usuário?",
    answer: "A redefinição pode ser feita de duas formas: o próprio usuário pode solicitar no login através da opção 'Esqueci minha senha', ou o Gestor pode enviar um link de redefinição através do painel administrativo. Ambos métodos exigem confirmação por e-mail.",
    category: "CRUD de Usuários",
    keywords: ["senha", "redefinir", "recuperar", "resetar"]
  },
  {
    question: "Um usuário pode trocar de tipo (ex.: inquilino virar proprietário)?",
    answer: "Não. Não é possível alterar o tipo de perfil de um usuário existente. É necessário criar um novo cadastro com o tipo correto. Isso mantém a integridade do histórico e das permissões associadas a cada perfil.",
    category: "CRUD de Usuários",
    keywords: ["trocar", "tipo", "perfil", "mudar", "conversão"]
  },
  {
    question: "O sistema notifica quando um convite expira?",
    answer: "Sim. O sistema envia notificação automática após 72 horas informando que o convite está próximo de expirar. Convites não utilizados expiram automaticamente e podem ser reenviados pelo responsável.",
    category: "CRUD de Usuários",
    keywords: ["convite", "expirar", "notificação", "validade"]
  },
  {
    question: "É possível reenviar o convite?",
    answer: "Sim. O convite pode ser reenviado facilmente através do painel de usuários. Basta acessar a lista de convites pendentes e clicar na opção 'Reenviar', que um novo link será gerado e enviado ao destinatário.",
    category: "CRUD de Usuários",
    keywords: ["reenviar", "convite", "novo", "link"]
  },
  {
    question: "O sistema impede cadastros duplicados?",
    answer: "Sim. O sistema valida automaticamente CPF/CNPJ e e-mail, impedindo cadastros duplicados. Ao tentar criar um usuário com dados já existentes, uma mensagem de erro é exibida indicando o conflito.",
    category: "CRUD de Usuários",
    keywords: ["duplicado", "cpf", "cnpj", "email", "validação"]
  },

  // ========== CADASTRO E GESTÃO DE IMÓVEIS ==========
  {
    question: "Quem pode cadastrar imóveis?",
    answer: "Podem cadastrar imóveis: Gestor da agência, Corretor vinculado à agência e Proprietário Independente. Cada perfil possui permissões específicas de acordo com sua função na plataforma.",
    category: "Gestão de Imóveis",
    keywords: ["cadastrar", "imóvel", "criar", "novo", "permissão"]
  },
  {
    question: "Como cadastrar um imóvel?",
    answer: "Para cadastrar um imóvel, acesse Menu → Imóveis → Novo Imóvel. Preencha os dados obrigatórios como endereço completo, tipo, características, valor e vincule ao proprietário responsável. É possível adicionar fotos, documentos e informações detalhadas.",
    category: "Gestão de Imóveis",
    keywords: ["cadastrar", "imóvel", "como", "passo a passo"]
  },
  {
    question: "Posso cadastrar imóvel sem proprietário vinculado?",
    answer: "Não é possível cadastrar imóvel sem proprietário vinculado quando operando como agência. No modo Proprietário Independente, o próprio usuário é automaticamente definido como proprietário do imóvel cadastrado.",
    category: "Gestão de Imóveis",
    keywords: ["cadastrar", "proprietário", "vínculo", "obrigatório"]
  },
  {
    question: "Quantas fotos posso adicionar?",
    answer: "É possível adicionar até 50 fotos por imóvel. Recomendamos utilizar imagens em alta qualidade para melhor apresentação do imóvel, incluindo fotos de todos os cômodos e áreas externas.",
    category: "Gestão de Imóveis",
    keywords: ["fotos", "imagens", "quantidade", "limite"]
  },
  {
    question: "Posso adicionar plantas, vídeos e arquivos?",
    answer: "Sim. Além de fotos, o sistema permite adicionar plantas baixas, vídeos de apresentação, documentos do imóvel, escrituras e qualquer arquivo relevante em formatos como PDF, JPG, PNG, MP4 e outros.",
    category: "Gestão de Imóveis",
    keywords: ["plantas", "vídeos", "arquivos", "documentos", "anexar"]
  },
  {
    question: "Como editar um imóvel?",
    answer: "Para editar um imóvel, acesse a lista de imóveis, selecione o imóvel desejado e clique em 'Editar'. Você poderá alterar informações, adicionar ou remover fotos e atualizar valores. As alterações são salvas imediatamente.",
    category: "Gestão de Imóveis",
    keywords: ["editar", "alterar", "modificar", "imóvel"]
  },
  {
    question: "É possível excluir um imóvel?",
    answer: "A exclusão definitiva só é permitida se o imóvel não possuir contratos ativos. Caso existam contratos, é necessário primeiro encerrá-los ou cancelá-los. Para imóveis com histórico, recomendamos a inativação ao invés de exclusão.",
    category: "Gestão de Imóveis",
    keywords: ["excluir", "deletar", "remover", "imóvel"]
  },
  {
    question: "Posso apenas inativar um imóvel?",
    answer: "Sim. A inativação é a opção recomendada para imóveis que não estão mais disponíveis mas possuem histórico importante. Imóveis inativos não aparecem em listagens ativas mas mantêm todo o histórico de contratos e documentos acessível.",
    category: "Gestão de Imóveis",
    keywords: ["inativar", "desativar", "suspender", "imóvel"]
  },
  {
    question: "O imóvel pode ter vários inquilinos?",
    answer: "Sim. Um mesmo imóvel pode ter vários inquilinos através de contratos separados, seja em períodos diferentes ou simultaneamente (no caso de imóveis com múltiplas unidades ou quartos). Cada contrato é gerenciado independentemente.",
    category: "Gestão de Imóveis",
    keywords: ["vários", "múltiplos", "inquilinos", "contratos"]
  },
  {
    question: "Posso duplicar cadastro de imóvel?",
    answer: "Sim. O sistema oferece a função 'Copiar' que permite duplicar um imóvel existente com todas suas características. Isso é útil para cadastrar imóveis similares, economizando tempo no preenchimento de dados repetitivos.",
    category: "Gestão de Imóveis",
    keywords: ["duplicar", "copiar", "clonar", "imóvel"]
  },
  {
    question: "Posso agrupar imóveis?",
    answer: "Sim. Imóveis podem ser agrupados em carteiras personalizadas, facilitando a organização por região, tipo, proprietário ou qualquer outro critério. Isso permite melhor gestão e geração de relatórios segmentados.",
    category: "Gestão de Imóveis",
    keywords: ["agrupar", "carteira", "organizar", "grupo"]
  },
  {
    question: "Posso exportar imóveis?",
    answer: "Sim. É possível exportar a lista de imóveis para formato Excel (XLSX) com todos os dados cadastrados, incluindo valores, características e status. Útil para relatórios externos e backup de informações.",
    category: "Gestão de Imóveis",
    keywords: ["exportar", "excel", "planilha", "download"]
  },
  {
    question: "Posso importar imóveis?",
    answer: "Sim. O sistema permite importação em massa através de arquivo CSV seguindo um template específico. Esta funcionalidade é ideal para migração de sistemas anteriores ou cadastro em grande volume.",
    category: "Gestão de Imóveis",
    keywords: ["importar", "csv", "massa", "upload"]
  },
  {
    question: "O sistema valida CEP automaticamente?",
    answer: "Sim. Ao inserir o CEP, o sistema busca automaticamente o endereço completo (rua, bairro, cidade e estado) através de integração com serviços de consulta de CEP, agilizando o cadastro.",
    category: "Gestão de Imóveis",
    keywords: ["cep", "validar", "endereço", "automático"]
  },
  {
    question: "O sistema aceita CNPJ alfanumérico futuramente?",
    answer: "Sim. A plataforma já está preparada para suportar o novo formato de CNPJ alfanumérico que será implementado pela Receita Federal, garantindo compatibilidade com futuras mudanças regulatórias.",
    category: "Gestão de Imóveis",
    keywords: ["cnpj", "alfanumérico", "futuro", "compatibilidade"]
  },

  // ========== CONTRATOS ==========
  {
    question: "Como criar contrato?",
    answer: "Para criar um contrato, acesse Imóveis → Selecione o Imóvel → Novo Contrato. Preencha os dados do inquilino, valores, prazo, forma de pagamento e condições específicas. O sistema oferece templates personalizáveis para agilizar o processo.",
    category: "Contratos",
    keywords: ["criar", "contrato", "novo", "gerar"]
  },
  {
    question: "Contratos usam templates?",
    answer: "Sim. O sistema oferece templates de contratos personalizáveis que podem ser adaptados às necessidades específicas de cada locação. Você pode criar seus próprios modelos ou usar os padrões da plataforma conforme a legislação vigente.",
    category: "Contratos",
    keywords: ["template", "modelo", "padrão", "contrato"]
  },
  {
    question: "Posso adicionar anexos?",
    answer: "Sim. É possível anexar documentos complementares ao contrato, como comprovantes, documentos pessoais, fiadores, apólices de seguro e qualquer outro arquivo relevante. Todos ficam organizados junto ao contrato.",
    category: "Contratos",
    keywords: ["anexos", "documentos", "arquivos", "adicionar"]
  },
  {
    question: "Posso automatizar reajustes?",
    answer: "Sim. O sistema permite configurar reajustes automáticos de aluguel baseados em índices como IPCA, IGP-M ou percentual fixo. Os reajustes são aplicados automaticamente nas datas programadas, atualizando os valores das cobranças.",
    category: "Contratos",
    keywords: ["reajuste", "ipca", "igpm", "automático", "correção"]
  },
  {
    question: "Posso gerar contrato sem vistoria?",
    answer: "Sim. A vistoria não é obrigatória para gerar um contrato, embora seja altamente recomendada. Você pode criar o contrato e realizar a vistoria posteriormente, vinculando-a ao contrato existente.",
    category: "Contratos",
    keywords: ["contrato", "vistoria", "sem", "opcional"]
  },
  {
    question: "Como enviar para assinatura digital?",
    answer: "Após finalizar o contrato, clique em 'Enviar para assinatura digital'. O sistema gera links únicos para cada parte envolvida (proprietário, inquilino, fiadores) e envia automaticamente por e-mail e WhatsApp.",
    category: "Contratos",
    keywords: ["assinatura", "digital", "enviar", "eletrônica"]
  },
  {
    question: "Todos assinantes recebem link?",
    answer: "Sim. Cada parte envolvida no contrato recebe um link individual e personalizado por e-mail e WhatsApp. O sistema controla quem já assinou e notifica os pendentes automaticamente até completar todas as assinaturas.",
    category: "Contratos",
    keywords: ["assinantes", "link", "envio", "todos"]
  },
  {
    question: "É possível assinar presencialmente?",
    answer: "Sim. Além da assinatura digital online, o sistema permite registro de assinatura presencial através de captura local. Útil para casos onde as partes preferem assinar pessoalmente ou têm dificuldade com assinatura digital.",
    category: "Contratos",
    keywords: ["presencial", "assinar", "local", "offline"]
  },
  {
    question: "O contrato assinado tem hash de validação?",
    answer: "Sim. Todo contrato assinado digitalmente recebe um hash SHA256 único e um QR Code de validação, garantindo autenticidade e impossibilitando alterações posteriores. Isso garante validade jurídica do documento.",
    category: "Contratos",
    keywords: ["hash", "validação", "qrcode", "autenticidade"]
  },
  {
    question: "Posso cancelar um contrato ativo?",
    answer: "Sim. Contratos ativos podem ser cancelados mediante registro do motivo (rescisão, distrato, inadimplência). O sistema solicita justificativa e data de encerramento, mantendo todo o histórico para fins de auditoria e relatórios.",
    category: "Contratos",
    keywords: ["cancelar", "rescindir", "encerrar", "contrato"]
  },
  {
    question: "Posso renovar automaticamente?",
    answer: "Sim. O sistema permite configurar renovação automática de contratos. Antes do vencimento, notificações são enviadas às partes e, se não houver manifestação contrária, o contrato é renovado automaticamente pelos termos configurados.",
    category: "Contratos",
    keywords: ["renovar", "automático", "prorrogar", "renovação"]
  },
  {
    question: "Contratos podem ter mais de um proprietário?",
    answer: "Sim. O sistema suporta contratos com múltiplos proprietários, permitindo configurar o percentual de participação de cada um nos valores recebidos. Os repasses são calculados e distribuídos automaticamente conforme os percentuais definidos.",
    category: "Contratos",
    keywords: ["proprietários", "múltiplos", "vários", "coproprieta"]
  },
  {
    question: "Posso limitar acessos do inquilino ao contrato?",
    answer: "Sim. É possível configurar permissões específicas do inquilino, como ocultar valores de comissão, restringir visualização de anexos específicos ou limitar acesso a determinadas cláusulas, mantendo a transparência necessária.",
    category: "Contratos",
    keywords: ["limitar", "acesso", "inquilino", "permissões"]
  },
  {
    question: "Posso editar contrato assinado?",
    answer: "Não. Contratos já assinados não podem ser editados diretamente para preservar a integridade legal do documento. Alterações devem ser feitas através de aditivos contratuais, que são documentos complementares que modificam termos específicos.",
    category: "Contratos",
    keywords: ["editar", "assinado", "alterar", "modificar"]
  },
  {
    question: "Posso gerar aditivo pelo sistema?",
    answer: "Sim. O sistema permite gerar aditivos contratuais para modificar valores, prazos, condições ou qualquer cláusula do contrato original. O aditivo passa pelo mesmo processo de assinatura digital e fica vinculado ao contrato principal.",
    category: "Contratos",
    keywords: ["aditivo", "alteração", "modificação", "gerar"]
  },

  // ========== VISTORIA DIGITAL ==========
  {
    question: "Como iniciar vistoria?",
    answer: "Para iniciar uma vistoria, acesse o imóvel desejado, vá em Vistoria → Nova Vistoria. Escolha o tipo (entrada ou saída), organize por cômodos e comece a documentar através de fotos, vídeos e descrições detalhadas.",
    category: "Vistoria Digital",
    keywords: ["iniciar", "vistoria", "começar", "nova"]
  },
  {
    question: "Posso usar celular?",
    answer: "Sim. A vistoria digital é totalmente otimizada para dispositivos móveis, permitindo captura direta de fotos, vídeos e gravações de áudio pelo celular ou tablet. Ideal para realizar vistorias in loco com praticidade.",
    category: "Vistoria Digital",
    keywords: ["celular", "mobile", "smartphone", "app"]
  },
  {
    question: "A vistoria tem geolocalização?",
    answer: "Sim. O sistema registra automaticamente a localização GPS e timestamp de cada foto e registro realizado durante a vistoria, comprovando que foi realizada no local e momento corretos. Isso adiciona credibilidade ao documento.",
    category: "Vistoria Digital",
    keywords: ["gps", "localização", "geolocalização", "mapa"]
  },
  {
    question: "O sistema organiza por cômodos?",
    answer: "Sim. A vistoria é organizada automaticamente por cômodos (sala, quartos, cozinha, banheiros, área externa, etc.), facilitando a documentação sistemática e comparação entre vistorias de entrada e saída.",
    category: "Vistoria Digital",
    keywords: ["cômodos", "ambientes", "organizar", "estrutura"]
  },
  {
    question: "Posso adicionar laudos técnicos?",
    answer: "Sim. É possível anexar laudos técnicos de profissionais especializados (engenheiros, eletricistas, encanadores) à vistoria, complementando a documentação com pareceres profissionais sobre estado de conservação ou problemas identificados.",
    category: "Vistoria Digital",
    keywords: ["laudos", "técnicos", "profissional", "anexar"]
  },
  {
    question: "O relatório final é PDF?",
    answer: "Sim. Após concluir a vistoria, o sistema gera automaticamente um relatório completo em PDF profissional, incluindo todas as fotos, descrições, geolocalização, timestamp e hash blockchain para validação de autenticidade.",
    category: "Vistoria Digital",
    keywords: ["relatório", "pdf", "documento", "gerar"]
  },
  {
    question: "A vistoria pode ter assinatura?",
    answer: "Sim. O relatório de vistoria pode ser assinado digitalmente pelas partes envolvidas (proprietário, inquilino, vistoriador), conferindo validade legal ao documento e criando registro oficial do estado do imóvel.",
    category: "Vistoria Digital",
    keywords: ["assinatura", "assinar", "validação", "vistoria"]
  },
  {
    question: "Posso comparar vistorias?",
    answer: "Sim. O sistema permite comparação lado a lado entre vistoria de entrada e saída do mesmo imóvel, facilitando a identificação de danos, desgastes ou melhorias realizadas durante o período de locação.",
    category: "Vistoria Digital",
    keywords: ["comparar", "entrada", "saída", "diferença"]
  },
  {
    question: "Posso usar vistoria sem contrato?",
    answer: "Sim. É possível realizar vistorias independentes sem vínculo obrigatório com contrato. Útil para avaliações preventivas, documentação de estado de conservação ou registro antes de reformas.",
    category: "Vistoria Digital",
    keywords: ["sem", "contrato", "independente", "avulsa"]
  },
  {
    question: "O relatório pode ser enviado ao inquilino?",
    answer: "Sim. O relatório final da vistoria pode ser enviado automaticamente por e-mail ao inquilino, permitindo que ele tenha acesso completo à documentação do estado do imóvel no momento da entrada ou saída.",
    category: "Vistoria Digital",
    keywords: ["enviar", "inquilino", "relatório", "compartilhar"]
  },

  // ========== COBRANÇAS, PAGAMENTOS E SPLIT ==========
  {
    question: "Como criar cobrança única?",
    answer: "Para criar uma cobrança única, acesse o Contrato → Nova Cobrança, selecione o tipo de cobrança (aluguel, taxa, multa), defina valor, data de vencimento e meio de pagamento. A cobrança será gerada imediatamente.",
    category: "Cobranças e Pagamentos",
    keywords: ["cobrança", "única", "criar", "avulsa"]
  },
  {
    question: "Como criar cobrança recorrente?",
    answer: "Ao criar a cobrança, marque a opção 'Recorrente mensal' e defina o dia de vencimento. O sistema gerará automaticamente as cobranças mensais enquanto o contrato estiver ativo, sem necessidade de criar manualmente cada mês.",
    category: "Cobranças e Pagamentos",
    keywords: ["recorrente", "mensal", "automática", "repetir"]
  },
  {
    question: "Quais meios de pagamento?",
    answer: "A plataforma aceita três meios de pagamento principais: PIX (com QR Code e chave de pagamento), Boleto bancário registrado e Cartão de crédito (com possibilidade de parcelamento conforme o plano contratado).",
    category: "Cobranças e Pagamentos",
    keywords: ["pagamento", "meios", "formas", "pix", "boleto", "cartão"]
  },
  {
    question: "Existe taxa?",
    answer: "Sim. As taxas variam conforme o plano contratado e o gateway de pagamento utilizado. PIX geralmente tem taxas menores, seguido de boleto, e cartão de crédito possui taxas maiores devido ao processamento das operadoras.",
    category: "Cobranças e Pagamentos",
    keywords: ["taxa", "custo", "cobrança", "tarifa"]
  },
  {
    question: "Como funciona o split?",
    answer: "O split divide automaticamente o valor recebido entre as partes configuradas: MR3X (taxa da plataforma), agência imobiliária (se houver) e proprietário. A divisão acontece no momento do pagamento, conforme percentuais pré-definidos no contrato.",
    category: "Cobranças e Pagamentos",
    keywords: ["split", "divisão", "reparte", "distribuição"]
  },
  {
    question: "O split é configurável?",
    answer: "Sim. Os percentuais do split podem ser configurados individualmente para cada contrato, permitindo acordos personalizados entre agência e proprietário. As configurações são definidas no momento da criação do contrato.",
    category: "Cobranças e Pagamentos",
    keywords: ["split", "configurar", "personalizar", "percentual"]
  },
  {
    question: "O proprietário recebe automaticamente?",
    answer: "Sim. Após a compensação do pagamento e aplicação do split, o valor líquido do proprietário é transferido automaticamente para a conta bancária cadastrada, via repasse programado conforme as configurações estabelecidas.",
    category: "Cobranças e Pagamentos",
    keywords: ["receber", "automático", "proprietário", "transferência"]
  },
  {
    question: "O que é repasse?",
    answer: "Repasse é a transferência do valor líquido (após dedução de taxas e split) para a conta bancária do proprietário ou agência. É realizado automaticamente pelo sistema após confirmação do pagamento pelo inquilino.",
    category: "Cobranças e Pagamentos",
    keywords: ["repasse", "transferência", "envio", "pagamento"]
  },
  {
    question: "Quanto tempo leva o repasse?",
    answer: "O tempo varia por meio de pagamento: PIX é processado imediatamente ou em até 1 dia útil; Boleto depende da compensação bancária (geralmente 1-3 dias úteis); Cartão pode levar de 1 a 30 dias conforme a operadora e acordo comercial.",
    category: "Cobranças e Pagamentos",
    keywords: ["repasse", "prazo", "tempo", "demora"]
  },
  {
    question: "Posso ver extrato detalhado?",
    answer: "Sim. O sistema oferece extrato completo com todas as movimentações financeiras, incluindo valores recebidos, taxas cobradas, splits realizados e repasses efetuados. Pode ser filtrado por período, imóvel ou tipo de transação.",
    category: "Cobranças e Pagamentos",
    keywords: ["extrato", "detalhado", "movimentação", "histórico"]
  },
  {
    question: "Posso reprocessar pagamento falho?",
    answer: "Sim. Pagamentos que falharam por instabilidade técnica ou problemas temporários podem ser reprocessados manualmente através do painel administrativo, tentando novamente a transação com os mesmos dados.",
    category: "Cobranças e Pagamentos",
    keywords: ["reprocessar", "falha", "erro", "tentar novamente"]
  },
  {
    question: "O sistema reenvia boleto?",
    answer: "Sim. Boletos podem ser reenviados quantas vezes necessário através do painel do inquilino ou por solicitação ao suporte. O link e código de barras permanecem os mesmos enquanto não vencidos.",
    category: "Cobranças e Pagamentos",
    keywords: ["reenviar", "boleto", "enviar novamente", "link"]
  },
  {
    question: "O inquilino pode pagar via app?",
    answer: "Sim. O inquilino acessa seu painel pessoal onde visualiza todas as cobranças pendentes e pode efetuar pagamento diretamente, seja por PIX (copiando o código ou QR Code), imprimindo boleto ou pagando com cartão.",
    category: "Cobranças e Pagamentos",
    keywords: ["inquilino", "pagar", "app", "painel"]
  },
  {
    question: "Como funciona baixa automática?",
    answer: "Quando o pagamento é confirmado pelo gateway (PIX, boleto ou cartão), o sistema recebe a notificação automática e atualiza imediatamente o status da cobrança para 'Pago', dispara o split e programa o repasse.",
    category: "Cobranças e Pagamentos",
    keywords: ["baixa", "automática", "confirmar", "pagamento"]
  },
  {
    question: "Posso aplicar multa automática?",
    answer: "Sim. Configure percentual de multa (ex: 2%) e juros diários (ex: 0,033%) nas configurações do contrato. Após o vencimento, o sistema calcula e aplica automaticamente os acréscimos nas cobranças em atraso.",
    category: "Cobranças e Pagamentos",
    keywords: ["multa", "automática", "juros", "atraso"]
  },
  {
    question: "O sistema notifica atraso?",
    answer: "Sim. Notificações automáticas são enviadas por e-mail e WhatsApp ao inquilino em caso de atraso, conforme calendário configurado (ex: 1 dia, 5 dias, 10 dias após vencimento). As mensagens são personalizáveis.",
    category: "Cobranças e Pagamentos",
    keywords: ["notificar", "atraso", "aviso", "lembrete"]
  },
  {
    question: "Posso gerar recibo manualmente?",
    answer: "Sim. Para pagamentos realizados fora da plataforma (dinheiro, transferência direta), é possível gerar recibo manual informando valor, data e forma de pagamento. O recibo terá QR Code de validação.",
    category: "Cobranças e Pagamentos",
    keywords: ["recibo", "manual", "gerar", "criar"]
  },
  {
    question: "Recibos têm QR Code?",
    answer: "Sim. Todo recibo gerado pela plataforma, seja automático ou manual, possui QR Code único que permite validação de autenticidade através de consulta online, comprovando que foi emitido pelo sistema.",
    category: "Cobranças e Pagamentos",
    keywords: ["qrcode", "recibo", "validação", "autenticidade"]
  },
  {
    question: "Posso exportar cobranças?",
    answer: "Sim. É possível exportar relatórios de cobranças para Excel (XLSX) ou PDF, com filtros por período, status, imóvel ou inquilino. Útil para análises financeiras e prestação de contas.",
    category: "Cobranças e Pagamentos",
    keywords: ["exportar", "cobranças", "relatório", "excel"]
  },
  {
    question: "Posso parcelar dívida?",
    answer: "Sim. Através do módulo de acordos, é possível negociar parcelamento de dívidas com o inquilino, definindo número de parcelas, valores e vencimentos. O acordo pode incluir descontos sobre multas e juros.",
    category: "Cobranças e Pagamentos",
    keywords: ["parcelar", "dívida", "acordo", "negociação"]
  },

  // ========== ACORDOS E NOTIFICAÇÕES ==========
  {
    question: "Como criar acordo?",
    answer: "Acesse Contrato → Novo Acordo, selecione as cobranças em atraso que farão parte do acordo, defina condições (desconto, parcelamento, prazo) e gere o documento. O inquilino receberá link para aceite digital.",
    category: "Acordos e Notificações",
    keywords: ["criar", "acordo", "negociação", "proposta"]
  },
  {
    question: "Posso parcelar?",
    answer: "Sim. Acordos podem incluir parcelamento da dívida em até 12 vezes (ou conforme política da agência), com geração automática das cobranças mensais e acompanhamento do cumprimento do acordo.",
    category: "Acordos e Notificações",
    keywords: ["parcelar", "parcelas", "acordo", "dividir"]
  },
  {
    question: "O acordo gera contrato próprio?",
    answer: "Sim. Todo acordo gera um documento formal com termos, condições, valores e assinaturas das partes. Este documento fica vinculado ao contrato principal e pode ser assinado digitalmente.",
    category: "Acordos e Notificações",
    keywords: ["acordo", "contrato", "documento", "formalização"]
  },
  {
    question: "Posso enviar por WhatsApp?",
    answer: "Sim. Acordos e notificações podem ser enviados automaticamente via WhatsApp através da integração com WhatsApp Business API, incluindo link para visualização e aceite do acordo.",
    category: "Acordos e Notificações",
    keywords: ["whatsapp", "enviar", "mensagem", "acordo"]
  },
  {
    question: "Notificações podem ser personalizadas?",
    answer: "Sim. É possível personalizar textos, horários de envio, frequência e canal (e-mail, WhatsApp ou ambos) das notificações automáticas. Cada tipo de notificação possui configurações independentes.",
    category: "Acordos e Notificações",
    keywords: ["personalizar", "notificações", "customizar", "mensagens"]
  },
  {
    question: "Há modelos prontos?",
    answer: "Sim. A plataforma oferece modelos prontos de notificações para diferentes situações: vencimento próximo, atraso, proposta de acordo, renovação de contrato, reajuste de valores, entre outros. Todos editáveis.",
    category: "Acordos e Notificações",
    keywords: ["modelos", "templates", "prontos", "notificações"]
  },
  {
    question: "Posso enviar notificação automática?",
    answer: "Sim. Configure gatilhos automáticos baseados em eventos: dias antes/depois do vencimento, atrasos específicos, valor mínimo de dívida. O sistema enviará automaticamente conforme as regras estabelecidas.",
    category: "Acordos e Notificações",
    keywords: ["automática", "notificação", "envio", "trigger"]
  },
  {
    question: "Posso acompanhar leitura?",
    answer: "Sim. O sistema registra quando cada notificação foi enviada, entregue, visualizada e se houve interação (clique em links). Isso cria trilha de comunicação útil para comprovação de contato.",
    category: "Acordos e Notificações",
    keywords: ["acompanhar", "leitura", "rastreamento", "confirmação"]
  },
  {
    question: "Notificações têm validade jurídica?",
    answer: "Sim. Todas as notificações enviadas ficam registradas com data, hora, canal utilizado e comprovante de entrega, criando trilha de auditoria. Em conjunto com os registros, podem ser utilizadas como comprovação em processos.",
    category: "Acordos e Notificações",
    keywords: ["validade", "jurídica", "legal", "comprovação"]
  },
  {
    question: "Acordos podem ser assinados digitalmente?",
    answer: "Sim. Acordos gerados pela plataforma podem ser enviados para assinatura digital das partes envolvidas, garantindo validade jurídica e criando documento oficial certificado com hash de validação.",
    category: "Acordos e Notificações",
    keywords: ["assinatura", "digital", "acordo", "eletrônica"]
  },

  // ========== API, TOKENS E AUDITORIA ==========
  {
    question: "O que é API Client?",
    answer: "API Client é um tipo de usuário especial criado exclusivamente para realizar integrações técnicas entre a MR3X e sistemas externos (ERPs, plataformas de gestão, websites). Possui credenciais e permissões específicas para uso programático.",
    category: "API e Auditoria",
    keywords: ["api", "client", "integração", "sistema"]
  },
  {
    question: "Como gerar token?",
    answer: "Acesse Painel → API → Novo Token, defina nome identificador, selecione permissões necessárias (leitura/escrita) e prazo de validade. O token será exibido uma única vez após criação – guarde-o em local seguro.",
    category: "API e Auditoria",
    keywords: ["gerar", "token", "criar", "api"]
  },
  {
    question: "O token pode expirar?",
    answer: "Sim. Tokens podem ter prazo de validade definido na criação (30, 90, 180 dias ou sem expiração). Por segurança, recomendamos renovação periódica dos tokens, especialmente aqueles com permissões amplas.",
    category: "API e Auditoria",
    keywords: ["token", "expirar", "validade", "prazo"]
  },
  {
    question: "Posso revogar token?",
    answer: "Sim. Tokens podem ser revogados imediatamente através do painel de API. Após revogação, todas as requisições usando aquele token são bloqueadas instantaneamente, garantindo segurança em caso de vazamento.",
    category: "API e Auditoria",
    keywords: ["revogar", "cancelar", "bloquear", "token"]
  },
  {
    question: "O sistema registra mudanças?",
    answer: "Sim. Todas as alterações realizadas no sistema são registradas em trilha de auditoria completa, incluindo usuário responsável, data/hora, IP de origem, dados anteriores e novos valores. Nada é alterado sem rastreamento.",
    category: "API e Auditoria",
    keywords: ["registrar", "mudanças", "histórico", "log"]
  },
  {
    question: "Logs são acessíveis?",
    answer: "Sim. Usuários com perfil de Auditor possuem acesso completo aos logs e trilhas de auditoria. Gestores têm acesso aos logs de suas próprias operações. Logs são mantidos por tempo indeterminado para compliance.",
    category: "API e Auditoria",
    keywords: ["logs", "acessar", "consultar", "visualizar"]
  },
  {
    question: "Posso integrar ERP?",
    answer: "Sim. A MR3X oferece API REST completa que permite integração com ERPs, sistemas contábeis e outras plataformas. A documentação técnica da API está disponível para desenvolvedores autorizados.",
    category: "API e Auditoria",
    keywords: ["erp", "integrar", "conectar", "sistema"]
  },
  {
    question: "A API suporta CRUD?",
    answer: "Sim. A API oferece operações completas de CRUD (Create, Read, Update, Delete) para todas as entidades principais: imóveis, contratos, usuários, cobranças, com controle granular de permissões por token.",
    category: "API e Auditoria",
    keywords: ["api", "crud", "operações", "endpoints"]
  },
  {
    question: "A auditoria guarda IP e data?",
    answer: "Sim. Cada registro de auditoria inclui endereço IP de origem, data/hora exata com fuso horário, identificação do usuário, tipo de operação e dados completos da transação realizada.",
    category: "API e Auditoria",
    keywords: ["auditoria", "ip", "data", "rastreamento"]
  },
  {
    question: "O sistema detecta fraude?",
    answer: "Sim. O sistema possui alertas comportamentais que identificam padrões suspeitos como múltiplos acessos de IPs diferentes, tentativas de operações não autorizadas, alterações em massa ou comportamentos atípicos, gerando notificações para o administrador.",
    category: "API e Auditoria",
    keywords: ["fraude", "detectar", "segurança", "alerta"]
  },

  // ========== ERROS COMUNS ==========
  {
    question: "O que é erro 500?",
    answer: "Erro 500 é um erro interno do servidor. Geralmente indica problema temporário na aplicação ou banco de dados. Se persistir, entre em contato com suporte@mr3x.com.br informando o que estava fazendo quando ocorreu.",
    category: "Erros e Problemas",
    keywords: ["erro", "500", "servidor", "interno"]
  },
  {
    question: "O que é erro 502?",
    answer: "Erro 502 indica falha no gateway de comunicação entre servidores. Pode ser causado por manutenção, sobrecarga ou instabilidade temporária. Aguarde alguns minutos e tente novamente. Se persistir, contate o suporte.",
    category: "Erros e Problemas",
    keywords: ["erro", "502", "gateway", "comunicação"]
  },
  {
    question: "O que é Timeout Hostinger?",
    answer: "Timeout indica que uma operação demorou mais que o tempo limite permitido. Pode ser causado por lentidão do servidor, excesso de dados processados ou instabilidade da hospedagem. Tente dividir a operação em partes menores.",
    category: "Erros e Problemas",
    keywords: ["timeout", "lentidão", "demora", "servidor"]
  },
  {
    question: "Erro ao criar usuário?",
    answer: "Verifique se todos os campos obrigatórios estão preenchidos corretamente e se o e-mail não está já cadastrado no sistema. CPF/CNPJ também devem ser únicos. Confira se não há caracteres especiais indevidos nos campos.",
    category: "Erros e Problemas",
    keywords: ["erro", "criar", "usuário", "cadastro"]
  },
  {
    question: "Erro ao excluir imóvel?",
    answer: "Imóveis com contratos ativos não podem ser excluídos. É necessário primeiro encerrar ou cancelar todos os contratos vinculados. Alternativamente, use a opção de inativar ao invés de excluir para manter o histórico.",
    category: "Erros e Problemas",
    keywords: ["erro", "excluir", "imóvel", "deletar"]
  },
  {
    question: "Boleto não gerou?",
    answer: "Problemas na geração de boleto geralmente são causados por instabilidade temporária do gateway de pagamento. Verifique se os dados bancários estão corretos e tente novamente. Se persistir, entre em contato com o suporte.",
    category: "Erros e Problemas",
    keywords: ["boleto", "não", "gerar", "erro"]
  },
  {
    question: "PIX expirou?",
    answer: "Códigos PIX possuem validade limitada (geralmente 24 horas). Quando expirado, basta gerar um novo código PIX para a mesma cobrança através do painel do inquilino ou reenviar a cobrança.",
    category: "Erros e Problemas",
    keywords: ["pix", "expirou", "venceu", "validade"]
  },
  {
    question: "Cartão recusado?",
    answer: "Recusas de cartão são processadas pelo banco emissor e podem ter diversos motivos: limite insuficiente, restrição de segurança, dados incorretos ou bloqueio preventivo. O inquilino deve contatar seu banco para verificação.",
    category: "Erros e Problemas",
    keywords: ["cartão", "recusado", "negado", "pagamento"]
  },
  {
    question: "Upload falhou?",
    answer: "Falhas no upload geralmente ocorrem por arquivo muito grande (limite de 10MB por arquivo), formato não suportado ou instabilidade na conexão. Tente reduzir o tamanho do arquivo ou converter para formato PDF/JPG.",
    category: "Erros e Problemas",
    keywords: ["upload", "falhou", "envio", "arquivo"]
  },
  {
    question: "Assinatura digital não abriu?",
    answer: "Links de assinatura digital possuem validade de 30 dias. Se expirado, solicite reenvio através do painel. Se o link estiver válido mas não abrir, tente em outro navegador ou dispositivo. Limpe cache se necessário.",
    category: "Erros e Problemas",
    keywords: ["assinatura", "digital", "não", "abrir", "link"]
  },
  {
    question: "PDF inválido?",
    answer: "Erros de PDF inválido indicam arquivo corrompido ou danificado. Tente gerar o documento novamente pela plataforma. Se o erro persistir, pode ser problema de compatibilidade do leitor de PDF – tente outro programa.",
    category: "Erros e Problemas",
    keywords: ["pdf", "inválido", "corrompido", "erro"]
  },
  {
    question: "Erro ao salvar contrato?",
    answer: "Verifique se todos os campos obrigatórios estão preenchidos: dados do inquilino, valor do aluguel, prazo, vencimento. Cláusulas personalizadas muito longas podem causar erro – tente reduzir o texto.",
    category: "Erros e Problemas",
    keywords: ["erro", "salvar", "contrato", "gravar"]
  },
  {
    question: "Erro de permissão?",
    answer: "Erros de permissão indicam que seu nível de acesso é insuficiente para aquela operação. Verifique se você está usando o perfil correto (Gestor, Corretor, etc). Se necessário, solicite ao administrador ajuste de permissões.",
    category: "Erros e Problemas",
    keywords: ["permissão", "acesso", "negado", "erro"]
  },
  {
    question: "Erro ao atualizar repasse?",
    answer: "Erros no repasse geralmente ocorrem quando o gateway ainda não confirmou o pagamento. Aguarde a compensação completa (1-3 dias úteis para boleto). Se confirmado e ainda houver erro, contate o suporte técnico.",
    category: "Erros e Problemas",
    keywords: ["erro", "repasse", "atualizar", "pagamento"]
  },
  {
    question: "Instabilidade geral?",
    answer: "Instabilidades podem ocorrer durante horários de pico com alto tráfego no servidor. Geralmente são temporárias e resolvidas automaticamente. Se prolongada, acompanhe nosso status em tempo real ou contate o suporte.",
    category: "Erros e Problemas",
    keywords: ["instabilidade", "lentidão", "sistema", "travando"]
  },

  // ========== SEGURANÇA E PRIVACIDADE ==========
  {
    question: "A MR3X criptografa dados?",
    answer: "Sim. Todos os dados sensíveis são criptografados usando padrões de mercado (AES-256) tanto em trânsito (HTTPS/TLS) quanto em repouso no banco de dados. Senhas são armazenadas com hash irreversível (bcrypt).",
    category: "Segurança e Privacidade",
    keywords: ["criptografia", "segurança", "proteção", "dados"]
  },
  {
    question: "Quem vê dados financeiros?",
    answer: "Dados financeiros são acessíveis apenas ao Gestor da agência (se aplicável) e ao Proprietário do imóvel. Corretores podem ter acesso limitado conforme configuração. Inquilinos veem apenas suas próprias cobranças e pagamentos.",
    category: "Segurança e Privacidade",
    keywords: ["financeiro", "acesso", "visualizar", "privacidade"]
  },
  {
    question: "Tokens ficam visíveis depois?",
    answer: "Não. Por segurança, tokens de API são exibidos apenas uma vez no momento da criação. Depois disso, apenas parte do token fica visível (ex: abc...xyz). Se perder o token, será necessário gerar um novo.",
    category: "Segurança e Privacidade",
    keywords: ["token", "visível", "segurança", "esconder"]
  },
  {
    question: "Há autenticação 2FA?",
    answer: "Sim. A autenticação de dois fatores (2FA) está disponível e pode ser habilitada nas configurações de segurança da conta. Recomendamos fortemente seu uso para Gestores, Proprietários e perfis administrativos.",
    category: "Segurança e Privacidade",
    keywords: ["2fa", "autenticação", "dois fatores", "segurança"]
  },
  {
    question: "Senhas são armazenadas?",
    answer: "Não. Senhas nunca são armazenadas em texto puro. Utilizamos hash unidirecional com bcrypt e salt aleatório, tornando impossível recuperar a senha original. Apenas o usuário conhece sua senha real.",
    category: "Segurança e Privacidade",
    keywords: ["senha", "armazenar", "hash", "segurança"]
  },
  {
    question: "A MR3X compartilha dados?",
    answer: "Não. A MR3X não compartilha, vende ou cede dados dos usuários. Dados são compartilhados apenas com serviços técnicos essenciais (gateway de pagamento, assinatura digital) mediante integrações autorizadas e protegidas.",
    category: "Segurança e Privacidade",
    keywords: ["compartilhar", "dados", "privacidade", "lgpd"]
  },
  {
    question: "Posso ver acessos anteriores?",
    answer: "Sim. Nas configurações de segurança você pode visualizar histórico de acessos à sua conta, incluindo data, hora, IP e dispositivo utilizado. Isso ajuda a identificar acessos não autorizados.",
    category: "Segurança e Privacidade",
    keywords: ["acessos", "histórico", "login", "segurança"]
  },
  {
    question: "O sistema bloqueia IP suspeito?",
    answer: "Sim. O sistema possui proteção contra tentativas de acesso suspeitas, bloqueando temporariamente IPs com múltiplas tentativas de login falhadas ou comportamento anômalo. Administradores são notificados de atividades suspeitas.",
    category: "Segurança e Privacidade",
    keywords: ["bloquear", "ip", "suspeito", "proteção"]
  },
  {
    question: "Requisições são registradas?",
    answer: "Sim. Todas as requisições à API e operações importantes são registradas com timestamp, IP de origem, usuário e resultado. Estes logs são mantidos para auditoria de segurança e conformidade.",
    category: "Segurança e Privacidade",
    keywords: ["requisições", "registrar", "log", "auditoria"]
  },
  {
    question: "Há backup automático?",
    answer: "Sim. Backups automáticos completos do banco de dados são realizados diariamente, com cópias incrementais a cada 6 horas. Os backups são armazenados em servidores geograficamente distribuídos e criptografados.",
    category: "Segurança e Privacidade",
    keywords: ["backup", "automático", "segurança", "restauração"]
  },

  // ========== SUPORTE E OPERAÇÃO ==========
  {
    question: "Como pedir suporte?",
    answer: "Você pode solicitar suporte através do painel na opção 'Ajuda', enviando e-mail para suporte@mr3x.com.br ou através do chat disponível na plataforma. Descreva detalhadamente o problema para agilizar o atendimento.",
    category: "Suporte e Operação",
    keywords: ["suporte", "ajuda", "contato", "atendimento"]
  },
  {
    question: "Suporte atende fins de semana?",
    answer: "O suporte funciona em regime emergencial nos fins de semana e feriados para questões críticas que impeçam operação essencial. Para dúvidas e solicitações não urgentes, o atendimento completo retorna em dias úteis.",
    category: "Suporte e Operação",
    keywords: ["suporte", "fim de semana", "feriado", "atendimento"]
  },
  {
    question: "Qual o tempo médio de resposta?",
    answer: "O tempo médio de primeira resposta é de 2 a 24 horas em dias úteis, dependendo da complexidade e prioridade. Questões críticas têm atendimento prioritário. Respostas completas podem levar mais tempo conforme investigação necessária.",
    category: "Suporte e Operação",
    keywords: ["tempo", "resposta", "prazo", "suporte"]
  },
  {
    question: "Posso pedir treinamento?",
    answer: "Sim. Oferecemos treinamento personalizado para equipes de agências imobiliárias e proprietários com múltiplos imóveis. Entre em contato através de suporte@mr3x.com.br para agendar e conhecer as opções disponíveis.",
    category: "Suporte e Operação",
    keywords: ["treinamento", "capacitação", "curso", "aula"]
  },
  {
    question: "Existe roadmap público?",
    answer: "Sim. O roadmap de novas funcionalidades e melhorias planejadas está disponível na área da MR3X para usuários logados. Você pode acompanhar o desenvolvimento e até sugerir novos recursos através do formulário de feedback.",
    category: "Suporte e Operação",
    keywords: ["roadmap", "futuro", "novidades", "planejamento"]
  },

  // PERGUNTAS ORIGINAIS MANTIDAS
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