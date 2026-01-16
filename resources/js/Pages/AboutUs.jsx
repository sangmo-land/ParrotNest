import { Head, Link } from '@inertiajs/react';

export default function AboutUs({ auth }) {
    return (
        <>
            <Head title="About Us - ParrotNest" />
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section - Same as Welcome.jsx */}
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
                                        {auth.user ? (
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
                                        <Link href="/contact" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200">Contact Us</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:hidden flex items-center h-20 space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
                                <Link href="/" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Home</Link>
                                <Link href="/parrots" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Parrots</Link>
                                <Link href="/about-breeds" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Breeds</Link>
                                <Link href="/reviews" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Reviews</Link>
                                <Link href="/health-guarantee" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Health</Link>
                                <Link href="/delivery-shipping" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Delivery</Link>
                                <Link href="/care-guide" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Care Guide</Link>
                                <Link href="/feeding-tips" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Feeding Tips</Link>
                                <Link href="/about-us" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">About Us</Link>
                                <Link href="/contact" className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    {/* Hero Section of About Page */}
                    <div className="bg-emerald-50 py-16 md:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">Our Mission & Values</h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    At ParrotNest, we believe every parrot deserves a loving, forever home. We are dedicated to the rescue, rehabilitation, and rehoming of parrots in need.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">Who We Are</h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Founded in 2010, ParrotNest began as a small network of avian enthusiasts concerned about the displacement of domestic parrots. Today, we have grown into a nationwide community connecting rescues, breeders, and adopters.
                                    </p>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Our team consists of certified avian veterinarians, behaviorists, and passionate volunteers who work tirelessly to ensure the welfare of our feathered friends.
                                    </p>
                                    <div className="flex gap-4">
                                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                            <span className="block text-3xl font-bold text-emerald-600 mb-1">15+</span>
                                            <span className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Years Active</span>
                                        </div>
                                        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                                            <span className="block text-3xl font-bold text-emerald-600 mb-1">2k+</span>
                                            <span className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Adoptions</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
                                        <span className="text-9xl opacity-20">🦜</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                         {/* Placeholder for an actual team image */}
                                        <p className="text-emerald-800 font-bold bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">Dedicated To Excellence</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">Our Core Values</h2>
                                <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion First</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We treat every bird with the dignity, care, and love they deserve, ensuring their physical and emotional well-being comes first.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity & Trust</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Transparency in our adoption process and honesty in our health guarantees are fundamental to building lasting relationships.
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We empower owners with knowledge about avian care, behavior, and nutrition to ensure lifelong happiness for their pets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer - Same as Welcome.jsx */}
                <footer className="bg-gray-800 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">🦜 ParrotNest</h3>
                                <p className="text-gray-300">Connecting rescued parrots with loving forever homes.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/parrots" className="text-gray-300 hover:text-white">Browse Parrots</Link></li>
                                    <li><Link href="/species" className="text-gray-300 hover:text-white">Species Guide</Link></li>
                                    {auth.user ? (
                                        <li><Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
                                    ) : (
                                        <>
                                            <li><Link href="/login" className="text-gray-300 hover:text-white">Login</Link></li>
                                            <li><Link href="/register" className="text-gray-300 hover:text-white">Register</Link></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Contact</h4>
                                <p className="text-gray-300">Email: info@parrotnest.com</p>
                                <p className="text-gray-300 mt-2">Phone: (555) 123-4567</p>
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