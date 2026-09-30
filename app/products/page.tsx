import { Metadata } from 'next';
import Link from 'next/link';
import { getAllProducts } from '@/lib/products';
import ProductsSection from '../components/ProductsSection';

export const metadata: Metadata = {
  title: 'GS Edge Labs & Soluções Proprietárias | GS Edge',
  description: 'Conheça o portfólio de plataformas experimentais, simuladores e soluções proprietárias concebidas nos laboratórios da GS Edge.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'GS Edge Labs & Soluções Proprietárias | GS Edge',
    description: 'Plataformas inteligentes, simuladores de infraestrutura e aplicações proprietárias concebidas nos laboratórios da GS Edge.',
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
