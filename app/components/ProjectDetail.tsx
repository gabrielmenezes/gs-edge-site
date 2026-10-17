import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectVisual from './ProjectVisual';

type Project = typeof projects[number];

function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="project-overview">
      <div><p className="eyebrow">A IDEIA</p><h2>{project.title}</h2></div>
      <div className="about-copy"><p>{project.description}</p><p>{project.concept}</p></div>
    </section>
  );
}

function ProjectTopics({ project }: { project: Project }) {
  return (
    <section className="project-topics">
      <p className="eyebrow">{project.live ? 'O FOCO DO PROJETO' : 'DIREÇÃO DO PROJETO / MECÂNICAS PLANEJADAS'}</p>
      <div>
        {project.details.map((detail, index) => (
          <article key={detail}>
            <span className="article-number">0{index + 1}</span>
            <h3>{detail}</h3>
          </article>
        ))}
      </div>
      {!project.live && (
        <p className="planned-note">Esses pontos descrevem a proposta do jogo e não representam uma lista de funcionalidades já disponíveis.</p>
      )}
    </section>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const other = projects.find(item => item.slug !== project.slug)!;

  return (
    <main id="main-content" className="personal-main project-detail">
      <Link href="/projetos" className="text-link">← Todos os projetos</Link>
      <header className="project-detail-header">
        <div className="project-meta">
          <span>{project.kind}</span>
          <span className={project.live ? 'status-live' : 'status-soon'}><i />{project.status}</span>
        </div>
        <h1>{project.name}<span className="accent-dot">.</span></h1>
        <p>{project.summary}</p>
        <div className="topic-tags">{project.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
      </header>
      <ProjectVisual game={!project.live} />
      <p className="illustration-note">Ilustração conceitual do projeto. Não é uma captura da aplicação.</p>
      <ProjectOverview project={project} />
      <ProjectTopics project={project} />
      <section className="project-detail-cta">
        <div>
          <p className="eyebrow">UM PROJETO DE GABRIEL SOARES</p>
          <h2>{project.live ? 'Conheça o GSMoney.' : 'O próximo capítulo está em construção.'}</h2>
          <p>{project.live
            ? 'Explore o projeto no seu endereço oficial.'
            : 'O Game de Datacenters ainda não possui um link público para jogar. Quer conversar sobre a ideia?'}
          </p>
        </div>
        {project.url ? (
          <a className="button-primary" href={project.url} target="_blank" rel="noopener noreferrer">
            Acessar GSMoney <span aria-hidden="true">↗</span><span className="sr-only"> (abre em nova aba)</span>
          </a>
        ) : (
          <a className="button-primary" href="mailto:contato@gsedge.com.br?subject=Game%20de%20Datacenters">
            Falar sobre o projeto <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>
      <Link className="next-project" href={`/projetos/${other.slug}`}>
        <span>Explore também</span><strong>{other.name}</strong><span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
