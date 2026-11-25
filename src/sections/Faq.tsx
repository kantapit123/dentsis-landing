import type { Translations } from '../content/translations'
import { SectionHead } from '../components/ui'

export default function Faq({ t }: { t: Translations['faq'] }) {
  return (
    <section id="faq" className="border-t border-rule bg-card">
      <div className="wrap grid gap-10 py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:py-28">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="border-t border-rule">
          {t.items.map((it, i) => (
            <details key={it.q} className="group border-b border-rule" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[18px] font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                {it.q}
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-rule text-ink-2 transition-transform group-open:rotate-45" aria-hidden="true">
                  <svg viewBox="0 0 12 12" className="h-3 w-3">
                    <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[40rem] pb-6 text-[15.5px] leading-[1.75] text-ink-2">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
