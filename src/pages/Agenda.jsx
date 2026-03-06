import { useState } from 'react';

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
      { title: 'Forecasting Basics: Predicting for Months, Weeks, Days, and Intervals', speaker: 'Penny Reynolds', day: 'Mon' },
      { title: 'Essentials of Staffing: Models and Calculations for Contact Center Staff', speaker: 'Penny Reynolds', day: 'Mon' },
      { title: 'Staffing Tradeoffs: Achieving a Balance of Service, Occupancy, and Cost', speaker: 'Penny Reynolds', day: 'Mon' },
      { title: 'Scheduling Strategies: Definitions and Decisions for Successful Schedules', speaker: 'Penny Reynolds', day: 'Tue' },
      { title: 'Managing Schedule Adherence: Creating an In-Place and On-Time Culture', speaker: 'Penny Reynolds', day: 'Tue' },
      { title: 'Managing Daily Service: An Intra-Day Plan to Keep Staffing and Service on Track', speaker: 'Penny Reynolds', day: 'Tue' },
      { title: 'Signs of Success: Metrics and Measures of WFM Performance', speaker: 'Penny Reynolds', day: 'Tue' },
      { title: 'WFM \u2013 The Foundation: Why Every Business Needs Strong Workforce Management', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Mon' },
      { title: 'Workforce Management Certification Workshop (CWPP)', speaker: 'Holcombe & Baxter', day: 'Tue' },
      { title: 'Workforce Management Certification Practice Bee', speaker: 'Holcombe & Baxter', day: 'Tue' },
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
      { title: 'Implementing Back Office Short-Term Forecasting & Task-Based Scheduling', speaker: 'Denman & Castro, Progressive Insurance', day: 'Mon' },
      { title: 'Back Office Task-Based Scheduling and Short-Term Forecasting', speaker: 'LaValliere & Castro, Progressive Insurance', day: 'Tue' },
      { title: 'Beyond the Contact Center: Expanding WFM into Middle and Back Office', speaker: 'Nathan Stearns, NiCE', day: 'Mon' },
      { title: 'To the Back Office and Beyond with Workforce Management', speaker: 'Panel: Dobson, Fetters, Lanier', day: 'Mon' },
      { title: 'Spilling the Beans: Brewing the Perfect Shrinkage Strategy', speaker: 'Marshall Lee, Human Numbers', day: 'Tue' },
      { title: 'WFM Live Lab: Fix Any Day in 30 Minutes', speaker: 'Kevin Zimmerman, Jim Moran & Associates', day: 'Tue' },
      { title: 'Schedule Adherence Tips in a Virtual Environment', speaker: 'Stephanie Parker, Gant Travel', day: 'Wed' },
      { title: 'Best Practices in Schedule Creativity', speaker: 'Panel: Holcombe, Thomas, Muzillo', day: 'Wed' },
      { title: 'Build It Live \u2013 Capacity Planning: How to Learn to Love the Process', speaker: 'Adrien Seldon, Seldon Solutions', day: 'Tue' },
      { title: 'Deploying Schedule Optimization Capabilities Using Third Party Software', speaker: 'Garza & Moseby, YouTube', day: 'Tue' },
      { title: '60 Ideas in 60 Minutes \u2013 WFM Tips & Techniques', speaker: 'Peer Panel', day: 'Wed' },
      { title: '60 Ideas in 60 Minutes \u2013 Making the Most of Your WFM Software', speaker: 'Vendor Panel', day: 'Wed' },
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
      { title: 'Beyond the Basics \u2013 What-if Scenario Modeling', speaker: 'Alpern, Cinareo & Spurlock, Fabletics', day: 'Mon' },
      { title: 'Using Your Capacity Planning Spreadsheets to Do Great What-Ifs', speaker: 'Ric & Chris Kosiba, Real Numbers', day: 'Mon' },
      { title: 'Seven Tips and Tricks for Capacity Planning (And a Smidge of AI)', speaker: 'Kosiba & Kline, Real Numbers', day: 'Tue' },
      { title: 'Leveraging Advanced Analytics & BI Tools in Workforce Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Tue' },
      { title: 'Capacity Planning at RCI: Inbound, Outbound, and Blended Teams', speaker: 'Scott Morgan, RCI', day: 'Tue' },
      { title: 'Bridging the BPO Visibility Gap: Leveraging WFM and Analytics', speaker: 'Coert & Macolor, Google', day: 'Wed' },
      { title: 'Sharing Key Metrics for Continuous Improvement', speaker: 'Panel: Marcella, Liriano, Seldon', day: 'Tue' },
      { title: 'Are We Measuring The Right Things?', speaker: 'Todd Hixson, Personify Health', day: 'Tue' },
      { title: 'Determining the Best Measures of WFM Success', speaker: 'Panel: Hilliard, Dobson, Rhodes', day: 'Tue' },
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
      { title: 'Generative AI Effectiveness in Workforce Management', speaker: 'Joey Campbell, Google', day: 'Mon' },
      { title: 'Bringing Machine Learning to Life in Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Mon' },
      { title: 'Real-Time or Bust: Turning AI Hype into WFM ROI', speaker: 'Damon Spurlock, Fabletics', day: 'Mon' },
      { title: 'Agent Co-Pilot AI \u2013 Lessons Learned and Actualized Returns', speaker: 'Blanton & Wood, North', day: 'Mon' },
      { title: 'Precision Forecasting with Python Prophet: Hyperparameter Tuning', speaker: 'Hernandez & Macaspac, Barclays', day: 'Wed' },
      { title: 'Partnering with AI: The Next Evolution of Workforce Management', speaker: 'Troy Plott, NiCE', day: 'Tue' },
      { title: 'The Future is WFM: The Hybrid Workforce (AI + Humans)', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Tue' },
      { title: 'Curriculum-to-Cognition Apprenticeship Model', speaker: 'Donnelly & Hostetler, Home Depot', day: 'Tue' },
      { title: "YouTube's Support Operations Transformation: Agentic AI & Automated Planning", speaker: 'Decena & Wang, YouTube', day: 'Mon' },
      { title: 'Adaptive: Building Workforce Systems for an (Unpredictable) Future', speaker: 'Ted Lango, Kyodo Solutions', day: 'Tue', highlight: true },
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
      { title: 'Selling Workforce Topics to the Executive Level', speaker: 'Panel: Hovasse, Rivera, Osterman, Pierce', day: 'Mon' },
      { title: 'Strategic Partnership: WFM + HR + Operations', speaker: 'Kirwyn Adderley, Walgreens', day: 'Mon' },
      { title: 'Communicating WFM Across Your Organization', speaker: 'Panel: Persico, Krauth, Felice', day: 'Mon' },
      { title: 'From Chaos to Clarity: Building a Strategic Operations Team', speaker: 'Rafael Liriano, LanguageLine Solutions', day: 'Mon' },
      { title: 'Change Management Driven Collaboration (ADKAR Model)', speaker: 'Patricia Sinclair, Humana Military', day: 'Mon' },
      { title: 'The Art of the Merge: Integrating WFM into a Large Organization', speaker: 'West & Abugan, Hilton Grand Vacations', day: 'Tue' },
      { title: 'Building a Capacity Framework for Effective Stakeholder Support', speaker: 'Cessna & Janiga-Stoll, Northwestern Mutual', day: 'Mon' },
      { title: 'The Future Forum for Workforce Management', speaker: 'Panel: Graczyk, McFatridge', day: 'Mon' },
      { title: 'Breaking Down Silos', speaker: 'Panel: McGary, Parks, Tifft', day: 'Wed' },
      { title: 'Building & Evolving WFM', speaker: 'Lanier, CNA & Campbell, Raymond James', day: 'Wed' },
      { title: 'Ask the Workforce Wizard', speaker: 'Expert Panel', day: 'Tue' },
      { title: 'How WFM can Drive Performance and Productivity', speaker: 'Watkinson & Williams, Amplix', day: 'Tue' },
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
      { title: 'Fearless CX: Leading Through Change and Disengagement', speaker: 'Nate Brown, Metric Sherpa', day: 'Tue' },
      { title: 'Moments That Matter: How WFM Decisions Can Prevent Agent Burnout', speaker: 'Gaffney & McCormick, Call Design', day: 'Tue' },
      { title: 'Beyond the Metrics: Humanizing WFM and Tailoring to Your Industry', speaker: 'Shantae Williams, Ally Financial', day: 'Tue' },
      { title: 'No Cap: Decoding the Multi-Gen Workforce for 2026 WFM', speaker: 'Marshall Lee, Human Numbers', day: 'Wed' },
      { title: 'Be the Best WFM Leader for your Team', speaker: 'Panel: Harris, Hovasse, Davis', day: 'Tue' },
      { title: 'How to Advance Your Career in WFM', speaker: 'Panel: Rhodes, McFatridge, Morrell', day: 'Wed' },
      { title: 'On the Tightrope: Balancing Service Goals With Employee Development', speaker: 'Panel: Adderley, Persico, Graczyk', day: 'Wed' },
      { title: 'Embracing Change', speaker: 'Jason Hilliard, Petsafe', day: 'Wed' },
      { title: "Hey \u2014 We're Part of the Team, Too!", speaker: 'Todd Hixson, Personify Health', day: 'Wed' },
      { title: 'Seasons of Change: Lessons Learned from Changes in Systems', speaker: 'Panel: Davis, Marcella, Taylor', day: 'Wed' },
    ],
  },
];

const levelLabels = { 1: 'Traditional', 2: 'Applied', 3: 'Advanced', 4: 'Emerging' };
const days = ['All', 'Mon', 'Tue', 'Wed'];

export default function Agenda() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSession, setActiveSession] = useState(null);
  const [dayFilter, setDayFilter] = useState('All');

  const totalSessions = categories.reduce((sum, c) => sum + c.sessions.length, 0);

  return (
    <div>
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
                Session Sophistication Matrix
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
                {filteredSessions.map((s, i) => {
                  const key = `${cat.id}-${i}`;
                  const isSessionActive = activeSession === key;
                  return (
                    <div
                      key={i}
                      onClick={e => {
                        e.stopPropagation();
                        setActiveSession(isSessionActive ? null : key);
                      }}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 3,
                        background: s.highlight
                          ? 'rgba(201,162,39,0.1)'
                          : isSessionActive
                            ? cat.accent + '18'
                            : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${
                          s.highlight
                            ? 'rgba(201,162,39,0.3)'
                            : isSessionActive
                              ? cat.accent + '44'
                              : 'rgba(255,255,255,0.05)'
                        }`,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{
                        fontSize: 11.5,
                        color: s.highlight ? '#C9A227' : isSessionActive ? '#F0EBE0' : '#CCC',
                        lineHeight: 1.4,
                        fontWeight: s.highlight ? 'bold' : 'normal',
                      }}>
                        {s.title}
                      </div>
                      {(isSessionActive || s.highlight) && (
                        <div style={{
                          marginTop: 6,
                          display: 'flex',
                          gap: 8,
                          alignItems: 'center',
                        }}>
                          <span className="mono" style={{ fontSize: 10, color: cat.accent }}>
                            &darr;
                          </span>
                          <span className="mono" style={{ fontSize: 10, color: '#999' }}>
                            {s.speaker}
                          </span>
                          <span
                            className="mono"
                            style={{
                              fontSize: 9,
                              padding: '1px 6px',
                              background: cat.accent + '22',
                              border: `1px solid ${cat.accent}33`,
                              borderRadius: 2,
                              color: cat.accent,
                            }}
                          >
                            {s.day}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
