'use client';

import { useState } from 'react';

interface PostImagesProps {
  images: string[];
}

export default function PostImages({ images }: PostImagesProps) {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="post-img-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`图${i + 1}`}
            loading="lazy"
            className="post-img"
            onClick={() => setLightbox(src)}
          />
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="预览" />
        </div>
      )}
    </>
  );
}
