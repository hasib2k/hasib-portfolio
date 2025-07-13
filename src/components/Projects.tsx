'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "WyzrFriends Social Platform",
      github: "https://wyzrfriends.com/", // No public repo, using live link
      live: "https://wyzrfriends.com/",
      description: "WyzrFriends is a vibrant social networking platform designed to help users connect, share, and build meaningful communities. Features include real-time chat, group creation, event management, and a modern, mobile-friendly UI with smooth animations.",
    },
    {
      title: "JICA Official Website",
      github: "https://www.jica.go.jp/english/", // No public repo, using live link
      live: "https://www.jica.go.jp/english/",
      description: "JICA's official website is a comprehensive portal for the Japan International Cooperation Agency, offering resources on global development, project updates, and international cooperation news. The site is accessible, multilingual, and optimized for performance. It serves millions of users worldwide, providing a seamless experience for stakeholders and partners.",
    },
    {
      title: "Marcel Grace Website",
      github: "https://github.com/hasib2k/marcel_grace",
      live: "https://www.marcelgrace.com/",
      description: "A professional website for Marcel Grace, a software development company. Showcases innovative digital solutions, company portfolio, client success stories, and a full range of development services, all with a modern UI/UX and responsive design. Built with React, Next.js, and Tailwind CSS, it drives business growth and client engagement.",
    }
  ]

  return (
    <section className="py-10 sm:py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{color: '#104F8F'}}>
            Featured Projects
          </h2>
          <p className="text-base sm:text-xl max-w-2xl sm:max-w-3xl mx-auto" style={{color: '#104F8F'}}>
            Here are some of my recent projects that showcase my skills in full-stack development,
            modern frameworks, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-5 sm:p-8 transition-all duration-500 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg w-full flex flex-col h-full min-h-[340px] sm:min-h-[360px]"
              style={{
                borderColor: '#B7C9E2'
              }}
            >
              {/* Floating icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                   style={{backgroundColor: '#104F8F'}}>
                <div className="w-6 h-6 rounded-full bg-white/30"></div>
              </div>

              {/* No logo/image */}
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
                  style={{color: '#104F8F'}}>
                {project.title}
              </h3>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 dark:text-gray-300 min-h-[48px] sm:min-h-[60px]">{project.description}</p>

              {/* Enhanced Links - always at bottom */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-[#B7C9E2] bg-transparent text-[#104F8F] hover:bg-[#104F8F] hover:text-white hover:border-[#104F8F]"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                )}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-[#104F8F] text-white hover:bg-[#0d4073]"
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
          className="text-center mt-10 sm:mt-16"
        >
          <a
            href="https://github.com/hasib2k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[#104F8F] text-white hover:bg-[#0d4073]"
          >
            <Github size={20} className="sm:size-6" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
