'use client';

import React from 'react';
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
} from 'react-icons/si';
import { FaNetworkWired, FaServer } from 'react-icons/fa';

interface Skill {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function SkillsSection() {
  const { t } = useLanguage();

  const skills: Skill[] = [
    { name: 'Cisco', category: 'Networking', icon: SiCisco, color: 'text-cyan-400 group-hover:text-cyan-300' },
    { name: 'Juniper', category: 'Enterprise Networks', icon: SiJunipernetworks, color: 'text-indigo-400 group-hover:text-indigo-300' },
    { name: 'Meraki', category: 'Cloud Networking', icon: FaNetworkWired, color: 'text-emerald-400 group-hover:text-emerald-300' },
    { name: 'Mikrotik', category: 'Routing & Switching', icon: SiMikrotik, color: 'text-red-400 group-hover:text-red-300' },
    { name: 'Ubiquity', category: 'Wireless & Unifi', icon: SiUbiquiti, color: 'text-blue-400 group-hover:text-blue-300' },
    { name: 'Arista', category: 'Data Center Networks', icon: FaServer, color: 'text-amber-400 group-hover:text-amber-300' },
    { name: 'Fortinet', category: 'Cybersecurity & FW', icon: SiFortinet, color: 'text-rose-400 group-hover:text-rose-300' },
    { name: 'AWS', category: 'Cloud Infrastructure', icon: SiAmazonwebservices, color: 'text-yellow-400 group-hover:text-yellow-300' },
    { name: 'GCP', category: 'Google Cloud Platform', icon: SiGooglecloud, color: 'text-blue-400 group-hover:text-blue-300' },
    { name: 'NextJS', category: 'Frontend & Full-stack', icon: SiNextdotjs, color: 'text-slate-100 group-hover:text-white' },
    { name: 'Golang', category: 'Backend Systems', icon: SiGo, color: 'text-cyan-400 group-hover:text-cyan-300' },
    { name: 'Python', category: 'Automation & Data', icon: SiPython, color: 'text-sky-400 group-hover:text-sky-300' },
    { name: 'N8N', category: 'Workflow Automation', icon: SiN8N, color: 'text-orange-400 group-hover:text-orange-300' },
  ];

  // Double the array to create a seamless infinite loop
  const marqueeItems = [...skills, ...skills];

  return (
    <section className="py-16 bg-edge-darker/90 relative overflow-hidden border-y border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-edge-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-edge-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-edge-cyan/30 bg-edge-cyan/10 text-edge-cyan text-xs font-semibold uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-edge-cyan animate-pulse"></span>
          Tech Stack & Expertise
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-100 mb-3">
          {t('skills_title')}
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {t('skills_subtitle')}
        </p>
      </div>

      {/* Marquee Track Container with Gradient Overlays */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-edge-darker to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-edge-darker to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee gap-6 py-4">
          {marqueeItems.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-4 bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-edge-cyan/50 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] shrink-0 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className={`${skill.color} transition-colors`} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-edge-cyan transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-medium text-slate-400 block tracking-wide">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
