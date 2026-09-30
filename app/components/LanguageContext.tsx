'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    nav_services: 'Consultoria',
    nav_work: 'Práticas',
    nav_blog: 'Blog',
    nav_about: 'Sobre',
    nav_contact: 'Contato',
    hero_badge: 'Consultoria & Estratégia Tecnológica',
    hero_title_1: 'Consultoria Estratégica em',
    hero_title_2: 'Tecnologia, Arquitetura & Nuvem',
    hero_subtitle: 'Apoiamos líderes e empresas na tomada de decisões técnicas de alto impacto, modernização de sistemas legados e desenho de infraestruturas resilientes e de alta disponibilidade.',
    hero_cta_diagnostics: 'Agendar Sessão Consultiva',
    hero_cta_phrase: 'Agende uma reunião estratégica de 30 minutos com nossos consultores seniores.',
    hero_cta_contact: 'Fale com a GS Edge',
    hero_cta_solutions: 'Conheça nossas práticas',
    hero_cta_blog: 'Acesse nosso blog',
    hero_bento_metric_1_val: '99.99%',
    hero_bento_metric_1_lbl: 'Alta Disponibilidade & Uptime',
    hero_bento_metric_2_val: 'FinOps & ROI',
    hero_bento_metric_2_lbl: 'Otimização de Custos em Nuvem',
    hero_bento_metric_3_val: 'Zero SPOF',
    hero_bento_metric_3_lbl: 'Resiliência & Governança de Sistemas',
    services_title: 'Nossas Práticas de Consultoria',
    services_subtitle: 'Atuamos com profundidade técnica e imparcialidade em 3 frentes estratégicas da tecnologia corporativa.',
    service_1_title: 'Consultoria de Arquitetura de Sistemas & Nuvem',
    service_1_desc: 'Design de sistemas distribuídos, topologias de rede corporativa (SD-WAN/BGP), estratégias multicloud e blueprints de escalabilidade extrema.',
    service_2_title: 'Auditoria Técnica, Modernização & Governança',
    service_2_desc: 'Diagnóstico de dívida técnica, segurança perimetral, otimização FinOps de custos cloud e estratégias de modernização de sistemas legados.',
    service_3_title: 'Tech Leadership Advisory & Capacitação',
    service_3_desc: 'Atuação como Fractional CTO, mentoria para arquitetos e líderes técnicos, e workshops corporativos in-company em tecnologias críticas.',
    skills_badge: 'Ecossistema & Domínio Técnico',
    skills_title: 'Tecnologias & Arquiteturas sob Consultoria',
    skills_subtitle: 'Profundo domínio prático nas principais plataformas de nuvem, hardware de rede corporativo e arquiteturas modernas.',
    about_title: 'Sobre a GS Edge',
    about_p1: 'A GS Edge é uma consultoria especializada em tecnologia, arquitetura de sistemas e infraestrutura de missão crítica. Atuamos em 3 frentes estratégicas: Consultoria de Arquitetura de Sistemas e Nuvem, Auditoria Técnica & Modernização de Sistemas Legados e Tech Leadership Advisory & Capacitação Corporativa.',
    about_p2: 'Diferente de agências convencionais de desenvolvimento, não vendemos horas de programação genérica. Nosso foco é orientar decisões técnicas de alto impacto, mitigar riscos arquiteturais, otimizar custos operacionais e capacitar times internos para garantir vantagens tecnológicas sustentáveis.',
    about_mission_title: 'Missão',
    about_mission_desc: 'Orientar empresas e lideranças na concepção, governança e evolução de ecossistemas tecnológicos seguros, eficientes e de alta disponibilidade.',
    about_vision_title: 'Visão',
    about_vision_desc: 'Ser a principal consultoria de referência para tomada de decisão arquitetural, modernização de sistemas críticos e resiliência tecnológica.',
    about_values_title: 'Valores',
    about_values_desc: 'Independência tecnológica (vendor-neutral), profundidade técnica irrestrita, governança preventiva e foco absoluto no ROI do negócio.',
    recent_posts_badge: 'Artigos & Insights',
    recent_posts_title: 'Blog da GS Edge',
    recent_posts_subtitle: 'Artigos técnicos, arquitetura de sistemas, redes corporativas, governança e novidades sobre tecnologia.',
    all_categories: 'Todos os Artigos',
    related_posts_title: 'Artigos Recomendados',
    view_all: 'Ver todos os artigos',
    read_more: 'Ler artigo completo',
    back_to_blog: '← Voltar para o Blog',
    no_posts: 'Nenhum artigo publicado nesta categoria ainda.',
    share_title: 'Compartilhar artigo:',
    share_copy: 'Copiar Link',
    share_copied: 'Link Copiado!',
    share_linkedin: 'Compartilhar no LinkedIn',
    share_twitter: 'Compartilhar no X (Twitter)',
    share_whatsapp: 'Compartilhar no WhatsApp',
    share_facebook: 'Compartilhar no Facebook',
    work_title: 'Nossas Práticas',
    work_subtitle: 'Casos de consultoria, arquiteturas implementadas e projetos de governança técnica.',
    view_project: 'Ver Detalhes da Prática',
    contact_badge: 'Sessão Estratégica de 30 minutos',
    contact_title: 'Entre em Contato',
    contact_subtitle: 'Tem um desafio arquitetural ou precisa de uma auditoria técnica? Fale com a equipe de consultoria da GS Edge.',
    contact_cta_desc: 'Agende uma reunião consultiva de 30 minutos com nossos arquitetos seniores para conversarmos sobre arquitetura, sistemas legados e governança de infraestrutura.',
    contact_email_title: 'E-mail Consultivo & Suporte',
    contact_email_sub: 'Resposta rápida em até 24h úteis.',
    contact_name: 'Nome',
    contact_email: 'Seu E-mail',
    contact_subject: 'Assunto',
    contact_message: 'Mensagem',
    contact_submit: 'Enviar Mensagem',
    contact_success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    welcome_badge: 'Sessão Confirmada',
    welcome_title: 'Seja bem-vindo(a) à GS Edge!',
    welcome_subtitle: 'Sua Sessão Consultiva foi agendada com sucesso.',
    welcome_card_title: 'O que acontece agora?',
    welcome_step_1: 'Você receberá uma confirmação no seu e-mail com o link para a conferência.',
    welcome_step_2: 'Nossa equipe técnica revisará os desafios da sua empresa antes da sessão.',
    welcome_step_3: 'No horário agendado, discutiremos a melhor estratégia arquitetural para o seu cenário.',
    welcome_btn_home: 'Voltar para a Página Inicial',
    welcome_btn_blog: 'Acessar o Blog',
    nav_products: 'Labs & Soluções',
    products_badge: 'GS Edge Labs & Soluções Proprietárias',
    products_title: 'Inovação Aplicada & Soluções Proprietárias',
    products_subtitle: 'Desenvolvemos plataformas e simuladores proprietários para validar novas tecnologias, modelos de infraestrutura e engenharia na prática.',
    products_view_all: 'Explorar soluções dos Labs',
    products_learn_more: 'Acessar Detalhes & Plataforma',
    products_live_badge: 'Em Produção',
    products_beta_badge: 'Beta Fechado',
    products_coming_soon_badge: 'Em Breve',
    product_access_btn: 'Acessar GSMoney',
    product_access_sub: 'Abrir plataforma em nova aba',
    waitlist_badge: 'Lista VIP & Early Access',
    waitlist_title: 'Garanta seu Acesso Antecipado',
    waitlist_subtitle: 'Inscreva-se gratuitamente para receber convite prioritário no lançamento e benefícios exclusivos.',
    waitlist_name_placeholder: 'Seu nome',
    waitlist_email_placeholder: 'Seu melhor e-mail',
    waitlist_submit_btn: 'Entrar na Lista VIP Gratuitamente',
    waitlist_loading_btn: 'Confirmando inscrição...',
    waitlist_success_title: 'Você está na lista VIP!',
    waitlist_success_desc: 'Enviaremos novidades do desenvolvimento e seu convite prioritário de acesso antecipado.',
    waitlist_privacy_note: '🔒 Respeitamos sua privacidade. Zero spam e dados 100% seguros.',
    faq_title: 'Perguntas Frequentes',
    faq_subtitle: 'Tudo o que você precisa saber antes de começar.',
    back_to_products: 'Voltar para Labs',
  },
  en: {
    nav_services: 'Consulting',
    nav_work: 'Practices',
    nav_blog: 'Blog',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: 'Technology & Architecture Advisory',
    hero_title_1: 'Strategic Consulting in',
    hero_title_2: 'Technology, Architecture & Cloud',
    hero_subtitle: 'We empower technology leaders to make high-impact technical decisions, modernize legacy ecosystems, and architect resilient, high-availability digital infrastructures.',
    hero_cta_diagnostics: 'Schedule Advisory Session',
    hero_cta_phrase: 'Book a 30-minute strategic consultation with our principal technology consultants.',
    hero_cta_contact: 'Contact GS Edge',
    hero_cta_solutions: 'Explore Consulting Practices',
    hero_cta_blog: 'Read Our Blog',
    hero_bento_metric_1_val: '99.99%',
    hero_bento_metric_1_lbl: 'High Availability & Uptime',
    hero_bento_metric_2_val: 'FinOps & ROI',
    hero_bento_metric_2_lbl: 'Cloud Cost Optimization',
    hero_bento_metric_3_val: 'Zero SPOF',
    hero_bento_metric_3_lbl: 'Resilience & Systems Governance',
    services_title: 'Our Consulting Practices',
    services_subtitle: 'Delivering deep technical expertise and vendor-neutral counsel across 3 strategic pillars of modern enterprise technology.',
    service_1_title: 'Systems & Cloud Architecture Consulting',
    service_1_desc: 'Distributed systems design, enterprise network topologies (SD-WAN/BGP), multi-cloud strategies, and extreme scalability blueprints.',
    service_2_title: 'Technical Audits, Modernization & Governance',
    service_2_desc: 'Deep-dive audits into technical debt, perimeter security, cloud FinOps cost reduction, and pragmatic legacy modernization strategies.',
    service_3_title: 'Tech Leadership Advisory & Enablement',
    service_3_desc: 'Fractional CTO advisory, architecture mentorship for tech leads, and specialized corporate enablement workshops in critical technologies.',
    skills_badge: 'Consulting Stack & Ecosystem',
    skills_title: 'Technologies & Architectures Under Advisory',
    skills_subtitle: 'Deep hands-on mastery across enterprise networking hardware, public cloud platforms, and modern system architectures.',
    about_title: 'About GS Edge',
    about_p1: 'GS Edge is a strategic technology consulting firm specializing in systems architecture and mission-critical infrastructure. We operate across 3 core pillars: Systems & Cloud Architecture Consulting, Technical Audits & Legacy Modernization, and Tech Leadership Advisory & Corporate Enablement.',
    about_p2: 'Unlike conventional software development agencies, we do not sell generic coding hours. Our mission is to guide high-stakes technical decisions, de-risk architectures, optimize infrastructure costs, and empower internal teams to build sustainable technological advantages.',
    about_mission_title: 'Mission',
    about_mission_desc: 'Empower organizations and technology leaders to design, govern, and evolve secure, cost-effective, and highly available technological ecosystems.',
    about_vision_title: 'Vision',
    about_vision_desc: 'To be the premier benchmark consultancy for architectural decision-making, mission-critical systems modernization, and operational resilience.',
    about_values_title: 'Values',
    about_values_desc: 'Vendor-neutral independence, uncompromising technical rigor, preventative governance, and relentless focus on business ROI and stability.',
    recent_posts_badge: 'Knowledge & Insights',
    recent_posts_title: 'GS Edge Tech Blog',
    recent_posts_subtitle: 'Technical articles, software engineering insights, cloud, networks, and tech updates.',
    all_categories: 'All Articles',
    related_posts_title: 'Recommended Articles',
    view_all: 'View all articles',
    read_more: 'Read full article',
    back_to_blog: '← Back to Blog',
    no_posts: 'No articles published in this category yet.',
    share_title: 'Share article:',
    share_copy: 'Copy Link',
    share_copied: 'Link Copied!',
    share_linkedin: 'Share on LinkedIn',
    share_twitter: 'Share on X (Twitter)',
    share_whatsapp: 'Share on WhatsApp',
    share_facebook: 'Share on Facebook',
    work_title: 'Our Practices',
    work_subtitle: 'Featured advisory engagements, architecture blueprints, and technical governance projects.',
    view_project: 'View Practice Details',
    contact_badge: '30-Minute Strategic Consultation',
    contact_title: 'Get in Touch',
    contact_subtitle: 'Facing an architectural challenge or need a technical audit? Connect with the GS Edge consulting team.',
    contact_cta_desc: 'Book a 30-minute strategic consultation with our principal advisors to discuss systems architecture, legacy modernizations, and infrastructure governance.',
    contact_email_title: 'Commercial & Advisory Inquiries',
    contact_email_sub: 'Prompt response within 24 business hours.',
    contact_name: 'Name',
    contact_email: 'Your Email',
    contact_subject: 'Subject',
    contact_message: 'Message',
    contact_submit: 'Send Message',
    contact_success: 'Message sent successfully! We will get back to you shortly.',
    welcome_badge: 'Consultation Confirmed',
    welcome_title: 'Welcome to GS Edge!',
    welcome_subtitle: 'Your Strategic Advisory session has been successfully scheduled.',
    welcome_card_title: 'What happens next?',
    welcome_step_1: 'You will receive an email confirmation containing the video call link.',
    welcome_step_2: 'Our principal consultants will review your technical context prior to the call.',
    welcome_step_3: 'During the session, we will outline the optimal architectural approach for your goals.',
    welcome_btn_home: 'Return to Homepage',
    welcome_btn_blog: 'Explore Our Blog',
    nav_products: 'Labs & Assets',
    products_badge: 'GS Edge Labs & Proprietary Technology Assets',
    products_title: 'Applied Innovation & Proprietary Assets',
    products_subtitle: 'Proprietary platforms and simulators engineered to validate emerging technologies, infrastructure modeling, and engineering practices.',
    products_view_all: 'Explore Labs Solutions',
    products_learn_more: 'Learn More & Access Platform',
    products_live_badge: 'Live',
    products_beta_badge: 'Closed Beta',
    products_coming_soon_badge: 'Coming Soon',
    product_access_btn: 'Access GSMoney',
    product_access_sub: 'Open platform in a new tab',
    waitlist_badge: 'VIP List & Early Access',
    waitlist_title: 'Secure Your Early Access',
    waitlist_subtitle: 'Sign up for free to receive priority invites at launch and exclusive founding member perks.',
    waitlist_name_placeholder: 'Your name',
    waitlist_email_placeholder: 'Your best email address',
    waitlist_submit_btn: 'Join Free VIP Waitlist',
    waitlist_loading_btn: 'Securing your spot...',
    waitlist_success_title: 'You are on the VIP list!',
    waitlist_success_desc: 'We will share product development updates and your early access invitation.',
    waitlist_privacy_note: '🔒 We respect your privacy. Zero spam and 100% data security.',
    faq_title: 'Frequently Asked Questions',
    faq_subtitle: 'Everything you need to know before getting started.',
    back_to_products: 'Back to Labs',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'pt') && savedLang !== language) {
      requestAnimationFrame(() => setLanguage(savedLang));
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
