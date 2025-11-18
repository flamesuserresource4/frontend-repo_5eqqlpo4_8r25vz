import { Activity, Sparkles, Timer, ShieldCheck } from 'lucide-react'

function Features() {
  const items = [
    {
      icon: Activity,
      title: 'Athlete-grade training',
      desc: 'Periodized programs designed by elite coaches to maximize strength, endurance, and mobility.'
    },
    {
      icon: Timer,
      title: 'Data-driven progress',
      desc: 'Track every set and session. Adaptive intensity and recovery guidance based on your inputs.'
    },
    {
      icon: ShieldCheck,
      title: 'Safe & sustainable',
      desc: 'Form cues, deloads, and mobility built-in to keep you progressing without burnout.'
    },
    {
      icon: Sparkles,
      title: 'Premium experience',
      desc: 'Polished design, dark theme, and orange highlights for a motivating, modern feel.'
    }
  ]

  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for performance</h2>
          <p className="mt-3 text-white/70">Focused features that help you train harder, recover smarter, and look your best.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-orange-400/40 transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-black flex items-center justify-center mb-4 shadow-orange-500/20 shadow">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
