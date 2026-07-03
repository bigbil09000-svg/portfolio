import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'

function ContactSection({ fadeUp, contactItems }) {
  return (
    <section id="contact" className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        Contact
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="contact-intro"
      >
        Interested in working together? Let&apos;s connect.
      </motion.p>

      <div className="contact-layout">
        <motion.form
          className="glass-card contact-form"
          action="https://formspree.io/f/xykqbqlj"
          method="POST"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.45 }}
        >
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />

          <button type="submit" className="primary-btn">
            Send Message <FaArrowRightLong />
          </button>
        </motion.form>

        <motion.div
          className="glass-card contact-details"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          {contactItems.map((item) => (
            <a key={item.label} href={item.href} className="contact-row">
              <span className="contact-icon">{item.icon}</span>
              <div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
