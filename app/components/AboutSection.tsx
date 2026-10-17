import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="personal-section about-grid">
      <div>
        <p className="eyebrow">POR TRÁS DOS PROJETOS</p>
        <h2>Olá, sou o Gabriel<span className="accent-dot">.</span></h2>
        <div className="about-portrait">
          <Image
            src="/gabriel-soares.webp"
            alt="Gabriel Soares ao ar livre"
            width={1000}
            height={1333}
            sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 900px) 38vw, 400px"
            className="about-portrait-image"
          />
        </div>
      </div>
      <div className="about-copy">
        <p>Gosto de explorar como a tecnologia pode transformar ideias em algo que as pessoas possam usar, entender e experimentar.</p>
        <p>No GSMoney, esse olhar se volta para a organização financeira. No Game de Datacenters, para o universo da infraestrutura e das decisões que mantêm sistemas funcionando.</p>
        <p>Por aqui, reúno esses projetos e compartilho reflexões sobre software, redes, arquitetura de sistemas e os aprendizados pelo caminho.</p>
        <div className="topic-tags"><span>Software</span><span>Infraestrutura</span><span>Produtos digitais</span></div>
      </div>
    </section>
  );
}
