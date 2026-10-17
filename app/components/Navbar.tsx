'use client';

import Link from 'next/link';
import SiteLogo from './SiteLogo';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const items = [{ href: '/projetos', label: 'Projetos' }, { href: '/#about', label: 'Sobre' }, { href: '/blog', label: 'Blog' }, { href: '/#contact', label: 'Contato' }];

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpenPath(null); trigger.current?.focus(); }
      if (event.key === 'Tab') {
        const controls = [trigger.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') || [])].filter((item): item is HTMLButtonElement | HTMLAnchorElement => item !== null);
        const index = controls.indexOf(document.activeElement as HTMLAnchorElement);
        if (event.shiftKey && index <= 0) { event.preventDefault(); controls.at(-1)?.focus(); }
        else if (!event.shiftKey && (index === controls.length - 1 || index === -1)) { event.preventDefault(); controls[0]?.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKey); };
  }, [isOpen]);

  return <header className="personal-header"><div className="header-inner"><Link href="/" className="brand-link" aria-label="Gabriel Soares, início" onClick={() => setOpenPath(null)}><SiteLogo /></Link><nav className="desktop-nav" aria-label="Navegação principal">{items.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}</nav><button ref={trigger} className="menu-trigger" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setOpenPath(isOpen ? null : pathname)}>{isOpen ? 'Fechar ×' : 'Menu +'}</button></div>{isOpen && <nav id="mobile-navigation" ref={panel} className="mobile-nav" aria-label="Navegação móvel">{items.map(item => <Link key={item.href} href={item.href} onClick={() => { setOpenPath(null); trigger.current?.focus(); }}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav>}</header>;
}
