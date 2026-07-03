import { motion } from 'framer-motion'

function SkillsSection({ fadeUp, skills, learning }) {
  return (
    <section id="skills" className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <motion.article
            key={group.category}
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3>{group.category}</h3>
            <div className="skill-list">
              {group.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-head">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track">
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.article
        className="glass-card learning-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        <h3>Currently Learning</h3>
        <div className="chip-wrap">
          {learning.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </motion.article>
    </section>
  )
}

export default SkillsSection
