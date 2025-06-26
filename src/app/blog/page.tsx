import { Metadata } from 'next'
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'
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
    },
    {
      id: 7,
      title: "Database Design Principles for Web Applications",
      excerpt: "Essential database design principles every web developer should know for building efficient data layers.",
      content: "Good database design is fundamental to application performance...",
      author: "Hasib Ahmed",
      date: "2024-12-10",
      readTime: "9 min read",
      category: "Database",
      tags: ["Database", "SQL", "Design", "Performance"],
      featured: false,
      slug: "database-design-principles"
    },
    {
      id: 8,
      title: "Modern JavaScript: ES2024 Features You Should Know",
      excerpt: "Explore the latest JavaScript features in ES2024 and how they can improve your development workflow.",
      content: "JavaScript continues to evolve with exciting new features...",
      author: "Hasib Ahmed",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2024", "Modern JS", "Features"],
      featured: false,
      slug: "modern-javascript-es2024"
    }
  ]

  const categories = ["All", "React", "AI", "Next.js", "TypeScript", "CSS", "Backend", "Database", "JavaScript"]
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
    <div className="min-h-screen pt-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Tag className="w-4 h-4 mr-2" />
            Tech Insights & Tutorials
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Blog</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing insights on web development, programming best practices, and the latest 
            technology trends. Join me on this journey of continuous learning.
          </p>
        </div>

        {/* Enhanced Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Featured <span className="text-blue-600">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-2xl border border-blue-200">
                        {post.category}
                      </span>
                      <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-sm font-semibold rounded-2xl border border-orange-200">
                        ⭐ Featured
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              className="px-6 py-3 rounded-2xl border-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 font-medium transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced All Posts */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            All <span className="text-blue-600">Posts</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02]">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-semibold rounded-2xl">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg font-medium border border-blue-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-semibold transform hover:scale-105 shadow-lg"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center border border-gray-200 shadow-xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Stay <span className="text-blue-600">Updated</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest posts and development insights 
            delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            📧 No spam, unsubscribe at any time.
          </p>
        </div>

        {/* Enhanced Popular Tags */}
        <div className="mt-16 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular <span className="text-blue-600">Topics</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "JavaScript", "TypeScript", "Next.js", "CSS", "Node.js", "Web Development", "AI", "Performance", "Best Practices"].map((tag) => (
              <span key={tag} className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl text-sm hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 cursor-pointer font-medium transform hover:scale-105 shadow-lg">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
