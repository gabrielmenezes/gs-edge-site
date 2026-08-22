import { NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') || 'pt') as 'pt' | 'en';
  const slug = searchParams.get('slug');
  const category = searchParams.get('category') || undefined;

  if (slug) {
    const post = getPostBySlug(slug, lang);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  }

  const posts = getAllPosts(lang, category);
  return NextResponse.json(posts);
}
