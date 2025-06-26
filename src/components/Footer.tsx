'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white py-8" style={{backgroundColor: '#104F8F'}}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Copyright */}
          <p className="text-base" style={{color: '#B7C9E2'}}>
            Copyright © 2025 Hasib Ahmed
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4" style={{color: '#F5F6F7'}}>
            <a 
              href="mailto:hasibahmed.ig@gmail.com"
              className="transition-colors flex items-center gap-2 hover:opacity-80 text-sm"
              style={{color: '#B7C9E2'}}
            >
              <Mail size={16} />
              hasibahmed.ig@gmail.com
            </a>
            <a 
              href="tel:+918910171611"
              className="transition-colors hover:opacity-80 text-sm"
              style={{color: '#B7C9E2'}}
            >
              +880 170 6776 711
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/hasib2k"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
              style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hasib-ahmed-429204210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
              style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="https://t.me/hasib_ig"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:opacity-80"
              style={{backgroundColor: '#B7C9E2', color: '#104F8F'}}
            >
              <MessageCircle size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
