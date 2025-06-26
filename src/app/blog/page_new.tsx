import { Metadata } from 'next'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Hasib Ahmed',
  description: 'Read my thoughts on web development, programming, technology trends, and software engineering best practices.'
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices for 2025",
      excerpt: "Learn the essential patterns and practices for building maintainable React applications that scale with your team and user base.",
      content: "In this comprehensive guide, we'll explore the latest best practices for React development in 2025...",
      author: "Hasib Ahmed",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Best Practices", "Scalability"],
      featured: true,
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "The Future of Web Development: AI-Powered Tools and Workflows",
      excerpt: "Explore how AI is revolutionizing web development and which tools every developer should know about in 2025.",
      content: "Artificial Intelligence is transforming how we build web applications...",
      author: "Hasib Ahmed", 
      date: "2025-01-10",
      readTime: "6 min read",
      category: "AI",
      tags: ["AI", "Development Tools", "Productivity", "Future"],
      featured: true,
      slug: "future-of-web-development-ai"
    },
    {
      id: 3,
      title: "Next.js 15: What's New and How to Migrate",
      excerpt: "A complete guide to Next.js 15 features and a step-by-step migration strategy from previous versions.",
      content: "Next.js 15 brings exciting new features and improvements...",
      author: "Hasib Ahmed",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Next.js",
      tags: ["Next.js", "React", "Migration", "Web Development"],
      featured: false,
      slug: "nextjs-15-whats-new"
    },
    {
      id: 4,
      title: "TypeScript Tips: Advanced Patterns for Better Code",
      excerpt: "Master advanced TypeScript patterns to write more robust and maintainable code with better type safety.",
      content: "TypeScript has become essential for modern web development...",
      author: "Hasib Ahmed",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Code Quality", "Programming"],
      featured: false,
      slug: "typescript-advanced-patterns"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use What in 2025",
      excerpt: "A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios.",
      content: "Understanding when to use CSS Grid versus Flexbox is crucial...",
      author: "Hasib Ahmed",
      date: "2024-12-20",
      readTime: "5 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Grid", "Flexbox"],
      featured: false,
      slug: "css-grid-vs-flexbox-2025"
    },
    {
      id: 6,
      title: "Building RESTful APIs with Node.js and Express",
      excerpt: "Learn how to design and implement robust RESTful APIs using Node.js, Express, and modern best practices.",
      content: "REST APIs are the backbone of modern web applications...",
      author: "Hasib Ahmed",
      date: "2024-12-15",
      readTime: "12 min read",
      category: "Backend",
      tags: ["Node.js", "Express", "API", "Backend"],
      featured: false,
      slug: "restful-apis-nodejs-express"
    }
  ]

  const categories = ["All", "React", "AI", "Next.js", "TypeScript", "CSS", "Backend"]
  const featuredPosts = blogPosts.filter(post => post.featured)
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Sharing insights on web development, programming best practices, and the latest 
              technology trends.
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured <span style={{color: '#104F8F'}}>Articles</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 text-sm font-medium rounded-lg" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                        {post.category}
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-lg">
                        ⭐ Featured
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:opacity-80 transition-opacity">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="px-4 py-2 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:opacity-90"
                        style={{backgroundColor: '#104F8F'}}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium rounded-lg hover:border-blue-300 hover:text-blue-700"
              >
                {category}
              </button>
            ))}
          </div>

          {/* All Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All <span style={{color: '#104F8F'}}>Posts</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-lg" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:opacity-80 transition-opacity">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
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
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to get the latest posts and development insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  className="px-6 py-3 text-white rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
