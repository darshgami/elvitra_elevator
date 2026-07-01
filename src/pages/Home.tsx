import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import AboutSection from '../components/sections/AboutSection'
import ElevatorCategories from '../components/sections/ElevatorCategories'
import Services from '../components/sections/Services'
import Safety from '../components/sections/Safety'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'
import { useSEO } from '../hooks/useSEO'

function Home() {
  useSEO({
    title: 'Elvitra Elevators | Premium Elevator Solutions',
    description: 'Elvitra Elevators provides premium elevator solutions including passenger, hospital, home, freight, and luxury applications. Global standards, engineering excellence.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Elvitra Elevators",
      "url": "https://www.elvitra.com",
      "logo": "https://www.elvitra.com/logo.png",
      "description": "Premium elevator solutions for passenger, hospital, home, and freight applications."
    }
  })

  return (
    <main>
      <Hero />
      <Stats />
      <AboutSection />
      <ElevatorCategories />
      <Services />
      <Safety />
      <Certifications />
      <Contact />
    </main>
  )
}

export default Home
