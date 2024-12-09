export default function About() {
    return (
        <section id="about" className="bg-slate-100 text-gray-800 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Sobre a GS Edge Consultoria</h2>
                <p className="text-lg mb-8 text-justify  px-4 place-self-center">
                    Na GS Edge Consultoria, temos o compromisso de transformar a sua empresa com soluções tecnológicas de ponta.
                    Com experiência em redes, SD-WAN e implementação de sistemas, oferecemos consultoria personalizada para otimizar sua infraestrutura tecnológica.
                </p>
                <div className="flex flex-col items-center justify-center gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
                        <p className="text-lg text-justify  px-4 place-self-center">
                            Oferecer soluções inovadoras para otimizar a conectividade e a performance das empresas, garantindo que nossos clientes
                            estejam sempre um passo à frente na transformação digital.
                        </p>
                    </div>
                    <div className="px-4 space-y-8">
                        <h3 className="text-2xl font-semibold mb-4">Nossos Valores</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-justify">
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Inovação Contínua</h4>
                                <p className="text-lg">Estamos sempre em busca de novas tecnologias para oferecer as melhores soluções aos nossos clientes.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Compromisso com Resultados</h4>
                                <p className="text-lg">Nosso foco é garantir que as soluções aplicadas tragam resultados mensuráveis e duradouros.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Excelência no Atendimento</h4>
                                <p className="text-lg">Oferecemos um atendimento ágil e de qualidade, buscando sempre superar as expectativas dos nossos clientes.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Foco no Cliente</h4>
                                <p className="text-lg">Acreditamos que cada cliente é único, e por isso buscamos soluções personalizadas para cada necessidade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
