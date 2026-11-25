import type { ReactNode } from 'react'

export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <path
        d="M128 28c-23.5 0-43.2 7.7-57.1 21.9C56.2 64.1 50 83.9 50 106.3c0 20.6 4.5 42.1 13.5 64.3 7.2 17.7 16.1 32 26.7 42.8 10.1 10.2 18.9 14.6 26.4 13.2 8.4-1.6 13.4-10.5 16.1-18.8 2.4-7.2 3.5-15.5 4.3-22.1.8-6.1 1.3-10 2.5-12.9 1.7-4.2 4.2-6 8-6s6.3 1.8 8 6c1.2 2.9 1.7 6.8 2.5 12.9.8 6.6 1.9 14.9 4.3 22.1 2.7 8.3 7.7 17.2 16.1 18.8 7.5 1.4 16.3-3 26.4-13.2 10.6-10.8 19.5-25.1 26.7-42.8 9-22.2 13.5-43.7 13.5-64.3 0-22.4-6.2-42.2-20.9-56.4C171.2 35.7 151.5 28 128 28z"
        fill="#2F6FED"
      />
      <path d="M190 34c1.6 9.6 6.4 14.4 16 16-9.6 1.6-14.4 6.4-16 16-1.6-9.6-6.4-14.4-16-16 9.6-1.6 14.4-6.4 16-16z" fill="#35D0BA" />
      <path d="M80 78c12-13.6 28.7-21 48-21" fill="none" stroke="#7BCBFF" strokeWidth="10" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

export function Check({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SectionHead({ eyebrow, title, lede, dark = false }: { eyebrow: string; title: string; lede?: ReactNode; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <p className={`eyebrow ${dark ? '!text-mint' : ''}`}>{eyebrow}</p>
      <h2 className={`h2 ${dark ? '!text-white' : ''}`}>{title}</h2>
      {lede && <p className={`lede ${dark ? '!text-[#A9C0CC]' : ''}`}>{lede}</p>}
    </div>
  )
}

