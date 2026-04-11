export default function Hero() {
  return (
    <header className="relative bg-[#fff7ed] dot-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ea6c00] text-white text-xs font-bold tracking-widest uppercase mb-6">
            UN Sustainable Development Goal 4
          </span>
          
          <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Wujudkan Pendidikan{" "}
            <span className="relative inline-block">
              Berkualitas
              <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-400/30 -z-10"></span>
            </span>{" "}
            untuk Semua
          </h1>
          
          <p className="text-lg text-[#584236] leading-relaxed mb-10 max-w-xl">
            Memastikan pendidikan berkualitas yang inklusif dan merata serta 
            mempromosikan kesempatan belajar sepanjang hayat bagi semua 
            masyarakat Indonesia.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#ea6c00] text-white rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Jelajahi Data
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-8 py-4 border-2 border-[#ea6c00] text-[#ea6c00] rounded-lg font-bold hover:bg-orange-50 transition-colors">
              Pelajari SDG 4
            </button>
          </div>
        </div>

        {/* Right Content - SDG Grid */}
        <div className="relative grid grid-cols-5 gap-3 p-4">
          <div className="w-16 h-16 bg-[#e5243b] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#dda63a] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#4c9f38] rounded-md opacity-20"></div>
          
          {/* SDG 4 Main */}
          <div className="col-span-2 row-span-2 w-36 h-36 bg-[#c5192d] rounded-xl flex flex-col items-center justify-center text-white ring-8 ring-orange-500/20 shadow-[0_0_40px_rgba(234,108,0,0.3)]">
            <span className="text-5xl font-black">4</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-center px-2">Quality Education</span>
          </div>
          
          <div className="w-16 h-16 bg-[#ff3a21] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#26bde2] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#fcc30b] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#a21942] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#fd6925] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#dd1367] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#fd9d24] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#bf8b2e] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#3f7e44] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#0a97d9] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#56b3cd] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#00689d] rounded-md opacity-20"></div>
          <div className="w-16 h-16 bg-[#19486a] rounded-md opacity-20"></div>
        </div>
      </div>
    </header>
  );
}