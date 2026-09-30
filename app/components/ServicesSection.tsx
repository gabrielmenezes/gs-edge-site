'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { FaNetworkWired, FaShieldAlt, FaGraduationCap, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const services = [
    {
      slug: 'consultoria-arquitetura-sistemas-nuvem',
      icon: FaNetworkWired,
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      techs: ['AWS / GCP', 'SD-WAN', 'BGP/OSPF', 'Terraform', 'Kubernetes'],
      accent: 'from-cyan-500/20 to-blue-500/0',
      iconColor: 'text-edge-cyan',
      highlights: [
        language === 'pt' ? 'Alta disponibilidade 99.99%' : '99.99% high availability',
        language === 'pt' ? 'Eliminação total de SPOF' : 'Total SPOF elimination',
        language === 'pt' ? 'Infraestrutura como Código (IaC)' : 'Infrastructure as Code (IaC)',
      ],
    },
    {
      slug: 'auditoria-modernizacao-sistemas-legados',
      icon: FaShieldAlt,
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      techs: ['FinOps', 'Well-Architected', 'Zero Trust', 'Legacy APIs', 'SRE'],
      accent: 'from-amber-500/20 to-yellow-500/0',
      iconColor: 'text-edge-yellow',
      highlights: [
        language === 'pt' ? 'Redução de custos de nuvem (FinOps)' : 'Cloud cost reduction (FinOps)',
        language === 'pt' ? 'Auditoria de dívida técnica & segurança' : 'Technical debt & security audit',
        language === 'pt' ? 'Estratégia de modernização de legados' : 'Pragmatic legacy modernization',
      ],
    },
    {
      slug: 'tech-leadership-capacitacao-ti',
      icon: FaGraduationCap,
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      techs: ['Fractional CTO', 'Tech Mentoring', 'Architecture Labs', 'In-Company'],
      accent: 'from-sky-500/20 to-indigo-500/0',
      iconColor: 'text-sky-400',
      highlights: [
        language === 'pt' ? 'Fractional CTO para decisões críticas' : 'Fractional CTO for critical choices',
        language === 'pt' ? 'Mentoria sênior para Tech Leads' : 'Senior mentoring for Tech Leads',
        language === 'pt' ? 'Workshops práticos in-company' : 'Hands-on in-company workshops',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-edge-cyan text-xs font-medium tracking-wide uppercase mb-3 sm:mb-4 mx-auto backdrop-blur-sm md:backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-edge-cyan animate-pulse" />
            <span>{language === 'pt' ? 'Práticas Consultivas' : 'Consulting Practices'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {t('services_title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services_subtitle')}
          </p>
        </motion.div>

        {/* 3-Column Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: appleEase }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 backdrop-blur-md md:backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] overflow-hidden cursor-pointer h-full"
                >
                  {/* Subtle Top Gradient Spotlight */}
                  <div
                    className={`absolute -top-12 -left-12 w-40 h-40 rounded-full bg-gradient-to-br ${service.accent} blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}
                  />

                  <div>
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${service.iconColor} text-xl mb-6 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-edge-cyan transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6 border-t border-white/[0.06] pt-5">
                      {service.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <FaCheckCircle className={`mt-0.5 shrink-0 text-[11px] ${service.iconColor}`} />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
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

                    {/* Action link */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-edge-cyan group-hover:text-white transition-colors">
                      <span>{language === 'pt' ? 'Ver escopo da consultoria' : 'View consulting practice'}</span>
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
