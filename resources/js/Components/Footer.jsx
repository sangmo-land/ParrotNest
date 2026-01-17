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
                    <p>&copy; 2026 ParrotNest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
