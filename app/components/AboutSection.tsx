'use client';

import { useLanguage } from "./LanguageContext";

export default function AboutSection() {

  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-edge-darker/30 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-12 text-center">
          {t('about_title')}
        </h2>
        <div className="bg-edge-darker/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-edge-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-edge-cyan/20 to-edge-yellow/20 border border-white/10 flex items-center justify-center shadow-2xl">
            <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-edge-cyan to-edge-yellow">
              GS
            </span>
          </div>
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {t('about_p1')}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {t('about_p2')}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="block text-2xl font-bold text-edge-cyan">100%</span>
                <span className="text-xs text-slate-400 font-medium">Custom Code</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-edge-yellow">99.9%</span>
                <span className="text-xs text-slate-400 font-medium">SLA & Uptime</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-200">Cloud-Native</span>
                <span className="text-xs text-slate-400 font-medium">AWS & GCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

