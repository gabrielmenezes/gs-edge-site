import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogIndex from '../components/BlogIndex';

export const metadata: Metadata = {
  title: 'Blog & Artigos Técnicos | GS Edge',
  description: 'Artigos técnicos sobre engenharia de software, redes de computadores, arquitetura de sistemas e segurança.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog & Artigos Técnicos | GS Edge',
    description: 'Artigos técnicos sobre engenharia de software, redes de computadores, arquitetura de sistemas e segurança.',
    url: 'https://gsedge.com.br/blog',
    siteName: 'GS Edge',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const initialPosts = getAllPosts('pt');

  return <BlogIndex initialPosts={initialPosts} />;
}

