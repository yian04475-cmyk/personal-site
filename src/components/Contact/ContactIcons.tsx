'use client';

import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

export default function ContactIcons() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    item: (typeof data)[number],
  ) => {
    e.preventDefault();
    if (!item.copyText) return;

    try {
      await navigator.clipboard.writeText(item.copyText);
    } catch {
      // fallback
    }

    setCopiedLabel(item.label);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopiedLabel(null), 2000);
  };

  return (
    <ul className="icons">
      {data.map((s) => {
        const isCopy = !!s.copyText;

        return (
          <li key={s.label} style={{ position: 'relative' }}>
            <a
              href={isCopy ? '#' : s.link}
              onClick={isCopy ? (e) => handleCopy(e, s) : undefined}
              aria-label={
                isCopy ? `复制${s.label}: ${s.copyText}` : `${s.label}`
              }
              title={isCopy ? `${s.label}: ${s.copyText}` : s.label}
              target={isCopy ? undefined : '_blank'}
              rel={isCopy ? undefined : 'noopener noreferrer'}
            >
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            </a>
            {copiedLabel === s.label && (
              <span className="contact-copy-tooltip">Copied!</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
