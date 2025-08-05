import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Hasib Ahmed',
  description: 'Learn more about Hasib Ahmed, a dedicated QA Engineer & Frontend Developer with expertise in software quality assurance and modern web technologies.'
}

export default function About() {
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
              About <span style={{color: '#104F8F'}}>Me</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: '#104F8F'}}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed" style={{color: '#104F8F'}}>
              Dedicated QA Engineer & Frontend Developer ensuring software quality through comprehensive testing and modern web technologies
            </p>
          </div>

          {/* Profile & Introduction Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <Image
                    src="/assets/Profile2.jpeg"
                    alt="Hasib Ahmed - QA Engineer & Frontend Developer"
                    width={300}
                    height={300}
                    className="rounded-full object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex items-center">
              <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
                <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{color: '#104F8F'}}>
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                    <p className="pl-8">
                      Hi, I am <span className="font-semibold text-xl" style={{color: '#104F8F'}}>Hasib Ahmed</span>, a dedicated SQA Engineer & Frontend Developer with over a year of
                      experience in real-time projects. I continuously evolve my skills in software testing, quality assurance, and modern frontend
                      technologies.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{backgroundColor: '#B7C9E2'}}></div>
                    <p className="pl-8">
                      Currently working at <span className="font-semibold" style={{color: '#104F8F'}}>Parallaxlogic Infotech</span> as Software Quality Assurance Engineer,
                      merging my technical expertise with business insight for impactful results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '15+', label: 'Projects Completed' },
              { number: '10+', label: 'Technologies' },
              { number: '100%', label: 'Dedication' }
            ].map((stat, index) => (
              <div key={index} className="text-center rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-6 transform hover:scale-105 transition-all duration-300" style={{borderColor: '#B7C9E2'}}>
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#104F8F'}}>{stat.number}</div>
                <div className="text-sm md:text-base font-medium" style={{color: '#104F8F'}}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Skills & Technologies Section */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12 mb-16" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              Skills & <span style={{color: '#104F8F'}}>Technologies</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Manual Testing',
                'API Testing', 
                'Python/Pytest',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Java',
                'HTML/CSS',
                'Tailwind CSS',
                'Git/GitHub',
                'Agile/Scrum'
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="group rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg border"
                  style={{backgroundColor: '#B7C9E2', borderColor: '#104F8F'}}
                >
                  <span className="font-semibold text-sm md:text-base group-hover:opacity-80 transition-opacity" style={{color: '#104F8F'}}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Interests Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#104F8F'}}>
                What Drives Me
              </h3>
              <div className="space-y-4" style={{color: '#104F8F'}}>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#104F8F'}}></div>
                  <p className="text-sm md:text-base">Ensuring software quality through meticulous testing and attention to detail</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#104F8F'}}></div>
                  <p className="text-sm md:text-base">Building responsive, user-friendly web applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#104F8F'}}></div>
                  <p className="text-sm md:text-base">Continuous learning and staying updated with latest technologies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#104F8F'}}></div>
                  <p className="text-sm md:text-base">Collaborating with teams to deliver exceptional software solutions</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8" style={{borderColor: '#B7C9E2'}}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#104F8F'}}>
                Beyond Coding
              </h3>
              <div className="space-y-4" style={{color: '#104F8F'}}>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#B7C9E2'}}></div>
                  <p className="text-sm md:text-base">Exploring new testing methodologies and automation frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#B7C9E2'}}></div>
                  <p className="text-sm md:text-base">Contributing to open-source projects</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#B7C9E2'}}></div>
                  <p className="text-sm md:text-base">Reading tech blogs and staying updated with industry trends</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#B7C9E2'}}></div>
                  <p className="text-sm md:text-base">Mentoring aspiring developers and QA professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education Timeline */}
          <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-12 mb-16" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{color: '#104F8F'}}>
              Journey & <span style={{color: '#104F8F'}}>Milestones</span>
            </h2>
            
            <div className="space-y-8">
              {/* Current Role */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4">
                    <div className="text-sm font-medium px-3 py-1 rounded-full inline-block" style={{backgroundColor: '#104F8F', color: 'white'}}>
                      Current
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-xl p-6 border-l-4 relative overflow-hidden" style={{backgroundColor: '#B7C9E2', borderColor: '#104F8F'}}>
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#104F8F'}}></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2" style={{color: '#104F8F'}}>Software Quality Assurance Engineer</h3>
                      <p className="font-medium mb-1" style={{color: '#104F8F'}}>Parallaxlogic Infotech, Software Development Company (LTD)</p>
                      <p className="text-sm mb-3" style={{color: '#104F8F'}}>2024 - Present</p>
                      <p className="text-sm leading-relaxed" style={{color: '#104F8F'}}>
                        Leading quality assurance initiatives, developing comprehensive test strategies, and ensuring software reliability across multiple projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4">
                    <div className="text-sm font-medium px-3 py-1 rounded-full inline-block" style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}>
                      2024
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="rounded-xl p-6 border-l-4" style={{backgroundColor: '#B7C9E2', borderColor: '#104F8F'}}>
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2" style={{color: '#104F8F'}}>Bachelor&apos;s Degree in Computer Science & Engineering</h3>
                      <p className="font-medium mb-1" style={{color: '#104F8F'}}>Graduated 2024</p>
                      <p className="text-sm leading-relaxed" style={{color: '#104F8F'}}>
                        Comprehensive study in software engineering, algorithms, data structures, and modern development practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg p-8 md:p-10" style={{borderColor: '#B7C9E2'}}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#104F8F'}}>
                Let&apos;s Connect & Collaborate
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{color: '#104F8F'}}>
                I&apos;m always excited to work on new projects and collaborate with like-minded individuals. 
                Whether you need quality assurance expertise or frontend development skills, let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hireme"
                  className="px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Hire Me
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 border-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  style={{borderColor: '#104F8F', color: '#104F8F', backgroundColor: 'transparent'}}
                >
                  Get In Touch
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 mt-8">
                <a
                  href="https://linkedin.com/in/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  style={{backgroundColor: '#104F8F'}}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
