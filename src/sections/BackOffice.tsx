import type { Translations } from '../content/translations'
import { SectionHead } from '../components/ui'

export default function BackOffice({ t }: { t: Translations['more'] }) {
  return (
    <section className="bg-card">
      <div className="wrap flex flex-col gap-12 py-20 lg:py-24">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it) => (
            <div key={it.title} className="flex flex-col gap-2 border-t-2 border-ink pt-4">
              <dt className="font-display text-[19px] font-semibold">{it.title}</dt>
              <dd className="text-[15px] leading-[1.7] text-ink-2">{it.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
