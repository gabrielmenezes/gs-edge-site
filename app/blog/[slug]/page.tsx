import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostView from '@/app/components/BlogPostView';

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.(pt|en)\.md$/, '').replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, 'pt');

  if (!post) {
    return notFound();
  }

  return <BlogPostView slug={resolvedParams.slug} initialPost={post} />;
}

