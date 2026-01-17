import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import Footer from "@/Components/Footer";

export default function DeliveryShipping({ auth }) {
    return (
        <>
            <Head title="Delivery & Shipping - ParrotNest" />
            <div className="bg-white min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                {/* Navigation */}
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="min-h-[500px] bg-slate-900 relative flex items-center overflow-hidden">
                    {/* Animated World Map Background (Abstract) */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1000 500"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M150,150 Q200,100 250,150 T350,150"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                className="animate-pulse opacity-50"
                            />
                            <path
                                d="M550,250 Q600,200 650,250 T750,250"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                className="animate-pulse opacity-50"
                            />
                            <circle
                                cx="150"
                                cy="150"
                                r="4"
                                fill="white"
                                className="animate-ping"
                            />
                            <circle
                                cx="350"
                                cy="150"
                                r="4"
                                fill="white"
                                className="animate-ping"
                                style={{ animationDelay: "1s" }}
                            />
                            <circle
                                cx="750"
                                cy="250"
                                r="4"
                                fill="white"
                                className="animate-ping"
                                style={{ animationDelay: "2s" }}
                            />
                        </svg>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-slate-900/95 to-slate-900 z-10"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-emerald-300 font-bold tracking-widest uppercase text-xs">
                                Nationwide Network Active
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-montserrat tracking-tight mb-8">
                            Safe Wings{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                                Transit
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
                            First-class travel for your feathered family member.{" "}
                            <br className="hidden md:block" />
                            Stress-free, climate-controlled, and handled with
                            love.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-30 -mt-20 pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Intro Section with Image */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-24 border border-gray-100">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative h-96 lg:h-auto">
                                    <img
                                        src="/images/shipping.jpg"
                                        alt="Safe Parrot Shipping"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                                </div>
                                <div className="p-10 lg:p-14 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-800 font-bold tracking-wide text-xs uppercase mb-6 self-start">
                                        Safety First
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                                        Priority Care Transport
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                        At The Parrot Nest, we take bird
                                        transport seriously. Whether it’s a
                                        local relocation or a long-distance
                                        adoption, every parrot travels in a
                                        secure, species-appropriate carrier with
                                        comfort and safety as our top priority.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                        We coordinate each delivery with care —
                                        from temperature control to travel
                                        timing — and we only work with trusted
                                        partners who understand the unique needs
                                        of exotic birds.
                                    </p>

                                    <div className="space-y-4">
                                        <h3 className="font-bold text-gray-900 text-lg">
                                            What you can expect:
                                        </h3>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {[
                                                "Safe, clean, and labeled carriers for every bird",
                                                "Real-time updates during transit",
                                                "Arrival coordination to ensure a smooth handoff",
                                                "Optional delivery for toys, food, and accessories",
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center text-gray-700"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 13l4 4L19 7"
                                                        ></path>
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-gray-100 italic text-emerald-700 font-medium">
                                        "Your parrot’s journey to their forever
                                        home starts with love — and arrives with
                                        peace of mind."
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3-Step Process (Enhanced Cards) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                            {/* Step 1 */}
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                                <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-emerald-100 p-4 rounded-xl text-4xl">
                                            🗺️
                                        </div>
                                        <span className="text-6xl font-black text-gray-800 font-montserrat -mt-4 -mr-2">
                                            01
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                                        Detailed Coordination
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        Our flight nanny team maps the safest
                                        possible route. We verify weather
                                        conditions at both departure and arrival
                                        points to ensure a smooth,
                                        turbulence-free schedule.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                                <div className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-cyan-100 p-4 rounded-xl text-4xl">
                                            ✈️
                                        </div>
                                        <span className="text-6xl font-black text-gray-800 font-montserrat -mt-4 -mr-2">
                                            02
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                                        First-Class Journey
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        Parrots travel in specialized,
                                        climate-controlled carriers with ample
                                        food and water-gel hydration. For air
                                        travel, they fly in pressurized,
                                        temperature-regulated cabins.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                                <div className="h-2 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="bg-indigo-100 p-4 rounded-xl text-4xl">
                                            🏡
                                        </div>
                                        <span className="text-6xl font-black text-gray-800 font-montserrat -mt-4 -mr-2">
                                            03
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                                        Safe Homecoming
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                        We notify you the moment the flight
                                        lands. You'll receive a full post-travel
                                        acclimatization guide to help your new
                                        companion settle into their forever home
                                        stress-free.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Cards Section */}
                        <div className="mb-24">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-gray-900 font-montserrat">
                                    Choose Your Class
                                </h2>
                                <p className="text-gray-500 mt-2">
                                    Transparent pricing with no hidden handling
                                    fees.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Local */}
                                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                                    <div className="text-center">
                                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                            🚚
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            Local Delivery
                                        </h3>
                                        <div className="my-4">
                                            <span className="text-4xl font-bold text-emerald-600">
                                                $50-100
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-6">
                                            Within 50 miles of our center
                                        </p>
                                        <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Same Day Delivery
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Personal Hand-off
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Cargo */}
                                <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl transform scale-105 border-2 border-emerald-500 relative">
                                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                                    <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded">
                                        MOST POPULAR
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-emerald-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                            ✈️
                                        </div>
                                        <h3 className="text-xl font-bold">
                                            Delta Cargo
                                        </h3>
                                        <div className="my-4">
                                            <span className="text-4xl font-bold text-white">
                                                $180-250
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400 mb-6">
                                            Airport to Airport (United States)
                                        </p>
                                        <ul className="text-left space-y-3 mb-8 text-sm text-slate-300">
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-400 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Fastest Long Distance
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-400 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Climate Controlled Cargo
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-400 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Tracking Number Included
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* VIP */}
                                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                                    <div className="text-center">
                                        <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                            🎩
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            VIP Pet Nanny
                                        </h3>
                                        <div className="my-4">
                                            <span className="text-4xl font-bold text-emerald-600">
                                                $400+
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-6">
                                            Door to Door Personal Service
                                        </p>
                                        <ul className="text-left space-y-3 mb-8 text-sm text-gray-600">
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                In-Cabin Escort
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Photo Updates En Route
                                            </li>
                                            <li className="flex items-center">
                                                <svg
                                                    className="w-5 h-5 text-emerald-500 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                                Zero Stress Handling
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Safety Standards (Dark Strip) */}
                        <div className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden mb-24">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                <svg
                                    width="400"
                                    height="400"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                                </svg>
                            </div>

                            <div className="relative z-10 md:flex items-center justify-between gap-12">
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
                                        Safety Beyond Industry Standards
                                    </h2>
                                    <p className="text-slate-300 mb-8 leading-relaxed">
                                        We don't cut corners. Our shipping
                                        protocols are designed by avian
                                        veterinarians to ensure your bird
                                        arrives healthy and hydrated.
                                    </p>
                                    <div className="bg-rose-500/20 border border-rose-500/30 p-4 rounded-xl flex items-start">
                                        <div className="text-2xl mr-4">🌡️</div>
                                        <div>
                                            <h4 className="text-rose-200 font-bold text-sm uppercase tracking-wide mb-1">
                                                Temperature Lock
                                            </h4>
                                            <p className="text-rose-100/80 text-sm">
                                                We strictly ground flights if
                                                temps are below 35°F or above
                                                85°F at any waypoint.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 grid grid-cols-1 gap-4 mt-8 md:mt-0">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center">
                                        <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-white font-semibold">
                                            IATA Compliant Carriers
                                        </span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center">
                                        <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-white font-semibold">
                                            10-Day Health Certificate
                                        </span>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center">
                                        <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <span className="text-white font-semibold">
                                            Live Flight Tracking
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Accordion Style */}
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-montserrat">
                                Common Questions
                            </h2>
                            <div className="space-y-4">
                                <details className="group bg-white rounded-xl shadow-sm border border-gray-100 open:shadow-lg transition-all duration-300">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-gray-800">
                                        <span>
                                            Is it stressful for the bird?
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 px-6 pb-6 pt-0 leading-relaxed">
                                        We design the experience to be as
                                        low-stress as possible. Birds are
                                        naturally securely contained in darkness
                                        during the flight which triggers a
                                        roosting (sleeping) instinct.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-xl shadow-sm border border-gray-100 open:shadow-lg transition-all duration-300">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-gray-800">
                                        <span>
                                            What if the flight is delayed?
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 px-6 pb-6 pt-0 leading-relaxed">
                                        Our team monitors flights 24/7. If a
                                        delay occurs, the bird stays in a
                                        climate-controlled holding area at the
                                        cargo facility, fed and watered by
                                        airline staff trained in live animal
                                        care.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-xl shadow-sm border border-gray-100 open:shadow-lg transition-all duration-300">
                                    <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-lg text-gray-800">
                                        <span>
                                            Do I get to keep the carrier?
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height="24"
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width="24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="text-gray-600 px-6 pb-6 pt-0 leading-relaxed">
                                        Yes! The IATA-approved travel kennel is
                                        yours to keep. It's great for future vet
                                        visits or emergencies.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
