import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, CheckSquare, Bug, FileText } from 'lucide-react'
import BlogNavigation from '@/components/BlogNavigation'

export const metadata: Metadata = {
  title: 'API Testing Best Practices - Hasib Ahmed',
  description: 'Comprehensive guide to API testing methodologies, tools, and best practices for ensuring robust and reliable API functionality.'
}

export default function ApiTestingBlog() {
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
                API Testing Best Practices: A Comprehensive Guide
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{color: '#104F8F'}}>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Hasib Ahmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>January 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min read</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed" style={{color: '#104F8F'}}>
                Comprehensive guide to API testing methodologies, tools, and best practices for ensuring robust and reliable API functionality in modern applications.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" style={{color: '#104F8F'}}>
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                    Why API Testing Matters
                  </h2>
                  <p className="leading-relaxed">
                    APIs (Application Programming Interfaces) are the backbone of modern applications, enabling communication between different software components, services, and systems. As applications become increasingly distributed and microservice-oriented, API testing has become crucial for ensuring system reliability, performance, and security.
                  </p>
                  <p className="leading-relaxed">
                    Unlike UI testing, API testing focuses on the business logic layer, data exchange, and functionality. It&apos;s faster to execute, less flaky, and provides better coverage of edge cases and error scenarios.
                  </p>
                </section>

                {/* Types of API Testing */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <CheckSquare size={24} />
                    Types of API Testing
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Functional Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Endpoint validation</li>
                        <li>Request/Response verification</li>
                        <li>Data accuracy testing</li>
                        <li>Error handling validation</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Non-Functional Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Performance testing</li>
                        <li>Load testing</li>
                        <li>Security testing</li>
                        <li>Reliability testing</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Integration Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Service-to-service communication</li>
                        <li>Data flow validation</li>
                        <li>Dependency testing</li>
                        <li>End-to-end workflows</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Contract Testing</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Schema validation</li>
                        <li>API contract verification</li>
                        <li>Version compatibility</li>
                        <li>Consumer-driven contracts</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Testing Strategy */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <FileText size={24} />
                    API Testing Strategy
                  </h2>
                  
                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>1. Test Planning</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li><strong>API Documentation Analysis:</strong> Understand endpoints, parameters, and expected responses</li>
                      <li><strong>Test Scope Definition:</strong> Identify critical paths and edge cases</li>
                      <li><strong>Environment Setup:</strong> Configure test, staging, and production environments</li>
                      <li><strong>Test Data Management:</strong> Plan for test data creation and cleanup</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>2. Test Design</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded border-l-4" style={{backgroundColor: 'rgba(183, 201, 226, 0.1)', borderColor: '#104F8F'}}>
                      <h4 className="font-semibold mb-2" style={{color: '#104F8F'}}>Positive Test Cases</h4>
                      <p className="text-sm">Valid inputs, successful responses, expected data formats</p>
                    </div>
                    <div className="p-4 rounded border-l-4" style={{backgroundColor: 'rgba(183, 201, 226, 0.1)', borderColor: '#104F8F'}}>
                      <h4 className="font-semibold mb-2" style={{color: '#104F8F'}}>Negative Test Cases</h4>
                      <p className="text-sm">Invalid inputs, error responses, boundary conditions</p>
                    </div>
                    <div className="p-4 rounded border-l-4" style={{backgroundColor: 'rgba(183, 201, 226, 0.1)', borderColor: '#104F8F'}}>
                      <h4 className="font-semibold mb-2" style={{color: '#104F8F'}}>Edge Cases</h4>
                      <p className="text-sm">Empty data, null values, special characters, large payloads</p>
                    </div>
                  </div>
                </section>

                {/* Tools and Implementation */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Tools and Implementation</h2>
                  
                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Python with Requests Library</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`import requests
import pytest

class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
    
    def get_user(self, user_id):
        response = self.session.get(f"{self.base_url}/users/{user_id}")
        return response
    
    def create_user(self, user_data):
        response = self.session.post(f"{self.base_url}/users", json=user_data)
        return response

def test_get_user_success():
    client = APIClient("https://api.example.com")
    response = client.get_user(123)
    
    assert response.status_code == 200
    assert response.json()["id"] == 123
    assert "email" in response.json()`}
                    </pre>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Response Validation</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <pre className="text-sm overflow-x-auto" style={{color: '#104F8F'}}>
{`def validate_user_response(response):
    # Status code validation
    assert response.status_code == 200
    
    # Response time validation
    assert response.elapsed.total_seconds() < 2.0
    
    # Schema validation
    user_data = response.json()
    assert isinstance(user_data["id"], int)
    assert isinstance(user_data["email"], str)
    assert "@" in user_data["email"]
    
    # Header validation
    assert response.headers["Content-Type"] == "application/json"`}
                    </pre>
                  </div>
                </section>

                {/* Best Practices */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Bug size={24} />
                    Best Practices
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>1. Test Data Management</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Use test-specific data that doesn&apos;t interfere with other tests</li>
                        <li>Implement proper cleanup after test execution</li>
                        <li>Use data factories for generating test data</li>
                        <li>Separate test data from test logic</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>2. Authentication and Security</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Test different authentication methods (JWT, OAuth, API keys)</li>
                        <li>Validate authorization and access control</li>
                        <li>Test for common security vulnerabilities</li>
                        <li>Use secure credential management</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>3. Error Handling</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Test all error scenarios and status codes</li>
                        <li>Validate error message formats and content</li>
                        <li>Ensure proper HTTP status codes are returned</li>
                        <li>Test rate limiting and timeout scenarios</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>4. Performance Considerations</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Monitor response times and set acceptable thresholds</li>
                        <li>Test API behavior under load</li>
                        <li>Validate pagination and data retrieval efficiency</li>
                        <li>Test with large payloads and edge cases</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Conclusion</h2>
                  <p className="leading-relaxed">
                    Effective API testing is essential for building reliable, scalable applications. By following these best practices and implementing comprehensive testing strategies, you can ensure your APIs are robust, secure, and performant.
                  </p>
                  <p className="leading-relaxed">
                    Remember that API testing should be integrated into your CI/CD pipeline for continuous validation. Start with the most critical endpoints and gradually expand your test coverage to include edge cases and performance scenarios.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t" style={{borderColor: '#B7C9E2'}}>
              <div className="flex flex-wrap gap-3">
                {['API Testing', 'Python', 'Requests', 'Quality Assurance', 'Software Testing', 'Automation'].map((tag) => (
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

            {/* Blog Navigation */}
            <BlogNavigation currentSlug="api-testing-best-practices" />
          </article>
        </div>
      </div>
    </div>
  )
}
