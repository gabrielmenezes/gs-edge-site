import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs, getRelatedPosts, summarizePost } from '@/lib/blog';
import { articleSchema, breadcrumbSchema, pageMetadata } from '@/lib/seo';
import BlogPostView from '@/app/components/BlogPostView';
import JsonLd from '@/app/components/JsonLd';

type BlogPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getPostSlugs().map(slug => ({ slug })); }

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'pt');
  if (!post) notFound();
  return pageMetadata({
    title: `${post.title} | Gabriel Soares`,
    description: post.excerpt || `Artigo de ${post.author}: ${post.title}`,
    path: `/blog/${slug}`,
    image: post.image,
    imageAlt: post.title,
    article: { author: post.author, publishedTime: post.date || undefined },
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'pt');
  if (!post) notFound();
  const related = getRelatedPosts(slug, post.category, 'pt', 2).map(summarizePost);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${slug}` }])} />
      <JsonLd data={articleSchema(post)} />
      <BlogPostView slug={slug} initialPost={post} initialRelatedPosts={related} />
    </>
  );
}
