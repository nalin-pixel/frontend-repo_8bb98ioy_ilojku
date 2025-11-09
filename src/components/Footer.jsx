export default function Footer(){
  return (
    <footer id="contact" className="relative mt-12 border-t border-white/10 bg-slate-950/60">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-slate-900/60 to-rose-900/40" />
      <div className="relative mx-auto max-w-6xl px-6 py-10 text-white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl font-semibold">Ste-Crispy</h3>
            <p className="mt-1 text-white/70">Renyah berkelas untuk setiap momen.</p>
          </div>
          <div className="space-y-1 text-white/80">
            <p>Email: <a href="mailto:contact@ste-crispy.id" className="underline hover:text-white">contact@ste-crispy.id</a></p>
            <p>WhatsApp: <a href="https://wa.me/6285784473515" target="_blank" rel="noreferrer" className="underline hover:text-white">+62-857-8447-3515</a></p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Ste-Crispy. All rights reserved.</p>
      </div>
    </footer>
  )
}
