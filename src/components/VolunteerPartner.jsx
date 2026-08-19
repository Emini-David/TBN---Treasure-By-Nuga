import React, { useState } from 'react';
import { UserCheck, Building, Send, CheckCircle2 } from 'lucide-react';

export default function VolunteerPartner({ onSubmitFeedback }) {
  const [vName, setVName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vArea, setVArea] = useState('Education Support');
  const [vMsg, setVMsg] = useState('');

  const [pOrg, setPOrg] = useState('');
  const [pContact, setPContact] = useState('');
  const [pEmail, setPEmail] = useState('');
  const [pType, setPType] = useState('Funding / Sponsorship');
  const [pMsg, setPMsg] = useState('');

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    if (onSubmitFeedback) {
      onSubmitFeedback(`Thank you ${vName}! Your volunteer application for ${vArea} has been received.`);
    }
    setVName('');
    setVEmail('');
    setVPhone('');
    setVMsg('');
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    if (onSubmitFeedback) {
      onSubmitFeedback(`Thank you ${pContact} (${pOrg})! Our partnership team will contact you shortly.`);
    }
    setPOrg('');
    setPContact('');
    setPEmail('');
    setPMsg('');
  };

  return (
    <section id="volunteer" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Volunteer Panel */}
          <div
            style={{
              backgroundColor: 'var(--color-canvas)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '44px 36px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <UserCheck size={24} style={{ color: 'var(--color-gold-deep)' }} />
              <span className="eyebrow">Volunteer Network</span>
            </div>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-forest)', marginBottom: '12px' }}>
              Join as a Volunteer
            </h3>

            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
              Become part of a passionate team committed to driving tangible, community-level change across Nigeria.
            </p>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {['Community Impact', 'Leadership Growth', 'Network', 'Certificates'].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-forest-pale)',
                    color: 'var(--color-forest)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <form onSubmit={handleVolunteerSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={vName}
                  onChange={(e) => setVName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={vEmail}
                  onChange={(e) => setVEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <input
                  type="tel"
                  placeholder="Phone Number (+234)"
                  value={vPhone}
                  onChange={(e) => setVPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <select
                  value={vArea}
                  onChange={(e) => setVArea(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option>Education Support</option>
                  <option>Healthcare Outreach</option>
                  <option>Youth Empowerment</option>
                  <option>Community Development</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <textarea
                  rows={3}
                  placeholder="Why would you like to volunteer?"
                  value={vMsg}
                  onChange={(e) => setVMsg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn btn-forest" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} />
                Apply to Volunteer
              </button>
            </form>
          </div>

          {/* Partner Panel */}
          <div
            id="partner"
            style={{
              backgroundColor: 'var(--color-canvas)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '44px 36px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Building size={24} style={{ color: 'var(--color-gold-deep)' }} />
              <span className="eyebrow">Strategic Alliance</span>
            </div>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-forest)', marginBottom: '12px' }}>
              Partner with TBN
            </h3>

            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.6 }}>
              We welcome partnerships with organizations, institutions, and businesses aligned with sustainable development.
            </p>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {['Co-Branded Outreach', 'CSR Alignment', 'Audited Reporting'].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold-pale)',
                    color: 'var(--color-gold-deep)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            <form onSubmit={handlePartnerSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <input
                  type="text"
                  required
                  placeholder="Organization / Company"
                  value={pOrg}
                  onChange={(e) => setPOrg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <input
                  type="text"
                  required
                  placeholder="Contact Person Name"
                  value={pContact}
                  onChange={(e) => setPContact(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', marginBottom: '14px' }}>
                <input
                  type="email"
                  required
                  placeholder="Work Email Address"
                  value={pEmail}
                  onChange={(e) => setPEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <select
                  value={pType}
                  onChange={(e) => setPType(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option>Funding / Sponsorship</option>
                  <option>In-kind Donation</option>
                  <option>Skilled Volunteering</option>
                  <option>Strategic Alliance</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <textarea
                  rows={3}
                  placeholder="Tell us what you would like to explore together..."
                  value={pMsg}
                  onChange={(e) => setPMsg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    backgroundColor: 'var(--color-surface)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} />
                Start a Partnership
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
