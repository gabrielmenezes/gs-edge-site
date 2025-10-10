import ServiceCard from './ServiceCard';

export default function Services() {
    return (
        <section id="services" className="py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900">
                    Serviços que mantêm sua empresa conectada e funcionando sem falhas
                </h2>
                <p className="text-gray-600 mt-2">
                    Oferecemos soluções em TI para pequenas e médias empresas, garantindo sistemas confiáveis, redes seguras e crescimento contínuo sem interrupções.
                </p>
            </div>

            <div className="grid m-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    title="Consultoria em Redes e Conectividade"
                    description="Garantindo redes estáveis e seguras, personalizadas para pequenas e médias empresas."
                    link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Consultoria%20em%20Redes%20e%20Conectividade"
                />
                <ServiceCard
                    title="Integração de Sistemas"
                    description="Conectando softwares e fluxos de trabalho para aumentar a eficiência da sua empresa."
                    link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Integração%20de%20Sistemas"
                />
                <ServiceCard
                    title="Planejamento de Nuvem e Infraestrutura"
                    description="Projetando ambientes de TI escaláveis e confiáveis para negócios em crescimento."
                    link="https://wa.me/5511952508537?text=Olá!%20Tenho%20interesse%20em%20Planejamento%20de%20Nuvem%20e%20Infraestrutura"
                />
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/servicos"
                    className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded text-sm"
                >
                    Veja nossos serviços
                </a>
            </div>
        </section>
    );
}
