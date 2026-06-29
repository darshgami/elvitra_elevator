import { Zap, Wrench, Award, PhoneCall, CheckCircle, Settings } from 'lucide-react'
import SectionWrapper from '../ui/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import Card from '../ui/Card'

const features = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Rapid on-site arrival and quick issue resolution to minimize downtime.',
  },
  {
    icon: Wrench,
    title: 'Expert Engineers',
    description: 'Highly trained and certified professionals handling your installations.',
  },
  {
    icon: Award,
    title: 'Certified Products',
    description: 'Premium quality materials adhering to strict global safety standards.',
  },
  {
    icon: PhoneCall,
    title: '24/7 Support',
    description: 'Round-the-clock emergency assistance for your peace of mind.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Installation',
    description: 'Flawless execution with rigorous post-installation testing.',
  },
  {
    icon: Settings,
    title: 'AMC Services',
    description: 'Comprehensive annual maintenance contracts for long-term reliability.',
  },
]

export default function WhyChooseUsContact() {
  return (
    <SectionWrapper bgColor="bg-elvitra-pearl">
      <ScrollReveal>
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-bold text-elvitra-dark md:text-4xl">
            Why Choose <span className="text-elvitra-pink-dark">Elvitra</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-elvitra-pink-dark" />
          <p className="mx-auto mt-6 max-w-2xl font-sans text-sm text-elvitra-text">
            We deliver uncompromising quality, safety, and reliability in every vertical mobility solution we provide.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.title} delay={0.1 * index} direction="up">
            <Card hoverable className="h-full">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-elvitra-pink-dark/10 text-elvitra-pink-dark">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-elvitra-dark">
                {feature.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-elvitra-text">
                {feature.description}
              </p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
