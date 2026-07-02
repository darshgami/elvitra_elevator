import ContactHero from '../components/sections/ContactHero'
import ContactInfoCards from '../components/sections/ContactInfoCards'
import ContactFormSection from '../components/sections/ContactFormSection'
import WhyChooseUsContact from '../components/sections/WhyChooseUsContact'
import ServiceCoverage from '../components/sections/ServiceCoverage'
import ContactFAQ from '../components/sections/ContactFAQ'
import ContactCTA from '../components/sections/ContactCTA'
import { useSEO } from '../hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | Elvitra Elevators',
    description: 'Get in touch with Elvitra Elevators for premium elevator solutions, installations, and 24/7 support. Request a quote today.',
    canonicalUrl: 'https://www.elvitra.com/contact'
  })

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
