import { motion } from 'framer-motion'

function GoalsSection({ fadeUp, timeline }) {
  return (
    <section id="goals" className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        Goals and Education
      </motion.h2>

      <motion.article
        className="glass-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        <h3>My Mission</h3>
        <p>
          My goal is to become a world-class software engineer who develops innovative technology solutions
          that make a positive impact.
        </p>
        <ul className="goal-list">
          <li>Build scalable web applications</li>
          <li>Contribute to open-source software</li>
          <li>Work on AI-powered products</li>
          <li>Expand expertise in cloud computing</li>
          <li>Create technology businesses that solve real-world problems</li>
          <li>Continuously learn and grow as a developer</li>
        </ul>
      </motion.article>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            className="timeline-item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default GoalsSection
