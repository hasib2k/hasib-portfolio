import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Palette, Smartphone, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern React Development with Next.js - Hasib Ahmed',
  description: 'Explore advanced patterns and best practices for building scalable React applications with Next.js, TypeScript, and modern development tools.'
}

export default function ReactNextjsBlog() {
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
                Modern React Development with Next.js: Advanced Patterns and Best Practices
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{color: '#104F8F'}}>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Hasib Ahmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>January 25, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>12 min read</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed" style={{color: '#104F8F'}}>
                Explore advanced patterns and best practices for building scalable React applications with Next.js, TypeScript, and modern development tools.
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
                    React has revolutionized frontend development, and Next.js has taken it to the next level by providing a production-ready framework with built-in optimizations, server-side rendering, and developer experience enhancements. In this comprehensive guide, we&apos;ll explore advanced patterns and best practices for building modern, scalable React applications.
                  </p>
                  <p className="leading-relaxed">
                    Whether you&apos;re building a portfolio website, an e-commerce platform, or a complex web application, understanding these patterns will help you create maintainable, performant, and user-friendly applications.
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

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Server and Client Components</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Server Components (Default)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Rendered on the server</li>
                        <li>Direct database access</li>
                        <li>Better SEO and performance</li>
                        <li>Smaller client bundle</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Client Components</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Use &quot;use client&quot; directive</li>
                        <li>Interactive functionality</li>
                        <li>Browser APIs access</li>
                        <li>State and event handlers</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Modern Patterns */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Palette size={24} />
                    Modern React Patterns
                  </h2>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>1. Custom Hooks for Logic Reuse</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue] as const
}`}
                    </pre>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>2. Compound Components Pattern</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`// components/Card.tsx
interface CardProps {
  children: React.ReactNode
}

interface CardHeaderProps {
  children: React.ReactNode
}

interface CardBodyProps {
  children: React.ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg shadow-lg border bg-white">
      {children}
    </div>
  )
}

export function CardHeader({ children }: CardHeaderProps) {
  return (
    <div className="px-6 py-4 border-b">
      {children}
    </div>
  )
}

export function CardBody({ children }: CardBodyProps) {
  return (
    <div className="px-6 py-4">
      {children}
    </div>
  )
}

// Usage
<Card>
  <Card.Header>
    <h2>Title</h2>
  </Card.Header>
  <Card.Body>
    <p>Content</p>
  </Card.Body>
</Card>`}
                    </pre>
                  </div>
                </section>

                {/* Performance Optimization */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Smartphone size={24} />
                    Performance Optimization
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>1. Code Splitting and Lazy Loading</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import { lazy, Suspense } from 'react'

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'))
const Profile = lazy(() => import('./Profile'))

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}`}
                        </pre>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>2. Image Optimization</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import Image from 'next/image'

// Optimized image component
<Image
  src="/hero-image.jpg"
  alt="Hero Image"
  width={800}
  height={600}
  priority // Load immediately
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>`}
                        </pre>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>3. React Memo and Callback Optimization</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import { memo, useCallback, useMemo } from 'react'

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({ ...item, processed: true }))
  }, [data])

  const handleUpdate = useCallback((id) => {
    onUpdate(id)
  }, [onUpdate])

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleUpdate(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  )
})`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testing */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Testing Best Practices</h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Component Testing with React Testing Library</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

test('button calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  const button = screen.getByRole('button', { name: 'Click me' })
  fireEvent.click(button)
  
  expect(handleClick).toHaveBeenCalledTimes(1)
})`}
                        </pre>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>E2E Testing with Playwright</h3>
                      <div className="bg-white/20 rounded-lg p-4 border" style={{borderColor: '#B7C9E2'}}>
                        <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import { test, expect } from '@playwright/test'

test('user can create and view blog post', async ({ page }) => {
  await page.goto('/blog/create')
  
  await page.fill('[data-testid="title-input"]', 'My New Post')
  await page.fill('[data-testid="content-textarea"]', 'Post content...')
  await page.click('[data-testid="publish-button"]')
  
  await expect(page.locator('h1')).toContainText('My New Post')
})`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Conclusion</h2>
                  <p className="leading-relaxed">
                    Modern React development with Next.js offers powerful tools and patterns for building exceptional web applications. By leveraging Server Components, implementing proper state management, optimizing performance, and maintaining comprehensive tests, you can create applications that are not only functional but also maintainable and scalable.
                  </p>
                  <p className="leading-relaxed">
                    Remember that these patterns should be applied judiciously based on your application&apos;s specific needs. Start simple, measure performance, and optimize as needed. The React ecosystem continues to evolve, so stay updated with the latest best practices and emerging patterns.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t" style={{borderColor: '#B7C9E2'}}>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Frontend Development', 'Performance', 'Testing'].map((tag) => (
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
