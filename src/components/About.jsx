import React from 'react';
import { Target, Compass, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function About() {
  const values = [
    'Compassion',
    'Integrity',
    'Accountability',
    'Service',
    'Excellence',
    'Inclusion',
    'Sustainability',
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left Visual Column */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border)',
                padding: '40px',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-gold-pale)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(217, 169, 74, 0.2)',
                }}
              >
                <img
                  src="/TBN-PIX/TBN.png"
                  alt="TBN Emblem"
                  style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                />
              </div>

              <div style={{ maxWidth: '320px' }}>
                <span className="eyebrow" style={{ justifyContent: 'center' }}>
                  Who We Are
                </span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '12px', color: 'var(--color-forest)' }}>
                  Treasure By Nuga
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-ink-muted)', marginTop: '8px' }}>
                  A grassroots non-profit turning compassion into measurable, sustainable change across communities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div>
            <span className="eyebrow">About TBN</span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', margin: '16px 0 20px' }}>
              A non-profit built on service, standing beside communities that need it most
            </h2>

            <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.05rem', marginBottom: '16px', lineHeight: 1.65 }}>
              TBN Treasure By Nuga is dedicated to improving lives through humanitarian services, education, youth empowerment, healthcare support, community development, and sustainable initiatives. We believe every individual deserves the opportunity to thrive, regardless of their background.
            </p>

            <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.05rem', marginBottom: '32px', lineHeight: 1.65 }}>
              Our mission is to create lasting impact by empowering individuals, supporting families, and building stronger, more resilient communities — one intervention at a time.
            </p>

            {/* Mission & Vision Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '20px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-forest)', marginBottom: '10px' }}>
                  <Target size={22} style={{ color: 'var(--color-gold-deep)' }} />
                  <h4 style={{ fontSize: '1.1rem' }}>Our Mission</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                  To uplift underserved communities through compassion, education, healthcare, empowerment and sustainable development.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-forest)', marginBottom: '10px' }}>
                  <Compass size={22} style={{ color: 'var(--color-gold-deep)' }} />
                  <h4 style={{ fontSize: '1.1rem' }}>Our Vision</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                  A world where every individual has equal access to opportunity, dignity, hope, and a better quality of life.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink-muted)' }}>
                Core Values
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '12px' }}>
                {values.map((val) => (
                  <span
                    key={val}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-forest)',
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: 'var(--color-leaf)' }} />
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
