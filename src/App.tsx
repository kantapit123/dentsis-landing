import { useEffect, useState } from 'react'
import { type Language, translations } from './content/translations'
import Header from './sections/Header'
import Hero from './sections/Hero'
import ClinicDay from './sections/ClinicDay'
import DoctorFees from './sections/DoctorFees'
import StaffLine from './sections/StaffLine'
import RoomStock from './sections/RoomStock'
import BackOffice from './sections/BackOffice'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [language, setLanguage] = useState<Language>('th')
  const t = translations[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen">
      <Header language={language} setLanguage={setLanguage} t={t.nav} />
      <main>
        <Hero t={t.hero} board={t.board} />
        <ClinicDay t={t.day} />
        <DoctorFees t={t.df} />
        <StaffLine t={t.staff} />
        <RoomStock t={t.stock} />
        <BackOffice t={t.more} />
        <Pricing t={t.pricing} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} nav={t.nav} />
    </div>
  )
}
