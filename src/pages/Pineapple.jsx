import FlavorPage from '../components/FlavorPage'

function Pineapple() {
  return (
    <FlavorPage
      emoji="🍍"
      title="Pineapple Tide"
      gradient="bg-gradient-to-br from-yellow-200 via-amber-100 to-yellow-100"
      blurb="Pineapple Tide tastes like vacation on repeat. Ripe golden pineapples bring a tropical rush that’s both juicy and dazzling, rounded with a hint of lime for a clean, crisp finish. It’s sunshine in a bottle — the kind that makes every day feel like a weekend."
      notes={[
        { bold: 'Taste', text: 'Tropical pineapple with a bright citrus snap' },
        { bold: 'Best moment', text: 'Poolside hangouts and rooftop sunsets' },
        { bold: 'Pair it with', text: 'Coconut rice, chili-lime snacks, island playlists' },
        { bold: 'Feel', text: 'Vibrant, playful, vacation-energy' },
      ]}
    />
  )
}

export default Pineapple
