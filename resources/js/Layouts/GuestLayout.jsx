import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-emerald-900">
                <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-black/20"></div>
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 text-white">
                    <div>
                        <Link href="/">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/images/LogoParrot.jpeg"
                                    alt="Logo"
                                    className="h-12 w-12 rounded-full border-2 border-white/20"
                                />
                                <span className="text-2xl font-bold tracking-tight">
                                    ParrotNest
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <blockquote className="text-2xl font-serif italic leading-relaxed mb-4">
                            "Adopting a parrot isn't just about bringing a bird
                            home; it's about inviting a new personality, a new
                            friend, and a new soul into your life."
                        </blockquote>
                        <p className="font-semibold text-emerald-200">
                            — The ParrotNest Team
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 md:px-24 py-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-md lg:hidden mb-10 text-center">
                    <Link href="/" className="inline-block">
                        <ApplicationLogo className="h-20 w-20 mx-auto" />
                    </Link>
                </div>

                <div className="w-full max-w-md mx-auto">{children}</div>

                <div className="mt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} ParrotNest. All rights
                    reserved.
                </div>
            </div>
        </div>
    );
}
