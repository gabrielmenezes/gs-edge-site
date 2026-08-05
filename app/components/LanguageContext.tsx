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
    hero_badge: 'Desenvolvimento de Software sob Medida',
    hero_title_1: 'Engenharia de Software',
    hero_title_2: 'de Alto Desempenho',
    hero_subtitle: 'A GS Edge projeta e desenvolve sistemas web modernos, aplicações escaláveis e arquiteturas de nuvem sob medida para impulsionar o crescimento do seu negócio.',
    hero_cta_contact: 'Fale com a GS Edge',
    hero_cta_solutions: 'Conheça nossas soluções',
    hero_cta_blog: 'Acesse nosso blog',
    services_title: 'Nossa Especialidade',
    services_subtitle: 'Desenvolvemos soluções tecnológicas sob medida com arquiteturas modernas e código limpo.',
    service_1_title: 'Desenvolvimento sob Medida',
    service_1_desc: 'Criação de sistemas corporativos, plataformas SaaS e soluções web sob medida utilizando React, Next.js, Node.js, Go e Python.',
    service_2_title: 'Aplicações Web & Cloud-Native',
    service_2_desc: 'Aplicações responsivas, de alta performance e preparadas para escalabilidade global em ambientes AWS e GCP.',
    service_3_title: 'Engenharia de APIs & Integrações',
    service_3_desc: 'Construção de APIs REST/GraphQL seguras e integração entre sistemas legados e plataformas modernas.',
    service_4_title: 'Arquitetura de Sistemas & DevOps',
    service_4_desc: 'Consultoria em arquitetura de software, microsserviços, CI/CD autônomo e infraestrutura como código.',
    about_title: 'Sobre a GS Edge',
    about_p1: 'A GS Edge é uma empresa especializada no desenvolvimento de software de alta performance e engenharia de sistemas. Combinamos inovação, código limpo e arquitetura moderna para construir produtos digitais robustos e escaláveis.',
    about_p2: 'Nossa missão é transformar desafios técnicos complexos em soluções simples, eficientes e focadas nos resultados de nossos clientes, abrangendo desde desenvolvimento full-stack até infraestrutura em nuvem.',
    recent_posts_title: 'Blog da GS Edge',
    recent_posts_subtitle: 'Artigos técnicos, engenharia de software, arquitetura e novidades sobre tecnologia.',
    view_all: 'Ver todos os artigos',
    read_more: 'Ler artigo completo',
    back_to_blog: '← Voltar para o Blog',
    no_posts: 'Nenhum artigo publicado neste idioma ainda.',
    work_title: 'Nossas Soluções',
    work_subtitle: 'Casos de sucesso, plataformas desenvolvidas e projetos de engenharia de software.',
    view_project: 'Ver Detalhes do Projeto',
    contact_title: 'Entre em Contato',
    contact_subtitle: 'Tem um projeto em mente ou precisa de uma solução em software sob medida? Fale com a equipe técnica da GS Edge.',
    contact_email_title: 'E-mail Comercial & Suporte',
    contact_email_sub: 'Resposta rápida em até 24h úteis.',
    contact_name: 'Nome',
    contact_email: 'Seu E-mail',
    contact_subject: 'Assunto',
    contact_message: 'Mensagem',
    contact_submit: 'Enviar Mensagem',
    contact_success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
  },
  en: {
    nav_services: 'Services',
    nav_work: 'Solutions',
    nav_blog: 'Blog',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_badge: 'Custom Software Engineering',
    hero_title_1: 'High-Performance',
    hero_title_2: 'Software Engineering',
    hero_subtitle: 'GS Edge designs and builds modern web applications, scalable enterprise systems, and custom cloud architectures to accelerate your business growth.',
    hero_cta_contact: 'Contact GS Edge',
    hero_cta_solutions: 'Explore Solutions',
    hero_cta_blog: 'Read Our Blog',
    services_title: 'Our Expertise',
    services_subtitle: 'We craft custom technology solutions with modern architectures and clean code.',
    service_1_title: 'Custom Software Development',
    service_1_desc: 'Engineering enterprise software, SaaS platforms, and custom web applications with React, Next.js, Node.js, Go, and Python.',
    service_2_title: 'Web & Cloud-Native Apps',
    service_2_desc: 'Responsive, high-performance applications designed for seamless global scalability on AWS and GCP.',
    service_3_title: 'API Engineering & Integration',
    service_3_desc: 'Building secure RESTful & GraphQL APIs, enabling smooth integration between legacy systems and modern tech stacks.',
    service_4_title: 'Systems Architecture & DevOps',
    service_4_desc: 'Software architecture consulting, microservices, automated CI/CD pipelines, and infrastructure as code.',
    about_title: 'About GS Edge',
    about_p1: 'GS Edge is a technology company specializing in high-performance software engineering and systems architecture. We combine innovation, clean code, and modern design to build robust, scalable digital products.',
    about_p2: 'Our mission is to translate complex technical challenges into simple, efficient, and business-focused solutions, covering full-stack software development and cloud infrastructure.',
    recent_posts_title: 'GS Edge Tech Blog',
    recent_posts_subtitle: 'Technical articles, software engineering insights, architecture deep-dives, and tech updates.',
    view_all: 'View all articles',
    read_more: 'Read full article',
    back_to_blog: '← Back to Blog',
    no_posts: 'No articles published in this language yet.',
    work_title: 'Our Solutions',
    work_subtitle: 'Featured platforms, engineering projects, and software solutions delivered by GS Edge.',
    view_project: 'View Project Details',
    contact_title: 'Get in Touch',
    contact_subtitle: 'Have a project in mind or need a custom software solution? Connect with the GS Edge engineering team.',
    contact_email_title: 'Commercial & Technical Support',
    contact_email_sub: 'Prompt response within 24 business hours.',
    contact_name: 'Name',
    contact_email: 'Your Email',
    contact_subject: 'Subject',
    contact_message: 'Message',
    contact_submit: 'Send Message',
    contact_success: 'Message sent successfully! We will get back to you shortly.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
      setLanguage(savedLang);
    }
  }, []);

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

