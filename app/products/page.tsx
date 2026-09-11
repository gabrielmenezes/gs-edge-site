import { Metadata } from 'next';
import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import ProductsSection from '../components/ProductsSection';

export const metadata: Metadata = {
  title: 'Produtos Digitais & SaaS | GS Edge',
  description: 'Conheça o catálogo de produtos digitais, aplicações em nuvem e plataformas SaaS desenvolvidas pela GS Edge.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Produtos Digitais & SaaS | GS Edge',
    description: 'Plataformas inteligentes de software e SaaS criadas com excelência técnica pela GS Edge.',
    url: 'https://gsedge.com.br/products',
    siteName: 'GS Edge',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16 bg-edge-darker text-slate-100">
      <ProductsSection />
    </main>
  );
}
