import { Link } from 'react-router-dom';

const themes = [
  'Variance as signal',
  'Multi-skill optimization',
  'Human-AI teaming',
  'Beyond efficiency-first metrics',
];

export default function Book() {
  return (
    <div>
      {/* Book Section */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 320px) 1fr',
            gap: 60,
            alignItems: 'start',
          }}>
            {/* Book Cover */}
            <div style={{
              aspectRatio: '3/4',
              background: 'linear-gradient(135deg, #13151F 0%, #1a1c28 50%, #13151F 100%)',
              border: '1px solid rgba(201, 162, 39, 0.2)',
              borderRadius: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px 32px',
              textAlign: 'center',
            }}>
              <div className="mono" style={{
                fontSize: 9,
                letterSpacing: '0.3em',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>
                Ted Lango
              </div>
              <h2 style={{
                fontSize: 32,
                fontWeight: 'normal',
                color: '#C9A227',
                lineHeight: 1.2,
                marginBottom: 16,
              }}>
                Adaptive
              </h2>
              <div style={{
                width: 40,
                height: 1,
                background: 'rgba(201,162,39,0.3)',
                marginBottom: 16,
              }} />
              <p style={{
                fontSize: 13,
                color: '#999',
                lineHeight: 1.5,
                maxWidth: 200,
              }}>
                Building Workforce Systems for an (Unpredictable) Future
              </p>
            </div>

            {/* Book Info */}
            <div>
              <div className="mono" style={{
                fontSize: 10,
                letterSpacing: '0.2em',
                color: '#C9A227',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                The Book
              </div>

              <h1 style={{
                fontSize: 'clamp(24px, 3vw, 34px)',
                fontWeight: 'normal',
                color: '#F0EBE0',
                lineHeight: 1.3,
                marginBottom: 8,
              }}>
                Adaptive
              </h1>

              <p className="mono" style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>
                by Ted Lango
              </p>

              <p style={{
                fontSize: 16,
                color: '#C9A227',
                fontStyle: 'italic',
                marginBottom: 24,
                lineHeight: 1.5,
              }}>
                The WFM framework built for variance, not against it.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                color: '#CCC',
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 32,
              }}>
                <p>
                  <em>Adaptive</em> challenges the five assumptions that have governed workforce
                  management for decades. Built on operations research and probabilistic
                  modeling, it offers practitioners a framework for planning in conditions
                  of genuine uncertainty. Required reading for WFM leaders operating in
                  the AI era.
                </p>
              </div>

              <div className="mono" style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Key Themes
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
                {themes.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ color: '#C9A227', fontSize: 8 }}>&bull;</span>
                    <span style={{ fontSize: 14, color: '#CCC' }}>{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="https://wfmlabs.org" target="_blank" rel="noopener noreferrer" className="ghost-btn">
                  Get the Book &rarr;
                </a>
                <Link to="/session/adaptive" className="ghost-btn ghost-btn--secondary">
                  Hear Ted at SWPP &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '56px 0',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#F0EBE0',
            lineHeight: 1.5,
            fontStyle: 'italic',
            marginBottom: 20,
          }}>
            &ldquo;The five assumptions that built modern workforce management are breaking.
            This is what comes next.&rdquo;
          </p>
          <div className="mono" style={{ fontSize: 12, color: '#C9A227' }}>
            &mdash; Ted Lango, <em>Adaptive</em>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
