import React, { useState } from 'react';
import { Heart, Check, Lock, ShieldCheck } from 'lucide-react';

export default function DonateSection({ onDonateSubmit }) {
  const [frequency, setFrequency] = useState('once'); // 'once' | 'monthly'
  const [selectedAmount, setSelectedAmount] = useState('10,000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

  const amounts = ['5,000', '10,000', '25,000', '50,000'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount ? customAmount : selectedAmount;
    if (onDonateSubmit) {
      onDonateSubmit(`Thank you, ${donorName || 'generous donor'}! Your support of ₦${finalAmount} (${frequency === 'once' ? 'one-time' : 'monthly'}) makes a real difference.`);
    }
    setDonorName('');
    setDonorEmail('');
    setCustomAmount('');
  };

  return (
    <section id="donate" className="section-padding">
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-forest)',
            color: 'var(--color-surface)',
            borderRadius: 'var(--radius-xl)',
            padding: '64px 48px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-150px',
              left: '-150px',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(217, 169, 74, 0.25), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '56px',
              alignItems: 'start',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Left Column Information */}
            <div>
              <span className="eyebrow eyebrow-dark">Support Our Cause</span>
              <h2 style={{ color: 'var(--color-surface)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: '16px 0 20px' }}>
                Your generosity reaches further than you think
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Every donation directly funds our grassroots outreaches across Nigeria, ensuring families receive emergency supplies, children get learning kits, and youth acquire valuable skills.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Educational materials & scholarships for underprivileged kids',
                  'Free medical screenings & maternal healthcare kits',
                  'Emergency food & basic relief packages',
                  'Youth entrepreneurship & vocational skill training',
                  'Community sanitation & infrastructure repair',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-gold)',
                        color: 'var(--color-forest-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column Interactive Donation Card */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-ink)',
                borderRadius: 'var(--radius-lg)',
                padding: '36px',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <form onSubmit={handleSubmit}>
                {/* Frequency Selector */}
                <div
                  style={{
                    display: 'flex',
                    backgroundColor: 'var(--color-canvas)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px',
                    marginBottom: '24px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      backgroundColor: frequency === 'once' ? 'var(--color-forest)' : 'transparent',
                      color: frequency === 'once' ? 'var(--color-surface)' : 'var(--color-ink-muted)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    Give One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      backgroundColor: frequency === 'monthly' ? 'var(--color-forest)' : 'transparent',
                      color: frequency === 'monthly' ? 'var(--color-surface)' : 'var(--color-ink-muted)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    Give Monthly
                  </button>
                </div>

                {/* Amount Selection Buttons */}
                <label style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-forest)', display: 'block', marginBottom: '8px' }}>
                  Select Amount (₦)
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px',
                    marginBottom: '16px',
                  }}
                >
                  {amounts.map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      style={{
                        padding: '12px 0',
                        borderRadius: 'var(--radius-md)',
                        border: selectedAmount === amt && !customAmount ? '2px solid var(--color-forest)' : '1.5px solid var(--color-border)',
                        backgroundColor: selectedAmount === amt && !customAmount ? 'var(--color-forest-pale)' : 'var(--color-canvas)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--color-forest)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      ₦{amt}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div style={{ marginBottom: '16px' }}>
                  <input
                    type="number"
                    placeholder="Custom amount (₦)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--color-canvas)',
                      fontSize: '0.925rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Name & Email Fields */}
                <div style={{ marginBottom: '14px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--color-canvas)',
                      fontSize: '0.925rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--color-border)',
                      backgroundColor: 'var(--color-canvas)',
                      fontSize: '0.925rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', justifyContent: 'center' }}
                >
                  <Heart size={18} style={{ fill: 'currentColor' }} />
                  Donate ₦{customAmount ? Number(customAmount).toLocaleString() : selectedAmount} Now
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    color: 'var(--color-ink-muted)',
                    marginTop: '16px',
                  }}
                >
                  <Lock size={13} />
                  Secure checkout simulation — direct impact allocation
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
