const menuItems = [
  {
    id: 1,
    name: "Crispy Original",
    desc: "Ayam crispy klasik dengan bumbu rahasia yang gurih dan renyah.",
    price: 22000,
    img: "https://images.unsplash.com/photo-1604908554049-1e7c27c8d4e5?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Crispy Spicy",
    desc: "Sensasi pedas nikmat, mantap untuk pecinta rasa berani.",
    price: 24000,
    img: "https://images.unsplash.com/photo-1604908812147-3b85a9a87401?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Crispy Cheese",
    desc: "Taburan keju meleleh yang bikin nagih di setiap gigitan.",
    price: 26000,
    img: "https://images.unsplash.com/photo-1594212699903-ec8a2b77b1f8?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Crispy Paket Hemat",
    desc: "Ayam + nasi + minum, pas untuk makan siang praktis.",
    price: 30000,
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1600&auto=format&fit=crop"
  }
];

function formatRupiah(n){
  return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR'}).format(n);
}

export default function MenuSection(){
  return (
    <section id="menu" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">Menu Pilihan</h2>
        <p className="mt-2 text-white/70">Pilih favoritmu — semua dibuat fresh setiap hari.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map(item => (
          <article key={item.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                <span className="shrink-0 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-bold text-slate-900 shadow">
                  {formatRupiah(item.price)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              <button className="mt-4 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-400">Pesan Sekarang</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
