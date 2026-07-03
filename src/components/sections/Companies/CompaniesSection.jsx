import { motion } from 'framer-motion'

const RUALABS_URL = 'https://metaoslabs.com/'
const BIGCHASE_URL = 'https://bigchaseafrica.com/'
const BIGCHASE_MUSIC_URL = 'https://bigchasemusic.com/'

function CompaniesSection({ fadeUp }) {
  return (
    <section id="companies" className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        My Companies
      </motion.h2>

      <div className="company-grid">
        <motion.article
          className="glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
        >
          <h3>Rualabs Technology</h3>
          <p className="company-tagline">Innovating Today. Building the Technology of Tomorrow.</p>
          <p>
            Rualabs Technology develops innovative software solutions, modern websites, AI-powered
            applications, and custom digital platforms for businesses worldwide.
          </p>
          <ul>
            <li>Web Development</li>
            <li>Software Development</li>
            <li>AI Solutions</li>
            <li>Cloud Applications</li>
            <li>Business Automation</li>
          </ul>
          <a href={RUALABS_URL} className="ghost-btn" target="_blank" rel="noreferrer">
            Visit Rualabs
          </a>
        </motion.article>

        <motion.article
          className="glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <h3>BIGCHASE Music Productions</h3>
          <p className="company-tagline">Creating Music That Inspires. Producing Excellence That Lasts.</p>
          <p>
            BIGCHASE Music Productions is an independent music production company dedicated to producing
            high-quality music, artist development, and professional audio production.
          </p>
          <ul>
            <li>Music Production</li>
            <li>Recording</li>
            <li>Mixing</li>
            <li>Mastering</li>
            <li>Artist Development</li>
          </ul>
          <a href={BIGCHASE_MUSIC_URL} className="ghost-btn" target="_blank" rel="noreferrer">
            Visit BIGCHASE Music
          </a>
        </motion.article>

        <motion.article
          className="glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          <h3>BIGCHASE Gas</h3>
          <p className="company-tagline">Fast, Safe, and Reliable Cooking Gas Supply.</p>
          <p>
            BIGCHASE Gas provides dependable cooking gas distribution and home delivery services for
            households and businesses, focused on convenience, safety, and responsive support.
          </p>
          <ul>
            <li>Cooking Gas Distribution</li>
            <li>Home Delivery</li>
            <li>Commercial Supply</li>
            <li>Safety-Focused Operations</li>
            <li>Customer Support</li>
          </ul>
          <a href={BIGCHASE_URL} className="ghost-btn" target="_blank" rel="noreferrer">
            Visit BIGCHASE Gas Website
          </a>
        </motion.article>
      </div>
    </section>
  )
}

export default CompaniesSection
