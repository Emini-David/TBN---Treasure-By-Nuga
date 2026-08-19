import React from 'react';
import { ShieldCheck, HeartHandshake, Users, TrendingUp, Landmark } from 'lucide-react';

export default function ImpactPillars() {
  const pillars = [
    {
      num: '01',
      icon: <ShieldCheck size={20} style={{ color: 'var(--color-gold-deep)' }} />,
      title: 'Transparent & Accountable',
      desc: 'Every naira is tracked and reported. Our financial summaries and annual impact reviews are open to the public.',
    },
    {
      num: '02',
      icon: <HeartHandshake size={20} style={{ color: 'var(--color-gold-deep)' }} />,
      title: 'Community-Driven Solutions',
      desc: 'Programs are co-designed alongside community leaders, ensuring interventions address real local priorities directly.',
    },
    {
      num: '03',
      icon: <Users size={20} style={{ color: 'var(--color-gold-deep)' }} />,
      title: 'Passionate Volunteer Network',
      desc: 'Over 120+ active volunteers who show up consistently on the ground because they believe in our mission.',
    },
    {
      num: '04',
      icon: <TrendingUp size={20} style={{ color: 'var(--color-gold-deep)' }} />,
      title: 'Sustainable Long-Term Impact',
      desc: 'We build initiatives engineered to outlast single donation cycles and foster self-sustaining growth.',
    },
    {
      num: '05',
      icon: <Landmark size={20} style={{ color: 'var(--color-gold-deep)' }} />,
      title: 'Strong Institutional Alliances',
      desc: '25+ partners including educational institutions, corporate CSR teams, and civic leaders supporting our outreach.',
    },
  ];

  return (
    <section id="impact" className="section-padding">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left Column Copy & List */}
          <div>
            <span className="eyebrow">Why Choose TBN</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', margin: '16px 0 32px' }}>
              Trust, transparency, and a track record that speaks for itself
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {pillars.map((item) => (
                <div
                  key={item.num}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    paddingBottom: '24px',
                    borderBottom: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: 'var(--color-gold-deep)',
                      backgroundColor: 'var(--color-gold-pale)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-forest)', marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Visual Banner */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                padding: '48px 36px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '440px',
              }}
            >
              {/* Subtle background glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-100px',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(217, 169, 74, 0.25), transparent 70%)',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="eyebrow eyebrow-dark" style={{ marginBottom: '16px' }}>
                  Our Commitment
                </span>
                <h3 style={{ color: 'var(--color-surface)', fontSize: '1.75rem', lineHeight: 1.3 }}>
                  "Every hand that helps plants a seed of hope for tomorrow."
                </h3>
              </div>

              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <img
                  src="/TBN-PIX/TBN.png"
                  alt="TBN Emblem"
                  style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>TBN Leadership Council</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Warri & Lagos Outreaches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
