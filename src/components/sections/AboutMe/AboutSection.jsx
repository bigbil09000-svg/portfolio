import { motion } from 'framer-motion'

function AboutSection({ fadeUp }) {

  return (
    <motion.section
      id="about"
      className="container-width section-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <h2>Hello, I&apos;m Chinedu Okafor.</h2>
      <p>
        I&apos;m an Information Technology student, web developer, and entrepreneur with a
        passion for building innovative digital solutions that create real value. I enjoy transforming
        ideas into functional, user-friendly web applications and continuously expanding my knowledge in
        software engineering, artificial intelligence, and emerging technologies.
      </p>
      <p>
        Alongside my academic journey, I have founded and currently manage two businesses that reflect my interests
        in both technology and the creative industry.
      </p>

      <h3>Rualabs Technology</h3>
      <p>
        As the founder of Rualabs Technology, I focus on developing modern software solutions for
        businesses and individuals. Our mission is to help organizations embrace digital transformation
        through custom websites, web applications, business automation, cloud-based solutions, and
        AI-powered technologies. I believe technology should simplify complex problems, improve
        productivity, and unlock new opportunities for growth.
      </p>

      <h3>BIGCHASE Music Productions</h3>
      <p>
        I am also the founder of BIGCHASE Music Productions, an independent music production company
        dedicated to producing high-quality music and supporting creative talent. We specialize in music
        production, recording, mixing, mastering, songwriting, and artist development. Through BIGCHASE
        Music Productions, I combine creativity with technology to produce music that inspires, connects
        with people, and leaves a lasting impact.
      </p>

      <h3>My Journey</h3>
      <p>
        My passion for technology extends beyond the classroom. I enjoy building full-stack web
        applications using modern technologies such as HTML, CSS, JavaScript, React, Python, and Flask.
        I actively share my work on GitHub, where I continuously develop projects that strengthen my
        programming skills and demonstrate my commitment to lifelong learning.
      </p>
      <p>
        I believe the best way to learn is by building. Every project I complete helps me grow as a
        developer and prepares me for solving real-world challenges through software.
      </p>

      <h3>My Vision</h3>
      <p>
        My long-term goal is to become a highly skilled software engineer and technology entrepreneur,
        creating products that positively impact businesses and communities around the world. I am
        particularly interested in artificial intelligence, cloud computing, cybersecurity, and scalable
        software systems, and I aspire to build innovative platforms that make technology more accessible
        and meaningful.
      </p>
      <p>
        I&apos;m always open to collaborating on exciting projects, contributing to innovative teams, and
        connecting with professionals who share a passion for technology, creativity, and continuous
        learning.
      </p>
    </motion.section>
  )
}

export default AboutSection
