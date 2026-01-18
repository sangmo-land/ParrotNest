import { Head, Link, router, usePage } from "@inertiajs/react";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    RiShoppingCartLine,
    RiSearchLine,
    RiFilter3Line,
} from "react-icons/ri";

export default function Shop({ auth, products, categories, filters }) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || "all",
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        router.get(
            "/shop",
            { category: category === "all" ? undefined : category },
            {
                preserveState: true,
                preserveScroll: true,
                only: ["products", "filters"],
            },
        );
    };

    // Helper to resolve image URLs
    const getImageUrl = (image) => {
        if (!image) return "/images/placeholder.jpg"; // Fallback
        if (image.startsWith("http")) return image;
        return `/storage/${image}`;
    };

    return (
        <>
            <Head title="Shop - ParrotNest" />
            <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="bg-emerald-900 text-white py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold mb-4 font-montserrat tracking-tight"
                        >
                            Essentials for Your Feathered Friends
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-emerald-100 max-w-2xl mx-auto"
                        >
                            High-quality cages, perches, and accessories.
                        </motion.p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                    {/* Filters & Control Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-200 gap-4">
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                            <button
                                onClick={() => handleCategoryChange("all")}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                    selectedCategory === "all"
                                        ? "bg-emerald-600 text-white shadow-md"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                            >
                                All Products
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all whitespace-nowrap ${
                                        selectedCategory === cat
                                            ? "bg-emerald-600 text-white shadow-md"
                                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="text-gray-500 text-sm font-medium">
                            Showing {products.length} results
                        </div>
                    </div>

                    {/* Product Grid */}
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {products.map((product, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.05,
                                        }}
                                        key={product.id}
                                        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                            <img
                                                src={getImageUrl(product.image)}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
                                                {product.description}
                                            </p>

                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-2xl font-bold text-emerald-600">
                                                    $
                                                    {parseFloat(
                                                        product.price,
                                                    ).toFixed(2)}
                                                </span>
                                                <Link
                                                    href={`/contact?inquiry=${product.slug}`}
                                                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-600 transition-colors duration-300"
                                                >
                                                    <RiShoppingCartLine className="w-4 h-4" />
                                                    Buy Now
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <RiSearchLine className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                No products found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your category filter.
                            </p>
                            <button
                                onClick={() => handleCategoryChange("all")}
                                className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700 underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
}
