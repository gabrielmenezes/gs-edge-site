'use client';

import { motion } from 'framer-motion';
import { FaNetworkWired, FaCogs, FaCloud } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

export default function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
                        Serviços que mantêm sua empresa <span className="text-edge-cyan">conectada</span> e funcionando
                    </h2>
                    <p className="text-lg text-slate-400">
                        Oferecemos soluções em TI para pequenas e médias empresas, garantindo sistemas confiáveis, redes seguras e crescimento contínuo sem interrupções.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <ServiceCard
                            icon={<FaNetworkWired />}
                            title="Consultoria em Redes e Conectividade"
                            description="Garantindo redes estáveis e seguras, personalizadas para pequenas e médias empresas."
                            link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Consultoria%20em%20Redes%20e%20Conectividade"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ServiceCard
                            icon={<FaCogs />}
                            title="Integração de Sistemas"
                            description="Conectando softwares e fluxos de trabalho para aumentar a eficiência da sua empresa."
                            link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Integração%20de%20Sistemas"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <ServiceCard
                            icon={<FaCloud />}
                            title="Planejamento de Nuvem e Infraestrutura"
                            description="Projetando ambientes de TI escaláveis e confiáveis para negócios em crescimento."
                            link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Planejamento%20de%20Nuvem%20e%20Infraestrutura"
                        />
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/servicos"
                        className="inline-flex items-center justify-center border-2 border-edge-cyan text-edge-cyan hover:bg-edge-cyan hover:text-edge-darker px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                    >
                        Ver todos os serviços
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
