'use client'

import { Github, ExternalLink, Server, TestTube, BarChart, Shield } from 'lucide-react'
import ProjectBackButton from '@/components/ProjectBackButton'

export default function ApiTestingSuite() {
  const technologies = [
    'Python', 'Pytest', 'Requests', 'JSON Schema', 'Allure Reports', 'CI/CD'
  ]

  const features = [
    {
      icon: Server,
      title: 'REST API Testing',
      description: 'Comprehensive testing of REST APIs with support for all HTTP methods and authentication types'
    },
    {
      icon: TestTube,
      title: 'Automated Validation',
      description: 'Automated response validation, schema verification, and data integrity checks'
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Response time monitoring, load testing capabilities, and performance benchmarking'
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Security vulnerability detection, authentication testing, and data protection validation'
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
              API Testing Suite with Python
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Comprehensive API testing solution using Python Requests and Pytest for automated validation, 
              data-driven testing, and performance monitoring of REST APIs.
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
              href="https://github.com/hasib2k/api-testing-suite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="https://hasib-api-testing-demo.vercel.app"
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
                <h3 className="text-xl font-semibold mb-3">Testing Framework</h3>
                <p className="leading-relaxed">
                  Built on Python Requests library with Pytest framework for structured test execution. 
                  Implements data-driven testing patterns with CSV/JSON test data management.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Capabilities</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Full HTTP method support (GET, POST, PUT, DELETE, PATCH)</li>
                  <li>Authentication testing (Basic, Bearer Token, OAuth, API Keys)</li>
                  <li>JSON Schema validation and response structure verification</li>
                  <li>Data-driven testing with parameterized test cases</li>
                  <li>Response time monitoring and performance assertions</li>
                  <li>Integration with CI/CD pipelines for continuous testing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Impact</h3>
                <p className="leading-relaxed">
                  This testing suite has improved API reliability by identifying critical issues early in the 
                  development cycle. Automated regression testing has reduced manual testing effort by 80% 
                  while providing comprehensive coverage of API endpoints and edge cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
