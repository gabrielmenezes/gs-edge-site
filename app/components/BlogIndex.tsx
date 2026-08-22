'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaSun, FaMoon, FaTag } from 'react-icons/fa';
import { useLanguage } from '../components/LanguageContext';
import { BlogPost } from '@/lib/blog';

interface BlogIndexProps {
  initialPosts?: BlogPost[];
}

export default function BlogIndex({ initialPosts }: BlogIndexProps) {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Load theme preference on mount safely
  useEffect(() => {
    const savedTheme = localStorage.getItem('blog-theme') as 'dark' | 'light' | null;
    if (savedTheme && savedTheme !== theme) {
      // Defer state update to next tick to avoid cascading render lint
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
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts?lang=${language}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setPosts(data);
          }
        }
      } catch (err) {
        console.error('Failed to fetch posts for BlogIndex', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, [language]);

  // Extract unique categories from current posts
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, [posts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return posts;
    return posts.filter(
      (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [posts, selectedCategory]);

  const dateFormat = language === 'pt' ? 'pt-BR' : 'en-US';
  const isLight = theme === 'light';

  return (
    <main
      className={`min-h-screen pt-32 pb-24 px-4 transition-colors duration-500 relative overflow-hidden ${
        isLight ? 'bg-slate-50 text-slate-900' : 'bg-edge-darker text-slate-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] -z-10 pointer-events-none transition-opacity duration-500 ${
          isLight ? 'bg-cyan-200/40 opacity-60' : 'bg-edge-cyan/10 opacity-100'
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[160px] -z-10 pointer-events-none transition-opacity duration-500 ${
          isLight ? 'bg-amber-100/50 opacity-50' : 'bg-edge-yellow/5 opacity-100'
        }`}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b pb-8 transition-colors duration-300 border-slate-200 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 transition-colors duration-300 bg-edge-cyan/10 text-edge-cyan border border-edge-cyan/20">
              <FaTag className="text-[10px]" />
              <span>{t('nav_blog')}</span>
            </div>
            <h1
              className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-3 transition-colors ${
                isLight ? 'text-slate-900' : 'text-slate-100'
              }`}
            >
              {t('recent_posts_title')}
            </h1>
            <p
              className={`text-base md:text-lg max-w-2xl leading-relaxed transition-colors ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              {t('recent_posts_subtitle')}
            </p>
          </div>

          {/* Theme Toggle Button */}
          <div className="flex items-center gap-3">
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
        </div>

        {/* Categories Bar (Ensaio Style Horizontal Scroll Navigation) */}
        <div className="mb-12 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-2.5 min-w-max pb-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? isLight
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-edge-cyan text-edge-darker font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : isLight
                  ? 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t('all_categories')}
            </button>

            {categories.map((cat) => {
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? isLight
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-edge-cyan text-edge-darker font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                      : isLight
                      ? 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Posts Grid (2 Columns on Desktop) */}
        {loading && posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-edge-cyan border-t-transparent rounded-full mb-4"></div>
            <p className={isLight ? 'text-slate-500' : 'text-slate-400'}>Carregando artigos...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div
            className={`text-center py-20 rounded-2xl border ${
              isLight ? 'bg-white border-slate-200 text-slate-500' : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            <p className="text-lg font-medium">{t('no_posts')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                  isLight
                    ? 'bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300'
                    : 'bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-edge-cyan/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                }`}
              >
                <div>
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-800">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      {/* Category Floating Pill */}
                      {post.category && (
                        <div className="absolute top-4 left-4 z-10">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${
                              isLight
                                ? 'bg-white/90 text-slate-900 shadow-sm'
                                : 'bg-edge-darker/90 text-edge-cyan border border-edge-cyan/30 shadow-lg'
                            }`}
                          >
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    {!post.image && post.category && (
                      <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-edge-cyan/10 text-edge-cyan border border-edge-cyan/30">
                        {post.category}
                      </span>
                    )}
                    <h2
                      className={`text-xl md:text-2xl font-bold mb-3 line-clamp-2 leading-tight transition-colors ${
                        isLight
                          ? 'text-slate-900 group-hover:text-cyan-700'
                          : 'text-slate-100 group-hover:text-edge-cyan'
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p
                      className={`text-sm md:text-base leading-relaxed line-clamp-3 mb-6 transition-colors ${
                        isLight ? 'text-slate-600' : 'text-slate-400'
                      }`}
                    >
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Author & Metadata (Ensaio Style) */}
                <div
                  className={`px-6 md:px-8 py-4 border-t flex items-center justify-between text-xs transition-colors ${
                    isLight ? 'bg-slate-50/70 border-slate-100 text-slate-500' : 'bg-black/20 border-white/5 text-slate-400'
                  }`}
                >
                  {/* Author */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-edge-cyan to-edge-yellow flex items-center justify-center text-slate-950 font-black text-xs shadow-sm">
                      {post.author ? post.author.charAt(0) : 'G'}
                    </div>
                    <div>
                      <span className={`font-semibold block ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                        {post.author || 'Gabriel Soares'}
                      </span>
                    </div>
                  </div>

                  {/* Date & Reading Time */}
                  <div className="flex items-center gap-2">
                    <span>
                      {new Date(post.date).toLocaleDateString(dateFormat, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <FaClock className="text-[10px] opacity-70" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


