
import ServiceCard from './ServiceCard';

export default function Services() {
    return (
        <section id="services" className="py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-900">Serviços</h2>
                <p className="text-gray-600 mt-2">Soluções em TI para empresas que querem crescer com segurança e eficiência.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    title="Diagnóstico de Rede"
                    description="Análise técnica completa da sua estrutura de rede e segurança."
                    price="R$ 497"
                    link="https://wa.me/5511952508537"
                />
                <ServiceCard
                    title="Criação de Site"
                    description="Presença digital com site moderno, formulário e domínio próprio."
                    price="A partir de R$ 1.200"
                    link="https://wa.me/5511952508537"
                />
                <ServiceCard
                    title="Suporte Mensal"
                    description="Manutenção contínua da sua rede e sistemas de TI."
                    price="A partir de R$ 299/mês"
                    link="https://wa.me/5511952508537"
                />
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/servicos"
                    className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-sm"
                >
                    Ver todos os serviços
                </a>
            </div>
        </section>
    );
}
