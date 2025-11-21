function Hero() {
  return (
    <section className="pt-28 pb-16 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_60%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-amber-900 drop-shadow-sm">
              Beachy-fresh juices for sunny souls
            </h1>
            <p className="mt-5 text-lg md:text-xl text-amber-900/80">
              Sip your way to summer with our four signature blends. Sun-kissed oranges, ruby strawberries, tropical pineapples, and zesty kiwis — all cold-pressed, vibrant, and 100% joyful.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#flavors" className="px-5 py-3 rounded-full bg-amber-500 text-amber-900 font-semibold shadow hover:bg-amber-400 transition">Explore flavors</a>
              <a href="/orange" className="px-5 py-3 rounded-full bg-white/80 text-amber-900 font-semibold shadow hover:bg-white transition">Try Orange first</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-300 via-yellow-200 to-orange-300 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-200 to-amber-100 rounded-2xl p-6 shadow-lg">
                <div className="text-5xl">🍊</div>
                <p className="mt-2 font-semibold text-amber-900">Sunburst Orange</p>
              </div>
              <div className="bg-gradient-to-br from-rose-200 to-pink-100 rounded-2xl p-6 shadow-lg">
                <div className="text-5xl">🍓</div>
                <p className="mt-2 font-semibold text-rose-900">Strawberry Surf</p>
              </div>
              <div className="bg-gradient-to-br from-lime-200 to-emerald-100 rounded-2xl p-6 shadow-lg">
                <div className="text-5xl">🥝</div>
                <p className="mt-2 font-semibold text-emerald-900">Kiwi Breeze</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-200 to-amber-100 rounded-2xl p-6 shadow-lg">
                <div className="text-5xl">🍍</div>
                <p className="mt-2 font-semibold text-amber-900">Pineapple Tide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
