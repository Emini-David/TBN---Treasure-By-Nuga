import React from 'react';
import { ArrowRight, UserPlus, Heart, Handshake } from 'lucide-react';

export default function InvolveCTA() {
  return (
    <section className="section-padding" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-gold-pale)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 48px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="#volunteer"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <UserPlus size={20} />
                Volunteer with us
              </div>
              <ArrowRight size={18} />
            </a>

            <a
              href="#donate"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Heart size={20} />
                Make a donation
              </div>
              <ArrowRight size={18} />
            </a>

            <a
              href="#partner"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--color-forest)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-forest)';
                e.currentTarget.style.color = 'var(--color-surface)';
                e.currentTarget.style.transform = 'translateX(6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                e.currentTarget.style.color = 'var(--color-forest)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Handshake size={20} />
                Partner with TBN
              </div>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
