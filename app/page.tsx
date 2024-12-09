import About from "./components/About";
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

        <section id="contact" className="py-20 px-4 bg-slate-600">
          <h3 className="text-3xl font-bold text-center">Entre em Contato</h3>
          <form className="mt-8 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full mb-4 px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Seu E-mail"
              className="w-full mb-4 px-4 py-2 border rounded"
              required
            />
            <textarea
              placeholder="Sua Mensagem"
              className="w-full mb-4 px-4 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-slate-700 text-white py-2 px-6 rounded hover:bg-slate-800"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-slate-700 text-white py-4 text-center">
        © 2024 GS Edge Consultoria. Todos os direitos reservados.
      </footer>
    </div>
  );
}
