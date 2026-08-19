import React from 'react';
import { GraduationCap, Building2, Rocket, Stethoscope, PackageCheck, Award } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: <GraduationCap size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Education Support',
      desc: 'Scholarships, school supplies, mentorship and learning opportunities for children and young adults.',
    },
    {
      icon: <Building2 size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Community Development',
      desc: 'Projects that improve sanitation, infrastructure and everyday living conditions in rural areas.',
    },
    {
      icon: <Rocket size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Youth Empowerment',
      desc: 'Skill acquisition, entrepreneurship training, leadership development and career mentorship.',
    },
    {
      icon: <Stethoscope size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Healthcare Outreach',
      desc: 'Free medical outreaches, health awareness campaigns, maternal care and essential medical assistance.',
    },
    {
      icon: <PackageCheck size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Food & Relief Support',
      desc: 'Food items, clothing and relief materials for vulnerable families in emergency situations.',
    },
    {
      icon: <Award size={26} style={{ color: 'var(--color-gold)' }} />,
      title: 'Women Empowerment',
      desc: 'Vocational training, financial literacy, business micro-grants and dedicated one-on-one mentorship.',
    },
  ];

  return (
    <section
      id="programs"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="section-header" style={{ color: 'var(--color-surface)' }}>
          <span className="eyebrow eyebrow-dark">What We Do</span>
          <h2 style={{ color: 'var(--color-surface)' }}>Six programs, one shared purpose</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
            From classrooms to clinics, our work meets people where they are and equips them for sustainable progress.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {programs.map((p, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--color-border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px 28px',
                transition: 'all 0.35s var(--ease-out)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.09)';
                e.currentTarget.style.borderColor = 'rgba(217, 169, 74, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'var(--color-border-dark)';
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(217, 169, 74, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(217, 169, 74, 0.25)',
                }}
              >
                {p.icon}
              </div>

              <h3 style={{ color: 'var(--color-surface)', fontSize: '1.25rem', marginBottom: '12px' }}>
                {p.title}
              </h3>

              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.935rem', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
