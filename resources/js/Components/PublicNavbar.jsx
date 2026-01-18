import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiShoppingCartLine } from "react-icons/ri";

export default function PublicNavbar({ auth }) {
    const { contact } = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

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
                                <Link
                                    href="/shop"
                                    className="text-gray-700 hover:text-emerald-600 font-semibold px-2 py-2"
                                    title="Shop"
                                >
                                    <RiShoppingCartLine className="w-6 h-6" />
                                </Link>
                                {auth.user ? (
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                                    >
                                        Sign Out
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

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-2">
                            <Link
                                href="/shop"
                                className="text-gray-600 hover:text-emerald-600 transition p-2"
                            >
                                <RiShoppingCartLine className="w-6 h-6" />
                            </Link>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 focus:outline-none transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-8 w-8"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !isOpen ? "inline-flex" : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            isOpen ? "inline-flex" : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: Main Navigation Bar (Emerald Section) - Visible on Desktop AND Mobile (Simplified) */}
            <div className="hidden lg:block bg-emerald-700 text-white shadow-md">
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
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="font-montserrat px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-white bg-emerald-900 hover:bg-emerald-800 rounded-full transition-all duration-300 border border-transparent"
                            >
                                Sign Out
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

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden block bg-white border-t border-gray-100 absolute w-full left-0 z-40 shadow-2xl overflow-hidden"
                    >
                        <div className="pt-2 pb-6 px-4 space-y-2 max-h-[85vh] overflow-y-auto custom-scrollbar">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                            >
                                <span className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </span>
                                <span>Home</span>
                            </Link>

                            <Link
                                href="/parrots"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                            >
                                <span className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                                <span>Available Parrots</span>
                            </Link>

                            <Link
                                href="/about-breeds"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
                            >
                                <span className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </span>
                                <span>About Breeds</span>
                            </Link>

                            {/* Separator */}
                            <hr className="border-gray-100 my-2" />

                            <div className="grid grid-cols-2 gap-2">
                                {/* Services Column */}
                                <div>
                                    <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        Services
                                    </div>
                                    <Link
                                        href="/health-guarantee"
                                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-800 hover:bg-gray-50 rounded-md transition"
                                    >
                                        Health Guarantee
                                    </Link>
                                    <Link
                                        href="/delivery-shipping"
                                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-800 hover:bg-gray-50 rounded-md transition"
                                    >
                                        Delivery Info
                                    </Link>
                                </div>

                                {/* Care Center Column */}
                                <div>
                                    <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        Care Center
                                    </div>
                                    <Link
                                        href="/care-guide"
                                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-800 hover:bg-gray-50 rounded-md transition"
                                    >
                                        Care Guide
                                    </Link>
                                    <Link
                                        href="/feeding-tips"
                                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-800 hover:bg-gray-50 rounded-md transition"
                                    >
                                        Feeding Tips
                                    </Link>
                                </div>
                            </div>

                            {/* Company Section */}
                            <div className="mt-2">
                                <div className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-emerald-600 uppercase tracking-widest">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                    Company
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <Link
                                        href="/reviews"
                                        className="block px-4 py-2 text-sm font-center text-center font-medium text-gray-600 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-md border border-gray-100 transition"
                                    >
                                        Reviews
                                    </Link>
                                    <Link
                                        href="/about-us"
                                        className="block px-4 py-2 text-sm font-center text-center font-medium text-gray-600 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-md border border-gray-100 transition"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2 text-sm font-center text-center font-medium text-gray-600 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 rounded-md border border-gray-100 transition"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Auth */}
                            <div className="bg-gray-50 rounded-xl p-4 mt-6 border border-gray-100">
                                {auth.user ? (
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center space-x-3 px-2">
                                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                                                {auth.user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">
                                                    {auth.user.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {auth.user.email}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="w-full bg-white text-gray-700 border border-gray-200 text-center py-2.5 rounded-lg font-bold hover:bg-gray-50 transition"
                                        >
                                            Log Out
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex gap-3">
                                        <Link
                                            href={route("login")}
                                            className="flex-1 text-center py-3 rounded-lg font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="flex-1 text-center py-3 rounded-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
