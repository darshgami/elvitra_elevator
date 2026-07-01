import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Lazy load pages for better performance (code splitting)
const Home = lazy(() => import('./pages/Home'))
const ComparePage = lazy(() => import('./pages/ComparePage'))
const ElevatorsPage = lazy(() => import('./pages/ElevatorsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-elvitra-white">
      <div className="w-16 h-16 border-4 border-elvitra-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
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
      <div className="min-h-screen bg-elvitra-white overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/elevators/:id?" element={<ElevatorsPage />} />
            <Route path="/services/:id?" element={<ServicesPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
