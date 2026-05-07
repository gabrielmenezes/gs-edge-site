'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageContext';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogIndex({ posts }: { posts: Post[] }) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100">
            {t('nav_blog').split(' ')[0]} <span className="text-edge-yellow">{t('nav_blog').split(' ')[1] || ''}</span>
          </h1>
          <p className="text-lg text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('recent_posts_subtitle')}
          </p>
        </div>

        <div className="grid gap-8">
          {posts.length === 0 ? (
            <div className="text-center text-slate-400 py-10">
              {t('no_posts')}
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group bg-edge-darker/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-edge-cyan/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-edge-cyan to-edge-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="pl-4">
                  <span className="text-edge-cyan text-sm font-semibold tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-100 mt-2 mb-3 group-hover:text-edge-yellow transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-slate-200 font-semibold hover:text-edge-cyan transition-colors">
                    {t('read_more')} <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
