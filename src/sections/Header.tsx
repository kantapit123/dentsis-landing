import { useEffect, useState } from 'react'
import type { Language, Translations } from '../content/translations'
import { Logo } from '../components/ui'

interface Props {
  language: Language
  setLanguage: (l: Language) => void
  t: Translations['nav']
}

export default function Header({ language, setLanguage, t }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#day', label: t.day },
    { href: '#df', label: t.df },
    { href: '#staff', label: t.staff },
    { href: '#pricing', label: t.pricing },
    { href: '#faq', label: t.faq },
  ]

  return (
    <header
      className={`sticky z-40 border-b transition-colors ${scrolled || open ? 'border-rule bg-paper/95 backdrop-blur' : 'border-transparent bg-paper'}`}
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Dentsis">
          <Logo className="h-8 w-8" />
          <span className="font-display text-[21px] font-bold tracking-tight text-ink">Dentsis</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-rule bg-card p-0.5 font-mono text-[12px] font-medium" role="group" aria-label="Language">
            {(['th', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLanguage(l)}
                aria-pressed={language === l}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${language === l ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink'}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            {t.cta}
          </a>
          <button
            type="button"
            className="rounded-full border border-rule bg-card px-3.5 py-2 text-[14px] font-medium lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? t.close : t.menu}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" hidden={!open} className="border-t border-rule lg:hidden" aria-label="Mobile">
        <div className="wrap flex flex-col py-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-rule-soft py-3 text-[16px] font-medium last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
            {t.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}
