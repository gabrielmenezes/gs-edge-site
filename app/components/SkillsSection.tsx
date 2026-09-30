'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import {
  SiCisco,
  SiJunipernetworks,
  SiMikrotik,
  SiUbiquiti,
  SiFortinet,
  SiAmazonwebservices,
  SiGooglecloud,
  SiNextdotjs,
  SiGo,
  SiPython,
  SiN8N,
  SiTerraform,
  SiKubernetes,
  SiApachekafka,
  SiGrafana,
} from 'react-icons/si';
import { FaNetworkWired, FaServer, FaLayerGroup, FaShieldAlt } from 'react-icons/fa';

type SkillDomain = 'all' | 'networks' | 'cloud' | 'architecture' | 'automation';

interface Skill {
  name: string;
  domain: 'networks' | 'cloud' | 'architecture' | 'automation';
  categoryPt: string;
  categoryEn: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const [activeDomain, setActiveDomain] = useState<SkillDomain>('all');
  const appleEase = [0.16, 1, 0.3, 1] as const;

  const categories: { id: SkillDomain; labelPt: string; labelEn: string }[] = [
    { id: 'all', labelPt: 'Todos os Domínios', labelEn: 'All Domains' },
    { id: 'networks', labelPt: 'Redes & Telecom', labelEn: 'Networks & Telecom' },
    { id: 'cloud', labelPt: 'Cloud & Multicloud', labelEn: 'Cloud & Multicloud' },
    { id: 'architecture', labelPt: 'Sistemas & Código', labelEn: 'Systems & Code' },
    { id: 'automation', labelPt: 'Automação & SRE', labelEn: 'Automation & SRE' },
  ];

  const skills: Skill[] = [
    // Networks & Telecom
    { name: 'Cisco', domain: 'networks', categoryPt: 'Redes Corporativas & SD-WAN', categoryEn: 'Enterprise Networks & SD-WAN', icon: SiCisco, color: 'text-cyan-400' },
    { name: 'Juniper', domain: 'networks', categoryPt: 'Roteamento Core & BGP', categoryEn: 'Core Routing & BGP', icon: SiJunipernetworks, color: 'text-indigo-400' },
    { name: 'Fortinet', domain: 'networks', categoryPt: 'Segurança & Firewalls', categoryEn: 'Security & Firewalls', icon: SiFortinet, color: 'text-rose-400' },
    { name: 'Arista', domain: 'networks', categoryPt: 'Data Center Spine-Leaf', categoryEn: 'Data Center Spine-Leaf', icon: FaServer, color: 'text-amber-400' },
    { name: 'Meraki', domain: 'networks', categoryPt: 'Cloud-Managed Networks', categoryEn: 'Cloud-Managed Networks', icon: FaNetworkWired, color: 'text-emerald-400' },
    { name: 'Mikrotik', domain: 'networks', categoryPt: 'Roteamento & Topologias ISP', categoryEn: 'Routing & ISP Topologies', icon: SiMikrotik, color: 'text-red-400' },
    { name: 'Ubiquiti', domain: 'networks', categoryPt: 'Wireless & LAN Corporativa', categoryEn: 'Wireless & Corporate LAN', icon: SiUbiquiti, color: 'text-blue-400' },

    // Cloud & Multicloud
    { name: 'AWS', domain: 'cloud', categoryPt: 'Hyperscaler & FinOps Cloud', categoryEn: 'Hyperscaler & Cloud FinOps', icon: SiAmazonwebservices, color: 'text-yellow-400' },
    { name: 'Google Cloud', domain: 'cloud', categoryPt: 'Infraestrutura Distribuída', categoryEn: 'Distributed Infrastructure', icon: SiGooglecloud, color: 'text-blue-400' },
    { name: 'Terraform', domain: 'cloud', categoryPt: 'Infraestrutura como Código', categoryEn: 'Infrastructure as Code (IaC)', icon: SiTerraform, color: 'text-purple-400' },
    { name: 'Kubernetes', domain: 'cloud', categoryPt: 'Orquestração & Containers', categoryEn: 'Container Orchestration', icon: SiKubernetes, color: 'text-sky-400' },

    // Systems & Architecture
    { name: 'Golang', domain: 'architecture', categoryPt: 'Backends de Alta Concorrência', categoryEn: 'High-Concurrency Backends', icon: SiGo, color: 'text-cyan-400' },
    { name: 'Python', domain: 'architecture', categoryPt: 'Automação & Sistemas Críticos', categoryEn: 'Automation & Backend Systems', icon: SiPython, color: 'text-sky-400' },
    { name: 'Next.js', domain: 'architecture', categoryPt: 'Arquiteturas Web Modernas', categoryEn: 'Modern Web Architectures', icon: SiNextdotjs, color: 'text-slate-100' },
    { name: 'Microservices', domain: 'architecture', categoryPt: 'Arquiteturas Desacopladas', categoryEn: 'Decoupled Architectures', icon: FaLayerGroup, color: 'text-emerald-400' },

    // Automation & SRE
    { name: 'N8N', domain: 'automation', categoryPt: 'Automação de Workflows', categoryEn: 'Workflow Automation', icon: SiN8N, color: 'text-orange-400' },
    { name: 'Apache Kafka', domain: 'automation', categoryPt: 'Mensageria Event-Driven', categoryEn: 'Event-Driven Messaging', icon: SiApachekafka, color: 'text-red-400' },
    { name: 'Grafana', domain: 'automation', categoryPt: 'Observabilidade & Telemetria', categoryEn: 'Observability & Telemetry', icon: SiGrafana, color: 'text-amber-400' },
    { name: 'SRE & Uptime', domain: 'automation', categoryPt: 'Governança & Resiliência', categoryEn: 'Reliability & Governance', icon: FaShieldAlt, color: 'text-cyan-400' },
  ];

  const filteredSkills = activeDomain === 'all' 
    ? skills 
    : skills.filter((s) => s.domain === activeDomain);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden border-y border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-edge-cyan text-xs font-medium tracking-wide uppercase mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-edge-cyan animate-pulse"></span>
            {t('skills_badge')}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2.5">
            {t('skills_title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {t('skills_subtitle')}
          </p>
        </motion.div>

        {/* Apple Segmented Control Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
          className="flex justify-center mb-10 sm:mb-12 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="inline-flex items-center gap-1 p-1 sm:p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            {categories.map((category) => {
              const isActive = activeDomain === category.id;
              const label = language === 'pt' ? category.labelPt : category.labelEn;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveDomain(category.id)}
                  className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 select-none whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/15 shadow-[0_0_15px_rgba(255,255,255,0.06)]"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Filterable Grid of Tech Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              const categoryLabel = language === 'pt' ? skill.categoryPt : skill.categoryEn;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: appleEase }}
                  className="group relative flex items-center gap-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.07] hover:border-white/20 rounded-2xl p-4 sm:p-4.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Subtle top spotlight on card hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-b from-white/[0.03] to-transparent rounded-full blur-lg pointer-events-none group-hover:from-edge-cyan/10 transition-colors" />

                  <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 group-hover:border-white/20 transition-all duration-200">
                    <Icon className={`${skill.color} transition-colors`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-white group-hover:text-edge-cyan transition-colors truncate">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-normal block truncate mt-0.5">
                      {categoryLabel}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
