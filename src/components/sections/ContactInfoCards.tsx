import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { contact } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import Card from '../ui/Card'

export default function ContactInfoCards() {
  return (
    <SectionWrapper id="contact-info" bgColor="bg-elvitra-pearl">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
            How to Reach <span className="text-elvitra-pink-dark">Us</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Address Card */}
        <ScrollReveal delay={0.1} direction="up">
          <Card hoverable className="h-full flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-elvitra-dark">
              Office Address
            </h3>
            <p className="font-sans text-sm font-medium text-elvitra-dark">
              Headquarters
            </p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-elvitra-text">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.country}
            </p>
          </Card>
        </ScrollReveal>

        {/* Phone Card */}
        <ScrollReveal delay={0.2} direction="up">
          <Card hoverable className="h-full flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-elvitra-dark">
              Phone
            </h3>
            <p className="font-sans text-sm font-medium text-elvitra-dark">
              Call us directly
            </p>
            <div className="mt-2 space-y-1">
              {contact.phone.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s/g, '')}`}
                  className="block font-sans text-sm text-elvitra-text transition-colors hover:text-elvitra-pink-dark"
                >
                  {p.number}
                </a>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* Email Card */}
        <ScrollReveal delay={0.3} direction="up">
          <Card hoverable className="h-full flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-elvitra-dark">
              Email
            </h3>
            <p className="font-sans text-sm font-medium text-elvitra-dark">
              Write to us
            </p>
            <div className="mt-2 space-y-1">
              {contact.email.map((e) => (
                <a
                  key={e.address}
                  href={`mailto:${e.address}`}
                  className="block font-sans text-sm text-elvitra-text transition-colors hover:text-elvitra-pink-dark"
                >
                  {e.address}
                </a>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* Business Hours Card */}
        <ScrollReveal delay={0.4} direction="up">
          <Card hoverable className="h-full flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-semibold text-elvitra-dark">
              Business Hours
            </h3>
            <p className="font-sans text-sm font-medium text-elvitra-dark">
              We are open
            </p>
            <p className="mt-2 font-sans text-sm text-elvitra-text">
              {contact.hours}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
