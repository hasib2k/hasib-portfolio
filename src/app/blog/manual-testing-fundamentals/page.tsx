import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, CheckSquare, FileText, Target, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Manual Testing Fundamentals: Creating Effective Test Cases - Hasib Ahmed',
  description: 'Master the art of manual testing with systematic approaches to test case design, execution, and defect management for comprehensive quality assurance.'
}

export default function ManualTestingFundamentals() {
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
                Manual Testing Fundamentals: Creating Effective Test Cases
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm mb-6" style={{color: '#104F8F'}}>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>Hasib Ahmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>January 5, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min read</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed" style={{color: '#104F8F'}}>
                Master the art of manual testing with systematic approaches to test case design, execution, and defect management for comprehensive quality assurance.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" style={{color: '#104F8F'}}>
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                    The Foundation of Quality Assurance
                  </h2>
                  <p className="leading-relaxed">
                    Despite the rise of automated testing, manual testing remains the cornerstone of quality assurance. It provides the human insight, creativity, and exploratory capabilities that automated tests cannot replicate. Manual testing is particularly valuable for usability, user experience, and edge cases that require human judgment.
                  </p>
                  <p className="leading-relaxed">
                    This comprehensive guide will walk you through the fundamentals of manual testing, from creating effective test cases to executing thorough test cycles and managing defects efficiently.
                  </p>
                </section>

                {/* Test Case Design */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <FileText size={24} />
                    Effective Test Case Design
                  </h2>
                  
                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Essential Components</h3>
                  <p className="leading-relaxed mb-4">
                    A well-structured test case should include these key elements:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Test Case Header</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Test Case ID</li>
                        <li>Test Case Title</li>
                        <li>Priority Level</li>
                        <li>Test Type</li>
                        <li>Author Information</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Test Case Body</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Preconditions</li>
                        <li>Test Steps</li>
                        <li>Expected Results</li>
                        <li>Test Data</li>
                        <li>Post-conditions</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Sample Test Case Template</h4>
                    <div className="text-sm space-y-2" style={{color: '#104F8F'}}>
                      <p><strong>Test Case ID:</strong> TC_LOGIN_001</p>
                      <p><strong>Title:</strong> Verify successful login with valid credentials</p>
                      <p><strong>Priority:</strong> High</p>
                      <p><strong>Preconditions:</strong> User has a valid account</p>
                      <p><strong>Steps:</strong></p>
                      <ol className="list-decimal list-inside ml-4 space-y-1">
                        <li>Navigate to login page</li>
                        <li>Enter valid username</li>
                        <li>Enter valid password</li>
                        <li>Click Login button</li>
                      </ol>
                      <p><strong>Expected Result:</strong> User is redirected to dashboard</p>
                    </div>
                  </div>
                </section>

                {/* Testing Techniques */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <Target size={24} />
                    Testing Techniques and Approaches
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Equivalence Partitioning</h3>
                      <p className="leading-relaxed mb-3">
                        Divide input data into equivalent groups where each group should behave similarly. Test one value from each partition.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4" style={{borderColor: '#B7C9E2'}}>
                        <p className="text-sm"><strong>Example:</strong> Age field (18-65)</p>
                        <ul className="text-sm list-disc list-inside ml-4">
                          <li>Invalid: Below 18 (e.g., 15)</li>
                          <li>Valid: 18-65 (e.g., 30)</li>
                          <li>Invalid: Above 65 (e.g., 70)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Boundary Value Analysis</h3>
                      <p className="leading-relaxed mb-3">
                        Test values at the boundaries of input domains, as errors often occur at boundary conditions.
                      </p>
                      <div className="bg-white/20 rounded-lg p-4" style={{borderColor: '#B7C9E2'}}>
                        <p className="text-sm"><strong>Example:</strong> Password length (8-20 characters)</p>
                        <ul className="text-sm list-disc list-inside ml-4">
                          <li>7 characters (invalid)</li>
                          <li>8 characters (valid boundary)</li>
                          <li>20 characters (valid boundary)</li>
                          <li>21 characters (invalid)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>Exploratory Testing</h3>
                      <p className="leading-relaxed">
                        Simultaneous learning, test design, and execution. This approach is particularly effective for discovering unexpected issues and improving user experience understanding.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Test Execution */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <CheckSquare size={24} />
                    Test Execution Best Practices
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>1. Environment Preparation</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                        <li>Verify test environment setup and availability</li>
                        <li>Ensure test data is properly configured</li>
                        <li>Check browser/device compatibility requirements</li>
                        <li>Validate network and database connectivity</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>2. Documentation During Execution</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                        <li>Record actual results vs expected results</li>
                        <li>Capture screenshots for visual verification</li>
                        <li>Note any deviations or anomalies</li>
                        <li>Document test execution time and environment details</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-xl font-semibold mb-3" style={{color: '#104F8F'}}>3. Result Analysis</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                        <li>Categorize results: Pass, Fail, Blocked, or Skip</li>
                        <li>Analyze failure patterns and root causes</li>
                        <li>Identify regression issues</li>
                        <li>Document lessons learned for future cycles</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Defect Management */}
                <section>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{color: '#104F8F'}}>
                    <AlertCircle size={24} />
                    Effective Defect Management
                  </h2>
                  
                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Defect Report Components</h3>
                  <div className="bg-white/20 rounded-lg p-6 mb-6 border" style={{borderColor: '#B7C9E2'}}>
                    <div className="grid md:grid-cols-2 gap-4 text-sm" style={{color: '#104F8F'}}>
                      <div>
                        <h4 className="font-semibold mb-2">Essential Information</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Defect ID and Summary</li>
                          <li>Severity and Priority</li>
                          <li>Environment Details</li>
                          <li>Steps to Reproduce</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Supporting Evidence</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Screenshots/Videos</li>
                          <li>Expected vs Actual Results</li>
                          <li>Log Files</li>
                          <li>Test Data Used</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4" style={{color: '#104F8F'}}>Severity vs Priority</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Severity Levels</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>Critical:</strong> System crash/data loss</li>
                        <li><strong>High:</strong> Major functionality broken</li>
                        <li><strong>Medium:</strong> Minor functionality issues</li>
                        <li><strong>Low:</strong> Cosmetic/enhancement</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h4 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Priority Levels</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li><strong>P1:</strong> Fix immediately</li>
                        <li><strong>P2:</strong> Fix in current release</li>
                        <li><strong>P3:</strong> Fix in next release</li>
                        <li><strong>P4:</strong> Fix when time permits</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Tools and Technologies */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Tools and Technologies</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Test Management</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>TestRail</li>
                        <li>Zephyr</li>
                        <li>qTest</li>
                        <li>Azure DevOps</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Bug Tracking</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Jira</li>
                        <li>Bugzilla</li>
                        <li>Mantis</li>
                        <li>GitHub Issues</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 rounded-lg border backdrop-blur-md bg-white/10" style={{borderColor: '#B7C9E2'}}>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#104F8F'}}>Documentation</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Confluence</li>
                        <li>Notion</li>
                        <li>SharePoint</li>
                        <li>Google Docs</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>Conclusion</h2>
                  <p className="leading-relaxed">
                    Manual testing remains an invaluable part of the quality assurance process. While automation handles repetitive tasks, manual testing provides the human insight necessary for comprehensive quality validation. By following systematic approaches to test case design, execution, and defect management, QA professionals can ensure thorough coverage and high-quality software delivery.
                  </p>
                  <p className="leading-relaxed">
                    Remember that effective manual testing is not just about finding bugs—it's about understanding user behavior, validating business requirements, and ensuring the overall quality of the user experience.
                  </p>
                </section>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t" style={{borderColor: '#B7C9E2'}}>
              <div className="flex flex-wrap gap-3">
                {['Manual Testing', 'Test Cases', 'QA Process', 'Test Planning', 'Defect Management'].map((tag) => (
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
