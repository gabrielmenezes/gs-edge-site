import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductSlugs } from '@/lib/products';
import ProductLandingView from '@/app/components/ProductLandingView';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug, 'pt');

  if (!product) {
    return {
      title: 'Produto Não Encontrado | GS Edge',
    };
  }

  return {
    title: `${product.name} | ${product.tagline}`,
    description: product.summary,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.description,
      url: `https://gsedge.com.br/products/${slug}`,
      siteName: 'GS Edge',
      locale: 'pt_BR',
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug, 'pt');

  if (!product) {
    notFound();
  }

  return <ProductLandingView slug={slug} initialProduct={product} />;
}
