import Link from 'next/link';
import SiteLogo from './SiteLogo';

export default function Footer() {
  return <footer className="personal-footer"><Link href="/" className="brand-link" aria-label="Gabriel Soares, início"><SiteLogo compact /></Link><p>Projetos, tecnologia e ideias em construção.</p><span>© {new Date().getFullYear()} Gabriel Soares</span></footer>;
}
