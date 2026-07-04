'use client';

import { useEffect, useState } from 'react';

const BIRTH_DATE = '2007-01-27T00:00:00';
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

function Age() {
  const [age, setAge] = useState('');

  useEffect(() => {
    const tick = () => {
      const birthTime = new Date(BIRTH_DATE);
      setAge(((Date.now() - birthTime.getTime()) / MS_PER_YEAR).toFixed(11));
    };
    tick();
    const timer = setInterval(tick, 25);
    return () => clearInterval(timer);
  }, []);

  return <span>{age}</span>;
}

const stats = [
  { label: '当前年龄', value: <Age key="age" /> },
  { label: '所在地', value: '中国' },
];

export default function ContactStats() {
  return (
    <div className="contact-stats">
      <h2 className="contact-stats-title">个人信息</h2>
      <div className="contact-stats-list">
        {stats.map((s) => (
          <div className="contact-stats-item" key={s.label}>
            <span className="contact-stats-label">{s.label}</span>
            <span className="contact-stats-value">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
