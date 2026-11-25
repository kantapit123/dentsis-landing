import { useMemo, useState } from 'react'
import type { Translations } from '../content/translations'
import { SectionHead } from '../components/ui'
import { baht } from '../components/format'

const GUARANTEES = [3000, 4000, 5000]

export default function DoctorFees({ t }: { t: Translations['df'] }) {
  const [rate, setRate] = useState(40)
  const [base, setBase] = useState<'fee' | 'total'>('fee')
  const [guarantee, setGuarantee] = useState(4000)

  const r = useMemo(() => {
    const baseSum = t.cases.reduce((s, c) => s + c.fee + (base === 'total' ? c.med : 0), 0)
    const df = Math.round((baseSum * rate) / 100)
    const topUp = Math.max(0, guarantee - df)
    const payout = df + topUp
    const scale = Math.max(payout, guarantee)
    return { baseSum, df, topUp, payout, dfPct: (df / scale) * 100, topPct: (topUp / scale) * 100, gPct: (guarantee / scale) * 100 }
  }, [t.cases, base, rate, guarantee])

  const seg = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-[13.5px] font-semibold transition-colors ${active ? 'bg-ink text-white' : 'text-ink-2 hover:text-ink'}`

  return (
    <section id="df" className="border-t border-rule">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20 lg:py-28">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lede={t.lede} />

        <div className="rounded-[20px] border border-rule bg-card">
          <div className="flex items-center justify-between border-b border-rule px-5 py-3.5">
            <span className="font-display text-[16px] font-semibold">{t.caseTitle}</span>
            <span className="rounded-full bg-blue-wash px-2.5 py-0.5 text-[12px] font-semibold text-blue-deep">{t.try}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="num w-full text-[14px]">
              <thead>
                <tr className="text-left font-mono text-[11.5px] uppercase tracking-wider th-label text-ink-2">
                  <th className="px-5 py-2.5 font-medium">{t.colCase}</th>
                  <th className="px-3 py-2.5 text-right font-medium">{t.colFee}</th>
                  <th className={`px-5 py-2.5 text-right font-medium transition-opacity ${base === 'fee' ? 'opacity-45' : ''}`}>{t.colMed}</th>
                </tr>
              </thead>
              <tbody>
                {t.cases.map((c) => (
                  <tr key={c.name} className="border-t border-rule-soft">
                    <td className="px-5 py-2.5">{c.name}</td>
                    <td className="px-3 py-2.5 text-right font-mono">{baht(c.fee)}</td>
                    <td className={`px-5 py-2.5 text-right font-mono transition-opacity ${base === 'fee' ? 'opacity-45' : ''}`}>{c.med ? baht(c.med) : '–'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-5 border-t border-rule bg-paper/60 px-5 py-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <label htmlFor="df-rate" className="text-[14px] font-semibold">
                {t.rate}
              </label>
              <div className="flex flex-1 items-center gap-3 sm:max-w-[300px]">
                <input
                  id="df-rate"
                  type="range"
                  min={20}
                  max={60}
                  step={5}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-[#2F6FED]"
                />
                <output htmlFor="df-rate" className="num w-12 text-right font-mono text-[15px] font-medium">
                  {rate}%
                </output>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[14px] font-semibold" id="df-base-label">
                {t.base}
              </span>
              <div className="flex rounded-full border border-rule bg-card p-0.5" role="group" aria-labelledby="df-base-label">
                <button type="button" className={seg(base === 'fee')} aria-pressed={base === 'fee'} onClick={() => setBase('fee')}>
                  {t.baseFee}
                </button>
                <button type="button" className={seg(base === 'total')} aria-pressed={base === 'total'} onClick={() => setBase('total')}>
                  {t.baseTotal}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[14px] font-semibold" id="df-g-label">
                {t.guarantee}
              </span>
              <div className="flex rounded-full border border-rule bg-card p-0.5" role="group" aria-labelledby="df-g-label">
                {GUARANTEES.map((g) => (
                  <button key={g} type="button" className={`${seg(guarantee === g)} num font-mono`} aria-pressed={guarantee === g} onClick={() => setGuarantee(g)}>
                    {baht(g)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-rule px-5 py-5" aria-live="polite">
            {/* bar drawn to one scale: DF + top-up = payout; tick = guarantee */}
            <div className="relative h-3 rounded-full bg-rule-soft">
              <div className="absolute inset-y-0 left-0 rounded-l-full bg-blue transition-[width] duration-300" style={{ width: `${r.dfPct}%` }} />
              <div
                className="absolute inset-y-0 rounded-r-full bg-mint transition-all duration-300"
                style={{ left: `${r.dfPct}%`, width: `${r.topPct}%`, backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 4px, rgba(255,255,255,.45) 4px 7px)' }}
              />
              <div className="absolute -bottom-1.5 -top-1.5 w-0.5 rounded bg-ink transition-[left] duration-300" style={{ left: `calc(${r.gPct}% - 1px)` }} />
            </div>

            <dl className="num mt-5 grid grid-cols-3 gap-3">
              <div>
                <dt className="flex items-center gap-1.5 text-[12.5px] text-ink-2">
                  <span className="h-2 w-2 rounded-sm bg-blue" />
                  {t.dfTotal}
                </dt>
                <dd className="font-mono text-[17px] font-medium sm:text-[19px]">{baht(r.df)}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-[12.5px] text-ink-2">
                  <span className="h-2 w-2 rounded-sm bg-mint" />
                  {t.topUp}
                </dt>
                <dd className="font-mono text-[17px] font-medium sm:text-[19px]">{r.topUp ? baht(r.topUp) : <span className="text-[13px] font-sans text-mint-ink">{t.reached}</span>}</dd>
              </div>
              <div className="text-right">
                <dt className="text-[12.5px] text-ink-2">{t.payout}</dt>
                <dd className="font-display text-[24px] font-bold leading-tight text-ink sm:text-[28px]">
                  {t.baht}
                  {baht(r.payout)}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[12.5px] text-ink-2">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
