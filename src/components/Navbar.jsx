import { useState } from 'react'
import { Menu, Dumbbell } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(251,146,60,0.6)]">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-semibold tracking-wide text-lg">IgniteFit</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-sm text-white/80 hover:text-white transition">Programs</a>
            <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white">Sign in</button>
            <button className="px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition">Start Free Trial</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-white/10 text-white/90">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3 animate-in">
            <a href="#programs" className="block text-white/80 hover:text-white">Programs</a>
            <a href="#features" className="block text-white/80 hover:text-white">Features</a>
            <a href="#pricing" className="block text-white/80 hover:text-white">Pricing</a>
            <a href="#contact" className="block text-white/80 hover:text-white">Contact</a>
            <div className="pt-3 flex gap-3">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white border border-white/10 rounded-md">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-orange-500 to-amber-400 text-black">Free Trial</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
