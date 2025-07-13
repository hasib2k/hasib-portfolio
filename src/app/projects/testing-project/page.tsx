import React from "react";

export default function TestingProjectPage() {
  return (
    <section className="py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Testing Projects</h1>
        <p className="text-lg text-blue-800 max-w-2xl mx-auto mb-8">
          Explore a curated list of software testing projects, including automation, manual, and QA initiatives. Each project demonstrates best practices in test strategy, tools, and reporting.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/30 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">JICA Official Website</h2>
            <p className="mb-4 text-blue-800">JICA&apos;s official website is a comprehensive portal for the Japan International Cooperation Agency, offering resources on global development, project updates, and international cooperation news. The site is accessible, multilingual, and optimized for performance.</p>
            <div className="flex gap-4">
              <a href="https://www.jica.go.jp/english/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          <div className="rounded-2xl p-8 border backdrop-blur-md bg-white/30 shadow-lg" style={{borderColor: '#B7C9E2'}}>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">WyzrFriends Social Platform</h2>
            <p className="mb-4 text-blue-800">WyzrFriends is a vibrant social networking platform designed to help users connect, share, and build meaningful communities. Features include real-time chat, group creation, event management, and a modern, mobile-friendly UI with smooth animations.</p>
            <div className="flex gap-4">
              <a href="https://wyzrfriends.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2" style={{borderColor: '#B7C9E2', backgroundColor: 'transparent', color: '#104F8F'}}>
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
