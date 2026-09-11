'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { FaNetworkWired, FaCode, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const services = [
    {
      slug: 'consultoria-design-sistemas-infraestrutura',
      icon: FaNetworkWired,
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      techs: ['Cisco', 'Juniper', 'Arista', 'Fortinet', 'AWS', 'GCP'],
      accent: 'from-cyan-500/20 to-blue-500/0',
      iconColor: 'text-edge-cyan',
    },
    {
      slug: 'desenvolvimento-software-sob-medida',
      icon: FaCode,
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      techs: ['NextJS', 'Golang', 'Python', 'Legacy APIs', 'N8N'],
      accent: 'from-amber-500/20 to-yellow-500/0',
      iconColor: 'text-edge-yellow',
    },
    {
      slug: 'treinamento-tecnologias-ti',
      icon: FaGraduationCap,
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      techs: ['Cloud & Networks', 'DevOps', 'Architecture', 'Enablement'],
      accent: 'from-sky-500/20 to-indigo-500/0',
      iconColor: 'text-sky-400',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {t('services_title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: appleEase }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 backdrop-blur-md md:backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] overflow-hidden cursor-pointer h-full"
                >
                  {/* Subtle Apple Top Gradient Spotlight */}
                  <div className={`absolute -top-12 -left-12 w-40 h-40 rounded-full bg-gradient-to-br ${service.accent} blur-xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${service.iconColor} text-xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-edge-cyan transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] w-full mb-5">
                      {service.techs.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/[0.03] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-edge-cyan group-hover:text-white transition-colors">
                      <span>{language === 'pt' ? 'Ver detalhes da solução' : 'View solution details'}</span>
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
