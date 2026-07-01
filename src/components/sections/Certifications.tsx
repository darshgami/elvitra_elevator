import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications } from '../../data/brochure'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import { X } from 'lucide-react'

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <SectionWrapper id="certifications" bgColor="bg-elvitra-white">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-elvitra-dark md:text-5xl">
            Certificates {' '}
            {/* <span className="text-elvitra-pink-dark">Accreditations</span> */}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      {/* Responsive Grid: Centered 2 columns with a vertical line between them on larger screens */}
      <div className="relative mx-auto grid max-w-4xl gap-8 sm:grid-cols-2 lg:gap-16">
        {/* Vertical Divider Line */}
        <div className="absolute left-1/2 top-25 bottom-4 hidden h-1/2 w-1 rounded-full -translate-x-1/2 bg-elvitra-pink-dark sm:block" />

        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.name} delay={index * 0.08}>
            <div
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border-2 border-elvitra-pink-dark/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(214,122,146,0.15)] hover:border-elvitra-pink-dark/30"
              onClick={() => setSelectedImage(cert.image)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.name}
                  width="400"
                  height="300"
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-elvitra-pink-dark/0 transition-colors duration-300 group-hover:bg-elvitra-pink-dark/5" />
              </div>

              {/* Text Content */}
              <div className="flex flex-1 flex-col items-center justify-center border-t border-gray-100 p-6 text-center">
                <h3 className="font-sans text-xl font-bold uppercase tracking-wider text-elvitra-dark">
                  {cert.name}
                </h3>
                <p className="mt-2 font-sans text-sm font-medium text-elvitra-text-light">
                  {cert.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-elvitra-pink-light"
              aria-label="Close image preview"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Image Preview Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate Preview"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  )
}
