import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Link, Camera, Globe } from 'lucide-react'
import { contact } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const subjects = [
  'General Inquiry',
  'Sales',
  'Service & Support',
  'Installation',
  'Partnership',
  'Other',
]

const socialLinks = [
  { label: 'LinkedIn', href: contact.social.linkedin, icon: Globe },
  { label: 'Facebook', href: contact.social.facebook, icon: Link },
  { label: 'Instagram', href: contact.social.instagram, icon: Camera },
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionWrapper id="contact" bgColor="bg-elvitra-pearl">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
            Get in{' '}
            <span className="text-elvitra-pink-dark">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 font-serif text-2xl font-semibold text-elvitra-dark">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-elvitra-dark">
                      Our Address
                    </p>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-elvitra-text">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                      <br />
                      {contact.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-elvitra-dark">
                      Phone Numbers
                    </p>
                    <div className="mt-1 space-y-0.5">
                      {contact.phone.map((p) => (
                        <p
                          key={p.number}
                          className="font-sans text-sm text-elvitra-text"
                        >
                          {p.number}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-elvitra-dark">
                      Email Addresses
                    </p>
                    <div className="mt-1 space-y-0.5">
                      {contact.email.map((e) => (
                        <p
                          key={e.address}
                          className="font-sans text-sm text-elvitra-text"
                        >
                          {e.address}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-elvitra-dark">
                      Business Hours
                    </p>
                    <p className="mt-1 font-sans text-sm text-elvitra-text">
                      {contact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-elvitra-dark">
                Follow Us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-elvitra-silver/60 bg-elvitra-white text-elvitra-text-light transition-colors duration-300 hover:border-elvitra-pink-dark hover:bg-elvitra-pink-dark/10 hover:text-elvitra-pink-dark"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          {submitted ? (
            <div className="flex h-full items-center justify-center rounded-lg border border-elvitra-pink-dark/20 bg-elvitra-white p-12 text-center">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-elvitra-pink-dark/10">
                  <Send className="h-8 w-8 text-elvitra-pink-dark" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-elvitra-dark">
                  Thank You!
                </h3>
                <p className="mt-2 font-sans text-sm text-elvitra-text">
                  Your message has been received. Our team will get back to you
                  shortly.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-elvitra-silver/50 bg-elvitra-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <h3 className="mb-6 font-serif text-2xl font-semibold text-elvitra-dark">
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text"
                    >
                      Email
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

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-elvitra-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-elvitra-silver/60 bg-elvitra-pearl/50 px-4 py-2.5 font-sans text-sm text-elvitra-dark outline-none transition-colors duration-300 focus:border-elvitra-pink-dark focus:ring-2 focus:ring-elvitra-pink-dark/20"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-elvitra-pink-dark px-8 py-3 font-sans text-sm font-bold uppercase tracking-wider text-elvitra-dark transition-colors duration-300 hover:bg-elvitra-pink-light"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
