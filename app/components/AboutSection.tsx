'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/app/assets/images/logo.png';
import { useLanguage } from "./LanguageContext";
import { FaBullseye, FaEye, FaGem } from 'react-icons/fa';

export default function AboutSection() {
  const { t } = useLanguage();
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const pillars = [
    {
      icon: FaBullseye,
      title: t('about_mission_title'),
      desc: t('about_mission_desc'),
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-edge-cyan',
    },
    {
      icon: FaEye,
      title: t('about_vision_title'),
      desc: t('about_vision_desc'),
      iconBg: 'bg-yellow-500/10 border-yellow-500/20 text-edge-yellow',
    },
    {
      icon: FaGem,
      title: t('about_values_title'),
      desc: t('about_values_desc'),
      iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t('about_title')}
          </h2>
        </motion.div>

        {/* Main About Card with Official Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="bg-white/[0.02] hover:bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10 relative overflow-hidden mb-8 transition-all"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-edge-cyan/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Official GS Edge Logo Card */}
          <div className="relative flex-shrink-0 w-full md:w-60 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo GS Edge"
              width={500}
              height={200}
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          <div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4 font-normal">
              {t('about_p1')}
            </p>
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal">
              {t('about_p2')}
            </p>
          </div>
        </motion.div>

        {/* Missão, Visão e Valores Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: appleEase }}
                className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col items-start relative overflow-hidden group hover:-translate-y-1 active:scale-[0.99]"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl mb-5 ${pillar.iconBg} group-hover:scale-105 transition-transform`}>
                  <Icon />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

