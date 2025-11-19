import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! We will get back to you soon.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-28">
        <section className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 text-white/70">Tell us about your project. We usually reply within 24 hours.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <input name="name" required placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
            <input name="email" required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
            <input name="subject" placeholder="Subject" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
            <textarea name="message" required rows="6" placeholder="Message" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" />
            <button className="mt-2 px-5 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-white/90 transition w-fit">Send</button>
            {status && <p className="text-white/70">{status}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
