import { getAllPosts, summarizePost } from '@/lib/blog';
import { breadcrumbSchema, pageMetadata, personSchema } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';
import BlogIndex from '../components/BlogIndex';
import JsonLd from '../components/JsonLd';

export const metadata = pageMetadata({
  title: 'Blog de tecnologia, software e infraestrutura | Gabriel Soares',
  description: 'Artigos de Gabriel Soares sobre engenharia de software, redes, arquitetura de sistemas, infraestrutura e segurança da informação.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts('pt').map(summarizePost);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Blog', '@id': absoluteUrl('/blog#blog'), name: 'Blog de Gabriel Soares', url: absoluteUrl('/blog'), inLanguage: 'pt-BR', author: { '@id': personSchema['@id'] }, blogPost: posts.map(post => ({ '@type': 'BlogPosting', headline: post.title, url: absoluteUrl(`/blog/${post.slug}`) })) }} />
      <BlogIndex initialPosts={posts} />
    </>
  );
}
