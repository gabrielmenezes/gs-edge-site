export type ProductStatus = 'live' | 'beta' | 'coming_soon';

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductPillar {
  title: string;
  percentage?: string;
  subtitle: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  summary: string;
  description: string;
  targetAudience: string;
  pricingPreview?: string;
  appUrl?: string;
  demoUrl?: string;
  accentColor?: string;
  pillarsTitle?: string;
  pillarsSubtitle?: string;
  pillars?: ProductPillar[];
  featuresTitle?: string;
  featuresSubtitle?: string;
  features: ProductFeature[];
  stats?: { value: string; label: string }[];
  faqs?: ProductFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const productsData: Record<'pt' | 'en', Product[]> = {
  pt: [
    {
      slug: 'gsmoney',
      name: 'GSMoney',
      tagline: 'O controle financeiro pessoal definitivo para construir sua liberdade financeira.',
      badge: 'Plataforma Online',
      status: 'live',
      statusLabel: 'Disponível',
      appUrl: 'https://gsmoney.gsedge.com.br',
      demoUrl: 'https://gsmoney.gsedge.com.br',
      category: 'Finanças Pessoais & Investimentos',
      summary: 'Plataforma inteligente de gestão financeira baseada na divisão estratégica da sua renda em potes e no planejamento visual do seu patrimônio rumo à independência.',
      description: 'O GSMoney transforma a forma como você lida com dinheiro. Em vez de apenas registrar gastos do passado em planilhas chatas, você assume o controle proativo do seu fluxo financeiro com um método comprovado de alocação de renda, metas de curto e médio prazo e trilha de patrimônio rumo à liberdade financeira.',
      targetAudience: 'Indivíduos, profissionais liberais e donos de negócios que buscam clareza total sobre suas finanças pessoais e um plano prático de investimentos.',
      pricingPreview: 'Acesso Online Disponível • Comece Agora',
      accentColor: 'from-emerald-400 to-cyan-400',
      pillarsTitle: 'A Metodologia GSMoney',
      pillarsSubtitle: 'Uma estratégia prática e equilibrada para fazer seu dinheiro trabalhar por você sem abrir mão do presente.',
      pillars: [
        {
          title: 'Gastos Essenciais & Moradia',
          percentage: '50% a 55%',
          subtitle: 'A base do seu custo de vida',
          description: 'Custos fundamentais para sua sobrevivência e rotina: moradia, alimentação básica, saúde, contas fixas e transporte.',
        },
        {
          title: 'Liberdade Financeira & Investimentos',
          percentage: '20% a 30%',
          subtitle: 'Seu futuro e patrimônio que rende juros',
          description: 'Aporte mensal sagrado para reserva de emergência, renda fixa e ativos geradores de renda passiva para conquistar a independência.',
        },
        {
          title: 'Sonhos & Metas de Médio Prazo',
          percentage: '10% a 15%',
          subtitle: 'Projetos com data para acontecer',
          description: 'Potes dedicados para viagens, compra ou troca de veículo, cursos, reformas ou grandes conquistas sem se endividar.',
        },
        {
          title: 'Gastos Livres & Lazer',
          percentage: '10% a 15%',
          subtitle: 'Aproveite o presente com consciência',
          description: 'Orçamento sem culpa para restaurantes, hobbies, compras pessoais e momentos de descontração com a família e amigos.',
        },
      ],
      featuresTitle: 'Recursos Desenhados para sua Transformação Financeira',
      featuresSubtitle: 'Tecnologia moderna, interface fluida e sem complexidade desnecessária.',
      features: [
        {
          title: 'Divisão Inteligente de Salário',
          description: 'Ao registrar sua renda mensal, o GSMoney divide automaticamente seus recursos nos potes ideais conforme o seu momento financeiro.',
        },
        {
          title: 'Trilha da Independência Financeira',
          description: 'Simulador visual que calcula quanto você precisa acumular e qual seu prazo estimado para viver de renda com base nos seus aportes.',
        },
        {
          title: 'Cofres de Sonhos com Metas Claras',
          description: 'Crie cofrinhos digitais com prazos e valores alvo para acompanhar o progresso de cada sonho de forma motivadora.',
        },
        {
          title: 'Categorização Automática & Sem Fricção',
          description: 'Lance despesas em poucos cliques e visualize alertas preventivos antes de estourar o teto de qualquer categoria.',
        },
        {
          title: 'Privacidade & Criptografia Ponta a Ponta',
          description: 'Seus dados financeiros pertencem apenas a você. Segurança de ponta, sem venda de dados e com conformidade total com a LGPD.',
        },
        {
          title: 'Acesso Multiplataforma',
          description: 'Acesse suas finanças pelo computador, tablet ou smartphone com experiência fluida e sincronização em tempo real.',
        },
      ],
      stats: [
        { value: '4 Potes', label: 'Estratégia comprovada de alocação de renda' },
        { value: '100%', label: 'Privacidade e segurança dos seus dados' },
        { value: '0 Planilhas', label: 'Diga adeus a fórmulas manuais e quebras' },
      ],
      faqs: [
        {
          question: 'O que é o GSMoney?',
          answer: 'O GSMoney é um aplicativo SaaS de finanças pessoais focado em planejamento inteligente, método de divisão de renda por objetivos e construção de patrimônio rumo à liberdade financeira.',
        },
        {
          question: 'Como posso acessar o GSMoney?',
          answer: 'O GSMoney já pode ser acessado diretamente através do link oficial https://gsmoney.gsedge.com.br. Você pode criar sua conta e começar a gerenciar seu fluxo financeiro agora mesmo.',
        },
        {
          question: 'O GSMoney conecta com bancos?',
          answer: 'Sim, na versão completa oferecemos integração bancária segura (Open Finance) para sincronização automática de extratos, além da opção de inserção manual e importação de arquivos para quem prefere controle total.',
        },
        {
          question: 'Meus dados estarão seguros?',
          answer: 'Absolutamente. Utilizamos criptografia de nível bancário em trânsito e em repouso. A GS Edge segue rigorosos padrões de segurança da informação e engenharia de software.',
        },
      ],
      metaTitle: 'GSMoney | Controle Financeiro Inteligente & Liberdade Financeira',
      metaDescription: 'Organize suas finanças pessoais com o método dos 4 potes, planeje seus investimentos e alcance sua liberdade financeira com o GSMoney.',
    },
    {
      slug: 'gsedge-dc-game',
      name: 'Hyperscale: Cloud & DC Manager',
      tagline: 'O simulador definitivo de engenharia, infraestrutura e expansão de Data Centers.',
      badge: 'Em Breve',
      status: 'coming_soon',
      statusLabel: 'Em Breve',
      category: 'Games & Simulação Cloud',
      summary: 'Construa, refrigere e escale seu Data Center desde a era da garagem até o Hyperscale Cloud. Gerencie energia, racks, contratos corporativos de SLA e resolva crises de rede em tempo real.',
      description: 'Hyperscale: Cloud & DC Manager é um jogo de estratégia e simulação profunda de infraestrutura de TI. Você assume o papel de Lead Data Center Architect, gerenciando capacidade térmica, racks de servidores de alta densidade, geradores de emergência a diesel, contratos de SLA rigorosos e mitigação de desastres em tempo real.',
      targetAudience: 'Engenheiros de redes, arquitetos de nuvem, administradores de sistemas, estudantes de TI e entusiastas de jogos de simulação e tycoon.',
      pricingPreview: 'Gratuito na Web • Lançamento em Breve',
      accentColor: 'from-cyan-400 to-indigo-500',
      pillarsTitle: 'Os 4 Pilares da Simulação de Data Center',
      pillarsSubtitle: 'Engenharia de missão crítica reproduzida em uma experiência interativa e envolvente.',
      pillars: [
        {
          title: 'Da Garagem ao Hyperscale Cloud',
          percentage: '4 Eras',
          subtitle: 'Árvore de evolução tecnológica',
          description: 'Comece com servidores torre em uma garagem modesta e desbloqueie arquiteturas Tier III/IV e clusters de IA de última geração.',
        },
        {
          title: 'Gestão Térmica & Energia Crítica',
          percentage: 'PUE & kW',
          subtitle: 'Eficiência e refrigeração de precisão',
          description: 'Monitore o consumo em kW, temperatura ambiente dos corredores quentes/frios e mantenha geradores a diesel abastecidos.',
        },
        {
          title: 'Contratos de SLA & Clientes Corporativos',
          percentage: '99.99%',
          subtitle: 'Uptime, reputação e fluxo financeiro',
          description: 'Feche contratos de hosting de alta densidade, honre prazos de disponibilidade e evite multas catastróficas por indisponibilidade.',
        },
        {
          title: 'Mitigação de Crises & Incidentes',
          percentage: 'Tempo Real',
          subtitle: 'Cortes de fibra, DDoS e falhas de hardware',
          description: 'Tome decisões estratégicas rápidas quando cabos de fibra romperem, discos quebrarem ou tempestades desarmarem a subestação principal.',
        },
      ],
      featuresTitle: 'Mecânicas Desenhadas por Engenheiros de Redes',
      featuresSubtitle: 'Fidelidade técnica com uma interface moderna, gráficos retro-futuristas e jogabilidade fluida.',
      features: [
        {
          title: 'Visão Isométrica do NOC & Racks',
          description: 'Visualize sua sala de servidores em perspectiva isométrica, inspecione lâminas individuais e acompanhe LEDs de atividade.',
        },
        {
          title: 'Árvore Tecnológica de 4 Eras',
          description: 'Pesquise e desbloqueie tecnologias que moldaram a computação moderna: de roteadores legados a fabrics Spine-Leaf de 400Gbps.',
        },
        {
          title: 'Telemetria em Tempo Real',
          description: 'Monitore gráficos ao vivo de consumo elétrico, emissão de calor, carga de rede e eficiência energética (PUE).',
        },
        {
          title: 'Sistema de Geradores & Redundância',
          description: 'Configure contingências com geradores a diesel automáticos para quando a concessionária de energia falhar.',
        },
        {
          title: 'Economia & Expansão de Negócios',
          description: 'Gerencie empréstimos bancários, taxas de juros, expansão imobiliária e mantenha sua empresa longe da falência.',
        },
        {
          title: '100% Web & Sem Instalação',
          description: 'Jogue direto no navegador em qualquer computador com carregamento instantâneo e sem downloads pesados.',
        },
      ],
      stats: [
        { value: '4 Eras', label: 'Evolução da Garagem ao Hyperscale' },
        { value: 'Tier I-IV', label: 'Níveis reais de arquitetura e redundância' },
        { value: '99.99%', label: 'SLA corporativo a manter' },
      ],
      metaTitle: 'Hyperscale: Cloud & DC Manager | Simulador de Data Center & Cloud Tycoon',
      metaDescription: 'Construa e gerencie seu próprio império de Data Centers. Simulador estratégico de infraestrutura de TI da GS Edge.',
    },
  ],
  en: [
    {
      slug: 'gsmoney',
      name: 'GSMoney',
      tagline: 'The ultimate personal financial system to build your financial independence.',
      badge: 'Live Platform',
      status: 'live',
      statusLabel: 'Live',
      appUrl: 'https://gsmoney.gsedge.com.br',
      demoUrl: 'https://gsmoney.gsedge.com.br',
      category: 'Personal Finance & Wealth Management',
      summary: 'Smart financial management platform powered by strategic income allocation and visual wealth progression toward true financial freedom.',
      description: 'GSMoney changes how you manage money. Instead of simply tracking past expenses on tedious spreadsheets, take proactive control of your cash flow with a proven income bucket strategy, goal-oriented savings, and clear path to financial independence.',
      targetAudience: 'Individuals, freelancers, and small business owners seeking absolute clarity over personal finances and actionable wealth growth.',
      pricingPreview: 'Online Access Available • Get Started',
      accentColor: 'from-emerald-400 to-cyan-400',
      pillarsTitle: 'The GSMoney Methodology',
      pillarsSubtitle: 'A balanced, proven framework to make your money work for you without sacrificing the present.',
      pillars: [
        {
          title: 'Essential Living Expenses',
          percentage: '50% to 55%',
          subtitle: 'The foundation of your daily life',
          description: 'Core living costs: housing, essential groceries, healthcare, utilities, and necessary transportation.',
        },
        {
          title: 'Financial Freedom & Investing',
          percentage: '20% to 30%',
          subtitle: 'Your future and compound interest engine',
          description: 'Consistent monthly contributions to emergency funds, index funds, and yield-generating assets.',
        },
        {
          title: 'Medium-Term Goals & Dreams',
          percentage: '10% to 15%',
          subtitle: 'Projects with a timeline',
          description: 'Dedicated buckets for travel, vehicle upgrades, education, home renovations, and major life milestones without debt.',
        },
        {
          title: 'Guilt-Free Spending & Leisure',
          percentage: '10% to 15%',
          subtitle: 'Enjoy the journey responsibly',
          description: 'Guilt-free budget for dining out, entertainment, personal hobbies, and unforgettable experiences with family and friends.',
        },
      ],
      featuresTitle: 'Designed for True Financial Transformation',
      featuresSubtitle: 'Modern architecture, seamless user experience, and zero unnecessary friction.',
      features: [
        {
          title: 'Smart Salary Allocation',
          description: 'When logging income, GSMoney automatically distributes funds across your strategic buckets according to your financial profile.',
        },
        {
          title: 'Financial Independence Roadmap',
          description: 'Interactive visual simulator calculating your target portfolio size and timeline to live off passive investment returns.',
        },
        {
          title: 'Goal Vaults with Timelines',
          description: 'Create dedicated target vaults with milestone deadlines and track visual progress as you get closer to your dreams.',
        },
        {
          title: 'Seamless Expense Tracking',
          description: 'Quick expense logging with proactive warnings before you exceed limits in any allocated bucket.',
        },
        {
          title: 'End-to-End Privacy & Security',
          description: 'Your financial data is strictly yours. Bank-grade encryption, zero data selling, and full data sovereignty.',
        },
        {
          title: 'Cross-Platform Experience',
          description: 'Access your wealth dashboard from desktop, tablet, or smartphone with real-time cloud synchronization.',
        },
      ],
      stats: [
        { value: '4 Buckets', label: 'Proven strategic income allocation model' },
        { value: '100%', label: 'Data privacy & enterprise-grade encryption' },
        { value: '0 Spreadsheets', label: 'Say goodbye to broken formulas and manual work' },
      ],
      faqs: [
        {
          question: 'What is GSMoney?',
          answer: 'GSMoney is a modern personal finance SaaS designed for proactive income allocation, goal budgeting, and long-term wealth building toward financial freedom.',
        },
        {
          question: 'How do I access GSMoney?',
          answer: 'You can directly access GSMoney at https://gsmoney.gsedge.com.br to start managing your income, buckets, and wealth targets right away.',
        },
        {
          question: 'Does GSMoney connect with bank accounts?',
          answer: 'Yes! The full release will offer secure open banking sync for effortless transaction imports, alongside manual entry and CSV import options for complete privacy.',
        },
        {
          question: 'Is my financial data secure?',
          answer: 'Absolutely. We apply bank-grade encryption in transit and at rest. GS Edge follows strict security and software engineering standards.',
        },
      ],
      metaTitle: 'GSMoney | Smart Personal Finance & Financial Freedom',
      metaDescription: 'Take control of your personal finances with the 4-bucket methodology, goal budgeting, and wealth roadmap with GSMoney.',
    },
    {
      slug: 'gsedge-dc-game',
      name: 'Hyperscale: Cloud & DC Manager',
      tagline: 'The ultimate IT infrastructure, data center operations, and cloud tycoon simulation.',
      badge: 'Coming Soon',
      status: 'coming_soon',
      statusLabel: 'Coming Soon',
      category: 'Gaming & Cloud Simulation',
      summary: 'Build, cool, and scale your data center from a humble garage setup to a global Hyperscale Cloud. Manage power, racks, enterprise SLAs, and resolve real-time network crises.',
      description: 'Hyperscale: Cloud & DC Manager is a deep IT infrastructure simulation game. Step into the shoes of a Lead Data Center Architect managing thermal loads, high-density server racks, backup diesel generators, strict enterprise SLA contracts, and real-time incident mitigation.',
      targetAudience: 'Network engineers, cloud architects, sysadmins, IT students, and tycoon game enthusiasts.',
      pricingPreview: 'Free Web Experience • Coming Soon',
      accentColor: 'from-cyan-400 to-indigo-500',
      pillarsTitle: 'The 4 Pillars of Data Center Simulation',
      pillarsSubtitle: 'Mission-critical engineering translated into an addictive, hands-on strategy simulation.',
      pillars: [
        {
          title: 'From Garage to Hyperscale',
          percentage: '4 Eras',
          subtitle: 'Evolutionary computing tech tree',
          description: 'Start with budget tower servers in a home garage and progress to enterprise Tier IV cloud facilities and modern AI compute clusters.',
        },
        {
          title: 'Thermal & Power Grid Management',
          percentage: 'PUE & kW',
          subtitle: 'Precision cooling and efficiency',
          description: 'Manage total kW draw, hot/cold aisle temperatures, precision CRAC units, and keep backup diesel tanks filled for grid blackouts.',
        },
        {
          title: 'Enterprise SLAs & Contracts',
          percentage: '99.99%',
          subtitle: 'Uptime, client trust, and cash flow',
          description: 'Secure high-paying corporate hosting contracts, fulfill strict availability promises, and avoid devastating downtime penalties.',
        },
        {
          title: 'Crisis & Disaster Mitigation',
          percentage: 'Real-Time',
          subtitle: 'Fiber cuts, DDoS, and hardware failures',
          description: 'Make critical triage decisions during catastrophic events like backbone fiber cuts, massive DDoS attacks, and power substation failures.',
        },
      ],
      featuresTitle: 'Built with Network Engineering Fidelity',
      featuresSubtitle: 'Technical realism combined with polished isometric visuals, retro-futuristic soundscapes, and smooth gameplay.',
      features: [
        {
          title: 'Isometric NOC & Rack View',
          description: 'Inspect your server room in detailed isometric view with animated LEDs, rack utilization indicators, and power draw gauges.',
        },
        {
          title: '4 Eras Tech Tree',
          description: 'Research historical and cutting-edge networking and compute milestones, from legacy 100Mbps Ethernet to 400Gbps Spine-Leaf fabrics.',
        },
        {
          title: 'Live Telemetry & Diagnostics',
          description: 'Track real-time graphs of power consumption, thermal dissipation, network traffic, and PUE energy efficiency.',
        },
        {
          title: 'Diesel Generators & Grid Contingency',
          description: 'Deploy automated emergency power systems and manage fuel reserves to maintain 100% uptime during city grid outages.',
        },
        {
          title: 'Financial & Business Tycoon',
          description: 'Manage bank loans, interest rates, facility real estate expansion, and navigate your enterprise to massive profitability.',
        },
        {
          title: '100% Web-Based & Instant Load',
          description: 'Play instantly in your modern web browser on any desktop device with zero installation or downloads required.',
        },
      ],
      stats: [
        { value: '4 Eras', label: 'Garage to Hyperscale Progression' },
        { value: 'Tier I-IV', label: 'Realistic data center redundancy levels' },
        { value: '99.99%', label: 'Enterprise uptime SLA to maintain' },
      ],
      metaTitle: 'Hyperscale: Cloud & DC Manager | Data Center & Cloud Tycoon Simulation',
      metaDescription: 'Build, cool, and manage your data center empire. Deep IT infrastructure strategy game by GS Edge.',
    },
  ],
};

export function getAllProducts(lang: 'pt' | 'en' = 'pt'): Product[] {
  return productsData[lang] || productsData.pt;
}

export function getProductBySlug(slug: string, lang: 'pt' | 'en' = 'pt'): Product | null {
  const products = getAllProducts(lang);
  return products.find((p) => p.slug.toLowerCase() === slug.toLowerCase()) || null;
}

export function getProductSlugs(): string[] {
  return productsData.pt.map((p) => p.slug);
}
