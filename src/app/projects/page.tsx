import { Metadata } from 'next'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Hasib Ahmed',
  description: 'Explore my portfolio showcasing Python/Pytest automation frameworks, comprehensive testing strategies, and modern React/Next.js applications.'
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Python Pytest Automation Framework",
      description: "Comprehensive test automation framework built with Python and Pytest, featuring modular test design, reporting, and CI/CD integration for scalable quality assurance.",
      technologies: ["Python", "Pytest", "Selenium", "Requests", "Allure Reporting"],
      github: "https://github.com/hasib2k/pytest-automation-framework",
      live: "/projects/python-pytest-automation",
      category: "Test Automation"
    },
    {
      id: 2,
      title: "React Next.js Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Next.js, featuring smooth animations, responsive design, and optimized performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/hasib2k/hasib-portfolio",
      live: "/projects/react-nextjs-portfolio",
      category: "Frontend Development"
    },
    {
      id: 3,
      title: "API Testing Suite with Python",
      description: "Comprehensive API testing solution using Python Requests and Pytest for automated validation, data-driven testing, and performance monitoring.",
      technologies: ["Python", "Pytest", "Requests", "JSON", "API Testing"],
      github: "https://github.com/hasib2k/api-testing-suite",
      live: "/projects/api-testing-suite",
      category: "API Testing"
    },
    {
      id: 4,
      title: "Manual Testing Documentation Portal",
      description: "Comprehensive manual testing documentation system with test case management, bug tracking workflows, and quality metrics dashboard.",
      technologies: ["Test Case Design", "Bug Tracking", "Test Planning", "Documentation", "QA Process"],
      github: "https://github.com/hasib2k/manual-testing-portal",
      live: "/projects/manual-testing-portal",
      category: "Manual Testing"
    },
    {
      id: 5,
      title: "React E-commerce Frontend",
      description: "Modern e-commerce frontend built with React and Next.js, featuring responsive design, state management, and comprehensive component testing.",
      technologies: ["React", "Next.js", "Redux", "Tailwind CSS", "Jest"],
      github: "https://github.com/hasib2k/react-ecommerce-frontend",
      live: "/projects/react-ecommerce-frontend",
      category: "Frontend Development"
    },
    {
      id: 6,
      title: "Cross-Platform Testing Framework",
      description: "Python-based testing framework supporting web, API, and mobile testing with detailed reporting and CI/CD integration capabilities.",
      technologies: ["Python", "Pytest", "Selenium", "Appium", "Jenkins"],
      github: "https://github.com/hasib2k/cross-platform-testing",
      live: "/projects/cross-platform-testing",
      category: "Test Automation"
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
              Showcasing my expertise in Python/Pytest automation frameworks, comprehensive testing strategies, 
              manual testing processes, API testing solutions, and modern React/Next.js frontend development.
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
                    <Link
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors duration-200 text-sm"
                      style={{backgroundColor: '#104F8F'}}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
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
                <Link
                  href="/hireme"
                  className="px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Hire Me
                </Link>
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
