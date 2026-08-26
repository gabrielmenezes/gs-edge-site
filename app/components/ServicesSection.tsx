'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { FaNetworkWired, FaCode, FaGraduationCap, FaArrowRight } from 'react-icons/fa';

export default function ServicesSection() {
  const { t, language } = useLanguage();

  const services = [
    {
      slug: 'consultoria-design-sistemas-infraestrutura',
      icon: FaNetworkWired,
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      techs: ['Cisco', 'Juniper', 'Arista', 'Fortinet', 'AWS', 'GCP'],
    },
    {
      slug: 'desenvolvimento-software-sob-medida',
      icon: FaCode,
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      techs: ['NextJS', 'Golang', 'Python', 'Legacy APIs', 'N8N'],
    },
    {
      slug: 'treinamento-tecnologias-ti',
      icon: FaGraduationCap,
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      techs: ['Cloud & Networks', 'DevOps', 'Architecture', 'Enablement'],
    },
  ];

  return (
    <section id="services" className="py-20 2xl:py-28 px-4 relative z-10 border-t border-white/5 bg-edge-darker/50">
      <div className="w-full max-w-6xl 2xl:max-w-[85%] 3xl:max-w-[80%] mx-auto">
        <div className="text-center mb-16 2xl:mb-20">
          <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-slate-100 mb-4 2xl:mb-6">
            {t('services_title')}
          </h2>
          <p className="text-slate-400 text-lg 2xl:text-xl max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 2xl:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-edge-darker/70 backdrop-blur-md border border-white/10 rounded-3xl p-8 2xl:p-10 hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-edge-cyan via-edge-yellow to-edge-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 2xl:w-16 2xl:h-16 rounded-2xl bg-edge-cyan/10 border border-edge-cyan/20 flex items-center justify-center text-edge-cyan text-2xl 2xl:text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:bg-edge-cyan group-hover:text-edge-darker transition-all duration-300">
                    <Icon />
                  </div>
                  <h3 className="text-xl 2xl:text-2xl font-bold text-slate-100 mb-3 group-hover:text-edge-cyan transition-colors leading-snug text-center">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm 2xl:text-base leading-relaxed mb-6 text-center">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-white/5 w-full mb-4">
                    {service.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] 2xl:text-xs font-mono text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs 2xl:text-sm font-bold text-edge-cyan group-hover:text-edge-yellow transition-colors pt-2">
                    <span>{language === 'pt' ? 'Ver detalhes da solução' : 'View solution details'}</span>
                    <FaArrowRight className="text-[10px] 2xl:text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
