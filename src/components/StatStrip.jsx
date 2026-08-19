import React from 'react';

export default function StatStrip() {
  const stats = [
    { label: 'Lives Impacted', count: '2,500+' },
    { label: 'Families Supported', count: '500+' },
    { label: 'Youth Empowered', count: '300+' },
    { label: 'Community Projects', count: '50+' },
    { label: 'Volunteers', count: '120+' },
    { label: 'Partners', count: '25+' },
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-surface)',
        padding: '48px 0',
        position: 'relative',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                borderLeft: idx !== 0 ? '1px solid rgba(255, 255, 255, 0.14)' : 'none',
                paddingLeft: idx !== 0 ? '24px' : '0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                }}
              >
                {stat.count}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.75)',
                  marginTop: '8px',
                  letterSpacing: '0.01em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
