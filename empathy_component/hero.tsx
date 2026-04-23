export default function Hero() {
    return (
        <section className="bg-[#fff8f0] py-8">
            <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase mb-6">
                    <span className="text-gray-500">Beranda</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#9b4500] font-semibold">Empati & Penelitian</span>
                </div>

                {/* Badge */}
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff0e0] text-[#9b4500] text-xs font-semibold mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          <span>Kelompok 3 — SDG 4 & SDG 6</span>
        </div> */}

                {/* Title */}
                <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-2">
                    Empati &
                </h1>
                <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#9b4500] leading-tight mb-6">
                    Penelitian
                </h1>

                {/* Description */}
                <p className="text-[#584236] text-lg leading-relaxed max-w-2xl mb-8">
                    Membedah akar permasalahan sanitasi di lingkungan pendidikan
                    Indonesia melalui pendekatan berbasis data dan kacamata empati
                    untuk menciptakan solusi yang berdampak dan berkelanjutan.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                    {/* <button className="px-6 py-3 bg-[#c5192d] text-white rounded-full text-sm font-semibold hover:bg-[#a31525] transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            SDG 4: Pendidikan Berkualitas
          </button> */}
                    <button className="px-6 py-3 bg-[#26bde2] text-white rounded-full text-sm font-semibold hover:bg-[#1fa3c4] transition-colors flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                        SDG 6.2: Sanitasi & Higienis
                    </button>
                </div>
            </div>
        </section>
    );
}