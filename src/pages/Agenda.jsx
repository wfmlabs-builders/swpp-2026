import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      { title: 'Forecasting Basics: Predicting for Months, Weeks, Days, and Intervals', speaker: 'Penny Reynolds', day: 'Mon', desc: 'A comprehensive look at the forecasting process from long-range annual projections to short-term interval forecasts. Learn the methods, math, and best practices behind accurate demand prediction.' },
      { title: 'Essentials of Staffing: Models and Calculations for Contact Center Staff', speaker: 'Penny Reynolds', day: 'Mon', desc: 'Understand the core staffing models \u2014 Erlang C, simulation, and their variations \u2014 and how to apply them to calculate base staff requirements for any contact center operation.' },
      { title: 'Staffing Tradeoffs: Achieving a Balance of Service, Occupancy, and Cost', speaker: 'Penny Reynolds', day: 'Mon', desc: 'Explore the inverse relationship between service level and occupancy, and learn how to find the right balance point that meets both customer expectations and budget constraints.' },
      { title: 'Scheduling Strategies: Definitions and Decisions for Successful Schedules', speaker: 'Penny Reynolds', day: 'Tue', desc: 'From shift definitions to schedule generation strategies, this session covers the decisions that drive effective scheduling and how to align schedules with staffing requirements.' },
      { title: 'Managing Schedule Adherence: Creating an In-Place and On-Time Culture', speaker: 'Penny Reynolds', day: 'Tue', desc: 'Practical strategies for measuring, managing, and improving schedule adherence. Learn how to build an accountability culture without micromanaging your workforce.' },
      { title: 'Managing Daily Service: An Intra-Day Plan to Keep Staffing and Service on Track', speaker: 'Penny Reynolds', day: 'Tue', desc: 'Real-time management tactics for when the day doesn\u2019t go as planned. Learn the triggers, responses, and escalation paths that keep service levels on target.' },
      { title: 'Signs of Success: Metrics and Measures of WFM Performance', speaker: 'Penny Reynolds', day: 'Tue', desc: 'Which metrics actually matter for WFM success? This session separates the signal from the noise, covering forecast accuracy, schedule efficiency, and the KPIs that drive operational performance.' },
      { title: 'WFM \u2013 The Foundation: Why Every Business Needs Strong Workforce Management', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Mon', desc: 'A compelling case for why WFM is the operational backbone of any customer-facing organization. Learn how to position WFM as a strategic function, not just a scheduling tool.' },
      { title: 'Workforce Management Certification Workshop (CWPP)', speaker: 'Holcombe & Baxter', day: 'Tue', desc: 'Intensive preparation workshop for the SWPP Certified Workforce Planning Professional (CWPP) certification. Covers all exam domains with practice questions and expert guidance.' },
      { title: 'Workforce Management Certification Practice Bee', speaker: 'Holcombe & Baxter', day: 'Tue', desc: 'Interactive quiz-style practice session for CWPP certification candidates. Test your knowledge in a fun, competitive format and identify areas for further study.' },
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
      { title: 'Implementing Back Office Short-Term Forecasting & Task-Based Scheduling', speaker: 'Denman & Castro, Progressive Insurance', day: 'Mon', desc: 'Progressive Insurance shares their journey implementing short-term forecasting and task-based scheduling in back office operations. Real implementation challenges, solutions, and results.' },
      { title: 'Back Office Task-Based Scheduling and Short-Term Forecasting', speaker: 'LaValliere & Castro, Progressive Insurance', day: 'Tue', desc: 'Deep dive into the mechanics of task-based scheduling \u2014 how to decompose back office work into schedulable units and forecast demand when traditional call patterns don\u2019t apply.' },
      { title: 'Beyond the Contact Center: Expanding WFM into Middle and Back Office', speaker: 'Nathan Stearns, NiCE', day: 'Mon', desc: 'A roadmap for extending WFM principles beyond the contact center. Learn the unique challenges of middle and back office workforce planning and how technology enables the expansion.' },
      { title: 'To the Back Office and Beyond with Workforce Management', speaker: 'Panel: Dobson, Fetters, Lanier', day: 'Mon', desc: 'Panel discussion featuring practitioners who have successfully expanded WFM into back office operations. Hear their strategies, stumbling blocks, and lessons learned.' },
      { title: 'Spilling the Beans: Brewing the Perfect Shrinkage Strategy', speaker: 'Marshall Lee, Human Numbers', day: 'Tue', desc: 'Shrinkage is often the most misunderstood variable in staffing calculations. This session demystifies shrinkage categories, measurement approaches, and strategies for managing it effectively.' },
      { title: 'WFM Live Lab: Fix Any Day in 30 Minutes', speaker: 'Kevin Zimmerman, Jim Moran & Associates', day: 'Tue', desc: 'Interactive workshop where attendees work through real-world intra-day scenarios. Practice the decision-making process for recovering from forecast misses, unexpected absences, and volume spikes.' },
      { title: 'Schedule Adherence Tips in a Virtual Environment', speaker: 'Stephanie Parker, Gant Travel', day: 'Wed', desc: 'Remote and hybrid work has changed the adherence game. Learn practical tips for maintaining schedule discipline when your agents aren\u2019t in the building.' },
      { title: 'Best Practices in Schedule Creativity', speaker: 'Panel: Holcombe, Thomas, Muzillo', day: 'Wed', desc: 'Creative scheduling isn\u2019t just about flexibility \u2014 it\u2019s about finding innovative solutions that satisfy both operational requirements and employee preferences. Hear what\u2019s working.' },
      { title: 'Build It Live \u2013 Capacity Planning: How to Learn to Love the Process', speaker: 'Adrien Seldon, Seldon Solutions', day: 'Tue', desc: 'Watch a capacity plan get built from scratch in real time. This live demonstration walks through every step from gathering inputs to delivering a finished plan.' },
      { title: 'Deploying Schedule Optimization Capabilities Using Third Party Software', speaker: 'Garza & Moseby, YouTube', day: 'Tue', desc: 'YouTube\u2019s team shares their experience deploying third-party schedule optimization tools. Covers vendor evaluation, implementation, and measuring optimization lift.' },
      { title: '60 Ideas in 60 Minutes \u2013 WFM Tips & Techniques', speaker: 'Peer Panel', day: 'Wed', desc: 'Rapid-fire session where WFM practitioners share their best tips, tricks, and techniques. One idea per minute \u2014 guaranteed to give you something to take home.' },
      { title: '60 Ideas in 60 Minutes \u2013 Making the Most of Your WFM Software', speaker: 'Vendor Panel', day: 'Wed', desc: 'WFM software vendors share their best-kept secrets and power-user tips. Learn features you didn\u2019t know existed and workflows that maximize your technology investment.' },
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
      { title: 'Beyond the Basics \u2013 What-if Scenario Modeling', speaker: 'Alpern, Cinareo & Spurlock, Fabletics', day: 'Mon', desc: 'Move beyond static capacity plans with scenario modeling. Learn how to build what-if models that test assumptions, quantify risk, and give leadership the confidence to make decisions.' },
      { title: 'Using Your Capacity Planning Spreadsheets to Do Great What-Ifs', speaker: 'Ric & Chris Kosiba, Real Numbers', day: 'Mon', desc: 'You don\u2019t need expensive software to do powerful what-if analysis. The Kosibas show how to leverage your existing spreadsheets for sophisticated scenario planning.' },
      { title: 'Seven Tips and Tricks for Capacity Planning (And a Smidge of AI)', speaker: 'Kosiba & Kline, Real Numbers', day: 'Tue', desc: 'Practical capacity planning techniques with a touch of AI. Seven actionable tips that improve planning accuracy and efficiency, from the team behind Real Numbers.' },
      { title: 'Leveraging Advanced Analytics & BI Tools in Workforce Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Tue', desc: 'U.S. Bank shares how they\u2019ve integrated advanced analytics and BI tools into their capacity planning process. Real enterprise-scale insights on data architecture and visualization.' },
      { title: 'Capacity Planning at RCI: Inbound, Outbound, and Blended Teams', speaker: 'Scott Morgan, RCI', day: 'Tue', desc: 'Capacity planning gets complicated when you blend inbound, outbound, and multi-skilled teams. RCI shares their approach to planning across diverse contact types.' },
      { title: 'Bridging the BPO Visibility Gap: Leveraging WFM and Analytics', speaker: 'Coert & Macolor, Google', day: 'Wed', desc: 'When your workforce is outsourced, visibility is the first casualty. Google\u2019s team shares how they use WFM analytics to bridge the BPO visibility gap and maintain operational control.' },
      { title: 'Sharing Key Metrics for Continuous Improvement', speaker: 'Panel: Marcella, Liriano, Seldon', day: 'Tue', desc: 'Which metrics drive continuous improvement, and how do you share them effectively? Panel discussion on metric selection, visualization, and the feedback loops that create lasting change.' },
      { title: 'Are We Measuring The Right Things?', speaker: 'Todd Hixson, Personify Health', day: 'Tue', desc: 'A provocative examination of whether traditional WFM metrics actually drive the outcomes we care about. Challenge your assumptions about what to measure and why.' },
      { title: 'Determining the Best Measures of WFM Success', speaker: 'Panel: Hilliard, Dobson, Rhodes', day: 'Tue', desc: 'Panel discussion on defining and measuring WFM success. Beyond forecast accuracy and adherence \u2014 what does a truly successful WFM function look like?' },
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
      { title: 'Generative AI Effectiveness in Workforce Management', speaker: 'Joey Campbell, Google', day: 'Mon', desc: 'Google examines where generative AI actually delivers value in WFM \u2014 and where it doesn\u2019t. Cut through the hype with real data on AI effectiveness in workforce operations.' },
      { title: 'Bringing Machine Learning to Life in Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Mon', desc: 'U.S. Bank\u2019s journey from traditional capacity planning to ML-powered forecasting. Covers model selection, training, validation, and the organizational change required to trust the models.' },
      { title: 'Real-Time or Bust: Turning AI Hype into WFM ROI', speaker: 'Damon Spurlock, Fabletics', day: 'Mon', desc: 'Fabletics shares their pragmatic approach to AI in WFM. Focus on real-time applications that deliver measurable ROI, not science projects that never leave the lab.' },
      { title: 'Agent Co-Pilot AI \u2013 Lessons Learned and Actualized Returns', speaker: 'Blanton & Wood, North', day: 'Mon', desc: 'Real results from deploying AI co-pilots alongside human agents. Lessons learned on implementation, agent adoption, and the actual returns vs. vendor promises.' },
      { title: 'Precision Forecasting with Python Prophet: Hyperparameter Tuning', speaker: 'Hernandez & Macaspac, Barclays', day: 'Wed', desc: 'Technical deep dive into using Facebook Prophet for WFM forecasting. Barclays shares their hyperparameter tuning approach and how they achieved precision improvements over traditional methods.' },
      { title: 'Partnering with AI: The Next Evolution of Workforce Management', speaker: 'Troy Plott, NiCE', day: 'Tue', desc: 'How AI transforms WFM from reactive to predictive. Explore the partnership model where AI handles pattern recognition and humans handle judgment calls.' },
      { title: 'The Future is WFM: The Hybrid Workforce (AI + Humans)', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Tue', desc: 'The workforce of the future isn\u2019t all-human or all-AI \u2014 it\u2019s hybrid. Learn how to plan for, staff, and manage a workforce where humans and AI agents work side by side.' },
      { title: 'Curriculum-to-Cognition Apprenticeship Model', speaker: 'Donnelly & Hostetler, Home Depot', day: 'Tue', desc: 'Home Depot\u2019s innovative model for developing AI capabilities within WFM teams. A structured apprenticeship approach that builds AI literacy from the ground up.' },
      { title: "YouTube's Support Operations Transformation: Agentic AI & Automated Planning", speaker: 'Decena & Wang, YouTube', day: 'Mon', desc: 'YouTube reveals how agentic AI is transforming their support operations. Automated planning, dynamic resource allocation, and the architectural decisions that made it possible.' },
      { title: 'Adaptive: Building Workforce Systems for an (Unpredictable) Future', speaker: 'Ted Lango, Kyodo Solutions', day: 'Tue', highlight: true, link: '/session/adaptive', desc: 'The five assumptions that built modern WFM are breaking. This session reframes variance as signal, introduces multi-dimensional value optimization, and presents a concrete human-AI collaboration framework for next-generation WFM.' },
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
      { title: 'Selling Workforce Topics to the Executive Level', speaker: 'Panel: Hovasse, Rivera, Osterman, Pierce', day: 'Mon', desc: 'How do you get executive buy-in for WFM initiatives? Panel of leaders who\u2019ve successfully sold workforce strategies to C-suite audiences share their frameworks and persuasion techniques.' },
      { title: 'Strategic Partnership: WFM + HR + Operations', speaker: 'Kirwyn Adderley, Walgreens', day: 'Mon', desc: 'WFM doesn\u2019t operate in a vacuum. Walgreens shares how building strategic partnerships between WFM, HR, and Operations creates alignment and amplifies impact.' },
      { title: 'Communicating WFM Across Your Organization', speaker: 'Panel: Persico, Krauth, Felice', day: 'Mon', desc: 'WFM insights are only valuable if stakeholders understand them. Learn communication strategies that translate complex WFM concepts into language that resonates across the organization.' },
      { title: 'From Chaos to Clarity: Building a Strategic Operations Team', speaker: 'Rafael Liriano, LanguageLine Solutions', day: 'Mon', desc: 'The journey from reactive firefighting to strategic operations planning. LanguageLine Solutions shares how they transformed their operations team structure and mindset.' },
      { title: 'Change Management Driven Collaboration (ADKAR Model)', speaker: 'Patricia Sinclair, Humana Military', day: 'Mon', desc: 'Applying the ADKAR change management model to WFM transformations. Humana Military shares how structured change management drives adoption and sustained improvement.' },
      { title: 'The Art of the Merge: Integrating WFM into a Large Organization', speaker: 'West & Abugan, Hilton Grand Vacations', day: 'Tue', desc: 'When organizations merge, WFM teams collide. Hilton Grand Vacations shares the art of integrating WFM functions \u2014 systems, processes, and people \u2014 into a unified operation.' },
      { title: 'Building a Capacity Framework for Effective Stakeholder Support', speaker: 'Cessna & Janiga-Stoll, Northwestern Mutual', day: 'Mon', desc: 'Northwestern Mutual\u2019s approach to building a capacity planning framework that serves multiple stakeholders. How to balance competing demands and deliver plans everyone trusts.' },
      { title: 'The Future Forum for Workforce Management', speaker: 'Panel: Graczyk, McFatridge', day: 'Mon', desc: 'Where is WFM headed? Industry thought leaders discuss the trends, technologies, and organizational shifts that will define the next decade of workforce management.' },
      { title: 'Breaking Down Silos', speaker: 'Panel: McGary, Parks, Tifft', day: 'Wed', desc: 'Organizational silos are the enemy of effective WFM. Panel discussion on strategies for breaking down barriers between departments and creating true cross-functional collaboration.' },
      { title: 'Building & Evolving WFM', speaker: 'Lanier, CNA & Campbell, Raymond James', day: 'Wed', desc: 'Two organizations at different stages of WFM maturity share their evolution stories. From building a WFM function from scratch to evolving an established one \u2014 lessons for every stage.' },
      { title: 'Ask the Workforce Wizard', speaker: 'Expert Panel', day: 'Tue', desc: 'Bring your toughest WFM questions to an expert panel. Open Q&A format covering forecasting, scheduling, analytics, technology, and career development.' },
      { title: 'How WFM can Drive Performance and Productivity', speaker: 'Watkinson & Williams, Amplix', day: 'Tue', desc: 'WFM isn\u2019t just about having the right number of people \u2014 it\u2019s about driving performance. Learn how WFM practices directly influence agent productivity and operational outcomes.' },
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
      { title: 'Fearless CX: Leading Through Change and Disengagement', speaker: 'Nate Brown, Metric Sherpa', day: 'Tue', desc: 'Change fatigue is real, and disengagement is its symptom. Nate Brown delivers a framework for fearless CX leadership that maintains team energy through constant transformation.' },
      { title: 'Moments That Matter: How WFM Decisions Can Prevent Agent Burnout', speaker: 'Gaffney & McCormick, Call Design', day: 'Tue', desc: 'Every scheduling decision impacts agent wellbeing. Learn how to identify the WFM \u201cmoments that matter\u201d and make decisions that prevent burnout before it starts.' },
      { title: 'Beyond the Metrics: Humanizing WFM and Tailoring to Your Industry', speaker: 'Shantae Williams, Ally Financial', day: 'Tue', desc: 'WFM isn\u2019t one-size-fits-all. Ally Financial shares how they\u2019ve humanized their WFM approach and tailored practices to their specific industry context and workforce culture.' },
      { title: 'No Cap: Decoding the Multi-Gen Workforce for 2026 WFM', speaker: 'Marshall Lee, Human Numbers', day: 'Wed', desc: 'Gen Z, Millennials, Gen X, and Boomers all in one workforce. Learn how generational differences impact scheduling preferences, communication styles, and WFM strategy.' },
      { title: 'Be the Best WFM Leader for your Team', speaker: 'Panel: Harris, Hovasse, Davis', day: 'Tue', desc: 'What makes a great WFM leader? Panel of experienced leaders share their philosophies on team development, stakeholder management, and building high-performing WFM organizations.' },
      { title: 'How to Advance Your Career in WFM', speaker: 'Panel: Rhodes, McFatridge, Morrell', day: 'Wed', desc: 'Career pathing in WFM isn\u2019t always obvious. Hear from leaders who\u2019ve navigated diverse career paths and learn strategies for advancing your WFM career.' },
      { title: 'On the Tightrope: Balancing Service Goals With Employee Development', speaker: 'Panel: Adderley, Persico, Graczyk', day: 'Wed', desc: 'The tension between hitting service targets and investing in employee growth is real. Panel discussion on practical strategies for walking this tightrope successfully.' },
      { title: 'Embracing Change', speaker: 'Jason Hilliard, Petsafe', day: 'Wed', desc: 'Change is the only constant in WFM. Petsafe\u2019s Jason Hilliard shares a personal and practical perspective on embracing change rather than resisting it.' },
      { title: "Hey \u2014 We're Part of the Team, Too!", speaker: 'Todd Hixson, Personify Health', day: 'Wed', desc: 'WFM teams often feel like outsiders in their own organizations. A candid talk about building belonging, visibility, and respect for the WFM function.' },
      { title: 'Seasons of Change: Lessons Learned from Changes in Systems', speaker: 'Panel: Davis, Marcella, Taylor', day: 'Wed', desc: 'System migrations are among the most disruptive events in WFM. Panel shares lessons from system changes \u2014 what went right, what went wrong, and what they\u2019d do differently.' },
    ],
  },
];

const levelLabels = { 1: 'Traditional', 2: 'Applied', 3: 'Advanced', 4: 'Emerging' };
const days = ['All', 'Mon', 'Tue', 'Wed'];
const dayLabels = { Mon: 'Monday, April 27', Tue: 'Tuesday, April 28', Wed: 'Wednesday, April 29' };

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
          \u2715
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

        {/* Speaker + Day */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: 12, color: category.accent }}>
            {session.speaker}
          </span>
          <span className="mono" style={{ fontSize: 11, color: '#666' }}>
            {dayLabels[session.day] || session.day}
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
          {session.desc}
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
                {filteredSessions.map((s, i) => (
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
                      }}>
                        {s.day}
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
    </div>
  );
}
