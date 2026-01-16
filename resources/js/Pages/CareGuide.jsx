import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';

export default function CareGuide({ auth }) {
    return (
        <>
            <Head title="Parrot Care Guide - ParrotNest" />
            <div className="bg-white min-h-screen font-sans">
                {/* Header Section */}
                <PublicNavbar auth={auth} />

                <main>
                    {/* Hero Section */}
                    <div className="bg-emerald-950 text-white py-24 md:py-32 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-emerald-950"></div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="text-center max-w-5xl mx-auto">
                                <span className="inline-block py-2 px-4 rounded-full bg-emerald-800/80 text-emerald-200 text-sm md:text-base font-bold tracking-widest mb-8 border border-emerald-700/50">EXPERT AVIAN ADVICE</span>
                                <h1 className="text-5xl md:text-7xl font-black mb-8 font-montserrat tracking-tight leading-tight">
                                    The Essential <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Parrot Care</span> Guide
                                </h1>
                                <p className="text-xl md:text-3xl text-emerald-100/90 leading-relaxed font-light max-w-4xl mx-auto">
                                    Everything you need to know to build a happy, healthy, and long-lasting bond with your feathered companion.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Menu - Sticky */}
                    <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-24 z-40 shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex overflow-x-auto space-x-4 md:space-x-8 py-5 scrollbar-hide">
                                {['Nutrition', 'Environment', 'Socialization', 'Health Signs', 'Grooming'].map((item) => (
                                    <a 
                                        key={item}
                                        href={`#${item.toLowerCase().split(' ')[0]}`} 
                                        className="whitespace-nowrap px-5 py-2 rounded-full text-base font-bold text-gray-600 uppercase tracking-wide hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 border border-transparent hover:border-emerald-100"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
                        
                        {/* Nutrition Section */}
                        <section id="nutrition" className="scroll-mt-48">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                                <div className="lg:col-span-7">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        </div>
                                        <div>
                                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Vitality Starts Here</span>
                                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat mt-1">Nutrition & Diet</h2>
                                        </div>
                                    </div>
                                    <p className="text-xl text-gray-600 mb-10 leading-loose">
                                        A balanced diet is the cornerstone of a healthy parrot. Seed-only diets are naturally high in fat and low in essential nutrients, leading to health complications. We recommend a scientifically balanced approach:
                                    </p>
                                    
                                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                                        <ul className="divide-y divide-gray-50">
                                            <li className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">1</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">60-70% High-Quality Pellets</h3>
                                                    <p className="text-gray-600 text-lg leading-relaxed">Specially formulated extrusion diets provide complete nutrition without the "selective feeding" of seed mixes.</p>
                                                </div>
                                            </li>
                                            <li className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">2</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">20-25% Fresh Vegetables</h3>
                                                    <p className="text-gray-600 text-lg leading-relaxed">Dark leafy greens (kale, spinach), carrots, bell peppers, broccoli, and sweet potatoes are nutrient powerhouses.</p>
                                                </div>
                                            </li>
                                            <li className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">3</div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">5-10% Fruits & Treats</h3>
                                                    <p className="text-gray-600 text-lg leading-relaxed">Use berries, apples (no seeds), and mango as high-value rewards for training. Avoid sugary fruits in excess.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="lg:col-span-5 h-full flex flex-col gap-6">
                                    <div className="bg-orange-50 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg border border-orange-100 flex-grow min-h-[300px]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent"></div>
                                        <span className="text-9xl mb-6 drop-shadow-sm">🥕</span>
                                        <h3 className="text-2xl font-bold text-orange-900 mb-2">Fresh is Best</h3>
                                        <p className="text-orange-800/80 font-medium">Daily variety prevents boredom.</p>
                                    </div>
                                    
                                    <div className="bg-red-50 rounded-3xl p-8 border border-red-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                                <h4 className="text-lg font-bold text-red-900 uppercase tracking-widest">Toxic Foods</h4>
                                            </div>
                                            <p className="text-red-800 text-lg leading-relaxed font-medium">
                                                Avocado, Chocolate, Caffeine, Alcohol, Onions, Garlic, and Fruit Seeds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Environment Section */}
                        <section id="environment" className="scroll-mt-48">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div className="order-2 lg:order-1 h-full bg-blue-50 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden border border-blue-100 shadow-xl group">
                                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-70"></div>
                                    <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                                        <span className="text-[10rem] leading-none block mb-6 filter drop-shadow-xl">🏠</span>
                                        <div className="bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl inline-block shadow-sm">
                                            <p className="font-black text-blue-900 uppercase tracking-[0.2em] text-lg">Safe Haven</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                        </div>
                                        <div>
                                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Comfort & Safety</span>
                                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat mt-1">Housing Environment</h2>
                                        </div>
                                    </div>
                                    <p className="text-xl text-gray-600 mb-10 leading-loose">
                                        Your bird's cage is their bedroom, not their prison. Biggest is always best. The cage should be large enough for your bird to fully extend their wings without touching the sides, at a bare minimum.
                                    </p>
                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="text-2xl">🪵</span> Perches
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">Provide variety (natural wood, manzanita, rope) to prevent foot sores and arthritis.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="text-2xl">🧩</span> Toys
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">Rotate foraging and shredding toys weekly. Boredom leads to feather plucking.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="text-2xl">📍</span> Placement
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">Keep away from drafts, direct sun, and the kitchen (Teflon fumes are fatal).</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                            <h4 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                <span className="text-2xl">💡</span> Lighting
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">Access to full-spectrum UV lighting is vital for calcium absorption and mood.</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </section>

                        {/* Socialization Section */}
                        <section id="socialization" className="scroll-mt-48">
                            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-purple-100 shadow-2xl">
                                <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-violet-200/50 rounded-full blur-3xl -ml-10 -mb-10"></div>
                                
                                <div className="relative z-10">
                                    <div className="max-w-4xl mx-auto text-center mb-16">
                                        <span className="text-purple-600 font-bold tracking-[0.2em] uppercase text-sm block mb-4">The Flock Dynamic</span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">Socialization & Training</h2>
                                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                                            Parrots are highly social flock animals. In your home, <strong className="text-purple-700 font-bold">you are their flock</strong>. Daily interaction is not optional; it's a hard requirement for their mental health.
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-50 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">⏱️</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Time Out of Cage</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">Aim for at least 2-4 hours of supervised time outside the cage daily for exercise and emotional bonding.</p>
                                        </div>
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-50 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">🎯</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Positive Reinforcement</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">Reward good behavior with treats. NEVER punish a bird; it destroys trust and causes lasting aggression.</p>
                                        </div>
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-purple-50 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0">🧠</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Stimulation</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">Teach tricks, use puzzle feeders, and talk to your bird regularly to keep their highly intelligent mind sharp.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                         {/* Health Section */}
                         <section id="health" className="scroll-mt-48">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                                <div>
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shadow-sm">
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        </div>
                                        <div>
                                            <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">Know The Signs</span>
                                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-montserrat mt-1">Health & Wellness</h2>
                                        </div>
                                    </div>
                                    <p className="text-xl text-gray-700 mb-8 leading-loose border-l-4 border-rose-300 pl-6">
                                        Birds are experts at hiding illness—it's a survival instinct. By the time they look sick, they are often in critical condition for hours or days.
                                    </p>
                                    
                                    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                                        <h4 className="font-bold text-rose-900 mb-6 uppercase tracking-wide flex items-center gap-3">
                                            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                            Red Flags — Call Vet Immediately
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {['Fluffed up feathers', 'Sitting at bottom of cage', 'Change in droppings', 'Discharge from eyes/nares', 'Loss of appetite', 'Sleeping more than usual'].map((sign, i) => (
                                                <li key={i} className="flex items-center text-gray-800 bg-white px-4 py-3 rounded-lg border border-rose-100 shadow-sm font-medium">
                                                    <span className="text-rose-500 mr-3 text-lg">⚠️</span>
                                                    {sign}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gray-900 text-white rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-center text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                                    <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat leading-tight">Need an Avian Vet?</h3>
                                        <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                                            Regular check-ups are essential. We recommend an annual "well-bird" exam with bloodwork to establish a baseline for your pet's health.
                                        </p>
                                        <a href="https://www.aav.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-emerald-500 text-white font-bold py-5 px-10 rounded-full hover:bg-emerald-400 transition shadow-lg hover:shadow-emerald-500/25 text-lg">
                                            Find an AAV Veterinarian
                                            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>

                {/* Footer Section */}
                <footer className="bg-gray-800 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">🦜 ParrotNest</h3>
                                <p className="text-gray-300">Connecting rescued parrots with loving forever homes.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><Link href="/parrots" className="text-gray-300 hover:text-white">Browse Parrots</Link></li>
                                    <li><Link href="/species" className="text-gray-300 hover:text-white">Species Guide</Link></li>
                                    {auth.user ? (
                                        <li><Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link></li>
                                    ) : (
                                        <>
                                            <li><Link href="/login" className="text-gray-300 hover:text-white">Login</Link></li>
                                            <li><Link href="/register" className="text-gray-300 hover:text-white">Register</Link></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Contact</h4>
                                <p className="text-gray-300">Email: info@parrotnest.com</p>
                                <p className="text-gray-300 mt-2">Phone: (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2026 ParrotNest. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}