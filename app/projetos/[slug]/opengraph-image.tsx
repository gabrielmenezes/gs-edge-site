import { notFound } from 'next/navigation';
import { getProject } from '@/lib/projects';
import { socialImage } from '@/lib/social-image';

export const alt = 'Um projeto de Gabriel Soares';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return socialImage(project.name, `${project.kind} / ${project.status}`);
}
