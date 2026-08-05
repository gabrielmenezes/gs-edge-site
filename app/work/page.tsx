'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageContext';

const solutions = [
  {
    title: {
      pt: 'Plataforma Web & Sistema de Gestão Corporativa',
      en: 'Enterprise Web Platform & Management System',
    },
    description: {
      pt: 'Plataforma web de alta performance construída em Next.js e TypeScript com suporte a multi-tenant, autenticação RBAC, integração com gateway de pagamento e dashboard analítico em tempo real.',
      en: 'High-performance web platform built with Next.js and TypeScript featuring multi-tenant support, RBAC authentication, payment gateway integration, and real-time analytical dashboards.',
    },
    link: '/#contact',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
  },
  {
    title: {
      pt: 'Arquitetura de APIs & Microsserviços Cloud-Native',
      en: 'Cloud-Native API & Microservices Architecture',
    },
    description: {
      pt: 'Microsserviços altamente disponíveis para processamento assíncrono de dados, conteinerizados em Docker e orquestrados via Kubernetes na AWS.',
      en: 'Highly available microservices engineered for asynchronous data processing, containerized with Docker and orchestrated via Kubernetes on AWS.',
    },
    link: '/#contact',
    tags: ['Go', 'Python', 'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'gRPC'],
  },
  {
    title: {
      pt: 'Portal da GS Edge & Engine de Conteúdo',
      en: 'GS Edge Official Site & Content Engine',
    },
    description: {
      pt: 'Portal institucional corporativo da GS Edge com suporte bilíngue dinâmico (PT-BR / EN-US), gestão de posts em Markdown e design glassmorphism moderno.',
      en: 'GS Edge official corporate site featuring dynamic bilingual support (PT-BR / EN-US), Markdown content engine, and state-of-the-art glassmorphism design.',
    },
    link: 'https://gsedge.com.br',
    tags: ['Next.js 16', 'React 19', 'i18n', 'Markdown', 'TailwindCSS'],
  },
];

export default function WorkPage() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-yellow/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            {t('work_title')}
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('work_subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {solutions.map((item, index) => (
            <article key={index} className="group bg-edge-darker/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-edge-cyan/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-edge-cyan to-edge-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="pl-4">
                <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-edge-yellow transition-colors">
                  {item.title[language]}
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {item.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-mono font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={item.link} className="inline-flex items-center text-slate-200 font-bold hover:text-edge-cyan transition-colors">
                  {t('view_project')} <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

