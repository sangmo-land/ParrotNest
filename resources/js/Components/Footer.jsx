import { Link, usePage } from '@inertiajs/react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    const { auth, contact } = usePage().props;

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <img
                                src="/images/LogoParrot.jpeg"
                                alt="Logo"
                                className="w-12 h-12 rounded-full"
                            />
                            ParrotNest
                        </h3>
                        <p className="text-gray-300">
                            Connecting rescued parrots with loving forever
                            homes.
                        </p>
                        <div className="mt-4">
                            <img
                                src="/images/footerAdd.jpeg"
                                alt="Parrot Nest Feature"
                                className="w-full max-w-[200px] rounded-lg shadow-md hover:opacity-90 transition-opacity"
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
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
                        <p className="text-gray-300">Email: {contact?.email}</p>
                        <p className="text-gray-300 mt-2">
                            Phone: {contact?.phone}
                        </p>

                        {/* Social Links */}
                        <div className="mt-6">
                            <h5 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                                Follow Us
                            </h5>
                            <div className="flex space-x-4">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/share/1KKHsfGFMA/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={32} />
                                </a>

                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/parrotnest0?igsh=MXdlNDRsNmt6NnUwMg%3D%3D&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={32} />
                                </a>

                                {/* TikTok */}
                                <a
                                    href="https://www.tiktok.com/@parrotnest0?_r=1&_t=ZM-939fRwB7SH6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
                                    aria-label="TikTok"
                                >
                                    <FaTiktok size={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <div className="flex flex-col items-center">
                        <h5 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">
                            We Accept
                        </h5>
                        <div className="flex flex-wrap justify-center gap-4">
                            {/* Visa */}
                            <div
                                className="bg-white rounded-md p-2 flex items-center justify-center"
                                title="Visa"
                            >
                                <svg
                                    className="w-10 h-6"
                                    viewBox="0 0 48 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.5 21.5H16.3L18.4 10.5H21.6L19.5 21.5Z"
                                        fill="#1A1F71"
                                    />
                                    <path
                                        d="M31.1 10.8C30.4 10.5 29.3 10.2 28 10.2C24.8 10.2 22.6 11.8 22.6 14.1C22.6 15.8 24.1 16.7 25.3 17.3C26.5 17.9 26.9 18.3 26.9 18.8C26.9 19.6 25.9 19.9 25 19.9C23.7 19.9 23 19.7 21.9 19.2L21.5 19L21.1 21.6C21.9 22 23.4 22.3 24.9 22.3C28.3 22.3 30.5 20.7 30.5 18.3C30.5 17 29.7 16 27.9 15.2C26.8 14.6 26.1 14.2 26.1 13.6C26.1 13.1 26.7 12.5 28 12.5C29.1 12.5 29.9 12.7 30.5 13L30.8 13.1L31.1 10.8Z"
                                        fill="#1A1F71"
                                    />
                                    <path
                                        d="M36.3 10.5H33.9C33.2 10.5 32.6 10.7 32.3 11.4L27.5 21.5H30.9L31.6 19.5H35.7L36.1 21.5H39.1L36.3 10.5ZM32.6 17.2C32.9 16.5 34.1 13.4 34.1 13.4C34.1 13.4 34.4 12.6 34.6 12.1L34.8 13.3C34.8 13.3 35.5 16.5 35.7 17.2H32.6Z"
                                        fill="#1A1F71"
                                    />
                                    <path
                                        d="M14.6 10.5L11.5 17.9L11.1 16C10.5 14.2 8.8 12.2 6.9 11.1L9.8 21.5H13.3L18.1 10.5H14.6Z"
                                        fill="#1A1F71"
                                    />
                                    <path
                                        d="M9.1 10.5H3.8L3.7 10.8C7.8 11.8 10.6 14.4 11.4 17.4L10.5 11.5C10.4 10.8 9.8 10.5 9.1 10.5Z"
                                        fill="#F9A533"
                                    />
                                </svg>
                            </div>
                            {/* Mastercard */}
                            <div
                                className="bg-white rounded-md p-2 flex items-center justify-center"
                                title="Mastercard"
                            >
                                <svg
                                    className="w-10 h-6"
                                    viewBox="0 0 48 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="18"
                                        cy="16"
                                        r="10"
                                        fill="#EB001B"
                                    />
                                    <circle
                                        cx="30"
                                        cy="16"
                                        r="10"
                                        fill="#F79E1B"
                                    />
                                    <path
                                        d="M24 8.5C26.4 10.3 28 13 28 16C28 19 26.4 21.7 24 23.5C21.6 21.7 20 19 20 16C20 13 21.6 10.3 24 8.5Z"
                                        fill="#FF5F00"
                                    />
                                </svg>
                            </div>
                            {/* American Express */}
                            <div
                                className="bg-[#016FD0] rounded-md p-1.5 flex items-center justify-center"
                                title="American Express"
                            >
                                <svg
                                    className="w-10 h-7"
                                    viewBox="0 0 40 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <text
                                        x="38"
                                        y="12"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="10"
                                        fontWeight="bold"
                                        fontFamily="Arial Black, sans-serif"
                                        letterSpacing="-0.5"
                                    >
                                        AM
                                    </text>
                                    <text
                                        x="38"
                                        y="23"
                                        textAnchor="end"
                                        fill="white"
                                        fontSize="10"
                                        fontWeight="bold"
                                        fontFamily="Arial Black, sans-serif"
                                        letterSpacing="-0.5"
                                    >
                                        EX
                                    </text>
                                </svg>
                            </div>
                            {/* PayPal */}
                            <div
                                className="bg-white rounded-md p-2 flex items-center justify-center"
                                title="PayPal"
                            >
                                <svg
                                    className="w-10 h-6"
                                    viewBox="0 0 48 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.5 24.5H15.3L15.8 21.5H13.3C12.8 21.5 12.4 21.1 12.5 20.6L14.5 8.5H21C23.5 8.5 25.2 9.8 24.8 12.3C24.3 15.3 22 16.5 19.5 16.5H17.5L16.5 22.5C16.4 23.1 15.9 23.5 15.3 23.5"
                                        fill="#003087"
                                    />
                                    <path
                                        d="M22.5 24.5H19.3L19.8 21.5H17.3C16.8 21.5 16.4 21.1 16.5 20.6L18.5 8.5H25C27.5 8.5 29.2 9.8 28.8 12.3C28.3 15.3 26 16.5 23.5 16.5H21.5L20.5 22.5C20.4 23.1 19.9 23.5 19.3 23.5"
                                        fill="#009CDE"
                                    />
                                </svg>
                            </div>
                            {/* Apple Pay */}
                            <div
                                className="bg-white rounded-md p-2 flex items-center justify-center gap-0.5"
                                title="Apple Pay"
                            >
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                                </svg>
                                <span className="text-black text-sm font-semibold">
                                    Pay
                                </span>
                            </div>
                            {/* Google Pay */}
                            <div
                                className="bg-white rounded-md p-2 flex items-center justify-center gap-0.5"
                                title="Google Pay"
                            >
                                <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                <span className="text-gray-600 text-sm font-semibold">
                                    Pay
                                </span>
                            </div>
                            {/* Shop Pay */}
                            <div
                                className="bg-[#5A31F4] rounded-md p-2 flex items-center justify-center"
                                title="Shop Pay"
                            >
                                <span className="text-white text-xs font-bold">
                                    Shop
                                </span>
                            </div>
                            {/* UnionPay */}
                            <div
                                className="bg-gradient-to-r from-[#E21836] via-[#00447C] to-[#00447C] rounded-md p-2 flex items-center justify-center"
                                title="UnionPay"
                            >
                                <span className="text-white text-xs font-bold w-10 text-center">
                                    UnionPay
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p className="text-gray-400">
                        &copy; 2026 ParrotNest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
