export default function About() {
    return (
        <section id="about" className="bg-slate-100 text-gray-800 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Sobre a GS Edge Consultoria</h2>
                <p className="text-lg mb-8 text-justify px-4 place-self-center">
                    Na GS Edge Consultoria, ajudamos pequenas e médias empresas a manter seus sistemas confiáveis e seus negócios funcionando sem interrupções.
                    Oferecemos soluções simples e eficazes para garantir a continuidade e o crescimento do seu negócio.
                </p>
                <div className="flex flex-col items-center justify-center gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Nossa Missão</h3>
                        <p className="text-lg text-justify px-4 place-self-center">
                            Fornecer soluções tecnológicas claras e confiáveis que ajudam empresas a crescer e operar com segurança e eficiência.
                        </p>
                    </div>
                    <div className="px-4 space-y-8">
                        <h3 className="text-2xl font-semibold mb-4">Nossos Valores</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-justify">
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Sistemas Confiáveis</h4>
                                <p className="text-lg">Garantimos que suas soluções funcionem sempre que você precisar.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Continuidade do Negócio</h4>
                                <p className="text-lg">Ajudamos a manter seu negócio ativo, mesmo diante de desafios tecnológicos.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Resultados Claros</h4>
                                <p className="text-lg">Focamos em entregar soluções que trazem benefícios reais e mensuráveis.</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                                <h4 className="text-xl font-semibold mb-2 text-center">Atendimento Simples</h4>
                                <p className="text-lg">Oferecemos suporte direto e fácil para que você se sinta sempre amparado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
