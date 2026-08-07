'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { 
  FaLinkedin, 
  FaWhatsapp, 
  FaFacebookF, 
  FaTwitter, 
  FaLink, 
  FaCheck, 
  FaShareAlt 
} from 'react-icons/fa';

interface SocialShareProps {
  title: string;
  slug?: string;
}

export default function SocialShare({ title }: SocialShareProps) {
  const { t } = useLanguage();
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const getUrl = () => {
    if (currentUrl) return currentUrl;
    if (typeof window !== 'undefined') return window.location.href;
    return '';
  };

  const activeUrl = getUrl();
  const encodedUrl = encodeURIComponent(activeUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareItems = [
    {
      id: 'linkedin',
      name: t('share_linkedin'),
      icon: FaLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      colorClass: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40',
    },
    {
      id: 'twitter',
      name: t('share_twitter'),
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      colorClass: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/15 hover:border-[#1DA1F2]/40',
    },
    {
      id: 'whatsapp',
      name: t('share_whatsapp'),
      icon: FaWhatsapp,
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      colorClass: 'hover:text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366]/40',
    },
    {
      id: 'facebook',
      name: t('share_facebook'),
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      colorClass: 'hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40',
    },
  ];

  const handleCopyLink = async () => {
    const urlToCopy = getUrl();
    if (!urlToCopy) return;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy URL', err);
    }
  };

  return (
    <div className="my-8 p-4 sm:p-5 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl shadow-xl shadow-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm sm:text-base">
        <div className="p-2 rounded-lg bg-edge-cyan/10 text-edge-cyan border border-edge-cyan/20">
          <FaShareAlt className="w-4 h-4" />
        </div>
        <span>{t('share_title')}</span>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap justify-center">
        {shareItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              aria-label={item.name}
              className={`p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/50 text-slate-300 transition-all duration-200 hover:scale-105 active:scale-95 ${item.colorClass}`}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}

        <button
          onClick={handleCopyLink}
          title={copied ? t('share_copied') : t('share_copy')}
          aria-label={copied ? t('share_copied') : t('share_copy')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-200 hover:scale-105 active:scale-95 ${
            copied
              ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-400'
              : 'bg-edge-cyan/10 border-edge-cyan/30 text-edge-cyan hover:bg-edge-cyan/20 hover:border-edge-cyan/60'
          }`}
        >
          {copied ? (
            <>
              <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('share_copied')}</span>
            </>
          ) : (
            <>
              <FaLink className="w-3.5 h-3.5" />
              <span>{t('share_copy')}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
