const credentials = [
  '20+ Years WFM',
  'Author: Adaptive',
  '801 Newsletter Subscribers',
  'SWPP Speaker 2026',
];

const services = [
  {
    title: 'WFM Assessment & Transformation',
    desc: 'End-to-end evaluation of workforce management maturity with actionable roadmaps for operational improvement.',
  },
  {
    title: 'Capacity Planning Modernization',
    desc: 'Move beyond Erlang-era planning to multi-dimensional value optimization and probabilistic modeling.',
  },
  {
    title: 'AI Integration Strategy',
    desc: 'Strategic frameworks for human-AI workforce design that deliver measurable outcomes, not vendor demos.',
  },
];

export default function About() {
  return (
    <div>
      {/* Ted Lango */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            About
          </div>

          <h1 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 'normal',
            color: '#F0EBE0',
            lineHeight: 1.3,
            marginBottom: 32,
          }}>
            Contact Center Strategist. Author. WFM Practitioner.
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, color: '#CCC', fontSize: 15, lineHeight: 1.7 }}>
            <p>
              Ted Lango has spent 20+ years in workforce management and contact center
              operations, from front-line analyst to strategic advisor. His career spans
              enterprise WFM transformation, capacity planning modernization, and the
              emerging intersection of AI and workforce design.
            </p>
            <p>
              He is the author of <em>Adaptive: Building Workforce Systems for an
              (Unpredictable) Future</em>, a framework that challenges the five assumptions
              governing traditional WFM. The book draws on operations research, probabilistic
              modeling, and real-world implementation experience.
            </p>
            <p>
              As founder of Kyodo Solutions, Ted consults with contact center leaders on
              next-generation workforce strategy. He publishes{' '}
              <em>Contact Center Compass</em>, a LinkedIn newsletter with 801 subscribers
              covering WFM intelligence for operations leaders navigating the AI era.
              Based in Miami.
            </p>
          </div>

          {/* Credential strip */}
          <div style={{
            display: 'flex',
            gap: 0,
            marginTop: 40,
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
          }}>
            {credentials.map((c, i) => (
              <div key={i} className="mono" style={{
                flex: '1 1 auto',
                padding: '14px 20px',
                fontSize: 11,
                color: '#888',
                letterSpacing: '0.05em',
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
                textAlign: 'center',
                minWidth: 160,
              }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" style={{ maxWidth: 800, margin: '0 auto' }} />

      {/* Kyodo Solutions */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Kyodo Solutions
          </div>

          <h2 style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 'normal',
            color: '#F0EBE0',
            marginBottom: 16,
          }}>
            Workforce Strategy for the Adaptive Era
          </h2>

          <p style={{ fontSize: 15, color: '#999', lineHeight: 1.7, marginBottom: 40 }}>
            Boutique consulting focused on WFM transformation, capacity planning
            modernization, and human-AI workforce design. We help contact center
            leaders move from efficiency-first operations to value-optimized systems.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}>
            {services.map((s, i) => (
              <div key={i} style={{
                padding: '24px',
                border: '1px solid var(--border)',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.015)',
              }}>
                <div className="mono" style={{
                  fontSize: 10,
                  color: '#C9A227',
                  letterSpacing: '0.1em',
                  marginBottom: 10,
                }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 'normal', color: '#F0EBE0', marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <a href="mailto:ted@kyodosolutions.com" className="ghost-btn">
              Work With Ted &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
