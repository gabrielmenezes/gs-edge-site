import { Metadata } from 'next';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostView from '@/app/components/BlogPostView';

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.(pt|en)\.md$/, '').replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, 'pt');

  if (!post) {
    return {};
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gsedge.com.br';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Blog GS Edge`,
    description: post.excerpt || `Artigo técnico: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Artigo técnico: ${post.title}`,
      url: postUrl,
      siteName: 'GS Edge',
      locale: 'pt_BR',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Artigo técnico: ${post.title}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, 'pt');

  if (!post) {
    return notFound();
  }

  return <BlogPostView slug={resolvedParams.slug} initialPost={post} />;
}
