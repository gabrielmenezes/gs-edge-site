import Link from 'next/link';

export default function Hero() {
  return <section className="personal-hero">
    <div className="hero-intro"><span className="intro-line" /><p className="eyebrow">GABRIEL SOARES / TECNOLOGIA & PROJETOS</p></div>
    <h1>Curiosidade para explorar.<br /><span>Tecnologia para construir.</span></h1>
    <div className="hero-bottom"><p>Sou Gabriel Soares. Este é meu espaço para compartilhar projetos, explorar ideias e escrever sobre tecnologia — das finanças pessoais à infraestrutura de data centers.</p><div className="hero-actions"><Link href="/#projects" className="button-primary">Conheça meus projetos <span aria-hidden="true">↘</span></Link><Link href="/#about" className="text-link">Um pouco sobre mim <span aria-hidden="true">→</span></Link></div></div>
    <div className="hero-footnote"><span>SOFTWARE / INFRAESTRUTURA / EXPERIMENTAÇÃO</span><span>Ideias em construção. Sempre.</span></div>
  </section>;
}
