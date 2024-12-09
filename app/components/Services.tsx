
import Image from 'next/image'

import infra from '@/app/assets/images/infra.jpg'
import design from '@/app/assets/images/design.jpg'
import sdwan from '@/app/assets/images/sdwan.webp'

export default function Services() {
    return (
        <section id="services" className="bg-slate-700 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
                <p className="text-lg mb-12">
                    Oferecemos uma gama de soluções personalizadas para ajudar sua empresa a crescer e melhorar sua infraestrutura tecnológica.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Serviço 1 */}
                    <div className="bg-slate-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Image src={infra} alt="Redes" className="object-cover rounded-lg mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">Redes e Infraestrutura</h3>
                        <p className="text-lg mb-4 text-justify px-4">
                            Implementamos redes robustas e seguras, garantindo conectividade confiável e desempenho superior para sua empresa.
                        </p>
                        <a href="#contact" className="bg-slate-900 px-4 py-2 rounded hover:bg-slate-950">Saiba mais</a>
                    </div>

                    {/* Serviço 2 */}
                    <div className="bg-slate-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Image src={sdwan} alt="SD-WAN" className="object-cover rounded-lg mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">SD-WAN</h3>
                        <p className="text-lg mb-4 text-justify px-4">
                            Soluções SD-WAN para otimizar a conectividade entre filiais, reduzindo custos e melhorando a performance de rede.
                        </p>
                        <a href="#contact" className="bg-slate-900 px-4 py-2 rounded hover:bg-slate-950">Saiba mais</a>
                    </div>

                    {/* Serviço 3 */}
                    <div className="bg-slate-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <Image src={design} alt="Implementacao de Sistemas" className="object-cover rounded-lg mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold mb-4">Implementação de Sistemas</h3>
                        <p className="text-lg mb-4 text-justify px-4">
                            Realizamos a implementação de sistemas personalizados para integrar seus processos e melhorar a eficiência operacional.
                        </p>
                        <a href="#contact" className="bg-slate-900 px-4 py-2 rounded hover:bg-slate-950">Saiba mais</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
