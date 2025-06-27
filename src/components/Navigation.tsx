'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/hireme', label: 'Hire Me' },
  ]

  // Water drop effect handler
  const createWaterDropEffect = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    // Create ripple element
    const ripple = document.createElement('span')
    ripple.style.position = 'absolute'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.style.width = size + 'px'
    ripple.style.height = size + 'px'
    ripple.style.borderRadius = '50%'
    ripple.style.background = 'rgba(16, 79, 143, 0.3)'
    ripple.style.transform = 'scale(0)'
    ripple.style.animation = 'water-drop 0.6s ease-out'
    ripple.style.pointerEvents = 'none'
    ripple.style.zIndex = '0'
    
    button.style.position = 'relative'
    button.style.overflow = 'hidden'
    button.appendChild(ripple)
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple)
      }
    }, 600)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 shadow-lg border-b" style={{borderColor: '#B7C9E2'}}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 shadow-sm backdrop-blur-sm bg-white/20" style={{borderColor: '#B7C9E2'}}>
              <Image
                src="/assets/profile_pic.jpg"
                alt="Hasib Ahmed"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold" style={{color: '#104F8F'}}>Hasib Ahmed</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition-all duration-300 hover:opacity-80 hover:scale-105 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border overflow-hidden"
                style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                onClick={createWaterDropEffect}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
            <a
              href="/contact"
              className="relative text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 backdrop-blur-md bg-white/20 shadow-lg border overflow-hidden"
              style={{backgroundColor: '#104F8F', borderColor: '#B7C9E2'}}
              onClick={createWaterDropEffect}
            >
              <span className="relative z-10">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            style={{color: '#104F8F'}}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden backdrop-blur-md bg-white/10 border-t border-b rounded-b-lg mx-4 mt-2 shadow-lg"
              style={{borderColor: '#B7C9E2'}}
            >
              <div className="py-3 space-y-2 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative block transition-all duration-300 hover:opacity-80 hover:scale-105 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border overflow-hidden"
                    style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                    onClick={(e) => {
                      createWaterDropEffect(e)
                      setIsOpen(false)
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
                <a
                  href="/contact"
                  className="relative block text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 text-center backdrop-blur-md bg-white/20 shadow-lg border overflow-hidden"
                  style={{backgroundColor: '#104F8F', borderColor: '#B7C9E2'}}
                  onClick={createWaterDropEffect}
                >
                  <span className="relative z-10">Contact</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
