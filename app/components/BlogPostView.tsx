'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import BlogBackLink from '@/app/components/BlogBackLink';
import { useLanguage } from '@/app/components/LanguageContext';
import { BlogPost } from '@/lib/blog';

interface BlogPostViewProps {
  slug: string;
  initialPost: BlogPost;
}

export default function BlogPostView({ slug, initialPost }: BlogPostViewProps) {
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost>(initialPost);

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

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <article className="max-w-3xl mx-auto relative z-10">
        <div className="mb-10 text-center">
          <BlogBackLink />
          <h1 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-edge-cyan font-mono text-sm font-semibold tracking-wider">
            {new Date(post.date).toLocaleDateString(dateFormat, { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <div className="prose prose-invert prose-lg prose-slate mx-auto prose-a:text-edge-cyan hover:prose-a:text-edge-yellow prose-headings:text-slate-100 prose-strong:text-slate-200 prose-p:leading-relaxed prose-iframe:w-full prose-iframe:aspect-video">
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]} 
            remarkPlugins={[remarkGfm]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
