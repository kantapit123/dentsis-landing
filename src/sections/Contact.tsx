import { useState, type FormEvent } from 'react'
import type { Translations } from '../content/translations'
import { Arrow, Check, SectionHead } from '../components/ui'

type Field = 'name' | 'phone' | 'email' | 'clinic' | 'dentists' | 'message'
const DENTISTS = ['1', '2-3', '4-6', '7+']

export default function Contact({ t }: { t: Translations['contact'] }) {
  const f = t.form
  const empty: Record<Field, string> = { name: '', phone: '', email: '', clinic: '', dentists: '', message: '' }
  const [data, setData] = useState(empty)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const set = (k: Field) => (e: { target: { value: string } }) => {
    setData((d) => ({ ...d, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const errs: Partial<Record<Field, string>> = {}
    for (const k of ['name', 'phone', 'clinic'] as const) if (!data[k].trim()) errs[k] = f.required
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = f.badEmail
    setErrors(errs)
    if (Object.keys(errs).length) return
    setState('sending')
    // TODO: send to a real endpoint. Submission is simulated, same as the previous page.
    await new Promise((r) => setTimeout(r, 900))
    setState('sent')
  }

  const input = (k: Field) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-[15px] outline-none transition-colors focus:border-blue focus:ring-2 focus:ring-blue/20 ${errors[k] ? 'border-amber' : 'border-rule'}`

  const label = (k: Field, text: string, required = false, type = 'text') => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={`c-${k}`} className="text-[13.5px] font-semibold">
        {text}
        {required && <span className="text-amber-ink"> *</span>}
      </label>
      <input id={`c-${k}`} name={k} type={type} value={data[k]} onChange={set(k)} className={input(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `c-${k}-err` : undefined} />
      {errors[k] && (
        <span id={`c-${k}-err`} className="text-[12.5px] text-amber-ink">
          {errors[k]}
        </span>
      )}
    </div>
  )

  return (
    <section id="contact" className="border-t border-rule">
      <div className="wrap grid gap-12 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:py-28">
        <div className="flex flex-col gap-10">
          <SectionHead eyebrow={t.eyebrow} title={t.title} lede={t.lede} />
          <ol className="flex flex-col gap-4">
            {t.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-4 text-[15.5px]">
                <span className="num grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink font-mono text-[13px] font-medium">{i + 1}</span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-[20px] border border-rule bg-card p-6 sm:p-8">
          {state === 'sent' ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center" role="status">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-mint-wash text-mint-ink">
                <Check className="h-7 w-7" />
              </span>
              <p className="font-display text-[24px] font-semibold">{f.success}</p>
              <p className="text-ink-2">{f.successBody}</p>
              <button
                type="button"
                className="btn-ghost mt-2"
                onClick={() => {
                  setData(empty)
                  setState('idle')
                }}
              >
                {f.again}
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
              {label('name', f.name, true)}
              {label('phone', f.phone, true, 'tel')}
              {label('clinic', f.clinic, true)}
              {label('email', f.email, false, 'email')}
              <fieldset className="flex flex-col gap-2 sm:col-span-2">
                <legend className="mb-1.5 text-[13.5px] font-semibold">{f.dentists}</legend>
                <div className="flex flex-wrap gap-2">
                  {DENTISTS.map((d) => (
                    <label key={d} className={`num cursor-pointer rounded-full border px-4 py-2 font-mono text-[14px] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue ${data.dentists === d ? 'border-ink bg-ink text-white' : 'border-rule bg-card hover:border-ink'}`}>
                      <input type="radio" id={`c-dentists-${d}`} name="dentists" value={d} checked={data.dentists === d} onChange={set('dentists')} className="sr-only" />
                      {d}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="c-message" className="text-[13.5px] font-semibold">
                  {f.message}
                </label>
                <textarea id="c-message" rows={3} value={data.message} onChange={set('message')} className={`${input('message')} resize-y`} />
              </div>
              <button type="submit" disabled={state === 'sending'} className="btn-primary disabled:opacity-60 sm:col-span-2">
                {state === 'sending' ? f.submitting : f.submit}
                {state !== 'sending' && <Arrow />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
