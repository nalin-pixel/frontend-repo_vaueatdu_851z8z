export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ceylona Pictures. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="/contact" className="hover:text-white">Book</a>
            <a href="/about" className="hover:text-white">About</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
