import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

const faqs = [
  {
    question: 'How can I request a quotation?',
    answer: 'You can request a quotation by filling out the inquiry form on this page, calling our direct line, or emailing our sales team. We typically respond with a detailed quotation within 24 hours after understanding your specific requirements.',
  },
  {
    question: 'What elevator types do you provide?',
    answer: 'We provide a comprehensive range of vertical mobility solutions including Passenger Elevators, Hospital Elevators, Goods Elevators, Dumbwaiters, Home Elevators, and Capsule Elevators. All our products are customizable to fit your building\'s architecture.',
  },
  {
    question: 'Do you provide AMC (Annual Maintenance Contract)?',
    answer: 'Yes, we offer comprehensive AMC services. Our maintenance contracts ensure regular inspections, preventive maintenance, and priority emergency support to keep your elevators running smoothly and safely year-round.',
  },
  {
    question: 'What is your response time for emergencies?',
    answer: 'We operate a 24/7 support desk. For critical emergencies, our expert technicians are dispatched immediately and typically arrive on-site within a few hours, depending on your exact location.',
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Absolutely. We offer end-to-end solutions, which means our highly trained and certified engineers will handle the complete installation process, ensuring flawless execution and rigorous safety testing before handover.',
  },
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionWrapper bgColor="bg-elvitra-white">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
            Frequently Asked <span className="text-elvitra-pink-dark">Questions</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <ScrollReveal key={index} delay={0.1 * index} direction="up">
              <div
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen
                    ? 'border-elvitra-pink-dark/30 bg-elvitra-pearl/50'
                    : 'border-elvitra-silver/50 bg-elvitra-white hover:border-elvitra-pink-dark/20 hover:bg-elvitra-pearl/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-sans text-base font-semibold text-elvitra-dark pr-8">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? 'bg-elvitra-pink-dark text-elvitra-dark'
                        : 'bg-elvitra-pink-dark/10 text-elvitra-pink-dark'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 font-sans text-sm leading-relaxed text-elvitra-text">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
