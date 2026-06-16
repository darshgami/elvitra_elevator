import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ChevronRight, Globe, Link, Camera, Play } from 'lucide-react'
import { company, contact, services } from '../../data/brochure'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const quickLinks = [
  { label: 'Home', href: 'home' },
  { label: 'Elevators', href: 'elevators' },
  { label: 'Services', href: 'services' },
  { label: 'Features', href: 'features' },
  { label: 'Safety', href: 'safety' },
  { label: 'Contact', href: 'contact' },
]

const socialIcons = [
  { icon: Globe, href: contact.social.linkedin, label: 'LinkedIn' },
  { icon: Link, href: contact.social.facebook, label: 'Facebook' },
  { icon: Camera, href: contact.social.instagram, label: 'Instagram' },
  { icon: Play, href: contact.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-elvitra-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-elvitra-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-[0.15em] text-elvitra-gold">
              {company.name.split(' ')[0]}
            </h3>
            <p className="mt-2 font-serif text-lg italic text-elvitra-gold/70">
              {company.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-elvitra-text-light">
              {company.description}
            </p>
            <div className="mt-6 flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-elvitra-gold" />
              <p className="text-sm text-elvitra-text-light">
                {contact.address.line1}, {contact.address.line2}
                <br />
                {contact.address.country}
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-2 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-gold"
                  >
                    <ChevronRight className="h-3 w-3 text-elvitra-gold/60" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('elevators')}
                  className="flex items-center gap-2 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-gold"
                >
                  <ChevronRight className="h-3 w-3 text-elvitra-gold/60" />
                  All Elevators
                </button>
              </li>
              {services.slice(0, 3).map((service) => (
                <li key={service.title}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="flex items-center gap-2 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-gold"
                  >
                    <ChevronRight className="h-3 w-3 text-elvitra-gold/60" />
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contact.phone.map((p) => (
                <li key={p.label}>
                  <a
                    href={`tel:${p.number.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-gold"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-elvitra-gold" />
                    <span>
                      <span className="block text-xs text-elvitra-text-light/60">{p.label}</span>
                      {p.number}
                    </span>
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <div className="h-px bg-elvitra-gold/20" />
              </li>
              {contact.email.map((e) => (
                <li key={e.label}>
                  <a
                    href={`mailto:${e.address}`}
                    className="flex items-center gap-3 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-gold"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-elvitra-gold" />
                    <span>
                      <span className="block text-xs text-elvitra-text-light/60">{e.label}</span>
                      {e.address}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-elvitra-gold/20 to-transparent" />
          <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-elvitra-text-light">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, color: '#c9a84c' }}
                  className="text-elvitra-text-light transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
