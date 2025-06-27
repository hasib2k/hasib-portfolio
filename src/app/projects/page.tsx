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
      title: "E-Commerce Testing Suite",
      description: "Comprehensive testing suite for e-commerce platform including automated test scripts, performance testing, and quality assurance workflows.",
      technologies: ["Selenium", "Jest", "Cypress", "TestNG", "JavaScript"],
      github: "https://github.com/hasib2k/ecommerce-testing",
      live: "https://testing-demo.hasibdev.in",
      category: "QA Testing"
    },
    {
      id: 2,
      title: "Task Management Frontend",
      description: "Modern React-based frontend for project management with comprehensive testing coverage and quality assurance processes.",
      technologies: ["React", "TypeScript", "Jest", "React Testing Library", "Tailwind CSS"],
      github: "https://github.com/hasib2k/task-frontend",
      live: "https://tasks.hasibdev.in",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Automated Testing Framework",
      description: "Custom testing framework for web applications with automated test generation, bug tracking, and quality metrics reporting.",
      technologies: ["Selenium", "Python", "Pytest", "TestRail", "Jenkins"],
      github: "https://github.com/hasib2k/test-automation",
      live: "https://automation.hasibdev.in",
      category: "QA Testing"
    },
    {
      id: 4,
      title: "Quality Dashboard Frontend",
      description: "Interactive dashboard for QA metrics and testing results built with modern frontend technologies and comprehensive testing.",
      technologies: ["React", "Chart.js", "TypeScript", "Jest", "Cypress"],
      github: "https://github.com/hasib2k/qa-dashboard",
      live: "https://hasibdev.in",
      category: "Frontend"
    },
    {
      id: 5,
      title: "API Testing Suite",
      description: "Comprehensive API testing solution with automated validation, performance testing, and quality assurance for RESTful services.",
      technologies: ["Postman", "Newman", "Jest", "Supertest", "API Testing"],
      github: "https://github.com/hasib2k/api-testing",
      live: "https://api-testing.hasibdev.in",
      category: "QA Testing"
    },
    {
      id: 6,
      title: "Frontend Component Library",
      description: "Reusable React component library with comprehensive testing coverage, documentation, and quality assurance processes.",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Testing Library"],
      github: "https://github.com/hasib2k/component-library",
      live: "https://components.hasibdev.in",
      category: "Frontend"
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
            <p className="text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{color: '#104F8F'}}>
              A collection of my QA testing projects and frontend development work showcasing quality assurance expertise and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-3" style={{color: '#104F8F'}}>
                    {project.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed" style={{color: '#104F8F'}}>
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                    {project.category}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded-lg" style={{backgroundColor: '#F5F6F7', color: '#104F8F'}}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-lg" style={{backgroundColor: '#F5F6F7', color: '#104F8F'}}>
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
                      className="flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors duration-200 text-sm"
                      style={{borderColor: '#B7C9E2', color: '#104F8F'}}
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
            <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                Let&apos;s Work Together
              </h2>
              <p className="mb-6 max-w-2xl mx-auto" style={{color: '#104F8F'}}>
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
                  className="px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
                  style={{borderColor: '#104F8F', color: '#104F8F', backgroundColor: 'transparent'}}
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
