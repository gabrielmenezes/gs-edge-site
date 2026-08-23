'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaShieldAlt, FaChartPie, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import { getAllProducts } from '@/lib/products';

export default function ProductsSection() {
  const { language, t } = useLanguage();
  const products = getAllProducts(language);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'beta':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default:
        return 'bg-edge-cyan/10 text-edge-cyan border-edge-cyan/30';
    }
  };

  return (
    <section id="products" className="py-24 px-4 relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-edge-cyan/5 blur-[160px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-edge-cyan/30 bg-edge-cyan/10 text-edge-cyan text-xs font-mono font-bold tracking-widest uppercase mb-4 mx-auto">
            <FaRocket className="text-xs" />
            <span>{t('products_badge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
            {t('products_title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('products_subtitle')}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle Card Accent Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-edge-cyan/10 rounded-full blur-2xl group-hover:bg-edge-cyan/20 transition-all"></div>

              <div>
                {/* Status & Category */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusBadgeClass(product.status)}`}>
                    {product.statusLabel}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {product.category.split('&')[0]}
                  </span>
                </div>

                {/* Product Name & Tagline */}
                <div className="mb-4">
                  <h3 className="text-2xl font-extrabold text-slate-100 group-hover:text-edge-cyan transition-colors flex items-center gap-2">
                    {product.name}
                  </h3>
                  <p className="text-edge-yellow font-medium text-xs mt-1">
                    {product.badge}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {product.summary}
                </p>

                {/* Key Highlights */}
                {product.pillars && (
                  <div className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {product.pillars.slice(0, 3).map((pillar, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <FaCheckCircle className="text-edge-cyan mt-0.5 shrink-0" />
                        <span>
                          <strong className="text-slate-100 font-semibold">{pillar.title}</strong>
                          {pillar.percentage && ` (${pillar.percentage})`}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-edge-cyan hover:text-slate-950 border border-white/10 hover:border-edge-cyan text-slate-100 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 group/btn text-sm shadow-md"
                >
                  <span>{t('products_learn_more')}</span>
                  <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-edge-cyan hover:text-edge-yellow font-bold text-sm uppercase tracking-wider transition-all px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-edge-cyan/40 hover:scale-105 group"
          >
            <span>{t('products_view_all')}</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
