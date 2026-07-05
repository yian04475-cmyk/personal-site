'use client';

import { useState } from 'react';

interface Props {
  images: string[];
}

export default function ProjectImages({ images }: Props) {
  const [lightbox, setLightbox] = useState(false);
  const [current, setCurrent] = useState(0);

  if (images.length === 0) return null;

  return (
    <>
      <div className="project-images-row">
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="project-detail-thumb"
            onClick={() => { setCurrent(i); setLightbox(true); }}
          />
        ))}
      </div>

      {lightbox && (
        <div className="img-lightbox" onClick={() => setLightbox(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[current]} alt="" className="img-lightbox-img" />
          {images.length > 1 && (
            <>
              <button className="img-lightbox-prev" onClick={(e) => { e.stopPropagation(); setCurrent(c => c === 0 ? images.length - 1 : c - 1); }}>‹</button>
              <button className="img-lightbox-next" onClick={(e) => { e.stopPropagation(); setCurrent(c => c === images.length - 1 ? 0 : c + 1); }}>›</button>
            </>
          )}
          <button className="img-lightbox-close" onClick={() => setLightbox(false)}>✕</button>
        </div>
      )}
    </>
  );
}
