export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #F5F6F7 0%, #B7C9E2 100%)'}}>
      <div className="text-center p-8 rounded-2xl border backdrop-blur-md bg-white/10 shadow-lg" style={{borderColor: '#B7C9E2'}}>
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 mb-4" style={{borderColor: '#104F8F'}}></div>
        <p style={{color: '#104F8F'}}>Loading...</p>
      </div>
    </div>
  )
}
