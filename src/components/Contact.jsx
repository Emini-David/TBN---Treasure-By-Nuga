import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, MessageSquare } from 'lucide-react';

export default function Contact({ onSubmitFeedback }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitFeedback) {
      onSubmitFeedback(`Thank you ${name}! Your message has been sent. We'll reply within 48 hours.`);
    }
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Left Contact Information Card */}
          <div
            style={{
              backgroundColor: 'var(--color-forest)',
              color: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              padding: '44px 36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <div>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '12px' }}>
                Contact Info
              </span>
              <h3 style={{ color: 'var(--color-surface)', fontSize: '1.75rem', marginBottom: '32px' }}>
                Let's start a conversation
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 169, 74, 0.2)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)' }}>Address</strong>
                    <span style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                      12 Unity Crescent, Lagos & Warri Outreaches, Nigeria
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 169, 74, 0.2)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)' }}>Phone / WhatsApp</strong>
                    <span style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                      +234 800 000 0000
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 169, 74, 0.2)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)' }}>Email Address</strong>
                    <span style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                      hello@tbntreasurebynuga.org
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(217, 169, 74, 0.2)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Globe size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-gold)' }}>Website</strong>
                    <span style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                      www.tbntreasurebynuga.org
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Brand Identity Note */}
            <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.15)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
              Empowering communities with integrity, compassion, and sustainable impact.
            </div>
          </div>

          {/* Right Message Form */}
          <div
            style={{
              backgroundColor: 'var(--color-canvas)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '44px 36px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <span className="eyebrow" style={{ marginBottom: '12px' }}>
              <MessageSquare size={14} />
              Send a Message
            </span>

            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-forest)', marginBottom: '24px' }}>
              We'd love to hear from you
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this inquiry regarding?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-forest)', marginBottom: '6px' }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
