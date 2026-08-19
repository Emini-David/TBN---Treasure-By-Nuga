import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Is my donation tax-deductible?',
      a: 'Depending on your jurisdiction and financial filing status, contributions to TBN qualify for non-profit tax exemptions. Official digital receipts and donation certificates are issued upon request.',
    },
    {
      q: 'How is my donation allocated?',
      a: 'Funds are directly allocated to our core program areas — education support, healthcare outreach, youth empowerment, food relief, women empowerment, and community development. Detailed financial breakdowns are published in our annual reports.',
    },
    {
      q: 'Can I volunteer remotely?',
      a: 'Yes! We actively welcome remote volunteers for digital media, graphic design, content writing, campaign strategy, research, and grant writing alongside our on-ground execution teams.',
    },
    {
      q: 'Do you publish transparent impact reports?',
      a: 'Absolutely. Annual impact reports covering total beneficiaries reached, project expenditures, field milestones, and partner acknowledgments are published transparently on our portal.',
    },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <HelpCircle size={14} />
            FAQ
          </span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about TBN outreach, funding transparency, and volunteer participation.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--color-forest)',
                    backgroundColor: isOpen ? 'var(--color-gold-pale)' : 'transparent',
                    transition: 'background-color 0.25s ease',
                  }}
                >
                  <span>{item.q}</span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--color-gold-deep)',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 24px 24px',
                      color: 'var(--color-ink-muted)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid var(--color-border-subtle)',
                      backgroundColor: 'var(--color-surface)',
                      animation: 'fadeIn 0.3s ease',
                    }}
                  >
                    <p style={{ marginTop: '16px' }}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
