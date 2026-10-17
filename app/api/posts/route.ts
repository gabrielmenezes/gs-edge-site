import { NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug, summarizePost } from '@/lib/blog';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') || 'pt';
  if (lang !== 'pt' && lang !== 'en') return NextResponse.json({ error: 'Idioma inválido.' }, { status: 400 });
  const slug = searchParams.get('slug');
  if (slug !== null) {
    const post = getPostBySlug(slug, lang);
    return post ? NextResponse.json(post) : NextResponse.json({ error: 'Artigo não encontrado.' }, { status: 404 });
  }
  const posts = getAllPosts(lang, searchParams.get('category') || undefined);
  return NextResponse.json(posts.map(summarizePost));
}
