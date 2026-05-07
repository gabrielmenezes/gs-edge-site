'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/app/assets/images/hero_network_abstract.png'; 
import { useLanguage } from './LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4">
                {/* Texto Hero */}
                <div className="lg:w-1/2 text-center lg:text-left z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl lg:text-7xl font-extrabold leading-tight py-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
                    >
                        {t('hero_title').split(' experiences')[0]} <span className="text-edge-cyan">{t('hero_title').includes('experiences') ? 'digital experiences' : 'experiências digitais'}</span> {t('hero_title').split('importam')[1] || t('hero_title').split('matter')[1] || ''}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl text-slate-400 py-6 max-w-2xl mx-auto lg:mx-0"
                    >
                        {t('hero_subtitle')}
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 py-4"
                    >
                        <a
                            href="/work"
                            className="group relative inline-flex items-center justify-center bg-edge-yellow text-edge-darker px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:bg-yellow-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                        >
                            {t('hero_cta_work')}
                        </a>
                        <a
                            href="/blog"
                            className="group relative inline-flex items-center justify-center bg-edge-darker border border-slate-700 text-slate-300 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:border-edge-cyan hover:text-edge-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-105"
                        >
                            {t('hero_cta_blog')}
                        </a>
                    </motion.div>
                </div>

                {/* Imagem Hero */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="lg:w-1/2 mb-12 lg:mb-0 relative z-10 flex justify-center lg:justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-edge-cyan/20 to-edge-yellow/20 blur-2xl rounded-full"></div>
                        <Image
                            src={heroImage}
                            alt="Abstract network representation"
                            className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                            width={600}
                            height={600}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
