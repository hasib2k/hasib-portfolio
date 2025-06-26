import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Me - Hasib Ahmed',
  description: 'Get in touch with Hasib Ahmed for software development opportunities and collaborations.'
}

export default function HireMe() {
  return (
    <div className="min-h-screen pt-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#104F8F'}}>
            Let&apos;s Work Together
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{backgroundColor: '#104F8F'}}></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#104F8F'}}>
            I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re looking for a full-time developer, 
            freelance work, or just want to collaborate on something amazing, I&apos;d love to hear from you.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Services Section */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>Services I Offer</h2>
                <p className="text-lg mb-8 leading-relaxed" style={{color: '#104F8F'}}>
                  With expertise in modern web technologies, I deliver high-quality solutions 
                  tailored to your specific needs.
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="bg-white/90 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{borderColor: '#B7C9E2'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                      <span className="text-white font-bold">FS</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{color: '#104F8F'}}>Full-Stack Development</h3>
                      <p style={{color: '#104F8F'}}>End-to-end web application development with modern technologies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{borderColor: '#B7C9E2'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                      <span className="text-white font-bold">UI</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{color: '#104F8F'}}>Responsive Design</h3>
                      <p style={{color: '#104F8F'}}>Mobile-first, responsive interfaces that work on all devices</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{borderColor: '#B7C9E2'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{color: '#104F8F'}}>Modern Frameworks</h3>
                      <p style={{color: '#104F8F'}}>React, Next.js, TypeScript for scalable applications</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{borderColor: '#B7C9E2'}}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{backgroundColor: '#104F8F'}}>
                      <span className="text-white font-bold">API</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{color: '#104F8F'}}>API Development</h3>
                      <p style={{color: '#104F8F'}}>RESTful APIs and database integration solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>Get In Touch</h2>
                <p className="text-lg mb-8 leading-relaxed" style={{color: '#104F8F'}}>
                  Ready to start your project? Choose the best way to reach out to me.
                </p>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="flex items-center gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border"
                  style={{borderColor: '#B7C9E2'}}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg" style={{backgroundColor: '#104F8F'}}>
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Email</p>
                    <p className="font-medium" style={{color: '#104F8F'}}>hasibahmed.ig@gmail.com</p>
                    <p className="text-sm" style={{color: '#104F8F', opacity: 0.8}}>Best for detailed discussions</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+8801706776711"
                  className="flex items-center gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border"
                  style={{borderColor: '#B7C9E2'}}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg" style={{backgroundColor: '#104F8F'}}>
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Phone</p>
                    <p className="font-medium" style={{color: '#104F8F'}}>+880 170 6776 711</p>
                    <p className="text-sm" style={{color: '#104F8F', opacity: 0.8}}>For quick consultations</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border" style={{borderColor: '#B7C9E2'}}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#104F8F'}}>
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold mb-1" style={{color: '#104F8F'}}>Location</p>
                    <p className="font-medium" style={{color: '#104F8F'}}>Remote Worldwide</p>
                    <p className="text-sm" style={{color: '#104F8F', opacity: 0.8}}>Available across time zones</p>
                  </div>
                </div>
              </div>
              
              {/* Availability Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border shadow-lg" style={{borderColor: '#B7C9E2'}}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{color: '#104F8F'}}>
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                  Current Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                    <span style={{color: '#104F8F'}}>Open to new projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                    <span style={{color: '#104F8F'}}>Can start immediately</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
                    <span style={{color: '#104F8F'}}>Long-term partnerships welcome</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-16" style={{borderTop: '1px solid #B7C9E2'}}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <h2 className="text-3xl font-bold mb-6" style={{color: '#104F8F'}}>
                Ready to Start Your Project?
              </h2>
              <p className="text-lg mb-8" style={{color: '#104F8F'}}>
                Let&apos;s discuss how I can help bring your ideas to life with clean, efficient code and modern design.
              </p>
              <a 
                href="mailto:hasibahmed.ig@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white"
                style={{backgroundColor: '#104F8F'}}
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
