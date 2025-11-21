import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-semibold transition-all ${
      isActive
        ? 'bg-white/90 text-amber-900 shadow'
        : 'text-white/90 hover:bg-white/20 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-full bg-gradient-to-r from-amber-400/90 via-yellow-300/90 to-orange-400/90 backdrop-blur border border-white/40 shadow-lg p-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🥤</span>
            <span className="font-extrabold tracking-tight text-amber-900">Sunny Sips</span>
          </Link>

          <nav className="flex items-center gap-1">
            <NavLink to="/orange" className={navLinkClass}>
              Orange
            </NavLink>
            <NavLink to="/strawberry" className={navLinkClass}>
              Strawberry
            </NavLink>
            <NavLink to="/kiwi" className={navLinkClass}>
              Kiwi
            </NavLink>
            <NavLink to="/pineapple" className={navLinkClass}>
              Pineapple
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
