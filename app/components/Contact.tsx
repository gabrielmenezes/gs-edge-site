import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./FormContato";

export default function Contact() {

    const whatsappMessage = encodeURIComponent(
        "Olá, estou visitando o site da GS Edge Consultoria e gostaria de mais informações sobre os seus serviços!"
    )
    return (
        <section id="contact" className="bg-slate-600 py-16">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-lg mb-8">
                    Estamos prontos para ajudar sua empresa a alcançar novos patamares. Entre em contato com a GS Edge Consultoria!
                </p>
                <div className="flex justify-center md:flex-row gap-4">
                    {/* Botão de Email */}
                    <a
                        href="mailto:contato@gsedge.com.br"
                        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                    >
                        <FaEnvelope size={20} />
                    </a>
                    {/* Botão de WhatsApp */}
                    <a
                        href={`https://wa.me/5511932187544?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all"
                    >
                        <FaWhatsapp size={20} />
                    </a>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
