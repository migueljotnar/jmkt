import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import Sobre from '../sections/Sobre'
import Servicos from '../sections/Servicos'
import Contato from '../sections/Contato'

// Página principal: junta todas as seções na ordem correta
export default function HomePage() {
  return (
    <div className="bg-ink">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}