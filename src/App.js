import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMobile, FaPython, FaDatabase, FaAws, FaChartBar, FaCode, FaServer, FaCubes, FaRobot, FaBriefcase, FaGraduationCap, FaArrowDown, FaExternalLinkAlt, FaChartLine } from 'react-icons/fa';
import { 
  SiPowerbi,          
  SiMicrosoftazure, 
  SiFirebase,         
  SiDocker,           
  SiDjango,           
  SiOdoo,            
  SiN8N,              
} from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app" style={{
      '--mouse-x': `${mousePosition.x}px`,
      '--mouse-y': `${mousePosition.y}px`,
    }}>
      {/* Animated background elements */}
      <div className="bg-orbs"></div>
      <div className="grid-background"></div>

      <header>
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon"><FaChartLine /></span>
            <span className="logo-text">Sohaib</span>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Education</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <img src="./profile.jpeg" alt="Muhammad Sohaib Rashid" />
              </div>
            </div>
            <div className="hero-text">
              <h1>Muhammad Sohaib Rashid</h1>
              <h2 className="gradient-text">Junior Data Analyst | SQL • Power BI • ETL • Python • Azure</h2>
              <p>Transforming raw data into actionable business insights through advanced analytics, 
                 intelligent visualization, and scalable software engineering solutions.</p>
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
            <div className="floating-card card1">SQL</div>
            <div className="floating-card card2">Power BI</div>
            <div className="floating-card card3">Python</div>
            <div className="floating-card card4">ETL</div>
            <div className="floating-card card5">Azure</div>
          </div>
        </section>
        
        {/* ABOUT SECTION */}
        <section id="about" className="about">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate <strong>Data Analyst & Software Engineer</strong> with a Bachelor's degree in Software Engineering from Usman Institute of Technology, NED University of Engineering and Technology. I specialize in transforming complex data into actionable business insights through advanced analytics, intelligent visualization, and scalable solutions.</p>
              
              <p><strong>Professional Experience:</strong> As an <strong>Associate Software Engineer at AALOGICS</strong>, I've designed and implemented Odoo ERP solutions for international clients, developed Python-based automation modules, and optimized complex business workflows. During my <strong>AI Automation Internship at Irenic Tech</strong>, I architected n8n workflows connecting multiple platforms, deployed AI agents across WhatsApp and Telegram, and automated 40% of manual data processing tasks.</p>
              
              <p><strong>Data Engineering Foundation:</strong> My <strong>Data Analytics Internship at Systems Limited</strong> provided hands-on experience in designing scalable ETL pipelines, optimizing SQL queries for 25% performance improvement, building Power BI dashboards for stakeholder decision-making, and implementing star-schema data warehouses. I'm passionate about continuous learning and bridging the gap between data engineering and full-stack software development.</p>
            </div>
            <div className="about-skills-showcase">
              <div className="skill-showcase-item">
                <div className="skill-showcase-icon"><FaDatabase /></div>
                <h4>Data Architecture</h4>
                <p>Star schema design, ETL optimization, query performance tuning</p>
              </div>
              <div className="skill-showcase-item">
                <div className="skill-showcase-icon"><FaChartBar /></div>
                <h4>BI & Analytics</h4>
                <p>Power BI dashboards, DAX formulas, KPI visualization</p>
              </div>
              <div className="skill-showcase-item">
                <div className="skill-showcase-icon"><FaPython /></div>
                <h4>Software Development</h4>
                <p>Python, Django, Odoo ORM, REST APIs</p>
              </div>
              <div className="skill-showcase-item">
                <div className="skill-showcase-icon"><FaDatabase  /></div>
                <h4>Cloud & Tools</h4>
                <p>Azure, AWS, Docker, n8n automation</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* EXPERIENCE SECTION */}
        <section id="experience" className="experience">
          <div className="section-title">
            <h2>Work Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item timeline-first">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Oct 2025 - Present</div>
              <div className="timeline-content">
                <h3>Associate Software Engineer — Python | Odoo</h3>
                <h4>AALOGICS | Karachi, Pakistan (On-Site)</h4>
                <p className="role-desc">International & Client Projects for Spectra Solar, Edhi Organization, and Internal ERP Systems</p>
                <ul>
                  <li>Set up multi-company Odoo structures with role-based access controls and user permissions aligned to international client workflows</li>
                  <li>Rebuilt 10+ CRM pipelines and business stages, resulting in faster daily navigation and operational efficiency for client teams</li>
                  <li>Integrated 2 external communication APIs (SMS Gateway & WhatsApp) into Odoo environment for seamless client communication</li>
                  <li>Configured payment methods and optimized donation management workflows, resolving transaction fee calculations for NGOs</li>
                  <li>Upgraded company ERP from Odoo 17 to 18/19 across 3 core modules with zero production downtime</li>
                  <li>Created 5+ custom backend modules using Python and Odoo ORM, eliminating repetitive HR tasks and improving data reliability</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-right">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Aug 2025 - Oct 2025</div>
              <div className="timeline-content">
                <h3>AI Automation Intern</h3>
                <h4>Irenic Tech | Karachi, Pakistan (On-Site)</h4>
                <ul>
                  <li>Scripted n8n automations connecting Gmail, Google Sheets, Supabase, and Airtable, reducing manual processing by 40%</li>
                  <li>Deployed AI agents across WhatsApp, Telegram, and Web for instant query handling and lead qualification</li>
                  <li>Shipped 3 full-cycle automation solutions: Apollo API lead pipeline, Google Drive template auto-fill system, and AI-driven resume screening tool</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item timeline-left">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Aug 2024 - Oct 2024</div>
              <div className="timeline-content">
                <h3>Data Analyst Intern</h3>
                <h4>Systems Limited | Karachi, Pakistan (On-Site)</h4>
                <ul>
                  <li>Optimized SQL queries using JOINs, CTEs, and stored procedures, achieving 25% improvement in query execution speed</li>
                  <li>Built 2 SSIS ETL pipelines with complex data transformations, derived columns, and lookup steps reducing data load times by 40%</li>
                  <li>Designed star-schema data warehouse structures in SQL Server and pushed cleaned data to Power BI for stakeholder consumption</li>
                  <li>Developed 3+ Power BI dashboards with DAX measures, providing real-time visibility into KPIs and operational metrics</li>
                  <li>Automated 30% of repetitive data processes using SQL scripts and SSIS packages, reducing manual effort significantly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* PROJECTS SECTION */}
        <section id="projects" className="projects">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-header">
                <h3>Analysis of Junior Data Analyst Roles in Canada</h3>
              </div>
              <div className="project-body">
                <p>End-to-end analysis of 1,000+ Canadian job postings using advanced data collection and BI visualization techniques.</p>
                <ul>
                  <li>Collected and analyzed data via Selenium web scraping and AI augmentation to uncover market trends</li>
                  <li>Built multi-step SSIS ETL pipeline for data cleansing, standardization, and loading into SQL Server star-schema</li>
                  <li>Created 3+ interactive Power BI dashboards with salary analysis, skill frequency charts, and regional insights</li>
                  <li>Reduced manual analysis time by 70% and provided actionable insights for job seekers and recruiters</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>SSIS</span>
                  <span>SQL Server</span>
                  <span>Power BI</span>
                  <span>Data Scraping</span>
                </div>
                <div className="project-links">
                  <a href="/data-analyst-jobs.html" className="btn small" target="_blank">View Presentation</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-header">
                <h3>Maven Super Market Analysis Dashboard</h3>
              </div>
              <div className="project-body">
                <p>Interactive Power BI dashboard providing comprehensive insights into sales, returns, orders, and customer behavior.</p>
                <ul>
                  <li>Designed multi-page Power BI dashboard with dedicated sections for Sales, Returns, Orders, and Customer Analytics</li>
                  <li>Refined data modeling with DAX formulas and Power Query, integrating 15+ data sources seamlessly</li>
                  <li>Improved reporting efficiency by 35% and reduced manual effort by 50% through automated dashboards</li>
                  <li>Enhanced sales forecasting accuracy by 20% through KPI-driven trend analysis and trend visualizations</li>
                </ul>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>DAX</span>
                  <span>Power Query</span>
                  <span>Data Modeling</span>
                </div>
                <div className="project-links">
                  <a href="https://www.linkedin.com/posts/muhammad-sohaib-rashid_powerbi-dataanalysis-datavisualization-activity-7240383081021362176-VyR_?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn small">View on LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-header">
                <h3>YouTube Video Optimization Platform</h3>
              </div>
              <div className="project-body">
                <p>Full-stack platform leveraging AI and cloud technologies for automated YouTube video optimization and enhancement.</p>
                <ul>
                  <li>Developed end-to-end platform combining Python, Django, React, and AWS for video processing at scale</li>
                  <li>Built intelligent data pipelines for noise reduction, resolution optimization, and automated clip extraction</li>
                  <li>Integrated AI-powered LLMs for content analysis, automatic captioning, and metadata generation</li>
                  <li>Implemented OAuth authentication and YouTube Data API integration with secure video upload/reprocessing capabilities</li>
                  <li>Utilized AWS S3 and Firebase for scalable cloud storage and reliable data management</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Django</span>
                  <span>React</span>
                  <span>AWS</span>
                  <span>AI/LLM</span>
                  <span>Firebase</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn small">Final Year Project</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-glow"></div>
              <div className="project-header">
                <h3>Complete End-to-End Azure Data Engineering Pipeline</h3>
              </div>
              <div className="project-body">
                <p>Real-world Azure Data Engineering project covering the complete modern data stack from on-premises raw data to cloud analytics and Power BI dashboards.</p>
                <ul>
                  <li>Implemented Azure Data Factory with Self-Hosted Integration Runtime to ingest on-premises CSV data into Azure cloud</li>
                  <li>Integrated GitHub version control directly with ADF, ensuring all pipelines, linked services, and datasets are tracked and versioned</li>
                  <li>Configured Azure Logic Apps for automated email alerting on pipeline success/failure events with real-time notifications</li>
                  <li>Set up Azure Monitor for comprehensive pipeline health tracking and performance metrics visualization</li>
                  <li>Secured sensitive credentials using Azure Key Vault with Databricks Secret Scope integration for secure access</li>
                  <li>Performed data transformation in Azure Databricks using PySpark, handling data cleaning, type conversions, and writing to ADLS Gen2</li>
                  <li>Queried and validated transformed data using SQL in Azure Synapse Analytics for business intelligence extraction</li>
                  <li>Built interactive Power BI dashboards connected to Synapse for stakeholder visualization and decision-making</li>
                </ul>
                <div className="project-tech">
                  <span>Azure Data Factory</span>
                  <span>Databricks</span>
                  <span>Azure Synapse</span>
                  <span>PySpark</span>
                  <span>Power BI</span>
                  <span>Logic Apps</span>
                  <span>Azure Key Vault</span>
                </div>
                <div className="project-links">
                  <a href="https://www.linkedin.com/posts/muhammad-sohaib-rashid_dataengineering-azuredataengineer-microsoftazure-ugcPost-7460014645215633409-OjX-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7CMawBz5Lr_RCu3dc93m2QQuqmWEdc_8M" target="_blank" rel="noopener noreferrer" className="btn small">View on LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* SKILLS SECTION */}
        <section id="skills" className="skills">
          <div className="section-title">
            <h2>Skills & Expertise</h2>
            <div className="underline"></div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="skills-category">
            <h3 className="skills-category-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category-card">
                <div className="skill-icon-box"><FaDatabase /></div>
                <h4>Data Engineering</h4>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Data Modelling</span>
                  <span className="skill-tag">Pandas</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">DAX</span>
                  <span className="skill-tag">KPI Dashboards</span>
                  <span className="skill-tag">Data Visualization</span>
                  <span className="skill-tag">SSIS/ETL</span>
                  <span className="skill-tag">Stored Procedures</span>
                  <span className="skill-tag">Star Schema</span>
                  <span className="skill-tag">Data Warehousing</span>
                </div>
              </div>

              <div className="skill-category-card">
                <div className="skill-icon-box"><FaDatabase /></div>
                <h4>Azure Data Stack</h4>
                <div className="skills-list">
                  <span className="skill-tag">Azure Data Factory</span>
                  <span className="skill-tag">Azure Synapse</span>
                  <span className="skill-tag">Databricks</span>
                  <span className="skill-tag">Azure Key Vault</span>
                  <span className="skill-tag">Logic Apps</span>
                  <span className="skill-tag">Azure Monitor</span>
                </div>
              </div>

              <div className="skill-category-card">
                <div className="skill-icon-box"><FaAws /></div>
                <h4>Cloud & DevOps</h4>
                <div className="skills-list">
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">AWS EC2</span>
                  <span className="skill-tag">Firebase</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Git/GitHub</span>
                </div>
              </div>

              <div className="skill-category-card">
                <div className="skill-icon-box"><FaRobot /></div>
                <h4>AI & Automation</h4>
                <div className="skills-list">
                  <span className="skill-tag">n8n Workflows</span>
                  <span className="skill-tag">LLM Integration</span>
                  <span className="skill-tag">AI Agents</span>
                </div>
              </div>

              <div className="skill-category-card">
                <div className="skill-icon-box"><FaCode /></div>
                <h4>Software Engineering</h4>
                <div className="skills-list">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">Odoo ORM</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* SOFT SKILLS */}
          <div className="skills-category soft-skills-section">
            <h3 className="skills-category-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🎯</div>
                <h4>Problem Solving</h4>
                <p>Analytical thinking & creative solution design</p>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">🤝</div>
                <h4>Team Collaboration</h4>
                <p>Cross-functional teamwork & knowledge sharing</p>
              </div>
              <div className="soft-skill-item">
                <div className="soft-skill-icon">💬</div>
                <h4>Communication</h4>
                <p>Clear technical documentation & stakeholder engagement</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* EDUCATION SECTION */}
        <section id="education" className="education">
          <div className="section-title">
            <h2>Education & Certifications</h2>
            <div className="underline"></div>
          </div>
          
          <div className="education-grid">
            <div className="education-card education-main">
              <div className="education-icon"><FaGraduationCap /></div>
              <h3>Bachelor of Science in Software Engineering (BSSE)</h3>
              <h4>Usman Institute of Technology — NED Affiliated</h4>
              <p className="location">Karachi, Pakistan</p>
              <p className="year">2021 - 2025</p>
            </div>

            <div className="certification-card">
              <h4>📜 Certifications</h4>
              <div className="cert-list">
                <div className="cert-item">
                  <h5>Associate Data Analyst</h5>
                  <p>DataCamp (2024)</p>
                  <a href="https://www.datacamp.com/certificate/DAA0011758323874" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate ↗</a>
                </div>
                <div className="cert-item">
                  <h5>Machine Learning with Python</h5>
                  <p>Udemy</p>
                  <a href="https://drive.google.com/file/d/1yNnj2dco_iTolxGVtuvo3HBrmYuQf4Kf/view" target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="contact">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:sohaibofficial25@gmail.com">sohaibofficial25@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaMobile /></div>
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+923322145603">+92 332 2145603</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaLinkedin /></div>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer">muhammad-sohaib-rashid</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><FaGithub /></div>
                <div>
                  <h3>GitHub</h3>
                  <p><a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Muhammad Sohaib Rashid. All Rights Reserved.</p>
          <p className="footer-subtitle">Open to remote opportunities worldwide • Karachi, Pakistan (UTC+5)</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:sohaibofficial25@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;