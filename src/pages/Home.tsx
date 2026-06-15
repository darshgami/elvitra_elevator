import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import AboutSection from '../components/sections/AboutSection'
import ElevatorCategories from '../components/sections/ElevatorCategories'
import Features from '../components/sections/Features'
import Services from '../components/sections/Services'
import Specifications from '../components/sections/Specifications'
import Safety from '../components/sections/Safety'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <main>
      <Hero id="hero" />
      <Stats id="stats" />
      <AboutSection id="about" />
      <ElevatorCategories id="elevators" />
      <Features id="features" />
      <Services id="services" />
      <Specifications id="specifications" />
      <Safety id="safety" />
      <Certifications id="certifications" />
      <Contact id="contact" />
    </main>
  )
}

export default Home
