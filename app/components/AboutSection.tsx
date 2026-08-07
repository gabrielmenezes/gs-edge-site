'use client';

import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';
import { useLanguage } from "./LanguageContext";
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';

export default function AboutSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: FaBullseye,
      title: t('about_mission_title'),
      desc: t('about_mission_desc'),
      borderColor: 'hover:border-edge-cyan/50',
      iconBg: 'bg-edge-cyan/10 border-edge-cyan/30 text-edge-cyan',
    },
    {
      icon: FaEye,
      title: t('about_vision_title'),
      desc: t('about_vision_desc'),
      borderColor: 'hover:border-edge-yellow/50',
      iconBg: 'bg-edge-yellow/10 border-edge-yellow/30 text-edge-yellow',
    },
    {
      icon: FaGem,
      title: t('about_values_title'),
      desc: t('about_values_desc'),
      borderColor: 'hover:border-indigo-400/50',
      iconBg: 'bg-indigo-500/10 border-indigo-400/30 text-indigo-400',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-edge-darker/30 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-12 text-center">
          {t('about_title')}
        </h2>

        {/* Main About Card with Official Logo */}
        <div className="bg-edge-darker/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-72 h-72 bg-edge-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Official GS Edge Logo */}
          <div className="relative flex-shrink-0 w-full md:w-64 p-6 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center shadow-2xl">
            <Image
              src={logo}
              alt="Logo GS Edge"
              width={500}
              height={200}
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            />
          </div>

          <div>
            <p className="text-base md:text-lg text-slate-200 leading-relaxed mb-6">
              {t('about_p1')}
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              {t('about_p2')}
            </p>
          </div>
        </div>

        {/* Missão, Visão e Valores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-edge-darker/80 backdrop-blur-md border border-white/10 ${pillar.borderColor} rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center justify-between relative overflow-hidden group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl mb-6 mx-auto ${pillar.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

