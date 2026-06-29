import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'

export default function ContactMap() {
  return (
    <SectionWrapper bgColor="bg-elvitra-pearl">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
            Our <span className="text-elvitra-pink-dark">Location</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-elvitra-silver/50 bg-elvitra-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="overflow-hidden rounded-xl bg-elvitra-pearl/50">
            <iframe
              title="Elvitra Elevators Headquarters Location"
              src="https://www.google.com/maps?q=Capital+market,+F-96,+Ravapar+Chowkdi,+Morbi,+Gujarat+363641&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale filter transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  )
}
