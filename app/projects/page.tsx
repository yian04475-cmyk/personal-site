import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PROJECTS_DESCRIPTION =
  '邓兆俊的项目作品集。';

export const metadata: Metadata = createPageMetadata({
  title: '项目',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: '项目',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: '首页', url: HOME_URL },
            { name: '项目', url: PROJECTS_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">项目作品</h1>
          <p className="page-subtitle">
            我的项目与作品集
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">精选项目</h2>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">其他项目</h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
