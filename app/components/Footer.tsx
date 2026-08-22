'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-edge-dark border-t border-slate-800 text-slate-400 py-10 text-sm relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="font-bold text-slate-200 text-base">GS Edge - Software Engineering</p>
          <p className="text-xs text-slate-400">Design de Sistemas, Software sob Medida & Capacitação em TI</p>
          <p className="text-xs text-slate-500">São Paulo, SP - Brasil</p>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/company/gsedge"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn GS Edge"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-edge-cyan hover:border-edge-cyan hover:bg-edge-cyan/10 transition-all hover:scale-110"
          >
            <FaLinkedinIn className="text-base" />
          </a>
          <a
            href="https://www.instagram.com/gs.edge/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram GS Edge"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-edge-yellow hover:border-edge-yellow hover:bg-edge-yellow/10 transition-all hover:scale-110"
          >
            <FaInstagram className="text-base" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61593482286075"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook GS Edge"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-edge-cyan hover:border-edge-cyan hover:bg-edge-cyan/10 transition-all hover:scale-110"
          >
            <FaFacebookF className="text-base" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-xs">
          <a 
            href="mailto:contato@gsedge.com.br" 
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-edge-cyan text-edge-cyan font-semibold transition-all hover:scale-105"
          >
            contato@gsedge.com.br
          </a>
          <span className="text-slate-500">
            © {new Date().getFullYear()} <span className="font-bold text-slate-300">GS Edge</span>. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
