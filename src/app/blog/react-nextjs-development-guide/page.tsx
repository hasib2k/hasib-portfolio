import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Palette, Smartphone, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern React Development with Next.js - Hasib Ahmed',
  description: 'Build powerful, scalable web applications using React and Next.js with modern development practices and optimization techniques.'
}

export default function ReactNextjsDevelopmentGuide() {
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border transition-all duration-300 hover:bg-white/20 hover:scale-105"
            style={{borderColor: '#B7C9E2', color: '#104F8F'}}
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12" style={{borderColor: '#B7C9E2'}}>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{color: '#104F8F'}}>
                Modern React Development with Next.js: Complete Guide
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{color: '#104F8F'}}>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Hasib Ahmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>December 28, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>7 min read</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed" style={{color: '#104F8F'}}>
                Build powerful, scalable web applications using React and Next.js with modern development practices and optimization techniques.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" style={{color: '#104F8F'}}>
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                    The Evolution of React Development
                  </h2>
                  <p className="leading-relaxed">
                    React has revolutionized frontend development, and Next.js has taken it to the next level by providing a production-ready framework with built-in optimizations, server-side rendering, and developer experience enhancements. This comprehensive guide explores modern patterns and best practices for building scalable React applications.
                  </p>
                  <p className="leading-relaxed">
                    Whether you're building a portfolio website, an e-commerce platform, or a complex web application, understanding these patterns will help you create maintainable, performant, and user-friendly applications.
                  </p>
                </section>

                {/* Next.js App Router */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Code size={24} />
                    Next.js 13+ App Router
                  </h2>
                  
                  <p className="leading-relaxed mb-6">
                    The new App Router in Next.js 13+ introduces a paradigm shift with React Server Components, improved routing, and better developer experience.
                  </p>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>File-based Routing Structure</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── loading.tsx        # Loading UI
├── error.tsx          # Error UI
├── not-found.tsx      # 404 page
├── about/
│   └── page.tsx       # /about route
├── blog/
│   ├── page.tsx       # /blog route
│   └── [slug]/
│       └── page.tsx   # /blog/[slug] route
└── api/
    └── users/
        └── route.ts   # API endpoint`}
                    </pre>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Server Components vs Client Components</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Server Components</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Render on the server</li>
                        <li>Direct database access</li>
                        <li>Better SEO and performance</li>
                        <li>Reduced client bundle size</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Client Components</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Interactive features</li>
                        <li>State management</li>
                        <li>Event handlers</li>
                        <li>Browser APIs access</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Modern React Patterns */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Palette size={24} />
                    Modern React Patterns
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Custom Hooks for Logic Reuse</h3>
                      <p className="leading-relaxed mb-3">
                        Extract complex logic into reusable custom hooks for better maintainability.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`// useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(error)
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Compound Components Pattern</h3>
                      <p className="leading-relaxed mb-3">
                        Create flexible, composable components that work together seamlessly.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`// Modal.tsx
interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

Modal.Header = function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="modal-header">{children}</div>
}

Modal.Body = function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="modal-body">{children}</div>
}

Modal.Footer = function ModalFooter({ children }: { children: React.ReactNode }) {
  return <div className="modal-footer">{children}</div>
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Performance Optimization */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Smartphone size={24} />
                    Performance Optimization
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>1. Code Splitting and Lazy Loading</h3>
                      <p className="leading-relaxed mb-3">
                        Split your application into smaller chunks and load them only when needed.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import('./Dashboard'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  )
}`}
                        </pre>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>2. Image Optimization</h3>
                      <p className="leading-relaxed mb-3">
                        Use Next.js Image component for automatic optimization, lazy loading, and responsive images.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import Image from 'next/image'

function Profile() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={400}
      height={400}
      priority={true}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}`}
                        </pre>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>3. Memoization Strategies</h3>
                      <p className="leading-relaxed">
                        Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and expensive calculations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* State Management */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Modern State Management</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Zustand (Recommended)</h3>
                      <p className="leading-relaxed mb-3 text-sm">
                        Lightweight, unopinionated state management with minimal boilerplate.
                      </p>
                      <div className="bg-white/20 rounded-lg p-3 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-xs overflow-x-auto" style={{color: '#104F8F'}}>
{`import { create } from 'zustand'

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null })
}))`}
                        </pre>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Context + useReducer</h3>
                      <p className="leading-relaxed mb-3 text-sm">
                        Built-in React solution for complex state management without external dependencies.
                      </p>
                      <div className="bg-white/20 rounded-lg p-3 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-xs overflow-x-auto" style={{color: '#104F8F'}}>
{`const ThemeContext = createContext()

function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state
  }
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* TypeScript Integration */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>TypeScript Best Practices</h2>
                  
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Type-safe Component Props</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({ variant, size = 'md', children, ...props }: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      {...props}
    >
      {children}
    </button>
  )
}`}
                        </pre>
                      </div>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Generic Components</h3>
                      <p className="leading-relaxed text-sm">
                        Create reusable components that work with different data types while maintaining type safety.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Testing Strategies */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Testing Strategies</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Unit Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Jest + Testing Library</li>
                        <li>Component behavior testing</li>
                        <li>Hook testing</li>
                        <li>Utility function testing</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Integration Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>API integration</li>
                        <li>Component interaction</li>
                        <li>User flow testing</li>
                        <li>State management testing</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>E2E Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Playwright/Cypress</li>
                        <li>Critical user journeys</li>
                        <li>Cross-browser testing</li>
                        <li>Visual regression testing</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Conclusion</h2>
                  <p className="leading-relaxed">
                    Modern React development with Next.js offers powerful tools and patterns for building scalable, performant applications. By leveraging Server Components, implementing proper state management, optimizing performance, and maintaining type safety with TypeScript, developers can create exceptional user experiences.
                  </p>
                  <p className="leading-relaxed">
                    Remember that the best architecture is one that grows with your application's needs. Start simple, follow best practices, and gradually introduce complexity as your project requirements evolve.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t" style={{borderColor: '#B7C9E2'}}>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Frontend Development', 'JavaScript', 'TypeScript'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-md bg-white/10"
                    style={{borderColor: '#B7C9E2', color: '#104F8F'}}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
