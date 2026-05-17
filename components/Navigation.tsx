'use client'

import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDownToggle = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleMenu()
    }
  }

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
    router.push('/')
  }

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/cariere', label: 'Explorează Cariere' },
    { href: '/teste', label: 'Teste' },
    { href: '/oportunitati', label: 'Oportunități' },
  ]

  const authLink = user
    ? null
    : { href: '/cont?redirect=/teste', label: 'Autentificare' }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            aria-label="Acasă - Platformă Vocațională"
          >
            🎓 CarieraTaDeVis
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {!isLoading && (
              user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Salut, <span className="font-semibold text-gray-800">{user.name.split(' ')[0]}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-200 px-3 py-1.5 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Deconectare
                  </button>
                </div>
              ) : (
                authLink && (
                  <Link
                    href={authLink.href}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    {authLink.label}
                  </Link>
                )
              )
            )}
          </div>

          <button
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDownToggle}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            tabIndex={0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!isLoading && (
              user ? (
                <>
                  <p className="px-3 py-2 text-sm text-gray-600">
                    Conectat ca <span className="font-semibold">{user.name}</span>
                  </p>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-primary-600 hover:bg-primary-50 font-medium"
                  >
                    Deconectare
                  </button>
                </>
              ) : (
                authLink && (
                  <Link
                    href={authLink.href}
                    className="block px-3 py-2 rounded-md bg-primary-600 text-white font-medium text-center mx-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {authLink.label}
                  </Link>
                )
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
