import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";

export default function ContactUs({ auth }) {
    const { contact } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        
        post(route("contact.store"), {
            onSuccess: () => {
                reset();
                setSuccessMessage(
                    "Thank you for reaching out! We will get back to you shortly.",
                );
            },
        });
    };

    return (
        <>
            <Head title="Contact Us - ParrotNest" />
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section - Consistent with AboutUs & Welcome */}
                <PublicNavbar auth={auth} />

                <main>
                    {/* Hero Section */}
                    <div className="bg-emerald-50 py-16 md:py-24">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center max-w-3xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                                    Get in Touch
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Have questions about adoption, care, or our
                                    services? We're here to help you find your
                                    perfect feathered companion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Content */}
                    <div className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                {/* Left Column: Contact Info & Map */}
                                <div>
                                    <div className="mb-12">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-montserrat">
                                            Contact Information
                                        </h2>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-emerald-50 p-3 rounded-lg text-emerald-600">
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">
                                                        Visit Our Sanctuary
                                                    </h3>
                                                    <p className="text-gray-600 mt-1 whitespace-pre-line">
                                                        {contact?.address}
                                                    </p>
                                                    <p className="text-sm text-emerald-600 font-semibold mt-2">
                                                        By Appointment Only
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">
                                                        Call Us
                                                    </h3>
                                                    <p className="text-gray-600 mt-1">
                                                        {contact?.phone}
                                                    </p>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {
                                                            contact?.available_hours
                                                        }
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4">
                                                <div className="bg-purple-50 p-3 rounded-lg text-purple-600">
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900">
                                                        Email Us
                                                    </h3>
                                                    <p className="text-gray-600 mt-1">
                                                        {contact?.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="bg-gray-100 h-64 rounded-2xl overflow-hidden relative shadow-inner">
                                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                            <div className="text-center text-gray-500">
                                                <svg
                                                    className="w-12 h-12 mx-auto mb-2 opacity-50"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7m0 0L9.5 4.5"
                                                    />
                                                </svg>
                                                <span className="font-semibold tracking-wider">
                                                    MAP VIEW
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Contact Form */}
                                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 lg:p-10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
                                        Send us a Message
                                    </h2>
                                    <p className="text-gray-500 mb-8">
                                        We usually respond within 24 hours.
                                    </p>

                                    {successMessage && (
                                        <div className="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center">
                                            <svg
                                                className="w-5 h-5 mr-2"
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
                                            {successMessage}
                                        </div>
                                    )}

                                    <form
                                        onSubmit={submit}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="John Doe"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors bg-gray-50 focus:bg-white"
                                                placeholder="john@example.com"
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 transition-colors bg-gray-50 focus:bg-white h-32 resize-none"
                                                placeholder="How can we help you?"
                                                value={data.message}
                                                onChange={(e) =>
                                                    setData(
                                                        "message",
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="w-full bg-emerald-600 text-white font-bold py-4 rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer Section - Consistent with AboutUs & Welcome */}
                <Footer />
            </div>
        </>
    );
}
