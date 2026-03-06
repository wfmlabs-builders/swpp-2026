import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sessionDescs from '../data/descriptions';
import sessionSlots from '../data/slots';

const categories = [
  {
    id: 'foundations',
    label: 'Foundations',
    sublabel: 'Core WFM Mechanics',
    level: 1,
    color: '#2D6A4F',
    accent: '#52B788',
    icon: '\u25FC',
    sessions: [
      { id: 'f1', title: 'Forecasting Basics: Predicting for Months, Weeks, Days, and Intervals', speaker: 'Penny Reynolds', day: 'Mon' },
      { id: 'f2', title: 'Essentials of Staffing: Models and Calculations for Contact Center Staff', speaker: 'Penny Reynolds', day: 'Mon' },
      { id: 'f3', title: 'Staffing Tradeoffs: Achieving a Balance of Service, Occupancy, and Cost', speaker: 'Penny Reynolds', day: 'Mon' },
      { id: 'f4', title: 'Scheduling Strategies: Definitions and Decisions for Successful Schedules', speaker: 'Penny Reynolds', day: 'Tue' },
      { id: 'f5', title: 'Managing Schedule Adherence: Creating an In-Place and On-Time Culture', speaker: 'Penny Reynolds', day: 'Tue' },
      { id: 'f6', title: 'Managing Daily Service: An Intra-Day Plan to Keep Staffing and Service on Track', speaker: 'Penny Reynolds', day: 'Tue' },
      { id: 'f7', title: 'Signs of Success: Metrics and Measures of WFM Performance', speaker: 'Penny Reynolds', day: 'Tue' },
      { id: 'f8', title: 'WFM \u2013 The Foundation: Why Every Business Needs Strong Workforce Management', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Mon' },
      { id: 'f9', title: 'Workforce Management Certification Workshop (CWPP)', speaker: 'Holcombe & Baxter', day: 'Tue' },
      { id: 'f10', title: 'Workforce Management Certification Practice Bee', speaker: 'Holcombe & Baxter', day: 'Tue' },
    ],
  },
  {
    id: 'operational',
    label: 'Operational',
    sublabel: 'Applied & Expanded WFM',
    level: 2,
    color: '#1D3D6E',
    accent: '#4A90D9',
    icon: '\u25C6',
    sessions: [
      { id: 'o1', title: 'Implementing Back Office Short-Term Forecasting & Task-Based Scheduling', speaker: 'Denman & Castro, Progressive Insurance', day: 'Mon' },
      { id: 'o2', title: 'Back Office Task-Based Scheduling and Short-Term Forecasting', speaker: 'LaValliere & Castro, Progressive Insurance', day: 'Tue' },
      { id: 'o3', title: 'Beyond the Contact Center: Expanding WFM into Middle and Back Office', speaker: 'Nathan Stearns, NiCE', day: 'Mon' },
      { id: 'o4', title: 'To the Back Office and Beyond with Workforce Management', speaker: 'Panel: Dobson, Fetters, Lanier', day: 'Mon' },
      { id: 'o5', title: 'Spilling the Beans: Brewing the Perfect Shrinkage Strategy', speaker: 'Marshall Lee, Human Numbers', day: 'Tue' },
      { id: 'o6', title: 'WFM Live Lab: Fix Any Day in 30 Minutes', speaker: 'Kevin Zimmerman, Jim Moran & Associates', day: 'Tue' },
      { id: 'o7', title: 'Schedule Adherence Tips in a Virtual Environment', speaker: 'Stephanie Parker, Gant Travel', day: 'Wed' },
      { id: 'o8', title: 'Best Practices in Schedule Creativity', speaker: 'Panel: Holcombe, Thomas, Muzillo', day: 'Wed' },
      { id: 'o9', title: 'Build It Live \u2013 Capacity Planning: How to Learn to Love the Process', speaker: 'Adrien Seldon, Seldon Solutions', day: 'Tue' },
      { id: 'o10', title: 'Deploying Schedule Optimization Capabilities Using Third Party Software', speaker: 'Garza & Moseby, YouTube', day: 'Tue' },
      { id: 'o11', title: '60 Ideas in 60 Minutes \u2013 WFM Tips & Techniques', speaker: 'Peer Panel', day: 'Wed' },
      { id: 'o12', title: '60 Ideas in 60 Minutes \u2013 Making the Most of Your WFM Software', speaker: 'Vendor Panel', day: 'Wed' },
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics',
    sublabel: 'Modeling & Capacity Intelligence',
    level: 3,
    color: '#6B3A7D',
    accent: '#B07FCC',
    icon: '\u25B2',
    sessions: [
      { id: 'a1', title: 'Beyond the Basics \u2013 What-if Scenario Modeling', speaker: 'Alpern, Cinareo & Spurlock, Fabletics', day: 'Mon' },
      { id: 'a2', title: 'Using Your Capacity Planning Spreadsheets to Do Great What-Ifs', speaker: 'Ric & Chris Kosiba, Real Numbers', day: 'Mon' },
      { id: 'a3', title: 'Seven Tips and Tricks for Capacity Planning (And a Smidge of AI)', speaker: 'Kosiba & Kline, Real Numbers', day: 'Tue' },
      { id: 'a4', title: 'Leveraging Advanced Analytics & BI Tools in Workforce Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Tue' },
      { id: 'a5', title: 'Capacity Planning at RCI: Inbound, Outbound, and Blended Teams', speaker: 'Scott Morgan, RCI', day: 'Tue' },
      { id: 'a6', title: 'Bridging the BPO Visibility Gap: Leveraging WFM and Analytics', speaker: 'Coert & Macolor, Google', day: 'Wed' },
      { id: 'a7', title: 'Sharing Key Metrics for Continuous Improvement', speaker: 'Panel: Marcella, Liriano, Seldon', day: 'Tue' },
      { id: 'a8', title: 'Are We Measuring The Right Things?', speaker: 'Todd Hixson, Personify Health', day: 'Tue' },
      { id: 'a9', title: 'Determining the Best Measures of WFM Success', speaker: 'Panel: Hilliard, Dobson, Rhodes', day: 'Tue' },
    ],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    sublabel: 'Machine Learning & Emerging Tech',
    level: 4,
    color: '#7A2020',
    accent: '#E05C5C',
    icon: '\u25CF',
    sessions: [
      { id: 'ai1', title: 'Generative AI Effectiveness in Workforce Management', speaker: 'Joey Campbell, Google', day: 'Mon' },
      { id: 'ai2', title: 'Bringing Machine Learning to Life in Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Mon' },
      { id: 'ai3', title: 'Real-Time or Bust: Turning AI Hype into WFM ROI', speaker: 'Damon Spurlock, Fabletics', day: 'Mon' },
      { id: 'ai4', title: 'Agent Co-Pilot AI \u2013 Lessons Learned and Actualized Returns', speaker: 'Blanton & Wood, North', day: 'Mon' },
      { id: 'ai5', title: 'Precision Forecasting with Python Prophet: Hyperparameter Tuning', speaker: 'Hernandez & Macaspac, Barclays', day: 'Wed' },
      { id: 'ai6', title: 'Partnering with AI: The Next Evolution of Workforce Management', speaker: 'Troy Plott, NiCE', day: 'Tue' },
      { id: 'ai7', title: 'The Future is WFM: The Hybrid Workforce (AI + Humans)', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Tue' },
      { id: 'ai8', title: 'Curriculum-to-Cognition Apprenticeship Model', speaker: 'Donnelly & Hostetler, Home Depot', day: 'Tue' },
      { id: 'ai9', title: "YouTube's Support Operations Transformation: Agentic AI & Automated Planning", speaker: 'Decena & Wang, YouTube', day: 'Mon' },
      { id: 'ai10', title: 'Adaptive: Building Workforce Systems for an (Unpredictable) Future', speaker: 'Ted Lango, Kyodo Solutions', day: 'Tue', highlight: true, link: '/session/adaptive' },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy',
    sublabel: 'Leadership, Change & Org Design',
    level: 3,
    color: '#5C4A00',
    accent: '#C9A227',
    icon: '\u2605',
    sessions: [
      { id: 's1', title: 'Selling Workforce Topics to the Executive Level', speaker: 'Panel: Hovasse, Rivera, Osterman, Pierce', day: 'Mon' },
      { id: 's2', title: 'Strategic Partnership: WFM + HR + Operations', speaker: 'Kirwyn Adderley, Walgreens', day: 'Mon' },
      { id: 's3', title: 'Communicating WFM Across Your Organization', speaker: 'Panel: Persico, Krauth, Felice', day: 'Mon' },
      { id: 's4', title: 'From Chaos to Clarity: Building a Strategic Operations Team', speaker: 'Rafael Liriano, LanguageLine Solutions', day: 'Mon' },
      { id: 's5', title: 'Change Management Driven Collaboration (ADKAR Model)', speaker: 'Patricia Sinclair, Humana Military', day: 'Mon' },
      { id: 's6', title: 'The Art of the Merge: Integrating WFM into a Large Organization', speaker: 'West & Abugan, Hilton Grand Vacations', day: 'Tue' },
      { id: 's7', title: 'Building a Capacity Framework for Effective Stakeholder Support', speaker: 'Cessna & Janiga-Stoll, Northwestern Mutual', day: 'Mon' },
      { id: 's8', title: 'The Future Forum for Workforce Management', speaker: 'Panel: Graczyk, McFatridge', day: 'Mon' },
      { id: 's9', title: 'Breaking Down Silos', speaker: 'Panel: McGary, Parks, Tifft', day: 'Wed' },
      { id: 's10', title: 'Building & Evolving WFM', speaker: 'Lanier, CNA & Campbell, Raymond James', day: 'Wed' },
      { id: 's11', title: 'Ask the Workforce Wizard', speaker: 'Expert Panel', day: 'Tue' },
      { id: 's12', title: 'How WFM can Drive Performance and Productivity', speaker: 'Watkinson & Williams, Amplix', day: 'Tue' },
    ],
  },
  {
    id: 'people',
    label: 'People',
    sublabel: 'Culture, EX & Career',
    level: 2,
    color: '#2A4A5E',
    accent: '#5BA3C9',
    icon: '\u2666',
    sessions: [
      { id: 'p1', title: 'Fearless CX: Leading Through Change and Disengagement', speaker: 'Nate Brown, Metric Sherpa', day: 'Tue' },
      { id: 'p2', title: 'Moments That Matter: How WFM Decisions Can Prevent Agent Burnout', speaker: 'Gaffney & McCormick, Call Design', day: 'Tue' },
      { id: 'p3', title: 'Beyond the Metrics: Humanizing WFM and Tailoring to Your Industry', speaker: 'Shantae Williams, Ally Financial', day: 'Tue' },
      { id: 'p4', title: 'No Cap: Decoding the Multi-Gen Workforce for 2026 WFM', speaker: 'Marshall Lee, Human Numbers', day: 'Wed' },
      { id: 'p5', title: 'Be the Best WFM Leader for your Team', speaker: 'Panel: Harris, Hovasse, Davis', day: 'Tue' },
      { id: 'p6', title: 'How to Advance Your Career in WFM', speaker: 'Panel: Rhodes, McFatridge, Morrell', day: 'Wed' },
      { id: 'p7', title: 'On the Tightrope: Balancing Service Goals With Employee Development', speaker: 'Panel: Adderley, Persico, Graczyk', day: 'Wed' },
      { id: 'p8', title: 'Embracing Change', speaker: 'Jason Hilliard, Petsafe', day: 'Wed' },
      { id: 'p9', title: "Hey \u2014 We're Part of the Team, Too!", speaker: 'Todd Hixson, Personify Health', day: 'Wed' },
      { id: 'p10', title: 'Seasons of Change: Lessons Learned from Changes in Systems', speaker: 'Panel: Davis, Marcella, Taylor', day: 'Wed' },
    ],
  },
];

const levelLabels = { 1: 'Traditional', 2: 'Applied', 3: 'Advanced', 4: 'Emerging' };
const days = ['All', 'Mon', 'Tue', 'Wed'];
const dayLabels = { Mon: 'Monday, April 27', Tue: 'Tuesday, April 28', Wed: 'Wednesday, April 29' };
const dayOrder = { Mon: 0, Tue: 1, Wed: 2 };
const slotOrder = ['9:15-10:30', '9:15-12:00', '10:45-12:00', '1:30-2:45', '3:15-4:30'];

function sortSessions(sessions) {
  return [...sessions].sort((a, b) => {
    const da = dayOrder[a.day] ?? 9, db = dayOrder[b.day] ?? 9;
    if (da !== db) return da - db;
    const sa = slotOrder.indexOf(sessionSlots[a.id] || ''), sb = slotOrder.indexOf(sessionSlots[b.id] || '');
    return sa - sb;
  });
}

function SessionModal({ session, category, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#13151F',
          border: `1px solid ${category.accent}44`,
          borderRadius: 8,
          maxWidth: 560,
          width: '100%',
          maxHeight: '80vh',
          overflow: 'auto',
          padding: '32px',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            color: '#666',
            fontSize: 18,
            cursor: 'pointer',
            padding: 4,
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Category + Level badges */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          <span
            className="mono"
            style={{
              fontSize: 10,
              padding: '3px 10px',
              background: category.accent + '22',
              border: `1px solid ${category.accent}44`,
              borderRadius: 2,
              color: category.accent,
              letterSpacing: '0.1em',
            }}
          >
            {category.icon} {category.label}
          </span>
          <span
            className="mono"
            style={{
              fontSize: 10,
              padding: '3px 10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 2,
              color: '#888',
              letterSpacing: '0.1em',
            }}
          >
            L{category.level} &middot; {levelLabels[category.level]}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 20,
          fontWeight: 'normal',
          color: session.highlight ? '#C9A227' : '#F0EBE0',
          lineHeight: 1.3,
          marginBottom: 16,
          paddingRight: 24,
        }}>
          {session.title}
        </h2>

        {/* Speaker + Day + Time */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: 12, color: category.accent }}>
            {session.speaker}
          </span>
          <span className="mono" style={{ fontSize: 11, color: '#666' }}>
            {dayLabels[session.day] || session.day}
            {session.id && sessionSlots[session.id] ? ` \u00b7 ${sessionSlots[session.id]}` : ''}
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

        {/* Description */}
        <p style={{
          fontSize: 14,
          color: '#BBB',
          lineHeight: 1.7,
          marginBottom: session.link ? 24 : 0,
        }}>
          {session.id ? sessionDescs[session.id] : 'No description available.'}
        </p>

        {/* Link to full session page (only for Ted's session) */}
        {session.link && (
          <Link
            to={session.link}
            onClick={onClose}
            className="ghost-btn"
            style={{ fontSize: 11 }}
          >
            View Full Session &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Agenda() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalSession, setModalSession] = useState(null);
  const [modalCategory, setModalCategory] = useState(null);
  const [dayFilter, setDayFilter] = useState('All');

  const totalSessions = categories.reduce((sum, c) => sum + c.sessions.length, 0);

  const openModal = (session, category) => {
    setModalSession(session);
    setModalCategory(category);
  };

  const closeModal = () => {
    setModalSession(null);
    setModalCategory(null);
  };

  return (
    <div>
      {/* Modal */}
      {modalSession && modalCategory && (
        <SessionModal
          session={modalSession}
          category={modalCategory}
          onClose={closeModal}
        />
      )}

      {/* Header */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '36px 40px 28px',
        background: 'linear-gradient(180deg, #13151F 0%, #0F1117 100%)',
      }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 16,
          }}>
            <div>
              <div className="mono" style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                color: '#888',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                SWPP Annual Conference &middot; April 27&ndash;29, 2026
              </div>
              <h1 style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 'normal',
                color: '#F0EBE0',
                letterSpacing: '-0.5px',
              }}>
                Session Category Matrix
              </h1>
              <div className="mono" style={{ fontSize: 13, color: '#777', marginTop: 6 }}>
                {totalSessions} sessions &middot; 6 categories &middot; Traditional &rarr; AI/ML spectrum
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {days.map(d => (
                <button
                  key={d}
                  onClick={() => setDayFilter(d)}
                  className="mono"
                  style={{
                    padding: '4px 14px',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderRadius: 2,
                    background: dayFilter === d ? 'rgba(201,162,39,0.13)' : 'transparent',
                    border: `1px solid ${dayFilter === d ? '#C9A227' : 'rgba(255,255,255,0.12)'}`,
                    color: dayFilter === d ? '#C9A227' : '#888',
                    cursor: 'pointer',
                  }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        padding: '32px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 20,
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        {categories.map(cat => {
          const filteredSessions = dayFilter === 'All'
            ? cat.sessions
            : cat.sessions.filter(s => s.day === dayFilter);
          if (filteredSessions.length === 0) return null;
          const isActive = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(isActive ? null : cat.id)}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${cat.color}22 0%, ${cat.color}11 100%)`
                  : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isActive ? cat.accent + '55' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 6,
                padding: '20px 22px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 14,
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: cat.accent, fontSize: 14 }}>{cat.icon}</span>
                    <span style={{ fontSize: 16, fontWeight: 'bold', color: '#F0EBE0' }}>
                      {cat.label}
                    </span>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: '#888', marginTop: 3 }}>
                    {cat.sublabel}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    className="mono"
                    style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: 2,
                      background: cat.accent + '22',
                      border: `1px solid ${cat.accent}44`,
                      fontSize: 10,
                      color: cat.accent,
                      letterSpacing: '0.1em',
                      marginBottom: 4,
                    }}
                  >
                    L{cat.level} &middot; {levelLabels[cat.level]}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: '#666' }}>
                    {filteredSessions.length} sessions
                  </div>
                </div>
              </div>

              {/* Level bar */}
              <div style={{
                height: 3,
                background: 'rgba(255,255,255,0.07)',
                borderRadius: 2,
                marginBottom: 16,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${(cat.level / 4) * 100}%`,
                  background: `linear-gradient(90deg, ${cat.color}, ${cat.accent})`,
                  borderRadius: 2,
                }} />
              </div>

              {/* Sessions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {sortSessions(filteredSessions).map((s, i) => (
                  <div
                    key={i}
                    onClick={e => {
                      e.stopPropagation();
                      openModal(s, cat);
                    }}
                    style={{
                      padding: '8px 10px',
                      borderRadius: 3,
                      background: s.highlight
                        ? 'rgba(201,162,39,0.1)'
                        : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${
                        s.highlight
                          ? 'rgba(201,162,39,0.3)'
                          : 'rgba(255,255,255,0.05)'
                      }`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseOver={e => {
                      if (!s.highlight) {
                        e.currentTarget.style.background = cat.accent + '12';
                        e.currentTarget.style.borderColor = cat.accent + '33';
                      }
                    }}
                    onMouseOut={e => {
                      if (!s.highlight) {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      }
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 8,
                    }}>
                      <div style={{
                        fontSize: 11.5,
                        color: s.highlight ? '#C9A227' : '#CCC',
                        lineHeight: 1.4,
                        fontWeight: s.highlight ? 'bold' : 'normal',
                      }}>
                        {s.title}
                      </div>
                      <span className="mono" style={{
                        fontSize: 9,
                        color: '#555',
                        flexShrink: 0,
                        marginTop: 2,
                        whiteSpace: 'nowrap',
                      }}>
                        {s.day} {sessionSlots[s.id] || ''}
                      </span>
                    </div>
                    <div style={{
                      marginTop: 4,
                      display: 'flex',
                      gap: 8,
                      alignItems: 'center',
                    }}>
                      <span className="mono" style={{ fontSize: 10, color: '#666' }}>
                        {s.speaker}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Build My Agenda CTA */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '24px 40px',
        display: 'flex', justifyContent: 'center',
      }}>
        <Link to="/planner" style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '16px 28px',
          background: 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.2)',
          borderRadius: 6, textDecoration: 'none', transition: 'all 0.2s',
        }}>
          <span style={{
            width: 28, height: 28, borderRadius: '50%',
            background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, color: '#C9A227',
          }}>W</span>
          <div>
            <div style={{ fontSize: 14, color: '#F0EBE0' }}>Build My Agenda</div>
            <div className="mono" style={{ fontSize: 10, color: '#888' }}>
              AI-powered personal schedule builder
            </div>
          </div>
          <span style={{ color: '#C9A227', marginLeft: 8 }}>&rarr;</span>
        </Link>
      </div>

      {/* Footnote */}
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 40px 48px',
      }}>
        <div className="mono" style={{
          fontSize: 10,
          color: '#555',
          lineHeight: 1.6,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 16,
        }}>
          * This is not an official SWPP document. Session categorization, level assignments, and scheduling details were generated by agentic AI tools built at{' '}
          <a href="https://wfmlabs.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A227' }}>
            WFM Labs
          </a>
          . The official conference agenda is subject to change. For the most current and authoritative session information, please visit the{' '}
          <a href="https://swpp.org/annual-conference/swpp-annual-conference-agenda/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A227' }}>
            official SWPP Annual Conference Agenda
          </a>.
        </div>
      </div>
    </div>
  );
}
