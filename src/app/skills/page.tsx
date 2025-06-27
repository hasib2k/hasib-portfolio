import { Metadata } from 'next'
import { Code, Database, Globe, Smartphone, Cloud, Cpu, Palette, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills - Hasib Ahmed',
  description: 'Explore my technical skills and expertise in web development, programming languages, frameworks, and modern technologies.'
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Quality Assurance & Testing",
      icon: <Code className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "Manual Testing", level: 95, description: "Functional, usability, and exploratory testing methodologies" },
        { name: "Automated Testing", level: 85, description: "Test automation using Selenium, Cypress, and Jest frameworks" },
        { name: "Test Planning", level: 90, description: "Creating comprehensive test plans, cases, and testing strategies" },
        { name: "Bug Tracking", level: 90, description: "Issue identification, documentation, and lifecycle management" },
        { name: "API Testing", level: 85, description: "RESTful API testing using Postman, Newman, and automated scripts" },
        { name: "Performance Testing", level: 75, description: "Load, stress, and performance testing using various tools" },
        { name: "Regression Testing", level: 90, description: "Ensuring software stability through systematic regression testing" },
        { name: "Test Documentation", level: 95, description: "Detailed test case creation and quality documentation" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "React.js", level: 85, description: "Building interactive UIs with hooks, context, and modern patterns" },
        { name: "JavaScript (ES6+)", level: 90, description: "Modern JavaScript with async/await, modules, and DOM manipulation" },
        { name: "TypeScript", level: 80, description: "Type-safe JavaScript development for scalable applications" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic markup and modern CSS features including Grid and Flexbox" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework for rapid UI development" },
        { name: "Responsive Design", level: 90, description: "Mobile-first design principles and cross-device compatibility" },
        { name: "Component Testing", level: 85, description: "Testing React components with Jest and Testing Library" },
        { name: "UI/UX Testing", level: 80, description: "User interface and experience validation and testing" }
      ]
    },
    {
      title: "Testing Tools & Automation",
      icon: <Cpu className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "Selenium WebDriver", level: 85, description: "Web application automation testing across browsers" },
        { name: "Cypress", level: 80, description: "Modern end-to-end testing framework for web applications" },
        { name: "Jest", level: 85, description: "JavaScript testing framework for unit and integration tests" },
        { name: "Postman", level: 90, description: "API testing, documentation, and automation tool" },
        { name: "JIRA", level: 85, description: "Issue tracking and project management for QA workflows" },
        { name: "Git & GitHub", level: 90, description: "Version control and collaborative development workflows" },
        { name: "TestRail", level: 75, description: "Test case management and reporting platform" }
      ]
    },
    {
      title: "Development & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Git & GitHub", level: 90, description: "Version control and collaborative development workflows" },
        { name: "VS Code", level: 95, description: "Primary code editor with extensions and debugging tools" },
        { name: "Jenkins", level: 70, description: "CI/CD pipeline automation for testing and deployment" },
        { name: "Docker", level: 65, description: "Containerization for consistent testing environments" },
        { name: "Chrome DevTools", level: 85, description: "Browser debugging and performance optimization tools" },
        { name: "Figma", level: 70, description: "UI/UX design tool for creating mockups and prototypes" },
        { name: "ESLint & Prettier", level: 85, description: "Code linting and formatting for consistent code quality" },
        { name: "Agile/Scrum", level: 80, description: "Agile methodologies and sprint-based development" }
      ]
    },
    {
      title: "Quality Assurance Skills",
      icon: <Users className="w-8 h-8" />,
      color: "indigo",
      skills: [
        { name: "Test Strategy", level: 90, description: "Developing comprehensive testing strategies and approaches" },
        { name: "Risk Assessment", level: 85, description: "Identifying and mitigating potential quality risks" },
        { name: "Cross-browser Testing", level: 90, description: "Ensuring compatibility across different browsers and devices" },
        { name: "Accessibility Testing", level: 80, description: "Testing applications for accessibility compliance and usability" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
      skills: [
        { name: "Problem Solving", level: 95, description: "Analytical thinking and debugging complex quality issues" },
        { name: "Attention to Detail", level: 95, description: "Meticulous focus on identifying bugs and quality issues" },
        { name: "Team Collaboration", level: 90, description: "Working effectively with developers and stakeholders" },
        { name: "Communication", level: 85, description: "Clear reporting of bugs and quality metrics to teams" },
        { name: "Continuous Learning", level: 95, description: "Staying updated with latest technologies and best practices" },
        { name: "Code Review", level: 80, description: "Reviewing and providing constructive feedback on code" }
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
            A comprehensive overview of my technical expertise and professional capabilities 
            developed through hands-on experience and continuous learning.
          </p>
        </div>

        {/* Enhanced Skills Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>1+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Years of experience</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>20+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Projects Tested</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>15+</div>
            <div className="font-medium text-xs" style={{color: '#104F8F'}}>Technical Skills</div>
          </div>
          <div className="text-center p-2 rounded-lg transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <div className="text-xl font-bold mb-1" style={{color: '#104F8F'}}>1000+</div>
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
              I believe in lifelong learning and staying updated with the latest technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>Online Courses</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Regularly completing courses on platforms like Udemy, Coursera, and freeCodeCamp
              </p>
            </div>

            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>Community</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Active participant in developer communities, forums, and local tech meetups
              </p>
            </div>

            <div className="text-center p-4 rounded-lg transition-all duration-300 transform hover:scale-102 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{color: '#104F8F'}}>Side Projects</h3>
              <p className="leading-relaxed text-xs" style={{color: '#104F8F'}}>
                Building personal projects to experiment with new technologies and frameworks
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
              With this diverse skill set, I&apos;m ready to tackle challenging projects and bring your ideas to life.
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
