import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlavorsGrid from './components/FlavorsGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-yellow-100 to-sky-100 text-amber-900">
      <Navbar />
      <Hero />
      <FlavorsGrid />

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white/60 backdrop-blur border border-white/50 rounded-3xl p-6 text-center shadow">
            <p className="font-semibold">Sunny Sips — bottled sunshine in every sip</p>
            <p className="text-amber-900/70 text-sm mt-1">Made with real fruit, no nonsense.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
