'use client';

import { useState } from 'react';
import type { BlogPostSummary } from '@/lib/blog';
import ArticleCard from './ArticleCard';
import ReadingTheme, { useReadingTheme } from './ReadingTheme';

export default function BlogIndex({ initialPosts }: { initialPosts: BlogPostSummary[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isLight, toggleTheme } = useReadingTheme();
  const categories = Array.from(new Set(initialPosts.map(post => post.category)));
  const posts = selectedCategory === 'all' ? initialPosts : initialPosts.filter(post => post.category === selectedCategory);

  return (
    <main id="main-content" className={`editorial-page ${isLight ? 'blog-light' : ''}`}>
      <div className="personal-main blog-index">
        <header className="editorial-index-header">
          <div><p className="eyebrow">BLOG / ANOTAÇÕES & PERSPECTIVAS</p><h1>Ideias que<br /><span>compartilho.</span></h1></div>
          <div className="editorial-index-intro"><p>Software, infraestrutura e tecnologia. Um espaço para compartilhar o que aprendo, explorar perguntas e conectar ideias.</p><ReadingTheme isLight={isLight} onToggle={toggleTheme} /></div>
        </header>
        <div className="editorial-filters" role="group" aria-label="Filtrar artigos por categoria">
          <button aria-pressed={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')}>Todos os artigos <span>{initialPosts.length.toString().padStart(2, '0')}</span></button>
          {categories.map(category => <button key={category} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>{category}</button>)}
        </div>
        <p className="sr-only" role="status">{posts.length} {posts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}</p>
        {posts.length ? (
          <div className="editorial-grid">{posts.map((post, index) => <ArticleCard key={post.slug} post={post} featured={index === 0} />)}</div>
        ) : <p className="editorial-empty">Nenhum artigo nesta categoria.</p>}
      </div>
    </main>
  );
}
