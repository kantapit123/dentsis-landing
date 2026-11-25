import type { Translations } from '../content/translations'
import { Check, SectionHead } from '../components/ui'

const toneCls: Record<string, string> = {
  blue: 'bg-blue-wash text-blue-deep',
  amber: 'bg-amber-wash text-amber-ink',
  mint: 'bg-mint-wash text-mint-ink',
}

// Decorative QR-style mark, generated (not a scannable code).
function QrMark() {
  const n = 21
  const cells: [number, number][] = []
  let seed = 7
  const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
  const finder = (x: number, y: number) => [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7)
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!finder(x, y) && rnd() > 0.52) cells.push([x, y])
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className="h-[72px] w-[72px]" aria-hidden="true">
      <rect x="-1" y="-1" width={n + 2} height={n + 2} fill="#FFFFFF" />
      {[[0, 0], [n - 7, 0], [0, n - 7]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="7" height="7" fill="#0C2330" />
          <rect x={x + 1} y={y + 1} width="5" height="5" fill="#FFFFFF" />
          <rect x={x + 2} y={y + 2} width="3" height="3" fill="#0C2330" />
        </g>
      ))}
      {cells.map(([x, y]) => (
        <rect key={`${x}.${y}`} x={x} y={y} width="1" height="1" fill="#0C2330" />
      ))}
    </svg>
  )
}

export default function RoomStock({ t }: { t: Translations['stock'] }) {
  return (
    <section id="stock" className="border-b border-rule">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-20 lg:py-28">
        <div className="order-2 rounded-[20px] border border-rule bg-card lg:order-1">
          <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-4">
            <div>
              <p className="font-display text-[19px] font-semibold">{t.room}</p>
              <p className="mt-0.5 font-mono text-[11.5px] uppercase tracking-wider th-label text-ink-2">{t.scan}</p>
            </div>
            <div className="rounded-lg border border-rule p-1">
              <QrMark />
            </div>
          </div>
          <ul>
            {t.items.map((it) => (
              <li key={it.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-rule-soft px-5 py-3.5 last:border-0">
                <span className="text-[15px] font-medium">{it.name}</span>
                <span className={`num justify-self-end rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${toneCls[it.tone]}`}>{it.tag}</span>
                <span className="num col-span-2 text-[13px] text-ink-2">{it.meta}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHead eyebrow={t.eyebrow} title={t.title} lede={t.lede} />
          <ul className="flex flex-col gap-3">
            {t.points.map((p) => (
              <li key={p} className="flex gap-3 text-[15.5px] leading-[1.65]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-mint-ink" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
