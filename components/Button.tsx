// Reusable Button Component
import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500'
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-white text-primary-600 hover:bg-gray-100',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
    </button>
  )
}

export default Button







