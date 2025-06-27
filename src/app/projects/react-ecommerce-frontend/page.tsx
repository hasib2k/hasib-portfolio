import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, ShoppingCart, Palette, Zap, TestTube } from 'lucide-react'

export const metadata: Metadata = {
  title: 'React E-commerce Frontend - Hasib Ahmed',
  description: 'Modern e-commerce frontend built with React and Next.js, featuring responsive design, state management, and comprehensive component testing.'
}

export default function ReactEcommerceFrontend() {
  const technologies = [
    'React', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS', 'Jest'
  ]

  const features = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Features',
      description: 'Complete shopping cart, product catalog, user authentication, and checkout functionality'
    },
    {
      icon: Palette,
      title: 'Modern UI/UX',
      description: 'Clean, intuitive design with smooth animations and responsive layout for all devices'
    },
    {
      icon: Zap,
      title: 'State Management',
      description: 'Efficient state management with Redux for cart, user sessions, and product data'
    },
    {
      icon: TestTube,
      title: 'Component Testing',
      description: 'Comprehensive testing suite with Jest and React Testing Library for reliability'
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
              React E-commerce Frontend
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Modern e-commerce frontend built with React and Next.js, featuring responsive design, 
              state management, and comprehensive component testing for a seamless shopping experience.
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
              href="https://github.com/hasib2k/react-ecommerce-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl transform hover:scale-105 shadow-xl"
              style={{backgroundColor: '#104F8F'}}
            >
              <Github size={20} />
              View Code
            </a>
            <a
              href="https://hasib-ecommerce-demo.vercel.app"
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
                  Built with React 18 and Next.js App Router for optimal performance. Redux Toolkit manages 
                  application state while TypeScript ensures type safety throughout the codebase.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">E-commerce Features</h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Product catalog with search, filtering, and sorting capabilities</li>
                  <li>Shopping cart with quantity management and price calculations</li>
                  <li>User authentication and profile management</li>
                  <li>Responsive checkout process with form validation</li>
                  <li>Order history and tracking functionality</li>
                  <li>Payment integration ready with secure processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="leading-relaxed">
                  Comprehensive testing strategy includes unit tests for components, integration tests for 
                  user flows, and end-to-end testing for critical paths. Achieved 90%+ test coverage 
                  ensuring reliable functionality across all e-commerce features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
