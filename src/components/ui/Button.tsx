import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 backdrop-blur-md shadow-lg border'
  
  const variants = {
    primary: 'bg-white/20 text-white hover:opacity-90 hover:scale-105',
    secondary: 'bg-white/10 text-gray-900 hover:bg-white/20 hover:scale-105',
    outline: 'border bg-white/10 hover:bg-white/20 hover:scale-105'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      style={{borderColor: '#B7C9E2'}}
      {...props}
    >
      {children}
    </button>
  )
}
