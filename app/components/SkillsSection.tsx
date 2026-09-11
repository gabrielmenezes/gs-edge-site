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
    { name: 'Ubiquiti', category: 'Wireless & Unifi', icon: SiUbiquiti, color: 'text-blue-400 group-hover:text-blue-300' },
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
    <section className="py-14 sm:py-20 relative overflow-hidden border-y border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-edge-cyan text-xs font-medium tracking-wide uppercase mb-3 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-edge-cyan animate-pulse"></span>
          {t('skills_badge')}
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2.5">
          {t('skills_title')}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          {t('skills_subtitle')}
        </p>
      </div>

      {/* Marquee Track Container with Apple Smooth Gradient Overlays */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-4 sm:gap-5 py-2">
          {marqueeItems.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3.5 bg-[#0c1322]/85 hover:bg-[#111a2e] border border-white/[0.08] hover:border-white/20 rounded-2xl px-5 py-3.5 transition-all duration-200 shrink-0 cursor-default"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-xl border border-white/[0.06] group-hover:scale-105 transition-transform">
                  <Icon className={`${skill.color} transition-colors`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-edge-cyan transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-normal text-slate-400 block">
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
