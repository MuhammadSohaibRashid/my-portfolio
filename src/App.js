import React, { useState, useEffect } from 'react';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaMobile,
    FaGraduationCap, FaChartLine,
  FaExternalLinkAlt, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import './App.css';

/* ─── tiny helpers ─── */
const skills = {
  'Data Engineering': ['SQL', 'Python', 'Pandas', 'SSIS / ETL', 'Data Modelling', 'Star Schema', 'Data Warehousing', 'Stored Procedures'],
  'BI & Visualisation':  ['Power BI', 'DAX', 'Power Query', 'KPI Dashboards', 'Data Visualisation'],
  'Azure Stack':         ['Azure Data Factory', 'Azure Synapse', 'Databricks', 'PySpark', 'Logic Apps', 'Key Vault', 'Azure Monitor'],
  'Cloud & DevOps':      ['AWS S3', 'AWS EC2', 'Firebase', 'Docker', 'Git / GitHub'],
  'AI & Automation':     ['n8n Workflows', 'LLM Integration', 'AI Agents'],
  'Software Engineering':['Django', 'Odoo ORM', 'REST APIs'],
};

const projects = [
  {
    title: 'Junior Data Analyst Roles - Canada Market Analysis',
    teaser: 'End-to-end analysis of 1,000+ Canadian job postings using Selenium scraping, SSIS ETL, SQL Server, and Power BI.',
    bullets: [
      'Collected data via Selenium + AI augmentation to surface market trends',
      'Multi-step SSIS ETL pipeline → SQL Server star-schema warehouse',
      '3+ interactive Power BI dashboards: salary, skills frequency, regional heat-maps',
      'Cut manual analysis time by 70%',
    ],
    tech: ['Python', 'SSIS', 'SQL Server', 'Power BI', 'Selenium'],
    link: { label: 'View Presentation', href: '/data-analyst-jobs.html', external: false },
  },
  {
    title: 'Maven Super Market - Sales & Operations Dashboard',
    teaser: 'Multi-page Power BI dashboard covering Sales, Returns, Orders, and Customer analytics across 15+ data sources.',
    bullets: [
      'DAX measures + Power Query for refined data modelling',
      'Improved reporting efficiency by 35%; reduced manual effort by 50%',
      'Enhanced sales forecasting accuracy by 20% through KPI trend analysis',
    ],
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Modelling'],
    link: { label: 'View on LinkedIn', href: 'https://www.linkedin.com/posts/muhammad-sohaib-rashid_powerbi-dataanalysis-datavisualization-activity-7240383081021362176-VyR_', external: true },
  },
  {
    title: 'YouTube Video Optimisation Platform',
    teaser: 'Full-stack platform (Python · Django · React · AWS) for AI-powered video processing, captioning, and metadata generation.',
    bullets: [
      'Intelligent pipelines for noise reduction, resolution optimisation, clip extraction',
      'LLM-powered content analysis, auto-captions, and metadata generation',
      'OAuth + YouTube Data API integration with AWS S3 + Firebase storage',
    ],
    tech: ['Python', 'Django', 'React', 'AWS', 'AI / LLM', 'Firebase'],
    link: null,
    badge: 'Final Year Project',
  },
  {
    title: 'End-to-End Azure Data Engineering Pipeline',
    teaser: 'Modern cloud data stack: on-premises CSV → ADF ingestion → Databricks PySpark transforms → Synapse SQL → Power BI.',
    bullets: [
      'ADF + Self-Hosted IR to ingest on-prem data; GitHub version control for all pipelines',
      'Logic Apps email alerts on success / failure; Azure Monitor for health metrics',
      'Secrets via Azure Key Vault + Databricks Secret Scope',
      'PySpark transforms → ADLS Gen2 → Synapse Analytics → Power BI dashboards',
    ],
    tech: ['Azure Data Factory', 'Databricks', 'Azure Synapse', 'PySpark', 'Power BI', 'Logic Apps', 'Key Vault'],
    link: { label: 'View on LinkedIn', href: 'https://www.linkedin.com/posts/muhammad-sohaib-rashid_dataengineering-azuredataengineer-microsoftazure-ugcPost-7460014645215633409-OjX-', external: true },
  },
];

const experience = [
  {
    title: 'Associate Software Engineer — Python | Odoo',
    company: 'AALOGICS · Karachi',
    period: 'Oct 2025 – Present',
    bullets: [
      'Set up multi-company Odoo structures with role-based access controls for international clients (Spectra Solar, Edhi Organization)',
      'Rebuilt 10+ CRM pipelines; integrated SMS Gateway,WhatsApp and other APIs into Odoo environment',
      'Upgraded ERP from Odoo 17 → 18 across 3 core modules with zero production downtime',
      'Built 5+ custom backend modules using Python & Odoo ORM, eliminating repetitive HR tasks',
    ],
  },
  {
    title: 'AI Automation Intern',
    company: 'Irenic Tech · Karachi',
    period: 'Aug – Oct 2025',
    bullets: [
      'Scripted n8n automations connecting Gmail, Google Sheets, Supabase, and Airtable cut manual processing by 40%',
      'Deployed AI agents on WhatsApp, Telegram, and Web for lead qualification and query handling',
      'Shipped 3 full-cycle solutions: Apollo API lead pipeline, Drive template auto-fill, AI resume screener',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Systems Limited · Karachi',
    period: 'Aug – Oct 2024',
    bullets: [
      'Optimised SQL queries (JOINs, CTEs, stored procedures) — 25% faster execution',
      'Built 2 SSIS ETL pipelines, reducing data load times by 40%',
      'Designed star-schema warehouse in SQL Server; pushed to Power BI for stakeholder reporting',
      'Developed 3+ Power BI dashboards with DAX; automated 30% of repetitive data processes',
    ],
  },
];

/* ─── ProjectCard with expand/collapse ─── */
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`project-card ${open ? 'expanded' : ''}`}>
      <div className="pc-header">
        <h3>{p.title}</h3>
        {p.badge && <span className="pc-badge">{p.badge}</span>}
      </div>
      <p className="pc-teaser">{p.teaser}</p>
      <button className="pc-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? <><FaChevronUp /> Less detail</> : <><FaChevronDown /> More detail</>}
      </button>
      {open && (
        <ul className="pc-bullets">
          {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
      <div className="pc-footer">
        <div className="pc-tech">
          {p.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        {p.link && (
          <a
            href={p.link.href}
            className="btn small"
            target={p.link.external ? '_blank' : undefined}
            rel={p.link.external ? 'noopener noreferrer' : undefined}
          >
            {p.link.label} {p.link.external && <FaExternalLinkAlt style={{ fontSize: '0.65em', marginLeft: 4 }} />}
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── Main App ─── */
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections    = document.querySelectorAll('section');
      const scrollPos   = window.scrollY + 160;
      sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight)
          setActiveSection(sec.id);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['home','about','skills','experience','projects','education','contact'];

  return (
    <div className="app">
      <div className="bg-orbs" />
      <div className="grid-background" />

      {/* ── NAV ── */}
      <header>
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon"><FaChartLine /></span>
            <span className="logo-text">Sohaib</span>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(o => !o)}>
            <span /><span /><span />
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              {navLinks.map(id => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* ══ HERO ══ */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <img src="./profile.jpeg" alt="Muhammad Sohaib Rashid" />
              </div>
            </div>
            <div className="hero-text">
              <h1>Muhammad Sohaib Rashid</h1>
              <h2 className="gradient-text">Python Developer & Data Analyst</h2>
              <p className="hero-sub">SQL · Power BI · ETL · Python · Azure</p>
              <p className="hero-desc">
                Turning raw data into decisions — through scalable pipelines,
                clear dashboards, and intelligent automation.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn primary">Get In Touch</a>
                <a href="#projects" className="btn secondary">View Projects</a>
              </div>
              <div className="hero-contact">
                <a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                <a href="https://github.com/muhammadsohaibrashid" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                <a href="mailto:sohaibofficial25@gmail.com" className="social-icon"><FaEnvelope /></a>
              </div>
            </div>
          </div>
          <div className="hero-decoration">
            {['SQL','Power BI','Python','ETL','Azure'].map((t, i) => (
              <div key={t} className={`floating-card card${i + 1}`}>{t}</div>
            ))}
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section id="about" className="about">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline" />
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a <strong>Data Analyst & Software Engineer</strong> from Karachi with a BSc in Software Engineering
                from NED University Of Engineering & Technology. I bridge the gap between data engineering and
                full-stack development building pipelines that feed decisions, not just reports.
              </p>
              <p>
                Currently I'm working at <strong>AALOGICS</strong> delivering Odoo ERP solutions for international clients.
                Previously at <strong>Systems Limited</strong> designing ETL pipelines and Power BI dashboards,
                and at <strong>Irenic Tech</strong> automating workflows with n8n and AI agents.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years of experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4</span>
                <span className="stat-label">Featured projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">25%</span>
                <span className="stat-label">SQL speed gained</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">40%</span>
                <span className="stat-label">Processes automated</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SKILLS ══ */}
        <section id="skills" className="skills">
          <div className="section-title">
            <h2>Skills & Expertise</h2>
            <div className="underline" />
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([cat, tags]) => (
              <div className="skill-category-card" key={cat}>
                <h4>{cat}</h4>
                <div className="skills-list">
                  {tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="soft-skills-row">
            {[
              { icon: '🎯', label: 'Problem Solving' },
              { icon: '🤝', label: 'Team Collaboration' },
              { icon: '💬', label: 'Communication' },
            ].map(s => (
              <div className="soft-skill-pill" key={s.label}>
                <span>{s.icon}</span> {s.label}
              </div>
            ))}
          </div>
        </section>

        {/* ══ EXPERIENCE ══ */}
        <section id="experience" className="experience">
          <div className="section-title">
            <h2>Work Experience</h2>
            <div className="underline" />
          </div>
          <div className="timeline">
            {experience.map((job, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                  <div className="timeline-line" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-period">{job.period}</span>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <ul>
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section id="projects" className="projects">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <div className="underline" />
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
        </section>

        {/* ══ EDUCATION ══ */}
        <section id="education" className="education">
          <div className="section-title">
            <h2>Education & Certifications</h2>
            <div className="underline" />
          </div>
          <div className="education-grid">
            <div className="education-card education-main">
              <div className="education-icon"><FaGraduationCap /></div>
              <div>
                <h3>BSc Software Engineering</h3>
                <h4>Usman Institute of Technology — NED Affiliated</h4>
                <p className="edu-meta">Karachi, Pakistan · 2021 – 2025</p>
              </div>
            </div>

            <div className="certification-card">
              <h4>Certifications</h4>
              <div className="cert-list">
                <div className="cert-item">
                  <div className="cert-body">
                    <h5>Associate Data Analyst</h5>
                    <p>DataCamp · 2024</p>
                  </div>
                  <a href="https://www.datacamp.com/certificate/DAA0011758323874" target="_blank" rel="noopener noreferrer" className="cert-link">
                    View <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="cert-item">
                  <div className="cert-body">
                    <h5>Machine Learning with Python</h5>
                    <p>Udemy</p>
                  </div>
                  <a href="https://drive.google.com/file/d/1yNnj2dco_iTolxGVtuvo3HBrmYuQf4Kf/view" target="_blank" rel="noopener noreferrer" className="cert-link">
                    View <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="contact">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="underline" />
          </div>
          <div className="contact-container">
            <div className="contact-info">
              {[
                { icon: <FaEnvelope />,  label: 'Email',    value: 'sohaibofficial25@gmail.com', href: 'mailto:sohaibofficial25@gmail.com' },
                { icon: <FaMobile />,    label: 'Phone',    value: '+92 332 2145603',            href: 'tel:+923322145603' },
                { icon: <FaLinkedin />,  label: 'LinkedIn', value: 'muhammad-sohaib-rashid',     href: 'https://www.linkedin.com/in/muhammad-sohaib-rashid/', ext: true },
                { icon: <FaGithub />,    label: 'GitHub',   value: 'muhammadsohaibrashid',       href: 'https://github.com/muhammadsohaibrashid', ext: true },
              ].map(c => (
                <div className="contact-item" key={c.label}>
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <h3>{c.label}</h3>
                    <a href={c.href} target={c.ext ? '_blank' : undefined} rel={c.ext ? 'noopener noreferrer' : undefined}>
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Muhammad Sohaib Rashid. All Rights Reserved.</p>
          <p className="footer-subtitle">Open to remote opportunities worldwide · Karachi, Pakistan (UTC+5)</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/muhammadsohaibrashid" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:sohaibofficial25@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;