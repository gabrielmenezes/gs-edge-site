import Link from 'next/link';
import JsonLd from './components/JsonLd';
import { pageMetadata, personSchema } from '@/lib/seo';
import { absoluteUrl, siteDescription } from '@/lib/site';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { getAllPosts } from '@/lib/blog';

export const metadata = pageMetadata({ title: 'Gabriel Soares | Tecnologia & Projetos', description: siteDescription, path: '/' });

export default function Home() {
  const posts = getAllPosts('pt').slice(0, 3);

  return (
    <main id="main-content" className="personal-main">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': absoluteUrl('/#profile'), url: absoluteUrl(), name: 'Gabriel Soares — Tecnologia e projetos', mainEntity: { '@id': personSchema['@id'] }, inLanguage: 'pt-BR' }} />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <section className="personal-section writing-section">
        <div className="section-heading">
          <div><p className="eyebrow">ANOTAÇÕES & PERSPECTIVAS</p><h2>Ideias que compartilho.</h2></div>
          <Link className="text-link" href="/blog">Todos os artigos <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="article-list">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="article-row">
              <span className="article-number">0{index + 1}</span>
              <div><span className="article-category">{post.category}</span><h3>{post.title}</h3></div>
              <span className="article-time">{post.readTime}</span>
              <span className="article-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
