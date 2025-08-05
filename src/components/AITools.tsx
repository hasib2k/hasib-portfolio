"use client";
import { ExternalLink } from 'lucide-react';
import QuickChatButton from './QuickChatButton';

export default function AITools() {
  // Example AI tool card
  return (
    <section className="py-8 sm:py-12" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 text-center" style={{color: '#104F8F'}}>
          Featured AI Tool
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Copilot Robot */}
          <div className="group relative rounded-2xl p-5 sm:p-8 transition-all duration-500 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg flex flex-col justify-between w-full" style={{borderColor: '#B7C9E2', minHeight: '260px'}}>
            {/* Floating icon */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#104F8F'}}>
              <div className="w-6 h-6 rounded-full bg-white/30"></div>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300" style={{color: '#104F8F'}}>
              Copilot Robot
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base min-h-[48px] sm:min-h-[60px]" style={{color: '#104F8F'}}>An AI-powered coding assistant that helps you write, debug, and optimize code in real time. Supports multiple languages, provides intelligent suggestions, and integrates seamlessly with modern development workflows.</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/features/copilot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-[#B7C9E2] bg-transparent text-[#104F8F] hover:bg-[#104F8F] hover:text-white hover:border-[#104F8F]"
              >
                <ExternalLink size={18} />
                <span>Learn More</span>
              </a>
            </div>
          </div>
          {/* ChatGPT */}
          <div className="group relative rounded-2xl p-5 sm:p-8 transition-all duration-500 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg flex flex-col justify-between w-full" style={{borderColor: '#B7C9E2', minHeight: '260px'}}>
            {/* Floating icon */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#104F8F'}}>
              <div className="w-6 h-6 rounded-full bg-white/30"></div>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300" style={{color: '#104F8F'}}>
              ChatGPT
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base min-h-[48px] sm:min-h-[60px]" style={{color: '#104F8F'}}>A conversational AI model by OpenAI that can answer questions, assist with writing, and provide creative ideas. Used for chatbots, content generation, and productivity tools.</p>
            <div className="flex gap-4">
              <a
                href="https://chat.openai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-[#B7C9E2] bg-transparent text-[#104F8F] hover:bg-[#104F8F] hover:text-white hover:border-[#104F8F]"
              >
                <ExternalLink size={18} />
                <span>Try ChatGPT</span>
              </a>
            </div>
          </div>
          {/* Midjourney */}
          <div className="group relative rounded-2xl p-5 sm:p-8 transition-all duration-500 transform hover:scale-105 border backdrop-blur-md bg-white/10 shadow-lg flex flex-col justify-between w-full" style={{borderColor: '#B7C9E2', minHeight: '260px'}}>
            {/* Floating icon */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#104F8F'}}>
              <div className="w-6 h-6 rounded-full bg-white/30"></div>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300" style={{color: '#104F8F'}}>
              Midjourney
            </h3>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base min-h-[48px] sm:min-h-[60px]" style={{color: '#104F8F'}}>An AI image generation tool that creates stunning visuals from text prompts. Popular for digital art, design inspiration, and creative projects.</p>
            <div className="flex gap-4">
              <a
                href="https://www.midjourney.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-[#B7C9E2] bg-transparent text-[#104F8F] hover:bg-[#104F8F] hover:text-white hover:border-[#104F8F]"
              >
                <ExternalLink size={18} />
                <span>Explore Midjourney</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    {/* Quick Chatting Button (Client Component) */}
    <QuickChatButton />
  </section>
  );
}
