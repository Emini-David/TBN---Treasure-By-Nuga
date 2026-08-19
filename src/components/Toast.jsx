import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--color-forest)',
        color: 'var(--color-surface)',
        padding: '14px 28px',
        borderRadius: 'var(--radius-full)',
        fontSize: '0.9rem',
        fontWeight: 700,
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 3000,
        border: '1px solid var(--color-gold)',
        animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <CheckCircle2 size={18} style={{ color: 'var(--color-gold)' }} />
      <span>{message}</span>
    </div>
  );
}
