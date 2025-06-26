import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Hasib Ahmed',
  description: 'Learn more about Hasib Ahmed, a passionate Software Developer with expertise in web technologies.'
}

export default function About() {
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
              About <span style={{color: '#104F8F'}}>Me</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <p className="pl-8">
                  Hi, I am <span className="font-semibold text-gray-900">Hasib Ahmed</span>, a passionate Software Developer with over a year of
                  experience in real-time projects. I continuously evolve my skills and embrace new
                  technologies. With a degree in Computer Science Engineering, I enhance my
                  efficiency in software development.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="pl-8">
                  Currently, I'm pursuing an <span className="font-semibold text-gray-900">Parallaxlogic Infotech, Software Development Company (LTD)</span> in Software Quality Assurance Engineer,
                  merging my technical expertise with business insight for impactful results.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Skills & <span className="text-blue-600">Technologies</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java', 'HTML/CSS', 'Tailwind CSS', 'MongoDB', 'SQL', 'Git'].map((skill, index) => (
                <div 
                  key={skill} 
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200 hover:border-blue-300"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Work <span className="text-blue-600">Experience</span>
            </h2>
            
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parallaxlogic Infotech, Software Development Company (LTD)</h3>
              <p className="text-blue-600 font-medium mb-1">Software Quality Assurance Engineer</p>
              <p className="text-gray-500 text-sm">Currently Pursuing</p>
            </div>
          </div>

          {/* Educational Background Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Educational <span className="text-blue-600">Background</span>
            </h2>
            
            <div className="relative bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-600">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bachelor's Degree</h3>
              <p className="text-purple-600 font-medium mb-1">Computer Science Engineering</p>
              <p className="text-gray-500 text-sm">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
