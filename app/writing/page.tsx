import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
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

  const externalItems = writing.map((item) => ({
    ...item,
    isExternal: true,
  }));

  const allItems = [
    ...internalPosts.map((post) => ({ ...post, isExternal: false })),
    ...externalItems,
  ].filter((item) => item.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestPostDate = allItems[0]?.date;

  // Extract first images from markdown
  const extractImages = (content: string): string[] => {
    const imgRegex = /!\[.*?\]\((.*?)\)/g;
    const images: string[] = [];
    let m;
    while ((m = imgRegex.exec(content)) !== null) {
      images.push(m[1]);
    }
    return images;
  };

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
            const images = extractImages(post.content);
            return (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="writing-item"
              >
                <time className="writing-date" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                {images.length > 0 && (
                  <div className="writing-thumbnails">
                    {images.slice(0, 3).map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt=""
                        loading="lazy"
                        className="writing-thumb"
                      />
                    ))}
                  </div>
                )}
                <h2 className="writing-title">{post.title}</h2>
              </Link>
            );
          })}
        </div>
      </article>
    </PageWrapper>
  );
}
