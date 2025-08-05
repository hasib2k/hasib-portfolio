'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ProjectBackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    // Check if there's browser history and if referrer is from our projects page
    if (typeof window !== 'undefined' && window.history.length > 1 && document.referrer.includes('/projects')) {
      router.back();
    } else {
      router.push('/projects');
    }
  };

  return (
    <button
      onClick={handleBackClick}
      className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 shadow-lg border transition-all duration-300 hover:bg-white/20 hover:scale-105"
      style={{borderColor: '#B7C9E2', color: '#104F8F'}}
    >
      <ArrowLeft size={20} />
      Back to Projects
    </button>
  );
}
