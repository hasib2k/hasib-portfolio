import { Metadata } from 'next'
import { Code, Globe, Cloud, Cpu, Palette, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills - Hasib Ahmed',
  description: 'Explore my expertise in Python/Pytest automation, manual testing, API testing, React/Next.js development, and comprehensive QA methodologies.'
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Python Test Automation & SQA",
      icon: <Code className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "Python Programming", level: 92, description: "Advanced Python for test automation, scripting, and QA framework development" },
        { name: "Pytest Framework", level: 95, description: "Expert-level Pytest for comprehensive test automation, fixtures, and advanced reporting" },
        { name: "Selenium WebDriver", level: 88, description: "Web UI automation testing using Selenium with Python for cross-browser testing" },
        { name: "API Testing with Requests", level: 90, description: "RESTful API testing automation using Python Requests library and JSON validation" },
        { name: "Test Framework Architecture", level: 86, description: "Designing scalable, maintainable test automation frameworks with Page Object Model" },
        { name: "Data-Driven Testing", level: 90, description: "Parameterized testing with CSV, JSON, and database-driven test data management" },
        { name: "Test Reporting & Analytics", level: 87, description: "Allure reports, pytest-html, and custom dashboards for test result analysis" },
        { name: "CI/CD Test Integration", level: 82, description: "Integrating automated tests into Jenkins, GitHub Actions, and deployment pipelines" }
      ]
    },
    {
      title: "Manual Testing & QA Methodologies",
      icon: <Globe className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "Manual Testing Expertise", level: 95, description: "Comprehensive manual testing strategies, exploratory testing, and functional validation" },
        { name: "Test Case Design & Planning", level: 92, description: "Creating detailed test cases, test scenarios, and comprehensive test planning documentation" },
        { name: "API Testing & Validation", level: 88, description: "Manual API testing using Postman, REST client tools, and API documentation validation" },
        { name: "Bug Detection & Reporting", level: 94, description: "Expert bug identification, detailed defect documentation, and lifecycle management" },
        { name: "Regression Testing", level: 90, description: "Systematic regression testing strategies to ensure software stability across releases" },
        { name: "User Acceptance Testing", level: 87, description: "UAT coordination, execution, and stakeholder communication for business requirements" },
        { name: "Cross-Browser Testing", level: 85, description: "Manual testing across different browsers, devices, and operating systems" },
        { name: "Performance & Load Testing", level: 80, description: "Manual performance validation and load testing coordination with development teams" }
      ]
    },
    {
      title: "Frontend Development - React & Next.js",
      icon: <Cpu className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "React.js Development", level: 87, description: "Modern React development with hooks, context API, and component-based architecture" },
        { name: "Next.js Full-Stack", level: 90, description: "Next.js framework for SSR, SSG, API routes, and optimized production applications" },
        { name: "JavaScript (ES6+)", level: 92, description: "Advanced JavaScript with modern syntax, async/await, modules, and ES6+ features" },
        { name: "TypeScript", level: 83, description: "Type-safe development for scalable React applications and enhanced code quality" },
        { name: "Tailwind CSS", level: 88, description: "Utility-first CSS framework for rapid, responsive, and consistent UI development" },
        { name: "Responsive Web Design", level: 90, description: "Mobile-first design principles, CSS Grid, Flexbox, and cross-device compatibility" },
        { name: "Component Testing", level: 85, description: "Testing React components with Jest, React Testing Library, and integration testing" },
        { name: "State Management", level: 82, description: "React Context, Redux, Zustand, and modern state management patterns" }
      ]
    },
    {
      title: "QA Tools & Development Environment",
      icon: <Cloud className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Git & GitHub", level: 92, description: "Advanced version control, branching strategies, code review, and collaboration workflows" },
        { name: "VS Code & IDEs", level: 95, description: "Expert proficiency in VS Code with testing extensions, debugging, and productivity tools" },
        { name: "JIRA & Test Management", level: 88, description: "Test case management, defect tracking, and agile project management workflows" },
        { name: "Postman & API Tools", level: 90, description: "Advanced API testing, automation scripts, collections, and API documentation" },
        { name: "Browser Developer Tools", level: 87, description: "Expert debugging with Chrome DevTools, network analysis, and performance profiling" },
        { name: "Agile & Scrum Methodologies", level: 85, description: "Agile testing practices, sprint planning, and continuous integration workflows" },
        { name: "Test Documentation", level: 94, description: "Comprehensive test plans, test cases, and QA process documentation" },
        { name: "SQL & Database Testing", level: 78, description: "Database testing, SQL queries for data validation, and backend data integrity" }
      ]
    },
    {
      title: "Quality Assurance Leadership",
      icon: <Users className="w-8 h-8" />,
      color: "indigo",
      skills: [
        { name: "Test Strategy Development", level: 90, description: "Creating comprehensive testing strategies aligned with business objectives" },
        { name: "Risk-Based Testing", level: 87, description: "Prioritizing testing efforts based on risk assessment and critical business flows" },
        { name: "Quality Metrics & KPIs", level: 85, description: "Defining and tracking quality metrics, test coverage, and defect density analysis" },
        { name: "Stakeholder Communication", level: 88, description: "Effective communication with developers, product managers, and business stakeholders" },
        { name: "Process Improvement", level: 83, description: "Implementing QA best practices and continuous improvement in testing processes" },
        { name: "Team Mentoring", level: 80, description: "Mentoring junior testers and sharing QA knowledge across development teams" }
      ]
    },
    {
      title: "Professional Skills & Soft Skills",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
      skills: [
        { name: "Analytical Problem Solving", level: 95, description: "Strong analytical thinking for complex bug investigation and root cause analysis" },
        { name: "Attention to Detail", level: 96, description: "Meticulous focus on identifying edge cases, UI inconsistencies, and quality issues" },
        { name: "Team Collaboration", level: 92, description: "Excellent teamwork with cross-functional teams in agile development environments" },
        { name: "Technical Communication", level: 88, description: "Clear documentation of bugs, test results, and technical concepts to stakeholders" },
        { name: "Continuous Learning", level: 94, description: "Proactive learning of new testing tools, technologies, and industry best practices" },
        { name: "Code Review & QA", level: 85, description: "Reviewing code quality, providing feedback, and ensuring coding standards compliance" },
        { name: "Time Management", level: 90, description: "Efficient test execution, meeting deadlines, and prioritizing testing activities" },
        { name: "Adaptability", level: 92, description: "Quick adaptation to new projects, technologies, and changing requirements" }
      ]
    }
  ]

  const getColorClasses = () => {
    // Using theme colors for all categories
    return `text-white shadow-lg`
  }

  const getCategoryBackground = () => {
    // Using theme color for category backgrounds
    return `#104F8F`
  }

  return (
    <div className="min-h-screen pt-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
            My <span style={{color: '#104F8F'}}>Skills</span>
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{backgroundColor: '#104F8F'}}></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#104F8F'}}>
            Comprehensive expertise in Software Quality Assurance (SQA) with Python/Pytest automation frameworks, 
            manual testing methodologies, and modern frontend development using React/Next.js for building robust, 
            user-friendly web applications.
          </p>
        </div>

        {/* Enhanced Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>1+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Years SQA Experience</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>25+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Projects Tested & Developed</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>40+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Technical Skills</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>500+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Bugs Found & Fixed</div>
          </div>
        </div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header Card - Separate */}
              <div className="rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg p-4" style={{borderColor: '#B7C9E2'}}>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg shadow-lg ${getColorClasses()}`} style={{backgroundColor: getCategoryBackground()}}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{color: '#104F8F'}}>{category.title}</h2>
                    <p className="font-medium text-xs" style={{color: '#104F8F'}}>
                      {category.skills.length} skills in this category
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Grid - Separate Container */}
              <div className="grid md:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 p-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
                    {/* Enhanced Skill Header */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-sm" style={{color: '#104F8F'}}>{skill.name}</h3>
                      <span className="text-xs font-bold text-white px-1.5 py-0.5 rounded-full shadow-sm" style={{backgroundColor: '#104F8F'}}>{skill.level}%</span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="w-full rounded-full h-1.5 shadow-inner" style={{backgroundColor: '#B7C9E2'}}>
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #104F8F 0%, #B7C9E2 100%)'
                        }}
                      ></div>
                    </div>
                    
                    {/* Enhanced Skill Description */}
                    <p className="text-xs leading-relaxed font-medium" style={{color: '#104F8F'}}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Certifications & Learning */}
        <div className="mt-12 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{color: '#104F8F'}}>
              Continuous <span style={{color: '#104F8F'}}>Learning</span>
            </h2>
            <div className="w-12 h-1 mx-auto rounded-full mb-4" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-base max-w-2xl mx-auto" style={{color: '#104F8F'}}>
              Committed to staying current with evolving SQA methodologies, testing tools, and frontend technologies 
              to deliver high-quality software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>QA Certification</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Pursuing ISTQB certification and advanced QA methodologies courses
              </p>
            </div>

            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>Tech Community</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Active in QA and frontend development communities, sharing knowledge and best practices
              </p>
            </div>

            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>Hands-on Projects</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Building real-world projects to practice SQA automation and frontend development skills
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-12 pt-12">
          <div className="rounded-lg p-6 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-3" style={{color: '#104F8F'}}>
              Let&apos;s Build Something <span style={{color: '#104F8F'}}>Together</span>
            </h2>
            <p className="text-sm mb-4 max-w-xl mx-auto" style={{color: '#104F8F'}}>
              With specialized expertise in SQA and frontend development, I&apos;m ready to ensure quality 
              and create exceptional user experiences for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/projects"
                className="text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 shadow-lg hover:shadow-xl text-sm"
                style={{backgroundColor: '#104F8F'}}
              >
                View My Projects
              </a>
              <a
                href="/hireme"
                className="px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-102 shadow-lg border-2 hover:shadow-xl text-sm"
                style={{
                  backgroundColor: 'transparent',
                  color: '#104F8F',
                  borderColor: '#B7C9E2'
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
