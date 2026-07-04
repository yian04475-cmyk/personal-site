'use client';

import Markdown from 'markdown-to-jsx';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <Markdown
      options={{
        overrides: {
          img: {
            component: ({ alt, src }: { alt?: string; src?: string }) => {
              if (!src) return null;
              return (
                <a href={src || '#'} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt || ''} loading="lazy" className="post-img" />
                </a>
              );
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
}
