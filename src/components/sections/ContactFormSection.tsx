import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

interface FormData {
  fullName: string
  companyName: string
  phone: string
  email: string
  serviceInterested: string
  elevatorType: string
  city: string
  message: string
  preferredContact: string
}

const servicesList = [
  'New Installation',
  'Modernization',
  'Maintenance / AMC',
  'Technical Consultation',
  'Quotation',
  'Other',
]

const elevatorTypesList = [
  'Passenger Elevator',
  'Hospital Elevator',
  'Goods Elevator',
  'Dumbwaiter',
  'Home Elevator',
  'Capsule Elevator',
  'Not Sure',
]

const contactMethods = ['Phone', 'Email', 'WhatsApp']

export default function ContactFormSection() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceInterested: '',
    elevatorType: '',
    city: '',
    message: '',
    preferredContact: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    
    const text = `*New Detailed Inquiry*
*Name:* ${form.fullName}
*Company:* ${form.companyName || 'N/A'}
*Phone:* ${form.phone}
*Email:* ${form.email}
*Service:* ${form.serviceInterested}
*Elevator Type:* ${form.elevatorType || 'N/A'}
*City/Location:* ${form.city}
*Preferred Contact:* ${form.preferredContact || 'N/A'}
*Message:* ${form.message}`

    const whatsappUrl = `https://wa.me/919313161636?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
    
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact-form" bgColor="bg-elvitra-white">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
              Send us an <span className="text-elvitra-pink-dark">Inquiry</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
            <p className="mt-6 font-sans text-sm text-elvitra-text">
              Please fill out the form below and we will get back to you shortly.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-elvitra-pink-dark/20 bg-elvitra-white p-12 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-elvitra-pink-dark/10">
                <Send className="h-10 w-10 text-elvitra-pink-dark" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-elvitra-dark">
                Inquiry Received!
              </h3>
              <p className="mt-2 font-sans text-sm text-elvitra-text">
                Thank you for contacting Elvitra Elevators. Our team will review your requirements and reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-elvitra-silver/50 bg-elvitra-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:p-12"
            >
              <div className="space-y-6">
                
                {/* Row 1 */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Company Name (Optional)
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="serviceInterested" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Service Interested In *
                    </label>
                    <select
                      id="serviceInterested"
                      name="serviceInterested"
                      required
                      value={form.serviceInterested}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    >
                      <option value="" disabled>Select a service</option>
                      {servicesList.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="elevatorType" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Elevator Type
                    </label>
                    <select
                      id="elevatorType"
                      name="elevatorType"
                      value={form.elevatorType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    >
                      <option value="" disabled>Select elevator type</option>
                      {elevatorTypesList.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      City / Location *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredContact" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={form.preferredContact}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    >
                      <option value="" disabled>Select preferred method</option>
                      {contactMethods.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 5 */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text">
                    Message / Additional Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-elvitra-pink-dark px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-elvitra-dark transition-colors duration-300 hover:bg-elvitra-pink-light"
                  >
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </button>
                </div>

              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
