'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/assets/profile_pic _2.jpg"
                  alt="Hasib Ahmed Profile"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full -z-10 opacity-70" style={{backgroundColor: '#B7C9E2'}}></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full -z-10 opacity-50" style={{backgroundColor: '#104F8F'}}></div>
              
              {/* Floating geometric shapes */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-10 -left-6 w-6 h-6 rounded-full opacity-60"
                style={{backgroundColor: '#104F8F'}}
              ></motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -180, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-20 -right-4 w-4 h-4 opacity-40"
                style={{backgroundColor: '#B7C9E2', transform: 'rotate(45deg)'}}
              ></motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
                style={{color: '#104F8F'}}
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="w-20 h-1 rounded-full"
                style={{backgroundColor: '#104F8F'}}
              ></motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <p className="text-lg leading-relaxed" style={{color: '#104F8F'}}>
                  Hi, I am <span className="font-semibold">Hasib Ahmed</span>, a dedicated QA Engineer & Frontend Developer with over 1 year of
                  experience in software quality assurance and frontend development. I continuously evolve my testing methodologies and
                  development skills while embracing new technologies. With a degree in Computer Science Engineering, I enhance my
                  efficiency in ensuring software quality and creating exceptional user interfaces.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <p className="text-lg leading-relaxed" style={{color: '#104F8F'}}>
                  Currently, I&apos;m working at <span className="font-semibold">Parallaxlogic Infotech, Software Development Company (LTD)</span> as a QA Engineer & Frontend Developer,
                  merging my testing expertise with frontend development skills for comprehensive quality assurance and user experience optimization.
                </p>
              </motion.div>

              {/* Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/20"
                style={{borderColor: '#B7C9E2'}}
              >
                <h3 className="text-xl font-semibold mb-4" style={{color: '#104F8F'}}>
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Manual Testing', 'Automated Testing', 'React', 'JavaScript', 'Selenium', 'Test Planning', 'Bug Tracking', 'Quality Assurance'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 pt-6"
            >
              <a
                href="/about"
                className="text-white px-5 py-2 rounded-lg font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                style={{backgroundColor: '#104F8F'}}
              >
                Discover More
                <ExternalLink size={16} />
              </a>
              
              <a
                href="/hireme"
                className="px-5 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
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
