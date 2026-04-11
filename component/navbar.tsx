import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-[#ea6c00] flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
          <span>PendidikanKita</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
          <Link 
            href="#" 
            className="text-[#ea6c00] font-bold border-b-2 border-[#ea6c00] pb-1"
          >
            Beranda
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Tentang SDG 4
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Penelitian
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Solusi
          </Link>
          <Link 
            href="#" 
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Refleksi
          </Link>
        </div>

        {/* CTA Button */}
        <button className="bg-[#9b4500] hover:bg-[#ea6c00] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 duration-150">
          Lihat Data
        </button>
      </div>
    </nav>
  );
}