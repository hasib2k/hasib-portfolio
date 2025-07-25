'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, FolderOpen, BookOpen, Briefcase, Mail, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: User },
    { href: '/skills', label: 'Skills', icon: Code },
    {
      href: '/projects',
      label: 'Projects',
      icon: FolderOpen,
      hasDropdown: true,
      dropdowns: [
        {
          label: 'Testing Project',
          items: [
            { href: '/projects/testing-project', label: 'Testing Project' }
          ]
        },
        {
          label: 'Development Project',
          items: [
            { href: '/projects/development-project', label: 'Development Project' }
          ]
        }
      ]
    },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/hireme', label: 'Hire Me', icon: Briefcase },
  ]

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      const dropdown = document.getElementById('project-dropdown-menu') || document.getElementById('project-dropdown-menu-mobile');
      const button = document.getElementById('project-dropdown-btn') || document.getElementById('project-dropdown-btn-mobile');
      if (
        nav &&
        !nav.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setProjectDropdownOpen(false);
      } else if (
        dropdown &&
        !dropdown.contains(event.target as Node) &&
        button &&
        !button.contains(event.target as Node)
      ) {
        setProjectDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setProjectDropdownOpen(false);
      }
    };

    if (isOpen || projectDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, projectDropdownOpen]);

  // Water drop effect handler
  const createWaterDropEffect = (e: MouseEvent | TouchEvent) => {
    const button = e.currentTarget as HTMLElement
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    
    // Get coordinates from either mouse or touch event
    let clientX: number, clientY: number
    if (e instanceof TouchEvent) {
      clientX = e.touches[0]?.clientX || e.changedTouches[0]?.clientX || 0
      clientY = e.touches[0]?.clientY || e.changedTouches[0]?.clientY || 0
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }
    
    const x = clientX - rect.left - size / 2
    const y = clientY - rect.top - size / 2
    
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

  // Attach event listeners after component mounts
  useEffect(() => {
    const attachWaterDropEffect = () => {
      const navButtons = document.querySelectorAll('.nav-button')
      navButtons.forEach(button => {
        // Add both mouse and touch event listeners
        button.addEventListener('mousedown', createWaterDropEffect as EventListener)
        button.addEventListener('touchstart', createWaterDropEffect as EventListener)
      })
      
      return () => {
        navButtons.forEach(button => {
          button.removeEventListener('mousedown', createWaterDropEffect as EventListener)
          button.removeEventListener('touchstart', createWaterDropEffect as EventListener)
        })
      }
    }

    const cleanup = attachWaterDropEffect()
    return cleanup
  }, [isOpen]) // Re-attach when mobile menu state changes

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 shadow-lg border-b" style={{borderColor: '#B7C9E2'}}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 shadow-sm backdrop-blur-sm bg-white/20" style={{borderColor: '#B7C9E2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(16, 79, 143, 0.2)'}}>
              <div className="relative w-full h-full">
                <Image
                  src="/assets/profile_pic.jpg"
                  alt="Hasib Ahmed"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </div>
            <span className="font-bold" style={{color: '#104F8F'}}>Hasib Ahmed</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              if (item.hasDropdown) {
                return (
                  <div key={item.href} className="relative">
                    <button
                      id="project-dropdown-btn"
                      className="nav-button relative transition-all duration-300 hover:opacity-80 hover:scale-105 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border overflow-hidden touch-manipulation flex items-center gap-2"
                      style={{color: '#104F8F', borderColor: '#B7C9E2', backgroundColor: 'rgba(255,255,255,0.1)'}}
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded={projectDropdownOpen}
                      onClick={() => setProjectDropdownOpen((open) => !open)}
                    >
                      <IconComponent size={16} />
                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown size={16} style={{color: '#104F8F'}} className={`ml-1 transition-transform duration-200 ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {projectDropdownOpen && (
                      <div
                        id="project-dropdown-menu"
                        className="absolute left-0 mt-6 w-56 rounded-lg shadow-lg border border-blue-200 z-50 py-2 bg-white/10 backdrop-blur-md"
                        style={{borderColor: '#B7C9E2'}}>
                        {item.dropdowns.map((dropdown) => (
                          dropdown.items.map((drop) => (
                            <Link
                              key={drop.href}
                              href={drop.href}
                              className="block px-6 py-3 text-blue-900 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                              style={{color: '#104F8F'}}
                              onClick={() => setProjectDropdownOpen(false)}
                            >
                              {drop.label}
                            </Link>
                          ))
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-button relative transition-all duration-300 hover:opacity-80 hover:scale-105 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border overflow-hidden touch-manipulation flex items-center gap-2"
                  style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                >
                  <IconComponent size={16} />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
            <a
              href="/contact"
              className="nav-button relative text-white px-4 py-2 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 backdrop-blur-md bg-white/20 shadow-lg border overflow-hidden touch-manipulation flex items-center gap-2"
              style={{backgroundColor: '#104F8F', borderColor: '#B7C9E2'}}
            >
              <Mail size={16} />
              <span className="relative z-10">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 touch-manipulation"
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
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  if (item.hasDropdown) {
                    return (
                      <div key={item.href} className="relative">
                        <button
                          id="project-dropdown-btn-mobile"
                          type="button"
                          className="nav-button w-full flex items-center gap-3 px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border transition-all duration-300 hover:opacity-80 hover:scale-105"
                          style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                          onClick={(e) => {
                            e.stopPropagation();
                            setProjectDropdownOpen((open) => !open);
                          }}
                          aria-haspopup="true"
                          aria-expanded={projectDropdownOpen}
                        >
                          <IconComponent size={18} />
                          <span className="relative z-10">{item.label}</span>
                          <ChevronDown size={16} style={{color: '#104F8F'}} className={`ml-1 transition-transform duration-200 ${projectDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {projectDropdownOpen && (
                          <div id="project-dropdown-menu-mobile" className="mt-2 w-full rounded-lg shadow-lg border border-blue-200 z-50 py-2 bg-white/10 backdrop-blur-md flex flex-col gap-2" style={{borderColor: '#B7C9E2'}}>
                            {item.dropdowns.map((dropdown) => (
                              dropdown.items.map((drop) => (
                                <Link
                                  key={drop.href}
                                  href={drop.href}
                                  className="block w-full px-6 py-3 text-blue-900 font-semibold text-base sm:text-lg hover:bg-blue-100 transition-colors duration-200 rounded-lg text-left"
                                  style={{color: '#104F8F'}}
                                  onClick={() => {
                                    setProjectDropdownOpen(false);
                                    setIsOpen(false);
                                  }}
                                  tabIndex={0}
                                  role="button"
                                >
                                  {drop.label}
                                </Link>
                              ))
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-button relative transition-all duration-300 hover:opacity-80 hover:scale-105 px-4 py-3 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border overflow-hidden touch-manipulation flex items-center gap-3"
                      style={{color: '#104F8F', borderColor: '#B7C9E2'}}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent size={18} />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                })}
                <a
                  href="/contact"
                  className="nav-button relative text-white px-4 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105 text-center backdrop-blur-md bg-white/20 shadow-lg border overflow-hidden touch-manipulation flex items-center justify-center gap-3"
                  style={{backgroundColor: '#104F8F', borderColor: '#B7C9E2'}}
                  onClick={() => setIsOpen(false)}
                >
                  <Mail size={18} />
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
