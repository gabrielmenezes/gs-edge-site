import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-edge-cyan/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <article className="max-w-3xl mx-auto relative z-10">
        <div className="mb-10 text-center">
          <Link href="/blog" className="inline-block text-edge-cyan hover:text-edge-yellow transition-colors mb-8 font-semibold tracking-wide">
            ← Voltar para o Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="text-slate-400 text-sm font-semibold tracking-wider">
            {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <div className="prose prose-invert prose-lg prose-slate mx-auto prose-a:text-edge-cyan hover:prose-a:text-edge-yellow prose-headings:text-slate-100 prose-strong:text-slate-200 prose-p:leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
