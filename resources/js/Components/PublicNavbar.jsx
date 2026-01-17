import { Link, usePage } from "@inertiajs/react";

export default function PublicNavbar({ auth }) {
    const { contact } = usePage().props;

    return (
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
                                <img
                                    src="/images/LogoParrot.jpeg"
                                    alt="ParrotNest Logo"
                                    className="h-24 w-24 object-contain"
                                />
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
                                    {contact?.phone}
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
                                            Register
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

                        {/* Mobile Auth Links */}
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white bg-emerald-900 hover:bg-emerald-800 rounded-full transition-all duration-300 border border-transparent"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-emerald-800 bg-white hover:bg-gray-100 rounded-full transition-all duration-300 border border-transparent"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
