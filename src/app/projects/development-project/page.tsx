import React from "react";

export default function DevelopmentProjectPage() {
  return (
    <section className="py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Development Projects</h1>
        <p className="text-lg text-blue-800 max-w-2xl mx-auto mb-8">
          Discover a range of development projects, from web applications to full-stack solutions. These projects highlight modern frameworks, clean code, and innovative features.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/30 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Marcel Grace Website</h2>
            <p className="mb-4 text-blue-800">A professional website for Marcel Grace, a software development company. Showcases innovative digital solutions, company portfolio, client success stories, and a full range of development services, all with a modern UI/UX and responsive design.</p>
            <div className="flex gap-4">
              <a href="https://www.marcelgrace.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/30 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Hasib Portfolio Website</h2>
            <p className="mb-4 text-blue-800">A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, professional design, and optimized performance to showcase skills and projects.</p>
            <div className="flex gap-4">
              <a href="https://hasibportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/30 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Sultanpur Al-Falah Islamic Center Website</h2>
            <p className="mb-4 text-blue-800">A modern, informative website for Sultanpur Al-Falah Islamic Center, designed to share prayer times, community news, educational resources, and event updates. Built with Next.js and React, it offers a welcoming, accessible, and responsive experience for the local Muslim community.</p>
            <div className="flex gap-4">
              <a href="https://safic.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
