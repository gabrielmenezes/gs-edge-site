'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { FaArrowRight } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['services', 'about', 'contact'];
            let current = '';
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = section;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navItems = [
        { href: '/#services', label: t('nav_services'), active: activeSection === 'services' },
        { href: '/products', label: t('nav_products'), active: pathname.includes('/products') || activeSection === 'products' },
        { href: '/blog', label: t('nav_blog'), active: pathname.includes('/blog') },
        { href: '/#about', label: t('nav_about'), active: activeSection === 'about' },
        { href: '/#contact', label: t('nav_contact'), active: activeSection === 'contact' },
    ];

    const appleEase = [0.16, 1, 0.3, 1] as const;

    const menuContainerVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.25,
                ease: appleEase,
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: appleEase,
                staggerChildren: 0.06,
                delayChildren: 0.05,
            },
        },
    };

    const menuItemVariants = {
        closed: {
            opacity: 0,
            y: -14,
            transition: { duration: 0.2 },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: appleEase },
        },
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 h-12 md:h-14 bg-black/60 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-300">
                <div className="w-full max-w-5xl 2xl:max-w-6xl h-full mx-auto flex items-center justify-between px-4 sm:px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <Image
                            src={logo}
                            width={240}
                            height={80}
                            className="h-7 md:h-8 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                            alt="Logo GS Edge"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-7 text-[12px] font-normal tracking-tight text-white/70">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={item.href}
                                        className={`transition-colors duration-200 hover:text-white ${item.active ? 'text-edge-cyan font-semibold' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Language Switcher Pill */}
                        <div className="flex items-center pl-2 border-l border-white/10">
                            <button
                                onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                                className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wider bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-200 transition-all duration-200 active:scale-95"
                                aria-label="Alternar idioma"
                            >
                                <span className={language === 'pt' ? 'text-edge-cyan' : 'text-slate-400'}>PT</span>
                                <span className="text-slate-600">/</span>
                                <span className={language === 'en' ? 'text-edge-cyan' : 'text-slate-400'}>EN</span>
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu Trigger (Apple 2-bar hamburger) */}
                    <div className="flex items-center gap-3 md:hidden z-50">
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider bg-white/[0.06] border border-white/10 text-slate-200 active:scale-95"
                        >
                            {language === 'pt' ? 'EN' : 'PT'}
                        </button>

                        <button
                            onClick={toggleMenu}
                            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
                            aria-label="Menu"
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`w-4 h-[1.5px] bg-white rounded-full transition-transform duration-300 origin-center ${
                                    isOpen ? 'rotate-45 translate-y-[3.25px]' : ''
                                }`}
                            />
                            <span
                                className={`w-4 h-[1.5px] bg-white rounded-full transition-transform duration-300 origin-center ${
                                    isOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Apple Fullscreen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuContainerVariants}
                        className="fixed inset-0 top-12 bg-black/85 backdrop-blur-3xl md:hidden z-40 flex flex-col justify-between px-6 pt-6 pb-10 overflow-y-auto"
                    >
                        <motion.nav className="flex flex-col gap-3">
                            {navItems.map((item, index) => (
                                <motion.div key={index} variants={menuItemVariants}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-2xl sm:text-3xl font-semibold tracking-tight py-2 transition-colors active:opacity-70 ${
                                            item.active ? 'text-edge-cyan' : 'text-white/90 hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                    <div className="w-full h-px bg-white/[0.06] mt-2" />
                                </motion.div>
                            ))}
                        </motion.nav>

                        <motion.div variants={menuItemVariants} className="pt-6 flex flex-col gap-4">
                            <a
                                href="https://calendly.com/gsedge/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 text-center rounded-full bg-edge-cyan text-slate-950 font-bold text-base shadow-[0_0_25px_rgba(34,211,238,0.35)] active:scale-95 transition-transform flex items-center justify-center gap-2"
                            >
                                <span>{t('hero_cta_diagnostics')}</span>
                                <FaArrowRight className="text-xs" />
                            </a>

                            <p className="text-center text-xs text-slate-400">
                                {t('hero_cta_phrase')}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}