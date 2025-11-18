import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Pricing />
        <footer id="contact" className="py-16 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold">Ready to get started?</h3>
                <p className="text-white/70 mt-2">Join thousands training with an orange-and-black premium vibe.</p>
              </div>
              <form className="md:col-span-2 grid sm:grid-cols-3 gap-3">
                <input type="email" placeholder="Your email" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <input type="text" placeholder="Your goal (e.g. Lean build)" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <button className="px-6 py-3 rounded-md text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400">Request Access</button>
              </form>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
              <p>© {new Date().getFullYear()} IgniteFit. All rights reserved.</p>
              <div className="flex gap-6 mt-4 sm:mt-0">
                <a className="hover:text-white" href="#">Privacy</a>
                <a className="hover:text-white" href="#">Terms</a>
                <a className="hover:text-white" href="#">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
