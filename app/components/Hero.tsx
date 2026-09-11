'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { FaShieldAlt, FaBolt, FaLayerGroup } from 'react-icons/fa';

export default function Hero() {
    const { t } = useLanguage();

    const appleEase = [0.16, 1, 0.3, 1] as const;

    const metrics = [
        {
            icon: FaShieldAlt,
            val: t('hero_bento_metric_1_val'),
            lbl: t('hero_bento_metric_1_lbl'),
            accent: 'text-edge-cyan',
        },
        {
            icon: FaBolt,
            val: t('hero_bento_metric_2_val'),
            lbl: t('hero_bento_metric_2_lbl'),
            accent: 'text-edge-yellow',
        },
        {
            icon: FaLayerGroup,
            val: t('hero_bento_metric_3_val'),
            lbl: t('hero_bento_metric_3_lbl'),
            accent: 'text-sky-400',
        },
    ];

    return (
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden">
            <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 relative z-10">
                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: appleEase }}
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12]"
                >
                    {t('hero_title_1')}{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-edge-cyan via-cyan-200 to-edge-yellow font-extrabold">
                        {t('hero_title_2')}
                    </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: appleEase }}
                    className="text-base sm:text-lg md:text-xl text-slate-300/90 pt-5 pb-8 max-w-2xl mx-auto leading-relaxed font-normal"
                >
                    {t('hero_subtitle')}
                </motion.p>

                {/* CTAs em Pílula Apple */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: appleEase }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
                >
                    <a
                        href="https://calendly.com/gsedge/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edge-cyan hover:bg-cyan-300 text-slate-950 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-200 active:scale-95"
                    >
                        <span>{t('hero_cta_diagnostics')}</span>
                        <span className="text-xs">→</span>
                    </a>
                    <Link
                        href="/#services"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 px-7 py-3.5 rounded-full text-sm sm:text-base font-medium backdrop-blur-sm md:backdrop-blur-md transition-all duration-200 active:scale-95"
                    >
                        {t('hero_cta_solutions')}
                    </Link>
                </motion.div>

                {/* Frase de apoio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xs sm:text-sm text-slate-400 mt-4"
                >
                    {t('hero_cta_phrase')}
                </motion.p>

                {/* Apple Developer Bento Highlights (Primeira Dobra) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45, ease: appleEase }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 w-full mt-10 sm:mt-14"
                >
                    {metrics.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative flex items-center gap-4 sm:flex-col sm:items-center text-left sm:text-center p-4 sm:p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/20 backdrop-blur-md md:backdrop-blur-xl transition-all duration-300 active:scale-[0.99]"
                            >
                                <div className={`w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0 ${item.accent} text-lg`}>
                                    <Icon />
                                </div>
                                <div>
                                    <div className={`text-xl sm:text-2xl font-bold tracking-tight text-white ${item.accent}`}>
                                        {item.val}
                                    </div>
                                    <div className="text-xs text-slate-400 font-medium mt-0.5 leading-snug">
                                        {item.lbl}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
