import Navbar from './Navbar'

function FlavorPage({ emoji, title, gradient, blurb, notes }) {
  return (
    <div className={`min-h-screen ${gradient} text-amber-900`}> 
      <Navbar />
      <main className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="absolute -inset-10 bg-white/40 rounded-[2rem] blur-3xl" />
            <div className="relative bg-white/70 backdrop-blur border border-white/60 rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-6xl md:text-7xl" aria-hidden>
                  {emoji}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  {title}
                </h1>
              </div>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-amber-900/90">
                {blurb}
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {notes.map((n, i) => (
                  <li key={i} className="bg-white/80 border border-amber-900/10 rounded-2xl px-4 py-3 shadow-sm">
                    <span className="font-semibold">{n.bold}: </span>
                    <span className="text-amber-900/80">{n.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="px-5 py-3 rounded-full bg-amber-500 text-amber-900 font-semibold shadow hover:bg-amber-400 transition">Buy 6-pack</a>
                <a href="/" className="px-5 py-3 rounded-full bg-amber-900 text-amber-50 font-semibold shadow hover:bg-amber-800 transition">Back to home</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FlavorPage
