'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Blog posts data (keep this synchronized with the main blog page)
const blogPosts = [
  {
    id: 1,
    title: "Building Robust Test Automation with Python and Pytest",
    slug: "python-pytest-automation-framework",
    date: "2025-01-15"
  },
  {
    id: 2,
    title: "Comprehensive API Testing Strategies and Best Practices", 
    slug: "comprehensive-api-testing-guide",
    date: "2025-01-10"
  },
  {
    id: 3,
    title: "Manual Testing Fundamentals: Creating Effective Test Cases",
    slug: "manual-testing-fundamentals",
    date: "2025-01-05"
  },
  {
    id: 4,
    title: "Modern React Development with Next.js: Complete Guide",
    slug: "react-nextjs-development-guide",
    date: "2024-12-28"
  },
  {
    id: 5,
    title: "Quality Assurance in Agile Development: Testing Strategies",
    slug: "agile-qa-testing-strategies",
    date: "2024-12-20"
  },
  {
    id: 6,
    title: "Test Automation ROI: Building Business Cases for QA Investment",
    slug: "test-automation-roi-business-case",
    date: "2024-12-15"
  },
  {
    id: 7,
    title: "Advanced API Testing Best Practices for Modern Applications",
    slug: "api-testing-best-practices",
    date: "2024-12-10"
  },
  {
    id: 8,
    title: "Python and Pytest: Advanced Test Automation Techniques",
    slug: "python-pytest-automation",
    date: "2024-12-05"
  },
  {
    id: 9,
    title: "React and Next.js: Advanced Development Patterns and Best Practices",
    slug: "react-nextjs-patterns",
    date: "2024-11-28"
  }
]

interface BlogNavigationProps {
  currentSlug: string
}

export default function BlogNavigation({ currentSlug }: BlogNavigationProps) {
  // Find current post index
  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug)
  
  // Get previous and next posts
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  if (!prevPost && !nextPost) {
    return null // No navigation needed if this is the only post
  }

  return (
    <div className="mt-12 pt-8 border-t" style={{borderColor: '#B7C9E2'}}>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Previous Post */}
        <div className="flex-1">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group block p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
              style={{borderColor: '#B7C9E2'}}
            >
              <div className="flex items-center gap-3 mb-2" style={{color: '#104F8F'}}>
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">Previous Article</span>
              </div>
              <h3 className="text-lg font-semibold group-hover:opacity-80 transition-opacity" style={{color: '#104F8F'}}>
                {prevPost.title}
              </h3>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>

        {/* Next Post */}
        <div className="flex-1">
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group block p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 text-right"
              style={{borderColor: '#B7C9E2'}}
            >
              <div className="flex items-center justify-end gap-3 mb-2" style={{color: '#104F8F'}}>
                <span className="text-sm font-medium">Next Article</span>
                <ChevronRight size={20} />
              </div>
              <h3 className="text-lg font-semibold group-hover:opacity-80 transition-opacity" style={{color: '#104F8F'}}>
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </div>

      {/* Back to Blog Button */}
      <div className="text-center mt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          style={{backgroundColor: '#104F8F', color: 'white'}}
        >
          View All Articles
        </Link>
      </div>
    </div>
  )
}
