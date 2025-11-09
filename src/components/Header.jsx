import { Star } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-rose-900 opacity-90" />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-rose-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 text-center text-white">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <span className="text-3xl">🍗</span>
        </div>
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Ste-Crispy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Ayam crispy premium dengan bumbu khas. Renyah di luar, juicy di dalam —
          pengalaman rasa yang elegan dan tak terlupakan.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-amber-300">
          <Star className="h-5 w-5 fill-current" />
          <span className="text-sm sm:text-base">Dipilih pelanggan untuk momen spesial & acara istimewa</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#menu"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
          >
            Lihat Menu
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}
