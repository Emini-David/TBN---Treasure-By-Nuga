import React from 'react';
import { ArrowRight, UserPlus, Heart, Handshake } from 'lucide-react';

export default function InvolveCTA() {
  return (
    <section className="section-padding" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
      <div className="container">
        <div
          className="banner-card"
          style={{
            backgroundColor: 'var(--color-gold-pale)',
            border: '1px solid var(--color-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
            alignItems: 'center',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div>
            <span className="eyebrow">Get Involved</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', margin: '14px 0 16px' }}>
              Become part of the change
            </h2>
            <p style={{ color: 'var(--color-ink-muted)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '480px' }}>
              Every contribution — whether through volunteering, donating, or partnering with us — helps transform lives and build stronger communities.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
            <a
              href="#volunteer"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                width: '100%',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <UserPlus size={20} style={{ flexShrink: 0 }} />
                <span>Volunteer with us</span>
              </div>
              <ArrowRight size={18} style={{ flexShrink: 0 }} />
            </a>

            <a
              href="#donate"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                width: '100%',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Heart size={20} style={{ flexShrink: 0 }} />
                <span>Make a donation</span>
              </div>
              <ArrowRight size={18} style={{ flexShrink: 0 }} />
            </a>

            <a
              href="#partner"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
                width: '100%',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Handshake size={20} style={{ flexShrink: 0 }} />
                <span>Partner with TBN</span>
              </div>
              <ArrowRight size={18} style={{ flexShrink: 0 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
