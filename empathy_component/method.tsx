export default function Method() {
    const methods = [
        {
            number: "1",
            title: "Kuesioner Digital",
            description: "Penyebaran formulir online untuk mendapatkan data kuantitatif dari 20+ responden.",
            tag: "QUANTITATIVE",
            tagColor: "bg-[#dbeafe] text-[#1e40af]",
        },

    ];

    return (
        <section className="bg-[#f0fdf4] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-8">
                {/* Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-[#0e9f6e] rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ffffff]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-[#1f2937]">
                        Metodologi Riset Lapangan
                    </h2>
                </div>


                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {methods.map((method) => (
                        <div
                            key={method.number}
                            className="bg-white rounded-xl p-6 shadow-sm border-t-4 border-[#0e9f6e] hover:shadow-md transition-shadow"
                        >
                            {/* Number Circle */}
                            <div className="w-10 h-10 bg-[#0e9f6e] rounded-full flex items-center justify-center mb-4">
                                <span className="text-white font-bold text-sm">{method.number}</span>
                            </div>

                            {/* Title */}
                            <h3 className="font-headline font-bold text-[#1f2937] text-lg mb-3">
                                {method.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-[#6b7280] leading-relaxed mb-4">
                                {method.description}
                            </p>

                            {/* Tag */}
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${method.tagColor}`}>
                                {method.tag}
                            </span>
                        </div>
                    ))}

                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-64">
                        <img
                            src="/gambar/survei.png"
                            alt="Survei"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />

                        {/* Gradient overlay untuk readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <span className="inline-block px-3 py-1 bg-[#0e9f6e] text-white text-xs font-bold tracking-wider uppercase rounded-md mb-3">
                                Metode Survei
                            </span>
                            <h3 className="font-headline font-bold text-white text-base leading-snug">
                                Survei lewat Google Form
                            </h3>
                            <p className="text-white/80 text-xs mt-2">
                                Pengumpulan data kuantitatif melalui formulir digital
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}