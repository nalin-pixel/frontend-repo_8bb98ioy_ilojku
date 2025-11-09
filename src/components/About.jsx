export default function About(){
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-6">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-white">Tentang Ste-Crispy</h2>
            <p className="mt-3 text-white/80">Kami menghadirkan ayam crispy berkualitas dengan pilihan rasa yang elegan. Diproses higienis, dimasak dengan minyak segar, dan dihidangkan hangat untuk menjaga kerenyahan sempurna.</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              <li className="rounded-lg bg-white/5 p-3">• Bahan Premium</li>
              <li className="rounded-lg bg-white/5 p-3">• Rasa Konsisten</li>
              <li className="rounded-lg bg-white/5 p-3">• Fresh Setiap Hari</li>
              <li className="rounded-lg bg-white/5 p-3">• Siap untuk Acara</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
              alt="Fried chicken premium"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
