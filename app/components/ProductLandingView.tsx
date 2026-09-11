'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaChartPie,
  FaCoins,
  FaPiggyBank,
  FaUmbrellaBeach,
  FaChevronDown,
  FaExternalLinkAlt,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaCalendarAlt,
  FaLayerGroup,
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
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const [activeQuinzena, setActiveQuinzena] = useState<'mes' | 'q1' | 'q2'>('mes');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const targetUrl = product.appUrl || product.demoUrl || 'https://gsmoney.gsedge.com.br';

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
    <main className="min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-edge-darker text-slate-100 relative overflow-hidden">
      {/* Background ambient lighting with zero-cost radial gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_70%)] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.05)_0%,transparent_70%)] -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            <span>{t('back_to_products')}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mb-16 sm:mb-24">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: appleEase }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] mb-5 sm:mb-6"
          >
            {product.slug === 'gsmoney' ? (
              language === 'pt' ? (
                <>
                  Assuma o controle total do seu fluxo de caixa.{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-200 to-edge-yellow font-extrabold">
                    Sem planilhas.
                  </span>
                </>
              ) : (
                <>
                  Take total command of your financial flow.{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-200 to-edge-yellow font-extrabold">
                    Zero spreadsheets.
                  </span>
                </>
              )
            ) : (
              language === 'pt' ? (
                <>
                  Construa e escale seu Data Center.{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 font-extrabold">
                    Da Garagem ao Hyperscale.
                  </span>
                </>
              ) : (
                <>
                  Build & scale your Data Center.{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 font-extrabold">
                    From Garage to Hyperscale.
                  </span>
                </>
              )
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: appleEase }}
            className="text-slate-300 text-sm sm:text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal"
          >
            {product.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: appleEase }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12 sm:mb-16"
          >
            {product.status === 'live' && product.appUrl ? (
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold py-4 px-8 rounded-full text-sm sm:text-base shadow-[0_0_35px_rgba(16,185,129,0.35)] active:scale-95 transition-all duration-200 group"
              >
                <span>{language === 'pt' ? `Acessar ${product.name} na Web` : `Launch ${product.name} Web App`}</span>
                <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-edge-cyan font-bold text-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-edge-cyan animate-pulse"></span>
                <span>{language === 'pt' ? 'Lançamento em Breve no Navegador' : 'Coming Soon in Web Browser'}</span>
              </div>
            )}

            <a
              href="#metodologia"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-medium py-4 px-7 rounded-full text-sm sm:text-base backdrop-blur-md transition-all duration-200 active:scale-95"
            >
              <span>{language === 'pt' ? 'Conhecer Recursos' : 'Explore Capabilities'}</span>
              <FaArrowRight className="text-xs text-edge-cyan" />
            </a>
          </motion.div>

          {/* ========================================================================= */}
          {/* MOCKUP CONTAINER (Dynamic per product) */}
          {/* ========================================================================= */}
          {product.slug === 'gsmoney' ? (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: appleEase }}
              className="w-full max-w-6xl rounded-3xl border border-white/[0.15] bg-[#070b14]/95 p-3 sm:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden text-left"
            >
              {/* Top ambient highlight inside the device window */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-edge-cyan/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none" />

              {/* Window Bar / App Topbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-white/[0.08] px-2">
                {/* Brand Logo & Tabs */}
                <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-edge-cyan to-emerald-400 flex items-center justify-center text-slate-950 font-black text-xs">
                      GS
                    </div>
                    <span className="font-bold text-sm sm:text-base tracking-tight text-white">GSMoney</span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 text-xs font-medium text-slate-400 shrink-0">
                    <span className="px-3 py-1.5 rounded-lg bg-white/[0.08] text-white font-semibold flex items-center gap-1.5">
                      <FaLayerGroup className="text-edge-cyan text-[11px]" />
                      Visão Geral
                    </span>
                    <span className="hidden md:inline-flex px-3 py-1.5 rounded-lg hover:text-white transition-colors cursor-pointer">
                      Lançamentos
                    </span>
                    <span className="hidden md:inline-flex px-3 py-1.5 rounded-lg hover:text-white transition-colors cursor-pointer">
                      Planejamento
                    </span>
                    <span className="hidden lg:inline-flex px-3 py-1.5 rounded-lg hover:text-white transition-colors cursor-pointer">
                      Categorias
                    </span>
                    <span className="hidden lg:inline-flex px-3 py-1.5 rounded-lg hover:text-white transition-colors cursor-pointer">
                      Contas
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <button className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                    <FaPlus className="text-[10px]" />
                    <span>Ganho</span>
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all">
                    <FaMinus className="text-[10px]" />
                    <span>Despesa</span>
                  </button>
                  <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-slate-300 text-xs font-bold">
                    GS
                  </div>
                </div>
              </div>

              {/* Inner Dashboard View */}
              <div className="p-2 sm:p-5 space-y-4 sm:space-y-5">
                {/* PRO Banner */}
                <div className="rounded-2xl bg-amber-500/[0.08] border border-amber-500/20 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase">
                      PRO
                    </span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        Assine o GSMoney Pro <span className="text-[10px] text-edge-cyan font-mono uppercase bg-edge-cyan/10 px-1.5 py-0.5 rounded ml-1">NOVO</span>
                      </span>
                      <span className="text-[11px] text-slate-400 hidden sm:block">
                        Sincronização em múltiplos dispositivos, relatórios avançados de IA e sem anúncios.
                      </span>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shrink-0 transition-colors">
                    Upgrade
                  </button>
                </div>

                {/* Header Title & Period Filter */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">Painel Geral</h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Visão consolidada do seu fluxo de caixa quinzenal, orçamento previsto e saldo em contas.
                    </p>
                  </div>

                  {/* Period Selector */}
                  <div className="flex items-center gap-2">
                    <div className="inline-flex rounded-xl bg-black/40 border border-white/10 p-1 text-xs">
                      <button
                        onClick={() => setActiveQuinzena('mes')}
                        className={`px-3 py-1 rounded-lg font-medium transition-all ${
                          activeQuinzena === 'mes' ? 'bg-edge-cyan/20 text-edge-cyan font-bold border border-edge-cyan/30' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Mês Inteiro
                      </button>
                      <button
                        onClick={() => setActiveQuinzena('q1')}
                        className={`px-3 py-1 rounded-lg font-medium transition-all ${
                          activeQuinzena === 'q1' ? 'bg-edge-cyan/20 text-edge-cyan font-bold border border-edge-cyan/30' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        1ª Quinzena
                      </button>
                      <button
                        onClick={() => setActiveQuinzena('q2')}
                        className={`px-3 py-1 rounded-lg font-medium transition-all ${
                          activeQuinzena === 'q2' ? 'bg-edge-cyan/20 text-edge-cyan font-bold border border-edge-cyan/30' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        2ª Quinzena
                      </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 font-mono">
                      <FaCalendarAlt className="text-edge-cyan text-[10px]" />
                      <span>Outubro 2026</span>
                    </div>
                  </div>
                </div>

                {/* 3 Core Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                  {/* Entradas */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 sm:p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-mono tracking-wider mb-2">
                      <span>Total Entradas (Receitas)</span>
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        ↑
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight mb-2">
                      R$ 12.667,52
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.06] pt-2">
                      <span>Recebido: <strong className="text-emerald-400">R$ 0,00</strong></span>
                      <span>Pendente: <strong className="text-slate-300">R$ 12.667,52</strong></span>
                    </div>
                  </div>

                  {/* Saídas */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 sm:p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-mono tracking-wider mb-2">
                      <span>Total Saídas (Despesas)</span>
                      <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-xs">
                        ↓
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono tracking-tight mb-2">
                      R$ 11.205,87
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.06] pt-2">
                      <span>Pago: <strong className="text-rose-400">R$ 0,00</strong></span>
                      <span>Pendente: <strong className="text-slate-300">R$ 11.205,87</strong></span>
                    </div>
                  </div>

                  {/* Saldo Atual */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 sm:p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-mono tracking-wider mb-2">
                      <span>Saldo Atual em Contas</span>
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[10px] font-bold">
                        2 conta(s)
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono tracking-tight mb-2">
                      -R$ 1.367,91
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/[0.06] pt-2">
                      <span>Sobra prevista: <strong className="text-emerald-400">+R$ 1.461,65</strong></span>
                      <span>Projeção: <strong className="text-slate-300">R$ 93,74</strong></span>
                    </div>
                  </div>
                </div>

                {/* AI Status / Fluxo Equilibrado Card */}
                <div className="rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 p-3.5 sm:p-4 flex items-center gap-3">
                  <span className="text-xl shrink-0">👍</span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white block">Fluxo Equilibrado</span>
                    <span className="text-xs text-slate-300 leading-snug">
                      Suas contas estão cobertas com folga estimada de <strong className="text-emerald-400">R$ 1.461,65</strong> e saldo final previsto de <strong className="text-white">R$ 93,74</strong>.
                    </span>
                  </div>
                </div>

                {/* Bottom 3 Detailed Panels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
                  {/* Próximos a Pagar */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        Próximos a Pagar (5)
                      </span>
                      <span className="text-edge-cyan text-[11px] hover:underline cursor-pointer">Ver Todos →</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400">DIA 1</span>
                          <span className="font-semibold text-slate-200">Aluguel</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-rose-400 font-bold">- R$ 850,00</span>
                          <span className="px-2 py-0.5 rounded bg-edge-cyan/10 text-edge-cyan text-[10px] font-bold">Pagar</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400">DIA 1</span>
                          <span className="font-semibold text-slate-200">Luz</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-rose-400 font-bold">- R$ 453,23</span>
                          <span className="px-2 py-0.5 rounded bg-edge-cyan/10 text-edge-cyan text-[10px] font-bold">Pagar</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-400">DIA 5</span>
                          <span className="font-semibold text-slate-200">Material das Crianças</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-rose-400 font-bold">- R$ 446,67</span>
                          <span className="px-2 py-0.5 rounded bg-edge-cyan/10 text-edge-cyan text-[10px] font-bold">Pagar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gastos por Categoria */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                          Gastos por Categoria
                        </span>
                        <div className="flex gap-1 text-[10px]">
                          <span className="px-1.5 py-0.5 rounded bg-edge-cyan/20 text-edge-cyan font-bold">Realizado</span>
                          <span className="px-1.5 py-0.5 rounded text-slate-500">Previsto</span>
                        </div>
                      </div>

                      <div className="space-y-2.5 pt-1">
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>50% Essenciais & Moradia</span>
                            <span className="font-mono text-edge-cyan">R$ 5.602,93</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                            <div className="h-full bg-edge-cyan rounded-full w-[50%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>25% Liberdade Financeira</span>
                            <span className="font-mono text-emerald-400">R$ 2.801,46</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full w-[25%]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>15% Sonhos & Metas</span>
                            <span className="font-mono text-edge-yellow">R$ 1.680,88</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                            <div className="h-full bg-edge-yellow rounded-full w-[15%]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                      <span>Método dos 4 Potes</span>
                      <span className="text-emerald-400 font-bold">100% Alocado</span>
                    </div>
                  </div>

                  {/* Últimos Lançamentos / Acesso Direto */}
                  <div className="rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-white mb-3">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                          Acesso em Tempo Real
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Sincronizado</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        Todas as suas movimentações quinzenais sincronizadas automaticamente na nuvem segura GS Edge.
                      </p>
                    </div>

                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-edge-cyan hover:bg-cyan-300 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
                    >
                      <span>Entrar no Painel do GSMoney</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ========================================================================= */
            /* GSEDGE DC MANAGER GAME MOCKUP (NOC & Data Center Tycoon Simulation) */
            /* ========================================================================= */
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: appleEase }}
              className="w-full max-w-6xl rounded-3xl border border-white/[0.15] bg-[#060913]/95 p-3 sm:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden text-left font-sans"
            >
              {/* Top ambient highlight */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />

              {/* NOC Topbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-white/[0.08] px-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-950 font-black text-xs">
                    HS
                  </div>
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white block leading-none">Hyperscale: Cloud & DC Manager</span>
                    <span className="text-[10px] text-edge-cyan font-mono">ERA 3: TIER III ENTERPRISE FACILITY</span>
                  </div>
                </div>

                {/* Live Gauges */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  <div className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-slate-400">Térmica:</span>
                    <span className="text-emerald-400 font-bold">21.4°C</span>
                  </div>

                  <div className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
                    <span className="text-slate-400">Potência:</span>
                    <span className="text-edge-cyan font-bold">14.8 kW / 25 kW</span>
                  </div>

                  <div className="hidden md:flex px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 items-center gap-2">
                    <span className="text-slate-400">PUE:</span>
                    <span className="text-amber-400 font-bold">1.18</span>
                  </div>
                </div>
              </div>

              {/* NOC Server Room Grid Preview */}
              <div className="p-2 sm:p-5 space-y-4">
                {/* 3 Isometric Rack Units */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Rack 01 */}
                  <div className="rounded-2xl bg-white/[0.02] border border-cyan-500/30 p-4 relative overflow-hidden group hover:border-cyan-400 transition-all">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-edge-cyan animate-ping"></span>
                        RACK A1 • Compute Blades
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">100% ONLINE</span>
                    </div>

                    <div className="space-y-1.5 py-2 font-mono text-[11px]">
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Blade #1 (Dual Xeon Gold)</span>
                        <span className="text-emerald-400">● 42°C</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Blade #2 (Dual Xeon Gold)</span>
                        <span className="text-emerald-400">● 44°C</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Blade #3 (Dual EPYC Rome)</span>
                        <span className="text-emerald-400">● 39°C</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                      <span>Carga: <strong>7.2 kW</strong></span>
                      <span>Contratos Ativos: <strong className="text-edge-cyan">4/4</strong></span>
                    </div>
                  </div>

                  {/* Rack 02 */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        RACK A2 • SAN Storage NVMe
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono">82% IOPS</span>
                    </div>

                    <div className="space-y-1.5 py-2 font-mono text-[11px]">
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Array 1: 24x NVMe U.2</span>
                        <span className="text-emerald-400">1.2M IOPS</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Array 2: 12x SAS 10K RPM</span>
                        <span className="text-slate-400">450k IOPS</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">JBOD Backup Cold Tier</span>
                        <span className="text-edge-yellow">Standby</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                      <span>Capacidade: <strong>128 TB</strong></span>
                      <span>SLA: <strong className="text-emerald-400">99.99%</strong></span>
                    </div>
                  </div>

                  {/* Rack 03 */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
                        RACK B1 • Spine-Leaf Core
                      </span>
                      <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px] font-mono">400 Gbps</span>
                    </div>

                    <div className="space-y-1.5 py-2 font-mono text-[11px]">
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Spine Switch 01 (BGP/EVPN)</span>
                        <span className="text-emerald-400">● 140Gbps</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">Spine Switch 02 (BGP/EVPN)</span>
                        <span className="text-emerald-400">● 135Gbps</span>
                      </div>
                      <div className="flex items-center justify-between p-1.5 rounded bg-black/40 border border-white/5">
                        <span className="text-slate-300">DDoS Scrubbing Appliance</span>
                        <span className="text-cyan-400">Armado</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/[0.06]">
                      <span>Trânsito IP: <strong>Dual Multi-Homing</strong></span>
                      <span>Perda de Pacotes: <strong className="text-emerald-400">0.00%</strong></span>
                    </div>
                  </div>
                </div>

                {/* Incident & Dispatch Alert Ticker */}
                <div className="rounded-2xl bg-cyan-500/[0.05] border border-cyan-500/20 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 text-slate-300">
                    <span className="text-lg">🛡️</span>
                    <span>
                      <strong className="text-white">Último Incidente Mitigado:</strong> Corte de Fibra Óptica em Backbone Secundário — tráfego redirecionado via BGP sem perda de SLA.
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold shrink-0">
                    SLA PROTEGIDO
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* METHODOLOGY SECTION (Os 4 Potes Estratégicos) */}
        {/* ========================================================================= */}
        {product.pillars && (
          <section id="metodologia" className="mb-20 sm:mb-28 pt-16 sm:pt-20 border-t border-white/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: appleEase }}
              className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            >
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                {language === 'pt' ? 'Metodologia Comprovada' : 'Proven Methodology'}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {product.pillarsTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                {product.pillarsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {product.pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: appleEase }}
                  className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md md:backdrop-blur-xl border border-white/[0.08] hover:border-emerald-400/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 active:scale-[0.99]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getPillarIcon(idx)}
                      </div>
                      {pillar.percentage && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                          {pillar.percentage}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-edge-yellow font-medium mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* FEATURES GRID SECTION */}
        {/* ========================================================================= */}
        {product.features && (
          <section className="mb-20 sm:mb-28 pt-16 sm:pt-20 border-t border-white/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: appleEase }}
              className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            >
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                {language === 'pt' ? 'Recursos & Engenharia' : 'Features & Engineering'}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {product.featuresTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                {product.featuresSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {product.features.map((feature, fIdx) => (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: fIdx * 0.06, ease: appleEase }}
                  className="bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md md:backdrop-blur-xl border border-white/[0.08] hover:border-white/20 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 active:scale-[0.99]"
                >
                  <div className="w-10 h-10 rounded-2xl bg-edge-cyan/10 border border-edge-cyan/20 flex items-center justify-center text-edge-cyan mb-4">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* FAQS SECTION */}
        {/* ========================================================================= */}
        {product.faqs && (
          <section className="mb-20 sm:mb-28 pt-16 sm:pt-20 border-t border-white/[0.08]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: appleEase }}
              className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
            >
              <span className="text-xs font-mono font-bold text-edge-cyan uppercase tracking-widest block mb-2">
                {language === 'pt' ? 'Dúvidas' : 'FAQ'}
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {t('faq_title')}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                {t('faq_subtitle')}
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3.5">
              {product.faqs.map((faq, qIdx) => {
                const isOpen = openFaqIndex === qIdx;
                return (
                  <motion.div
                    key={qIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, ease: appleEase }}
                    className="bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-2xl overflow-hidden transition-all backdrop-blur-md md:backdrop-blur-xl"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : qIdx)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left font-bold text-slate-100 hover:text-edge-cyan transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base">{faq.question}</span>
                      <FaChevronDown
                        className={`text-xs text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? 'rotate-180 text-edge-cyan' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: appleEase }}
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] pt-4 font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================================= */}
        {/* FINAL CONVERSION BOTTOM BANNER */}
        {/* ========================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: appleEase }}
          className="bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl border border-white/[0.1] rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-edge-cyan/10 rounded-full blur-xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {product.slug === 'gsedge-dc-game'
                ? language === 'pt'
                  ? 'Pronto para gerenciar seu próprio império de Data Centers?'
                  : 'Ready to manage your own Data Center empire?'
                : language === 'pt'
                  ? 'Pronto para transformar sua relação com o dinheiro?'
                  : 'Ready to transform your relationship with money?'}
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-normal">
              {product.slug === 'gsedge-dc-game'
                ? language === 'pt'
                  ? 'Evolua da sua garagem aos maiores campi de hiperescala do planeta. Domine energia, refrigeração e nuvem.'
                  : 'Evolve from your garage to massive hyperscale cloud campuses. Master power, cooling, and network scaling.'
                : language === 'pt'
                  ? 'Comece agora mesmo a organizar seu fluxo quinzenal e colocar seu patrimônio no rumo certo.'
                  : 'Start organizing your bi-weekly cash flow and building your financial freedom today.'}
            </p>
            <div className="pt-2">
              {product.status === 'live' && product.appUrl ? (
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-extrabold py-4 px-9 rounded-full transition-all duration-200 active:scale-95 shadow-[0_0_35px_rgba(16,185,129,0.35)] text-sm sm:text-base cursor-pointer inline-flex items-center gap-2.5 group"
                >
                  <span>{language === 'pt' ? `Acessar ${product.name} na Web` : `Launch ${product.name} Web App`}</span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-edge-cyan font-bold text-sm sm:text-base backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-edge-cyan animate-pulse"></span>
                  <span>{language === 'pt' ? 'Lançamento em Breve no Navegador' : 'Coming Soon in Web Browser'}</span>
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
