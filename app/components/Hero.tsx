'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 2xl:pt-56 2xl:pb-44 overflow-hidden">
            <div className="w-full max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto flex flex-col items-center text-center px-4 relative z-10">
                {/* Título Principal */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-extrabold leading-[1.1] tracking-tight py-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 max-w-4xl 2xl:max-w-5xl"
                >
                    {t('hero_title_1')}{' '}
                    <span className="text-edge-cyan font-black drop-shadow-[0_0_25px_rgba(34,211,238,0.55)]">
                        {t('hero_title_2')}
                    </span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg sm:text-xl 2xl:text-2xl text-slate-300/90 py-8 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light"
                >
                    {t('hero_subtitle')}
                </motion.p>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pb-4 w-full sm:w-auto"
                >
                    <a
                        href="https://calendly.com/gsedge/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center bg-edge-yellow text-edge-darker px-8 py-4 2xl:px-10 2xl:py-5 rounded-xl text-lg 2xl:text-xl font-bold transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,0.55)] cursor-pointer w-full sm:w-auto"
                    >
                        <span className="flex items-center gap-2">
                            <span>{t('hero_cta_diagnostics')}</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </a>
                    <Link
                        href="/#services"
                        className="group relative inline-flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-slate-300 px-8 py-4 2xl:px-10 2xl:py-5 rounded-xl text-lg 2xl:text-xl font-bold transition-all duration-300 hover:border-edge-cyan hover:text-edge-cyan hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:scale-105 w-full sm:w-auto"
                    >
                        {t('hero_cta_solutions')}
                    </Link>
                </motion.div>

                {/* Frase de apoio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xs sm:text-sm 2xl:text-base text-slate-400 mt-4 flex items-center justify-center gap-2"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-edge-yellow animate-pulse"></span>
                    {t('hero_cta_phrase')}
                </motion.p>
            </div>
        </section>
    );
}
