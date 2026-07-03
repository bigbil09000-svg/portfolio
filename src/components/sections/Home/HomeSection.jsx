import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiDownload } from 'react-icons/fi'

const slides = [
  {
    src: '/home-slides/image.png',
    alt: 'Creative visual slide one',
  },
  {
    src: '/home-slides/Untitled9.png',
    alt: 'Creative visual slide two',
  },
  {
    src: '/home-slides/RUA.png',
    alt: 'Creative visual slide three',
  },
]

function HomeSection({ fadeUp }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero-section container-width">
      <div className="hero-grid">
        <div className="hero-copy">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.45 }} className="hero-kicker">
          Information Technology Student | Web Developer | Software Engineer | Entrepreneur
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="hero-title"
        >
          Chinedu Okafor
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="hero-summary"
        >
          I am a passionate software engineer and web developer with a strong foundation in computer science.
          I enjoy creating innovative solutions and building applications that make a difference. I work
          across software development, AI-driven solutions, and creative technology through my ventures,
          Rualabs Technology and BIGCHASE Music Productions.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="hero-actions"
        >
          <a href="#projects" className="primary-btn">
            View Projects <FaArrowRightLong />
          </a>
          <a href="/resume.pdf" className="ghost-btn">
            Download Resume <FiDownload />
          </a>
          <a href="#contact" className="ghost-btn">
            Contact Me
          </a>
        </motion.div>
        </div>

        <motion.div
          className="hero-slider"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="slider-stage">
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`slider-image ${index === activeSlide ? 'active' : ''}`}
              />
            ))}
          </div>
          <div className="slider-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeSection
