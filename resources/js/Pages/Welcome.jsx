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
                                    <Link
                                        href="/"
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-200 transition-colors">
                                            <span className="text-4xl">🦜</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-gray-900 tracking-tight leading-none">
                                                ParrotNest
                                            </span>
                                            <span className="text-xs text-emerald-600 font-bold tracking-[0.2em] uppercase mt-1">
                                                Adoption Center
                                            </span>
                                        </div>
                                    </Link>
                                </div>

                                {/* Right Side: Contact & Auth */}
                                <div className="hidden lg:flex items-center gap-8">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">
                                            Support & Inquiries
                                        </p>
                                        <p className="text-sm font-bold text-gray-900">
                                            (555) 123-4567
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        {auth.user ? (
                                            <Link
                                                href={route("dashboard")}
                                                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                                            >
                                                My Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route("login")}
                                                    className="text-gray-700 hover:text-emerald-600 font-semibold px-4 py-2"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route("register")}
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
                                <Link
                                    href="/"
                                    className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/parrots"
                                    className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    Available Parrots
                                </Link>
                                <Link
                                    href="/about-breeds"
                                    className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    About Breeds
                                </Link>
                                {/* Dropdowns... */}
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Services
                                        <svg
                                            className="w-4 h-4 ml-2 opacity-80"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link
                                            href="/health-guarantee"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50"
                                        >
                                            Health & Guarantee
                                        </Link>
                                        <Link
                                            href="/delivery-shipping"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200"
                                        >
                                            Delivery & Shipping
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Care Center
                                        <svg
                                            className="w-4 h-4 ml-2 opacity-80"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link
                                            href="/care-guide"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50"
                                        >
                                            Parrot Care Guide
                                        </Link>
                                        <Link
                                            href="/feeding-tips"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200"
                                        >
                                            Feeding & Care Tips
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Company
                                        <svg
                                            className="w-4 h-4 ml-2 opacity-80"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link
                                            href="/reviews"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50"
                                        >
                                            Reviews
                                        </Link>
                                        <Link
                                            href="/about-us"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50"
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Navigation (Scrollable Row) - Expanded to include all major links */}
                            <div className="lg:hidden flex items-center h-20 space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
                                <Link
                                    href="/"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/parrots"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Parrots
                                </Link>
                                <Link
                                    href="/about-breeds"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Breeds
                                </Link>
                                <Link
                                    href="/reviews"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Reviews
                                </Link>
                                <Link
                                    href="/health-guarantee"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Health
                                </Link>
                                <Link
                                    href="/delivery-shipping"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Delivery
                                </Link>
                                <Link
                                    href="/care-guide"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Care Guide
                                </Link>
                                <Link
                                    href="/feeding-tips"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Feeding Tips
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/contact"
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <div className="relative bg-gray-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-40 scale-x-[-1]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-transparent"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
                        <div className="text-center md:text-left max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-md">
                                Find Your Feathered <br />
                                Friend with the <br />
                                <span className="text-emerald-400">
                                    Parrot Nest
                                </span>
                            </h1>
                            <p className="text-xl md:text-3xl mb-10 text-emerald-100 font-light drop-shadow-sm">
                                Give a rescued parrot a loving forever home.{" "}
                                <br className="hidden md:block" />
                                Adoption is a beautiful journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link
                                    href="/parrots"
                                    className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-500 transition shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
                                >
                                    Browse Available Parrots
                                </Link>
                                <Link
                                    href="/species"
                                    className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition shadow-lg transform hover:-translate-y-1"
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
                                <div className="text-4xl font-bold text-emerald-600">
                                    {stats.total_parrots || 0}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Parrots Available
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-600">
                                    {stats.species_count || 0}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Species
                                </div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-emerald-600">
                                    {stats.total_adopted || 0}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Successfully Adopted
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Parrots Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Featured Parrots
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Meet some of our wonderful birds looking for
                                homes
                            </p>
                        </div>

                        {featuredParrots.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredParrots.map((parrot) => (
                                    <div
                                        key={parrot.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                                    >
                                        <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                                            <span className="text-6xl">🦜</span>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">
                                                    {parrot.name}
                                                </h3>
                                                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm">
                                                    {parrot.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-2">
                                                {parrot.species?.name}
                                            </p>
                                            <p className="text-gray-700 mb-4 line-clamp-2">
                                                {parrot.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-emerald-600">
                                                    $
                                                    {parseFloat(
                                                        parrot.adoption_fee
                                                    ).toFixed(2)}
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
                                <p className="text-gray-500 text-lg">
                                    No featured parrots available at the moment.
                                </p>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How Adoption Works
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Simple steps to welcome a parrot into your home
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">
                                        1
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Browse
                                </h3>
                                <p className="text-gray-600">
                                    Explore our available parrots and find your
                                    perfect match
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">
                                        2
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Apply
                                </h3>
                                <p className="text-gray-600">
                                    Submit an adoption application with your
                                    details
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">
                                        3
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Review
                                </h3>
                                <p className="text-gray-600">
                                    Our team reviews your application carefully
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-emerald-600">
                                        4
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Adopt
                                </h3>
                                <p className="text-gray-600">
                                    Welcome your new feathered family member
                                    home!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Happy Tails - Testimonials Section */}
                <div className="py-20 bg-gray-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
                                Success Stories
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                                Happy Tails
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-emerald-50">
                                <div className="flex text-emerald-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "Adopting Rio (Macaw) was a journey, but
                                    ParrotNest supported us every step of the
                                    way with behavioral training tips. He's the
                                    light of our home now!"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                        👩
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Sarah Jenkins
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Adopted Rio (Blue & Gold Macaw)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-emerald-50">
                                <div className="flex text-emerald-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "I never knew a Grey could be so cuddly. The
                                    health guarantee gave us peace of mind, and
                                    the vet records were impeccable."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                        👨
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            David Chen
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Adopted Gandalf (African Grey)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-emerald-50">
                                <div className="flex text-emerald-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "We drove 4 hours to pick up Bella. The
                                    facility is clean, spacious, and the staff
                                    truly cares about every single bird."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                        👩
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            Elena Rodriguez
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Adopted Bella (Cockatoo)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="py-24 bg-slate-900 text-white clip-path-slant relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-montserrat">
                                The ParrotNest Difference
                            </h2>
                            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                                We aren't just a shelter. We are comprehensive
                                rehabilitation and rehoming specialists.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition duration-300 border border-emerald-500/30">
                                    ⚕️
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Vet Checked
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Every bird receives full blood panels and
                                    disease testing before adoption.
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition duration-300 border border-emerald-500/30">
                                    🧠
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Behavior Assessment
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We evaluate temperament to match you with a
                                    bird that fits your lifestyle.
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition duration-300 border border-emerald-500/30">
                                    🛡️
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Health Guarantee
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    We stand by our birds with a comprehensive
                                    30-day health promise.
                                </p>
                            </div>
                            <div className="text-center group">
                                <div className="w-20 h-20 bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition duration-300 border border-emerald-500/30">
                                    🎓
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    Lifetime Support
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Access to our strict diet plans, care
                                    guides, and behavioral consultants forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter / CTA Section */}
                <div className="bg-emerald-600 py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
                        <span className="text-emerald-100 font-bold tracking-widest uppercase text-sm mb-4 block">
                            Join the Flock
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat">
                            Don't Miss New Arrivals
                        </h2>
                        <p className="text-xl text-emerald-50 mb-10">
                            Sign up for our newsletter to get alerts on new
                            rescues, care tips from our experts, and
                            heartwarming adoption updates.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-6 py-4 rounded-full text-gray-900 w-full focus:ring-4 focus:ring-emerald-400 focus:outline-none"
                            />
                            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-emerald-200/60 text-sm mt-6">
                            We respect your privacy. No spam, just parrots.
                        </p>
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
                                    {auth.user ? (
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
