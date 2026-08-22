'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { FaClock, FaSun, FaMoon, FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import SocialShare from '@/app/components/SocialShare';
import { useLanguage } from '@/app/components/LanguageContext';
import { BlogPost } from '@/lib/blog';

interface BlogPostViewProps {
  slug: string;
  initialPost: BlogPost;
  initialRelatedPosts?: BlogPost[];
}

export default function BlogPostView({ slug, initialPost, initialRelatedPosts }: BlogPostViewProps) {
  const { language, t } = useLanguage();
  const [post, setPost] = useState<BlogPost>(initialPost);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>(initialRelatedPosts || []);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme preference on mount safely
  useEffect(() => {
    const savedTheme = localStorage.getItem('blog-theme') as 'dark' | 'light' | null;
    if (savedTheme && savedTheme !== theme) {
      requestAnimationFrame(() => setTheme(savedTheme));
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('blog-theme', nextTheme);
  };

  useEffect(() => {
    let isMounted = true;
    async function fetchLocalizedPost() {
      try {
        const res = await fetch(`/api/posts?slug=${slug}&lang=${language}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setPost(data);
          }
        }

        const allRes = await fetch(`/api/posts?lang=${language}`);
        if (allRes.ok) {
          const allData: BlogPost[] = await allRes.json();
          if (isMounted) {
            const others = allData.filter((p) => p.slug !== slug);
            setRelatedPosts(others.slice(0, 2));
          }
        }
      } catch (err) {
        console.error('Failed to fetch localized post', err);
      }
    }

    fetchLocalizedPost();
    return () => {
      isMounted = false;
    };
  }, [slug, language]);

  const dateFormat = language === 'pt' ? 'pt-BR' : 'en-US';
  const isLight = theme === 'light';

  return (
    <main
      className={`min-h-screen pt-32 pb-24 px-4 transition-colors duration-500 relative overflow-hidden ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-edge-darker text-slate-100'
      }`}
    >
      {/* Background glow effects */}
      <div
        className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] -z-10 pointer-events-none transition-opacity duration-500 ${
          isLight ? 'bg-cyan-200/40 opacity-60' : 'bg-edge-cyan/10 opacity-100'
        }`}
      ></div>
      <div
        className={`absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[160px] -z-10 pointer-events-none transition-opacity duration-500 ${
          isLight ? 'bg-amber-100/50 opacity-50' : 'bg-edge-yellow/5 opacity-100'
        }`}
      ></div>

      <article className="max-w-3xl mx-auto relative z-10">
        {/* Navigation & Theme Bar */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:-translate-x-1 ${
              isLight ? 'text-slate-600 hover:text-slate-950' : 'text-edge-cyan hover:text-edge-yellow'
            }`}
          >
            <FaArrowLeft className="text-xs" />
            <span>{t('back_to_blog')}</span>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 text-xs font-semibold ${
              isLight
                ? 'bg-white border-slate-200 text-slate-700 shadow-sm hover:bg-slate-100'
                : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {isLight ? (
              <>
                <FaMoon className="text-slate-600" />
                <span>Modo Escuro</span>
              </>
            ) : (
              <>
                <FaSun className="text-edge-yellow" />
                <span>Modo Claro</span>
              </>
            )}
          </button>
        </div>

        {/* Post Header */}
        <header className="mb-10">
          {post.category && (
            <span
              className={`inline-block mb-4 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                isLight
                  ? 'bg-slate-200 text-slate-800'
                  : 'bg-edge-cyan/15 text-edge-cyan border border-edge-cyan/30'
              }`}
            >
              {post.category}
            </span>
          )}

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight transition-colors ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}
          >
            {post.title}
          </h1>

          {post.excerpt && (
            <p
              className={`text-lg md:text-xl leading-relaxed mb-8 transition-colors ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              {post.excerpt}
            </p>
          )}

          {/* Author & Metadata Strip (Ensaio Style) */}
          <div
            className={`flex flex-wrap items-center justify-between gap-4 py-4 border-y text-xs transition-colors ${
              isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-400'
            }`}
          >
            {/* Author info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-edge-cyan to-edge-yellow flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                {post.author ? post.author.charAt(0) : 'G'}
              </div>
              <div>
                <span className={`font-bold text-sm block ${isLight ? 'text-slate-900' : 'text-slate-100'}`}>
                  {post.author || 'Gabriel Soares'}
                </span>
                <span className="text-xs opacity-75">{post.authorRole || 'GS Edge'}</span>
              </div>
            </div>

            {/* Date & Read time */}
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium">
                <FaCalendarAlt className="opacity-70" />
                {new Date(post.date).toLocaleDateString(dateFormat, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-semibold text-edge-cyan">
                <FaClock className="opacity-80" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div
            className={`relative w-full aspect-video rounded-2xl overflow-hidden my-8 border transition-all duration-300 shadow-2xl ${
              isLight
                ? 'border-slate-200 shadow-slate-200/50'
                : 'border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]'
            }`}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}

        {/* Social Share */}
        <SocialShare title={post.title} slug={slug} />

        {/* Markdown Content */}
        <div
          className={`prose prose-lg max-w-none my-10 transition-colors ${
            isLight
              ? 'prose-slate prose-headings:text-slate-900 prose-a:text-cyan-700 hover:prose-a:text-cyan-900 prose-strong:text-slate-900 prose-pre:bg-slate-900 prose-pre:text-slate-100'
              : 'prose-invert prose-slate prose-headings:text-slate-100 prose-a:text-edge-cyan hover:prose-a:text-edge-yellow prose-strong:text-slate-200 prose-pre:bg-slate-950 prose-pre:border prose-pre:border-white/10'
          } prose-p:leading-relaxed prose-p:text-justify prose-headings:tracking-tight prose-iframe:w-full prose-iframe:aspect-video`}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, src, alt }) => {
                if (!src || typeof src !== 'string') return null;
                return (
                  <figure className="my-8">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
                      <Image
                        src={src}
                        alt={alt || ''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    {alt && (
                      <figcaption
                        className={`text-center text-xs mt-2 font-mono ${
                          isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {alt}
                      </figcaption>
                    )}
                  </figure>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Share Section Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10">
          <SocialShare title={post.title} slug={slug} />
        </div>

        {/* Recommended Posts Section (Ensaio Style) */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h2
                className={`text-2xl font-bold tracking-tight ${
                  isLight ? 'text-slate-900' : 'text-slate-100'
                }`}
              >
                {t('related_posts_title')}
              </h2>
              <Link
                href="/blog"
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isLight ? 'text-cyan-700 hover:text-cyan-900' : 'text-edge-cyan hover:text-edge-yellow'
                }`}
              >
                {t('view_all')} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className={`group flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                    isLight
                      ? 'bg-white border-slate-200 shadow-sm hover:shadow-lg'
                      : 'bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-edge-cyan/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]'
                  }`}
                >
                  <div>
                    {rPost.image && (
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-800">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        {rPost.category && (
                          <div className="absolute top-3 left-3 z-10">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                                isLight
                                  ? 'bg-white/90 text-slate-900 shadow-sm'
                                  : 'bg-edge-darker/90 text-edge-cyan border border-edge-cyan/30'
                              }`}
                            >
                              {rPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-5">
                      <h3
                        className={`text-base font-bold mb-2 line-clamp-2 leading-snug transition-colors ${
                          isLight
                            ? 'text-slate-900 group-hover:text-cyan-700'
                            : 'text-slate-100 group-hover:text-edge-cyan'
                        }`}
                      >
                        {rPost.title}
                      </h3>
                      <p
                        className={`text-xs line-clamp-2 leading-relaxed ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {rPost.excerpt}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`px-5 py-3 border-t flex items-center justify-between text-[11px] ${
                      isLight
                        ? 'bg-slate-50/70 border-slate-100 text-slate-500'
                        : 'bg-black/20 border-white/5 text-slate-400'
                    }`}
                  >
                    <span>{rPost.author || 'Gabriel Soares'}</span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[9px] opacity-70" />
                      {rPost.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}


