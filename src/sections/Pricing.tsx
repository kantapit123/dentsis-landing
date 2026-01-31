import { Translations } from '../content/translations'

interface PricingProps {
  t: Translations['pricing']
}

export default function Pricing({ t }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-dentsis-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`card ${
                index === 1
                  ? 'border-2 border-dentsis-primary shadow-xl scale-105 relative'
                  : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dentsis-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-dentsis-text mb-2">{plan.name}</h3>
                <p className="text-dentsis-text-muted text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-dentsis-primary">{plan.price}</span>
                  {plan.price !== t.contactSales && (
                    <span className="text-dentsis-text-muted ml-1">{t.perMonth}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-dentsis-accent mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dentsis-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center ${
                  index === 1 ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.price === t.contactSales ? t.contactSales : t.getStarted}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
