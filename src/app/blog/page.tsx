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
      
    } catch (error) {
      setSubscriptionMessage('Subscription failed. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }
  const blogPosts = [
    {
      id: 1,
      title: "Comprehensive Testing Strategies for React Applications",
      excerpt: "Learn essential testing patterns and QA practices for building reliable React applications with comprehensive test coverage.",
      content: "In this comprehensive guide, we'll explore the latest testing best practices for React applications in 2025...",
      author: "Hasib Ahmed",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Testing",
      tags: ["React Testing", "QA", "Jest", "Cypress", "Quality Assurance"],
      featured: true,
      slug: "comprehensive-testing-react-applications"
    },
    {
      id: 2,
      title: "Automated Testing: Tools and Best Practices for QA Engineers",
      excerpt: "Explore modern automated testing tools and frameworks that every QA engineer should master for efficient testing workflows.",
      content: "Automated testing is revolutionizing how we ensure software quality...",
      author: "Hasib Ahmed", 
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Automation",
      tags: ["Selenium", "Automation", "QA Tools", "Testing"],
      featured: true,
      slug: "automated-testing-tools-best-practices"
    },
    {
      id: 3,
      title: "Frontend Performance Testing: Ensuring Optimal User Experience",
      excerpt: "A complete guide to performance testing for frontend applications and optimization strategies for better user experience.",
      content: "Frontend performance testing is crucial for user satisfaction...",
      author: "Hasib Ahmed",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Performance",
      tags: ["Performance Testing", "Frontend", "Optimization", "User Experience"],
      featured: false,
      slug: "frontend-performance-testing-guide"
    },
    {
      id: 4,
      title: "API Testing Best Practices: Ensuring Backend Quality",
      excerpt: "Master comprehensive API testing techniques to ensure robust backend services and maintain high software quality.",
      content: "API testing has become essential for modern web application quality assurance...",
      author: "Hasib Ahmed",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "API Testing",
      tags: ["API Testing", "Postman", "Quality Assurance", "Backend Testing"],
      featured: false,
      slug: "api-testing-best-practices"
    },
    {
      id: 5,
      title: "Cross-Browser Testing: Ensuring Consistent User Experience",
      excerpt: "A practical guide to cross-browser testing strategies and tools for maintaining consistent user experience across platforms.",
      content: "Understanding cross-browser compatibility is crucial for quality assurance...",
      author: "Hasib Ahmed",
      date: "2024-12-20",
      readTime: "5 min read",
      category: "Browser Testing",
      tags: ["Cross-Browser Testing", "QA", "Compatibility", "User Experience"],
      featured: false,
      slug: "cross-browser-testing-guide"
    },
    {
      id: 6,
      title: "Bug Tracking and Test Management: QA Workflow Optimization",
      excerpt: "Learn how to implement efficient bug tracking and test management workflows using modern QA tools and methodologies.",
      content: "Effective bug tracking and test management are essential for successful QA processes...",
      author: "Hasib Ahmed",
      date: "2024-12-15",
      readTime: "12 min read",
      category: "QA Process",
      tags: ["Bug Tracking", "Test Management", "QA Tools", "JIRA"],
      featured: false,
      slug: "bug-tracking-test-management"
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
              Sharing insights on software quality assurance, testing best practices, frontend development, 
              and the latest QA technologies and methodologies.
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
