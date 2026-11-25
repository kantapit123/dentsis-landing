import type { Translations } from '../content/translations'
import { SectionHead } from '../components/ui'

function Phone({ t }: { t: Translations['staff']['phone'] }) {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[40px] border border-night-rule bg-night-2 p-2.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
      <div className="overflow-hidden rounded-[32px] bg-[#DCE7EC]">
        <div className="flex items-center gap-2.5 bg-card px-4 pb-3 pt-5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-chat text-[10px] font-bold text-white" aria-hidden="true">
            HR
          </span>
          <span className="text-[14px] font-semibold text-ink">{t.name}</span>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4">
          <span className="mx-auto rounded-full bg-[#C4D3DA] px-2.5 py-0.5 text-[11px] text-ink-2">{t.today}</span>
          {t.msgs.map((m) => (
            <div key={m.at} className="flex items-end gap-1.5">
              <p className="max-w-[82%] rounded-2xl rounded-tl-md bg-card px-3 py-2 text-[13px] leading-snug text-ink">{m.text}</p>
              <span className="num pb-0.5 font-mono text-[10px] text-ink-2">{m.at}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 border-t border-[#C4D3DA] bg-card">
          {t.menu.map((label, i) => (
            <span
              key={label}
              className={`flex h-14 items-center justify-center px-1 text-center text-[12px] font-semibold leading-tight ${i === 0 ? 'bg-chat text-white' : 'text-ink'} ${i % 3 !== 0 ? 'border-l border-rule-soft' : ''} ${i >= 3 ? 'border-t border-rule-soft' : ''}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function StaffLine({ t }: { t: Translations['staff'] }) {
  return (
    <section id="staff" className="bg-night text-white">
      <div className="wrap grid gap-14 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20 lg:py-28">
        <div className="flex flex-col gap-10">
          <SectionHead eyebrow={t.eyebrow} title={t.title} lede={t.lede} dark />
          <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {t.items.map((it) => (
              <div key={it.title} className="flex flex-col gap-1.5 border-t border-night-rule pt-4">
                <dt className="font-display text-[18px] font-semibold">{it.title}</dt>
                <dd className="text-[15px] leading-[1.7] text-[#A9C0CC]">{it.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Phone t={t.phone} />
      </div>
    </section>
  )
}
