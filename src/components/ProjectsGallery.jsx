import React, { useState } from 'react';
import { Eye, Layers, Calendar, MapPin, X } from 'lucide-react';

export default function ProjectsGallery() {
  const projects = [
    {
      id: 1,
      title: 'School Support Initiative',
      category: 'Education',
      location: 'Delta State',
      date: '2024',
      description: 'Distributed 500+ textbook kits, school uniforms, and desk supplies to rural schools in Warri and environs.',
      color: 'linear-gradient(135deg, #0D4B31 0%, #156C48 100%)',
    },
    {
      id: 2,
      title: 'Free Medical Outreach',
      category: 'Healthcare',
      location: 'Lagos Community',
      date: '2024',
      description: 'Provided free health screenings, hypertension checks, eye examinations, and essential prescriptions to over 400 families.',
      color: 'linear-gradient(135deg, #9C6A12 0%, #D9A94A 100%)',
    },
    {
      id: 3,
      title: 'Back-to-School Campaign',
      category: 'Education',
      location: 'Warri South',
      date: '2024',
      description: 'Awarded full tuition scholarships and mentorship packages to bright underprivileged students entering secondary school.',
      color: 'linear-gradient(135deg, #1B5E12 0%, #3FAE22 100%)',
    },
    {
      id: 4,
      title: 'Community Clean-Up & Sanitation',
      category: 'Environment',
      location: 'Urban Settlement',
      date: '2024',
      description: 'Organized neighborhood volunteer teams for drainage clearing, waste disposal education, and sanitation bin installation.',
      color: 'linear-gradient(135deg, #12211A 0%, #4C5A52 100%)',
    },
    {
      id: 5,
      title: 'Youth Leadership Summit',
      category: 'Empowerment',
      location: 'National Outreach',
      date: '2024',
      description: 'Gathered 150+ young leaders for intensive bootcamps on digital skills, public speaking, civic responsibility, and ethics.',
      color: 'linear-gradient(135deg, #082A1B 0%, #156C48 100%)',
    },
    {
      id: 6,
      title: 'Food Relief Distribution',
      category: 'Emergency Relief',
      location: 'Grassroots Communities',
      date: '2024',
      description: 'Delivered food parcels containing rice, beans, cooking oil, and nutritional supplements to vulnerable households.',
      color: 'linear-gradient(135deg, #0D4B31 0%, #D9A94A 100%)',
    },
  ];

  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Recent Projects</span>
          <h2>Moments from the field</h2>
          <p>A look at the key initiatives our volunteers and partners brought to life this year.</p>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModalProject(proj)}
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '36px 28px',
                background: proj.color,
                color: 'var(--color-surface)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {proj.category}
                  </span>
                  <Eye size={18} opacity={0.8} />
                </div>
                <h3 style={{ color: 'var(--color-surface)', fontSize: '1.35rem' }}>
                  {proj.title}
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', opacity: 0.9, marginTop: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} />
                  {proj.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} />
                  {proj.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(13, 75, 49, 0.65)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setActiveModalProject(null)}
          >
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-xl)',
                maxWidth: '540px',
                width: '100%',
                padding: '40px',
                position: 'relative',
                boxShadow: 'var(--shadow-xl)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '8px',
                  color: 'var(--color-ink-muted)',
                  borderRadius: '50%',
                }}
              >
                <X size={22} />
              </button>

              <span className="eyebrow" style={{ marginBottom: '12px' }}>
                {activeModalProject.category}
              </span>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-forest)', margin: '8px 0 16px' }}>
                {activeModalProject.title}
              </h3>

              <p style={{ color: 'var(--color-ink-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {activeModalProject.description}
              </p>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-forest)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} style={{ color: 'var(--color-gold-deep)' }} />
                  {activeModalProject.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} style={{ color: 'var(--color-gold-deep)' }} />
                  {activeModalProject.date}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
