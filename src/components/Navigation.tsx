'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'rgba(245, 246, 247, 0.9)', borderBottom: '1px solid #B7C9E2'}}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#104F8F'}}>
              <span className="text-white font-bold">H</span>
            </div>
            <span className="font-bold" style={{color: '#104F8F'}}>Hasib Ahmed</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:opacity-80"
                style={{color: '#104F8F'}}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact"
              className="text-white px-4 py-2 rounded-lg transition-colors hover:opacity-90"
              style={{backgroundColor: '#104F8F'}}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
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
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition-colors hover:opacity-80"
                    style={{color: '#104F8F'}}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="/contact"
                  className="block text-white px-4 py-2 rounded-lg transition-colors hover:opacity-90 text-center"
                  style={{backgroundColor: '#104F8F'}}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
