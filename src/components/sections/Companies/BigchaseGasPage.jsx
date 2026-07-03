import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

const BIGCHASE_URL = 'https://bigchaseafrica.com/'

function BigchaseGasPage({ fadeUp }) {
  return (
    <section className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        BIGCHASE Gas
      </motion.h2>

      <motion.article
        className="glass-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        <p className="company-tagline">Reliable Cooking Gas Supply and Home Delivery.</p>
        <p>
          BIGCHASE Gas is focused on safe and efficient cooking gas distribution, home delivery,
          and responsive customer service for households and businesses.
        </p>
        <ul>
          <li>Cooking Gas Distribution</li>
          <li>Home Delivery Services</li>
          <li>Commercial Supply</li>
          <li>Customer Support</li>
          <li>Safety-First Service Process</li>
        </ul>
        <div className="hero-actions">
          <a href={BIGCHASE_URL} className="primary-btn" target="_blank" rel="noreferrer">
            Visit Website <FaArrowRightLong />
          </a>
          <Link to="/companies" className="ghost-btn">
            Back to Companies
          </Link>
        </div>
      </motion.article>
    </section>
  )
}

export default BigchaseGasPage
