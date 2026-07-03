import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'

function GithubSection({ fadeUp, githubUrl }) {
  return (
    <motion.section
      id="github"
      className="container-width section-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <h2>My Open Source Journey</h2>
      <p>
        I enjoy building projects that demonstrate my growth as a developer. Visit my GitHub to explore my
        code, experiments, and completed projects.
      </p>
      <a href={githubUrl} className="primary-btn github-btn" target="_blank" rel="noreferrer">
        <FaGithub /> View GitHub
      </a>
    </motion.section>
  )
}

export default GithubSection
