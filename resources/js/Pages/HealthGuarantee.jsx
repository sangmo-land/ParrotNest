import { Head } from "@inertiajs/react";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";

export default function HealthGuarantee({ auth }) {
    return (
        <>
            <Head title="Health Guarantee - ParrotNest" />
            <div className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="relative bg-slate-900 py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    {/* Abstract colorful blobs for atmosphere */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
                        <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-emerald-300 font-bold tracking-[0.2em] text-xs uppercase mb-8 backdrop-blur-md">
                            Our Promise to You
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black font-montserrat mb-8 tracking-tighter leading-tight">
                            Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Guarantee</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
                            We don't just sell birds; we raise family members. Every adoption is backed by our comprehensive health assurance.
                        </p>
                    </div>
                </div>

                {/* Main Content Container */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-20 pb-24">
                    
                    {/* The Promise Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16 border border-slate-100">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2"></div>
                        <div className="p-10 md:p-14 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-montserrat">The ParrotNest Standard</h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                                At ParrotNest, the health and well-being of our birds is our absolute highest priority. 
                                All our babies are hand-fed, meticulously socialized, and vet-checked to assure you receive a healthy, happy companion ready to bond with your family.
                            </p>
                        </div>
                    </div>

                    {/* Guarantees Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* 72-Hour Card */}
                        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12 border border-slate-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-48 h-48 text-emerald-600 transform translate-x-10 -translate-y-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-8 text-emerald-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">72-Hour Initial Guarantee</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    We guarantee that your parrot is in peak health at the moment of adoption. You have <strong>72 hours</strong> to have your new companion examined by a licensed avian veterinarian.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-600">
                                        <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-lg">Full refund or replacement for pre-existing conditions</span>
                                    </li>
                                    <li className="flex items-start text-slate-600">
                                        <svg className="w-6 h-6 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-lg">Written diagnosis required</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 1-Year Genetic Card */}
                        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12 border border-slate-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg className="w-48 h-48 text-blue-600 transform translate-x-10 -translate-y-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-montserrat">1-Year Genetic Guarantee</h3>
                                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                    We stand by our genetics. We provide a full <strong>1-year guarantee</strong> against hereditary or congenital defects that severely affect life expectancy.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-600">
                                        <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-lg">Coverage for hereditary defects</span>
                                    </li>
                                    <li className="flex items-start text-slate-600">
                                        <svg className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="text-lg">Replacement with equal value bird</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Disease Testing Section */}
                    <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden mb-16 relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-emerald-900/50 to-transparent"></div>
                        
                        <div className="relative z-10 p-10 md:p-16">
                            <div className="md:flex items-start justify-between gap-12">
                                <div className="md:w-1/3 mb-10 md:mb-0">
                                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Safety First</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">Comprehensive Disease Testing</h2>
                                    <p className="text-slate-300 text-lg leading-relaxed">
                                        Our aviary is a closed flock with strict biosecurity. We take no chances. Every baby is screened negative for major avian diseases before they ever leave our care.
                                    </p>
                                </div>
                                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Polyomavirus",
                                        "Psittacine Beak & Feather Disease",
                                        "Avian Bornavirus (PDD)",
                                        "Chlamydiosis (Psittacosis)"
                                    ].map((illness, index) => (
                                        <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/15 transition-colors">
                                            <div className="flex items-center mb-2">
                                                <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3"></div>
                                                <span className="text-white font-semibold text-lg">{illness}</span>
                                            </div>
                                            <div className="text-emerald-200/60 text-sm pl-5">Verified Negative</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Exclusions Section */}
                    <div className="bg-slate-50 rounded-3xl p-10 md:p-14 text-center border border-slate-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 font-montserrat">Limitations & Exclusions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 text-lg">External Factors</h4>
                                <p className="text-slate-500 text-base">Injuries, accidents, or neglect occurring after the bird leaves our care.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 text-lg">Minor Issues</h4>
                                <p className="text-slate-500 text-base">Treatable conditions like minor infections caused by travel stress.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 text-lg">Care & Diet</h4>
                                <p className="text-slate-500 text-base">Health issues arising from improper diet or housing contrary to our guide.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 text-lg">Veterinary Fees</h4>
                                <p className="text-slate-500 text-base">Exam fees or treatments are the responsibility of the new owner.</p>
                            </div>
                        </div>
                        <div className="mt-12 inline-block bg-slate-200/50 px-6 py-3 rounded-full">
                            <p className="text-slate-500 italic text-base m-0">
                                Note: This guarantee is valid only for the original purchaser and is non-transferable.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
