'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

export default function ContactIcons() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = async (
    e: React.MouseEvent,
    item: (typeof data)[number],
  ) => {
    e.preventDefault();
    if (item.copyText) {
      try {
        await navigator.clipboard.writeText(item.copyText);
        setCopiedText(`${item.label}: ${item.copyText}`);
        setTimeout(() => setCopiedText(null), 2000);
      } catch {
        setCopiedText(`${item.label}: ${item.copyText}`);
        setTimeout(() => setCopiedText(null), 3000);
      }
    }
  };

  return (
    <ul className="icons">
      {data.map((s) => {
        const isCopy = !!s.copyText;
        const showCopied = copiedText?.startsWith(s.label);

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
            {showCopied && (
              <span className="contact-copy-tooltip">已复制 {copiedText}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
