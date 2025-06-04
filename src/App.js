import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMobile, FaPython, FaDatabase, FaCloudversify, FaChartBar } from 'react-icons/fa';
import { SiPowerbi, SiMicrosoftazure, SiAmazonaws, SiGit } from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
    <div className="app">
      <header>
        <div className="logo">MSR</div>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Sohaib Rashid</h1>
            <h2>Data Analyst & Engineer</h2>
            <p>Transforming data into actionable insights through analytics, visualization, and software engineering</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary">Get In Touch</a>
              <a href="#projects" className="btn secondary">View Projects</a>
            </div>
          </div>
          <div className="hero-image">
  <img 
    src={`${process.env.PUBLIC_URL}/profile.png`} 
    alt="Muhammad Sohaib Rashid" 
    className="profile-picture"
  />
</div>
        </section>
        
        <section id="about" className="about">
          <div className="section-title">
            <h2>About Me</h2>
            <div className="underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a Data Analyst with strong software engineering foundations, passionate about transforming complex data into actionable business insights. With expertise in SQL, Python, ETL processes, and visualization tools like Power BI, I specialize in optimizing data pipelines and creating impactful dashboards that drive strategic decision-making.</p>
              <p>Currently completing my Bachelor's in Software Engineering from Usman Institute of Technology (NED), I've gained practical experience through my internship at Systems Limited where I improved data processing efficiency by 30% and optimized ETL pipelines resulting in 40% faster data load times.</p>
              <p>I enjoy tackling complex data challenges and am constantly expanding my skills in cloud technologies and advanced analytics. My goal is to continue bridging the gap between data science and software engineering to create innovative solutions.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years of DataBase Experience</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
                <p>Data Projects Completed</p>
              </div>
              <div className="stat">
                <h3>40%</h3>
                <p>ETL Optimization</p>
              </div>
              <div className="stat">
                <h3>30%</h3>
                <p>Data Process Automation</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="experience" className="experience">
          <div className="section-title">
            <h2>Work Experience</h2>
            <div className="underline"></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Aug 2024 - Oct 2024</div>
              <div className="timeline-content">
                <h3>Intern – Data Analyst</h3>
                <h4>Systems Limited, Karachi (On-Site)</h4>
                <ul>
                  <li>Collaborated with cross-functional teams to refine SQL processes, reducing processing time by 30%</li>
                  <li>Optimized ETL pipelines using SSIS, resolving complex data transformation challenges and reducing data load times by 40%</li>
                  <li>Improved SQL query performance by 25% through partitioning, and stored procedure optimizations</li>
                  <li>Designed Power BI dashboards to translate complex data insights into actionable business strategies, improving planning accuracy by 20%</li>
                  <li>Automated repetitive data processes using SQL scripts and SSIS packages, reducing manual effort by 30%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects" className="projects">
          <div className="section-title">
            <h2>Projects</h2>
            <div className="underline"></div>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Maven Super Market Analysis</h3>
                <div className="project-links">
                  <a href="https://www.linkedin.com/posts/muhammad-sohaib-rashid_powerbi-dataanalysis-datavisualization-activity-7240383081021362176-VyR_?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="btn small">View Project</a>
                </div>
              </div>
              <div className="project-body">
                <p>Interactive Power BI dashboard with dedicated pages for Sales, Returns, Orders, and Customer Insights.</p>
                <ul>
                  <li>Increased reporting efficiency by 35% and reduced manual effort by 50%</li>
                  <li>Refined data modeling with DAX and Power Query, integrating 15+ data sources</li>
                  <li>Improved sales forecasting accuracy by 20% with KPI-driven trend analysis</li>
                </ul>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>DAX</span>
                  <span>Data Modeling</span>
                </div>
              </div>
            </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Junior Data Analyst Jobs - Canada</h3>
              <div className="project-links">
                <a 
                  href="/data-analyst-jobs-canada" 
                  className="btn small"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('/data-analyst-jobs.html', '_blank');
                  }}
                >
                  View Presentation
                </a>
                <a 
                href="https://drive.google.com/file/d/1NkoaMEH1zCmyRBX-Kb9IQb3Thx_cfsbL/preview"

                className="btn small video-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📹 Watch Detailed Explaination
                </a>
              </div>
            </div>
            <div className="project-body">
              <p>End-to-end analysis of junior data analyst positions across Canada, from web scraping to interactive dashboards.</p>
              <ul>
                <li>Collected data using hybrid scraping (Selenium + AI augmentation)</li>
                <li>Built ETL pipelines with SSIS and SQL Server</li>
                <li>Created interactive Power BI dashboards with geospatial analysis</li>
              </ul>
              <div className="project-tech">
                <span>Python</span>
                <span>SSIS</span>
                <span>SQL Server</span>
                <span>Power BI</span>
              </div>
            </div>
          </div>
            
            <div className="project-card">
              <div className="project-header">
                <h3>YouTube Video Optimization Tool</h3>
                <div className="project-links">
                  <a href="#" className="btn small">Final Year Project</a>
                </div>
              </div>
              <div className="project-body">
                <p>Full-stack platform for YouTube video optimization with AI integration for SEO and content enhancement.</p>
                <ul>
                  <li>Built automated data pipelines for video processing using Python, Django, React, and AWS</li>
                  <li>Leveraged cloud storage (Firebase, AWS S3) for scalable video management</li>
                  <li>Integrated AI models (LLMs) for content analysis and metadata enhancement</li>
                  <li>Implemented OAuth authentication and YouTube API integration</li>
                </ul>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Django</span>
                  <span>React</span>
                  <span>AWS</span>
                  <span>AI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="skills" className="skills">
          <div className="section-title">
            <h2>Technical Skills</h2>
            <div className="underline"></div>
          </div>
          <div className="skills-content">
            <div className="skill-category">
              <h3><FaPython className="skill-icon" /> Programming & Data Analysis</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <span>Python</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>SQL</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Snowflake Architecture</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Data Modeling</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><FaChartBar className="skill-icon" /> ETL, Data Pipelines & Visualization</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <span>SSIS (ETL)</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Power BI (DAX, Visualizations)</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Dashboard Development</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Data Insights</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><FaCloudversify className="skill-icon" /> Cloud & Infrastructure</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <span>Azure (Basics)</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>AWS (Basics)</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Cloud Data Storage (S3, Firebase)</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Server-less Architecture</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3><SiGit className="skill-icon" /> Version Control & Collaboration</h3>
              <div className="skill-bars">
                <div className="skill-item">
                  <span>Git</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>GitHub</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span>Open-source Contribution</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="contact">
          <div className="section-title">
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:sohaibofficial25@gmail.com">sohaibofficial25@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <FaMobile className="contact-icon" />
                <div>
                  <h3>Phone</h3>
                  <p><a href="tel:+923322145603">+92 332 2145603</a></p>
                </div>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer">muhammad-sohaib-rashid</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <footer>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Muhammad Sohaib Rashid. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/muhammad-sohaib-rashid/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:sohaibofficial25@gmail.com"><FaEnvelope /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;