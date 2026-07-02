import { useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { servicesData } from '../data/services'
import ServiceSidebar from '../components/services/ServiceSidebar'
import ServiceDetails from '../components/services/ServiceDetails'
import { useSEO } from '../hooks/useSEO'

export default function ServicesPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Match active service by either ID or slug
  const activeService = useMemo(() => {
    return (
      servicesData.find((s) => s.id === id || s.slug === id) ||
      servicesData[0]
    )
  }, [id])

  const handleSelect = (newId: string) => {
    // Find the corresponding service to navigate to its slug
    const service = servicesData.find((s) => s.id === newId)
    if (service) {
      navigate(`/services/${service.slug}`)
    }
  }

  // Smooth scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeService.id])

  useSEO({
    title: `${activeService.title} | Elvitra Elevator Services`,
    description: activeService.description || `Professional ${activeService.title.toLowerCase()} services by Elvitra Elevators.`,
    canonicalUrl: `https://www.elvitra.com/services/${activeService.slug || activeService.id}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": activeService.title,
      "description": activeService.description,
      "provider": {
        "@type": "Organization",
        "name": "Elvitra Elevators"
      }
    }
  })

  return (
    <main className="min-h-screen bg-elvitra-pearl pt-24 md:pt-28">
      {/* Decorative Header Block */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px),
              repeating-linear-gradient(0deg, transparent, transparent 60px, #d67a92 60px, #d67a92 61px)
            `,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-elvitra-white/0 via-elvitra-white/50 to-elvitra-white" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-sans text-xs font-semibold tracking-[0.25em] text-elvitra-pink-dark uppercase">
              Full Lifecycle Engineering
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight text-elvitra-dark md:text-5xl">
              Our <span className="text-elvitra-pink-dark">Services</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Master-Detail Page Layout */}
      <section className="px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row lg:gap-12">
          {/* Left Navigation Sidebar */}
          <ServiceSidebar
            services={servicesData}
            activeId={activeService.id}
            onSelect={handleSelect}
          />

          {/* Right Details Panel */}
          <div className="relative flex-1 min-w-0">
            {/* Soft Ambient Background Glow */}
            <motion.div
              className="pointer-events-none absolute -top-40 -right-40 -z-10 h-96 w-96 rounded-full blur-[100px]"
              animate={{
                background: `radial-gradient(circle, ${
                  activeService.id === 'installation'
                    ? '#d67a92'
                    : activeService.id === 'maintenance'
                    ? '#10b981'
                    : activeService.id === 'amc'
                    ? '#f59e0b'
                    : '#8b5cf6'
                }12 0%, transparent 70%)`,
              }}
              transition={{ duration: 1 }}
            />

            <ServiceDetails service={activeService} />
          </div>
        </div>
      </section>
    </main>
  )
}
