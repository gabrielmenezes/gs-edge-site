import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <FloatingWhatsApp />
      </main>

      <footer className="bg-slate-700 text-white py-4 text-center">
        © 2024 GS Edge Consultoria. Todos os direitos reservados.
      </footer>
    </div>
  );
}
