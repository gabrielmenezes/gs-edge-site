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
      badge: 'Lista VIP & Early Access',
      status: 'coming_soon',
      statusLabel: 'Em Breve',
      category: 'Finanças Pessoais & Investimentos',
      summary: 'Plataforma inteligente de gestão financeira baseada na divisão estratégica da sua renda em potes e no planejamento visual do seu patrimônio rumo à independência.',
      description: 'O GSMoney transforma a forma como você lida com dinheiro. Em vez de apenas registrar gastos do passado em planilhas chatas, você assume o controle proativo do seu fluxo financeiro com um método comprovado de alocação de renda, metas de curto e médio prazo e trilha de patrimônio rumo à liberdade financeira.',
      targetAudience: 'Indivíduos, profissionais liberais e donos de negócios que buscam clareza total sobre suas finanças pessoais e um plano prático de investimentos.',
      pricingPreview: 'Gratuito durante o Beta • Planos a partir de R$ 19,90/mês no lançamento',
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
          question: 'Quando o GSMoney será lançado?',
          answer: 'O GSMoney está atualmente em fase de desenvolvimento avançado. Os inscritos na Lista VIP terão acesso antecipado exclusivo (Beta Fechado) com condições especiais e descontos vitalícios.',
        },
        {
          question: 'Como funciona a Lista de Espera / Early Access?',
          answer: 'Basta cadastrar seu nome e e-mail no formulário desta página. Você receberá convites prioritários para testar a plataforma antes de todo mundo e terá canal direto para sugerir melhorias.',
        },
        {
          question: 'O GSMoney conecta com bancos?',
          answer: 'Sim, na versão completa ofereceremos integração bancária segura (Open Finance) para sincronização automática de extratos, além da opção de inserção manual e importação de arquivos para quem prefere controle total.',
        },
        {
          question: 'Meus dados estarão seguros?',
          answer: 'Absolutamente. Utilizamos criptografia de nível bancário em trânsito e em repouso. A GS Edge segue rigorosos padrões de segurança da informação e engenharia de software.',
        },
      ],
      metaTitle: 'GSMoney | Controle Financeiro Inteligente & Liberdade Financeira',
      metaDescription: 'Organize suas finanças pessoais com o método dos 4 potes, planeje seus investimentos e alcance sua liberdade financeira com o GSMoney.',
    },
  ],
  en: [
    {
      slug: 'gsmoney',
      name: 'GSMoney',
      tagline: 'The ultimate personal financial system to build your financial independence.',
      badge: 'VIP List & Early Access',
      status: 'coming_soon',
      statusLabel: 'Coming Soon',
      category: 'Personal Finance & Wealth Management',
      summary: 'Smart financial management platform powered by strategic income allocation and visual wealth progression toward true financial freedom.',
      description: 'GSMoney changes how you manage money. Instead of simply tracking past expenses on tedious spreadsheets, take proactive control of your cash flow with a proven income bucket strategy, goal-oriented savings, and clear path to financial independence.',
      targetAudience: 'Individuals, freelancers, and small business owners seeking absolute clarity over personal finances and actionable wealth growth.',
      pricingPreview: 'Free during Beta • Plans starting at $4.90/month at launch',
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
          question: 'When will GSMoney launch?',
          answer: 'GSMoney is currently in advanced development. VIP Waitlist subscribers will receive priority access to the closed beta with exclusive founder perks and discounts.',
        },
        {
          question: 'How does Early Access work?',
          answer: 'Simply enter your name and email on this page. You will get an exclusive invitation to test the application before the general public with direct feedback channels.',
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
