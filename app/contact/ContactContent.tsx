'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQq } from '@fortawesome/free-brands-svg-icons/faQq';
import { faWeixin } from '@fortawesome/free-brands-svg-icons/faWeixin';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons/faMobileScreenButton';

interface ContactInfo {
  icon: typeof faWeixin;
  value: string;
}

const contacts: ContactInfo[] = [
  { icon: faWeixin, value: 'dddzzz-IoI-' },
  { icon: faQq, value: '2711948436' },
  { icon: faMobileScreenButton, value: '16680838458' },
];

export default function ContactContent() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <div className="contact-content contact-info-list">
      {contacts.map((item) => (
        <div className="contact-info-item" key={item.value}>
          <FontAwesomeIcon icon={item.icon} className="contact-info-icon" />
          <span className="contact-info-value">{item.value}</span>
          <button
            type="button"
            className="contact-copy-btn-small"
            onClick={() => handleCopy(item.value)}
          >
            {copied === item.value ? '已复制' : '复制'}
          </button>
        </div>
      ))}
    </div>
  );
}
