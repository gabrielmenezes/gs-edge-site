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
    nav_services: 'Serviços',
    nav_work: 'Soluções',
    nav_blog: 'Blog',
    nav_about: 'Sobre',
    nav_contact: 'Contato',
    hero_badge: 'Engenharia & Soluções em TI',
    hero_title_1: 'Transformando Negócios com',
    hero_title_2: 'Software e Infraestrutura Digital',
    hero_subtitle: 'Projetamos arquiteturas resilientes, sistemas sob medida e integrações de alto desempenho para acelerar a evolução da sua empresa.',
    hero_cta_diagnostics: 'Agendar Diagnóstico Técnico',
    hero_cta_phrase: 'Agende uma reunião estratégica de 30 minutos com nossos engenheiros seniores.',
    hero_cta_contact: 'Fale com a GS Edge',
    hero_cta_solutions: 'Conheça nossas soluções',
    hero_cta_blog: 'Acesse nosso blog',
    services_title: 'Nossos Serviços Principais',
    services_subtitle: 'Atuamos com excelência técnica em 3 pilares fundamentais da tecnologia moderna.',
    service_1_title: 'Consultoria para Design de Sistemas e Infraestrutura',
    service_1_desc: 'Design de arquitetura de alta disponibilidade, planejamento topológico de redes corporativas, estratégias em nuvem e auditoria de infraestruturas resilientes.',
    service_2_title: 'Desenvolvimento de Software sob Medida',
    service_2_desc: 'Engenharia de sistemas web e plataformas sob medida, com foco em integração fluida com sistemas legados, APIs seguras e microsserviços de alto desempenho.',
    service_3_title: 'Treinamento para Tecnologias de TI',
    service_3_desc: 'Capacitação técnica corporativa e workshops práticos para equipes de TI em arquitetura de redes, nuvem, DevOps e linguagens de programação modernas.',
    skills_badge: 'Tecnologias & Experiência',
    skills_title: 'Tecnologias & Ecossistema',
    skills_subtitle: 'Domínio técnico avançado em infraestrutura de rede, nuvem pública, automação e desenvolvimento de software.',
    about_title: 'Sobre a GS Edge',
    about_p1: 'A GS Edge é uma empresa de tecnologia especializada em 3 frentes estratégicas: Consultoria para Design de Sistemas e Infraestrutura, Desenvolvimento de Software sob Medida (incluindo integração inteligente com sistemas legados) e Treinamentos Especializados em Tecnologias de TI.',
    about_p2: 'Combinamos alto rigor de engenharia, arquiteturas resilientes e aprendizado contínuo para transformar desafios técnicos complexos em ecossistemas digitais seguros, escaláveis e focados no crescimento dos nossos clientes.',
    about_mission_title: 'Missão',
    about_mission_desc: 'Entregar soluções de alta performance em software e infraestrutura sob medida, acelerando a transformação digital e a resiliência dos nossos clientes.',
    about_vision_title: 'Visão',
    about_vision_desc: 'Ser referência global em arquitetura de sistemas críticos, integração de infraestruturas modernas e capacitação técnica avançada em TI.',
    about_values_title: 'Valores',
    about_values_desc: 'Rigor técnico, transparência total, inovação prática, resiliência operacional e foco absoluto no sucesso do cliente.',
    recent_posts_badge: 'Artigos & Insights',
    recent_posts_title: 'Blog da GS Edge',
    recent_posts_subtitle: 'Artigos técnicos, engenharia de software, redes, nuvem e novidades sobre tecnologia.',
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
    work_title: 'Nossas Soluções',
    work_subtitle: 'Casos de sucesso, plataformas desenvolvidas e projetos de engenharia de software.',
    view_project: 'Ver Detalhes do Projeto',
    contact_badge: 'Reunião de 30 minutos',
    contact_title: 'Entre em Contato',
    contact_subtitle: 'Tem um projeto em mente ou precisa de um diagnóstico técnico? Fale com a equipe de engenharia da GS Edge.',
    contact_cta_desc: 'Agende uma reunião estratégica de 30 minutos com nossos engenheiros seniores para conversarmos sobre arquitetura, sistemas legados e infraestrutura.',
    contact_email_title: 'E-mail Comercial & Suporte',
    contact_email_sub: 'Resposta rápida em até 24h úteis.',
    contact_name: 'Nome',
    contact_email: 'Seu E-mail',
    contact_subject: 'Assunto',
    contact_message: 'Mensagem',
    contact_submit: 'Enviar Mensagem',
    contact_success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    welcome_badge: 'Agendamento Confirmado',
    welcome_title: 'Seja bem-vindo(a) à GS Edge!',
    welcome_subtitle: 'Seu Diagnóstico Técnico foi agendado com sucesso.',
    welcome_card_title: 'O que acontece agora?',
    welcome_step_1: 'Você receberá uma confirmação no seu e-mail com o link para a conferência.',
    welcome_step_2: 'Nossa equipe técnica revisará as informações enviadas antes da reunião.',
    welcome_step_3: 'No horário agendado, discutiremos a melhor arquitetura e solução para o seu projeto.',
    welcome_btn_home: 'Voltar para a Página Inicial',
    welcome_btn_blog: 'Acessar o Blog',
    nav_products: 'Produtos',
    products_badge: 'Produtos Digitais & SaaS',
    products_title: 'Nossos Produtos & Plataformas SaaS',
    products_subtitle: 'Soluções digitais proprietárias desenvolvidas com alto rigor de engenharia de software pela GS Edge.',
    products_view_all: 'Explorar todos os produtos',
    products_learn_more: 'Saiba Mais & Acesso VIP',
    products_live_badge: 'Em Produção',
    products_beta_badge: 'Beta Fechado',
    products_coming_soon_badge: 'Em Breve',
    waitlist_badge: 'Lista VIP & Early Access',
    waitlist_title: 'Garanta seu Acesso Antecipado',
    waitlist_subtitle: 'Inscreva-se gratuitamente para receber convite prioritário no lançamento e benefícios exclusivos de membro fundador.',
    waitlist_name_placeholder: 'Seu nome',
    waitlist_email_placeholder: 'Seu melhor e-mail',
    waitlist_submit_btn: 'Entrar na Lista VIP Gratuitamente',
    waitlist_loading_btn: 'Confirmando inscrição...',
    waitlist_success_title: 'Você está na lista VIP!',
    waitlist_success_desc: 'Enviaremos novidades do desenvolvimento e seu convite prioritário de acesso antecipado.',
    waitlist_privacy_note: '🔒 Respeitamos sua privacidade. Zero spam e dados 100% seguros.',
    faq_title: 'Perguntas Frequentes',
    faq_subtitle: 'Tudo o que você precisa saber antes de começar.',
    back_to_products: '← Voltar para Produtos',
  },
  en: {
    nav_services: 'Services',
    nav_work: 'Solutions',
    nav_blog: 'Blog',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: 'IT Engineering & Solutions',
    hero_title_1: 'Transforming Business with',
    hero_title_2: 'Software & Digital Infrastructure',
    hero_subtitle: 'We build resilient architectures, bespoke software systems, and high-performance integrations to accelerate your enterprise growth.',
    hero_cta_diagnostics: 'Schedule Technical Diagnostics',
    hero_cta_phrase: 'Book a 30-minute strategic consultation with our senior engineering team.',
    hero_cta_contact: 'Contact GS Edge',
    hero_cta_solutions: 'Explore Solutions',
    hero_cta_blog: 'Read Our Blog',
    services_title: 'Our 3 Core Capabilities',
    services_subtitle: 'Delivering technical excellence across 3 fundamental pillars of modern technology.',
    service_1_title: 'Consulting for System and Infrastructure Design',
    service_1_desc: 'High-availability architectural design, enterprise network topology planning, cloud strategies, and infrastructure auditing for resilient systems.',
    service_2_title: 'Custom Software Development (including integration with legacy system)',
    service_2_desc: 'Bespoke software platforms and web apps, specializing in seamless integration with legacy systems, secure APIs, and high-performance microservices.',
    service_3_title: 'Training for IT Technologies',
    service_3_desc: 'Specialized technical enablement and hands-on corporate workshops for IT teams covering network architecture, cloud, DevOps, and modern programming.',
    skills_badge: 'Tech Stack & Expertise',
    skills_title: 'Technologies & Ecosystem',
    skills_subtitle: 'Deep technical expertise across enterprise networking, public cloud, automation, and software engineering.',
    about_title: 'About GS Edge',
    about_p1: 'GS Edge is a technology company specializing in 3 strategic pillars: Consulting for System and Infrastructure Design, Custom Software Development (including seamless integration with legacy systems), and Specialized Training for IT Technologies.',
    about_p2: 'We combine rigorous engineering standards, resilient architectures, and continuous learning to transform complex technical challenges into secure, scalable, and business-focused digital ecosystems.',
    about_mission_title: 'Mission',
    about_mission_desc: 'Deliver high-performance custom software and infrastructure solutions, accelerating our clients\' digital transformation and operational resilience.',
    about_vision_title: 'Vision',
    about_vision_desc: 'Be the global benchmark for mission-critical systems architecture, modern infrastructure integration, and advanced IT enablement.',
    about_values_title: 'Values',
    about_values_desc: 'Technical excellence, radical transparency, outcome-driven innovation, operational resilience, and relentless focus on client success.',
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
    work_title: 'Our Solutions',
    work_subtitle: 'Featured platforms, engineering projects, and software solutions delivered by GS Edge.',
    view_project: 'View Project Details',
    contact_badge: '30-Minute Consultation',
    contact_title: 'Get in Touch',
    contact_subtitle: 'Have a project in mind or need a technical diagnostic? Connect with the GS Edge engineering team.',
    contact_cta_desc: 'Book a 30-minute strategic consultation with our senior engineers to discuss systems architecture, legacy integrations, and modern infrastructure.',
    contact_email_title: 'Commercial & Technical Support',
    contact_email_sub: 'Prompt response within 24 business hours.',
    contact_name: 'Name',
    contact_email: 'Your Email',
    contact_subject: 'Subject',
    contact_message: 'Message',
    contact_submit: 'Send Message',
    contact_success: 'Message sent successfully! We will get back to you shortly.',
    welcome_badge: 'Appointment Confirmed',
    welcome_title: 'Welcome to GS Edge!',
    welcome_subtitle: 'Your Technical Diagnostics session has been successfully scheduled.',
    welcome_card_title: 'What happens next?',
    welcome_step_1: 'You will receive an email confirmation containing the video call link.',
    welcome_step_2: 'Our engineering team will review your project info prior to the call.',
    welcome_step_3: 'During the meeting, we will define the best architecture and approach for your goals.',
    welcome_btn_home: 'Return to Homepage',
    welcome_btn_blog: 'Explore Our Blog',
    nav_products: 'Products',
    products_badge: 'Digital Products & SaaS',
    products_title: 'Our Digital Products & SaaS Platforms',
    products_subtitle: 'Proprietary cloud solutions built with high-standard software engineering by GS Edge.',
    products_view_all: 'Explore all products',
    products_learn_more: 'Learn More & VIP Access',
    products_live_badge: 'Live',
    products_beta_badge: 'Closed Beta',
    products_coming_soon_badge: 'Coming Soon',
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
    back_to_products: '← Back to Products',
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

