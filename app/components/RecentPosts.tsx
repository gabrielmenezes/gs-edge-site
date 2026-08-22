'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import { BlogPost } from "@/lib/blog";

interface RecentPostsProps {
  initialPosts?: BlogPost[];
}

export default function RecentPosts({ initialPosts }: RecentPostsProps) {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);

  useEffect(() => {
    let isMounted = true;
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/posts?lang=${language}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setPosts(data.slice(0, 2));
          }
        }
      } catch (err) {
        console.error('Failed to fetch posts', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, [language]);

  const dateFormat = language === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <section id="recent-posts" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-edge-cyan text-xs font-mono font-bold tracking-widest uppercase mb-2 block">
              Knowledge & Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              {t('recent_posts_title')}
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-2">{t('recent_posts_subtitle')}</p>
          </div>
          <Link
            href="/blog"
            className="text-edge-cyan hover:text-edge-yellow transition-colors font-bold flex items-center gap-2 text-sm uppercase tracking-wider group"
          >
            {t('view_all')} <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {loading && posts.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-500">
              <div className="inline-block animate-spin w-8 h-8 border-4 border-edge-cyan border-t-transparent rounded-full mb-4"></div>
              <p>Carregando artigos...</p>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-slate-400 col-span-full py-8 text-center">{t('no_posts')}</p>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
              >
                <div>
                  {post.image && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-800">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 550px"
                      />
                      {post.category && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-edge-darker/90 text-edge-cyan border border-edge-cyan/30 shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    {!post.image && post.category && (
                      <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-edge-cyan/10 text-edge-cyan border border-edge-cyan/30">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 group-hover:text-edge-cyan transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 md:px-8 py-4 border-t border-white/5 bg-black/20 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-edge-cyan to-edge-yellow flex items-center justify-center text-slate-950 font-black text-xs shadow-sm">
                      {post.author ? post.author.charAt(0) : 'G'}
                    </div>
                    <span className="font-semibold text-slate-200">
                      {post.author || 'Gabriel Soares'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>
                      {new Date(post.date).toLocaleDateString(dateFormat, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium text-edge-cyan">
                      <FaClock className="text-[10px] opacity-80" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}


