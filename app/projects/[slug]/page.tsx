import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import ProjectImages from '@/components/Projects/ProjectImages';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return data.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = data.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  return { title: project.title, description: project.desc };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = data.find((p) => p.slug === slug);
  if (!project) notFound();

  const allImages = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  return (
    <PageWrapper>
      <Link href="/projects" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>返回</span>
      </Link>
      <article className="post-page">
        <header className="post-header">
          <time className="post-date" dateTime={project.date}>
            {formatDate(project.date)}
          </time>
          <h1 className="post-title">{project.title}</h1>
        </header>
        <div className="post-body">
          <p className="post-desc">{project.desc}</p>
          <ProjectImages images={allImages} />
        </div>
      </article>
    </PageWrapper>
  );
}
