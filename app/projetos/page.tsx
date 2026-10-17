import ProjectsSection from '../components/ProjectsSection';
import JsonLd from '../components/JsonLd';
import { breadcrumbSchema, pageMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';
import { projects } from '@/lib/projects';

export const metadata = pageMetadata({
  title: 'Projetos: GSMoney e Game de Datacenters | Gabriel Soares',
  description: 'Conheça GSMoney, projeto de organização financeira pessoal, e Game de Datacenters, projeto de estratégia e simulação de Gabriel Soares.',
  path: '/projetos',
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="personal-main projects-page">
      <JsonLd data={breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Projetos', path: '/projetos' }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Projetos de Gabriel Soares', url: absoluteUrl('/projetos'), mainEntity: { '@type': 'ItemList', itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, name: project.name, url: absoluteUrl(`/projetos/${project.slug}`) })) } }} />
      <ProjectsSection asPage heading="Ideias em prática." />
    </main>
  );
}
