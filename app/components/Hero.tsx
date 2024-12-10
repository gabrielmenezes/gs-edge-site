'use client';

import Image from 'next/image';
import heroImage from '@/app/assets/images/heroimage.jpg'; // Substitua pelo caminho correto

export default function Hero() {
    return (
        <section className="relative bg-slate-600 text-white">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-8 lg:py-16">
                {/* Texto Hero */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight py-4">
                        Transforme sua empresa <br />
                        com soluções tecnológicas inovadoras
                    </h1>
                    <p className="text-lg py-4">
                        A GS Edge Consultoria oferece serviços personalizados em tecnologia, redes e sistemas para otimizar sua operação.
                    </p>
                    <a
                        href="#services"
                        className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                    >
                        Conheça nossos serviços
                    </a>
                </div>

                {/* Imagem Hero */}
                <div className="lg:w-1/2 mt-8 ml-8 lg:mt-0">
                    <Image
                        src={heroImage}
                        alt="Imagem de tecnologia"
                        className="rounded-lg shadow-lg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}
