import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="hero" className="bg-gray-100 py-20 text-center text-slate-600">
          <h2 className="text-4xl font-bold">Levando sua tecnologia ao próximo nível</h2>
          <p className="mt-4 text-lg">Especialistas em redes, SDWAN e soluções empresariais.</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-slate-600 text-white py-2 px-6 rounded hover:bg-slate-700"
          >
            Entre em Contato
          </a>
        </section>

        <section id="about" className="py-20 px-4 bg-slate-700">
          <h3 className="text-3xl font-bold text-center">Sobre Nós</h3>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            A GS Edge Consultoria oferece soluções inovadoras em tecnologia, com foco em redes e infraestrutura digital.
          </p>
        </section>

        <section id="services" className="bg-gray-100 py-20 px-4 text-slate-600">
          <h3 className="text-3xl font-bold text-center">Nossos Serviços</h3>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <li className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold">Consultoria em Redes</h4>
              <p className="mt-2 text-gray-600">Soluções personalizadas para sua infraestrutura.</p>
            </li>
            <li className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold">Soluções SDWAN</h4>
              <p className="mt-2 text-gray-600">Conectividade otimizada para sua empresa.</p>
            </li>
            <li className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-semibold">Implementação de Sistemas</h4>
              <p className="mt-2 text-gray-600">Integrações robustas e escaláveis.</p>
            </li>
          </ul>
        </section>

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
