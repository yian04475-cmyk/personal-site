import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SchemaGraph } from '@/components/Schema';
import BackButton from '@/components/Writing/BackButton';
import ImageSlider from '@/components/Writing/ImageSlider';
import PageWrapper from '@/components/Template/PageWrapper';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import {
  blogPostingNode,
  breadcrumbNode,
  HOME_URL,
  webPageNode,
} from '@/lib/schema';
import { AUTHOR_NAME, formatDate, SITE_URL } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/writing/${post.slug}/`,
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const postUrl = `${SITE_URL}/writing/${post.slug}/`;
  const writingUrl = `${SITE_URL}/writing/`;

  const imgRegex = /!\[.*?\]\((.*?)\)/g;
  const imageSources: string[] = [];
  let m;
  while ((m = imgRegex.exec(post.content)) !== null) {
    imageSources.push(m[1]);
  }

  const textContent = post.content.replace(/!\[.*?\]\(.*?\)\n*/g, '').trim();

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          webPageNode({
            url: postUrl,
            name: post.title,
            description: post.description,
            hasBreadcrumb: true,
          }),
          blogPostingNode(post),
          breadcrumbNode(postUrl, [
            { name: 'Home', url: HOME_URL },
            { name: 'Writing', url: writingUrl },
            { name: post.title, url: postUrl },
          ]),
        ]}
      />
      <BackButton />
      <article className="post-page">
        <div className="post-top">
          <div className="post-top-left">
            <time className="post-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h1 className="post-title">{post.title}</h1>
          </div>
          {imageSources.length > 0 && (
            <div className="post-top-right">
              <ImageSlider images={imageSources} />
            </div>
          )}
        </div>
        <div className="post-body">
          {post.description && (
            <p className="post-desc">{post.description}</p>
          )}
          {textContent && (
            <div className="prose">
              <p>{textContent}</p>
            </div>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
