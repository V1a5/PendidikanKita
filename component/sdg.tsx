export default function AboutSDG() {
  return (
    <section id="Sdg-section" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[#0e9f6e] text-white text-xs font-bold tracking-widest uppercase mb-6">
            Tujuan PBB No. 4
          </span>

          <h2 className="font-headline text-4xl font-extrabold text-[#191c1e] mb-8">
            Apa itu SDG 4?
          </h2>

          <p className="text-[#584236] text-lg mb-12 leading-relaxed">
            Tujuan ini bertujuan untuk menjamin kualitas pendidikan yang inklusif
            dan merata serta meningkatkan kesempatan belajar sepanjang hayat bagi
            semua pada tahun 2030.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 p-6 rounded-xl bg-[#f2f4f6] border-l-[4px] border-[#ea6c00]">
              <div className="flex-shrink-0">
                <span className="bg-[#ea6c00] text-white px-3 py-1 rounded text-sm font-bold">
                  4.1
                </span>
              </div>
              <div>
                <h4 className="font-bold text-[#191c1e] mb-2">
                  Pendidikan Dasar & Menengah Gratis
                </h4>
                <p className="text-sm text-[#584236]">
                  Menjamin semua anak menyelesaikan pendidikan dasar dan
                  menengah yang gratis dan berkualitas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-[#f2f4f6] border-l-[4px] border-[#ea6c00]">
              <div className="flex-shrink-0">
                <span className="bg-[#ea6c00] text-white px-3 py-1 rounded text-sm font-bold">
                  4.4
                </span>
              </div>
              <div>
                <h4 className="font-bold text-[#191c1e] mb-2">
                  Keterampilan Relevan untuk Dunia Kerja
                </h4>
                <p className="text-sm text-[#584236]">
                  meningkatkan secara signifikan jumlah pemuda dan orang dewasa yang memiliki keterampilan yang relevan, termasuk keterampilan teknik dan kejuruan, untuk pekerjaan, pekerjaan yang layak dan kewirausahaan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:sticky lg:top-32 space-y-8">
          <div className="rounded-xl text-white aspect-square flex flex-col items-center justify-center text-center">
            <img src="/gambar/kihajardewantara.jpg" alt="Ki Hajar Dewantara" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="border-l-4 border-[#006c49] pl-6 py-2">
            <p className="text-[#9b4500] italic text-xl font-medium leading-relaxed">
              "Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani."
            </p>
            <p className="mt-4 text-sm font-bold text-[#584236] uppercase tracking-widest">
              — KI HAJAR DEWANTARA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}