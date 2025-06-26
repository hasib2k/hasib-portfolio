import { Metadata } from 'next'
import { Code, Database, Globe, Smartphone, Cloud, Cpu, Palette, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills - Hasib Ahmed',
  description: 'Explore my technical skills and expertise in web development, programming languages, frameworks, and modern technologies.'
}

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "blue",
      skills: [
        { name: "React.js", level: 90, description: "Building interactive UIs with hooks, context, and modern patterns" },
        { name: "Next.js", level: 85, description: "Full-stack React framework with SSR, SSG, and API routes" },
        { name: "TypeScript", level: 80, description: "Type-safe JavaScript development for scalable applications" },
        { name: "JavaScript (ES6+)", level: 95, description: "Modern JavaScript with async/await, modules, and DOM manipulation" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic markup and modern CSS features including Grid and Flexbox" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework for rapid UI development" },
        { name: "Sass/SCSS", level: 75, description: "CSS preprocessor for better styling organization" },
        { name: "Responsive Design", level: 90, description: "Mobile-first design principles and cross-device compatibility" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      color: "green",
      skills: [
        { name: "Node.js", level: 80, description: "Server-side JavaScript runtime for scalable applications" },
        { name: "Express.js", level: 85, description: "Web application framework for Node.js APIs and middleware" },
        { name: "Python", level: 75, description: "Versatile programming language for web development and automation" },
        { name: "Django", level: 70, description: "High-level Python web framework for rapid development" },
        { name: "RESTful APIs", level: 85, description: "Designing and implementing REST APIs with proper HTTP methods" },
        { name: "GraphQL", level: 65, description: "Query language for APIs with type system and efficient data fetching" },
        { name: "JWT Authentication", level: 80, description: "Secure user authentication and authorization systems" },
        { name: "Microservices", level: 60, description: "Distributed system architecture and service communication" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "purple",
      skills: [
        { name: "MongoDB", level: 80, description: "NoSQL document database for flexible data storage" },
        { name: "PostgreSQL", level: 75, description: "Advanced relational database with complex queries" },
        { name: "MySQL", level: 70, description: "Popular relational database management system" },
        { name: "Redis", level: 65, description: "In-memory data structure store for caching and sessions" },
        { name: "AWS Services", level: 60, description: "Cloud computing services including EC2, S3, and Lambda" },
        { name: "Vercel", level: 85, description: "Platform for frontend deployment and serverless functions" },
        { name: "Docker", level: 55, description: "Containerization platform for application deployment" },
        { name: "Firebase", level: 70, description: "Backend-as-a-Service platform for real-time applications" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu className="w-8 h-8" />,
      color: "orange",
      skills: [
        { name: "Git & GitHub", level: 90, description: "Version control and collaborative development workflows" },
        { name: "VS Code", level: 95, description: "Primary code editor with extensions and debugging tools" },
        { name: "Figma", level: 70, description: "UI/UX design tool for creating mockups and prototypes" },
        { name: "Postman", level: 80, description: "API development and testing platform" },
        { name: "Webpack", level: 60, description: "Module bundler for JavaScript applications" },
        { name: "Vite", level: 75, description: "Fast build tool for modern web development" },
        { name: "ESLint & Prettier", level: 85, description: "Code linting and formatting for consistent code quality" },
        { name: "Chrome DevTools", level: 85, description: "Browser debugging and performance optimization tools" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "indigo",
      skills: [
        { name: "React Native", level: 65, description: "Cross-platform mobile app development with React" },
        { name: "Progressive Web Apps", level: 75, description: "Web apps with native app-like experiences" },
        { name: "Responsive Design", level: 90, description: "Mobile-first approach for all screen sizes" },
        { name: "Mobile UI/UX", level: 70, description: "Understanding mobile interface design principles" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      color: "pink",
      skills: [
        { name: "Problem Solving", level: 90, description: "Analytical thinking and debugging complex issues" },
        { name: "Team Collaboration", level: 85, description: "Working effectively in agile development teams" },
        { name: "Communication", level: 80, description: "Clear technical communication with stakeholders" },
        { name: "Project Management", level: 75, description: "Planning, organizing, and delivering projects on time" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
            <div className="text-3xl font-bold mb-2" style={{color: '#104F8F'}}>15+</div>
            <div className="font-medium" style={{color: '#104F8F'}}>Programming Languages</div>
          </div>
          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
            <div className="text-3xl font-bold mb-2" style={{color: '#104F8F'}}>25+</div>
            <div className="font-medium" style={{color: '#104F8F'}}>Frameworks & Libraries</div>
          </div>
          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
            <div className="text-3xl font-bold mb-2" style={{color: '#104F8F'}}>30+</div>
            <div className="font-medium" style={{color: '#104F8F'}}>Tools & Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
            <div className="text-3xl font-bold mb-2" style={{color: '#104F8F'}}>1+</div>
            <div className="font-medium" style={{color: '#104F8F'}}>Years Experience</div>
          </div>
        </div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border p-8" style={{borderColor: '#B7C9E2'}}>
              {/* Enhanced Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl shadow-lg ${getColorClasses()}`} style={{backgroundColor: getCategoryBackground()}}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold" style={{color: '#104F8F'}}>{category.title}</h2>
                  <p className="font-medium" style={{color: '#104F8F'}}>
                    {category.skills.length} skills in this category
                  </p>
                </div>
              </div>

              {/* Enhanced Skills Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-4 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-102 border" style={{backgroundColor: '#F5F6F7', borderColor: '#B7C9E2'}}>
                    {/* Enhanced Skill Header */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-lg" style={{color: '#104F8F'}}>{skill.name}</h3>
                      <span className="text-sm font-bold text-white px-3 py-1 rounded-full shadow-sm" style={{backgroundColor: '#104F8F'}}>{skill.level}%</span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="w-full rounded-full h-3 shadow-inner" style={{backgroundColor: '#B7C9E2'}}>
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #104F8F 0%, #B7C9E2 100%)'
                        }}
                      ></div>
                    </div>
                    
                    {/* Enhanced Skill Description */}
                    <p className="text-sm leading-relaxed font-medium" style={{color: '#104F8F'}}>
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Certifications & Learning */}
        <div className="mt-16 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#104F8F'}}>
              Continuous <span style={{color: '#104F8F'}}>Learning</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-lg max-w-2xl mx-auto" style={{color: '#104F8F'}}>
              I believe in lifelong learning and staying updated with the latest technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#104F8F'}}>Online Courses</h3>
              <p className="leading-relaxed" style={{color: '#104F8F'}}>
                Regularly completing courses on platforms like Udemy, Coursera, and freeCodeCamp
              </p>
            </div>

            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#104F8F'}}>Community</h3>
              <p className="leading-relaxed" style={{color: '#104F8F'}}>
                Active participant in developer communities, forums, and local tech meetups
              </p>
            </div>

            <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-102 border" style={{borderColor: '#B7C9E2'}}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{color: '#104F8F'}}>Side Projects</h3>
              <p className="leading-relaxed" style={{color: '#104F8F'}}>
                Building personal projects to experiment with new technologies and frameworks
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 pt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border shadow-xl" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-4xl font-bold mb-4" style={{color: '#104F8F'}}>
              Let&apos;s Build Something <span style={{color: '#104F8F'}}>Together</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: '#104F8F'}}>
              With this diverse skill set, I&apos;m ready to tackle challenging projects and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-102 shadow-lg hover:shadow-xl"
                style={{backgroundColor: '#104F8F'}}
              >
                View My Projects
              </a>
              <a
                href="/hireme"
                className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-102 shadow-lg border-2 hover:shadow-xl"
                style={{
                  backgroundColor: 'white',
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
