import FlavorPage from '../components/FlavorPage'

function Orange() {
  return (
    <FlavorPage
      emoji="🍊"
      title="Sunburst Orange"
      gradient="bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-100"
      blurb="Our Sunburst Orange is a golden pour of daylight. We press Valencia and Cara Cara oranges at peak ripeness for a vibrant, tangy-sweet profile that tastes like a morning walk along a warm beach. Bright citrus oils dance on the nose, while a silky finish keeps you refreshed for the next wave."
      notes={[
        { bold: 'Taste', text: 'Sparkling citrus with a honeyed finish' },
        { bold: 'Best moment', text: 'Sunrise sips and afternoon pick-me-ups' },
        { bold: 'Pair it with', text: 'Grilled halloumi, avocado toast, or a sunny playlist' },
        { bold: 'Feel', text: 'Zesty, uplifting, endlessly refreshing' },
      ]}
    />
  )
}

export default Orange
