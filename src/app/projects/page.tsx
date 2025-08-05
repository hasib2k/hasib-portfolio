'use client'

import Link from 'next/link'
import { Github, ExternalLink, Filter } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');

  // Read filter from URL on component mount
  useEffect(() => {
    const filterFromUrl = searchParams.get('filter') || 'All';
    setActiveFilter(filterFromUrl);
  }, [searchParams]);

  // Update URL when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const params = new URLSearchParams(searchParams.toString());
    if (filter === 'All') {
      params.delete('filter');
    } else {
      params.set('filter', filter);
    }
    router.push(`/projects${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  const projects = [
    // Testing Projects
    {
      id: 1,
      title: "WyzrFriends Social Platform",
      description: "WyzrFriends is a vibrant social networking platform designed to help users connect, share, and build meaningful communities. Features include real-time chat, group creation, event management, and a modern, mobile-friendly UI with smooth animations.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      github: "https://wyzrfriends.com/",
      live: "https://wyzrfriends.com/",
      category: "Testing Project",
      featured: true
    },
    {
      id: 2,
      title: "JICA Official Website",
      description: "JICA's official website is a comprehensive portal for the Japan International Cooperation Agency, offering resources on global development, project updates, and international cooperation news. The site is accessible, multilingual, and optimized for performance. It serves millions of users worldwide, providing a seamless experience for stakeholders and partners.",
      technologies: ["React", "Next.js", "TypeScript", "CMS", "Internationalization", "SEO"],
      github: "https://www.jica.go.jp/english/",
      live: "https://www.jica.go.jp/english/",
      category: "Testing Project",
      featured: true
    },
    // Project Documentation
    {
      id: 4,
      title: "Python Pytest Automation Framework",
      description: "Comprehensive test automation framework built with Python and Pytest, featuring modular test design, reporting, and CI/CD integration for scalable quality assurance.",
      technologies: ["Python", "Pytest", "Selenium", "Requests", "Allure Reporting"],
      github: "https://github.com/hasib2k/pytest-automation-framework",
      live: "/projects/python-pytest-automation",
      category: "Project Documentation"
    },
    {
      id: 5,
      title: "API Testing Suite with Python",
      description: "Comprehensive API testing solution using Python Requests and Pytest for automated validation, data-driven testing, and performance monitoring.",
      technologies: ["Python", "Pytest", "Requests", "JSON", "API Testing"],
      github: "https://github.com/hasib2k/api-testing-suite",
      live: "/projects/api-testing-suite",
      category: "Project Documentation"
    },
    {
      id: 6,
      title: "Manual Testing Documentation Portal",
      description: "Comprehensive manual testing documentation system with test case management, bug tracking workflows, and quality metrics dashboard.",
      technologies: ["Test Case Design", "Bug Tracking", "Test Planning", "Documentation", "QA Process"],
      github: "https://github.com/hasib2k/manual-testing-portal",
      live: "/projects/manual-testing-portal",
      category: "Project Documentation"
    },
    {
      id: 7,
      title: "Cross-Platform Testing Framework",
      description: "Python-based testing framework supporting web, API, and mobile testing with detailed reporting and CI/CD integration capabilities.",
      technologies: ["Python", "Pytest", "Selenium", "Appium", "Jenkins"],
      github: "https://github.com/hasib2k/cross-platform-testing",
      live: "/projects/cross-platform-testing",
      category: "Project Documentation"
    },
    // Development Projects
    {
      id: 3,
      title: "Marcel Grace Website",
      description: "A professional website for Marcel Grace, a software development company. Showcases innovative digital solutions, company portfolio, client success stories, and a full range of development services, all with a modern UI/UX and responsive design. Built with React, Next.js, and Tailwind CSS, it drives business growth and client engagement.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/hasib2k/marcel_grace",
      live: "https://www.marcelgrace.com/",
      category: "Development Project",
      featured: true
    },
    {
      id: 8,
      title: "React Next.js Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Next.js, featuring smooth animations, responsive design, and optimized performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/hasib2k/marcel_grace",
      live: "/projects/react-nextjs-portfolio",
      category: "Development Project"
    },
    {
      id: 9,
      title: "React E-commerce Frontend",
      description: "Modern e-commerce frontend built with React and Next.js, featuring responsive design, state management, and comprehensive component testing.",
      technologies: ["React", "Next.js", "Redux", "Tailwind CSS", "Jest"],
      github: "https://github.com/hasib2k/react-ecommerce-frontend",
      live: "/projects/react-ecommerce-frontend",
      category: "Development Project"
    }
  ]

  // Filter options
  const filterOptions = ['All', 'Development Project', 'Testing Project', 'Project Documentation']

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  return (
    <div className="min-h-screen py-16 sm:py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{color: '#104F8F'}}>
              My <span style={{color: '#104F8F'}}>Projects</span>
            </h1>
            <div className="w-16 sm:w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl mx-auto mt-4 sm:mt-6 leading-relaxed px-4" style={{color: '#104F8F'}}>
              Showcasing my expertise in full-stack development, Python/Pytest automation frameworks, comprehensive testing strategies, 
              manual testing processes, API testing solutions, and modern React/Next.js frontend development.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg border-2 flex items-center gap-2 ${
                  activeFilter === filter
                    ? 'text-white shadow-xl'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                style={{
                  backgroundColor: activeFilter === filter ? '#104F8F' : 'transparent',
                  borderColor: '#104F8F',
                  color: activeFilter === filter ? 'white' : '#104F8F'
                }}
              >
                <Filter size={16} className="sm:hidden" />
                <span>{filter}</span>
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-medium" style={{color: '#104F8F'}}>
              {activeFilter === 'All' ? `Showing all ${filteredProjects.length} projects` : `${filteredProjects.length} ${activeFilter}${filteredProjects.length !== 1 ? 's' : ''}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer flex flex-col h-full"
                style={{borderColor: '#B7C9E2'}}
                tabIndex={0}
                role="button"
                onClick={() => {
                  if (project.live.startsWith('/')) {
                    router.push(project.live);
                  } else {
                    window.open(project.live, '_blank');
                  }
                }}
                onKeyDown={e => { 
                  if (e.key === 'Enter' || e.key === ' ') { 
                    e.preventDefault();
                    if (project.live.startsWith('/')) {
                      router.push(project.live);
                    } else {
                      window.open(project.live, '_blank');
                    }
                  } 
                }}
                aria-label={`View details for ${project.title}`}
              >
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:underline" style={{color: '#104F8F'}}>
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-4 flex-grow" style={{color: '#104F8F'}}>
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      {project.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(project.technologies ?? []).slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-lg" style={{backgroundColor: '#F5F6F7', color: '#104F8F'}}>
                          {tech}
                        </span>
                      ))}
                      {(project.technologies ?? []).length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-lg" style={{backgroundColor: '#F5F6F7', color: '#104F8F'}}>
                          +{(project.technologies ?? []).length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 sm:gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 border rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium bg-white/20 hover:bg-white/30 hover:scale-105 min-w-0"
                      style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                      tabIndex={0}
                      onClick={e => e.stopPropagation()}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-xs sm:text-sm font-medium text-white hover:scale-105 min-w-0"
                      style={{backgroundColor: '#104F8F'}}
                      tabIndex={0}
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg mb-4" style={{color: '#104F8F'}}>
                No projects found for &quot;{activeFilter}&quot;
              </p>
              <button
                onClick={() => handleFilterChange('All')}
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                style={{backgroundColor: '#104F8F'}}
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="rounded-2xl p-6 sm:p-8 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                Let&apos;s Work Together
              </h2>
              <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto px-4" style={{color: '#104F8F'}}>
                I&apos;m always open to discussing new opportunities and exciting projects. 
                Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/hireme"
                  className="px-6 sm:px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Hire Me
                </Link>
                <a
                  href="https://github.com/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
                  style={{borderColor: '#104F8F', color: '#104F8F', backgroundColor: 'transparent'}}
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
