import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { projects } from '@/lib/projects';
import { absoluteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...['/', '/projetos', '/blog'].map(path => ({ url: absoluteUrl(path) })),
    ...projects.map(project => ({ url: absoluteUrl(`/projetos/${project.slug}`) })),
    ...getAllPosts('pt').map(post => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      ...(post.updated ? { lastModified: post.updated } : {}),
      ...(post.image ? { images: [absoluteUrl(post.image)] } : {}),
    })),
  ];
}
