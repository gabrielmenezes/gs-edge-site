'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaHome, FaBookOpen } from 'react-icons/fa';
import { useLanguage } from '../components/LanguageContext';

export default function WelcomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center relative z-10">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-edge-darker/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center"
        >
          {/* Top glow ambient effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-edge-cyan/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="w-20 h-20 rounded-3xl bg-edge-cyan/10 border border-edge-cyan/30 flex items-center justify-center text-edge-cyan text-4xl mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <FaCheckCircle className="animate-bounce" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-edge-cyan/30 bg-edge-cyan/10 text-edge-cyan text-xs font-semibold uppercase tracking-widest mb-4">
            <FaCalendarCheck />
            {t('welcome_badge')}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 mb-4 tracking-tight">
            {t('welcome_title')}
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            {t('welcome_subtitle')}
          </p>

          {/* Next Steps Card */}
          <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 text-left mb-8 space-y-4">
            <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="w-2 h-2 rounded-full bg-edge-yellow"></span>
              {t('welcome_card_title')}
            </h2>

            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-edge-cyan/20 text-edge-cyan font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>{t('welcome_step_1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-edge-cyan/20 text-edge-cyan font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>{t('welcome_step_2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-edge-cyan/20 text-edge-cyan font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>{t('welcome_step_3')}</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edge-cyan text-edge-darker font-extrabold px-8 py-4 rounded-xl shadow-lg hover:bg-cyan-300 transition-all text-base hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105"
            >
              <FaHome />
              <span>{t('welcome_btn_home')}</span>
            </Link>
            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-edge-darker border border-slate-700 text-slate-200 font-bold px-8 py-4 rounded-xl hover:border-edge-cyan hover:text-edge-cyan transition-all text-base hover:scale-105"
            >
              <FaBookOpen />
              <span>{t('welcome_btn_blog')}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
