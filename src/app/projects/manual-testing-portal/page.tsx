import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, FileText, Bug, BarChart3, CheckSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manual Testing Documentation Portal - Hasib Ahmed',
  description: 'Comprehensive manual testing documentation system with test case management, bug tracking workflows, and quality metrics dashboard.'
}

export default function ManualTestingPortal() {
  const technologies = [
    'Test Case Design', 'Bug Tracking', 'Test Planning', 'Quality Metrics', 'Documentation', 'Workflows'
  ]

  const features = [
    {
      icon: FileText,
      title: 'Test Case Management',
      description: 'Comprehensive test case repository with detailed steps, expected results, and traceability'
    },
    {
      icon: Bug,
      title: 'Bug Tracking Workflows',
      description: 'Structured bug reporting process with severity classification and lifecycle management'
    },
    {
      icon: BarChart3,
      title: 'Quality Metrics Dashboard',
      description: 'Real-time visibility into test execution progress, coverage, and quality indicators'
    },
    {
      icon: CheckSquare,
      title: 'Test Planning Templates',
      description: 'Standardized test planning documentation and execution tracking templates'
    }
  ]

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border transition-all duration-300 hover:bg-white/20 hover:scale-105"
            style={{borderColor: '#B7C9E2', color: '#104F8F'}}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#104F8F'}}>
              Manual Testing Documentation Portal
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Comprehensive manual testing documentation system with test case management, bug tracking workflows, 
              and quality metrics dashboard for effective quality assurance processes.
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
              href="https://github.com/hasib2k/manual-testing-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="https://hasib-testing-portal.vercel.app"
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
              Documentation Framework
            </h2>
            <div className="space-y-6" style={{color: '#104F8F'}}>
              <div>
                <h3 className="text-xl font-semibold mb-3">Testing Methodology</h3>
                <p className="leading-relaxed">
                  Structured approach to manual testing with standardized documentation templates, test case design 
                  principles, and comprehensive bug reporting workflows following industry best practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Components</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Detailed test case repository with step-by-step execution guides</li>
                  <li>Bug lifecycle management with severity and priority classification</li>
                  <li>Test execution tracking with pass/fail metrics and coverage reports</li>
                  <li>Risk-based testing approach with priority matrix documentation</li>
                  <li>Regression testing checklists and validation procedures</li>
                  <li>Quality gates and acceptance criteria documentation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Process Improvement</h3>
                <p className="leading-relaxed">
                  This documentation portal has standardized testing processes across teams, reduced 
                  onboarding time for new testers by 60%, and improved defect detection rates through 
                  comprehensive test coverage and systematic execution tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
