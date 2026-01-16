import { Head, Link } from '@inertiajs/react';
import { useState } from "react";
import PublicNavbar from "@/Components/PublicNavbar";

export default function Show({ auth, parrot, similarParrots }) {
    const [mainImage, setMainImage] = useState(
        parrot.images && parrot.images.length > 0
            ? `/storage/${parrot.images[0]}`
            : null
    );

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-stone-800">
            <Head title={`${parrot.name} - Available for Adoption`} />

            <PublicNavbar auth={auth} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="bg-stone-50 h-96 lg:h-auto min-h-[500px] relative">
                            {/* Breadcrumb Overlay */}
                            <div className="absolute top-6 left-6 z-10 flex text-xs font-bold uppercase tracking-widest text-white/80 bg-black/20 backdrop-blur px-3 py-1.5 rounded-full">
                                <Link
                                    href="/parrots"
                                    className="hover:text-white"
                                >
                                    Available
                                </Link>
                                <span className="mx-2">/</span>
                                <span>{parrot.name}</span>
                            </div>

                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt={parrot.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
                                    <span className="text-9xl mb-4 opacity-50">
                                        🦜
                                    </span>
                                    <span className="uppercase tracking-widest text-sm font-bold">
                                        Image Not Available
                                    </span>
                                </div>
                            )}

                            {/* Thumbnails (Only if there are multiple images) */}
                            {parrot.images && parrot.images.length > 1 && (
                                <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto pb-2 noscrollbar">
                                    {parrot.images.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                setMainImage(`/storage/${img}`)
                                            }
                                            className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                                                mainImage === `/storage/${img}`
                                                    ? "border-[#D4AF37] shadow-lg scale-105"
                                                    : "border-white/50 opacity-80 hover:opacity-100"
                                            }`}
                                        >
                                            <img
                                                src={`/storage/${img}`}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="mb-2">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                                    {parrot.species?.name}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
                                {parrot.name}
                            </h1>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 pb-10 border-b border-stone-100">
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Gender
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg flex justify-center gap-1">
                                        {parrot.gender === "Male" ? (
                                            <span className="text-blue-500">
                                                ♂
                                            </span>
                                        ) : (
                                            <span className="text-rose-500">
                                                ♀
                                            </span>
                                        )}
                                        {parrot.gender}
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Age
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg">
                                        {parrot.age} Yrs
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Bonus
                                    </span>
                                    <span
                                        className={`font-bold text-lg ${
                                            parrot.comes_with_cage
                                                ? "text-[#D4AF37]"
                                                : "text-stone-800"
                                        }`}
                                    >
                                        {parrot.comes_with_cage
                                            ? "Included"
                                            : "None"}
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        ID #
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg">
                                        {parrot.id}1092
                                    </span>
                                </div>
                            </div>

                            <div className="prose prose-stone mb-10 text-stone-600 leading-relaxed">
                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
                                    About Me
                                </h3>
                                <p className="mb-6">{parrot.description}</p>

                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
                                    Personality
                                </h3>
                                <p>{parrot.personality}</p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-stone-100">
                                <div>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                                        Adoption Fee
                                    </span>
                                    <span className="text-4xl font-serif font-bold text-stone-900 tracking-tight">
                                        $
                                        {Number(
                                            parrot.adoption_fee
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                {auth?.user ? (
                                    <Link
                                        href={route(
                                            "applications.create",
                                            parrot.id
                                        )}
                                        className="px-10 py-5 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/30 transform active:scale-95"
                                    >
                                        Apply Now
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("login")}
                                        className="px-8 py-5 border-[2px] border-stone-200 text-stone-500 font-bold uppercase tracking-widest text-sm rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                                    >
                                        Log in to Adopt
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Parrots */}
                {similarParrots.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl pt-1">❤️</span>
                            <h2 className="text-3xl font-serif font-bold text-stone-900">
                                You Might Also Like
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {similarParrots.map((similar) => (
                                <Link
                                    key={similar.id}
                                    href={route("parrots.show", similar.id)}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                        <div className="aspect-[4/5] bg-stone-100 relative overflow-hidden">
                                            {similar.images &&
                                            similar.images.length > 0 ? (
                                                <img
                                                    src={`/storage/${similar.images[0]}`}
                                                    alt={similar.name}
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-4xl text-stone-200">
                                                    🦜
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#D4AF37] transition-colors mb-1">
                                                {similar.name}
                                            </h3>
                                            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                                                {similar.age} years •{" "}
                                                {similar.gender}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Simple */}
            <footer className="bg-white border-t border-stone-100 py-16 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="mb-8">
                        <span className="text-4xl">🦜</span>
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
