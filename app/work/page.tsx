'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageContext';

const projects = [
  {
    title: 'Personal Portfolio & Blog',
    description: 'A modern, high-performance personal portfolio and blog built with Next.js, TailwindCSS, and Framer Motion. Features a custom i18n system and Markdown-based content management.',
    link: 'https://gsedge.com.br',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'i18n'],
  }
];

export default function WorkPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-yellow/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
            {t('work_title').split(' ')[0]} <span className="text-edge-cyan">{t('work_title').split(' ')[1]}</span>
          </h1>
          <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('work_subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article key={index} className="group bg-edge-darker/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-edge-cyan/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-edge-cyan to-edge-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              <div className="pl-4">
                <h2 className="text-2xl font-bold text-slate-100 mt-2 mb-3 group-hover:text-edge-yellow transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-200 font-semibold hover:text-edge-cyan transition-colors">
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
