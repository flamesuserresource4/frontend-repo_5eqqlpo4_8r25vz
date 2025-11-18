function Programs() {
  const programs = [
    {
      name: 'Lean Build',
      level: 'All Levels',
      focus: 'Strength • Hypertrophy',
      desc: '12-week body recomposition plan that balances muscle gain with fat loss using smart progressive overload.'
    },
    {
      name: 'Athlete Engine',
      level: 'Intermediate',
      focus: 'Power • Conditioning',
      desc: 'Performance-focused training that blends strength, agility, and energy system work for a powerful physique.'
    },
    {
      name: 'Mobility Reset',
      level: 'Beginner',
      focus: 'Mobility • Recovery',
      desc: 'Daily 20-minute routines to improve posture, range of motion, and reduce aches while you train hard.'
    }
  ]

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature programs</h2>
            <p className="mt-4 text-white/70">Choose a track that matches your goal. Every plan adapts to your schedule and equipment.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {programs.map((p, i) => (
                <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                  <div className="text-xs text-orange-300/90">{p.level} • {p.focus}</div>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-400/5 p-8">
            <h3 className="text-white font-semibold">What you get</h3>
            <ul className="mt-4 space-y-3 text-white/80 text-sm">
              <li>• Personalized weekly schedule</li>
              <li>• Guided warm-ups and cooldowns</li>
              <li>• Video form cues and progressions</li>
              <li>• Auto deloads and recovery tracking</li>
              <li>• Nutrition guidelines and macro targets</li>
            </ul>
            <a href="#pricing" className="mt-8 inline-block px-6 py-3 rounded-md text-black font-semibold bg-gradient-to-r from-orange-500 to-amber-400 shadow-lg shadow-orange-500/20">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
