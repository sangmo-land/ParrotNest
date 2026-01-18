import { Head } from '@inertiajs/react';
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";

export default function Shop({ auth }) {
    return (
        <>
            <Head title="Shop - ParrotNest" />
            <div className="bg-gray-50 min-h-screen flex flex-col">
                <PublicNavbar auth={auth} />
                
                <div className="flex-grow flex items-center justify-center p-4">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="text-6xl mb-6">🛍️</div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                            ParrotNest Shop
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            We are building a curated marketplace for the best parrot food, toys, and cages.
                            Check back soon!
                        </p>
                        <div className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full font-semibold border border-emerald-200">
                            Coming Soon
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
