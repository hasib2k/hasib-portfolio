'use client'

import { Github, ExternalLink, Code, TestTube, Zap, Settings } from 'lucide-react'
import ProjectBackButton from '@/components/ProjectBackButton'

export default function PythonPytestAutomation() {
  const technologies = [
    'Python', 'Pytest', 'Selenium', 'WebDriver', 'Allure Reports', 'CI/CD'
  ]

  const features = [
    {
      icon: Code,
      title: 'Modular Test Design',
      description: 'Clean, maintainable test structure with reusable components and page object patterns'
    },
    {
      icon: TestTube,
      title: 'Comprehensive Testing',
      description: 'End-to-end, integration, and unit testing capabilities with data-driven approaches'
    },
    {
      icon: Zap,
      title: 'Advanced Reporting',
      description: 'Detailed test reports with screenshots, logs, and performance metrics'
    },
    {
      icon: Settings,
      title: 'CI/CD Integration',
      description: 'Seamless integration with Jenkins, GitHub Actions, and other CI/CD pipelines'
    }
  ]

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <ProjectBackButton />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#104F8F'}}>
              Python Pytest Automation Framework
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Comprehensive test automation framework built with Python and Pytest, featuring modular test design, 
              reporting, and CI/CD integration for scalable quality assurance.
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://github.com/hasib2k/pytest-automation-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="https://hasib-pytest-demo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
              style={{borderColor: '#B7C9E2', color: '#104F8F'}}
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
                style={{borderColor: '#B7C9E2'}}
              >
                <feature.icon size={32} style={{color: '#104F8F'}} className="mb-4" />
                <h3 className="text-xl font-bold mb-3" style={{color: '#104F8F'}}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{color: '#104F8F'}}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>
              Technical Implementation
            </h2>
            <div className="space-y-6" style={{color: '#104F8F'}}>
              <div>
                <h3 className="text-xl font-semibold mb-3">Framework Architecture</h3>
                <p className="leading-relaxed">
                  Built on Python and Pytest, this framework implements a scalable page object model with clear separation 
                  of concerns. The modular design allows for easy maintenance and extension of test suites.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Cross-browser testing support (Chrome, Firefox, Safari, Edge)</li>
                  <li>Parallel test execution for faster feedback</li>
                  <li>Data-driven testing with CSV/JSON/Excel support</li>
                  <li>Custom assertions and utilities for common testing patterns</li>
                  <li>Automatic screenshot capture on test failures</li>
                  <li>Integration with Allure for detailed test reporting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance Impact</h3>
                <p className="leading-relaxed">
                  This framework has significantly improved testing efficiency by reducing manual testing time by 70% 
                  and providing comprehensive test coverage for critical user journeys. The automated reports help 
                  stakeholders make informed decisions about release readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
