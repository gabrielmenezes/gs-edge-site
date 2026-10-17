import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/lib/projects';
import { absoluteUrl } from '@/lib/site';
import { breadcrumbSchema, pageMetadata, personSchema } from '@/lib/seo';
import ProjectDetail from '@/app/components/ProjectDetail';
import JsonLd from '@/app/components/JsonLd';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return pageMetadata({ title: `${project.name} — ${project.kind} | Gabriel Soares`, description: project.summary, path: `/projetos/${slug}`, image: `/projetos/${slug}/opengraph-image`, imageAlt: `${project.name} — Gabriel Soares` });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Projetos', path: '/projetos' }, { name: project.name, path: `/projetos/${slug}` }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.summary, url: absoluteUrl(`/projetos/${slug}`), creator: { '@id': personSchema['@id'] }, keywords: [...project.topics], inLanguage: 'pt-BR', ...(project.url ? { sameAs: project.url } : {}) }} />
      <ProjectDetail project={project} />
    </>
  );
}
