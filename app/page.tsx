import About from "./components/About";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
      <FloatingWhatsApp />
    </main>

  );
}
