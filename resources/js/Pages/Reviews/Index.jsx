import { Head, Link, useForm } from "@inertiajs/react"; // added useForm
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import { useState } from "react"; // added useState
import { motion, AnimatePresence } from "framer-motion";
import {
    RiStarFill,
    RiStarLine,
    RiUserHeartLine,
    RiMailSendLine,
    RiImageAddLine,
    RiSendPlaneFill,
    RiDoubleQuotesL,
} from "react-icons/ri";

export default function Reviews({ auth, reviews }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        reviewer_name: "",
        email: "",
        image: null,
        comment: "",
        rating: 5,
    });
    const [successMessage, setSuccessMessage] = useState(null);
    const [hoveredStar, setHoveredStar] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.store"), {
            onSuccess: () => {
                reset();
                setSuccessMessage(
                    "Thank you for your review! It will be visible after approval.",
                );
                setTimeout(() => setSuccessMessage(null), 5000); // Clear message after 5 seconds
            },
        });
    };

    // Helper to render stars
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span
                key={i}
                className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            >
                ★
            </span>
        ));
    };

    // Helper to get initials
    const getInitials = (name) => {
        if (!name) return "";
        const names = name.split(" ");
        let initials = names[0].substring(0, 1).toUpperCase();
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    return (
        <>
            <Head title="Success Stories & Reviews - ParrotNest" />
            <div className="bg-gray-50 min-h-screen font-sans text-gray-900 leading-normal tracking-normal flex flex-col">
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="bg-emerald-900 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                            Happy Families
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto text-emerald-100 drop-shadow-md">
                            Read about the heartwarming journeys of parrots
                            finding their forever homes.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
                    {/* Review Form Section */}
                    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden mb-20 max-w-4xl mx-auto transform transition-all hover:shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            {/* Left Side - Decorative */}
                            <div className="md:col-span-2 bg-gradient-to-br from-emerald-800 to-teal-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-serif font-bold mb-4">
                                        Share Your Journey
                                    </h3>
                                    <p className="text-emerald-100 leading-relaxed opacity-90">
                                        Your stories inspire us and help other
                                        families find their feathered
                                        companions.
                                    </p>
                                </div>

                                <div className="relative z-10 mt-12">
                                    <div className="flex items-center gap-3 mb-4 opacity-80">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <RiUserHeartLine className="text-xl" />
                                        </div>
                                        <span className="text-sm">
                                            Join our community
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 opacity-80">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <RiImageAddLine className="text-xl" />
                                        </div>
                                        <span className="text-sm">
                                            Show off your parrot
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="md:col-span-3 p-10 bg-white">
                                <AnimatePresence>
                                    {successMessage && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -20,
                                                height: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                height: "auto",
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -20,
                                                height: 0,
                                            }}
                                            className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl flex items-center gap-3"
                                        >
                                            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                🎉
                                            </div>
                                            <p className="font-medium text-sm">
                                                {successMessage}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                                                About You
                                            </label>
                                            <div className="relative group">
                                                <RiUserHeartLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    value={data.reviewer_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "reviewer_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                            {errors.reviewer_name && (
                                                <p className="text-red-500 text-xs mt-1 ml-1">
                                                    {errors.reviewer_name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            <div className="relative group">
                                                <RiMailSendLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                                <input
                                                    type="email"
                                                    placeholder="Email Address (Private)"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1 ml-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                                            Your Rating
                                        </label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() =>
                                                        setData("rating", star)
                                                    }
                                                    onMouseEnter={() =>
                                                        setHoveredStar(star)
                                                    }
                                                    onMouseLeave={() =>
                                                        setHoveredStar(0)
                                                    }
                                                    className="text-3xl focus:outline-none transition-transform hover:scale-110 active:scale-95"
                                                >
                                                    {star <=
                                                    (hoveredStar ||
                                                        data.rating) ? (
                                                        <RiStarFill className="text-yellow-400 drop-shadow-sm" />
                                                    ) : (
                                                        <RiStarLine className="text-gray-300" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                                            Your Story
                                        </label>
                                        <div className="relative">
                                            <RiDoubleQuotesL className="absolute left-4 top-4 text-gray-300 text-xl" />
                                            <textarea
                                                rows="4"
                                                placeholder="Tell us about your adoption experience..."
                                                value={data.comment}
                                                onChange={(e) =>
                                                    setData(
                                                        "comment",
                                                        e.target.value,
                                                    )
                                                }
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none resize-none"
                                                required
                                            ></textarea>
                                        </div>
                                        {errors.comment && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.comment}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                                            Photo (Optional)
                                        </label>
                                        <div
                                            className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${data.image ? "border-emerald-500 bg-emerald-50" : "border-gray-200 hover:border-emerald-400 hover:bg-gray-50"}`}
                                        >
                                            <input
                                                type="file"
                                                id="image"
                                                onChange={(e) =>
                                                    setData(
                                                        "image",
                                                        e.target.files[0],
                                                    )
                                                }
                                                accept="image/*"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="pointer-events-none flex flex-col items-center justify-center gap-2">
                                                <RiImageAddLine
                                                    className={`text-2xl ${data.image ? "text-emerald-600" : "text-gray-400"}`}
                                                />
                                                <span
                                                    className={`text-sm font-medium ${data.image ? "text-emerald-700" : "text-gray-500"}`}
                                                >
                                                    {data.image
                                                        ? data.image.name
                                                        : "Click to upload a photo"}
                                                </span>
                                            </div>
                                        </div>
                                        {errors.image && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.image}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/30 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                        >
                                            {processing ? (
                                                <span className="flex items-center gap-2">
                                                    <svg
                                                        className="animate-spin h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    Submit Review{" "}
                                                    <RiSendPlaneFill />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12">
                        {reviews.data.map((review, index) => (
                            <div
                                key={review.id}
                                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-2/5 min-h-[300px] md:min-h-0 relative overflow-hidden group">
                                    {review.image_path ? (
                                        <img
                                            src={`/storage/${review.image_path}`}
                                            alt={`Review by ${review.reviewer_name}`}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center">
                                            <span className="text-8xl font-serif font-bold text-emerald-200 tracking-widest select-none">
                                                {getInitials(
                                                    review.reviewer_name,
                                                )}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                    <div className="absolute bottom-6 left-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {review.parrot_species && (
                                            <span className="inline-block px-3 py-1 bg-emerald-600/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                                {review.parrot_species}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                                    {/* Quote Icon Background */}
                                    <div className="absolute top-8 right-8 text-emerald-100 font-serif text-9xl leading-none select-none pointer-events-none opacity-50">
                                        "
                                    </div>

                                    <div className="flex items-center space-x-1 mb-6 relative z-10">
                                        {renderStars(review.rating)}
                                    </div>

                                    <blockquote className="text-xl md:text-2xl text-gray-700 font-light italic mb-8 leading-relaxed relative z-10 font-serif">
                                        "{review.comment}"
                                    </blockquote>

                                    <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto relative z-10 w-full">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 text-lg">
                                                {review.reviewer_name}
                                            </span>
                                            {review.location && (
                                                <span className="text-sm text-gray-500 font-medium flex items-center mt-1">
                                                    <span className="mr-1 text-emerald-500">
                                                        📍
                                                    </span>{" "}
                                                    {review.location}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400 font-medium">
                                            {new Date(
                                                review.created_at,
                                            ).toLocaleDateString(undefined, {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {reviews.links && reviews.links.length > 3 && (
                        <div className="mt-16 flex justify-center flex-wrap gap-2">
                            {reviews.links.map((link, key) =>
                                link.url ? (
                                    <Link
                                        key={key}
                                        href={link.url}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            link.active
                                                ? "bg-emerald-600 text-white shadow-md"
                                                : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200"
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        key={key}
                                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 border border-gray-100 bg-gray-50"
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
