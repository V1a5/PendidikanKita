"use client";

export default function Swot1() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center py-16 px-6">
            
            {/* Title */}
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800">
                    Analisis SWOT untuk Target SDG 4.1
                </h1>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Pada tahun 2030, menjamin bahwa semua anak perempuan dan laki-laki menyelesaikan pendidikan dasar dan menengah tanpa dipungut biaya, setara, dan berkualitas.
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
                            Angka Partisipasi Sekolah (APS) usia 7-15 tahun mencapai 98,22%, menunjukkan hampir seluruh anak Indonesia memiliki akses ke pendidikan dasar.
                        </li>
                    </ul>

                    <a href="https://www.bps.go.id/id/statistics-table/2/MjIxMSMy/angka-partisipasi-sekolah--aps--menurut-provinsi-dan-kelompok-umur.html"
                        className="block mt-4 text-xs text-gray-500 hover:text-green-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        BPS, 2025
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
                            APS menurun signifikan di usia 16–18 dan 19–23 tahun, terutama di Papua, dengan angka terendah 12,48%, menunjukkan kesenjangan akses pendidikan.
                        </li>
                    </ul>

                    <a href="https://www.bps.go.id/id/statistics-table/2/MjIxMSMy/angka-partisipasi-sekolah--aps--menurut-provinsi-dan-kelompok-umur.html"
                        className="block mt-4 text-xs text-gray-500 hover:text-red-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        BPS, 2025
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
                            Program Merdeka Belajar & KIP/PIP membantu memperluas akses pendidikan hingga SMA/SMK untuk menekan angka putus sekolah.
                        </li>
                    </ul>

                    <a href="https://puslapdik.kemendikdasmen.go.id/pemerintah-tingkatkan-bantuan-pip-bagi-siswa-sma-dan-smk/"
                        className="block mt-4 text-xs text-gray-500 hover:text-blue-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Puslapdik, 2024
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
                            Kesenjangan ekonomi memaksa banyak siswa usia 16–18 tahun berhenti sekolah untuk bekerja membantu keluarga.
                        </li>
                    </ul>

                    <a href="https://www.tempo.co/politik/kementerian-pendidikan-3-9-juta-anak-tak-bersekolah-1483849"
                        className="block mt-4 text-xs text-gray-500 hover:text-yellow-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Tempo, 2024
                    </a>
                </div>

                {/* Floating Center Badge */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-full px-6 py-6 text-center border border-gray-200
                    ">
                        <p className="text-xs text-gray-500">SDG 4</p>
                        <p className="font-semibold text-sm text-gray-800">
                            Target 4.1
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}