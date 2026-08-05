'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { BlogPost, getAllPosts } from "@/lib/blog";

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
            setPosts(data.slice(0, 3));
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
    <section id="recent-posts" className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-2">
              {t('recent_posts_title')}
            </h2>
            <p className="text-slate-400 text-base md:text-lg">{t('recent_posts_subtitle')}</p>
          </div>
          <Link href="/blog" className="text-edge-cyan hover:text-edge-yellow transition-colors font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            {t('view_all')} <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading && posts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-500">
              <span className="inline-block animate-pulse">Carregando artigos...</span>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-slate-400 col-span-full">{t('no_posts')}</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="bg-edge-darker/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] flex flex-col group">
                <span className="text-edge-cyan text-xs font-mono font-semibold tracking-wider mb-3 block">
                  {new Date(post.date).toLocaleDateString(dateFormat, { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-edge-yellow transition-colors line-clamp-2 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-slate-300 hover:text-edge-cyan transition-colors mt-auto pt-4 border-t border-white/5">
                  {t('read_more')} <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

