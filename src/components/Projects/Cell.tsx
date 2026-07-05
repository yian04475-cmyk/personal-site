'use client';

import Link from 'next/link';
import dayjs from 'dayjs';

import type { Project } from '@/data/projects';

interface CellProps {
  data: Project;
}

export default function Cell({ data }: CellProps) {
  const { title, slug, subtitle, images, image, date, desc } = data;
  const allImages = images && images.length > 0 ? images : [image];

  return (
    <Link href={`/projects/${slug}`} className="project-card-link">
      <article className="project-card project-card--linked">
        <div className="project-card-images">
          {allImages.map((src, i) => (
            <img key={i} src={src} alt={title} className="project-thumb" />
          ))}
        </div>
        <div className="project-card-content">
          <h3 className="project-card-title">{title}</h3>
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
          <p className="project-card-desc">{desc}</p>
          <time className="project-card-date" dateTime={date}>
            {dayjs(date).format('YYYY')}
          </time>
        </div>
      </article>
    </Link>
  );
}
