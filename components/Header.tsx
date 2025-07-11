'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleSignInClick = () => {
    setShowSignInModal(true)
  }

  const closeModal = () => {
    setShowSignInModal(false)
  }

  return (
    <>
      <header className="py-3 sticky top-0 z-50 bg-opacity-80 backdrop-blur-sm" style={{ backgroundColor: '#f8fafce6' }}>
        <div className="md:max-w-7xl mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center">
                <Logo showText={true} />
              </a>
              <div className="flex items-center">
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  {isHomePage && (
                    <>
                      <li>
                        <a className="text-muted-foreground hover:text-gray-900 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors" href="#features">
                          Features
                        </a>
                      </li>
                      <li>
                        <a className="text-muted-foreground hover:text-gray-900 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors" href="#faq">
                          FAQs
                        </a>
                      </li>
                    </>
                  )}
                  <li>
                    <a className="text-muted-foreground hover:text-gray-900 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-muted-foreground hover:text-gray-900 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors" href="/about">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="shrink-0 flex gap-2 items-center">
              <button 
                className="flex items-center gap-x-2 h-10 px-3 py-2 text-sm text-muted-foreground"
                aria-label="Switch language"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91-3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
                </svg>
                <span className="hidden md:block">English</span>
              </button>
              <div className="flex items-center gap-x-2 px-2">
                <button 
                  onClick={handleSignInClick}
                  className="bg-gray-800 text-white hover:bg-gray-900 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors"
                  aria-label="Sign in to your account"
                >
                  Sign in
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="block lg:hidden flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Logo showText={true} />
            </a>
            <button 
              className="h-10 w-10 inline-flex items-center justify-center rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="mb-4">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Feature Not Available</h3>
              <p className="text-sm text-gray-500 mb-4">
                Sign in functionality is currently under development. Stay tuned!
              </p>
              <button
                onClick={closeModal}
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 