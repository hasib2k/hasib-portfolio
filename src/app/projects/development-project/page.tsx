import React from "react";
import ProjectBackButton from '@/components/ProjectBackButton';

export default function DevelopmentProjectPage() {
  return (
    <div className="min-h-screen py-20" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ProjectBackButton />
          
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#104F8F'}}>Development Projects</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{color: '#104F8F'}}>
              Discover a range of development projects, from web applications to full-stack solutions. These projects highlight modern frameworks, clean code, and innovative features.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#104F8F'}}>Marcel Grace Website</h2>
                <p className="mb-4" style={{color: '#104F8F'}}>A professional website for Marcel Grace, a software development company. Showcases innovative digital solutions, company portfolio, client success stories, and a full range of development services, all with a modern UI/UX and responsive design.</p>
                <div className="flex gap-4">
                  <a href="https://www.marcelgrace.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#104F8F'}}>Hasib Portfolio Website</h2>
                <p className="mb-4" style={{color: '#104F8F'}}>A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, professional design, and optimized performance to showcase skills and projects.</p>
                <div className="flex gap-4">
                  <a href="https://hasibportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/10 shadow-lg col-span-full" style={{borderColor: '#B7C9E2'}}>
                <h2 className="text-2xl font-bold mb-4" style={{color: '#104F8F'}}>Sultanpur Al-Falah Islamic Center Website</h2>
                <p className="mb-4" style={{color: '#104F8F'}}>A modern, informative website for Sultanpur Al-Falah Islamic Center, designed to share prayer times, community news, educational resources, and event updates. Built with Next.js and React, it offers a welcoming, accessible, and responsive experience for the local Muslim community.</p>
                <div className="flex justify-center">
                  <a href="https://safic.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
