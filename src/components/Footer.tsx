'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-4 backdrop-blur-md" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl border backdrop-blur-md bg-white/10 shadow-lg p-4"
            style={{borderColor: '#B7C9E2'}}
          >
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Left Side - Copyright & Title */}
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold" style={{color: '#104F8F'}}>
                  Copyright © 2025 Hasib Ahmed
                </p>
                <p className="text-sm" style={{color: '#104F8F', opacity: 0.8}}>
                  Quality Assurance Engineer & Frontend Developer
                </p>
              </div>

              {/* Center - Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a 
                  href="mailto:hasibahmed.ig@gmail.com"
                  className="transition-all duration-300 flex items-center gap-2 hover:opacity-80 hover:scale-105 px-2 py-1 rounded-lg backdrop-blur-sm bg-white/5 border text-sm"
                  style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                >
                  <Mail size={14} />
                  hasibahmed.ig@gmail.com
                </a>
                <a 
                  href="tel:+8801706776711"
                  className="transition-all duration-300 hover:opacity-80 hover:scale-105 px-2 py-1 rounded-lg backdrop-blur-sm bg-white/5 border text-sm"
                  style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                >
                  +880 170 6776 711
                </a>
              </div>

              {/* Right Side - Social Links */}
              <div className="flex gap-2">
                <motion.a
                  href="https://github.com/hasib2k"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:opacity-80 backdrop-blur-md bg-white/20 shadow-lg border"
                  style={{backgroundColor: '#104F8F', color: '#F5F6F7', borderColor: '#B7C9E2'}}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hasib-ahmed-429204210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:opacity-80 backdrop-blur-md bg-white/20 shadow-lg border"
                  style={{backgroundColor: '#104F8F', color: '#F5F6F7', borderColor: '#B7C9E2'}}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="https://t.me/hasib_ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:opacity-80 backdrop-blur-md bg-white/20 shadow-lg border"
                  style={{backgroundColor: '#104F8F', color: '#F5F6F7', borderColor: '#B7C9E2'}}
                >
                  <MessageCircle size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
