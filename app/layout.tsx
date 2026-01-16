import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Platformă Vocațională - Descoperă-ți Cariera',
  description: 'Platformă pentru ghidare vocațională și dezvoltare de carieră pentru tineri',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout







