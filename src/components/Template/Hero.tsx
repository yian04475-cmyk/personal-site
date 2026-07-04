'use client';

import Link from 'next/link';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  const openMenu = () => {
    document.getElementById('hamburger-nav')?.querySelector('button')?.click();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">AnYi</span>
        </h1>

        <div className="hero-chips">
          <span className="hero-chip">个人网站建站</span>
        </div>

        {/* Desktop: normal links */}
        <div className="hero-cta hero-cta-desktop">
          <Link href="/about" className="button">
            了解更多
          </Link>
        </div>

        {/* Mobile: open nav menu */}
        <div className="hero-cta hero-cta-mobile">
          <button type="button" className="button" onClick={openMenu}>
            了解更多
          </button>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
