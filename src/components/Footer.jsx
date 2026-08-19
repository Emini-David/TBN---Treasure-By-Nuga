import React, { useState } from 'react';
import { Heart, Send } from 'lucide-react';

export default function Footer({ onNewsletterSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && onNewsletterSubmit) {
      onNewsletterSubmit(`Subscribed! ${email} has been added to our impact newsletter.`);
      setEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-forest)', color: 'rgba(255, 255, 255, 0.75)', paddingTop: '80px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '44px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/TBN-PIX/TBN.png"
                alt="TBN Emblem"
                style={{ width: '44px', height: '44px', borderRadius: '50%' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-surface)' }}>
                TBN
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '280px' }}>
              Changing lives through compassion, education, youth empowerment, and sustainable community development across Nigeria.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 style={{ color: 'var(--color-surface)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ transition: 'color 0.25s' }}>Home</a></li>
              <li><a href="#about" style={{ transition: 'color 0.25s' }}>About TBN</a></li>
              <li><a href="#programs" style={{ transition: 'color 0.25s' }}>Six Programs</a></li>
              <li><a href="#gallery" style={{ transition: 'color 0.25s' }}>Recent Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h5 style={{ color: 'var(--color-surface)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Get Involved
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#donate" style={{ transition: 'color 0.25s' }}>Make a Donation</a></li>
              <li><a href="#volunteer" style={{ transition: 'color 0.25s' }}>Join as Volunteer</a></li>
              <li><a href="#partner" style={{ transition: 'color 0.25s' }}>Corporate Partnership</a></li>
              <li><a href="#contact" style={{ transition: 'color 0.25s' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h5 style={{ color: 'var(--color-surface)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Stay Updated
            </h5>
            <p style={{ fontSize: '0.875rem', marginBottom: '16px', lineHeight: 1.5 }}>
              Receive periodic field updates and impact stories directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--color-surface)',
                  fontSize: '0.875rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--color-gold)',
                  color: 'var(--color-forest-dark)',
                  padding: '0 18px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '28px 0',
            fontSize: '0.825rem',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>© {new Date().getFullYear()} TBN Treasure By Nuga. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with compassion <Heart size={14} style={{ fill: 'var(--color-gold)', color: 'var(--color-gold)' }} /> for communities across Nigeria.
          </div>
        </div>
      </div>
    </footer>
  );
}
