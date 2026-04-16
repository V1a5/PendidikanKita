"use client";

export default function Swot2() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center py-16 px-6">
            
            {/* Title */}
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800">
                    Analisis SWOT untuk Target SDG 4.4
                </h1>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Pada tahun 2030, meningkatkan jumlah pemuda dan orang dewasa yang memiliki keterampilan relevan, termasuk keterampilan teknik dan kejuruan untuk dunia kerja dan kewirausahaan.
                </p>
            </div>

            {/* Grid SWOT */}
            <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl perspective-[1000px]">

                {/* Strength */}
                <div className="bg-green-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:rotate-[0.5deg] border border-green-200">
                    
                    <h2 className="font-semibold text-green-800 mb-3">
                        Kekuatan (Strengths)
                    </h2>

                    <ul className="text-sm text-green-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            IMDI 2025 meningkat menjadi 43,23, menunjukkan peningkatan kecakapan digital masyarakat yang penting untuk pendidikan dan dunia kerja modern.
                        </li>
                    </ul>

                    <a href="https://www.komdigi.go.id/berita/siaran-pers/detail/imdi-2025-naik-ke-4453-indonesia-makin-cakap-digital"
                        className="block mt-4 text-xs text-gray-500 hover:text-green-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        KomDigi, 2025
                    </a>
                </div>

                {/* Weakness */}
                <div className="bg-red-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:-rotate-[0.5deg] border border-red-200">
                    
                    <h2 className="font-semibold text-red-800 mb-3">
                        Kelemahan (Weaknesses)
                    </h2>

                    <ul className="text-sm text-red-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Hanya sekitar 12,66% tenaga kerja Indonesia berpendidikan tinggi, sehingga banyak yang belum memiliki keterampilan spesifik yang sesuai kebutuhan industri.
                        </li>
                    </ul>

                    <a href="https://talentiv.id/skill-shortage-indonesia/"
                        className="block mt-4 text-xs text-gray-500 hover:text-red-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Talentiv, 2025
                    </a>
                </div>

                {/* Opportunities */}
                <div className="bg-blue-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:rotate-[0.5deg] border border-blue-200">
                    
                    <h2 className="font-semibold text-blue-800 mb-3">
                        Peluang (Opportunities)
                    </h2>

                    <ul className="text-sm text-blue-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Program seperti Digital Talent Scholarship dan Prakerja membuka akses luas bagi masyarakat untuk meningkatkan keterampilan digital seperti coding dan AI.
                        </li>
                    </ul>

                    <a href="https://digitalent.komdigi.go.id/artikel/bpsdm-komdigi-luncurkan-program-pengembangan-sdm-digital-dan-imdi-2025-364"
                        className="block mt-4 text-xs text-gray-500 hover:text-blue-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        KomDigi, 2025
                    </a>
                </div>

                {/* Threats */}
                <div className="bg-yellow-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:-rotate-[0.5deg] border border-yellow-200">
                    
                    <h2 className="font-semibold text-yellow-800 mb-3">
                        Ancaman (Threats)
                    </h2>

                    <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Fenomena brain drain membuat talenta digital Indonesia memilih bekerja di luar negeri karena peluang dan kompensasi yang lebih baik.
                        </li>
                    </ul>

                    <a href="https://talentiv.id/skill-shortage-indonesia/"
                        className="block mt-4 text-xs text-gray-500 hover:text-yellow-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Talentiv, 2025
                    </a>
                </div>

                {/* Floating Center Badge */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-full px-6 py-6 text-center border border-gray-200">
                        <p className="text-xs text-gray-500">SDG 4</p>
                        <p className="font-semibold text-sm text-gray-800">
                            Target 4.4
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}