import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'TBN gave my children access to quality educational materials that completely transformed their learning experience and confidence.',
      author: 'Amaka O.',
      role: 'Parent, Education Support Program',
      initial: 'A',
    },
    {
      quote: 'Their medical outreach came at the exact right moment for our community. The care was thorough, dignified, and entirely free.',
      author: 'Tunde A.',
      role: 'Community Elder, Warri Outreach',
      initial: 'T',
    },
    {
      quote: 'The women empowerment program gave me seed funding and business literacy to start my own tailoring venture. I now employ two other women!',
      author: 'Funmi K.',
      role: 'Empowerment Grant Recipient',
      initial: 'F',
    },
    {
      quote: 'Volunteering with TBN gave me invaluable hands-on leadership experience and introduced me to a community of like-minded change-makers.',
      author: 'Chinedu E.',
      role: 'Field Team Leader & Volunteer',
      initial: 'C',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>What people say about TBN</h2>
          <p>Real stories from community members, beneficiaries, and volunteers across Nigeria.</p>
        </div>

        {/* Testimonials Display Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--color-canvas)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease',
              }}
            >
              <div>
                <Quote size={32} style={{ color: 'var(--color-gold)', marginBottom: '16px', opacity: 0.8 }} />
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--color-forest)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-forest-dark)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--color-forest)' }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: '0.785rem', color: 'var(--color-ink-muted)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
