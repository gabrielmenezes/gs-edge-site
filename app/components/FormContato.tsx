'use client';

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function FormContato() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 5000);
    };

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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info Card */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-edge-darker to-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-edge-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="w-14 h-14 rounded-2xl bg-edge-cyan/10 border border-edge-cyan/30 flex items-center justify-center text-edge-cyan text-2xl mb-6">
                            <FaEnvelope />
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 mb-2">
                            {t('contact_email_title')}
                        </h3>
                        <p className="text-slate-400 text-sm mb-6">
                            {t('contact_email_sub')}
                        </p>

                        <a
                            href="mailto:contato@gsedge.com.br"
                            className="inline-flex items-center gap-3 text-lg font-bold text-edge-cyan hover:text-edge-yellow transition-colors group py-2"
                        >
                            <span>contato@gsedge.com.br</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>

                        <div className="mt-10 pt-8 border-t border-white/10 text-xs text-slate-500 space-y-2">
                            <p className="font-semibold text-slate-400">GS Edge - Software Engineering</p>
                            <p>Desenvolvimento de Software sob Medida</p>
                            <p>São Paulo, SP - Brasil</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-edge-darker/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
                        {submitted ? (
                            <div className="py-12 text-center flex flex-col items-center justify-center">
                                <FaCheckCircle className="text-edge-cyan text-5xl mb-4 animate-bounce" />
                                <h4 className="text-2xl font-bold text-slate-100 mb-2">
                                    {t('contact_success')}
                                </h4>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-edge-cyan focus:ring-1 focus:ring-edge-cyan transition-all text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-edge-cyan focus:ring-1 focus:ring-edge-cyan transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                        {t('contact_subject')}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-edge-cyan focus:ring-1 focus:ring-edge-cyan transition-all text-sm"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        {t('contact_message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-edge-cyan focus:ring-1 focus:ring-edge-cyan transition-all text-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-edge-cyan text-edge-darker font-bold rounded-xl shadow-lg hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 text-base hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                                >
                                    <FaPaperPlane />
                                    <span>{t('contact_submit')}</span>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

