'use client';

import { motion } from 'framer-motion';
import { useLanguage } from "./LanguageContext";
import { FaCalendarCheck, FaArrowRight } from "react-icons/fa";

export default function FormContato() {
    const { t } = useLanguage();
    const appleEase = [0.16, 1, 0.3, 1] as const;

    return (
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
            <div className="w-full max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, ease: appleEase }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
                        {t('contact_title')}
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('contact_subtitle')}
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    {/* Schedule Technical Diagnostics CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: appleEase }}
                        className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md md:backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col items-center text-center transition-all duration-300"
                    >
                        {/* Apple-style subtle ambient glow */}
                        <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-b from-edge-cyan/15 to-transparent rounded-full blur-xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-t from-edge-yellow/10 to-transparent rounded-full blur-xl pointer-events-none" />

                        <div className="flex flex-col items-center text-center w-full">
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-edge-cyan text-2xl mb-6 shadow-sm">
                                <FaCalendarCheck />
                            </div>

                            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-edge-cyan text-xs font-medium tracking-wide uppercase mb-4">
                                {t('contact_badge')}
                            </div>

                            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white mb-3 leading-snug">
                                {t('hero_cta_diagnostics')}
                            </h3>

                            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-lg font-normal">
                                {t('contact_cta_desc')}
                            </p>
                        </div>

                        <div className="w-full sm:w-auto">
                            <a
                                href="https://calendly.com/gsedge/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-4 px-8 bg-edge-cyan hover:bg-cyan-300 text-slate-950 font-semibold rounded-full text-sm sm:text-base shadow-[0_0_25px_rgba(34,211,238,0.3)] active:scale-95 transition-all duration-200"
                            >
                                <span>{t('hero_cta_diagnostics')}</span>
                                <FaArrowRight className="text-xs" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

