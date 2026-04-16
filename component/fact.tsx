export default function Facts() {
  return (
    <section className="bg-[#f0fdf4] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="h-1 w-12 bg-[#006c49] rounded-full"></span>
          <h2 className="font-headline text-[28px] font-bold text-[#191c1e]">
            Fakta Pendidikan Indonesia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-xl border-l-[6px] border-[#ea6c00]">
            <p className="text-[#22ed1b] text-4xl font-bold font-headline mb-2">
              97,10%
            </p>
            <p className="text-[#584236] font-medium ">Angka Melek Huruf Penduduk Usia 15 Tahun ke Atas di Indonesia (2025)</p>
            <a href="https://www.bps.go.id/id/statistics-table/2/MTAyIzI=/angka-buta-aksara-menurut-provinsi-dan-kelompok-umur--persen-.html" className="text-gray-500 text-sm" target="_blank" rel="noopener noreferrer">
              BPS, 2025
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border-l-[6px] border-[#ea6c00]">
            <p className="text-[#f11919] text-4xl font-bold font-headline mb-2">
              3,9 Juta
            </p>
            <p className="text-[#584236] font-medium">Anak usia 7–18 tahun di Indonesia belum bersekolah termasuk yang belum pernah sekolah, putus sekolah, atau tidak melanjutkan pendidikan.</p>
            <a href="https://www.tempo.co/politik/kementerian-pendidikan-3-9-juta-anak-tak-bersekolah-1483849" className="text-gray-500 text-sm" target="_blank" rel="noopener noreferrer">
              Tempo.co, 2025
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border-l-[6px] border-[#ea6c00]">
            <p className="text-[#22ed1b] text-4xl font-bold font-headline mb-2">
              32,89%
            </p>
            <p className="text-[#584236] font-medium">Angka Partisipasi Kasar (APK) perguruan tinggi nasional untuk kelompok usia 19–23 tahun pada tahun 2025.</p>
            <a href="https://www.bps.go.id/id/statistics-table/2/MTQ0NiMy/angka-partisipasi-kasar--apk--perguruan-tinggi--pt--menurut-jenis-kelamin.html" className="text-gray-500 text-sm" target="_blank" rel="noopener noreferrer">
              BPS, 2025
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border-l-[6px] border-[#ea6c00]">
            <p className="text-[#f11919] text-4xl font-bold font-headline mb-2">
              10,81%
            </p>
            <p className="text-[#584236] font-medium">Ruang kelas SD di Indonesia masuk kategori rusak berat pada akhir 2025 berisiko mengganggu keamanan dan kualitas belajar siswa.</p>
            <a href="https://data.goodstats.id/statistic/1-dari-10-ruang-kelas-sd-di-indonesia-rusak-berat-NAAWn" className="text-gray-500 text-sm" target="_blank" rel="noopener noreferrer">
              GoodStats, 2025
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border-l-[6px] border-[#ea6c00]">
            <p className="text-[#22ed1b] text-4xl font-bold font-headline mb-2">
              44,43%
            </p>
            <p className="text-[#584236] font-medium">IMDI 2025 naik jadi 43,23 menunjukkan masyarakat Indonesia makin mahir digital, penting untuk pendidikan dan dunia kerja modern.</p>
            <a href="https://www.komdigi.go.id/berita/siaran-pers/detail/imdi-2025-naik-ke-4453-indonesia-makin-cakap-digital" className="text-gray-500 text-sm" target="_blank" rel="noopener noreferrer">
              KomDigi, 2025
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}