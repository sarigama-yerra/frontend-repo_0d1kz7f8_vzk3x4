import FlavorPage from '../components/FlavorPage'

function Strawberry() {
  return (
    <FlavorPage
      emoji="🍓"
      title="Strawberry Surf"
      gradient="bg-gradient-to-br from-rose-200 via-pink-100 to-rose-100"
      blurb="Strawberry Surf rides in with sun-warmed sweetness and a gentle coastal breeze. Made from plump, field-ripe strawberries, it pours a playful blush and tastes like the first bite of summer. Clean, juicy, and a little dreamy — no added sugar, just pure berry glow."
      notes={[
        { bold: 'Taste', text: 'Lush strawberry with a light floral lift' },
        { bold: 'Best moment', text: 'Beach blankets, golden hours, sweet escapes' },
        { bold: 'Pair it with', text: 'Dark chocolate, coconut granola, afternoon daydreams' },
        { bold: 'Feel', text: 'Soft, nostalgic, glow-inducing' },
      ]}
    />
  )
}

export default Strawberry
