import type { Metadata } from 'next';
import { SchemaGraph } from '@/components/Schema';
import PostImages from "@/components/Writing/PostImages";
import PostContent from '@/components/Writing/PostContent';
import PageWrapper from '@/components/Template/PageWrapper';
import writing from '@/data/writing';
import { createPageMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/posts';
import {
  blogNode,
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
  WRITING_DESCRIPTION,
} from '@/lib/schema';
import { formatDate } from '@/lib/utils';

const WRITING_URL = `${SITE_URL}/writing/`;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: '动态',
    description: WRITING_DESCRIPTION,
    path: '/writing/',
  }),
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function WritingPage() {
  const internalPosts = getAllPosts();

  // External articles
  const externalItems = writing.map((item) => ({
    ...item,
    isExternal: true,
  }));

  // Merge and sort
  const allItems = [
    ...internalPosts.map((post) => ({ ...post, isExternal: false })),
    ...externalItems,
  ].filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestPostDate = allItems[0]?.date;

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: WRITING_URL,
            name: '动态',
            description: WRITING_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          blogNode(latestPostDate),
          breadcrumbNode(WRITING_URL, [
            { name: '首页', url: HOME_URL },
            { name: '动态', url: WRITING_URL },
          ]),
        ]}
      />
      <article className="writing-page">
        <header className="writing-header">
          <h1 className="page-title">动态</h1>
        </header>

        <div className="writing-list">
          {internalPosts.map((post) => {
            // Extract image URLs from markdown content
            const imgRegex = /!\[.*?\]\((.*?)\)/g;
            const images: string[] = [];
            let m;
            while ((m = imgRegex.exec(post.content)) !== null) {
              images.push(m[1]);
            }
            // Remove image lines from content for text rendering
            const textContent = post.content.replace(/!\[.*?\]\(.*?\)\n*/g, '').trim();

            return (
            <article key={post.slug} className="writing-item-full">
              <time className="writing-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <h2 className="writing-title">{post.title}</h2>
              {images.length > 0 && (
                <PostImages images={images} />
              )}
              {textContent && (
                <div className="prose">
                  <PostContent content={textContent} />
                </div>
              )}
            </article>
          );
          })}
        </div>
      </article>
    </PageWrapper>
  );
}
