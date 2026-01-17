import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import PublicNavbar from '@/Components/PublicNavbar';
import Footer from "@/Components/Footer";

export default function AboutBreeds({ auth, species: displaySpecies }) {
    return (
        <>
            <Head title="Parrot Species Guide - ParrotNest" />
            <div className="bg-white min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                {/* Navigation */}
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="relative bg-slate-900 py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    {/* Abstract colorful blobs for atmosphere */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
                        <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-emerald-300 font-bold tracking-[0.2em] text-xs uppercase mb-8 backdrop-blur-md">
                            Ornithologial Directory
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black font-montserrat mb-8 tracking-tighter leading-tight">
                            Meet the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                Flock
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Discover the diverse personalities of the psittacine
                            world. <br className="hidden md:block" />
                            Use this guide to find the perfect companion for
                            your lifestyle.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-slate-50 py-24 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="space-y-24">
                            {displaySpecies.map((bird, index) => (
                                <div
                                    key={bird.id}
                                    className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-white rounded-[2.5rem] shadow-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500`}
                                >
                                    {/* Visual Side */}
                                    <div
                                        className={`lg:w-5/12 relative min-h-[400px] lg:min-h-full bg-gradient-to-br ${bird.color_class || "from-emerald-400 to-teal-500"} flex items-center justify-center p-12 overflow-hidden group`}
                                    >
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                                        {/* Decorative Circle */}
                                        <div className="absolute w-[120%] h-[120%] border-[20px] border-white/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>

                                        <div className="relative z-10 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
                                            {bird.image ? (
                                                <div className="relative w-80 h-80 mx-auto mb-6 transform group-hover:scale-105 transition-transform duration-500">
                                                    <div className="absolute inset-0 bg-black/20 rounded-full blur-2xl"></div>
                                                    <img
                                                        src={bird.image}
                                                        alt={bird.name}
                                                        className="w-full h-full object-cover rounded-full border-8 border-white/20 shadow-2xl relative z-10 animate-float"
                                                    />
                                                </div>
                                            ) : (
                                                <span className="text-9xl filter drop-shadow-2xl block mb-6 animate-float">
                                                    {bird.icon || "🦜"}
                                                </span>
                                            )}
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 inline-block">
                                                <p className="font-mono text-emerald-50 text-xs tracking-widest uppercase mb-1 opacity-80">
                                                    Scientific Name
                                                </p>
                                                <p className="font-serif italic text-2xl text-white">
                                                    {bird.scientific_name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-montserrat">
                                                {bird.name}
                                            </h2>
                                            <div className="flex gap-2">
                                                {bird.care_level ===
                                                    "Expert" && (
                                                    <span className="bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-rose-200">
                                                        Expert Care
                                                    </span>
                                                )}
                                                {bird.care_level ===
                                                    "Advanced" && (
                                                    <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-orange-200">
                                                        Advanced
                                                    </span>
                                                )}
                                                {bird.care_level ===
                                                    "Intermediate" && (
                                                    <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-yellow-200">
                                                        Intermediate
                                                    </span>
                                                )}
                                                {bird.care_level ===
                                                    "Beginner" && (
                                                    <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-200">
                                                        Beginner Friendly
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-lg text-slate-600 leading-8 mb-10 font-light">
                                            {bird.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg
                                                        className="w-5 h-5 mr-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                        ></path>
                                                    </svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">
                                                        Size
                                                    </span>
                                                </div>
                                                <p className="text-xl font-bold text-gray-900">
                                                    {bird.size}
                                                </p>
                                            </div>

                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg
                                                        className="w-5 h-5 mr-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        ></path>
                                                    </svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">
                                                        Lifespan
                                                    </span>
                                                </div>
                                                <p className="text-xl font-bold text-gray-900">
                                                    {bird.average_lifespan}
                                                </p>
                                            </div>

                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg
                                                        className="w-5 h-5 mr-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                        ></path>
                                                    </svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">
                                                        Noise
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mr-3 max-w-[80px]">
                                                        <div
                                                            className={`h-full rounded-full ${
                                                                bird.noise_level.includes(
                                                                    "High",
                                                                ) ||
                                                                bird.noise_level.includes(
                                                                    "Loud",
                                                                )
                                                                    ? "bg-red-500 w-full"
                                                                    : bird.noise_level.includes(
                                                                            "Medium",
                                                                        )
                                                                      ? "bg-yellow-500 w-2/3"
                                                                      : "bg-emerald-500 w-1/3"
                                                            }`}
                                                        ></div>
                                                    </div>
                                                    <span className="font-bold text-gray-900 leading-none">
                                                        {bird.noise_level}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
