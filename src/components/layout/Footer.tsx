
import { useNavigate, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import { company, contact, categories, services } from '../../data/brochure'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  function handleNav(href: string) {
    if (isHome && href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(href)
    }
  }

  return (
    <footer className="relative bg-elvitra-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-elvitra-pink-dark/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-8 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] lg:gap-16">
          
          {/* Column 1: Company Description */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-[0.15em] text-elvitra-pink-dark">
              Elvitra Elevator
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-elvitra-text-light">
              {company.description}
            </p>
          </div>

          {/* Column 2: Navigation (Elevators & Services) */}
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Elevators */}
            <div>
              <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
                Elevators
              </h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleNav('/elevators')}
                      className="flex items-center gap-2 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-pink-dark text-left text-balance"
                    >
                      <ChevronRight className="h-3 w-3 shrink-0 text-elvitra-pink-dark/60" />
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
                Services

              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <button
                      onClick={() => handleNav('/services')}
                      className="flex items-center gap-2 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-pink-dark text-left text-balance"
                    >
                      <ChevronRight className="h-3 w-3 shrink-0 text-elvitra-pink-dark/60" />
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-6 font-sans text-sm font-semibold tracking-widest text-elvitra-white uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* Phones */}
              {contact.phone.map((p) => (
                <li key={p.number}>
                  <a
                    href={`tel:${p.number.replace(/\s/g, '')}`}
                    className="flex items-start gap-3 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-pink-dark"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-elvitra-pink-dark" />
                    <span>{p.number}</span>
                  </a>
                </li>
              ))}

              {/* Divider */}
              <li className="pt-1 pb-1">
                <div className="h-px bg-elvitra-pink-dark/20" />
              </li>

              {/* Email */}
              {contact.email.map((e) => (
                <li key={e.address}>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${e.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-elvitra-text-light transition-colors duration-300 hover:text-elvitra-pink-dark"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-elvitra-pink-dark" />
                    <span>{e.address}</span>
                  </a>
                </li>
              ))}

              {/* Location (Moved to bottom of Contact) */}
              <li className="pt-2">
                <div className="flex items-start gap-3 text-sm text-elvitra-text-light">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-elvitra-pink-dark" />
                  <p>
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                    <br />
                    {contact.address.country}
                  </p>
                </div>
              </li>

              {/* Google Map */}
              <li className="pt-4">
                <div className="overflow-hidden rounded-xl border border-elvitra-pink-dark/20 shadow-sm transition-all duration-300 hover:border-elvitra-pink-dark/50">
                  <iframe 
                    title="Elvitra Elevators Location"
                    src="https://www.google.com/maps?q=Capital+market,+F-96,+Ravapar+Chowkdi,+Morbi,+Gujarat+363641&output=embed" 
                    width="100%" 
                    height="180" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </li>

              {/* Branches */}
              <li className="pt-4">
                <div className="rounded-xl border border-elvitra-pink-dark/20 bg-elvitra-pink-dark/5 px-4 py-3">
                  <p className="mb-1.5 font-sans text-xs font-bold tracking-widest text-elvitra-pink-dark uppercase">
                    Branches
                  </p>
                  <p className="text-sm leading-relaxed text-elvitra-text-light">
                    Ahmedabad, Junagadh, Jamnagar, Rajkot, Surat, Valsad‑Vapi, Vadodara, Navsari, Bhavnagar
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-elvitra-pink-dark/20 to-transparent" />
          <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-elvitra-text-light">
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, color: '#d67a92' }}
                  className="text-elvitra-text-light transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
