import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ComparePage from './pages/ComparePage'
import ElevatorsPage from './pages/ElevatorsPage'
import ServicesPage from './pages/ServicesPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    ;(window as any).scrollToSection = (id: string) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-elvitra-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elevators/:id?" element={<ElevatorsPage />} />
          <Route path="/services/:id?" element={<ServicesPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
