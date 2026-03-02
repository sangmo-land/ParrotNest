import { Head, Link, useForm } from "@inertiajs/react";
import SEO, { jsonLdGenerators } from "@/Components/SEO";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Welcome({
    auth,
    featuredParrots = [],
    stats = {},
    successStories = [],
}) {
    // Newsletter Form
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        email: "",
    });

    const submitNewsletter = (e) => {
        e.preventDefault();
        post(route("subscribe"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <>
            <SEO
                title="ParrotNest - Adopt a Parrot | Rescue & Rehome Parrots"
                description="Find your perfect feathered companion at ParrotNest. We rescue, rehabilitate, and rehome parrots in need. Browse available parrots and start your adoption journey today."
                keywords="parrot adoption, adopt a parrot, rescue parrots, parrot rehoming, pet parrots, bird adoption, parrot sanctuary"
                jsonLd={[
                    jsonLdGenerators.organization(),
                    jsonLdGenerators.website(),
                    jsonLdGenerators.localBusiness(),
                ]}
            />
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section - Divided into Two Rows */}
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="relative bg-gray-900 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-40 scale-x-[-1]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-transparent"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-center md:text-left max-w-3xl"
                        >
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
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
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
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-white py-12 border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                        >
                            <motion.div variants={fadeInUp}>
                                <div className="text-4xl font-bold text-emerald-600">
                                    {stats.total_parrots || 0}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Parrots Available
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <div className="text-4xl font-bold text-emerald-600">
                                    {stats.species_count || 0}
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Species
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <div className="text-4xl font-bold text-emerald-600">
                                    500+
                                </div>
                                <div className="text-gray-600 mt-2">
                                    Securely Adopted
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Featured Parrots Section */}
                <div className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Featured Parrots
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Meet some of our wonderful birds looking for
                                homes
                            </p>
                        </motion.div>

                        {featuredParrots.length > 0 ? (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-6"
                            >
                                {featuredParrots.map((parrot) => (
                                    <motion.div
                                        variants={fadeInUp}
                                        key={parrot.id}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-1 flex flex-col border border-stone-100"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                                            <Link href={`/parrots/${parrot.id}`}>
                                                {parrot.images &&
                                                parrot.images.length > 0 ? (
                                                    <img
                                                        src={`/storage/${parrot.images[0]}`}
                                                        alt={parrot.name}
                                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center text-stone-300 bg-stone-50">
                                                        <span className="text-6xl mb-2 opacity-20">
                                                            🦜
                                                        </span>
                                                        <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                                                            No Image
                                                        </span>
                                                    </div>
                                                )}
                                            </Link>

                                            {/* Availability Badge */}
                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-stone-800 shadow-lg flex items-center gap-1.5 border border-white/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Available
                                                </span>
                                            </div>

                                            {/* Price Badge Overlay (Bottom Right) */}
                                            <div className="absolute bottom-3 right-3 z-10">
                                                <span className="bg-stone-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg border border-white/10 group-hover:bg-[#D4AF37] transition-colors duration-300">
                                                    $
                                                    {Number(
                                                        parrot.adoption_fee,
                                                    ).toLocaleString()}
                                                </span>
                                            </div>

                                            {/* Overlay Gradient on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-1 relative">
                                            <div className="mb-3 text-center">
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                                                    {parrot.species?.name}
                                                </p>
                                                <h2 className="text-lg font-serif font-bold text-stone-900 group-hover:text-[#D4AF37] transition-colors mb-2 leading-tight">
                                                    <Link
                                                        href={`/parrots/${parrot.id}`}
                                                    >
                                                        {parrot.name}
                                                    </Link>
                                                </h2>
                                                <div className="w-8 h-0.5 bg-stone-100 mx-auto rounded-full group-hover:bg-[#D4AF37]/30 transition-colors duration-500"></div>
                                            </div>

                                            {/* Trait Grid */}
                                            <div className="grid grid-cols-2 gap-2 mb-4">
                                                <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100">
                                                    <span className="text-base">
                                                        {parrot.gender === "Male"
                                                            ? "💙"
                                                            : "🩷"}
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-wider">
                                                            Gender
                                                        </span>
                                                        <span className="text-[11px] font-bold text-stone-800">
                                                            {parrot.gender}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100">
                                                    <span className="text-base">
                                                        🎂
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-wider">
                                                            Age
                                                        </span>
                                                        <span className="text-[11px] font-bold text-stone-800">
                                                            {parrot.age} Yrs
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100">
                                                    <span className="text-base">
                                                        ✨
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-wider">
                                                            Mood
                                                        </span>
                                                        <span className="text-[11px] font-bold text-stone-800 truncate w-16">
                                                            {parrot.personality
                                                                ? parrot.personality.split(",")[0]
                                                                : "Sweet"}
                                                        </span>
                                                    </div>
                                                </div>

                                                {parrot.comes_with_cage ? (
                                                    <div className="flex items-center gap-2 p-2 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/20">
                                                        <span className="text-base">
                                                            🏠
                                                        </span>
                                                        <div className="flex flex-col">
                                                            <span className="text-[8px] font-bold text-[#D4AF37] uppercase tracking-wider">
                                                                Bonus
                                                            </span>
                                                            <span className="text-[11px] font-bold text-stone-800">
                                                                Cage Inc.
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100">
                                                        <span className="text-base">
                                                            🩺
                                                        </span>
                                                        <div className="flex flex-col">
                                                            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-wider">
                                                                Health
                                                            </span>
                                                            <span className="text-[11px] font-bold text-stone-800">
                                                                Checked
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-auto">
                                                <Link
                                                    href={`/parrots/${parrot.id}`}
                                                    className="block w-full py-2.5 bg-stone-900 text-white text-center font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-[#D4AF37] transition-all transform active:scale-95 shadow-lg shadow-stone-200 hover:shadow-[#D4AF37]/30 relative overflow-hidden group/btn"
                                                >
                                                    <span className="relative z-10">
                                                        Meet {parrot.name}
                                                    </span>
                                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12 bg-white rounded-lg"
                            >
                                <p className="text-gray-500 text-lg">
                                    No featured parrots available at the moment.
                                </p>
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center mt-12"
                        >
                            <Link
                                href="/parrots"
                                className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition"
                            >
                                View All Parrots
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How Adoption Works
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Simple steps to welcome a parrot into your home
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-4 gap-8"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="text-center"
                            >
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
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className="text-center"
                            >
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
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className="text-center"
                            >
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
                            </motion.div>
                            <motion.div
                                variants={fadeInUp}
                                className="text-center"
                            >
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
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Happy Beaks - Testimonials Section */}
                <div className="py-20 bg-gray-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
                                Success Stories
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                                Happy Beaks
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {successStories.length > 0 ? (
                                successStories.map((review, index) => (
                                    <motion.div
                                        key={review.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.1 * (index + 1),
                                        }}
                                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-emerald-50"
                                    >
                                        <div className="flex text-emerald-500 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-5 h-5 ${
                                                        i < review.rating
                                                            ? "fill-current"
                                                            : "text-gray-300 fill-current"
                                                    }`}
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 italic mb-6">
                                            "{review.comment}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            {review.image_path ? (
                                                <img
                                                    src={`/storage/${review.image_path}`}
                                                    alt={review.reviewer_name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                                                    👤
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-gray-900">
                                                    {review.reviewer_name}
                                                </h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center text-gray-500 italic">
                                    No success stories yet. Check back soon!
                                </div>
                            )}
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

                        <div className="max-w-lg mx-auto">
                            <form
                                onSubmit={submitNewsletter}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <div className="w-full">
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Enter your email address"
                                        className="px-6 py-4 rounded-full text-gray-900 w-full focus:ring-4 focus:ring-emerald-400 focus:outline-none"
                                        required
                                    />
                                    {errors.email && (
                                        <div className="text-red-200 text-sm mt-1 text-left pl-4">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition shadow-lg whitespace-nowrap disabled:opacity-75"
                                >
                                    {processing
                                        ? "Subscribing..."
                                        : "Subscribe"}
                                </button>
                            </form>

                            <AnimatePresence>
                                {recentlySuccessful && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-4 bg-emerald-800/50 text-emerald-100 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-500/30"
                                    >
                                        🎉 Thanks for subscribing! Check your
                                        inbox.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <p className="text-emerald-200/60 text-sm mt-6">
                            We respect your privacy. No spam, just parrots.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
