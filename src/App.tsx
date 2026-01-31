import { useState } from 'react'
import { Language, translations } from './content/translations'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Trust from './sections/Trust'
import Modules from './sections/Modules'
import Workflow from './sections/Workflow'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [language, setLanguage] = useState<Language>('th')
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'th' ? 'en' : 'th'))
  }

  return (
    <div className="min-h-screen">
      <Header language={language} toggleLanguage={toggleLanguage} t={t.header} />
      <Hero t={t.hero} />
      <Trust t={t.trust} />
      <Modules t={t.modules} />
      <Workflow t={t.workflow} />
      {/* <Testimonials t={t.testimonials} /> */}
      <Pricing t={t.pricing} />
      <FAQ t={t.faq} />
      <Contact t={t.contact} />
      <Footer t={t.footer} />
    </div>
  )
}

export default App
