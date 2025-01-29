'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/images/logo.png';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-slate-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Image src={logo} width={600} height={600} className="rounded w-14" alt="Logo GS Edge Consultoria" />

                {/* Ícone do Menu Sanduíche (para telas pequenas) */}
                <button
                    className="md:hidden text-white focus:outline-none absolute top-8 right-8 transition"
                    onClick={toggleMenu}
                >
                    <svg
                        className={`w-6 h-6 transform transition ${isOpen ? "rotate-90" : "rotate-0"}`}
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
                        className={
                            `${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"} 
                            flex flex-col items-center gap-4 absolute top-20 left-0 w-full bg-slate-600 text-center transition-all duration-300 ease-in-out
                            md:flex md:flex-row md:w-auto md:text-left md:static md:opacity-100 md:bg-transparent md:text-lg`}
                        onClick={() => setIsOpen(false)}
                    >
                        <li className="py-2 md:py-0">
                            <Link href="/#about" className="hover:no-underline block md:inline">
                                Sobre
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link href="/#services" className="hover:no-underline  transition block md:inline">
                                Serviços
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link href="/#contact" className="Hover:no-underline  transition block md:inline">
                                Contato
                            </Link>
                        </li>
                        <li className="py-2 md:py-0">
                            <Link href="/blog" className="Hover:no-underline  transition block md:inline">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}