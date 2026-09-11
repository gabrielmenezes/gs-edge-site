'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import { getAllProducts } from '@/lib/products';

export default function ProductsSection() {
  const { language, t } = useLanguage();
  const products = getAllProducts(language);
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'beta':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-edge-cyan/10 text-edge-cyan border-edge-cyan/20';
    }
  };

  return (
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06] overflow-hidden">
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
            <FaRocket className="text-xs" />
            <span>{t('products_badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {t('products_title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('products_subtitle')}
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: appleEase }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 backdrop-blur-md md:backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] overflow-hidden cursor-pointer h-full"
              >
                {/* Subtle Ambient Card Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-b from-edge-cyan/10 to-transparent rounded-full blur-xl group-hover:from-edge-cyan/20 transition-all pointer-events-none" />

                <div>
                  {/* Status & Category */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide border ${getStatusBadgeClass(product.status)}`}>
                      {product.statusLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {product.category.split('&')[0]}
                    </span>
                  </div>

                  {/* Product Name & Tagline */}
                  <div className="mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-edge-cyan transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-edge-yellow font-medium text-xs mt-1">
                      {product.badge}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {product.summary}
                  </p>

                  {/* Key Highlights */}
                  {product.pillars && (
                    <div className="space-y-2 mb-6 border-t border-white/[0.06] pt-5">
                      {product.pillars.slice(0, 3).map((pillar, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <FaCheckCircle className="text-edge-cyan mt-0.5 shrink-0 text-[11px]" />
                          <span>
                            <strong className="text-white font-medium">{pillar.title}</strong>
                            {pillar.percentage && ` (${pillar.percentage})`}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div
                    className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.04] group-hover:bg-edge-cyan group-hover:text-slate-950 border border-white/10 group-hover:border-edge-cyan text-slate-200 font-semibold py-3 px-5 rounded-full transition-all duration-200 text-xs sm:text-sm"
                  >
                    <span>{t('products_learn_more')}</span>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 active:scale-95 group"
          >
            <span>{t('products_view_all')}</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform text-edge-cyan" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
