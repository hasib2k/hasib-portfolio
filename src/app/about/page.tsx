import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Hasib Ahmed',
  description: 'Learn more about Hasib Ahmed, a dedicated QA Engineer & Frontend Developer with expertise in software quality assurance and modern web technologies.'
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
            <p className="text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{color: '#104F8F'}}>
              Dedicated QA Engineer & Frontend Developer ensuring software quality through comprehensive testing and modern web technologies
            </p>
          </div>
          
          {/* Main Content */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12 mb-12" style={{borderColor: '#B7C9E2'}}>
            <div className="space-y-8 text-lg leading-relaxed" style={{color: '#104F8F'}}>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                <p className="pl-8">
                  Hi, I am <span className="font-semibold" style={{color: '#104F8F'}}>Hasib Ahmed</span>, a dedicated QA Engineer & Frontend Developer with over a year of
                  experience in real-time projects. I continuously evolve my skills in software testing, quality assurance, and modern frontend
                  technologies. With a degree in Computer Science Engineering, I enhance my
                  efficiency in quality assurance and web development.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{backgroundColor: '#B7C9E2'}}></div>
                <p className="pl-8">
                  Currently, I&apos;m pursuing an <span className="font-semibold" style={{color: '#104F8F'}}>Parallaxlogic Infotech, Software Development Company (LTD)</span> in Software Quality Assurance Engineer,
                  merging my technical expertise with business insight for impactful results.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12 mb-12" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              Skills & <span style={{color: '#104F8F'}}>Technologies</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java', 'HTML/CSS', 'Tailwind CSS', 'MongoDB', 'SQL', 'Git'].map((skill) => (
                <div 
                  key={skill} 
                  className="group rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200"
                  style={{backgroundColor: '#F5F6F7'}}
                >
                  <span className="font-semibold group-hover:opacity-80 transition-opacity" style={{color: '#104F8F'}}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12 mb-12" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              Work <span style={{color: '#104F8F'}}>Experience</span>
            </h2>
            
            <div className="relative rounded-xl p-6 border-l-4" style={{backgroundColor: '#B7C9E2', borderColor: '#104F8F'}}>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#104F8F'}}></div>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: '#104F8F'}}>Parallaxlogic Infotech, Software Development Company (LTD)</h3>
              <p className="font-medium mb-1" style={{color: '#104F8F'}}>Software Quality Assurance Engineer</p>
              <p className="text-sm" style={{color: '#104F8F'}}>Currently Pursuing</p>
            </div>
          </div>

          {/* Educational Background Section */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              Educational <span style={{color: '#104F8F'}}>Background</span>
            </h2>
            
            <div className="relative rounded-xl p-6 border-l-4" style={{backgroundColor: '#B7C9E2', borderColor: '#104F8F'}}>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: '#104F8F'}}>Bachelor&apos;s Degree</h3>
              <p className="font-medium mb-1" style={{color: '#104F8F'}}>Computer Science Engineering</p>
              <p className="text-sm" style={{color: '#104F8F'}}>Completed</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
              <h2 className="text-3xl font-bold mb-4" style={{color: '#104F8F'}}>
                Let&apos;s Connect & Collaborate
              </h2>
              <p className="mb-6 max-w-2xl mx-auto" style={{color: '#104F8F'}}>
                I&apos;m always excited to work on new projects and collaborate with like-minded individuals. 
                Let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hireme"
                  className="px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Hire Me
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{borderColor: '#104F8F', color: '#104F8F', backgroundColor: 'transparent'}}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
