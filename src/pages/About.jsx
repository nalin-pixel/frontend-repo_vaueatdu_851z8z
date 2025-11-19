import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">About</h1>
          <p className="mt-6 text-white/70 max-w-3xl leading-relaxed">
            Ceylona Pictures is a minimalist photography studio blending art and technology. Our work spans weddings, fashion, travel, and product photography — with a signature cinematic aesthetic inspired by Sri Lanka's diverse landscapes and culture.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-medium">Approach</h3>
              <p className="mt-2 text-white/70">We combine natural light, modern composition and subtle post-processing to create timeless images.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-medium">Services</h3>
              <p className="mt-2 text-white/70">Editorial shoots, events, weddings, portraits, product campaigns, and destination projects.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
