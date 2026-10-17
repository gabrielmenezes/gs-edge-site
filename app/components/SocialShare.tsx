'use client';

import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaWhatsapp, FaXTwitter, FaLink, FaCheck } from 'react-icons/fa6';
import { siteUrl } from '@/lib/site';

export default function SocialShare({ title, slug }: { title: string; slug?: string }) {
  const url = `${siteUrl}/blog${slug ? `/${slug}` : ''}`;
  const encodedUrl = encodeURIComponent(url);
  const [feedback, setFeedback] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setFeedback('Link copiado!');
    } catch {
      setFeedback('Não foi possível copiar. Copie o endereço pela barra do navegador.');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setFeedback(''), 3500);
  }

  const items = [
    { label: 'Compartilhar no LinkedIn', icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { label: 'Compartilhar no X', icon: FaXTwitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}` },
    { label: 'Compartilhar no WhatsApp', icon: FaWhatsapp, href: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} ${url}`)}` },
  ];

  return (
    <div className="editorial-share">
      <span>Uma boa leitura merece ser compartilhada.</span>
      <div className="editorial-share-actions">
        {items.map(({ label, icon: Icon, href }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre em nova aba)`}><Icon aria-hidden="true" /></a>)}
        <button onClick={copyLink} aria-label="Copiar link do artigo">{feedback === 'Link copiado!' ? <FaCheck aria-hidden="true" /> : <FaLink aria-hidden="true" />}</button>
      </div>
      <span className="editorial-share-feedback" role="status">{feedback}</span>
    </div>
  );
}
