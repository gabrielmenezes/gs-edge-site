'use client'
import ServiceCard from "../components/ServiceCard"
import { motion } from "framer-motion"

export default function ServicosPage() {
    return (
        <main className="max-w-6xl mx-auto py-12 px-4 bg-slate-200">
            <motion.div
                className="text-center mb-12 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-medium text-zinc-800">Serviços Técnicos</h1>
                <p className="text-zinc-500 mt-2">
                    Soluções sob medida para pequenas empresas e profissionais autônomos.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <ServiceCard
                        title="Diagnóstico de Rede e Segurança"
                        description="Analisamos sua rede e segurança para identificar vulnerabilidades e melhorar a performance."
                        price="R$ 497"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <ServiceCard
                        title="Site Profissional com Formulário"
                        description="Criação de site com design moderno, domínio personalizado e formulário integrado."
                        price="A partir de R$ 1.200"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <ServiceCard
                        title="Automação com Scripts"
                        description="Automatize tarefas rotineiras com Golang, Bash ou Python: relatórios, backups, integrações."
                        price="A partir de R$ 800"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <ServiceCard
                        title="Implantação de VPN"
                        description="Configure acesso remoto seguro com VPN, ideal para home office ou filiais."
                        price="R$ 600"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    <ServiceCard
                        title="Suporte Técnico Mensal"
                        description="Manutenção e suporte remoto mensal para sua estrutura de TI e rede."
                        price="A partir de R$ 299/mês"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <ServiceCard
                        title="Mentoria Técnica Online"
                        description="Aulas 1:1 sobre redes, Docker, AWS, Golang e muito mais."
                        price="R$ 150/h"
                        link="https://wa.me/5511952508537"
                    />
                </motion.div>
            </div>
            <div className="h-12" />
        </main>
    )
}