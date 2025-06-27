'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      github: "https://github.com/hasib2k",
      live: "https://ecommerce-demo.hasibdev.in",
    },
    {
      title: "Task Management App",
      github: "https://github.com/hasib2k",
      live: "https://tasks.hasibdev.in",
    },
    {
      title: "AI Chat Application",
      github: "https://github.com/hasib2k",
      live: "https://chat.hasibdev.in",
    }
  ]

  return (
    <section className="py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#104F8F'}}>
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#104F8F'}}>
            Here are some of my recent projects that showcase my skills in full-stack development,
            modern frameworks, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg"
              style={{
                borderColor: '#B7C9E2'
              }}
            >
              {/* Floating icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                   style={{backgroundColor: '#104F8F'}}>
                <div className="w-6 h-6 rounded-full bg-white/30"></div>
              </div>

              <h3 className="text-2xl font-bold mb-8 transition-colors duration-300"
                  style={{color: '#104F8F'}}>
                {project.title}
              </h3>

              {/* Enhanced Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2"
                  style={{
                    borderColor: '#B7C9E2',
                    backgroundColor: 'transparent',
                    color: '#104F8F'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = '#104F8F';
                    target.style.color = 'white';
                    target.style.borderColor = '#104F8F';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#104F8F';
                    target.style.borderColor = '#B7C9E2';
                  }}
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: '#104F8F',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = '#0d4073';
                    target.style.transform = 'scale(1.05) translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.backgroundColor = '#104F8F';
                    target.style.transform = 'scale(1)';
                  }}
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/hasib2k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: '#104F8F',
              color: 'white'
            }}
          >
            <Github size={24} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
