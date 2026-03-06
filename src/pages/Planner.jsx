import { useState, useRef, useEffect } from 'react';

// ── Session data with time slots ──────────────────────────────────────────────

const sessions = [
  // FOUNDATIONS
  { id: 'f1', title: 'Forecasting Basics: Predicting for Months, Weeks, Days, and Intervals', speaker: 'Penny Reynolds', day: 'Mon', slot: '10:45-12:00', cat: 'foundations', tags: ['forecasting', 'fundamentals'], level: 1 },
  { id: 'f2', title: 'Essentials of Staffing: Models and Calculations for Contact Center Staff', speaker: 'Penny Reynolds', day: 'Mon', slot: '1:30-2:45', cat: 'foundations', tags: ['staffing', 'erlang', 'fundamentals'], level: 1 },
  { id: 'f3', title: 'Staffing Tradeoffs: Achieving a Balance of Service, Occupancy, and Cost', speaker: 'Penny Reynolds', day: 'Mon', slot: '3:15-4:30', cat: 'foundations', tags: ['staffing', 'service-level', 'cost'], level: 1 },
  { id: 'f4', title: 'Scheduling Strategies: Definitions and Decisions for Successful Schedules', speaker: 'Penny Reynolds', day: 'Tue', slot: '9:15-10:30', cat: 'foundations', tags: ['scheduling', 'fundamentals'], level: 1 },
  { id: 'f5', title: 'Managing Schedule Adherence: Creating an In-Place and On-Time Culture', speaker: 'Penny Reynolds', day: 'Tue', slot: '10:45-12:00', cat: 'foundations', tags: ['adherence', 'culture', 'management'], level: 1 },
  { id: 'f6', title: 'Managing Daily Service: An Intra-Day Plan to Keep Staffing and Service on Track', speaker: 'Penny Reynolds', day: 'Tue', slot: '1:30-2:45', cat: 'foundations', tags: ['real-time', 'intraday', 'management'], level: 1 },
  { id: 'f7', title: 'Signs of Success: Metrics and Measures of WFM Performance', speaker: 'Penny Reynolds', day: 'Tue', slot: '3:15-4:30', cat: 'foundations', tags: ['metrics', 'kpi', 'performance'], level: 1 },
  { id: 'f8', title: 'WFM \u2013 The Foundation: Why Every Business Needs Strong Workforce Management', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Mon', slot: '10:45-12:00', cat: 'foundations', tags: ['fundamentals', 'strategy', 'leadership'], level: 1 },
  { id: 'f9', title: 'Workforce Management Certification Workshop (CWPP)', speaker: 'Holcombe & Baxter', day: 'Tue', slot: '9:15-12:00', cat: 'foundations', tags: ['certification', 'career'], level: 1 },
  { id: 'f10', title: 'Workforce Management Certification Practice Bee', speaker: 'Holcombe & Baxter', day: 'Tue', slot: '1:30-2:45', cat: 'foundations', tags: ['certification', 'career'], level: 1 },

  // OPERATIONAL
  { id: 'o1', title: 'Implementing Back Office Short-Term Forecasting & Task-Based Scheduling', speaker: 'Denman & Castro, Progressive Insurance', day: 'Mon', slot: '10:45-12:00', cat: 'operational', tags: ['back-office', 'forecasting', 'scheduling'], level: 2 },
  { id: 'o2', title: 'Back Office Task-Based Scheduling and Short-Term Forecasting', speaker: 'LaValliere & Castro, Progressive Insurance', day: 'Tue', slot: '10:45-12:00', cat: 'operational', tags: ['back-office', 'scheduling', 'forecasting'], level: 2 },
  { id: 'o3', title: 'Beyond the Contact Center: Expanding WFM into Middle and Back Office', speaker: 'Nathan Stearns, NiCE', day: 'Mon', slot: '1:30-2:45', cat: 'operational', tags: ['back-office', 'expansion', 'technology'], level: 2 },
  { id: 'o4', title: 'To the Back Office and Beyond with Workforce Management', speaker: 'Panel: Dobson, Fetters, Lanier', day: 'Mon', slot: '3:15-4:30', cat: 'operational', tags: ['back-office', 'panel'], level: 2 },
  { id: 'o5', title: 'Spilling the Beans: Brewing the Perfect Shrinkage Strategy', speaker: 'Marshall Lee, Human Numbers', day: 'Tue', slot: '10:45-12:00', cat: 'operational', tags: ['shrinkage', 'staffing', 'planning'], level: 2 },
  { id: 'o6', title: 'WFM Live Lab: Fix Any Day in 30 Minutes', speaker: 'Kevin Zimmerman, Jim Moran & Associates', day: 'Tue', slot: '1:30-2:45', cat: 'operational', tags: ['real-time', 'intraday', 'hands-on'], level: 2 },
  { id: 'o7', title: 'Schedule Adherence Tips in a Virtual Environment', speaker: 'Stephanie Parker, Gant Travel', day: 'Wed', slot: '9:15-10:30', cat: 'operational', tags: ['adherence', 'remote', 'hybrid'], level: 2 },
  { id: 'o8', title: 'Best Practices in Schedule Creativity', speaker: 'Panel: Holcombe, Thomas, Muzillo', day: 'Wed', slot: '10:45-12:00', cat: 'operational', tags: ['scheduling', 'flexibility', 'panel'], level: 2 },
  { id: 'o9', title: 'Build It Live \u2013 Capacity Planning: How to Learn to Love the Process', speaker: 'Adrien Seldon, Seldon Solutions', day: 'Tue', slot: '3:15-4:30', cat: 'operational', tags: ['capacity-planning', 'hands-on'], level: 2 },
  { id: 'o10', title: 'Deploying Schedule Optimization Capabilities Using Third Party Software', speaker: 'Garza & Moseby, YouTube', day: 'Tue', slot: '10:45-12:00', cat: 'operational', tags: ['scheduling', 'technology', 'optimization'], level: 2 },
  { id: 'o11', title: '60 Ideas in 60 Minutes \u2013 WFM Tips & Techniques', speaker: 'Peer Panel', day: 'Wed', slot: '1:30-2:45', cat: 'operational', tags: ['tips', 'panel', 'rapid-fire'], level: 2 },
  { id: 'o12', title: '60 Ideas in 60 Minutes \u2013 Making the Most of Your WFM Software', speaker: 'Vendor Panel', day: 'Wed', slot: '3:15-4:30', cat: 'operational', tags: ['technology', 'tips', 'vendor'], level: 2 },

  // ANALYTICS
  { id: 'a1', title: 'Beyond the Basics \u2013 What-if Scenario Modeling', speaker: 'Alpern, Cinareo & Spurlock, Fabletics', day: 'Mon', slot: '10:45-12:00', cat: 'analytics', tags: ['capacity-planning', 'scenario', 'modeling'], level: 3 },
  { id: 'a2', title: 'Using Your Capacity Planning Spreadsheets to Do Great What-Ifs', speaker: 'Ric & Chris Kosiba, Real Numbers', day: 'Mon', slot: '1:30-2:45', cat: 'analytics', tags: ['capacity-planning', 'spreadsheet', 'scenario'], level: 3 },
  { id: 'a3', title: 'Seven Tips and Tricks for Capacity Planning (And a Smidge of AI)', speaker: 'Kosiba & Kline, Real Numbers', day: 'Tue', slot: '10:45-12:00', cat: 'analytics', tags: ['capacity-planning', 'ai', 'tips'], level: 3 },
  { id: 'a4', title: 'Leveraging Advanced Analytics & BI Tools in Workforce Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Tue', slot: '1:30-2:45', cat: 'analytics', tags: ['analytics', 'bi', 'capacity-planning', 'enterprise'], level: 3 },
  { id: 'a5', title: 'Capacity Planning at RCI: Inbound, Outbound, and Blended Teams', speaker: 'Scott Morgan, RCI', day: 'Tue', slot: '3:15-4:30', cat: 'analytics', tags: ['capacity-planning', 'blended', 'multi-channel'], level: 3 },
  { id: 'a6', title: 'Bridging the BPO Visibility Gap: Leveraging WFM and Analytics', speaker: 'Coert & Macolor, Google', day: 'Wed', slot: '9:15-10:30', cat: 'analytics', tags: ['bpo', 'analytics', 'outsourcing'], level: 3 },
  { id: 'a7', title: 'Sharing Key Metrics for Continuous Improvement', speaker: 'Panel: Marcella, Liriano, Seldon', day: 'Tue', slot: '3:15-4:30', cat: 'analytics', tags: ['metrics', 'improvement', 'panel'], level: 3 },
  { id: 'a8', title: 'Are We Measuring The Right Things?', speaker: 'Todd Hixson, Personify Health', day: 'Tue', slot: '10:45-12:00', cat: 'analytics', tags: ['metrics', 'kpi', 'measurement'], level: 3 },
  { id: 'a9', title: 'Determining the Best Measures of WFM Success', speaker: 'Panel: Hilliard, Dobson, Rhodes', day: 'Tue', slot: '1:30-2:45', cat: 'analytics', tags: ['metrics', 'success', 'panel'], level: 3 },

  // AI/ML
  { id: 'ai1', title: 'Generative AI Effectiveness in Workforce Management', speaker: 'Joey Campbell, Google', day: 'Mon', slot: '10:45-12:00', cat: 'aiml', tags: ['ai', 'genai', 'effectiveness'], level: 4 },
  { id: 'ai2', title: 'Bringing Machine Learning to Life in Capacity Planning at U.S. Bank', speaker: 'Olson, Becze, Stevenson & Martinson, U.S. Bank', day: 'Mon', slot: '1:30-2:45', cat: 'aiml', tags: ['ml', 'capacity-planning', 'enterprise'], level: 4 },
  { id: 'ai3', title: 'Real-Time or Bust: Turning AI Hype into WFM ROI', speaker: 'Damon Spurlock, Fabletics', day: 'Mon', slot: '3:15-4:30', cat: 'aiml', tags: ['ai', 'roi', 'real-time'], level: 4 },
  { id: 'ai4', title: 'Agent Co-Pilot AI \u2013 Lessons Learned and Actualized Returns', speaker: 'Blanton & Wood, North', day: 'Mon', slot: '3:15-4:30', cat: 'aiml', tags: ['ai', 'copilot', 'agent', 'roi'], level: 4 },
  { id: 'ai5', title: 'Precision Forecasting with Python Prophet: Hyperparameter Tuning', speaker: 'Hernandez & Macaspac, Barclays', day: 'Wed', slot: '10:45-12:00', cat: 'aiml', tags: ['ml', 'forecasting', 'python', 'technical'], level: 4 },
  { id: 'ai6', title: 'Partnering with AI: The Next Evolution of Workforce Management', speaker: 'Troy Plott, NiCE', day: 'Tue', slot: '1:30-2:45', cat: 'aiml', tags: ['ai', 'evolution', 'technology'], level: 4 },
  { id: 'ai7', title: 'The Future is WFM: The Hybrid Workforce (AI + Humans)', speaker: 'Juanita Coley, Solid Rock Consulting', day: 'Tue', slot: '3:15-4:30', cat: 'aiml', tags: ['ai', 'hybrid', 'human-ai', 'future'], level: 4 },
  { id: 'ai8', title: 'Curriculum-to-Cognition Apprenticeship Model', speaker: 'Donnelly & Hostetler, Home Depot', day: 'Tue', slot: '10:45-12:00', cat: 'aiml', tags: ['ai', 'training', 'development'], level: 4 },
  { id: 'ai9', title: "YouTube's Support Operations Transformation: Agentic AI & Automated Planning", speaker: 'Decena & Wang, YouTube', day: 'Mon', slot: '10:45-12:00', cat: 'aiml', tags: ['ai', 'agentic', 'automation', 'planning'], level: 4 },
  { id: 'ai10', title: 'Adaptive: Building Workforce Systems for an (Unpredictable) Future', speaker: 'Ted Lango, Kyodo Solutions', day: 'Tue', slot: '9:15-10:30', cat: 'aiml', tags: ['ai', 'human-ai', 'variance', 'value', 'framework'], level: 4, highlight: true },

  // STRATEGY
  { id: 's1', title: 'Selling Workforce Topics to the Executive Level', speaker: 'Panel: Hovasse, Rivera, Osterman, Pierce', day: 'Mon', slot: '10:45-12:00', cat: 'strategy', tags: ['leadership', 'executive', 'communication'], level: 3 },
  { id: 's2', title: 'Strategic Partnership: WFM + HR + Operations', speaker: 'Kirwyn Adderley, Walgreens', day: 'Mon', slot: '1:30-2:45', cat: 'strategy', tags: ['partnership', 'hr', 'cross-functional'], level: 3 },
  { id: 's3', title: 'Communicating WFM Across Your Organization', speaker: 'Panel: Persico, Krauth, Felice', day: 'Mon', slot: '3:15-4:30', cat: 'strategy', tags: ['communication', 'stakeholder', 'panel'], level: 3 },
  { id: 's4', title: 'From Chaos to Clarity: Building a Strategic Operations Team', speaker: 'Rafael Liriano, LanguageLine Solutions', day: 'Mon', slot: '1:30-2:45', cat: 'strategy', tags: ['leadership', 'team-building', 'operations'], level: 3 },
  { id: 's5', title: 'Change Management Driven Collaboration (ADKAR Model)', speaker: 'Patricia Sinclair, Humana Military', day: 'Mon', slot: '3:15-4:30', cat: 'strategy', tags: ['change-management', 'adkar', 'collaboration'], level: 3 },
  { id: 's6', title: 'The Art of the Merge: Integrating WFM into a Large Organization', speaker: 'West & Abugan, Hilton Grand Vacations', day: 'Tue', slot: '10:45-12:00', cat: 'strategy', tags: ['integration', 'merger', 'organizational'], level: 3 },
  { id: 's7', title: 'Building a Capacity Framework for Effective Stakeholder Support', speaker: 'Cessna & Janiga-Stoll, Northwestern Mutual', day: 'Mon', slot: '10:45-12:00', cat: 'strategy', tags: ['capacity-planning', 'stakeholder', 'framework'], level: 3 },
  { id: 's8', title: 'The Future Forum for Workforce Management', speaker: 'Panel: Graczyk, McFatridge', day: 'Mon', slot: '3:15-4:30', cat: 'strategy', tags: ['future', 'trends', 'panel'], level: 3 },
  { id: 's9', title: 'Breaking Down Silos', speaker: 'Panel: McGary, Parks, Tifft', day: 'Wed', slot: '10:45-12:00', cat: 'strategy', tags: ['silos', 'cross-functional', 'panel'], level: 3 },
  { id: 's10', title: 'Building & Evolving WFM', speaker: 'Lanier, CNA & Campbell, Raymond James', day: 'Wed', slot: '9:15-10:30', cat: 'strategy', tags: ['maturity', 'evolution', 'building'], level: 3 },
  { id: 's11', title: 'Ask the Workforce Wizard', speaker: 'Expert Panel', day: 'Tue', slot: '3:15-4:30', cat: 'strategy', tags: ['qa', 'expert', 'panel'], level: 3 },
  { id: 's12', title: 'How WFM can Drive Performance and Productivity', speaker: 'Watkinson & Williams, Amplix', day: 'Tue', slot: '9:15-10:30', cat: 'strategy', tags: ['performance', 'productivity', 'management'], level: 3 },

  // PEOPLE
  { id: 'p1', title: 'Fearless CX: Leading Through Change and Disengagement', speaker: 'Nate Brown, Metric Sherpa', day: 'Tue', slot: '9:15-10:30', cat: 'people', tags: ['cx', 'leadership', 'change', 'engagement'], level: 2 },
  { id: 'p2', title: 'Moments That Matter: How WFM Decisions Can Prevent Agent Burnout', speaker: 'Gaffney & McCormick, Call Design', day: 'Tue', slot: '10:45-12:00', cat: 'people', tags: ['burnout', 'agent-experience', 'wellbeing'], level: 2 },
  { id: 'p3', title: 'Beyond the Metrics: Humanizing WFM and Tailoring to Your Industry', speaker: 'Shantae Williams, Ally Financial', day: 'Tue', slot: '1:30-2:45', cat: 'people', tags: ['culture', 'industry', 'humanizing'], level: 2 },
  { id: 'p4', title: 'No Cap: Decoding the Multi-Gen Workforce for 2026 WFM', speaker: 'Marshall Lee, Human Numbers', day: 'Wed', slot: '9:15-10:30', cat: 'people', tags: ['generational', 'workforce', 'culture'], level: 2 },
  { id: 'p5', title: 'Be the Best WFM Leader for your Team', speaker: 'Panel: Harris, Hovasse, Davis', day: 'Tue', slot: '1:30-2:45', cat: 'people', tags: ['leadership', 'team', 'panel'], level: 2 },
  { id: 'p6', title: 'How to Advance Your Career in WFM', speaker: 'Panel: Rhodes, McFatridge, Morrell', day: 'Wed', slot: '10:45-12:00', cat: 'people', tags: ['career', 'development', 'panel'], level: 2 },
  { id: 'p7', title: 'On the Tightrope: Balancing Service Goals With Employee Development', speaker: 'Panel: Adderley, Persico, Graczyk', day: 'Wed', slot: '1:30-2:45', cat: 'people', tags: ['service-level', 'development', 'balance', 'panel'], level: 2 },
  { id: 'p8', title: 'Embracing Change', speaker: 'Jason Hilliard, Petsafe', day: 'Wed', slot: '3:15-4:30', cat: 'people', tags: ['change', 'mindset'], level: 2 },
  { id: 'p9', title: "Hey \u2014 We're Part of the Team, Too!", speaker: 'Todd Hixson, Personify Health', day: 'Wed', slot: '1:30-2:45', cat: 'people', tags: ['culture', 'belonging', 'wfm-team'], level: 2 },
  { id: 'p10', title: 'Seasons of Change: Lessons Learned from Changes in Systems', speaker: 'Panel: Davis, Marcella, Taylor', day: 'Wed', slot: '3:15-4:30', cat: 'people', tags: ['systems', 'change', 'migration', 'panel'], level: 2 },
];

// ── Session descriptions (full detail for popups + print) ─────────────────────

const sessionDescs = {
  f1: 'A comprehensive look at the forecasting process from long-range annual projections to short-term interval forecasts. Learn the methods, math, and best practices behind accurate demand prediction.',
  f2: 'Understand the core staffing models \u2014 Erlang C, simulation, and their variations \u2014 and how to apply them to calculate base staff requirements for any contact center operation.',
  f3: 'Explore the inverse relationship between service level and occupancy, and learn how to find the right balance point that meets both customer expectations and budget constraints.',
  f4: 'From shift definitions to schedule generation strategies, this session covers the decisions that drive effective scheduling and how to align schedules with staffing requirements.',
  f5: 'Practical strategies for measuring, managing, and improving schedule adherence. Learn how to build an accountability culture without micromanaging your workforce.',
  f6: 'Real-time management tactics for when the day doesn\u2019t go as planned. Learn the triggers, responses, and escalation paths that keep service levels on target.',
  f7: 'Which metrics actually matter for WFM success? This session separates the signal from the noise, covering forecast accuracy, schedule efficiency, and the KPIs that drive operational performance.',
  f8: 'A compelling case for why WFM is the operational backbone of any customer-facing organization. Learn how to position WFM as a strategic function, not just a scheduling tool.',
  f9: 'Intensive preparation workshop for the SWPP Certified Workforce Planning Professional (CWPP) certification. Covers all exam domains with practice questions and expert guidance.',
  f10: 'Interactive quiz-style practice session for CWPP certification candidates. Test your knowledge in a fun, competitive format and identify areas for further study.',
  o1: 'Progressive Insurance shares their journey implementing short-term forecasting and task-based scheduling in back office operations. Real implementation challenges, solutions, and results.',
  o2: 'Deep dive into the mechanics of task-based scheduling \u2014 how to decompose back office work into schedulable units and forecast demand when traditional call patterns don\u2019t apply.',
  o3: 'A roadmap for extending WFM principles beyond the contact center. Learn the unique challenges of middle and back office workforce planning and how technology enables the expansion.',
  o4: 'Panel discussion featuring practitioners who have successfully expanded WFM into back office operations. Hear their strategies, stumbling blocks, and lessons learned.',
  o5: 'Shrinkage is often the most misunderstood variable in staffing calculations. This session demystifies shrinkage categories, measurement approaches, and strategies for managing it effectively.',
  o6: 'Interactive workshop where attendees work through real-world intra-day scenarios. Practice the decision-making process for recovering from forecast misses, unexpected absences, and volume spikes.',
  o7: 'Remote and hybrid work has changed the adherence game. Learn practical tips for maintaining schedule discipline when your agents aren\u2019t in the building.',
  o8: 'Creative scheduling isn\u2019t just about flexibility \u2014 it\u2019s about finding innovative solutions that satisfy both operational requirements and employee preferences. Hear what\u2019s working.',
  o9: 'Watch a capacity plan get built from scratch in real time. This live demonstration walks through every step from gathering inputs to delivering a finished plan.',
  o10: 'YouTube\u2019s team shares their experience deploying third-party schedule optimization tools. Covers vendor evaluation, implementation, and measuring optimization lift.',
  o11: 'Rapid-fire session where WFM practitioners share their best tips, tricks, and techniques. One idea per minute \u2014 guaranteed to give you something to take home.',
  o12: 'WFM software vendors share their best-kept secrets and power-user tips. Learn features you didn\u2019t know existed and workflows that maximize your technology investment.',
  a1: 'Move beyond static capacity plans with scenario modeling. Learn how to build what-if models that test assumptions, quantify risk, and give leadership the confidence to make decisions.',
  a2: 'You don\u2019t need expensive software to do powerful what-if analysis. The Kosibas show how to leverage your existing spreadsheets for sophisticated scenario planning.',
  a3: 'Practical capacity planning techniques with a touch of AI. Seven actionable tips that improve planning accuracy and efficiency, from the team behind Real Numbers.',
  a4: 'U.S. Bank shares how they\u2019ve integrated advanced analytics and BI tools into their capacity planning process. Real enterprise-scale insights on data architecture and visualization.',
  a5: 'Capacity planning gets complicated when you blend inbound, outbound, and multi-skilled teams. RCI shares their approach to planning across diverse contact types.',
  a6: 'When your workforce is outsourced, visibility is the first casualty. Google\u2019s team shares how they use WFM analytics to bridge the BPO visibility gap and maintain operational control.',
  a7: 'Which metrics drive continuous improvement, and how do you share them effectively? Panel discussion on metric selection, visualization, and the feedback loops that create lasting change.',
  a8: 'A provocative examination of whether traditional WFM metrics actually drive the outcomes we care about. Challenge your assumptions about what to measure and why.',
  a9: 'Panel discussion on defining and measuring WFM success. Beyond forecast accuracy and adherence \u2014 what does a truly successful WFM function look like?',
  ai1: 'Google examines where generative AI actually delivers value in WFM \u2014 and where it doesn\u2019t. Cut through the hype with real data on AI effectiveness in workforce operations.',
  ai2: 'U.S. Bank\u2019s journey from traditional capacity planning to ML-powered forecasting. Covers model selection, training, validation, and the organizational change required to trust the models.',
  ai3: 'Fabletics shares their pragmatic approach to AI in WFM. Focus on real-time applications that deliver measurable ROI, not science projects that never leave the lab.',
  ai4: 'Real results from deploying AI co-pilots alongside human agents. Lessons learned on implementation, agent adoption, and the actual returns vs. vendor promises.',
  ai5: 'Technical deep dive into using Facebook Prophet for WFM forecasting. Barclays shares their hyperparameter tuning approach and how they achieved precision improvements over traditional methods.',
  ai6: 'How AI transforms WFM from reactive to predictive. Explore the partnership model where AI handles pattern recognition and humans handle judgment calls.',
  ai7: 'The workforce of the future isn\u2019t all-human or all-AI \u2014 it\u2019s hybrid. Learn how to plan for, staff, and manage a workforce where humans and AI agents work side by side.',
  ai8: 'Home Depot\u2019s innovative model for developing AI capabilities within WFM teams. A structured apprenticeship approach that builds AI literacy from the ground up.',
  ai9: 'YouTube reveals how agentic AI is transforming their support operations. Automated planning, dynamic resource allocation, and the architectural decisions that made it possible.',
  ai10: 'The five assumptions that built modern WFM are breaking. This session reframes variance as signal, introduces multi-dimensional value optimization, and presents a concrete human-AI collaboration framework for next-generation WFM.',
  s1: 'How do you get executive buy-in for WFM initiatives? Panel of leaders who\u2019ve successfully sold workforce strategies to C-suite audiences share their frameworks and persuasion techniques.',
  s2: 'WFM doesn\u2019t operate in a vacuum. Walgreens shares how building strategic partnerships between WFM, HR, and Operations creates alignment and amplifies impact.',
  s3: 'WFM insights are only valuable if stakeholders understand them. Learn communication strategies that translate complex WFM concepts into language that resonates across the organization.',
  s4: 'The journey from reactive firefighting to strategic operations planning. LanguageLine Solutions shares how they transformed their operations team structure and mindset.',
  s5: 'Applying the ADKAR change management model to WFM transformations. Humana Military shares how structured change management drives adoption and sustained improvement.',
  s6: 'When organizations merge, WFM teams collide. Hilton Grand Vacations shares the art of integrating WFM functions \u2014 systems, processes, and people \u2014 into a unified operation.',
  s7: 'Northwestern Mutual\u2019s approach to building a capacity planning framework that serves multiple stakeholders. How to balance competing demands and deliver plans everyone trusts.',
  s8: 'Where is WFM headed? Industry thought leaders discuss the trends, technologies, and organizational shifts that will define the next decade of workforce management.',
  s9: 'Organizational silos are the enemy of effective WFM. Panel discussion on strategies for breaking down barriers between departments and creating true cross-functional collaboration.',
  s10: 'Two organizations at different stages of WFM maturity share their evolution stories. From building a WFM function from scratch to evolving an established one \u2014 lessons for every stage.',
  s11: 'Bring your toughest WFM questions to an expert panel. Open Q&A format covering forecasting, scheduling, analytics, technology, and career development.',
  s12: 'WFM isn\u2019t just about having the right number of people \u2014 it\u2019s about driving performance. Learn how WFM practices directly influence agent productivity and operational outcomes.',
  p1: 'Change fatigue is real, and disengagement is its symptom. Nate Brown delivers a framework for fearless CX leadership that maintains team energy through constant transformation.',
  p2: 'Every scheduling decision impacts agent wellbeing. Learn how to identify the WFM \u201cmoments that matter\u201d and make decisions that prevent burnout before it starts.',
  p3: 'WFM isn\u2019t one-size-fits-all. Ally Financial shares how they\u2019ve humanized their WFM approach and tailored practices to their specific industry context and workforce culture.',
  p4: 'Gen Z, Millennials, Gen X, and Boomers all in one workforce. Learn how generational differences impact scheduling preferences, communication styles, and WFM strategy.',
  p5: 'What makes a great WFM leader? Panel of experienced leaders share their philosophies on team development, stakeholder management, and building high-performing WFM organizations.',
  p6: 'Career pathing in WFM isn\u2019t always obvious. Hear from leaders who\u2019ve navigated diverse career paths and learn strategies for advancing your WFM career.',
  p7: 'The tension between hitting service targets and investing in employee growth is real. Panel discussion on practical strategies for walking this tightrope successfully.',
  p8: 'Change is the only constant in WFM. Petsafe\u2019s Jason Hilliard shares a personal and practical perspective on embracing change rather than resisting it.',
  p9: 'WFM teams often feel like outsiders in their own organizations. A candid talk about building belonging, visibility, and respect for the WFM function.',
  p10: 'System migrations are among the most disruptive events in WFM. Panel shares lessons from system changes \u2014 what went right, what went wrong, and what they\u2019d do differently.',
};

const catMeta = {
  foundations: { label: 'Foundations', color: '#52B788', icon: '\u25FC' },
  operational: { label: 'Operational', color: '#4A90D9', icon: '\u25C6' },
  analytics:   { label: 'Analytics',   color: '#B07FCC', icon: '\u25B2' },
  aiml:        { label: 'AI / ML',     color: '#E05C5C', icon: '\u25CF' },
  strategy:    { label: 'Strategy',    color: '#C9A227', icon: '\u2605' },
  people:      { label: 'People',      color: '#5BA3C9', icon: '\u2666' },
};

const levelLabels = { 1: 'Traditional', 2: 'Applied', 3: 'Advanced', 4: 'Emerging' };
const dayOrder = ['Mon', 'Tue', 'Wed'];
const dayLabels = { Mon: 'Monday, April 27', Tue: 'Tuesday, April 28', Wed: 'Wednesday, April 29' };
const slotOrder = ['9:15-10:30', '9:15-12:00', '10:45-12:00', '1:30-2:45', '3:15-4:30'];

// ── Questions ─────────────────────────────────────────────────────────────────

const questions = [
  {
    id: 'role',
    text: "What's your primary role?",
    options: [
      { label: 'WFM Analyst / Scheduler', value: 'analyst' },
      { label: 'WFM Manager / Director', value: 'manager' },
      { label: 'VP / Senior Leader', value: 'leader' },
      { label: 'Operations / CX Leader', value: 'ops' },
      { label: 'New to WFM', value: 'new' },
    ],
  },
  {
    id: 'experience',
    text: 'How many years in WFM or contact center operations?',
    options: [
      { label: '0\u20132 years', value: 'junior' },
      { label: '3\u20137 years', value: 'mid' },
      { label: '8\u201315 years', value: 'senior' },
      { label: '15+ years', value: 'veteran' },
    ],
  },
  {
    id: 'interests',
    text: 'Which topics interest you most? (pick up to 3)',
    multi: true,
    max: 3,
    options: [
      { label: 'Forecasting & Staffing', value: 'forecasting' },
      { label: 'Scheduling & Adherence', value: 'scheduling' },
      { label: 'Capacity Planning', value: 'capacity-planning' },
      { label: 'AI & Machine Learning', value: 'ai' },
      { label: 'Back Office WFM', value: 'back-office' },
      { label: 'Metrics & Analytics', value: 'metrics' },
      { label: 'Leadership & Strategy', value: 'leadership' },
      { label: 'People & Culture', value: 'culture' },
      { label: 'Career Development', value: 'career' },
    ],
  },
  {
    id: 'goal',
    text: 'What do you most want from this conference?',
    options: [
      { label: 'Learn fundamentals and build skills', value: 'learn' },
      { label: 'Advance my current practice', value: 'advance' },
      { label: 'Explore emerging trends and AI', value: 'explore' },
      { label: 'Network and hear diverse perspectives', value: 'network' },
      { label: 'Bring back a strategic plan for my team', value: 'strategic' },
    ],
  },
  {
    id: 'freetext',
    text: "Last one \u2014 tell me in your own words what you're hoping to get out of SWPP this year. Challenges you're facing, specific topics, anything on your mind. Or just hit Skip.",
    freetext: true,
  },
];

// ── Free-text keyword extraction ──────────────────────────────────────────────

const keywordMap = [
  // Pain points → tags + categories
  { patterns: ['understaffed', 'understaffing', 'not enough people', 'short staffed', 'staffing gap', 'hiring'], tags: ['staffing', 'cost', 'service-level'], cats: ['foundations', 'operational'] },
  { patterns: ['overstaffed', 'overstaffing', 'too many', 'idle', 'occupancy low'], tags: ['staffing', 'cost', 'service-level'], cats: ['foundations', 'analytics'] },
  { patterns: ['forecast', 'forecasting', 'prediction', 'accuracy', 'inaccurate', 'volume spike'], tags: ['forecasting', 'modeling', 'scenario'], cats: ['foundations', 'analytics'] },
  { patterns: ['schedule', 'scheduling', 'shift', 'roster', 'flexible', 'flexibility'], tags: ['scheduling', 'flexibility', 'optimization'], cats: ['foundations', 'operational'] },
  { patterns: ['adherence', 'compliance', 'off phone', 'aux', 'not following'], tags: ['adherence', 'management', 'culture'], cats: ['foundations', 'operational'] },
  { patterns: ['shrinkage', 'absenteeism', 'attrition', 'turnover', 'retention'], tags: ['shrinkage', 'burnout', 'wellbeing', 'culture'], cats: ['operational', 'people'] },
  { patterns: ['capacity plan', 'long range', 'long-range', 'annual plan', 'headcount', 'budget'], tags: ['capacity-planning', 'scenario', 'framework'], cats: ['analytics', 'strategy'] },
  { patterns: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'automation', 'automate', 'bot', 'chatbot', 'genai', 'generative', 'copilot', 'co-pilot', 'llm', 'gpt'], tags: ['ai', 'ml', 'genai', 'automation', 'agentic', 'human-ai'], cats: ['aiml'] },
  { patterns: ['back office', 'back-office', 'backoffice', 'middle office', 'task', 'non-phone', 'email', 'chat'], tags: ['back-office', 'expansion', 'multi-channel'], cats: ['operational'] },
  { patterns: ['metric', 'kpi', 'measure', 'dashboard', 'report', 'bi', 'analytics', 'data'], tags: ['metrics', 'kpi', 'analytics', 'bi', 'measurement'], cats: ['analytics'] },
  { patterns: ['leader', 'leadership', 'executive', 'c-suite', 'vp', 'director', 'influence', 'sell', 'buy-in', 'stakeholder'], tags: ['leadership', 'executive', 'communication', 'stakeholder'], cats: ['strategy'] },
  { patterns: ['change management', 'transformation', 'reorgan', 'merge', 'integration', 'adkar'], tags: ['change-management', 'integration', 'merger'], cats: ['strategy'] },
  { patterns: ['burnout', 'wellbeing', 'wellness', 'engagement', 'morale', 'satisfaction', 'happy', 'stress'], tags: ['burnout', 'wellbeing', 'engagement', 'culture'], cats: ['people'] },
  { patterns: ['career', 'promotion', 'grow', 'growth', 'next role', 'advance', 'certification', 'cwpp'], tags: ['career', 'development', 'certification'], cats: ['people', 'foundations'] },
  { patterns: ['remote', 'hybrid', 'virtual', 'work from home', 'wfh', 'distributed'], tags: ['remote', 'hybrid', 'flexibility'], cats: ['operational', 'people'] },
  { patterns: ['bpo', 'outsource', 'vendor', 'offshore', 'nearshore', 'third party', '3rd party'], tags: ['bpo', 'outsourcing', 'vendor'], cats: ['analytics', 'operational'] },
  { patterns: ['erlang', 'staffing model', 'simulation', 'service level', 'asa', 'abandon'], tags: ['erlang', 'staffing', 'service-level', 'modeling'], cats: ['foundations', 'analytics'] },
  { patterns: ['python', 'prophet', 'code', 'programming', 'technical', 'script'], tags: ['python', 'technical', 'ml'], cats: ['aiml'] },
  { patterns: ['real-time', 'real time', 'intraday', 'intra-day', 'same day'], tags: ['real-time', 'intraday'], cats: ['foundations', 'operational'] },
  { patterns: ['roi', 'cost', 'save', 'saving', 'efficiency', 'productivity', 'optimize'], tags: ['roi', 'cost', 'performance', 'productivity', 'optimization'], cats: ['analytics', 'strategy'] },
  { patterns: ['silo', 'cross-functional', 'collaboration', 'alignment', 'partnership', 'hr'], tags: ['silos', 'cross-functional', 'partnership', 'hr'], cats: ['strategy'] },
  { patterns: ['multi-gen', 'generation', 'gen z', 'millennial', 'boomer'], tags: ['generational', 'culture', 'workforce'], cats: ['people'] },
  { patterns: ['future', 'trend', 'next gen', 'emerging', 'innovation', 'disrupt', 'evolve'], tags: ['future', 'trends', 'evolution'], cats: ['aiml', 'strategy'] },
  { patterns: ['variance', 'unpredictable', 'uncertainty', 'adaptive', 'volatile'], tags: ['variance', 'value', 'framework', 'human-ai'], cats: ['aiml'] },
  // Speaker names → boost their sessions
  { patterns: ['penny reynolds'], tags: ['fundamentals'], cats: ['foundations'], speakerMatch: 'Penny Reynolds' },
  { patterns: ['kosiba', 'real numbers'], tags: ['capacity-planning', 'scenario'], cats: ['analytics'], speakerMatch: 'Kosiba' },
  { patterns: ['juanita coley'], tags: ['fundamentals', 'human-ai'], cats: ['foundations', 'aiml'], speakerMatch: 'Coley' },
  { patterns: ['nate brown'], tags: ['cx', 'engagement'], cats: ['people'], speakerMatch: 'Brown' },
  { patterns: ['ted lango', 'adaptive', 'kyodo'], tags: ['variance', 'value', 'human-ai', 'framework'], cats: ['aiml'], speakerMatch: 'Ted Lango' },
  // Company names → boost their sessions
  { patterns: ['google', 'youtube'], tags: ['ai', 'agentic', 'bpo'], cats: ['aiml', 'analytics'], speakerMatch: 'Google' },
  { patterns: ['u.s. bank', 'us bank'], tags: ['ml', 'analytics', 'capacity-planning', 'enterprise'], cats: ['aiml', 'analytics'], speakerMatch: 'U.S. Bank' },
  { patterns: ['progressive'], tags: ['back-office', 'scheduling'], cats: ['operational'], speakerMatch: 'Progressive' },
  { patterns: ['home depot'], tags: ['ai', 'training'], cats: ['aiml'], speakerMatch: 'Home Depot' },
  { patterns: ['barclays'], tags: ['ml', 'forecasting', 'python'], cats: ['aiml'], speakerMatch: 'Barclays' },
  { patterns: ['fabletics'], tags: ['ai', 'roi', 'scenario'], cats: ['aiml', 'analytics'], speakerMatch: 'Fabletics' },
];

function extractSignals(text) {
  const lower = text.toLowerCase();
  const signals = { tags: new Set(), cats: new Set(), speakerMatches: [] };

  for (const rule of keywordMap) {
    for (const pattern of rule.patterns) {
      if (lower.includes(pattern)) {
        rule.tags.forEach(t => signals.tags.add(t));
        rule.cats.forEach(c => signals.cats.add(c));
        if (rule.speakerMatch) signals.speakerMatches.push(rule.speakerMatch);
        break;
      }
    }
  }

  return {
    tags: [...signals.tags],
    cats: [...signals.cats],
    speakerMatches: signals.speakerMatches,
  };
}

function describeSignals(signals) {
  const parts = [];
  if (signals.tags.length > 0) {
    const topTags = signals.tags.slice(0, 5);
    parts.push(`detected themes: ${topTags.join(', ')}`);
  }
  if (signals.speakerMatches.length > 0) {
    parts.push(`noted speaker interest: ${signals.speakerMatches.join(', ')}`);
  }
  if (parts.length === 0) return null;
  return parts.join(' \u2014 ');
}

// ── Scoring engine ────────────────────────────────────────────────────────────

function scoreSession(s, answers, signals) {
  let score = 0;
  const { role, experience, interests, goal } = answers;

  // Free-text signal boosts (applied first, stacks with structured answers)
  if (signals) {
    // Tag matches from free text
    const tagMatches = s.tags.filter(t => signals.tags.includes(t)).length;
    score += tagMatches * 3;

    // Category boost from free text
    if (signals.cats.includes(s.cat)) score += 2;

    // Speaker/company name matches
    for (const match of signals.speakerMatches) {
      if (s.speaker.toLowerCase().includes(match.toLowerCase())) score += 5;
    }
  }

  // Role-based category affinity
  const roleCatBoost = {
    analyst:  { foundations: 3, operational: 3, analytics: 1 },
    manager:  { operational: 2, analytics: 2, strategy: 2, people: 1 },
    leader:   { strategy: 3, aiml: 2, analytics: 1, people: 1 },
    ops:      { strategy: 2, people: 2, analytics: 1, aiml: 1 },
    new:      { foundations: 4, people: 1 },
  };
  score += (roleCatBoost[role]?.[s.cat] || 0);

  // Experience-level alignment
  const expLevelFit = {
    junior: { 1: 4, 2: 2, 3: 0, 4: -1 },
    mid:    { 1: 1, 2: 3, 3: 2, 4: 1 },
    senior: { 1: -1, 2: 1, 3: 3, 4: 2 },
    veteran:{ 1: -2, 2: 0, 3: 2, 4: 3 },
  };
  score += (expLevelFit[experience]?.[s.level] || 0);

  // Interest tag matching
  const interestTagMap = {
    'forecasting': ['forecasting', 'fundamentals', 'erlang', 'staffing', 'modeling'],
    'scheduling': ['scheduling', 'adherence', 'flexibility', 'real-time', 'intraday', 'optimization'],
    'capacity-planning': ['capacity-planning', 'scenario', 'spreadsheet', 'modeling'],
    'ai': ['ai', 'ml', 'genai', 'agentic', 'automation', 'human-ai', 'copilot', 'python'],
    'back-office': ['back-office', 'expansion'],
    'metrics': ['metrics', 'kpi', 'measurement', 'analytics', 'bi', 'performance', 'improvement'],
    'leadership': ['leadership', 'executive', 'communication', 'stakeholder', 'strategy', 'team-building', 'change-management'],
    'culture': ['culture', 'engagement', 'burnout', 'wellbeing', 'humanizing', 'belonging', 'generational'],
    'career': ['career', 'development', 'certification'],
  };
  if (interests) {
    interests.forEach(interest => {
      const matchTags = interestTagMap[interest] || [];
      const matches = s.tags.filter(t => matchTags.includes(t)).length;
      score += matches * 2;
    });
  }

  // Goal boost
  const goalBoost = {
    learn:     { foundations: 3, operational: 1 },
    advance:   { operational: 2, analytics: 2 },
    explore:   { aiml: 3, analytics: 1 },
    network:   { strategy: 1, people: 1 },
    strategic: { strategy: 3, aiml: 1, analytics: 1 },
  };
  score += (goalBoost[goal]?.[s.cat] || 0);

  // Panels get a small boost for 'network' goal
  if (goal === 'network' && s.tags.includes('panel')) score += 2;

  // Hands-on / interactive get a boost for 'learn' goal
  if (goal === 'learn' && s.tags.includes('hands-on')) score += 2;

  // Always boost Ted's session slightly
  if (s.highlight) score += 2;

  return score;
}

function buildRecommendation(answers, signals) {
  const scored = sessions.map(s => ({ ...s, score: scoreSession(s, answers, signals) }))
    .sort((a, b) => b.score - a.score);

  // Pick top sessions avoiding time conflicts
  const picked = [];
  const slotsTaken = new Set();

  for (const s of scored) {
    const slotKey = `${s.day}-${s.slot}`;
    if (slotsTaken.has(slotKey)) continue;
    picked.push(s);
    slotsTaken.add(slotKey);
    if (picked.length >= 12) break;
  }

  return picked;
}

// ── Components ────────────────────────────────────────────────────────────────

function AgentMessage({ children, typing }) {
  return (
    <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, color: '#C9A227', marginTop: 2,
      }}>
        W
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px 12px 12px 12px', padding: '12px 16px',
        fontSize: 14, color: '#CCC', lineHeight: 1.6, maxWidth: 520,
      }}>
        {typing ? (
          <span className="mono" style={{ color: '#666', fontSize: 12 }}>
            analyzing your preferences...
          </span>
        ) : children}
      </div>
    </div>
  );
}

function UserMessage({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
      <div style={{
        background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.2)',
        borderRadius: '12px 2px 12px 12px', padding: '10px 16px',
        fontSize: 13, color: '#C9A227', maxWidth: 400,
      }}>
        {children}
      </div>
    </div>
  );
}

function SessionDetailModal({ session, onClose }) {
  const meta = catMeta[session.cat];
  const desc = sessionDescs[session.id];

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
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{
        background: '#13151F', border: `1px solid ${meta.color}44`,
        borderRadius: 8, maxWidth: 560, width: '100%', maxHeight: '80vh',
        overflow: 'auto', padding: 32, position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16, background: 'none', border: 'none',
          color: '#666', fontSize: 18, cursor: 'pointer', padding: 4, lineHeight: 1,
        }} aria-label="Close">&times;</button>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <span className="mono" style={{
            fontSize: 10, padding: '3px 10px',
            background: meta.color + '22', border: `1px solid ${meta.color}44`,
            borderRadius: 2, color: meta.color, letterSpacing: '0.1em',
          }}>
            {meta.icon} {meta.label}
          </span>
          <span className="mono" style={{
            fontSize: 10, padding: '3px 10px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 2, color: '#888', letterSpacing: '0.1em',
          }}>
            L{session.level} &middot; {levelLabels[session.level]}
          </span>
        </div>

        <h2 style={{
          fontSize: 20, fontWeight: 'normal',
          color: session.highlight ? '#C9A227' : '#F0EBE0',
          lineHeight: 1.3, marginBottom: 16, paddingRight: 24,
        }}>{session.title}</h2>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: 12, color: meta.color }}>
            {session.speaker}
          </span>
          <span className="mono" style={{ fontSize: 11, color: '#666' }}>
            {dayLabels[session.day]} &middot; {session.slot}
          </span>
        </div>

        <div style={{ height: 1, background: 'var(--border)', marginBottom: 20 }} />

        {desc ? (
          <p style={{ fontSize: 14, color: '#BBB', lineHeight: 1.7 }}>{desc}</p>
        ) : (
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7, fontStyle: 'italic' }}>
            No additional description available.
          </p>
        )}
      </div>
    </div>
  );
}

function ScheduleView({ picked, onRemove, onAddMore }) {
  const [detailSession, setDetailSession] = useState(null);

  const grouped = {};
  dayOrder.forEach(d => { grouped[d] = []; });
  picked.forEach(s => { if (grouped[s.day]) grouped[s.day].push(s); });
  Object.values(grouped).forEach(arr => arr.sort((a, b) =>
    slotOrder.indexOf(a.slot) - slotOrder.indexOf(b.slot)
  ));

  return (
    <div>
      {/* Detail modal */}
      {detailSession && (
        <SessionDetailModal session={detailSession} onClose={() => setDetailSession(null)} />
      )}

      {/* Print-only header */}
      <div className="print-only" style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 'bold', margin: '0 0 4px' }}>
          SWPP 2026 &mdash; Your Custom Agenda
        </h1>
        <div style={{ fontSize: 11, color: '#666' }}>
          April 27&ndash;29, 2026 &middot; Omni Nashville Hotel &middot; Built with WFM Labs Agenda Builder
        </div>
        <div style={{ height: 2, background: '#333', marginTop: 12 }} />
      </div>

      <div className="no-print" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 24, flexWrap: 'wrap', gap: 12,
      }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 'normal', color: '#F0EBE0', marginBottom: 4 }}>
            Your Custom Agenda
          </h2>
          <div className="mono" style={{ fontSize: 11, color: '#666' }}>
            {picked.length} sessions selected &middot; click a session for details
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={onAddMore} className="ghost-btn" style={{ fontSize: 10, padding: '6px 14px' }}>
            + Add More
          </button>
          <button
            onClick={() => window.print()}
            className="ghost-btn ghost-btn--secondary"
            style={{ fontSize: 10, padding: '6px 14px' }}
          >
            Print / PDF
          </button>
        </div>
      </div>

      {dayOrder.map(day => {
        const daySessions = grouped[day];
        if (daySessions.length === 0) return null;
        return (
          <div key={day} style={{ marginBottom: 32 }} className="print-day-group">
            <div className="mono print-day-header" style={{
              fontSize: 11, letterSpacing: '0.15em', color: '#C9A227',
              textTransform: 'uppercase', marginBottom: 12,
              paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {dayLabels[day]}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {daySessions.map(s => {
                const meta = catMeta[s.cat];
                const desc = sessionDescs[s.id];
                return (
                  <div
                    key={s.id}
                    className="print-session-card"
                    onClick={() => setDetailSession(s)}
                    style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: '12px 14px', borderRadius: 4, cursor: 'pointer',
                      background: s.highlight ? 'rgba(201,162,39,0.08)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${s.highlight ? 'rgba(201,162,39,0.2)' : 'rgba(255,255,255,0.06)'}`,
                      transition: 'border-color 0.15s',
                    }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = meta.color + '55'; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = s.highlight ? 'rgba(201,162,39,0.2)' : 'rgba(255,255,255,0.06)'; }}
                  >
                    <div className="mono print-slot" style={{
                      fontSize: 11, color: '#888', flexShrink: 0, width: 90, marginTop: 2,
                    }}>
                      {s.slot}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="print-title" style={{
                        fontSize: 13, color: s.highlight ? '#C9A227' : '#F0EBE0',
                        fontWeight: s.highlight ? 'bold' : 'normal', lineHeight: 1.4, marginBottom: 4,
                      }}>
                        {s.title}
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        <span className="mono print-speaker" style={{ fontSize: 10, color: '#666' }}>{s.speaker}</span>
                        <span className="print-cat-badge" style={{
                          fontSize: 9, padding: '1px 6px', borderRadius: 2,
                          background: meta.color + '22', border: `1px solid ${meta.color}33`,
                          color: meta.color, fontFamily: "'JetBrains Mono', monospace",
                        }}>
                          {meta.icon} {meta.label}
                        </span>
                      </div>
                      {desc && (
                        <div className="print-desc">
                          <p style={{ fontSize: 11, color: '#555', lineHeight: 1.5, marginTop: 6, marginBottom: 0 }}>{desc}</p>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); onRemove(s.id); }}
                      className="no-print"
                      style={{
                        background: 'none', border: 'none', color: '#555', cursor: 'pointer',
                        fontSize: 14, padding: '2px 6px', flexShrink: 0,
                      }}
                      title="Remove from agenda"
                    >
                      &times;
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BrowseAdd({ picked, onAdd, onDone }) {
  const [dayFilter, setDayFilter] = useState('All');
  const [catFilter, setCatFilter] = useState('all');
  const pickedIds = new Set(picked.map(s => s.id));
  const pickedSlots = new Set(picked.map(s => `${s.day}-${s.slot}`));

  const filtered = sessions.filter(s => {
    if (dayFilter !== 'All' && s.day !== dayFilter) return false;
    if (catFilter !== 'all' && s.cat !== catFilter) return false;
    return true;
  });

  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 20, flexWrap: 'wrap', gap: 12,
      }}>
        <h3 style={{ fontSize: 16, fontWeight: 'normal', color: '#F0EBE0' }}>Browse Sessions</h3>
        <button onClick={onDone} className="ghost-btn" style={{ fontSize: 10, padding: '6px 14px' }}>
          Done
        </button>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {['All', 'Mon', 'Tue', 'Wed'].map(d => (
          <button key={d} onClick={() => setDayFilter(d)} className="mono" style={{
            padding: '3px 10px', fontSize: 10, borderRadius: 2, cursor: 'pointer',
            background: dayFilter === d ? 'rgba(201,162,39,0.13)' : 'transparent',
            border: `1px solid ${dayFilter === d ? '#C9A227' : 'rgba(255,255,255,0.12)'}`,
            color: dayFilter === d ? '#C9A227' : '#888',
          }}>{d}</button>
        ))}
        <span style={{ width: 1, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />
        <button onClick={() => setCatFilter('all')} className="mono" style={{
          padding: '3px 10px', fontSize: 10, borderRadius: 2, cursor: 'pointer',
          background: catFilter === 'all' ? 'rgba(255,255,255,0.08)' : 'transparent',
          border: `1px solid ${catFilter === 'all' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
          color: catFilter === 'all' ? '#CCC' : '#666',
        }}>All</button>
        {Object.entries(catMeta).map(([key, m]) => (
          <button key={key} onClick={() => setCatFilter(key)} className="mono" style={{
            padding: '3px 10px', fontSize: 10, borderRadius: 2, cursor: 'pointer',
            background: catFilter === key ? m.color + '22' : 'transparent',
            border: `1px solid ${catFilter === key ? m.color + '44' : 'rgba(255,255,255,0.08)'}`,
            color: catFilter === key ? m.color : '#666',
          }}>{m.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 400, overflow: 'auto' }}>
        {filtered.map(s => {
          const isPicked = pickedIds.has(s.id);
          const slotKey = `${s.day}-${s.slot}`;
          const hasConflict = !isPicked && pickedSlots.has(slotKey);
          const meta = catMeta[s.cat];
          return (
            <div key={s.id} style={{
              display: 'flex', gap: 10, alignItems: 'center', padding: '8px 10px',
              borderRadius: 3, background: isPicked ? 'rgba(201,162,39,0.06)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${isPicked ? 'rgba(201,162,39,0.2)' : 'rgba(255,255,255,0.05)'}`,
              opacity: hasConflict ? 0.4 : 1,
            }}>
              <button
                onClick={() => !isPicked && !hasConflict && onAdd(s)}
                disabled={isPicked || hasConflict}
                style={{
                  width: 22, height: 22, borderRadius: 3, flexShrink: 0, cursor: isPicked || hasConflict ? 'default' : 'pointer',
                  background: isPicked ? '#C9A227' : 'transparent',
                  border: `1px solid ${isPicked ? '#C9A227' : 'rgba(255,255,255,0.15)'}`,
                  color: isPicked ? '#0F1117' : '#666', fontSize: 12, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                }}>
                {isPicked ? '\u2713' : '+'}
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11.5, color: '#CCC', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {s.title}
                </div>
                <div className="mono" style={{ fontSize: 9, color: '#666', marginTop: 2 }}>
                  {s.day} {s.slot} &middot; <span style={{ color: meta.color }}>{meta.label}</span>
                  {hasConflict && <span style={{ color: '#E05C5C' }}> &middot; conflicts with selected session</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Planner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [multiSelect, setMultiSelect] = useState([]);
  const [conversation, setConversation] = useState([]);
  const [picked, setPicked] = useState([]);
  const [phase, setPhase] = useState('chat'); // chat | schedule | browse
  const [typing, setTyping] = useState(false);
  const [freetextValue, setFreetextValue] = useState('');
  const [signals, setSignals] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation, typing]);

  const addToConvo = (item) => setConversation(prev => [...prev, item]);

  const handleAnswer = (q, value) => {
    if (q.multi) {
      setMultiSelect(prev => {
        if (prev.includes(value)) return prev.filter(v => v !== value);
        if (prev.length >= q.max) return prev;
        return [...prev, value];
      });
      return;
    }

    const label = q.options.find(o => o.value === value)?.label || value;
    addToConvo({ type: 'user', text: label });

    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    const nextStep = step + 1;
    if (nextStep < questions.length) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setStep(nextStep);
        addToConvo({ type: 'agent', text: questions[nextStep].text });
      }, 600);
    }
  };

  const handleMultiSubmit = (q) => {
    const labels = multiSelect.map(v => q.options.find(o => o.value === v)?.label).join(', ');
    addToConvo({ type: 'user', text: labels });

    const newAnswers = { ...answers, [q.id]: multiSelect };
    setAnswers(newAnswers);
    setMultiSelect([]);

    const nextStep = step + 1;
    if (nextStep < questions.length) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setStep(nextStep);
        addToConvo({ type: 'agent', text: questions[nextStep].text });
      }, 600);
    }
  };

  const handleFreetextSubmit = (text) => {
    const trimmed = text.trim();
    if (trimmed) {
      addToConvo({ type: 'user', text: trimmed });
      const extracted = extractSignals(trimmed);
      setSignals(extracted);
      generateSchedule(answers, extracted);
    } else {
      handleFreetextSkip();
    }
  };

  const handleFreetextSkip = () => {
    addToConvo({ type: 'user', text: '(skipped)' });
    generateSchedule(answers, null);
  };

  const generateSchedule = (finalAnswers, extractedSignals) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);

      // Show what the agent detected from free text
      if (extractedSignals && extractedSignals.tags.length > 0) {
        const desc = describeSignals(extractedSignals);
        if (desc) {
          addToConvo({ type: 'agent', text: `Signal analysis: ${desc}. Weighting your recommendations accordingly.` });
        }
      }

      const recommended = buildRecommendation(finalAnswers, extractedSignals);
      setPicked(recommended);

      setTimeout(() => {
        addToConvo({
          type: 'agent',
          text: `I've built a personalized ${recommended.length}-session agenda based on your profile${extractedSignals?.tags.length > 0 ? ' and the context you shared' : ''}. You can remove sessions, add new ones, or print your schedule.`,
        });
        setPhase('schedule');
      }, extractedSignals?.tags.length > 0 ? 800 : 0);
    }, 1200);
  };

  const startOver = () => {
    setStep(0);
    setAnswers({});
    setMultiSelect([]);
    setConversation([]);
    setPicked([]);
    setPhase('chat');
    setTyping(false);
    setFreetextValue('');
    setSignals(null);
  };

  // Initialize first question
  useEffect(() => {
    if (conversation.length === 0) {
      setConversation([
        { type: 'agent', text: "I'm the WFM Labs Agenda Agent. I'll help you build a personalized SWPP 2026 schedule in about 30 seconds. Let's start." },
        { type: 'agent', text: questions[0].text },
      ]);
    }
  }, []);

  const currentQ = questions[step];

  return (
    <div>
      {/* Header */}
      <section style={{
        borderBottom: '1px solid var(--border)', padding: '48px 0 36px',
        background: 'linear-gradient(180deg, #13151F 0%, #0F1117 100%)',
      }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(201,162,39,0.15)', border: '1px solid rgba(201,162,39,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, color: '#C9A227',
            }}>
              W
            </div>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 'normal', color: '#F0EBE0', margin: 0 }}>
                Agenda Builder
              </h1>
              <div className="mono" style={{ fontSize: 10, color: '#666', letterSpacing: '0.1em' }}>
                Powered by WFM Labs Agentic AI
              </div>
            </div>
          </div>
          <p style={{ fontSize: 14, color: '#999', lineHeight: 1.5 }}>
            Answer a few quick questions, tell me what's on your mind, and I'll build a conflict-free, personalized conference schedule tailored to you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '32px 0 80px' }}>
        <div className="container" style={{ maxWidth: 700 }}>

          {phase !== 'browse' && (
            <div ref={scrollRef} className="no-print" style={{ marginBottom: 24 }}>
              {/* Conversation history */}
              {conversation.map((msg, i) => (
                msg.type === 'agent'
                  ? <AgentMessage key={i}>{msg.text}</AgentMessage>
                  : <UserMessage key={i}>{msg.text}</UserMessage>
              ))}
              {typing && <AgentMessage typing />}
            </div>
          )}

          {/* Question options (only during chat phase) */}
          {phase === 'chat' && !typing && currentQ && !currentQ.freetext && (
            <div style={{ marginLeft: 40, marginBottom: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {currentQ.options.map(opt => {
                  const isSelected = currentQ.multi && multiSelect.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(currentQ, opt.value)}
                      style={{
                        padding: '10px 16px', borderRadius: 4, cursor: 'pointer', textAlign: 'left',
                        background: isSelected ? 'rgba(201,162,39,0.1)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${isSelected ? 'rgba(201,162,39,0.3)' : 'rgba(255,255,255,0.08)'}`,
                        color: isSelected ? '#C9A227' : '#CCC', fontSize: 13,
                        transition: 'all 0.15s',
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              {currentQ.multi && multiSelect.length > 0 && (
                <button
                  onClick={() => handleMultiSubmit(currentQ)}
                  className="ghost-btn"
                  style={{ marginTop: 12, fontSize: 11, padding: '8px 20px' }}
                >
                  Continue with {multiSelect.length} selected &rarr;
                </button>
              )}
            </div>
          )}

          {/* Free text input */}
          {phase === 'chat' && !typing && currentQ && currentQ.freetext && (
            <div style={{ marginLeft: 40, marginBottom: 24 }}>
              <textarea
                value={freetextValue}
                onChange={e => setFreetextValue(e.target.value)}
                placeholder="e.g. &quot;We're struggling with forecast accuracy on our chat channel and I want to understand how AI can help with capacity planning. Also interested in anything from Google or YouTube...&quot;"
                style={{
                  width: '100%', minHeight: 100, padding: '12px 14px', borderRadius: 4,
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.12)',
                  color: '#F0EBE0', fontSize: 13, lineHeight: 1.6, resize: 'vertical',
                  fontFamily: 'Georgia, serif', outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,162,39,0.3)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleFreetextSubmit(freetextValue);
                  }
                }}
              />
              <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                <button
                  onClick={() => handleFreetextSubmit(freetextValue)}
                  className="ghost-btn"
                  style={{ fontSize: 11, padding: '8px 20px' }}
                  disabled={!freetextValue.trim()}
                >
                  Build My Agenda &rarr;
                </button>
                <button
                  onClick={handleFreetextSkip}
                  className="ghost-btn ghost-btn--secondary"
                  style={{ fontSize: 11, padding: '8px 20px' }}
                >
                  Skip
                </button>
              </div>
              <div className="mono" style={{ fontSize: 9, color: '#555', marginTop: 10 }}>
                I'll scan for themes, pain points, speaker interests, and company mentions to fine-tune your recommendations.
              </div>
            </div>
          )}

          {/* Schedule view */}
          {phase === 'schedule' && (
            <div>
              <ScheduleView
                picked={picked}
                onRemove={(id) => setPicked(prev => prev.filter(s => s.id !== id))}
                onAddMore={() => setPhase('browse')}
              />
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={startOver} className="ghost-btn ghost-btn--secondary" style={{ fontSize: 10, padding: '6px 14px' }}>
                  Start Over
                </button>
              </div>
            </div>
          )}

          {/* Browse + add sessions */}
          {phase === 'browse' && (
            <BrowseAdd
              picked={picked}
              onAdd={(s) => setPicked(prev => [...prev, s])}
              onDone={() => setPhase('schedule')}
            />
          )}

        </div>
      </section>

      <style>{`
        @media screen {
          .print-only { display: none !important; }
          .print-desc { display: none !important; }
        }
        @media print {
          /* Hide non-content elements */
          nav, footer, .no-print, button { display: none !important; }
          section:first-of-type { display: none !important; }

          /* White background reset */
          body, #root, main, section, div {
            background: white !important;
            background-image: none !important;
          }

          /* Show print-only elements */
          .print-only { display: block !important; }
          .print-desc { display: block !important; }

          /* Schedule cards */
          .print-session-card {
            background: white !important;
            border: 1px solid #ddd !important;
            cursor: default !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          /* Typography overrides for print */
          .print-title { color: #111 !important; font-weight: 600 !important; }
          .print-speaker { color: #444 !important; }
          .print-slot { color: #333 !important; font-weight: 500 !important; }
          .print-cat-badge {
            background: #f0f0f0 !important;
            border: 1px solid #bbb !important;
            color: #555 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-desc p { color: #444 !important; }

          /* Day headers */
          .print-day-header {
            color: #111 !important;
            border-bottom: 2px solid #222 !important;
            font-weight: bold !important;
          }

          /* Print-only header styling */
          .print-only h1 { color: #111 !important; }
          .print-only div { color: #666 !important; }
          .print-only div:last-child { background: #222 !important; }

          /* Page setup */
          .print-day-group { break-inside: avoid-column; }
        }
      `}</style>
    </div>
  );
}
