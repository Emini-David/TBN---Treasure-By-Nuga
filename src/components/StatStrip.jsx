import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Lives Impacted', value: 2500 },
  { label: 'Families Supported', value: 500 },
  { label: 'Youth Empowered', value: 300 },
  { label: 'Community Projects', value: 50 },
  { label: 'Volunteers', value: 120 },
  { label: 'Partners', value: 25 },
];

function useCountUp(target, delay) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return undefined;
    }

    let frame;
    const duration = 1500;
    const startAt = performance.now() + delay;
    const animate = (now) => {
      if (now < startAt) {
        frame = requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min((now - startAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(target * easedProgress));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, delay]);

  return count;
}

function Stat({ stat, index }) {
  const count = useCountUp(stat.value, index * 110);
  return (
    <div style={{ borderLeft: index !== 0 ? '1px solid rgba(255, 255, 255, 0.14)' : 'none', paddingLeft: index !== 0 ? '24px' : '0' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', color: 'var(--color-gold)', lineHeight: 1 }} aria-label={`${stat.value.toLocaleString()} or more ${stat.label}`}>
        {count.toLocaleString()}+
      </div>
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.75)', marginTop: '8px', letterSpacing: '0.01em' }}>{stat.label}</div>
    </div>
  );
}

export default function StatStrip() {
  return (
    <div style={{ backgroundColor: 'var(--color-forest)', color: 'var(--color-surface)', padding: '48px 0', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
      <div className="container"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', alignItems: 'center' }}>
        {stats.map((stat, index) => <Stat key={stat.label} stat={stat} index={index} />)}
      </div></div>
    </div>
  );
}
