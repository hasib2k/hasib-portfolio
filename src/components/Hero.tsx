'use client'

import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MessageCircle, Code } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const stats = [
    { number: "100+", label: "Manual Test Cases" },
    { number: "20+", label: "Pytest Automation Scripts" },
    { number: "15+", label: "API Endpoints Tested" },
    { number: "10+", label: "React/Next.js Projects" }
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
                Hello, I&apos;m
                <span className="block" style={{color: '#104F8F'}}>Hasib Ahmed</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl font-medium"
                style={{color: '#104F8F'}}
              >
                SQA Engineer & Frontend Developer | Python • Pytest • React • Next.js
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg leading-relaxed max-w-xl"
                style={{color: '#104F8F'}}
              >
                I excel in comprehensive software testing — from manual testing strategies to advanced 
                Python/Pytest automation frameworks and thorough API testing. Simultaneously, I build 
                modern, responsive web applications using React and Next.js. Whether ensuring software 
                quality through rigorous testing or creating seamless user experiences, I bridge the gap 
                between flawless functionality and exceptional design.
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
                onClick={() => {
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
                  className="p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Visit my GitHub Profile"
                >
                  <Github size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Connect with me on LinkedIn"
                >
                  <Linkedin size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Send me an Email"
                >
                  <Mail size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://t.me/hasib_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Message me on Telegram"
                >
                  <MessageCircle size={20} style={{color: '#104F8F'}} />
                </a>
                <a
                  href="https://dev-portfolio-main.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer border backdrop-blur-md bg-white/10 shadow-lg"
                  style={{borderColor: '#B7C9E2'}}
                  title="Profile"
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
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105" style={{background: 'linear-gradient(135deg, #B7C9E2, #F5F6F7)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 15px 30px -10px rgba(16, 79, 143, 0.4), 0 10px 20px -5px rgba(183, 201, 226, 0.5), 0 0 40px rgba(16, 79, 143, 0.3)'}}>
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/profile_pic.jpg"
                    alt="Hasib Ahmed"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 rounded-full p-4 transition-all duration-300 transform hover:scale-110 border backdrop-blur-md bg-white/10 shadow-lg"
                style={{borderColor: '#B7C9E2'}}
              >
                <div className="w-8 h-8 rounded-full" style={{backgroundColor: '#104F8F'}}></div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 rounded-full p-3 transition-all duration-300 transform hover:scale-110 border backdrop-blur-md bg-white/10 shadow-lg"
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
              className="text-center p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg"
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

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.div className="flex flex-col items-center gap-3">
            <motion.span 
              className="text-sm font-medium tracking-wide"
              style={{color: '#104F8F'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Scroll Down
            </motion.span>
            
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 flex justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
              style={{borderColor: '#104F8F'}}
              onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <motion.div 
                animate={{ y: [2, 18, 2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 rounded-full mt-2" 
                style={{backgroundColor: '#104F8F'}}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
