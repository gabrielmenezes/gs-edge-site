'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] text-slate-400 py-10 sm:py-12 text-xs relative z-10 bg-[#050810]/80">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="font-semibold text-slate-200 text-sm">GS Edge • Software Engineering</p>
          <p className="text-xs text-slate-400">Design de Sistemas, Software sob Medida & Capacitação em TI</p>
          <p className="text-[11px] text-slate-500">São Paulo, SP - Brasil</p>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://linkedin.com/company/gsedge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn GS Edge"
            className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all active:scale-95"
          >
            <FaLinkedinIn className="text-xs" />
          </a>
          <a
            href="https://www.instagram.com/gs.edge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram GS Edge"
            className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all active:scale-95"
          >
            <FaInstagram className="text-xs" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593482286075"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook GS Edge"
            className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/20 transition-all active:scale-95"
          >
            <FaFacebookF className="text-xs" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">
          <a 
            href="mailto:contato@gsedge.com.br" 
            className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium transition-all active:scale-95"
          >
            contato@gsedge.com.br
          </a>
          <span className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} GS Edge.
          </span>
        </div>
      </div>
    </footer>
  );
}
