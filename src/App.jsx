import Hero from './components/Hero'
import Model from './components/Model'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Highlights from './components/Highlights'

export function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
