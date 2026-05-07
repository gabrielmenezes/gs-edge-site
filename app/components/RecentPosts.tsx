'use client';

import Link from "next/link";
import { useLanguage } from "./LanguageContext";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function RecentPosts({ posts }: { posts: Post[] }) {
  const { t } = useLanguage();

  return (
    <section id="recent-posts" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
              {t('recent_posts_title').split(' ')[0]} <span className="text-edge-cyan">{t('recent_posts_title').split(' ')[1]}</span>
            </h2>
            <p className="text-slate-400">{t('recent_posts_subtitle')}</p>
          </div>
          <Link href="/blog" className="text-edge-yellow hover:text-yellow-400 transition-colors font-semibold flex items-center gap-2">
            {t('view_all')} <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0 ? (
            <p className="text-slate-400 col-span-full">{t('no_posts')}</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="bg-edge-darker/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-edge-cyan/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] flex flex-col group">
                <span className="text-edge-cyan text-xs font-semibold tracking-wider mb-2 block">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-edge-yellow transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-edge-cyan transition-colors mt-auto">
                  {t('read_more')} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
