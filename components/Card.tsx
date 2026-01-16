// Reusable Card Component
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
  ariaLabel?: string
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  onClick,
  ariaLabel,
}: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100 p-6'
  const hoverClasses = hoverable ? 'hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer' : ''
  const classes = `${baseClasses} ${hoverClasses} ${className}`

  if (onClick) {
    return (
      <div
        className={classes}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
      >
        {children}
      </div>
    )
  }

  return <div className={classes}>{children}</div>
}

export default Card







