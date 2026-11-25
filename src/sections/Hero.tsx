import type { Translations } from '../content/translations'
import { Arrow, Check } from '../components/ui'

const ROW = 44 // px per 30 minutes
const START = 9 * 60
const SLOTS = 8 // 09:00 – 13:00
const NOW = 10 * 60 + 40

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}
const y = (min: number) => ((min - START) / 30) * ROW

const tone = {
  arrived: { box: 'bg-blue-wash border-blue/25', dot: 'bg-blue' },
  confirmed: { box: 'bg-mint-wash border-mint/40', dot: 'bg-mint-ink' },
  pending: { box: 'bg-card border-amber border-dashed', dot: 'bg-amber' },
} as const

function AppointmentBoard({ t }: { t: Translations['board'] }) {
  const times = Array.from({ length: SLOTS }, (_, i) => {
    const m = START + i * 30
    return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
  })

  return (
    <figure className="relative rounded-[20px] border border-rule bg-card shadow-[0_30px_60px_-30px_rgba(12,35,48,0.35)]" aria-label={`${t.sample}: ${t.date}`}>
      <div className="flex items-center justify-between gap-3 border-b border-rule px-4 py-3 sm:px-5">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-[17px] font-semibold">{t.date}</span>
          <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider th-label text-ink-2">{t.sample}</span>
        </div>
        <div className="hidden gap-3 text-[12px] text-ink-2 sm:flex">
          {(['arrived', 'confirmed', 'pending'] as const).map((s) => (
            <span key={s} className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${tone[s].dot}`} />
              {t.status[s]}
            </span>
          ))}
        </div>
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-rule bg-paper/60 px-4 py-2.5 text-[13px] sm:px-5">
        <span className="font-semibold">
          {t.tomorrow} · <span className="num">{t.tomorrowCount}</span>
        </span>
        <span className="flex items-center gap-1 text-mint-ink">
          <Check className="h-3.5 w-3.5" />
          <span className="num">{t.confirmedCount}</span>
        </span>
        <span className="num text-amber-ink">{t.pendingCount}</span>
      </figcaption>
      <div className="grid grid-cols-[44px_repeat(3,minmax(0,1fr))] border-b border-rule sm:grid-cols-[56px_repeat(3,minmax(0,1fr))]">
        <div className="th-label px-2 py-2 font-mono text-[11px] !text-[12px] !font-medium text-ink-2">{t.time}</div>
        {t.doctors.map((d) => (
          <div key={d} className="border-l border-rule-soft px-2 py-2 text-[13px] font-semibold sm:px-3">
            {d}
          </div>
        ))}
      </div>

      <div className="relative grid grid-cols-[44px_repeat(3,minmax(0,1fr))] sm:grid-cols-[56px_repeat(3,minmax(0,1fr))]" style={{ height: SLOTS * ROW }}>
        <div className="relative">
          {times.map((tm, i) =>
            Math.abs(i * ROW + 4 - (y(NOW) - 8)) < 20 ? null : (
            <span key={tm} className="num absolute left-2 font-mono text-[11px] text-ink-2" style={{ top: i * ROW + 4 }}>
              {tm}
            </span>
          ))}
        </div>
        {t.doctors.map((d, col) => (
          <div key={d} className="ruled relative border-l border-rule-soft">
            {t.appts
              .filter((a) => a.doc === col)
              .map((a, i) => {
                const s = toMin(a.start)
                const h = y(toMin(a.end)) - y(s) - 4
                const st = tone[a.status as keyof typeof tone]
                return (
                  <div
                    key={a.start}
                    className={`settle absolute inset-x-1 overflow-hidden rounded-[10px] border px-2 py-1.5 sm:inset-x-1.5 sm:px-2.5 ${st.box}`}
                    style={{ top: y(s) + 2, height: h, animationDelay: `${120 + col * 90 + i * 70}ms` }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${st.dot}`} />
                      <span className="truncate text-[12.5px] font-semibold leading-tight">{a.who}</span>
                    </div>
                    {h > 36 && <p className="mt-0.5 line-clamp-2 text-[11.5px] leading-snug text-ink-2">{a.what}</p>}
                  </div>
                )
              })}
          </div>
        ))}

        {/* now line */}
        <div className="pointer-events-none absolute left-0 right-0 flex items-center" style={{ top: y(NOW) }} aria-hidden="true">
          <span className="num ml-0.5 rounded bg-blue px-1 font-mono text-[10.5px] font-medium leading-[16px] text-white">10:40</span>
          <span className="now-dot -ml-px h-2 w-2 rounded-full bg-blue" />
          <span className="h-px flex-1 bg-blue" />
        </div>
      </div>

    </figure>
  )
}

function LineToast({ t }: { t: Translations['board']['toast'] }) {
  return (
    <div className="settle flex max-w-[320px] gap-3 rounded-2xl border border-rule bg-card p-3.5 shadow-[0_18px_40px_-18px_rgba(12,35,48,0.45)]" style={{ animationDelay: '900ms' }}>
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-chat text-[11px] font-bold text-white" aria-hidden="true">
        HR
      </span>
      <div className="min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-[13px] font-semibold">{t.from}</span>
          <span className="num font-mono text-[11px] text-ink-2">{t.at}</span>
        </div>
        <p className="text-[13px] leading-snug text-ink-2">{t.body}</p>
      </div>
    </div>
  )
}

export default function Hero({ t, board }: { t: Translations['hero']; board: Translations['board'] }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14 lg:pb-24 lg:pt-16">
        <div className="flex flex-col gap-7">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            {t.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.4rem,4.9vw,3.9rem)] font-bold leading-[1.22] tracking-[-0.015em]">
            <span className="block">{t.titleA}</span>
            <span className="block text-blue">{t.titleB}</span>
          </h1>
          <p className="lede !text-[18px]">{t.lede}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              {t.ctaPrimary}
              <Arrow />
            </a>
            <a href="#day" className="btn-ghost">
              {t.ctaSecondary}
            </a>
          </div>
          <ul className="flex flex-col gap-2 border-t border-rule pt-6 text-[14.5px] text-ink-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {t.facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-mint-ink" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:pb-14">
          <AppointmentBoard t={board} />
          <div className="mt-4 lg:absolute lg:-bottom-2 lg:-left-10 lg:mt-0">
            <LineToast t={board.toast} />
          </div>
        </div>
      </div>
    </section>
  )
}
