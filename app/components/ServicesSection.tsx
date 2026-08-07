'use client';

import { useLanguage } from './LanguageContext';
import { FaNetworkWired, FaCode, FaGraduationCap } from 'react-icons/fa';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FaNetworkWired,
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      techs: ['Cisco', 'Juniper', 'Arista', 'Fortinet', 'AWS', 'GCP'],
    },
    {
      icon: FaCode,
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      techs: ['NextJS', 'Golang', 'Python', 'Legacy APIs', 'N8N'],
    },
    {
      icon: FaGraduationCap,
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      techs: ['Cloud & Networks', 'DevOps', 'Architecture', 'Enablement'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative z-10 border-t border-white/5 bg-edge-darker/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            {t('services_title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-edge-darker/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-edge-cyan via-edge-yellow to-edge-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-edge-cyan/10 border border-edge-cyan/20 flex items-center justify-center text-edge-cyan text-2xl mb-6 mx-auto group-hover:scale-110 group-hover:bg-edge-cyan group-hover:text-edge-darker transition-all duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-edge-cyan transition-colors leading-snug text-center">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-center">
                    {service.desc}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-white/5 w-full">
                  {service.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
