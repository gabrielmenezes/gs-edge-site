'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaSyncAlt, FaChartLine, FaHeadset } from 'react-icons/fa';

export default function About() {
    return (
        <section id="about" className="relative py-24 border-t border-white/5 bg-edge-darker overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-edge-cyan/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl font-bold mb-6 text-slate-100">Sobre a <span className="text-edge-cyan">GS Edge</span> Consultoria</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Ajudamos pequenas e médias empresas a manter seus sistemas confiáveis e seus negócios funcionando sem interrupções.
                        Oferecemos soluções simples e eficazes para garantir a continuidade e o crescimento do seu negócio.
                    </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-edge-dark border border-white/5 rounded-2xl p-8 max-w-3xl w-full text-center shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-edge-yellow to-edge-cyan"></div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-100">Nossa Missão</h3>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Fornecer soluções tecnológicas claras e confiáveis que ajudam empresas a crescer e operar com segurança e eficiência.
                        </p>
                    </motion.div>

                    <div className="w-full max-w-5xl">
                        <motion.h3 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-10 text-center text-slate-100"
                        >
                            Nossos Valores
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: 'Sistemas Confiáveis', desc: 'Garantimos que suas soluções funcionem sempre que você precisar.', icon: <FaShieldAlt /> },
                                { title: 'Continuidade do Negócio', desc: 'Ajudamos a manter seu negócio ativo, mesmo diante de desafios.', icon: <FaSyncAlt /> },
                                { title: 'Resultados Claros', desc: 'Focamos em entregar soluções que trazem benefícios reais e mensuráveis.', icon: <FaChartLine /> },
                                { title: 'Atendimento Simples', desc: 'Oferecemos suporte direto e fácil para que você se sinta amparado.', icon: <FaHeadset /> },
                            ].map((val, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-8 bg-edge-darker/50 backdrop-blur-md border border-white/5 rounded-xl hover:border-edge-cyan/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
                                >
                                    <div className="text-3xl text-edge-yellow group-hover:scale-110 transition-transform duration-300">
                                        {val.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-edge-yellow transition-colors">{val.title}</h4>
                                        <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
