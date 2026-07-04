import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  HOME_URL,
  profilePageNode,
  SITE_URL,
} from '@/lib/schema';

const ABOUT_URL = `${SITE_URL}/about/`;

const ABOUT_DESCRIPTION =
  '了解 AnYi。';

export const metadata: Metadata = createPageMetadata({
  title: '个人介绍',
  description: ABOUT_DESCRIPTION,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper mainClassName="page-main--wide">
      <SchemaGraph
        nodes={[
          profilePageNode({
            url: ABOUT_URL,
            name: '个人介绍',
            description: ABOUT_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(ABOUT_URL, [
            { name: '首页', url: HOME_URL },
            { name: '个人介绍', url: ABOUT_URL },
          ]),
        ]}
      />
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">个人介绍</h1>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </section>
    </PageWrapper>
  );
}
