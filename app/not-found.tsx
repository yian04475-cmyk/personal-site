import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: '页面不存在',
  description: '你要找的页面不存在。',
});

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">页面不存在</h1>
        <p className="not-found-message">
          你要找的页面不存在或已被移动。
        </p>
        <div className="not-found-actions">
          <Link href="/" className="not-found-button">
            返回首页
          </Link>
          <Link href="/contact" className="not-found-link">
            联系我
          </Link>
        </div>
      </div>
    </main>
  );
}
