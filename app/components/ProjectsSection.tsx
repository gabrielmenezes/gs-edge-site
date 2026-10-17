import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectVisual from './ProjectVisual';

interface ProjectsSectionProps {
  heading?: string;
  asPage?: boolean;
}

export default function ProjectsSection({
  heading = 'Dois projetos. Diferentes formas de construir.',
  asPage = false,
}: ProjectsSectionProps) {
  const Heading = asPage ? 'h1' : 'h2';

  return (
    <section id="projects" className="personal-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">PROJETOS SELECIONADOS / 01—02</p>
          <Heading>{heading}</Heading>
        </div>
        <p>Ideias que saem do papel e ganham forma em produtos e experiências.</p>
      </div>
      <div className="project-grid">
        {projects.map(project => (
          <article className={`project-card ${project.live ? 'money-card' : 'game-card'}`} key={project.slug}>
            <Link href={`/projetos/${project.slug}`} className="project-image-link" aria-label={`Conhecer ${project.name}`}>
              <ProjectVisual game={!project.live} />
            </Link>
            <div className="project-card-body">
              <div className="project-meta">
                <span>{project.kind}</span>
                <span className={project.live ? 'status-live' : 'status-soon'}><i />{project.status}</span>
              </div>
              <h3><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h3>
              <p>{project.summary}</p>
              <Link className="project-link" href={`/projetos/${project.slug}`}>
                Explorar projeto <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
