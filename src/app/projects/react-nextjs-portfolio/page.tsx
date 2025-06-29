import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Palette, Smartphone, Zap, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'React Next.js Portfolio Website - Hasib Ahmed',
  description: 'Modern, responsive portfolio website built with React and Next.js, featuring smooth animations, responsive design, and optimized performance.'
}

export default function ReactNextjsPortfolio() {
  const technologies = [
    'React', 'JavaScript', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'
  ]

  const features = [
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Clean, professional design with smooth animations and intuitive user experience'
    },
    {
      icon: Smartphone,
      title: 'Responsive Layout',
      description: 'Fully responsive design that works seamlessly across all devices and screen sizes'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Fast loading times with Next.js optimization, lazy loading, and efficient code splitting'
    },
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Built with latest React patterns, TypeScript for type safety, and Tailwind CSS for styling'
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
              React Next.js Portfolio Website
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Modern, responsive portfolio website built with React and Next.js, featuring smooth animations, 
              responsive design, and optimized performance for an exceptional user experience.
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
              href="https://github.com/hasib2k/marcel_grace"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="https://www.marcelgrace.com/"
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
                <h3 className="text-xl font-semibold mb-3">Frontend Architecture</h3>
                <p className="leading-relaxed">
                  Built with React 18 and Next.js 13+ App Router, leveraging server-side rendering and static generation 
                  for optimal performance. TypeScript ensures type safety and better developer experience.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Responsive design with mobile-first approach using Tailwind CSS</li>
                  <li>Smooth animations and transitions with Framer Motion</li>
                  <li>SEO optimized with Next.js metadata API and semantic HTML</li>
                  <li>Performance optimized with code splitting and lazy loading</li>
                  <li>Accessibility compliant with WCAG 2.1 guidelines</li>
                  <li>Dark/light theme support with system preference detection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
                <p className="leading-relaxed">
                  Achieves excellent Lighthouse scores: 95+ Performance, 100 Accessibility, 100 Best Practices, 
                  and 100 SEO. Fast loading times with First Contentful Paint under 1.5s and interactive 
                  elements ready within 2.5s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
