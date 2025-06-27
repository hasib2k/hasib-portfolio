import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold" style={{color: '#B7C9E2'}}>404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#104F8F'}}>Page Not Found</h2>
          <p className="text-lg max-w-md mx-auto" style={{color: '#104F8F'}}>
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            style={{backgroundColor: '#104F8F'}}
          >
            <Home size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border px-6 py-3 rounded-lg font-medium transition-colors"
            style={{borderColor: '#104F8F', color: '#104F8F'}}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
