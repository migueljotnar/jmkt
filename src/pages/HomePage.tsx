import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Sobre from '../sections/Sobre'
import Servicos from '../sections/Servicos'
import Portfolio from '../sections/Portfolio'
import Contato from '../sections/Contato'

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
