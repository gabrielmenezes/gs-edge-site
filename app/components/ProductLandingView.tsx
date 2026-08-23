'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaShieldAlt,
  FaChartPie,
  FaCoins,
  FaPiggyBank,
  FaUmbrellaBeach,
  FaLock,
  FaChevronDown,
  FaPaperPlane,
  FaRocket,
} from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import { Product, getProductBySlug } from '@/lib/products';

interface ProductLandingViewProps {
  slug: string;
  initialProduct: Product;
}

export default function ProductLandingView({ slug, initialProduct }: ProductLandingViewProps) {
  const { language, t } = useLanguage();
  const product = getProductBySlug(slug, language) || initialProduct;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmitWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg(language === 'pt' ? 'Por favor, insira um e-mail válido.' : 'Please enter a valid email.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg('');
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          productSlug: product.slug,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || (language === 'pt' ? 'Ocorreu um erro. Tente novamente.' : 'An error occurred. Please retry.'));
      }
    } catch (err) {
      console.error('Waitlist submit error', err);
      setErrorMsg(language === 'pt' ? 'Erro de conexão. Tente novamente.' : 'Connection error. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaCoins className="text-edge-cyan text-xl" />;
      case 1:
        return <FaChartPie className="text-emerald-400 text-xl" />;
      case 2:
        return <FaPiggyBank className="text-edge-yellow text-xl" />;
      default:
        return <FaUmbrellaBeach className="text-cyan-300 text-xl" />;
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 bg-edge-darker text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[180px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-edge-cyan/10 blur-[180px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-edge-cyan hover:text-edge-yellow transition-all duration-200 hover:-translate-x-1"
          >
            <FaArrowLeft className="text-xs" />
            <span>{t('back_to_products')}</span>
          </Link>
        </div>

        {/* Hero Section with Early Access Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {product.badge}
            </div>

            {/* Title & Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              {product.name}:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {product.tagline}
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Stats / Highlight Pills */}
            {product.stats && (
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                {product.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <span className="text-xl sm:text-2xl font-black text-edge-cyan font-mono block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 leading-tight block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Lead Capture Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-edge-cyan block mb-2">
                  {t('waitlist_badge')}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-100">
                  {t('waitlist_title')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {t('waitlist_subtitle')}
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {t('waitlist_success_title')}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {t('waitlist_success_desc')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmitWaitlist} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {language === 'pt' ? 'Nome (Opcional)' : 'Name (Optional)'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('waitlist_name_placeholder')}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      {language === 'pt' ? 'Seu E-mail *' : 'Your Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('waitlist_email_placeholder')}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-400 font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-sm disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{t('waitlist_loading_btn')}</span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>{t('waitlist_submit_btn')}</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    {t('waitlist_privacy_note')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Methodology / Pillars Section */}
        {product.pillars && (
          <section className="mb-24 pt-16 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                Framework & Estratégia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
                {product.pillarsTitle}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3">
                {product.pillarsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getPillarIcon(idx)}
                      </div>
                      {pillar.percentage && (
                        <span className="px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                          {pillar.percentage}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-edge-yellow font-medium mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features Grid */}
        {product.features && (
          <section className="mb-24 pt-16 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                Features & Recursos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
                {product.featuresTitle}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3">
                {product.featuresSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-black/30 border border-white/5 hover:border-white/15 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-edge-cyan/10 border border-edge-cyan/20 flex items-center justify-center text-edge-cyan mb-4">
                    <FaCheckCircle className="text-xs" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {product.faqs && (
          <section className="mb-24 pt-16 border-t border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                Dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
                {t('faq_title')}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3">
                {t('faq_subtitle')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {product.faqs.map((faq, qIdx) => {
                const isOpen = openFaqIndex === qIdx;
                return (
                  <div
                    key={qIdx}
                    className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : qIdx)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-100 hover:text-emerald-400 transition-colors"
                    >
                      <span className="text-base sm:text-lg">{faq.question}</span>
                      <FaChevronDown
                        className={`text-xs text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-emerald-400' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Final Conversion Bottom Banner */}
        <section className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              {language === 'pt'
                ? 'Pronto para transformar sua relação com o dinheiro?'
                : 'Ready to transform your relationship with money?'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {language === 'pt'
                ? 'Junte-se à lista VIP e seja um dos primeiros a experimentar a metodologia do GSMoney.'
                : 'Join the VIP list and be among the first to experience the GSMoney methodology.'}
            </p>
            <div className="pt-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-sm cursor-pointer inline-flex items-center gap-2"
              >
                <FaRocket />
                <span>{t('waitlist_submit_btn')}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
