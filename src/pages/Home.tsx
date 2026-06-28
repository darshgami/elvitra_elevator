import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import AboutSection from '../components/sections/AboutSection'
import ElevatorCategories from '../components/sections/ElevatorCategories'
import Services from '../components/sections/Services'
import Specifications from '../components/sections/Specifications'
import Safety from '../components/sections/Safety'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutSection />
      <ElevatorCategories />
      <Services />
      <Specifications />
      <Safety />
      <Certifications />
      <Contact />
    </main>
  )
}

export default Home
