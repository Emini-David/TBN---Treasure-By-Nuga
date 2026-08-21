import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onDonateClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '12px 0' : '20px 0',
        backgroundColor: scrolled ? 'rgba(250, 248, 245, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(13, 75, 49, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(13, 75, 49, 0.04)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src="/TBN-PIX/TBN.png"
            alt="TBN Logo"
            style={{
              width: scrolled ? '42px' : '48px',
              height: scrolled ? '42px' : '48px',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(13, 75, 49, 0.15)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-forest)', lineHeight: 1 }}>
              TBN
            </span>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', marginTop: '2px' }}>
              Treasure By Nuga
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--color-forest)',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.25s ease',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            onClick={onDonateClick}
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.85rem', borderRadius: 'var(--radius-full)' }}
          >
            <Heart size={15} style={{ fill: 'currentColor' }} />
            Donate Now
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'none',
            padding: '8px',
            color: 'var(--color-forest)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '70px',
            backgroundColor: 'var(--color-canvas)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            padding: '32px 24px',
            gap: '24px',
            borderTop: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-xl)',
            animation: 'fadeIn 0.3s ease',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--color-forest)',
                padding: '12px 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {link.name}
              <ArrowUpRight size={18} opacity={0.6} />
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => {
              handleLinkClick();
              if (onDonateClick) onDonateClick();
            }}
            className="btn btn-primary"
            style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
          >
            <Heart size={18} style={{ fill: 'currentColor' }} />
            Donate Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

