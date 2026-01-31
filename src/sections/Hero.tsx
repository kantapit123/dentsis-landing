import { Translations } from '../content/translations'

interface HeroProps {
  t: Translations['hero']
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-dentsis-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-dentsis-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dentsis-text mb-6 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-dentsis-text-muted mb-10 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg">
              {t.ctaPrimary}
            </a>
            <a href="#contact" className="btn-secondary text-lg">
              {t.ctaSecondary}
            </a>
          </div>

          {/* Hero image placeholder */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-dentsis-surface to-dentsis-background rounded-2xl shadow-2xl border border-dentsis-border p-8 md:p-12">
              <div className="aspect-video bg-gradient-to-br from-dentsis-primary/5 to-dentsis-accent/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/dashboard-preview.png" alt="Dashboard Preview" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
