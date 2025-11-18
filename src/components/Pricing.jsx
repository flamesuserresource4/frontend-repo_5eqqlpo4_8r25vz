function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple pricing</h2>
          <p className="mt-3 text-white/70">Start free. Upgrade when you want more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="text-white/70 text-sm mt-1">Track workouts and explore basics.</p>
            <div className="mt-6 text-3xl font-bold text-white">$0<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Basic programs</li>
              <li>• Workout logging</li>
              <li>• Progress charts</li>
            </ul>
            <button className="mt-8 w-full px-4 py-2 rounded-md border border-white/15 text-white/90 hover:bg-white/10 transition">Get Started</button>
          </div>

          <div className="rounded-2xl border border-orange-400/40 bg-gradient-to-b from-orange-500/10 to-amber-400/10 p-8 shadow-lg shadow-orange-500/20">
            <div className="inline-flex mb-2 text-xs text-black bg-gradient-to-r from-orange-500 to-amber-400 px-2 py-0.5 rounded">Most Popular</div>
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="text-white/70 text-sm mt-1">Personalized programs and coaching.</p>
            <div className="mt-6 text-3xl font-bold text-white">$29<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Adaptive training plans</li>
              <li>• Form feedback</li>
              <li>• Nutrition guidance</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-8 w-full px-4 py-2 rounded-md text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-orange-500/20 shadow hover:shadow-orange-500/40 transition">Start Free Trial</button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-white font-semibold">Elite</h3>
            <p className="text-white/70 text-sm mt-1">1:1 coaching for serious results.</p>
            <div className="mt-6 text-3xl font-bold text-white">$79<span className="text-base text-white/60">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Weekly check-ins</li>
              <li>• Custom macro cycles</li>
              <li>• Priority form reviews</li>
              <li>• Limited spots</li>
            </ul>
            <button className="mt-8 w-full px-4 py-2 rounded-md border border-white/15 text-white/90 hover:bg-white/10 transition">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
