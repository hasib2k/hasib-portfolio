'use client'

import { Calendar, Clock, ArrowRight, Mail, Check } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function BlogPage() {
  // Set document title and meta description on client side
  useEffect(() => {
    document.title = 'Blog - Hasib Ahmed'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read my insights on software quality assurance, testing methodologies, frontend development, and QA best practices.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Read my insights on software quality assurance, testing methodologies, frontend development, and QA best practices.'
      document.head.appendChild(meta)
    }
  }, [])
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setSubscriptionMessage('Please enter a valid email address.')
      return
    }

    setIsSubscribing(true)
    setSubscriptionMessage('')

    try {
      // Simulate API call (replace with actual subscription service)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, we'll just show success message
      // In a real app, you would send this to your newsletter service
      console.log('Subscribing email:', email)
      
      setIsSubscribed(true)
      setSubscriptionMessage('Thank you for subscribing! You\'ll receive updates soon.')
      setEmail('')
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false)
        setSubscriptionMessage('')
      }, 5000)
      
    } catch {
      setSubscriptionMessage('Subscription failed. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }
  const blogPosts = [
    {
      id: 1,
      title: "Building Robust Test Automation with Python and Pytest",
      excerpt: "Master Python and Pytest for creating comprehensive test automation frameworks that scale with your application needs.",
      content: "In this comprehensive guide, we'll explore advanced Python testing patterns and Pytest best practices...",
      author: "Hasib Ahmed",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Python Testing",
      tags: ["Python", "Pytest", "Test Automation", "QA", "Framework Design"],
      featured: true,
      slug: "python-pytest-automation-framework"
    },
    {
      id: 2,
      title: "Comprehensive API Testing Strategies and Best Practices",
      excerpt: "Learn effective API testing methodologies, tools, and automation techniques for ensuring robust backend services.",
      content: "API testing is crucial for modern web applications. Here's how to master it...",
      author: "Hasib Ahmed", 
      date: "2025-01-10",
      readTime: "6 min read",
      category: "API Testing",
      tags: ["API Testing", "Postman", "Python Requests", "Automation", "Quality Assurance"],
      featured: true,
      slug: "comprehensive-api-testing-guide"
    },
    {
      id: 3,
      title: "Manual Testing Fundamentals: Creating Effective Test Cases",
      excerpt: "Master the art of manual testing with systematic approaches to test case design, execution, and defect management.",
      content: "Manual testing remains the foundation of quality assurance. Let's explore best practices...",
      author: "Hasib Ahmed",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Manual Testing",
      tags: ["Manual Testing", "Test Cases", "QA Process", "Test Planning"],
      featured: false,
      slug: "manual-testing-fundamentals"
    },
    {
      id: 4,
      title: "Modern React Development with Next.js: Complete Guide",
      excerpt: "Build powerful, scalable web applications using React and Next.js with modern development practices and optimization techniques.",
      content: "React with Next.js provides an excellent foundation for modern web applications...",
      author: "Hasib Ahmed",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Frontend Development",
      tags: ["React", "Next.js", "Frontend Development", "JavaScript", "Web Apps"],
      featured: false,
      slug: "react-nextjs-development-guide"
    },
    {
      id: 5,
      title: "Quality Assurance in Agile Development: Testing Strategies",
      excerpt: "Implement effective QA processes in agile environments with continuous testing and quality feedback loops.",
      content: "Agile development requires adaptive quality assurance strategies...",
      author: "Hasib Ahmed",
      date: "2024-12-20",
      readTime: "5 min read",
      category: "QA Process",
      tags: ["Agile Testing", "QA", "Continuous Testing", "Quality Assurance"],
      featured: false,
      slug: "agile-qa-testing-strategies"
    },
    {
      id: 6,
      title: "Test Automation ROI: Building Business Cases for QA Investment",
      excerpt: "Learn how to demonstrate the value of test automation and build compelling business cases for QA tool investments.",
      content: "Effective business case development for test automation requires understanding ROI metrics...",
      author: "Hasib Ahmed",
      date: "2024-12-15",
      readTime: "12 min read",
      category: "QA Strategy",
      tags: ["Test Automation", "ROI", "QA Strategy", "Business Case"],
      featured: false,
      slug: "test-automation-roi-business-case"
    }
  ]

  const recentPosts = blogPosts.slice(0, 6)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
              My <span style={{color: '#104F8F'}}>Blog</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{color: '#104F8F'}}>
              Sharing insights on Python test automation, Pytest frameworks, manual testing strategies, API testing,
              React/Next.js development, and comprehensive quality assurance methodologies.
            </p>
          </div>

          {/* All Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              All <span style={{color: '#104F8F'}}>Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-6 transition-all duration-300 transform hover:scale-105" style={{borderColor: '#B7C9E2'}}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-lg" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 hover:opacity-80 transition-opacity" style={{color: '#104F8F'}}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="mb-4 leading-relaxed text-sm" style={{color: '#104F8F'}}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm mb-4" style={{color: '#104F8F'}}>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-lg" style={{backgroundColor: '#F5F6F7', color: '#104F8F'}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="px-4 py-2 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90 text-sm"
                    style={{backgroundColor: '#104F8F'}}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 mr-3" style={{color: '#104F8F'}} />
                <h2 className="text-3xl font-bold" style={{color: '#104F8F'}}>
                  Stay Updated
                </h2>
              </div>
              <p className="mb-6 max-w-2xl mx-auto" style={{color: '#104F8F'}}>
                Subscribe to get the latest posts and development insights delivered to your inbox.
              </p>
              
              {subscriptionMessage && (
                <div className={`mb-4 p-3 rounded-lg ${isSubscribed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <div className="flex items-center justify-center gap-2">
                    {isSubscribed && <Check className="w-4 h-4" />}
                    {subscriptionMessage}
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 backdrop-blur-sm bg-white/20 transition-all duration-300"
                  style={{
                    borderColor: '#B7C9E2', 
                    color: '#104F8F'
                  }}
                  disabled={isSubscribing || isSubscribed}
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
                  style={{backgroundColor: '#104F8F'}}
                  disabled={isSubscribing || isSubscribed}
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : isSubscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      Subscribed!
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </form>
              
              <p className="text-xs mt-4 opacity-75" style={{color: '#104F8F'}}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
