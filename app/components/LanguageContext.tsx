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
  en: {
    nav_work: 'Work',
    nav_blog: 'Blog',
    nav_about: 'About',
    hero_title: 'Building digital experiences that matter.',
    hero_subtitle: "Hi, I'm Gabriel Soares. I'm a Solutions Engineer passionate about Network Architecture, Cybersecurity, and Cloud, with over 10 years of experience building scalable systems.",
    hero_cta_work: 'View my work',
    hero_cta_blog: 'Read my blog',
    about_title: 'About Me',
    about_p1: "I'm Gabriel Soares, a technology enthusiast with a Bachelor's degree in Computer Science and over 10 years of experience in network infrastructure, cybersecurity, and telecommunications. Currently, I work at Hughes as an Enterprise Network Technical Leader, focusing on SD-WAN and LEO satellite solutions.",
    about_p2: "My expertise spans from cloud architecture (AWS, GCP) to software development (Go, Python, React, TypeScript). I've led high-impact projects at companies like Huawei and Vivo, always striving to bridge the gap between complex infrastructure and user-centric software.",
    recent_posts_title: 'Recent Posts',
    recent_posts_subtitle: 'Thoughts, tutorials, and tech deep-dives.',
    view_all: 'View all',
    read_more: 'Read more',
    back_to_blog: '← Back to Blog',
    no_posts: 'No articles published yet.',
    work_title: 'My Projects',
    work_subtitle: 'A focus on my current professional platform and open-source contributions.',
    view_project: 'View Project',
  },
  pt: {
    nav_work: 'Projetos',
    nav_blog: 'Blog',
    nav_about: 'Sobre',
    hero_title: 'Construindo experiências digitais que importam.',
    hero_subtitle: "Olá, eu sou Gabriel Soares. Sou um Engenheiro de Soluções apaixonado por Arquitetura de Redes, Cibersegurança e Nuvem, com mais de 10 anos de experiência construindo sistemas escaláveis.",
    hero_cta_work: 'Ver meus projetos',
    hero_cta_blog: 'Ler meu blog',
    about_title: 'Sobre Mim',
    about_p1: "Sou o Gabriel Soares, um entusiasta da tecnologia com bacharelado em Ciência da Computação e mais de 10 anos de experiência em infraestrutura de rede, cibersegurança e telecomunicações. Atualmente, trabalho na Hughes como Líder Técnico de Redes Empresariais, focando em soluções SD-WAN e satélites LEO.",
    about_p2: "Minha experiência abrange desde arquitetura de nuvem (AWS, GCP) até desenvolvimento de software (Go, Python, React, TypeScript). Lidero projetos de alto impacto em empresas como Huawei e Vivo, sempre buscando unir infraestrutura complexa com software centrado no usuário.",
    recent_posts_title: 'Posts Recentes',
    recent_posts_subtitle: 'Pensamentos, tutoriais e mergulhos técnicos.',
    view_all: 'Ver todos',
    read_more: 'Ler mais',
    back_to_blog: '← Voltar para o Blog',
    no_posts: 'Nenhum artigo publicado ainda.',
    work_title: 'Meus Projetos',
    work_subtitle: 'Um foco na minha plataforma profissional atual e contribuições de código aberto.',
    view_project: 'Ver Projeto',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

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
