import { Link } from 'react-router-dom';

const takeaways = [
  {
    title: 'Variance as Asset',
    desc: 'Why variance is an asset, not an enemy — and how to plan with it instead of against it.',
  },
  {
    title: 'Value Optimization',
    desc: 'Multi-dimensional value optimization that moves beyond efficiency-first metrics.',
  },
  {
    title: 'Human-AI Collaboration',
    desc: 'Practical frameworks for human-AI collaboration inside WFM teams.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 40px' }}>
          <div className="mono" style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            SWPP Annual Conference &middot; April 27&ndash;29, 2026 &middot; Nashville, TN
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 'normal',
            lineHeight: 1.15,
            color: '#F0EBE0',
            maxWidth: 800,
            marginBottom: 24,
          }}>
            Adaptive: Building Workforce Systems for an{' '}
            <span style={{ color: '#C9A227', fontStyle: 'italic' }}>(Unpredictable)</span>{' '}
            Future
          </h1>

          <p style={{
            fontSize: 18,
            color: '#999',
            maxWidth: 640,
            marginBottom: 40,
            lineHeight: 1.5,
          }}>
            The five assumptions that built modern WFM are breaking. Here&rsquo;s what comes next.
          </p>

          <div className="mono" style={{
            fontSize: 12,
            color: '#666',
            marginBottom: 32,
          }}>
            Ted Lango, Kyodo Solutions &middot; Tuesday April 28 &middot; 9:15&ndash;10:30 AM
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/agenda" className="ghost-btn">View Full Agenda</Link>
            <a
              href="https://swpp.org/annual-conference/"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn ghost-btn--secondary"
            >
              Register for SWPP
            </a>
          </div>
        </div>
      </section>

      {/* Takeaways */}
      <section style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0,
        }}>
          {takeaways.map((t, i) => (
            <div key={i} style={{
              padding: '48px 32px',
              borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
            }}>
              <div className="mono" style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                color: '#C9A227',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontSize: 18,
                fontWeight: 'normal',
                color: '#F0EBE0',
                marginBottom: 10,
              }}>
                {t.title}
              </h3>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
