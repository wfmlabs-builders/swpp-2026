import { Link } from 'react-router-dom';

const takeaways = [
  'Why the efficiency-first paradigm is becoming a liability',
  'How to treat variance as an asset in capacity planning',
  'What multi-dimensional value optimization means in practice',
  'The human-AI collaboration model for WFM teams',
];

export default function Session() {
  return (
    <div>
      {/* Session Header */}
      <section style={{
        borderBottom: '1px solid var(--border)',
        padding: '60px 0',
        background: 'linear-gradient(180deg, #13151F 0%, #0F1117 100%)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <span className="badge" style={{
              background: 'rgba(224, 92, 92, 0.15)',
              border: '1px solid rgba(224, 92, 92, 0.3)',
              color: '#E05C5C',
            }}>
              AI / ML
            </span>
            <span className="badge" style={{
              background: 'rgba(224, 92, 92, 0.08)',
              border: '1px solid rgba(224, 92, 92, 0.2)',
              color: '#E05C5C',
            }}>
              Level 4 &middot; Emerging
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 'normal',
            lineHeight: 1.2,
            color: '#F0EBE0',
            maxWidth: 700,
            marginBottom: 20,
          }}>
            Adaptive: Building Workforce Systems for an (Unpredictable) Future
          </h1>

          <div className="mono" style={{ fontSize: 13, color: '#888' }}>
            <span style={{ color: '#C9A227' }}>Ted Lango</span>, Kyodo Solutions
          </div>
          <div className="mono" style={{ fontSize: 12, color: '#666', marginTop: 6 }}>
            Tuesday, April 28 &middot; 9:15&ndash;10:30 AM
          </div>
        </div>
      </section>

      {/* The Premise */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            The Premise
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: '#CCC', fontSize: 16, lineHeight: 1.7 }}>
            <p>
              Modern workforce management was built on five assumptions: that demand is
              predictable, agents are interchangeable, efficiency is the primary goal,
              operations are stable, and human capability is static. All five are breaking.
            </p>
            <p>
              This session walks practitioners through the forces driving that change &mdash;
              from AI-driven automation to workforce fragmentation &mdash; and reframes variance
              not as an operational problem to be eliminated, but as a signal to be read.
            </p>
            <p>
              Attendees leave with a framework for multi-dimensional value optimization
              and a concrete picture of what human-AI collaboration looks like inside a
              next-generation WFM function.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-rule" style={{ maxWidth: 720, margin: '0 auto' }} />

      {/* Key Takeaways */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Key Takeaways
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {takeaways.map((t, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}>
                <span className="mono" style={{ fontSize: 11, color: '#C9A227', marginTop: 3, flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <span style={{ fontSize: 15, color: '#CCC', lineHeight: 1.5 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" style={{ maxWidth: 720, margin: '0 auto' }} />

      {/* About the Speaker */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            About the Speaker
          </div>

          <p style={{ fontSize: 15, color: '#CCC', lineHeight: 1.7, marginBottom: 24 }}>
            Ted Lango is founder of Kyodo Solutions and author of{' '}
            <em>Adaptive</em>, a workforce management framework for unpredictable
            environments. With 20+ years in WFM and operations, he publishes{' '}
            <em>Contact Center Compass</em> on LinkedIn (800+ subscribers) and consults
            with contact center leaders on next-generation workforce strategy.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="https://wfmlabs.org" target="_blank" rel="noopener noreferrer" className="ghost-btn" style={{ fontSize: 11 }}>
              Get the Book &rarr;
            </a>
            <a href="https://www.linkedin.com/newsletters/contact-center-compass/" target="_blank" rel="noopener noreferrer" className="ghost-btn ghost-btn--secondary" style={{ fontSize: 11 }}>
              Read the Newsletter &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '48px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontSize: 22, fontWeight: 'normal', color: '#F0EBE0', marginBottom: 8 }}>
            Join Ted at SWPP 2026
          </h2>
          <div className="mono" style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>
            April 27&ndash;29, 2026 &middot; Omni Nashville Hotel
          </div>
          <a
            href="https://swpp.org/annual-conference/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn"
          >
            Register Now &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
