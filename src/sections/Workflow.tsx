import { Translations } from '../content/translations'

interface WorkflowProps {
  t: Translations['workflow']
}

export default function Workflow({ t }: WorkflowProps) {
  return (
    <section className="py-20 bg-dentsis-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-dentsis-border">
              <div className="absolute inset-0 bg-gradient-to-r from-dentsis-primary via-dentsis-secondary to-dentsis-accent"></div>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-4 gap-8 relative">
              {t.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-dentsis-surface border-4 border-dentsis-primary mb-4 shadow-lg">
                    <span className="text-3xl font-bold text-dentsis-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-dentsis-text mb-2">{step.title}</h3>
                  <p className="text-dentsis-text-muted text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
