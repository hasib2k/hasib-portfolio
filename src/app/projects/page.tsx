import { Metadata } from 'next'
import { Github, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Hasib Ahmed',
  description: 'Explore my portfolio of software development projects, featuring modern web applications and innovative solutions.'
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with Next.js and TypeScript, featuring user authentication, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
      github: "https://github.com/hasib2k/ecommerce-platform",
      live: "https://ecommerce-demo.hasibdev.in",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
      github: "https://github.com/hasib2k/task-manager",
      live: "https://tasks.hasibdev.in",
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI's GPT models, featuring conversation history and multiple AI personalities.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/hasib2k/ai-chat-app",
      live: "https://chat.hasibdev.in",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/hasib2k/portfolio",
      live: "https://hasibdev.in",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A comprehensive weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "https://github.com/hasib2k/weather-dashboard",
      live: "https://weather.hasibdev.in",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "A comprehensive analytics platform for social media management, featuring engagement tracking and performance insights.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js"],
      github: "https://github.com/hasib2k/social-analytics",
      live: "https://analytics.hasibdev.in",
      category: "Full-Stack"
    }
  ]
  
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
              My <span style={{color: '#104F8F'}}>Projects</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              A collection of my work showcasing various technologies and creative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                    {project.category}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors duration-200 text-sm"
                      style={{backgroundColor: '#104F8F'}}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and exciting projects. 
                Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hireme"
                  className="px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Hire Me
                </a>
                <a
                  href="https://github.com/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white border-2 text-gray-700 hover:bg-gray-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
                  style={{borderColor: '#104F8F'}}
                >
                  <Github className="w-5 h-5" />
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
