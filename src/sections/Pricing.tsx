import type { Translations } from '../content/translations'
import { Check, SectionHead } from '../components/ui'

export default function Pricing({ t }: { t: Translations['pricing'] }) {
  return (
    <section id="pricing" className="border-t border-rule">
      <div className="wrap flex flex-col gap-12 py-20 lg:py-28">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
          {t.plans.map((p, i) => {
            const hot = i === 1
            return (
              <article
                key={p.name}
                className={`flex flex-col gap-6 rounded-[20px] p-7 ${hot ? 'bg-ink text-white shadow-[0_30px_60px_-30px_rgba(12,35,48,0.6)]' : 'border border-rule bg-card'}`}
              >
                <header className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[22px] font-semibold">{p.name}</h3>
                    {hot && <span className="rounded-full bg-mint px-2.5 py-0.5 text-[12px] font-semibold text-ink">{t.popular}</span>}
                  </div>
                  <p className={`text-[14.5px] ${hot ? 'text-[#A9C0CC]' : 'text-ink-2'}`}>{p.desc}</p>
                </header>
                <p className="flex items-baseline gap-2">
                  {p.price ? (
                    <>
                      <span className="num font-display text-[44px] font-bold leading-none tracking-tight">{p.price}</span>
                      <span className={`text-[14px] ${hot ? 'text-[#A9C0CC]' : 'text-ink-2'}`}>{t.perMonth}</span>
                    </>
                  ) : (
                    <span className="font-display text-[30px] font-bold leading-[44px]">{t.custom}</span>
                  )}
                </p>
                <a href="#contact" className={hot ? 'btn bg-blue text-white hover:bg-white hover:text-ink' : 'btn-ghost'}>
                  {p.price ? t.cta : t.ctaSales}
                </a>
                <ul className={`flex flex-col gap-2.5 border-t pt-6 text-[14.5px] ${hot ? 'border-night-rule' : 'border-rule'}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className={`mt-1 h-4 w-4 shrink-0 ${hot ? 'text-mint' : 'text-mint-ink'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
