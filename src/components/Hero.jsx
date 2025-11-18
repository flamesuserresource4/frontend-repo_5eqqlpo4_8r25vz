import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs">Premium coaching • Personalized plans • Real results</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(251,146,60,0.25)]">
            Transform your body. Elevate your life.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
            A high-end fitness experience that blends elite coaching with immersive tech. Train smarter with programs crafted around you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="px-6 py-3 rounded-md text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition">Start Your Free Trial</a>
            <a href="#programs" className="px-6 py-3 rounded-md text-white border border-white/20 bg-black/40 backdrop-blur hover:bg-white/10 transition">Explore Programs</a>
          </div>
        </div>
      </div>

      {/* gradient glow overlay for orange vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/10" />
    </section>
  )
}

export default Hero
