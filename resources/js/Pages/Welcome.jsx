import { Head, Link } from '@inertiajs/react';


export default function Welcome({ auth, featuredParrots = [], stats = {} }) {


    return (
        <>
            <Head title="ParrotNest - Parrot Adoption" />
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section - Divided into Two Rows */}
                <header className="bg-white shadow-sm sticky top-0 z-50">
                    {/* Row 1: Brand & User Actions */}
                    <div className="border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-24">
                                {/* Logo Area */}
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

                                {/* Right Side: Contact & Auth */}
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

                                {/* Mobile Menu Button: REMOVED */}

                            </div>
                        </div>
                    </div>

                    {/* Row 2: Main Navigation Bar (Emerald Section) - Visible on Desktop AND Mobile (Simplified) */}
                    <div className="bg-emerald-700 text-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                             {/* Desktop Navigation */}
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
                                {/* Dropdowns... */}
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

                            {/* Mobile Navigation (Scrollable Row) - Expanded to include all major links */}
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

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Find Your Perfect Feathered Friend
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-emerald-50">
                                Give a rescued parrot a loving forever home
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/parrots"
                                    className="bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition"
                                >
                                    Browse Available Parrots
                                </Link>
                                <Link
                                    href="/species"
                                    className="bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-800 transition"
                                >
                                    Learn About Species
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white py-12 border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold text-emerald-600">{stats.total_parrots || 0}</div>
                                <div className="text-gray-600 mt-2">Parrots Available</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-600">{stats.species_count || 0}</div>
                                <div className="text-gray-600 mt-2">Species</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-600">{stats.total_adopted || 0}</div>
                                <div className="text-gray-600 mt-2">Successfully Adopted</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Parrots Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Parrots</h2>
                            <p className="text-gray-600 text-lg">Meet some of our wonderful birds looking for homes</p>
                        </div>

                        {featuredParrots.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredParrots.map((parrot) => (
                                    <div key={parrot.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                        <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                                            <span className="text-6xl">🦜</span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{parrot.name}</h3>
                                                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">
                                                    {parrot.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">{parrot.species?.name}</p>
                                            <p className="text-gray-700 mb-4 line-clamp-2">{parrot.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-emerald-600">
                                                    ${parseFloat(parrot.adoption_fee).toFixed(2)}
                                                </span>
                                                <Link
                                                    href={`/parrots/${parrot.id}`}
                                                    className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition text-sm"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white rounded-lg">
                                <p className="text-gray-500 text-lg">No featured parrots available at the moment.</p>
                            </div>
                        )}

                        <div className="text-center mt-12">
                            <Link
                                href="/parrots"
                                className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition"
                            >
                                View All Parrots
                            </Link>
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Adoption Works</h2>
                            <p className="text-gray-600 text-lg">Simple steps to welcome a parrot into your home</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">1</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Browse</h3>
                                <p className="text-gray-600">Explore our available parrots and find your perfect match</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">2</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Apply</h3>
                                <p className="text-gray-600">Submit an adoption application with your details</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">3</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Review</h3>
                                <p className="text-gray-600">Our team reviews your application carefully</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">4</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Adopt</h3>
                                <p className="text-gray-600">Welcome your new feathered family member home!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
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
