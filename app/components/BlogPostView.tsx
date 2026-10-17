'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost, BlogPostSummary } from '@/lib/blog';
import { formatPostDate } from '@/lib/post-format';
import SocialShare from './SocialShare';
import ReadingProgressBar from './ReadingProgressBar';
import ReadingTheme, { useReadingTheme } from './ReadingTheme';

interface BlogPostViewProps {
  slug: string;
  initialPost: BlogPost;
  initialRelatedPosts?: BlogPostSummary[];
}

export default function BlogPostView({ slug, initialPost: post, initialRelatedPosts = [] }: BlogPostViewProps) {
  const articleRef = useRef<HTMLElement>(null);
  // The page header already presents the title and cover.
  const content = post.content.replace(/^\s*#{1,2}\s+([^\n]+)\n/, (heading, title: string) => title.trim() === post.title.trim() ? '' : heading);
  const { isLight, toggleTheme } = useReadingTheme();

  return (
    <main id="main-content" className={`editorial-page ${isLight ? 'blog-light' : ''}`}>
      <ReadingProgressBar targetRef={articleRef} />
      <div className="personal-main editorial-post">
        <div className="editorial-toolbar"><Link href="/blog" className="text-link">← Todos os artigos</Link><ReadingTheme isLight={isLight} onToggle={toggleTheme} /></div>
        <article ref={articleRef}>
          <header className="editorial-post-header">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            {post.excerpt && <p className="editorial-deck">{post.excerpt}</p>}
            <div className="editorial-byline">
              <div className="editorial-author">
                {post.author === 'Gabriel Soares' ? <Image src="/gabriel-soares.webp" alt="" width={44} height={44} className="editorial-avatar" /> : <span className="editorial-author-initial">{post.author.charAt(0)}</span>}
                <div><span>{post.author}</span><span className="editorial-author-note">{post.authorRole || 'Autor'}</span></div>
              </div>
              <div className="editorial-date"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span>{post.readTime}</span></div>
            </div>
          </header>
          {post.image && <div className="editorial-cover"><Image src={post.image} alt={post.title} fill priority sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 96px), 1160px" /></div>}
          <div className="editorial-reading-column">
            <div className="editorial-prose prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                img: ({ src, alt }) => {
                  if (typeof src !== 'string' || !src || src === post.image) return null;
                  return <span className="editorial-inline-image"><span><Image src={src} alt={alt || ''} fill sizes="(max-width: 768px) calc(100vw - 40px), 720px" /></span>{alt && <span className="editorial-caption">{alt}</span>}</span>;
                },
                table: ({ children }) => <div className="editorial-table-scroll" role="region" aria-label="Tabela do artigo" tabIndex={0}><table>{children}</table></div>,
              }}>{content}</ReactMarkdown>
            </div>
            <SocialShare title={post.title} slug={slug} />
          </div>
        </article>
        {initialRelatedPosts.length > 0 && <section className="editorial-related">
          <div className="section-heading"><div><p className="eyebrow">MAIS IDEIAS</p><h2>Continue a leitura.</h2></div><Link href="/blog" className="text-link">Todos os artigos ↗</Link></div>
          <div className="article-list">{initialRelatedPosts.map((related, index) => <Link key={related.slug} href={`/blog/${related.slug}`} className="article-row"><span className="article-number">0{index + 1}</span><div><span className="article-category">{related.category}</span><h3>{related.title}</h3></div><span className="article-time">{related.readTime}</span><span className="article-arrow" aria-hidden="true">↗</span></Link>)}</div>
        </section>}
      </div>
    </main>
  );
}
