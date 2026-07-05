'use client';

import { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (images.length === 0) return null;

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)); };

  return (
    <>
      <div className="img-slider" onClick={() => setLightbox(true)} style={{ cursor: 'pointer' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt="点击查看大图"
          className="img-slider-img"
        />
        {images.length > 1 && (
          <>
            <button type="button" className="img-slider-btn img-slider-prev" onClick={prev}>
              ‹
            </button>
            <button type="button" className="img-slider-btn img-slider-next" onClick={next}>
              ›
            </button>
            <div className="img-slider-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`img-slider-dot ${i === current ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox && (
        <div className="img-lightbox" onClick={() => setLightbox(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[current]} alt="" className="img-lightbox-img" />
          <button className="img-lightbox-close" onClick={() => setLightbox(false)}>✕</button>
        </div>
      )}
    </>
  );
}
