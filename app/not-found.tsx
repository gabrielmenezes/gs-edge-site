import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="personal-main" style={{ paddingBlock: 100, minHeight: '65vh' }}>
      <p className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</p>
      <h1 className="mt-5 text-4xl font-medium tracking-tight text-white">Esse caminho ficou para trás.</h1>
      <p className="my-6 max-w-lg leading-relaxed text-slate-400">O site agora é o espaço pessoal de Gabriel Soares. Conheça os projetos ou volte para o início.</p>
      <div className="flex flex-wrap items-center gap-6">
        <Link href="/projetos" className="button-primary">Explorar projetos ↗</Link>
        <Link href="/" className="text-link">Voltar ao início →</Link>
      </div>
    </main>
  );
}
