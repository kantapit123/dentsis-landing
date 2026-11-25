import type { Translations } from '../content/translations'
import { Logo } from '../components/ui'

export default function Footer({ t, nav }: { t: Translations['footer']; nav: Translations['nav'] }) {
  const links = [
    { href: '#day', label: nav.day },
    { href: '#df', label: nav.df },
    { href: '#staff', label: nav.staff },
    { href: '#pricing', label: nav.pricing },
    { href: '#faq', label: nav.faq },
    { href: '#contact', label: nav.cta },
  ]
  return (
    <footer className="bg-night text-[#A9C0CC]">
      <div className="wrap flex flex-col gap-8 py-12" style={{ paddingBottom: 'max(48px, env(safe-area-inset-bottom, 0px))' }}>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div>
              <p className="font-display text-[20px] font-bold leading-none text-white">Dentsis</p>
              <p className="mt-1 text-[13.5px]">{t.tagline}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]" aria-label="Footer">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between border-t border-night-rule pt-6 text-[13px]">
          <span>{t.rights}</span>
          <a href="#top" className="hover:text-white">
            {t.top} ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
