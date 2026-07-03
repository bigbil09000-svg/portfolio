import { useEffect, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaMoon,
  FaPhone,
  FaXmark,
  FaSun,
} from 'react-icons/fa6'
import AboutSection from './components/sections/AboutMe/AboutSection'
import CompaniesSection from './components/sections/Companies/CompaniesSection'
import BigchaseGasPage from './components/sections/Companies/BigchaseGasPage'
import ContactSection from './components/sections/Contact/ContactSection'
import GithubSection from './components/sections/GitHub/GithubSection'
import GoalsSection from './components/sections/Goals/GoalsSection'
import HomeSection from './components/sections/Home/HomeSection'
import ProjectsSection from './components/sections/Projects/ProjectsSection'
import SkillsSection from './components/sections/Skills/SkillsSection'

const GITHUB_URL = 'https://github.com/bigbil09000-svg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Companies', to: '/companies' },
  { label: 'GitHub', to: '/github' },
  { label: 'Goals', to: '/goals' },
  { label: 'Contact', to: '/contact' },
]

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'JavaScript (ES6+)', level: 86 },
      { name: 'React', level: 83 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', level: 82 },
      { name: 'Flask', level: 79 },
      { name: 'REST APIs', level: 77 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 84 },
      { name: 'GitHub', level: 86 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 72 },
      { name: 'VirtualBox', level: 70 },
    ],
  },
]

const learning = ['TypeScript', 'Node.js', 'MongoDB', 'Docker', 'AI Development', 'Cloud Computing']

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio showcasing my skills, projects, and professional journey.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: GITHUB_URL,
    demo: '#',
  },
  {
    title: 'Flask Web Application',
    description: 'A dynamic web application built using Flask and Python with clean architecture.',
    tech: ['Flask', 'Python', 'REST Routing'],
    github: GITHUB_URL,
    demo: '#',
  },
  {
    title: 'React Dashboard',
    description: 'Modern React interface featuring reusable components and responsive layouts.',
    tech: ['React', 'Reusable Components', 'Responsive UI'],
    github: GITHUB_URL,
    demo: '#',
  },
  {
    title: 'Renewable Energy Website',
    description:
      'Professional business website designed for a renewable energy company specializing in sustainable power solutions.',
    tech: ['Business Website', 'UI/UX', 'Performance'],
    github: GITHUB_URL,
    demo: '#',
  },
  {
    title: 'BIGCHASE Gas Website',
    description: 'Modern business website for cooking gas distribution and home delivery services.',
    tech: ['Service Platform', 'Mobile-First', 'Brand Identity'],
    github: GITHUB_URL,
    demo: '#',
  },
  {
    title: 'UI/UX Projects',
    description: 'Collection of responsive user interface designs and frontend recreations.',
    tech: ['Wireframes', 'Prototypes', 'Accessibility'],
    github: GITHUB_URL,
    demo: '#',
  },
]

const timeline = [
  {
    period: 'Present',
    title: 'Bachelor of Information Technology',
    detail:
      'Currently studying Information Technology with focus on software engineering, programming, networking, databases, and cybersecurity.',
  },
  {
    period: 'Ongoing',
    title: 'Personal and Professional Software Projects',
    detail:
      'Building practical projects across web development, full-stack applications, and business technology solutions.',
  },
]

const contactItems = [
  { label: 'Email', value: 'bigbil09000@gmail.com', href: 'mailto:bigbil09000@gmail.com', icon: <FaEnvelope /> },
  { label: 'Phone', value: '+905338764975', href: 'tel:+905338764975', icon: <FaPhone /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/chinedu-okafor', href: 'https://www.linkedin.com/in/chinedu-okafor', icon: <FaLinkedin /> },
  { label: 'GitHub', value: 'github.com/bigbil09000-svg', href: GITHUB_URL, icon: <FaGithub /> },
  { label: 'Location', value: 'Nicosia, Cyprus', href: '#', icon: <FaLocationDot /> },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function HomePage({ fadeUp, skills, learning, projects, githubUrl, timeline, contactItems }) {
  return (
    <>
      <HomeSection fadeUp={fadeUp} />
      <SkillsSection fadeUp={fadeUp} skills={skills} learning={learning} />
      <ProjectsSection fadeUp={fadeUp} projects={projects} />
      <CompaniesSection fadeUp={fadeUp} />
      <GithubSection fadeUp={fadeUp} githubUrl={githubUrl} />
      <GoalsSection fadeUp={fadeUp} timeline={timeline} />
      <ContactSection fadeUp={fadeUp} contactItems={contactItems} />
    </>
  )
}

function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="header-wrap">
        <nav className="top-nav container-width">
          <Link to="/" className="brand-mark brand-button" onClick={closeMenu}>
            CHINEDU Dev
          </Link>
          <div id="mobile-navigation" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? 'is-active' : '')}
                    end={item.to === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-controls">
            <button type="button" className="theme-button" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                fadeUp={fadeUp}
                skills={skills}
                learning={learning}
                projects={projects}
                githubUrl={GITHUB_URL}
                timeline={timeline}
                contactItems={contactItems}
              />
            }
          />
          <Route path="/about" element={<AboutSection fadeUp={fadeUp} />} />
          <Route path="/skills" element={<SkillsSection fadeUp={fadeUp} skills={skills} learning={learning} />} />
          <Route path="/projects" element={<ProjectsSection fadeUp={fadeUp} projects={projects} />} />
          <Route path="/companies" element={<CompaniesSection fadeUp={fadeUp} />} />
          <Route path="/companies/bigchase-gas" element={<BigchaseGasPage fadeUp={fadeUp} />} />
          <Route path="/github" element={<GithubSection fadeUp={fadeUp} githubUrl={GITHUB_URL} />} />
          <Route path="/goals" element={<GoalsSection fadeUp={fadeUp} timeline={timeline} />} />
          <Route path="/contact" element={<ContactSection fadeUp={fadeUp} contactItems={contactItems} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="container-width footer">
        <p>Copyright 2026 Chinedu Okafor</p>
        <p>Designed and Developed by Chinedu Okafor</p>
      </footer>
    </div>
  )
}

export default App
