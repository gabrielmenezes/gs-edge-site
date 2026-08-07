'use client';

import { useLanguage } from "./LanguageContext";
import { FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function FormContato() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 px-4 bg-edge-darker/60 relative z-10 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
                        {t('contact_title')}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        {t('contact_subtitle')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Schedule Technical Diagnostics CTA Card */}
                    <div className="bg-gradient-to-br from-slate-900/90 to-edge-darker border border-edge-cyan/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center text-center group hover:border-edge-cyan/60 transition-all duration-300">
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-edge-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-edge-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex flex-col items-center text-center w-full">
                            <div className="w-16 h-16 rounded-2xl bg-edge-yellow/10 border border-edge-yellow/30 flex items-center justify-center text-edge-yellow text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                                <FaCalendarCheck />
                            </div>

                            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-edge-yellow/30 bg-edge-yellow/10 text-edge-yellow text-xs font-semibold uppercase tracking-widest mb-4 mx-auto">
                                Reunião de 30 minutos
                            </div>

                            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-100 mb-4 leading-tight text-center">
                                {t('hero_cta_diagnostics')}
                            </h3>

                            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 text-center max-w-xl mx-auto">
                                {t('hero_cta_phrase')} Escolha o melhor dia e horário na nossa agenda oficial no Calendly para conversarmos sobre arquitetura, sistemas legados e infraestrutura.
                            </p>
                        </div>

                        <div className="w-full sm:w-auto">
                            <a
                                href="https://calendly.com/gsedge/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto py-4 px-10 bg-edge-yellow text-edge-darker font-extrabold rounded-2xl shadow-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 text-lg hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:scale-[1.03]"
                            >
                                <span>{t('hero_cta_diagnostics')}</span>
                                <span className="group-hover:translate-x-1.5 transition-transform text-xl">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

