import React from 'react';
import { Heart, Users, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: '160px',
        paddingBottom: '96px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, var(--color-canvas) 100%)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Text Left Column */}
          <div style={{ maxWidth: '600px' }}>
            <span className="eyebrow">
              <Sparkles size={14} style={{ color: 'var(--color-gold-deep)' }} />
              Empower · Inspire · Impact
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                margin: '20px 0 24px',
                color: 'var(--color-forest)',
                lineHeight: 1.08,
              }}
            >
              Changing lives,{' '}
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: 'var(--color-gold-deep)',
                }}
              >
                one community
              </span>{' '}
              at a time.
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-ink-muted)',
                marginBottom: '36px',
                lineHeight: 1.65,
              }}
            >
              We bring hope to underserved communities through education, healthcare, youth empowerment and sustainable development — because every person deserves the opportunity to thrive.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#donate" className="btn btn-primary">
                <Heart size={18} style={{ fill: 'currentColor' }} />
                Support Our Mission
              </a>
              <a href="#volunteer" className="btn btn-outline">
                Become a Volunteer
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                marginTop: '44px',
                paddingTop: '24px',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--color-gold-deep)' }} />
                100% Transparent
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                <Users size={18} style={{ color: 'var(--color-gold-deep)' }} />
                Grassroots Driven
              </div>
            </div>
          </div>

          {/* Graphic Right Column */}
          <div style={{ position: 'relative' }}>
            {/* Main Visual Image Box */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                aspectRatio: '0.9',
                boxShadow: 'var(--shadow-xl)',
                border: '4px solid var(--color-surface)',
              }}
            >
              <img
                src="/TBN-PIX/about_img.jpg"
                alt="TBN Community Impact"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(13,75,49,0.1) 0%, rgba(13,75,49,0.4) 100%)',
                }}
              />
            </div>

            {/* Top Floating Note */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-16px',
                backgroundColor: 'var(--color-surface)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid var(--color-border-subtle)',
                maxWidth: '220px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-forest-pale)',
                  color: 'var(--color-forest)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Users size={20} />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                  25+ Partners
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-muted)' }}>
                  Building across Nigeria
                </span>
              </div>
            </div>

            {/* Bottom Circular Logo Stamp */}
            <div
              style={{
                position: 'absolute',
                bottom: '-28px',
                left: '-24px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface)',
                padding: '10px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/TBN-PIX/TBN.png"
                alt="TBN Emblem"
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
