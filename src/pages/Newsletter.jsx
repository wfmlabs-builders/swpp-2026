const topics = [
  { num: 18, title: 'AI Voice Agents in the Contact Center', desc: 'What happens when the voice on the other end isn\'t human \u2014 and your WFM team still has to plan for it.' },
  { num: 17, title: 'The Forecasting Accuracy Trap', desc: 'Why obsessing over forecast accuracy might be costing you more than the variance itself.' },
  { num: 16, title: 'Back Office WFM: Finally Ready for Prime Time', desc: 'Task-based scheduling, backlog management, and why the back office is the next WFM frontier.' },
  { num: 15, title: 'Scheduling in the Hybrid Era', desc: 'Flex, remote, and hybrid \u2014 the scheduling assumptions that no longer hold.' },
  { num: 14, title: 'What Erlang Got Wrong (And Right)', desc: 'A practitioner\'s honest take on the model we all use but rarely question.' },
  { num: 13, title: 'The Case Against Adherence as a KPI', desc: 'Why measuring schedule adherence might be measuring the wrong thing entirely.' },
];

export default function Newsletter() {
  return (
    <div>
      {/* Header */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#C9A227',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            Newsletter
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 'normal',
            color: '#F0EBE0',
            marginBottom: 12,
          }}>
            Contact Center Compass
          </h1>

          <p style={{ fontSize: 17, color: '#999', maxWidth: 560, lineHeight: 1.6, marginBottom: 20 }}>
            WFM intelligence for operations leaders navigating the AI era.
          </p>

          <div className="mono" style={{
            display: 'flex',
            gap: 20,
            fontSize: 11,
            color: '#666',
            flexWrap: 'wrap',
            marginBottom: 36,
          }}>
            <span>Published on LinkedIn</span>
            <span style={{ color: '#444' }}>&middot;</span>
            <span>801 subscribers</span>
            <span style={{ color: '#444' }}>&middot;</span>
            <span>18 issues</span>
          </div>

          {/* Subscribe */}
          <div style={{
            padding: '32px',
            border: '1px solid var(--border)',
            borderRadius: 4,
            background: 'var(--surface)',
            marginBottom: 60,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 'normal', color: '#F0EBE0', marginBottom: 10 }}>
              Stay ahead of the curve
            </h3>
            <p style={{ fontSize: 14, color: '#888', marginBottom: 24, lineHeight: 1.5 }}>
              New issues monthly. Practical WFM strategy, not vendor marketing.
            </p>
            <a
              href="https://www.linkedin.com/newsletters/contact-center-compass-7288583905652207616/"
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-btn"
            >
              Subscribe on LinkedIn &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Recent Topics */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="mono" style={{
            fontSize: 10,
            letterSpacing: '0.2em',
            color: '#888',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}>
            Recent Topics
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 12,
          }}>
            {topics.map(t => (
              <div key={t.num} style={{
                padding: '20px',
                border: '1px solid var(--border)',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.015)',
              }}>
                <div className="mono" style={{
                  fontSize: 10,
                  color: '#C9A227',
                  marginBottom: 8,
                }}>
                  #{t.num}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 'normal', color: '#F0EBE0', marginBottom: 8 }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: 12, color: '#777', lineHeight: 1.5 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mono" style={{
            fontSize: 11,
            color: '#555',
            marginTop: 24,
            textAlign: 'center',
          }}>
            Issues 2&ndash;17 archived. New issues monthly.
          </div>
        </div>
      </section>
    </div>
  );
}
