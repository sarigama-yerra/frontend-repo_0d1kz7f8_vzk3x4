function FlavorsGrid() {
  const items = [
    {
      href: '/orange',
      emoji: '🍊',
      name: 'Sunburst Orange',
      colors: 'from-orange-200 via-amber-100 to-yellow-200',
    },
    {
      href: '/strawberry',
      emoji: '🍓',
      name: 'Strawberry Surf',
      colors: 'from-rose-200 via-pink-100 to-rose-100',
    },
    {
      href: '/kiwi',
      emoji: '🥝',
      name: 'Kiwi Breeze',
      colors: 'from-lime-200 via-emerald-100 to-lime-100',
    },
    {
      href: '/pineapple',
      emoji: '🍍',
      name: 'Pineapple Tide',
      colors: 'from-yellow-200 via-amber-100 to-yellow-100',
    },
  ]

  return (
    <section id="flavors" className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-extrabold text-amber-900 mb-4">Our sunny lineup</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={`group rounded-2xl bg-gradient-to-br ${it.colors} p-5 shadow hover:shadow-lg transition block`}
            >
              <div className="text-5xl mb-3">{it.emoji}</div>
              <div className="font-semibold text-amber-900">{it.name}</div>
              <div className="text-amber-900/70 text-sm opacity-0 group-hover:opacity-100 transition">
                Tap to taste the vibe
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlavorsGrid
