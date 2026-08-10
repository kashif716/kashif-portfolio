import React, { useEffect, useState } from 'react'
import {
  Award, BriefcaseBusiness, CheckCircle2, Code2, Download, ExternalLink,
  Github, Linkedin, Mail, Menu, Phone, Send, ServerCog,
  Sparkles, UserRound, Wrench, X,
} from 'lucide-react'

const navItems = [
  ['summary', 'Summary', UserRound],
  ['skills', 'Skills', Wrench],
  ['experience', 'Experience', BriefcaseBusiness],
  ['certifications', 'Education & Certifications', Award],
  ['projects', 'Projects', Code2],
  ['contact', 'Contact', Mail],
]

const resumeUrl = `${import.meta.env.BASE_URL}Kashif-Ali-Resume.pdf`

const skills = [
  ['Cloud (AWS)', ['EC2', 'S3', 'RDS', 'IAM', 'VPC', 'Route 53', 'ECR', 'ECS', 'ELB', 'Auto Scaling', 'CloudWatch', 'CloudFront', 'SNS', 'SQS', 'Lambda', 'API Gateway', 'Secrets Manager']],
  ['Other Cloud Platforms', ['Vercel', 'Fly.io']],
  ['CI/CD', ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'AWS CodeBuild', 'Bitbucket Pipelines']],
  ['Containerization', ['Docker', 'Docker Compose', 'Amazon ECR', 'Amazon EKS', 'Kubernetes', 'Helm']],
  ['Infrastructure as Code', ['Ansible', 'Terraform (basic)']],
  ['Monitoring & Logging', ['AWS CloudWatch', 'log management tools']],
  ['Version Control', ['Git', 'GitHub', 'Bitbucket']],
  ['Web Servers & Scripting', ['Nginx', 'Apache', 'Python', 'Bash']],
  ['Networking & Databases', ['VPC', 'Subnets', 'Security Groups', 'Load Balancers', 'MySQL', 'non-relational databases']],
]

const experience = [
  {
    date: 'Mar 2025 – May 2026',
    role: 'DevOps ',
    company: 'ZAD Technologies · Lahore, Pakistan',
    points: [
      'Built and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate builds and deployments.',
      'Containerized applications with Docker and Docker Compose for consistent multi-environment deployments.',
      'Managed AWS infrastructure — EC2, RDS, S3, IAM, and VPC — for reliable application hosting.',
      'Automated server configuration and deployments using Ansible.',
      'Set up CloudWatch monitoring and logging for proactive issue detection.',
      'Troubleshot build, deployment, and infrastructure issues to minimize downtime.',
    ],
  },
]

const certifications = [
  ['Education', ['BS Computer Science — Virtual University of Pakistan', 'ICS (Computer Science) — Aspire College, Okara', 'Matriculation (Computer Science) — Govt. High School, Okara']],
  ['Certifications', ['AWS Certified Cloud Practitioner — Amazon Web Services', 'DevOps Bootcamp — TrainWithShubham', 'AWS Zero to Hero — TrainWithShubham', 'Computer Networking — TrainWithShubham', 'Git & GitHub Certification — TrainWithShubham', 'Linux — TrainWithShubham']],
  ['Languages', ['Urdu — Full Professional Proficiency', 'English — Working Proficiency']],
]

const projects = [
  {
    icon: ServerCog,
    title: 'AWS DevOps Automation Platform',
    description: 'Built a cloud-native deployment workflow for containerized services using Jenkins, Docker, AWS ECR, and Kubernetes, with automation for build, release, and monitoring.',
    tags: ['Jenkins', 'Docker', 'AWS ECR', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: ServerCog,
    title: 'PitchPlaylist — Full-Stack Cloud Deployment',
    description: 'Designed and deployed a full-stack application using Bitbucket Pipelines for end-to-end CI/CD automation. Built Docker images, pushed them to Amazon ECR, and deployed to EC2 while hosting the frontend on Amazon S3.',
    tags: ['Bitbucket Pipelines', 'Docker', 'Amazon ECR', 'EC2', 'S3'],
  },
  {
    icon: ServerCog,
    title: 'Two-Tier Flask Application on Amazon EKS',
    description: 'Built and containerized a two-tier Flask application with a MySQL backend using separate Docker containers, published to Docker Hub, and deployed to Amazon EKS using Kubernetes and Helm with CI/CD automation through Jenkins and GitHub.',
    tags: ['Flask', 'MySQL', 'Docker', 'Kubernetes', 'Helm', 'Jenkins'],
  },
  {
    icon: Code2,
    title: 'Django Notes App',
    description: 'Developed and deployed a full-stack application using Django, React, and MySQL. Built a Jenkins CI/CD pipeline and containerized the application with Docker for consistent deployments.',
    tags: ['Django', 'React', 'MySQL', 'Jenkins', 'Docker'],
  },
  {
    icon: ServerCog,
    title: 'Spring Boot CI/CD Pipeline',
    description: 'Designed a Jenkins and Maven pipeline for automated build and deployment of a Spring Boot application on AWS.',
    tags: ['Spring Boot', 'Jenkins', 'Maven', 'AWS'],
  },
  {
    icon: Sparkles,
    title: 'Next.js Application Deployment',
    description: 'Deployed a modern web application on Vercel with GitHub Actions integration for continuous deployment.',
    tags: ['Vercel', 'GitHub Actions'],
  },
]

function Sidebar({ active, open, onClose }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <button className="close-menu" onClick={onClose} aria-label="Close menu"><X /></button>
      <div className="profile">
        <div className="avatar">
          <img src={`${import.meta.env.BASE_URL}kashif-profile-suit.png`} alt="Kashif Ali in a professional three-piece suit" />
        </div>
        <div className="availability"><span /> Available for opportunities</div>
        <h1>Kashif Ali</h1>
        <p>DevOps Engineer</p>
        <div className="gold-badge"><Code2 size={16} /> Automating reliable deliveryivery</div>
      </div>
      <nav>
        {navItems.map(([id, label, Icon]) => (
          <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={onClose}>
            <Icon size={18} /> {label}
          </a>
        ))}
      </nav>
      <div className="sidebar-contact">
        <a href="tel:+923432397908"><Phone size={16} /> +92 343 2397908</a>
        <a href={resumeUrl} target="_blank" rel="noreferrer"><Download size={16} /> View Resume</a>
        <a href="https://www.linkedin.com/in/kashif-ali-8917a7374/" target="_blank" rel="noreferrer"><Linkedin size={16} /> Connect on LinkedIn</a>
        <a href="https://github.com/kashif716" target="_blank" rel="noreferrer"><Github size={16} /> github.com/kashif716</a>
        <div className="socials">
          <a href="https://www.linkedin.com/in/kashif-ali-8917a7374/" target="_blank" rel="noreferrer" aria-label="Kashif Ali on LinkedIn"><Linkedin /></a>
          <a href="https://github.com/kashif716" target="_blank" rel="noreferrer" aria-label="Kashif Ali on GitHub"><Github /></a>
        </div>
      </div>
    </aside>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default function App() {
  const [active, setActive] = useState('summary')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -60%' },
    )
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
      {menuOpen && <button className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-label="Close menu" />}
      <Sidebar active={active} open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <section id="summary" className="hero">
          <div className="hero-glow" />
          <p className="kicker">HELLO, I'M KASHIF</p>
          <h2>Delivering reliable software with DevOps practices.</h2>
          <p className="hero-copy">
            DevOps Engineer with hands-on experience designing CI/CD pipelines, containerizing applications, and managing cloud infrastructure across AWS, Vercel, and Fly.io.
            Skilled in Docker, Kubernetes, Jenkins, GitHub Actions, and Ansible, with a track record of automating deployments and improving release reliability.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact"><Mail size={18} /> Get in touch</a>
            <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer"><Download size={18} /> View Resume</a>
          </div>
          <div className="stats">
            <div><strong>Code</strong><span>Practical projects</span></div>
            <div><strong>Learn</strong><span>Modern technology</span></div>
            <div><strong>Build</strong><span>Useful experiences</span></div>
          </div>
        </section>

        <Section id="skills" eyebrow="EXPERTISE" title="Technical Skills">
          <div className="skills-grid">
            {skills.map(([title, items], index) => (
              <article className="skill-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="JOURNEY" title="Professional Experience">
          <div className="timeline">
            {experience.map(job => (
              <article className="timeline-item" key={job.date}>
                <div className="timeline-date">{job.date}</div>
                <div className="timeline-content">
                  <h3>{job.role}</h3>
                  <h4>{job.company}</h4>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="QUALIFICATIONS" title="Education & Certifications">
          <div className="award-banner">
            <div className="award-icon"><Github /></div>
            <div><span>PUBLIC PROFILE</span><h3>Follow My Development Journey</h3><p>Explore my latest repositories, experiments, and project source code on GitHub.</p></div>
          </div>
          <div className="cert-grid">
            {certifications.map(([level, certs]) => (
              <article className="cert-card" key={level}>
                <h3>{level}</h3>
                <ul>{certs.map(cert => <li key={cert}><CheckCircle2 size={17} />{cert}</li>)}</ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="SELECTED WORK" title="Featured Projects">
          <div className="projects-grid">
            {projects.map(({ icon: Icon, title, description, tags, url }) => (
              <article className="project-card" key={title}>
                <div className="project-top"><div className="project-icon"><Icon /></div>{url && <a href={url} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}><ExternalLink size={19} /></a>}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="LET'S CONNECT" title="Get In Touch">
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Have a project or opportunity?</h3>
              <p>I’m open to DevOps opportunities, collaborations, and conversations about automation, infrastructure, and reliable software delivery.</p>
              <a href="tel:+923432397908">
                <Phone />
                <span>Phone<strong>+92 343 2397908</strong></span>
              </a>
              <a href="mailto:kashif71659621@gmail.com">
                <Mail />
                <span>Email<strong>kashif71659621@gmail.com</strong></span>
              </a>
              <div className="profile-links">
                <a href="https://www.linkedin.com/in/kashif-ali-8917a7374/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a href="https://github.com/kashif716" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              </div>
            </div>
            <form className="contact-form" action="https://formsubmit.co/kashif71659621@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_template" value="table" />
              <input className="form-honey" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
              <label>Name<input name="name" placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
              <label>Subject<input name="subject" placeholder="How can I help?" required /></label>
              <label>Message<textarea name="message" rows="5" placeholder="Tell me about your project..." required /></label>
              <button className="button primary" type="submit"><Send size={18} /> Send message</button>
            </form>
          </div>
        </Section>

        <footer><span>© 2026 Kashif Ali</span><span>Designed with care. Built to keep growing.</span></footer>
      </main>
    </div>
  )
}
