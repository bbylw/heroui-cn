import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import Ecosystem from './components/Ecosystem'
import ComponentsShowcase from './components/ComponentsShowcase'
import Theming from './components/Theming'
import Composition from './components/Composition'
import Advanced from './components/Advanced'
import QuickStart from './components/QuickStart'
import AIDev from './components/AIDev'
import Comparison from './components/Comparison'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Ecosystem />
        <ComponentsShowcase />
        <Theming />
        <Composition />
        <Advanced />
        <QuickStart />
        <AIDev />
        <Comparison />
      </main>
      <Footer />
    </div>
  )
}
