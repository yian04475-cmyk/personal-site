'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

export default function BackButton() {
  return (
    <Link href="/writing" className="back-btn">
      <FontAwesomeIcon icon={faArrowLeft} />
      <span className="back-btn-text">返回</span>
    </Link>
  );
}
