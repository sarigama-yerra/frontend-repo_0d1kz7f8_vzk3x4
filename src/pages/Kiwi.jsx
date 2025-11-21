import FlavorPage from '../components/FlavorPage'

function Kiwi() {
  return (
    <FlavorPage
      emoji="🥝"
      title="Kiwi Breeze"
      gradient="bg-gradient-to-br from-lime-200 via-emerald-100 to-lime-100"
      blurb="Kiwi Breeze is your barefoot walk through a tropical garden. We blend New Zealand kiwis with a kiss of apple for balance — bright green, slightly tart, and wildly refreshing. It’s the zippy, breezy kind of delicious that wakes up your senses without weighing you down."
      notes={[
        { bold: 'Taste', text: 'Zesty kiwi with a crisp, green sparkle' },
        { bold: 'Best moment', text: 'Post-swim cool-downs and city sunshine breaks' },
        { bold: 'Pair it with', text: 'Chia pudding, cucumber salad, or a hammock' },
        { bold: 'Feel', text: 'Light, revitalizing, beach-breeze bright' },
      ]}
    />
  )
}

export default Kiwi
