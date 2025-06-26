import { Metadata } from 'next'
import { Github, ExternalLink, Calendar, Users, Code, Database, Layout, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - Hasib Ahmed',
  description: 'Explore my portfolio of software development projects, featuring modern web applications, full-stack solutions, and innovative technologies.'
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with Next.js and TypeScript, featuring user authentication, payment processing, inventory management, and admin dashboard.",
      longDescription: "This full-stack e-commerce platform demonstrates modern web development practices with a focus on performance, security, and user experience. The application includes advanced features like real-time inventory updates, secure payment processing with Stripe, email notifications, order tracking, and a comprehensive admin panel for managing products, orders, and users.",
      image: "/assets/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB", "NextAuth.js", "Prisma", "Vercel"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering", 
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order management system",
        "Admin dashboard",
        "Email notifications",
        "Responsive design"
      ],
      github: "https://github.com/hasib2k/ecommerce-platform",
      live: "https://ecommerce-demo.hasibdev.in",
      category: "Full-Stack",
      duration: "3 months",
      role: "Full-Stack Developer",
      status: "Completed"
    },
    {
      id: 2,
      title: "Task Management Application",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and advanced task tracking.",
      longDescription: "Built to streamline team productivity, this task management application offers intuitive project organization with real-time collaboration features. The app includes advanced drag-and-drop task management, team member assignments, project timelines, file attachments, and comprehensive reporting tools to track project progress and team performance.",
      image: "/assets/projects/taskmanager.jpg",
      technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "Redux", "Material-UI", "AWS"],
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Project timelines and milestones",
        "Team member assignments",
        "File attachments and comments",
        "Advanced reporting and analytics",
        "Email notifications",
        "Mobile responsive design"
      ],
      github: "https://github.com/hasib2k/task-manager",
      live: "https://tasks.hasibdev.in",
      category: "Full-Stack",
      duration: "4 months",
      role: "Lead Developer",
      status: "In Progress"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI's GPT models, featuring conversation history, multiple AI personalities, and advanced natural language processing.",
      longDescription: "This AI-powered chat application leverages the latest in artificial intelligence to provide users with intelligent, context-aware conversations. The platform supports multiple AI models, conversation threading, file uploads for context, and personalized AI assistants tailored to specific use cases like coding help, writing assistance, and general knowledge queries.",
      image: "/assets/projects/aichat.jpg",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Vercel", "Redis"],
      features: [
        "Multiple AI model support",
        "Conversation history and search",
        "File upload and analysis",
        "Custom AI personalities",
        "Real-time typing indicators",
        "Export conversations",
        "Dark/light mode",
        "Voice input and output"
      ],
      github: "https://github.com/hasib2k/ai-chat-app",
      live: "https://chat.hasibdev.in",
      category: "AI/ML",
      duration: "2 months",
      role: "Full-Stack Developer",
      status: "Completed"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js, featuring smooth animations, optimized performance, and comprehensive project showcases.",
      longDescription: "This portfolio website serves as a comprehensive showcase of my skills and projects. Built with performance and accessibility in mind, it features advanced animations, optimized images, SEO-friendly structure, and a content management system for easy updates. The site demonstrates modern web development practices and responsive design principles.",
      image: "/assets/projects/portfolio.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX", "Vercel", "Google Analytics"],
      features: [
        "Responsive design",
        "Smooth animations",
        "SEO optimization",
        "Dark/light mode",
        "Blog functionality",
        "Contact forms",
        "Performance optimization",
        "Analytics integration"
      ],
      github: "https://github.com/hasib2k/portfolio",
      live: "https://hasibdev.in",
      category: "Frontend",
      duration: "1 month",
      role: "Frontend Developer",
      status: "Completed"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A comprehensive weather application with location-based forecasts, interactive maps, weather alerts, and historical data visualization.",
      longDescription: "This weather dashboard provides users with detailed weather information including current conditions, 7-day forecasts, hourly predictions, and weather maps. The application features location-based services, severe weather alerts, historical weather data, and interactive charts for data visualization.",
      image: "/assets/projects/weather.jpg",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Mapbox", "Styled Components"],
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based services",
        "Weather alerts and notifications",
        "Historical data charts",
        "Favorite locations",
        "Offline functionality"
      ],
      github: "https://github.com/hasib2k/weather-dashboard",
      live: "https://weather.hasibdev.in",
      category: "Frontend",
      duration: "3 weeks",
      role: "Frontend Developer",
      status: "Completed"
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "A comprehensive analytics platform for social media management, featuring engagement tracking, content scheduling, and performance insights.",
      longDescription: "This social media analytics tool helps businesses and content creators understand their social media performance across multiple platforms. It includes advanced analytics, content scheduling, engagement tracking, competitor analysis, and automated reporting features to optimize social media strategies.",
      image: "/assets/projects/analytics.jpg",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis", "Chart.js", "Social Media APIs"],
      features: [
        "Multi-platform analytics",
        "Content scheduling",
        "Engagement tracking",
        "Competitor analysis",
        "Automated reporting",
        "Hashtag recommendations",
        "Performance insights",
        "Team collaboration"
      ],
      github: "https://github.com/hasib2k/social-analytics",
      live: "https://analytics.hasibdev.in",
      category: "Full-Stack",
      duration: "5 months",
      role: "Full-Stack Developer",
      status: "In Progress"
    }
  ]

  const categories = ["All", "Full-Stack", "Frontend", "AI/ML"]
  
  return (
    <div className="min-h-screen pt-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my work showcasing various technologies, creative solutions, 
            and passion for building exceptional digital experiences.
          </p>
        </div>

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

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02]">
              {/* Enhanced Project Image */}
              <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-blue-600/20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Enhanced Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold rounded-2xl shadow-lg border border-blue-200">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-8">
                {/* Enhanced Project Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                      <Users className="w-4 h-4" />
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Enhanced Key Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Technologies */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-purple-600" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm rounded-xl font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Links */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-all duration-300 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl font-medium transform hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 px-4 py-3 rounded-xl font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 pt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Interested in Working <span className="text-blue-600">Together?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/hireme"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/hasib2k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-300 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
