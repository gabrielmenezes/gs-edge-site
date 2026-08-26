import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/lib/services';
import ServiceLandingView from '@/app/components/ServiceLandingView';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug, 'pt');

  if (!service) {
    return {
      title: 'Serviço Não Encontrado | GS Edge',
    };
  }

  return {
    title: `${service.title} | GS Edge`,
    description: service.summary,
    openGraph: {
      title: `${service.title} - GS Edge`,
      description: service.description,
      url: `https://gsedge.com.br/services/${slug}`,
      siteName: 'GS Edge',
      locale: 'pt_BR',
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug, 'pt');

  if (!service) {
    notFound();
  }

  return <ServiceLandingView slug={slug} initialService={service} />;
}
