'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import { BlogPost } from "@/lib/blog";

interface RecentPostsProps {
  initialPosts?: BlogPost[];
}

export default function RecentPosts({ initialPosts }: RecentPostsProps) {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const appleEase = [0.16, 1, 0.3, 1] as const;

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
    <section id="recent-posts" className="py-16 sm:py-24 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-edge-cyan text-xs font-medium tracking-wide uppercase mb-3 sm:mb-4 mx-auto backdrop-blur-md">
            <span>{t('recent_posts_badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            {t('recent_posts_title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('recent_posts_subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {loading && posts.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-500">
              <div className="inline-block animate-spin w-7 h-7 border-2 border-edge-cyan border-t-transparent rounded-full mb-3"></div>
              <p className="text-xs">Carregando artigos...</p>
            </div>
          ) : posts.length === 0 ? (
            <p className="text-slate-400 col-span-full py-8 text-center text-sm">{t('no_posts')}</p>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: appleEase }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-white/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] overflow-hidden cursor-pointer h-full"
                >
                  <div>
                    {post.image && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          priority={index < 2}
                          loading={index < 2 ? 'eager' : 'lazy'}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 600px, 800px"
                        />
                        {post.category && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-xl bg-[#050810]/80 text-edge-cyan border border-white/10 shadow-md">
                              {post.category}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6 sm:p-7">
                      {!post.image && post.category && (
                        <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-edge-cyan/10 text-edge-cyan border border-edge-cyan/20">
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-edge-cyan transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 font-normal">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 py-4 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-edge-cyan to-edge-yellow flex items-center justify-center text-slate-950 font-bold text-[10px]">
                        {post.author ? post.author.charAt(0) : 'G'}
                      </div>
                      <span className="font-medium text-slate-300 text-xs">
                        {post.author || 'Gabriel Soares'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                      <span>
                        {new Date(post.date.includes('T') ? post.date : `${post.date}T12:00:00`).toLocaleDateString(dateFormat, {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-medium text-edge-cyan">
                        <FaClock className="text-[9px]" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: appleEase }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 active:scale-95 group"
          >
            <span>{t('view_all')}</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform text-edge-cyan" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


