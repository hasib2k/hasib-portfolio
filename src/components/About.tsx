'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-300 hover:shadow-3xl" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 15px 30px -10px rgba(16, 79, 143, 0.25)'}}>
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/profile_pic.jpg"
                    alt="Hasib Ahmed Profile"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Visible Decorative Elements for all screens */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-8 -right-3 sm:-right-4 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 rounded-full -z-10 opacity-70" style={{backgroundColor: '#B7C9E2'}}></div>
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-8 -left-3 sm:-left-4 lg:-left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-40 lg:h-40 rounded-full -z-10 opacity-50" style={{backgroundColor: '#104F8F'}}></div>
              
              {/* Floating geometric shapes - visible on all screens */}
              <motion.div 
                animate={{ y: [-5, 5, -5], rotate: [0, 90, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 sm:top-10 -left-4 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full opacity-60"
                style={{backgroundColor: '#104F8F'}}
              ></motion.div>
              
              <motion.div 
                animate={{ y: [5, -5, 5], rotate: [0, -90, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 sm:bottom-20 -right-3 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 opacity-40"
                style={{backgroundColor: '#B7C9E2', transform: 'rotate(45deg)'}}
              ></motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            {/* Section Header */}
            <div className="space-y-4 text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                style={{color: '#104F8F'}}
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-20 h-1 rounded-full mx-auto lg:mx-0"
                style={{backgroundColor: '#104F8F'}}
              ></motion.div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <p className="text-base sm:text-lg leading-relaxed" style={{color: '#104F8F'}}>
                  Hi, I am <span className="font-semibold">Hasib Ahmed</span>, a dedicated QA Engineer & Frontend Developer with over a year of experience in 
                  real-time projects. I continuously evolve my skills in software testing, quality assurance, and modern frontend technologies. 
                  With a degree in Computer Science Engineering, I enhance my efficiency in quality assurance and web development.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <p className="text-base sm:text-lg leading-relaxed" style={{color: '#104F8F'}}>
                  Currently, I&apos;m pursuing an <span className="font-semibold">Parallaxlogic Infotech, Software Development Company (LTD)</span> in Software Quality Assurance Engineer,
                  merging my technical expertise with business insight for impactful results.
                </p>
              </motion.div>

              {/* Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{color: '#104F8F'}}>
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Python', 'Pytest', 'Manual Testing', 'API Testing', 'React', 'Next.js', 'JavaScript', 'Test Automation', 'Quality Assurance', 'Frontend Development'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                      style={{
                        backgroundColor: '#B7C9E2',
                        color: '#104F8F',
                        borderColor: '#104F8F'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#104F8F';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#B7C9E2';
                        e.currentTarget.style.color = '#104F8F';
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6"
            >
              <a
                href="/about"
                className="text-white px-5 py-2.5 rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base"
                style={{backgroundColor: '#104F8F'}}
              >
                Discover More
                <ExternalLink size={16} />
              </a>
              
              <a
                href="/hireme"
                className="px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-center text-sm sm:text-base hover:scale-105"
                style={{
                  border: '2px solid #104F8F',
                  color: '#104F8F',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#104F8F';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#104F8F';
                }}
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
