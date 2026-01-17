import { Head, Link, router } from '@inertiajs/react';
import PublicNavbar from "@/Components/PublicNavbar";

export default function Index({ auth, parrots, species, filters }) {
    const handleFilterChange = (key, value) => {
        router.get(
            "/parrots",
            { ...filters, [key]: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-stone-800">
            <Head title="Available Parrots - ParrotNest" />

            <PublicNavbar auth={auth} />

            {/* Hero Section */}
            <div className="relative bg-white pt-24 pb-16 text-center px-4 overflow-hidden">
                {/* Decorative background elements */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-full opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at center, #D4AF37 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                ></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block p-4 rounded-full bg-stone-50 mb-8 border border-stone-100 shadow-sm">
                        <span className="text-5xl animate-[bounce_2s_infinite]">
                            🏡
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 tracking-tight leading-tight">
                        Meet Your New <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-600">
                            Family Member
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
                        Welcome to our available parrots page. Each bird is
                        hand-raised with love, socialized daily, and health
                        guaranteed. Whether you're looking for a talker, a
                        cuddler, or a clown, your perfect match is waiting.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold uppercase tracking-widest text-stone-400">
                        <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                            <span className="text-[#D4AF37] text-lg">✓</span>{" "}
                            Health Guarantee
                        </span>
                        <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                            <span className="text-[#D4AF37] text-lg">✓</span>{" "}
                            DNA Tested
                        </span>
                        <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-stone-100">
                            <span className="text-[#D4AF37] text-lg">✓</span>{" "}
                            Nationwide Shipping
                        </span>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div
                className="sticky top-24 z-40 bg-[#FAF9F6]/95 backdrop-blur py-6 border-b border-stone-200/60 mb-12 shadow-sm transition-all duration-300"
                id="filter-bar"
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
                    <select
                        value={filters.species_id || ""}
                        onChange={(e) =>
                            handleFilterChange("species_id", e.target.value)
                        }
                        className="bg-white border-stone-200 rounded-full px-6 py-3 text-sm font-bold text-stone-600 shadow-sm hover:shadow-md focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 cursor-pointer min-w-[200px] transition-all"
                    >
                        <option value="">All Species</option>
                        {species.map((s) => (
                            <option key={s.id} value={s.id}>
                                {s.name}
                            </option>
                        ))}
                    </select>

                    <div className="bg-white rounded-full p-1.5 shadow-sm border border-stone-100 flex items-center">
                        {["Male", "Female"].map((g) => (
                            <button
                                key={g}
                                onClick={() =>
                                    handleFilterChange(
                                        "gender",
                                        filters.gender === g ? "" : g,
                                    )
                                }
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                    filters.gender === g
                                        ? "bg-stone-900 text-white shadow-md transform scale-105"
                                        : "text-stone-400 hover:text-stone-900 hover:bg-stone-50"
                                }`}
                            >
                                {g}
                            </button>
                        ))}
                    </div>

                    {(filters.species_id || filters.gender) && (
                        <button
                            onClick={() => router.get("/parrots")}
                            className="px-6 py-3 text-xs font-bold text-rose-500 hover:text-white hover:bg-rose-500 rounded-full border border-rose-200 hover:border-rose-500 transition-all uppercase tracking-wider flex items-center gap-2"
                        >
                            <span>✕</span> Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-32">
                {parrots.data.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl border border-stone-100 shadow-sm">
                        <span className="text-6xl mb-6 block opacity-20">
                            🦜
                        </span>
                        <h3 className="text-2xl font-serif text-stone-400 mb-2">
                            No parrots found matching criteria.
                        </h3>
                        <p className="text-stone-400 mb-8 max-w-sm mx-auto">
                            Try adjusting your filters to find your perfect
                            feathered friend.
                        </p>
                        <button
                            onClick={() => router.get("/parrots")}
                            className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm hover:text-stone-900 transition-colors border-b-2 border-[#D4AF37] pb-1"
                        >
                            View all parrots
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {parrots.data.map((parrot) => (
                            <div
                                key={parrot.id}
                                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col border border-stone-100"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                                    <Link href={route("parrots.show", parrot)}>
                                        {parrot.images &&
                                        parrot.images.length > 0 ? (
                                            <img
                                                src={`/storage/${parrot.images[0]}`}
                                                alt={parrot.name}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-stone-300 bg-stone-50">
                                                <span className="text-6xl mb-2 opacity-20">
                                                    🦜
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                                                    No Image
                                                </span>
                                            </div>
                                        )}
                                    </Link>

                                    {/* Availability Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-stone-800 shadow-lg flex items-center gap-2 border border-white/50">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            Available
                                        </span>
                                    </div>

                                    {/* Price Badge Overlay (Bottom Right) */}
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <span className="bg-stone-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-lg font-bold shadow-lg border border-white/10 group-hover:bg-[#D4AF37] transition-colors duration-300">
                                            $
                                            {Number(
                                                parrot.adoption_fee,
                                            ).toLocaleString()}
                                        </span>
                                    </div>

                                    {/* Overlay Gradient on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1 relative">
                                    <div className="mb-6 text-center">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                                            {parrot.species?.name}
                                        </p>
                                        <h2 className="text-3xl font-serif font-bold text-stone-900 group-hover:text-[#D4AF37] transition-colors mb-4 leading-none">
                                            <Link
                                                href={route(
                                                    "parrots.show",
                                                    parrot,
                                                )}
                                            >
                                                {parrot.name}
                                            </Link>
                                        </h2>
                                        <div className="w-12 h-1 bg-stone-100 mx-auto rounded-full group-hover:bg-[#D4AF37]/30 transition-colors duration-500"></div>
                                    </div>

                                    {/* Trait Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
                                            <span className="text-2xl filter drop-shadow-sm">
                                                {parrot.gender === "Male"
                                                    ? "💙"
                                                    : "🩷"}
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">
                                                    Gender
                                                </span>
                                                <span className="text-xs font-bold text-stone-800">
                                                    {parrot.gender}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
                                            <span className="text-2xl filter drop-shadow-sm">
                                                🎂
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">
                                                    Age
                                                </span>
                                                <span className="text-xs font-bold text-stone-800">
                                                    {parrot.age} Yrs
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
                                            <span className="text-2xl filter drop-shadow-sm">
                                                ✨
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">
                                                    Mood
                                                </span>
                                                <span
                                                    className="text-xs font-bold text-stone-800 truncate w-16"
                                                    title={
                                                        parrot.personality ||
                                                        "Sweet"
                                                    }
                                                >
                                                    {parrot.personality
                                                        ? parrot.personality.split(
                                                              ",",
                                                          )[0]
                                                        : "Sweet"}
                                                </span>
                                            </div>
                                        </div>

                                        {parrot.comes_with_cage ? (
                                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                                                <span className="text-2xl filter drop-shadow-sm">
                                                    🏠
                                                </span>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">
                                                        Bonus
                                                    </span>
                                                    <span className="text-xs font-bold text-stone-800">
                                                        Cage Inc.
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[#D4AF37]/30 transition-colors">
                                                <span className="text-2xl filter drop-shadow-sm">
                                                    🩺
                                                </span>
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">
                                                        Health
                                                    </span>
                                                    <span className="text-xs font-bold text-stone-800">
                                                        Checked
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            href={route("parrots.show", parrot)}
                                            className="block w-full py-4 bg-stone-900 text-white text-center font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#D4AF37] transition-all transform active:scale-95 shadow-lg shadow-stone-200 hover:shadow-[#D4AF37]/30 relative overflow-hidden group/btn"
                                        >
                                            <span className="relative z-10">
                                                Meet {parrot.name}
                                            </span>
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Visual Pagination Mock (if needed) */}
                {parrots.links && parrots.links.length > 3 && (
                    <div className="mt-16 flex justify-center">
                        <div className="flex gap-2">
                            {parrots.links.map((link, i) =>
                                link.url ? (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all ${
                                            link.active
                                                ? "bg-stone-900 text-white"
                                                : "text-stone-400 hover:bg-stone-100"
                                        }`}
                                    />
                                ) : (
                                    <span
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                        className="w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold text-stone-300 cursor-not-allowed opacity-50"
                                    />
                                ),
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Simple */}
            <footer className="bg-white border-t border-stone-100 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="mb-8 flex flex-col items-center">
                        <img
                            src="/images/LogoParrot.jpeg"
                            alt="Logo"
                            className="w-24 h-24 rounded-full mb-2"
                        />
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                            ParrotNest
                        </h3>
                        <p className="text-stone-400 text-sm mt-2">
                            Ethical Breeding • Lifelong Support
                        </p>
                    </div>
                    <div className="flex justify-center gap-8 mb-8 text-xs font-bold uppercase tracking-widest text-stone-500">
                        <Link
                            href="/"
                            className="hover:text-[#D4AF37] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-[#D4AF37] transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/about-us"
                            className="hover:text-[#D4AF37] transition-colors"
                        >
                            About Us
                        </Link>
                    </div>
                    <p className="text-stone-300 text-xs">
                        &copy; {new Date().getFullYear()} ParrotNest. All Rights
                        Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
