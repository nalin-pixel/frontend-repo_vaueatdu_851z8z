import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Camera } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm transition-colors ${
      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Camera size={18} />
              </div>
              <span className="font-semibold tracking-wide">Ceylona Pictures</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            <button
              className="md:hidden text-white/90 hover:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
                <NavLink to="/gallery" className={navLinkClass} onClick={() => setOpen(false)}>Gallery</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
