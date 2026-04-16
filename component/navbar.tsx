"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"}`}>
    <nav
      className={`sticky z-50 transition-all duration-300 ${isScrolled
        ? "top-3 mt-3 mx-6 rounded-2xl bg-white shadow-lg backdrop-blur-md"
        : "top-0 w-full bg-white"
        }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-[#ea6c00] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
          </svg>
          <span>PendidikanKita</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 focus:outline-none"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
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
            Empati dan Penelitian
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Ide
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Prototipe
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Pengujian dan Peninjauan
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-[#ea6c00] transition-colors duration-200"
          >
            Refleksi
          </Link>
        </div>
        {/* CTA Button */}
        {/* <button className="bg-[#9b4500] hover:bg-[#ea6c00] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all active:scale-95 duration-150">
          Lihat Data
        </button> */}
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t rounded-b-2xl px-8 py-4 space-y-4 shadow-xl`}>
          <Link href="#" className="block text-[#ea6c00] font-bold">Beranda</Link>
          <Link href="#" className="block text-gray-600 text-sm">Empati dan Penelitian</Link>
          <Link href="#" className="block text-gray-600 text-sm">Ide</Link>
          <Link href="#" className="block text-gray-600 text-sm">Prototipe</Link>
          <Link href="#" className="block text-gray-600 text-sm">Pengujian dan Peninjauan</Link>
          <Link href="#" className="block text-gray-600 text-sm">Refleksi</Link>
        </div>
    </nav>
  );
}