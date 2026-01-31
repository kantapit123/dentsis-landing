import { useState } from 'react'
import { Language, Translations } from '../content/translations'

interface HeaderProps {
  language: Language
  toggleLanguage: () => void
  t: Translations['header']
}

export default function Header({ language, toggleLanguage, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dentsis-surface/95 backdrop-blur-sm border-b border-dentsis-border">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-dentsis-primary to-dentsis-secondary rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.25c-2.63 0-4.83.86-6.37 2.44C4.01 6.27 3.25 8.5 3.25 11c0 2.3.5 4.69 1.5 7.1.8 1.96 1.78 3.55 2.95 4.77 1.11 1.16 2.1 1.67 2.98 1.51.95-.17 1.55-1.15 1.87-2.08.27-.79.4-1.7.5-2.42.09-.64.15-1.08.28-1.39.19-.46.49-.66.92-.66s.73.2.92.66c.13.31.19.75.28 1.39.1.72.23 1.63.5 2.42.32.93.92 1.91 1.87 2.08.88.16 1.87-.35 2.98-1.51 1.17-1.22 2.15-2.81 2.95-4.77 1-2.41 1.5-4.8 1.5-7.1 0-2.5-.76-4.73-2.38-6.31C16.83 3.11 14.63 2.25 12 2.25Z" />
              </svg>
            </div>

            <span className="text-2xl font-bold text-dentsis-text">Dentsis</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
              {t.features}
            </a>
            <a href="#pricing" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
              {t.pricing}
            </a>
            <a href="#faq" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
              {t.faq}
            </a>
            <a href="#contact" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
              {t.contact}
            </a>
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-medium text-dentsis-text-muted hover:text-dentsis-primary transition-colors border border-dentsis-border rounded-lg"
            >
              {language === 'th' ? 'EN' : 'TH'}
            </button>
            <a href="#contact" className="hidden md:block btn-primary">
              {t.requestDemo}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-dentsis-text-muted"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-dentsis-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
                {t.features}
              </a>
              <a href="#pricing" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
                {t.pricing}
              </a>
              <a href="#faq" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
                {t.faq}
              </a>
              <a href="#contact" className="text-dentsis-text-muted hover:text-dentsis-primary transition-colors">
                {t.contact}
              </a>
              <a href="#contact" className="btn-primary text-center">
                {t.requestDemo}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
