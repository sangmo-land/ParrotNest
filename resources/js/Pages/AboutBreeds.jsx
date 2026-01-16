import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

const STATIC_SPECIES = [
    {
        id: 1,
        name: "Scarlet Macaw",
        scientific_name: "Ara macao",
        description: "Known for their vibrant colors and larger-than-life personalities, Macaws are the giants of the parrot world. They require significant space and social interaction.",
        size: "Large (32-36 inches)",
        average_lifespan: "50-80 years",
        noise_level: "High",
        care_level: "Expert",
        icon: "🦜",
        color_class: "from-red-500 to-yellow-500"
    },
    {
        id: 2,
        name: "African Grey",
        scientific_name: "Psittacus erithacus",
        description: "Widely considered the smartest bird species, African Greys are famous for their vocabulary. They are sensitive, emotional, and require high mental stimulation.",
        size: "Medium (13 inches)",
        average_lifespan: "40-60 years",
        noise_level: "Medium",
        care_level: "Advanced",
        icon: "🦅",
        color_class: "from-gray-400 to-gray-600"
    },
    {
        id: 3,
        name: "Cockatoo",
        scientific_name: "Cacatuidae",
        description: "The 'velcro birds' of the avian world. Cockatoos are incredibly affectionate and demanding. They are known for their loud calls and need for constant companionship.",
        size: "Medium-Large (12-26 inches)",
        average_lifespan: "40-70 years",
        noise_level: "Very High",
        care_level: "Expert",
        icon: "🕊️",
        color_class: "from-rose-200 to-pink-300"
    },
    {
        id: 4,
        name: "Sun Conure",
        scientific_name: "Aratinga solstitialis",
        description: "Small body, big personality. Sun Conures are stunningly beautiful and very playful, but they possess a scream that rivals much larger birds.",
        size: "Small (12 inches)",
        average_lifespan: "20-30 years",
        noise_level: "High",
        care_level: "Intermediate",
        icon: "🐦",
        color_class: "from-orange-400 to-yellow-400"
    },
    {
        id: 5,
        name: "Budgerigar",
        scientific_name: "Melopsittacus undulatus",
        description: "The common parakeet is an excellent first bird. They are chatty, active, and can be quite affectionate if hand-raised.",
        size: "Small (7 inches)",
        average_lifespan: "5-10 years",
        noise_level: "Low-Medium",
        care_level: "Beginner",
        icon: "🐤",
        color_class: "from-green-300 to-lime-400"
    },
    {
        id: 6,
        name: "Eclectus",
        scientific_name: "Eclectus roratus",
        description: "Sexually dimorphic (males are green, females are red/blue). They are generally calmer than other large parrots but have specialized dietary needs.",
        size: "Medium (14 inches)",
        average_lifespan: "30-50 years",
        noise_level: "Medium",
        care_level: "Advanced",
        icon: "🦜",
        color_class: "from-emerald-500 to-green-700"
    }
];

export default function AboutBreeds({ auth, species: dbSpecies }) {
    const displaySpecies = (dbSpecies && dbSpecies.length > 0) ? dbSpecies : STATIC_SPECIES;

    return (
        <>
            <Head title="Parrot Species Guide - ParrotNest" />
            <div className="bg-white min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                
                {/* Navigation */}
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-24">
                                <div className="flex items-center">
                                    <Link href="/" className="flex items-center gap-3 group">
                                        <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-200 transition-colors">
                                            <span className="text-4xl">🦜</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-gray-900 tracking-tight leading-none">ParrotNest</span>
                                            <span className="text-xs text-emerald-600 font-bold tracking-[0.2em] uppercase mt-1">Adoption Center</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="hidden lg:flex items-center gap-8">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Support & Inquiries</p>
                                        <p className="text-sm font-bold text-gray-900">(555) 123-4567</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        {auth?.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                                            >
                                                My Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route('login')}
                                                    className="text-gray-700 hover:text-emerald-600 font-semibold px-4 py-2"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route('register')}
                                                    className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                                >
                                                    Adopt a Parrot
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-700 text-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="hidden lg:flex items-center justify-center space-x-2">
                                <Link href="/" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                                    Home
                                </Link>
                                <Link href="/parrots" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                                    Available Parrots
                                </Link>
                                <Link href="/about-breeds" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                                    About Breeds
                                </Link>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Services
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/health-guarantee" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Health & Guarantee</Link>
                                        <Link href="/delivery-shipping" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200">Delivery & Shipping</Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Care Center
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/care-guide" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Parrot Care Guide</Link>
                                        <Link href="/feeding-tips" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200">Feeding & Care Tips</Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Company
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/reviews" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Reviews</Link>
                                        <Link href="/about-us" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

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
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Flock</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Discover the diverse personalities of the psittacine world. <br className="hidden md:block" />
                            Use this guide to find the perfect companion for your lifestyle.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-slate-50 py-24 relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="space-y-24">
                            {displaySpecies.map((bird, index) => (
                                <div key={bird.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[2.5rem] shadow-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500`}>
                                    
                                    {/* Visual Side */}
                                    <div className={`lg:w-5/12 relative min-h-[400px] lg:min-h-full bg-gradient-to-br ${bird.color_class || 'from-emerald-400 to-teal-500'} flex items-center justify-center p-12 overflow-hidden group`}>
                                        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                                        {/* Decorative Circle */}
                                        <div className="absolute w-[120%] h-[120%] border-[20px] border-white/10 rounded-full scale-100 group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
                                        
                                        <div className="relative z-10 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
                                            <span className="text-9xl filter drop-shadow-2xl block mb-6 animate-float">{bird.icon || '🦜'}</span>
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 inline-block">
                                                <p className="font-mono text-emerald-50 text-xs tracking-widest uppercase mb-1 opacity-80">Scientific Name</p>
                                                <p className="font-serif italic text-2xl text-white">{bird.scientific_name}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 font-montserrat">{bird.name}</h2>
                                            <div className="flex gap-2">
                                                {bird.care_level === 'Expert' && <span className="bg-rose-100 text-rose-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-rose-200">Expert Care</span>}
                                                {bird.care_level === 'Advanced' && <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-orange-200">Advanced</span>}
                                                {bird.care_level === 'Intermediate' && <span className="bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-yellow-200">Intermediate</span>}
                                                {bird.care_level === 'Beginner' && <span className="bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-200">Beginner Friendly</span>}
                                            </div>
                                        </div>

                                        <p className="text-lg text-slate-600 leading-8 mb-10 font-light">
                                            {bird.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">Size</span>
                                                </div>
                                                <p className="text-xl font-bold text-gray-900">{bird.size}</p>
                                            </div>
                                            
                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">Lifespan</span>
                                                </div>
                                                <p className="text-xl font-bold text-gray-900">{bird.average_lifespan}</p>
                                            </div>

                                            <div className="group/stat">
                                                <div className="flex items-center text-gray-400 mb-2 group-hover/stat:text-emerald-500 transition-colors">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                                                    <span className="text-xs font-bold uppercase tracking-widest">Noise</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden mr-3 max-w-[80px]">
                                                        <div 
                                                            className={`h-full rounded-full ${
                                                                bird.noise_level.includes('High') || bird.noise_level.includes('Loud') ? 'bg-red-500 w-full' : 
                                                                bird.noise_level.includes('Medium') ? 'bg-yellow-500 w-2/3' : 'bg-emerald-500 w-1/3'
                                                            }`}
                                                        ></div>
                                                    </div>
                                                    <span className="font-bold text-gray-900 leading-none">{bird.noise_level}</span>
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
                <footer className="bg-gray-800 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">
                                    🦜 ParrotNest
                                </h3>
                                <p className="text-gray-300">
                                    Connecting rescued parrots with loving
                                    forever homes.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/parrots"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Browse Parrots
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/species"
                                            className="text-gray-300 hover:text-white"
                                        >
                                            Species Guide
                                        </Link>
                                    </li>
                                    {auth?.user ? (
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                className="text-gray-300 hover:text-white"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    ) : (
                                        <>
                                            <li>
                                                <Link
                                                    href="/login"
                                                    className="text-gray-300 hover:text-white"
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/register"
                                                    className="text-gray-300 hover:text-white"
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Contact</h4>
                                <p className="text-gray-300">
                                    Email: info@parrotnest.com
                                </p>
                                <p className="text-gray-300 mt-2">
                                    Phone: (555) 123-4567
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2026 ParrotNest. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
