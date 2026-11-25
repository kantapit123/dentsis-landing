import type { Translations } from '../content/translations'
import { SectionHead } from '../components/ui'

const roleTone: Record<string, string> = {
  staff: 'bg-mint-wash text-mint-ink',
  front: 'bg-blue-wash text-blue-deep',
  assistant: 'bg-amber-wash text-amber-ink',
  doctor: 'bg-blue-wash text-blue-deep',
  owner: 'bg-ink text-white',
}

export default function ClinicDay({ t }: { t: Translations['day'] }) {
  return (
    <section id="day" className="border-t border-rule bg-card">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow={t.eyebrow} title={t.title} lede={t.lede} />
          <p className="mt-8 hidden font-mono text-[13px] text-ink-2 lg:block">
            <span className="num">08:30</span> <span aria-hidden="true">→</span> <span className="num">21:30</span>
          </p>
        </div>

        <ol className="relative flex flex-col">
          <span className="absolute bottom-6 left-[71px] top-6 w-px bg-rule sm:left-[87px]" aria-hidden="true" />
          {t.steps.map((s) => (
            <li key={s.time} className="relative grid grid-cols-[64px_16px_minmax(0,1fr)] gap-x-4 py-6 sm:grid-cols-[80px_16px_minmax(0,1fr)]">
              <time className="num pt-0.5 text-right font-mono text-[17px] font-medium text-ink sm:text-[19px]">{s.time}</time>
              <span className="relative z-10 mt-2 h-3.5 w-3.5 rounded-full border-[3px] border-card bg-blue ring-1 ring-rule" aria-hidden="true" />
              <div className="flex flex-col gap-2 border-b border-rule-soft pb-6">
                <span className={`w-fit rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${roleTone[s.role]}`}>{t.roles[s.role as keyof typeof t.roles]}</span>
                <h3 className="font-display text-[21px] font-semibold leading-snug">{s.title}</h3>
                <p className="max-w-[34rem] text-[15.5px] leading-[1.75] text-ink-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
