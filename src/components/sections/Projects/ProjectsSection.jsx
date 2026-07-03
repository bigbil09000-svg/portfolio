import { motion } from 'framer-motion'
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6'

function ProjectsSection({ fadeUp, projects }) {
  return (
    <section id="projects" className="container-width section-block">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.45 }}
      >
        Featured Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-card project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-wrap">
              {project.tech.map((tech) => (
                <span key={tech} className="chip muted">
                  {tech}
                </span>
              ))}
            </div>
            <div className="card-links">
              <a href={project.github} target="display" rel="github/bigbil09000-svg">
                <FaGithub /> 
              </a>
              <a href={project.demo} target="display" rel="github/bigbil09000-svg">
                 <FaArrowRightLong />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
