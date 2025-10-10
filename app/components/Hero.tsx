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
                        Sistemas e redes que nunca falham, mesmo nos horários mais críticos
                    </h1>
                    <p className="text-lg py-4">
                        GS Edge garante que suas conexões e sistemas funcionem sem falhas, permitindo que sua empresa continue crescendo sem interrupções.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 py-4">
                        <a
                            href="https://wa.me/5511952508537"
                            className="bg-yellow-500 text-white text-center px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
                        >
                            Agende uma consultoria gratuita
                        </a>
                        <a
                            href="/servicos"
                            className="bg-white text-yellow-500 text-center px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-200 transition duration-300"
                        >
                            Veja nossos serviços
                        </a>
                    </div>
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
