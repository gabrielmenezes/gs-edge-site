'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

    const whatsappMessage = encodeURIComponent(
        "Olá, estou visitando o site da GS Edge Consultoria e gostaria de mais informações sobre os seus serviços!"
    )
    return (
        <section id="contact" className="relative py-24 bg-edge-dark overflow-hidden border-t border-white/5">
            {/* Efeitos de fundo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-edge-yellow/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-100">
                        Pronto para <span className="text-edge-yellow">evoluir</span> sua TI?
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        Estamos prontos para ajudar sua empresa a alcançar novos patamares de segurança e eficiência. Entre em contato e agende sua consultoria gratuita com nossos especialistas.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                >
                    {/* Botão de WhatsApp */}
                    <a
                        href={`https://wa.me/5511932187544?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#20bd5a] hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full sm:w-auto"
                    >
                        <FaWhatsapp size={24} className="group-hover:animate-bounce" />
                        <span>Falar no WhatsApp</span>
                    </a>

                    {/* Botão de Email */}
                    <a
                        href="mailto:contato@gsedge.com.br"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-edge-darker border border-slate-700 text-slate-300 rounded-xl font-bold text-lg transition-all duration-300 hover:border-edge-cyan hover:text-edge-cyan hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] w-full sm:w-auto"
                    >
                        <FaEnvelope size={22} className="group-hover:rotate-12 transition-transform" />
                        <span>Enviar Email</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
