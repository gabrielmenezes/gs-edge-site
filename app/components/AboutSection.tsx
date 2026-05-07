'use client';

import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-edge-darker/30 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
          {t('about_title').split(' ')[0]} <span className="text-edge-cyan">{t('about_title').split(' ')[1]}</span>
        </h2>
        <div className="bg-edge-darker/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-edge-cyan/20 blur-2xl rounded-full"></div>
            <Image 
              src="/gabriel.jpg"
              alt="Gabriel Soares"
              width={200}
              height={200}
              className="rounded-full border-4 border-edge-cyan shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {t('about_p1')}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t('about_p2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
