import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
    const whatsappMessage = encodeURIComponent(
        "Olá, estou visitando o site da GS Edge Consultoria e gostaria de mais informações sobre os seus serviços!"
    );

    return (
        <a
            href={`https://wa.me/5511952508537?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
            aria-label="WhatsApp"
        >
            <FaWhatsapp size={24} />
        </a>
    );
}
