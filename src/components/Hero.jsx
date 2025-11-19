import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-end sm:items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-xl">
              Ceylona Pictures
            </h1>
            <p className="mt-4 text-white/80 text-lg sm:text-xl">
              Modern, minimal and cinematic photography. Inspired by Sri Lanka, captured for the world.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#gallery" className="px-5 py-2.5 rounded-full bg-white text-gray-900 font-medium hover:bg-white/90 transition">View Gallery</a>
              <a href="/contact" className="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition">Book a Shoot</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </section>
  )
}
