import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 0 24px',
      marginTop: 80,
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 32,
        }}>
          <div className="mono" style={{ fontSize: 11, color: '#666' }}>
            &copy; 2026 Ted Lango / Kyodo Solutions
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="https://swpp.org/annual-conference/" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 11, color: '#888', textDecoration: 'none' }}>
              SWPP Registration
            </a>
            <a href="https://swpp.org/annual-conference/swpp-annual-conference-agenda/" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 11, color: '#888', textDecoration: 'none' }}>
              Agenda PDF
            </a>
            <Link to="/about" className="mono" style={{ fontSize: 11, color: '#888', textDecoration: 'none' }}>
              Contact
            </Link>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://www.linkedin.com/in/tedlango/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: 14, textDecoration: 'none' }} title="LinkedIn">
              in
            </a>
            <a href="https://www.linkedin.com/newsletters/contact-center-compass-7288583905652207616/" target="_blank" rel="noopener noreferrer" style={{ color: '#666', fontSize: 14, textDecoration: 'none' }} title="Newsletter">
              &#9993;
            </a>
          </div>
        </div>
        <div className="mono" style={{
          fontSize: 10,
          color: '#444',
          textAlign: 'center',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}>
          SWPP Annual Conference &middot; April 27&ndash;29, 2026 &middot; Nashville, TN
        </div>
      </div>
    </footer>
  );
}
