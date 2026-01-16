import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';

export default function FeedingTips({ auth }) {
    return (
        <>
            <Head title="Nutrition & Husbandry - ParrotNest" />
            <div className="bg-white min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                {/* Header Section */}
                <PublicNavbar auth={auth} />

                <main>
                    {/* Hero Section - Maximum Impact */}
                    <div className="bg-slate-900 text-white min-h-[50vh] flex items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950/40"></div>
                        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-24">
                            <span className="inline-block py-2 px-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                                Evidence-Based Approach
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black mb-8 font-montserrat tracking-tight leading-none">
                                Clinical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Nutrition</span>
                            </h1>
                            <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-3xl leading-relaxed">
                                Advanced dietary protocols for optimal psittacine longevity, immune function, and feather structure.
                            </p>
                        </div>
                    </div>

                    {/* Scientific Sub-Nav - Cleaner, Larger */}
                    <div className="bg-white border-b border-gray-100 sticky top-24 z-40 shadow-xl shadow-gray-100/50 backdrop-blur-md bg-white/95">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="flex overflow-x-auto space-x-2 py-6 scrollbar-hide md:justify-start">
                                {['Composition', 'Toxicology', 'Conversion', 'Enrichment'].map((item) => (
                                    <a 
                                        key={item}
                                        href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                                        className="whitespace-nowrap px-8 py-3 text-sm font-bold text-gray-400 uppercase tracking-[0.1em] hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-40">
                        
                        {/* Dietary Composition - Massive Visuals */}
                        <section id="composition" className="scroll-mt-48">
                            <div className="mb-16">
                                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-montserrat tracking-tight">Dietary Composition</h2>
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light max-w-4xl">
                                    The cornerstone of avian health is diversity. We adhere to a "Chop" methodology that maximizes bioavailability of micronutrients through fresh vegetation.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                                <div className="bg-slate-50 rounded-[2.5rem] p-12 text-center border-2 border-slate-100 hover:border-emerald-200 transition-colors duration-500 group">
                                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">🥣</div>
                                    <div className="text-7xl font-black text-emerald-600 mb-4 block">65%</div>
                                    <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-widest mb-4">Formulated Pellet</h3>
                                    <p className="text-lg text-slate-500 leading-relaxed">The nutritional foundation. Provides comprehensive vitamin and mineral balance not found in seeds.</p>
                                </div>
                                <div className="bg-slate-50 rounded-[2.5rem] p-12 text-center border-2 border-slate-100 hover:border-emerald-200 transition-colors duration-500 group">
                                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">🥬</div>
                                    <div className="text-7xl font-black text-emerald-500 mb-4 block">25%</div>
                                    <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-widest mb-4">Vegetable Matter</h3>
                                    <p className="text-lg text-slate-500 leading-relaxed">Leafy greens, root vegetables, and peppers. Served fresh daily to provide texture and hydration.</p>
                                </div>
                                <div className="bg-slate-50 rounded-[2.5rem] p-12 text-center border-2 border-slate-100 hover:border-emerald-200 transition-colors duration-500 group">
                                    <div className="text-8xl mb-6 group-hover:scale-110 transition-transform duration-500">🍎</div>
                                    <div className="text-7xl font-black text-emerald-400 mb-4 block">10%</div>
                                    <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-widest mb-4">Fruits & Seeds</h3>
                                    <p className="text-lg text-slate-500 leading-relaxed">High-value rewards. Should be limited due to sugar and fat content. Used primarily for training.</p>
                                </div>
                            </div>
                        </section>

                        {/* Prohibited Substances - Card Grid (No more tight table) */}
                        <section id="toxicology" className="scroll-mt-48 bg-slate-50 -mx-6 lg:-mx-8 px-6 lg:px-8 py-24 rounded-[3rem]">
                            <div className="max-w-7xl mx-auto">
                                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-montserrat tracking-tight">Toxicology</h2>
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-16 max-w-4xl">
                                    Certain compounds commonly found in human households are metabolically incompatible with avian physiology.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                                    {/* Card 1 */}
                                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">FATAL</div>
                                        <div className="text-9xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">🥑</div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Avocado</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">
                                            Contains <strong className="text-red-600">Persin</strong>. Causes cardiac necrosis and rapid respiratory failure.
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">FATAL</div>
                                        <div className="text-9xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">🍫</div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Chocolate</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">
                                            Contains <strong className="text-red-600">Theobromine</strong>. Induces seizures, hyperactivity, and cardiac arrest.
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">HIGH RISK</div>
                                        <div className="text-9xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">🧅</div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Allium</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">
                                            Onions and Garlic. Causes <strong className="text-orange-600">Hemolytic Anemia</strong> (cell rupture) upon ingestion.
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">FATAL</div>
                                        <div className="text-9xl mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">🧪</div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Xylitol</h3>
                                        <p className="text-slate-500 text-lg leading-relaxed">
                                            Artificial sweetener found in gum. Causes profound hypoglycemia and liver necrosis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Conversion Protocol - Step by Step */}
                        <section id="conversion" className="scroll-mt-48">
                            <div className="max-w-5xl">
                                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-montserrat tracking-tight">Conversion Protocol</h2>
                                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light mb-16">
                                    Transitioning from seeds to pellets is the single most effective intervention for avian health. It must be performed gradually to prevent starvation.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center p-12 hover:bg-slate-50 rounded-[3rem] transition-colors duration-300 border border-transparent hover:border-slate-100">
                                    <div className="text-9xl font-black text-slate-100 font-montserrat leading-none">01</div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">The Mix Method</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed">Start with a 90/10 ratio (Seed/Pellet). Reduce seed volume by 10% each week. This slow introduction allows the bird to recognize the pellet as food.</p>
                                    </div>
                                </div>
                                
                                <div className="w-full h-px bg-slate-100"></div>

                                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center p-12 hover:bg-slate-50 rounded-[3rem] transition-colors duration-300 border border-transparent hover:border-slate-100">
                                    <div className="text-9xl font-black text-slate-100 font-montserrat leading-none">02</div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Social Modeling</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed">Birds are flock eaters. Pretend to eat the pellets yourself with enthusiasm. This triggers social facilitation instincts, making them curious about the "treat" you are enjoying.</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-slate-100"></div>

                                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center p-12 hover:bg-slate-50 rounded-[3rem] transition-colors duration-300 border border-transparent hover:border-slate-100">
                                    <div className="text-9xl font-black text-slate-100 font-montserrat leading-none">03</div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Tactile Modification</h3>
                                        <p className="text-xl text-slate-500 leading-relaxed">Moisten pellets with warm water or apple juice. The change in texture often appeals to birds accustomed to soft regurgitated food or fresh fruits.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Enrichment - Big Cards */}
                        <section id="enrichment" className="scroll-mt-48 pb-20">
                            <div className="bg-emerald-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-5xl md:text-7xl font-bold mb-10 font-montserrat tracking-tight">Environmental <br/>Enrichment</h2>
                                    <p className="text-xl md:text-2xl text-emerald-200/80 leading-relaxed font-light mb-20 max-w-4xl">
                                        Foraging is a behavioral imperative. A bowl full of free food promotes boredom and neurosis. We encourage "working for food" to simulate natural ecosystems.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/30 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                                            <h4 className="text-2xl font-bold text-white mb-4">Mechanical Obstruction</h4>
                                            <p className="text-lg text-emerald-100/70 leading-relaxed">Wrapping nuts in paper or covering bowls creates a barrier that must be destroyed to access nutrition.</p>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/30 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                                            <h4 className="text-2xl font-bold text-white mb-4">Substrate Scattering</h4>
                                            <p className="text-lg text-emerald-100/70 leading-relaxed">Hiding dry pellets within bird-safe shredded paper encourages natural sifting and ground-foraging behaviors.</p>
                                        </div>
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
