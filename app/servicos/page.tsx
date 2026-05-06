'use client';

import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { FaNetworkWired, FaCogs, FaCloud, FaWrench, FaGlobe, FaChalkboardTeacher } from 'react-icons/fa';

export default function ServicosPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-100">Serviços <span className="text-edge-cyan">Técnicos</span></h1>
                    <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Serviços profissionais de tecnologia para pequenas e médias empresas, focados em confiabilidade, segurança e crescimento estruturado.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <ServiceCard
                            icon={<FaNetworkWired />}
                            title="Consultoria em Redes e Conectividade"
                            description="Garantindo redes estáveis e seguras, personalizadas para pequenas e médias empresas."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Consultoria%20em%20Redes%20e%20Conectividade`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <ServiceCard
                            icon={<FaCogs />}
                            title="Integração de Sistemas"
                            description="Conectando softwares e fluxos de trabalho para aumentar a eficiência da sua empresa."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Integra%C3%A7%C3%A3o%20de%20Sistemas`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <ServiceCard
                            icon={<FaCloud />}
                            title="Planejamento de Nuvem e Infraestrutura"
                            description="Projetando ambientes de TI escaláveis e confiáveis para negócios em crescimento."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Planejamento%20de%20Nuvem%20e%20Infraestrutura`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <ServiceCard
                            icon={<FaWrench />}
                            title="Manutenção Preventiva e Monitoramento"
                            description="Evita interrupções e mantém seus sistemas funcionando de forma contínua."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Manuten%C3%A7%C3%A3o%20Preventiva%20e%20Monitoramento`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <ServiceCard
                            icon={<FaGlobe />}
                            title="Suporte à Presença Digital"
                            description="Criando presença online simples e profissional, com sites e integração de e-mail."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Suporte%20%C3%A0%20Presen%C3%A7a%20Digital`} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <ServiceCard
                            icon={<FaChalkboardTeacher />}
                            title="Consultoria de TI para PMEs"
                            description="Orientação e mentoria para otimizar os investimentos em tecnologia."
                            link={`https://wa.me/5511952508537?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Consultoria%20de%20TI%20para%20PMEs`} />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}