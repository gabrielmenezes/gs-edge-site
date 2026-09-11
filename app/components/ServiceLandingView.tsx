'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaNetworkWired, 
  FaCode, 
  FaGraduationCap, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaCalendarCheck,
  FaLayerGroup,
  FaLaptopCode,
  FaShieldAlt
} from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import { Service, getServiceBySlug } from '@/lib/services';

interface ServiceLandingViewProps {
  slug: string;
  initialService: Service;
}

export default function ServiceLandingView({ slug, initialService }: ServiceLandingViewProps) {
  const { language } = useLanguage();
  const service = getServiceBySlug(slug, language) || initialService;

  const getServiceIcon = () => {
    switch (service.iconName) {
      case 'code':
        return <FaCode className="text-3xl lg:text-4xl 2xl:text-5xl text-edge-cyan" />;
      case 'training':
        return <FaGraduationCap className="text-3xl lg:text-4xl 2xl:text-5xl text-edge-cyan" />;
      case 'network':
      default:
        return <FaNetworkWired className="text-3xl lg:text-4xl 2xl:text-5xl text-edge-cyan" />;
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden bg-edge-darker text-slate-100">
      {/* Background glow effects */}
      <div className="absolute top-10 right-0 w-[500px] 2xl:w-[700px] h-[500px] 2xl:h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[400px] 2xl:w-[600px] h-[400px] 2xl:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.05)_0%,transparent_70%)] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl 2xl:max-w-[85%] 3xl:max-w-[80%] mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm 2xl:text-base font-semibold text-edge-cyan hover:text-edge-yellow transition-all duration-200 hover:-translate-x-1"
          >
            <FaArrowLeft className="text-xs 2xl:text-sm" />
            <span>{language === 'pt' ? '← Voltar para Serviços' : '← Back to Services'}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 sm:p-12 lg:p-16 2xl:p-20 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-edge-cyan/15 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="lg:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-edge-cyan/30 bg-edge-cyan/10 text-edge-cyan text-xs 2xl:text-sm font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-edge-cyan animate-pulse"></span>
                {service.badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold text-slate-100 leading-tight tracking-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl 2xl:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base 2xl:text-lg text-slate-400 leading-relaxed max-w-3xl">
                {service.description}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/gsedge/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-edge-yellow text-edge-darker px-8 py-4 2xl:px-10 2xl:py-5 rounded-2xl text-base 2xl:text-lg font-extrabold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                >
                  <FaCalendarCheck className="text-lg" />
                  <span>{service.ctaButtonText}</span>
                </a>
                <a
                  href="#pillars"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 bg-edge-darker/80 text-slate-200 px-8 py-4 2xl:px-10 2xl:py-5 rounded-2xl text-base 2xl:text-lg font-semibold hover:border-edge-cyan hover:text-edge-cyan transition-all"
                >
                  <span>{language === 'pt' ? 'Como Trabalhamos' : 'Our Methodology'}</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Service Icon Badge */}
            <div className="lg:w-1/3 flex justify-center w-full">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-36 h-36 sm:w-44 sm:h-44 2xl:w-56 2xl:h-56 rounded-3xl bg-edge-darker/90 border-2 border-edge-cyan/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              >
                {getServiceIcon()}
                <span className="text-xs 2xl:text-sm font-mono text-slate-400 mt-3 uppercase tracking-widest">
                  GS EDGE
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Audience & Key Highlights */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 2xl:p-10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 text-edge-cyan text-lg 2xl:text-xl font-bold">
              <FaShieldAlt />
              <h3>{language === 'pt' ? 'Para Quem É Esta Solução' : 'Who This Is For'}</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base 2xl:text-lg leading-relaxed">
              {service.targetAudience}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 2xl:p-10 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-4 text-edge-yellow text-lg 2xl:text-xl font-bold">
              <FaCheckCircle />
              <h3>{language === 'pt' ? 'Diferenciais de Engenharia' : 'Engineering Highlights'}</h3>
            </div>
            <ul className="space-y-3">
              {service.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm 2xl:text-base text-slate-300">
                  <span className="text-edge-cyan mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pillars / Methodology */}
        <section id="pillars" className="mb-24">
          <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-slate-100 mb-4">
              {service.pillarsTitle}
            </h2>
            <p className="text-slate-400 text-base sm:text-lg 2xl:text-xl leading-relaxed">
              {service.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 2xl:p-8 hover:border-edge-cyan/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-edge-cyan font-bold tracking-widest block mb-2">
                    ETAPA {idx + 1}
                  </span>
                  <h4 className="text-base 2xl:text-lg font-bold text-slate-100 mb-1 group-hover:text-edge-cyan transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs 2xl:text-sm text-edge-yellow/90 font-medium mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs 2xl:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="mb-24 rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-12 2xl:p-16 backdrop-blur-md">
          <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-edge-cyan text-sm 2xl:text-base font-bold uppercase tracking-wider mb-2">
              <FaLaptopCode />
              <span>{service.techsTitle}</span>
            </div>
            <p className="text-slate-400 text-sm sm:text-base 2xl:text-lg leading-relaxed">
              {service.techsSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {service.techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 2xl:px-5 2xl:py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm 2xl:text-base font-mono text-slate-200 hover:border-edge-cyan/40 hover:bg-edge-cyan/10 hover:text-edge-cyan transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="mb-24">
          <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-edge-yellow text-sm 2xl:text-base font-bold uppercase tracking-wider mb-2">
              <FaLayerGroup />
              <span>{service.deliverablesTitle}</span>
            </div>
            <p className="text-slate-400 text-base sm:text-lg 2xl:text-xl leading-relaxed">
              {service.deliverablesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-6 2xl:p-8 rounded-2xl border border-white/10 bg-slate-900/60 flex items-start gap-4 hover:border-white/20 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-edge-cyan/10 border border-edge-cyan/30 flex items-center justify-center text-edge-cyan text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="text-base 2xl:text-lg font-bold text-slate-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="rounded-3xl border border-edge-cyan/30 bg-gradient-to-br from-edge-dark to-slate-900/90 p-8 sm:p-14 2xl:p-20 text-center shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden">
          <div className="max-w-2xl 2xl:max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-slate-100">
              {service.ctaTitle}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg 2xl:text-xl leading-relaxed">
              {service.ctaSubtitle}
            </p>
            <div className="pt-4">
              <a
                href="https://calendly.com/gsedge/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-edge-yellow text-edge-darker px-10 py-5 rounded-2xl text-lg 2xl:text-xl font-black hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.5)]"
              >
                <FaCalendarCheck className="text-xl" />
                <span>{service.ctaButtonText}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
