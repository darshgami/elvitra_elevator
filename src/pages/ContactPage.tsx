import ContactHero from '../components/sections/ContactHero'
import ContactInfoCards from '../components/sections/ContactInfoCards'
import ContactFormSection from '../components/sections/ContactFormSection'
import WhyChooseUsContact from '../components/sections/WhyChooseUsContact'
import ServiceCoverage from '../components/sections/ServiceCoverage'
import ContactFAQ from '../components/sections/ContactFAQ'
import ContactCTA from '../components/sections/ContactCTA'

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <WhyChooseUsContact />
      <ServiceCoverage />
      <ContactFAQ />
      <ContactCTA />
    </main>
  )
}
