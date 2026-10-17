import type { Metadata } from 'next';
import type { BlogPost } from './blog';
import { absoluteUrl, siteDescription, siteIndexable, siteName } from './site';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  article?: { author: string; publishedTime?: string };
}

export function pageMetadata({ title, description, path, image = '/opengraph-image', imageAlt = 'Gabriel Soares — GSMoney e Game de Datacenters', article }: PageMetadataOptions): Metadata {
  const images = [{ url: absoluteUrl(image), alt: imageAlt }];
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title, description, url: absoluteUrl(path), siteName, locale: 'pt_BR', images,
      ...(article ? { type: 'article', authors: [article.author], ...(article.publishedTime ? { publishedTime: article.publishedTime } : {}) } : { type: 'website' }),
    },
    twitter: { card: 'summary_large_image', title, description, images },
    robots: { index: siteIndexable, follow: true, googleBot: { index: siteIndexable, follow: true, 'max-image-preview': 'large' } },
  };
}

export const personSchema = {
  '@type': 'Person',
  '@id': absoluteUrl('/#gabriel-soares'),
  name: siteName,
  url: absoluteUrl('/#about'),
  image: absoluteUrl('/gabriel-soares.webp'),
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  name: siteName,
  url: absoluteUrl(),
  description: siteDescription,
  inLanguage: 'pt-BR',
  author: { '@id': personSchema['@id'] },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}

export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: post.author === siteName ? personSchema : { '@type': 'Person', name: post.author },
    publisher: personSchema,
    image: [absoluteUrl(post.image || '/opengraph-image')],
    ...(post.date && !Number.isNaN(Date.parse(post.date)) ? { datePublished: post.date } : {}),
    ...(post.updated ? { dateModified: post.updated } : {}),
    articleSection: post.category,
    inLanguage: 'pt-BR',
    isAccessibleForFree: true,
    isPartOf: { '@id': absoluteUrl('/blog#blog') },
  };
}

// Escape markup delimiters so content cannot terminate a JSON-LD script tag.
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

