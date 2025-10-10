'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            const sections = ['about', 'services', 'contact'];
            let current = '';
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.getBoundingClientRect().top;
                    if (top <= 80 && top >= -element.offsetHeight + 80) {
                        current = section;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className={`bg-slate-800 text-white py-4 w-full top-0 left-0 z-50 transition-shadow duration-300 ${isSticky ? 'fixed shadow-md' : 'relative'}`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link href="/" passHref>
                    <Image src={logo} width={600} height={600} className="rounded w-14 cursor-pointer" alt="Logo GS Edge Consultoria" />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none absolute top-8 right-8 transition-transform duration-300"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>

                {/* Menu */}
                <nav>
                    <ul
                        className={`
                            fixed top-20 left-0 w-full bg-slate-700 bg-opacity-95 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-50
                            transform transition-all duration-300 ease-in-out origin-top
                            ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
                            md:static md:flex-row md:bg-transparent md:bg-opacity-100 md:backdrop-blur-0 md:scale-100 md:opacity-100 md:pointer-events-auto md:py-0 md:gap-4 md:w-auto
                            md:text-lg
                        `}
                        onClick={() => setIsOpen(false)}
                    >
                        <li className="py-2 md:py-0">
                            <Link
                                href="/#about"
                                className={`hover:no-underline focus:no-underline block md:inline px-2 rounded transition ring-offset-2 ring-offset-slate-800 focus:ring-2 focus:ring-white ${activeSection === 'about' ? 'underline decoration-white underline-offset-4' : ''
                                    }`}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link
                                href="/#services"
                                className={`hover:no-underline focus:no-underline block md:inline px-2 rounded transition ring-offset-2 ring-offset-slate-800 focus:ring-2 focus:ring-white ${activeSection === 'services' ? 'underline decoration-white underline-offset-4' : ''
                                    }`}
                            >
                                Serviços
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link
                                href="/#contact"
                                className={`hover:no-underline focus:no-underline block md:inline px-2 rounded transition ring-offset-2 ring-offset-slate-800 focus:ring-2 focus:ring-white ${activeSection === 'contact' ? 'underline decoration-white underline-offset-4' : ''
                                    }`}
                            >
                                Contato
                            </Link>
                        </li>
                        {/* <li className="py-2 md:py-0">
                            <Link href="/blog" className="hover:no-underline focus:no-underline block md:inline px-2 rounded transition ring-offset-2 ring-offset-slate-800 focus:ring-2 focus:ring-white">
                                Blog
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}