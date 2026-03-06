import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/agenda', label: 'Agenda' },
  { to: '/session/adaptive', label: 'My Session' },
  { to: '/about', label: 'About' },
  { to: '/newsletter', label: 'Newsletter' },
  { to: '/book', label: 'Book' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(15, 17, 23, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#C9A227',
            border: '1.5px solid #C9A227',
            padding: '2px 7px',
            lineHeight: 1.2,
          }}>TL</span>
          <span className="mono" style={{ fontSize: 11, color: '#888', letterSpacing: '0.05em' }}>
            Ted Lango <span style={{ color: '#555' }}>·</span> SWPP 2026
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div className="nav-links" style={{
            display: 'flex',
            gap: 20,
            alignItems: 'center',
          }}>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className="mono"
                style={{
                  fontSize: 11,
                  color: location.pathname === l.to ? '#C9A227' : '#888',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href="https://swpp.org/annual-conference/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn nav-register"
            style={{ padding: '6px 16px', fontSize: 10 }}
          >
            Register
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#888',
              fontSize: 20,
              cursor: 'pointer',
              padding: 4,
            }}
            aria-label="Menu"
          >
            {open ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="mono"
              onClick={() => setOpen(false)}
              style={{
                fontSize: 12,
                color: location.pathname === l.to ? '#C9A227' : '#888',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://swpp.org/annual-conference/"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn"
            style={{ textAlign: 'center', fontSize: 10, padding: '8px 16px' }}
          >
            Register
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-register { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
