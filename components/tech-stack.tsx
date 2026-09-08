'use client'

import { motion } from 'motion/react'

const allSkills = [
  'SQL', 'SQL Server', 'Oracle', 'Database Systems', 'Excel', 'Data Cleaning',
  'Git', 'Jupyter Notebook', 'VS Code',
  'Python', 'Pandas', 'NumPy', 'Exploratory Data Analysis (EDA)',
  'TensorFlow', 'Keras', 'Transfer Learning',
  'React', 'Node.js', 'Laravel', 'Blade', 'PHP', 'HTML', 'CSS', 'MySQL',
  'GitHub', 'Visual Studio Code',
]

export function TechStack() {
  return (
    <section className="content-section" aria-labelledby="tech-stack-title">
      <span className="neo-label">SKILLS &amp; TOOLING</span>
      <h2 id="tech-stack-title">Tech <em>Stack</em></h2>
      <p className="section-lede">Technologies and tools I use for software development and data analysis.</p>

      <motion.article
        className="neo-card tech-stack-unified-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* All Pills */}
        <div className="tech-all-pills">
          {allSkills.map((skill, i) => (
            <motion.span
              key={skill}
              className="tech-stack-pill-unified"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.18, delay: i * 0.025 }}
              whileHover={{
                scale: 1.08,
                y: -3,
                transition: { type: 'spring', stiffness: 500, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.article>
    </section>
  )
}
