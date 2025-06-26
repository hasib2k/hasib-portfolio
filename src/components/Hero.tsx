'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MessageCircle, Code } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const stats = [
    { number: "1+", label: "Years of experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "15+", label: "Technical Skills" },
    { number: "100+", label: "LeetCode Solved" }
  ]

  return (
    <section className="min-h-screen relative overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
                style={{color: '#104F8F'}}
              >
                Hello I'm
                <span className="block" style={{color: '#104F8F'}}>Hasib Ahmed</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl font-medium"
                style={{color: '#104F8F'}}
              >
                I'm a passionate Software Developer
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg leading-relaxed max-w-xl"
                style={{color: '#104F8F'}}
              >
                With expertise in web technologies, I specialize in building responsive web
                experiences with a focus on intuitive design that enhances user satisfaction and
                drives business value.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              <a
                href="/assets/resume/hasib_ahmed_cv.pdf"
                download="Hasib_Ahmed_CV.pdf"
                className="text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto cursor-pointer active:scale-95 shadow-xl"
                style={{backgroundColor: '#104F8F'}}
                onClick={(e) => {
                  // Ensure the download works even if the file path needs adjustment
                  console.log('Downloading CV...');
                }}
              >
                <Download size={20} />
                <span className="text-sm sm:text-base">DOWNLOAD CV</span>
              </a>
              
              {/* Social Links */}
              <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
                <a
                  href="https://github.com/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 cursor-pointer border shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Visit my GitHub Profile"
                >
                  <Github size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hasib-ahmed-429204210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 cursor-pointer border shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Connect with me on LinkedIn"
                >
                  <Linkedin size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 cursor-pointer border shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Send me an Email"
                >
                  <Mail size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://t.me/hasib_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 cursor-pointer border shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Message me on Telegram"
                >
                  <MessageCircle size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://leetcode.com/u/hasib_ahmed15/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl transform hover:scale-110 cursor-pointer border shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="View my LeetCode Profile"
                >
                  <Code size={20} style={{color: '#104F8F'}} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(135deg, #B7C9E2, #F5F6F7)'}}>
                <Image
                  src="/assets/profile_pic.jpg"
                  alt="Hasib Ahmed"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  priority
                />
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border"
                style={{borderColor: '#B7C9E2'}}
              >
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border"
                style={{borderColor: '#B7C9E2'}}
              >
                <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#B7C9E2'}}></div>
              </motion.div>

              {/* Additional decorative elements */}
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -left-8 w-4 h-4 rounded-full"
                style={{backgroundColor: '#B7C9E2', opacity: 0.6}}
              ></motion.div>
              
              <motion.div 
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 -right-8 w-6 h-6 rounded-full"
                style={{backgroundColor: '#104F8F', opacity: 0.4}}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border"
              style={{borderColor: '#B7C9E2'}}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{color: '#104F8F'}}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-medium" style={{color: '#104F8F'}}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border"
            style={{color: '#104F8F', borderColor: '#B7C9E2'}}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 rounded-full flex justify-center" style={{border: '2px solid #B7C9E2'}}>
              <motion.div 
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 rounded-full mt-2" 
                style={{backgroundColor: '#104F8F'}}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
