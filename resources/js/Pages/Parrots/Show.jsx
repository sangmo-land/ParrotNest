import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, parrot, similarParrots }) {
    return (
        <>
            <Head title={`${parrot.name} - Available for Adoption`} />
            <div className="bg-slate-50 min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
                
                {/* Navigation */}
                <header className="bg-white shadow-lg shadow-emerald-900/5 sticky top-0 z-50 backdrop-blur-md bg-white/90">
                    <div className="border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-24">
                                <div className="flex items-center">
                                    <Link href="/" className="flex items-center gap-3 group">
                                        <div className="bg-emerald-100 p-2 rounded-full group-hover:bg-emerald-200 transition-colors">
                                            <span className="text-4xl">🦜</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-3xl font-bold text-gray-900 tracking-tight leading-none">ParrotNest</span>
                                            <span className="text-xs text-emerald-600 font-bold tracking-[0.2em] uppercase mt-1">Adoption Center</span>
                                        </div>
                                    </Link>
                                </div>

                                <div className="hidden lg:flex items-center gap-8">
                                    <div className="text-right hidden xl:block">
                                        <p className="text-xs text-gray-500 uppercase font-semibold">Support & Inquiries</p>
                                        <p className="text-sm font-bold text-gray-900">(555) 123-4567</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        {auth?.user ? (
                                            <Link
                                                href={route('dashboard')}
                                                className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                                            >
                                                My Dashboard
                                            </Link>
                                        ) : (
                                            <>
                                                <Link
                                                    href={route('login')}
                                                    className="text-gray-700 hover:text-emerald-600 font-semibold px-4 py-2"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route('register')}
                                                    className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                                >
                                                    Adopt a Parrot
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-700 text-white shadow-md">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="hidden lg:flex items-center justify-center space-x-2">
                                <Link href="/" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                                    Home
                                </Link>
                                <Link href="/parrots" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white bg-emerald-800/60 rounded-full shadow-inner">
                                    Available Parrots
                                </Link>
                                <Link href="/about-breeds" className="font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                                    About Breeds
                                </Link>
                                {/* Dropdowns omitted for brevity, keeping main structure */}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                             {/* Image Section */}
                            <div className="bg-gray-100 h-96 lg:h-auto min-h-[500px] relative">
                                <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-9xl select-none text-emerald-300/50">
                                    🦜
                                </div>
                                {parrot.image_url && (
                                     <img 
                                        src={parrot.image_url} 
                                        alt={parrot.name} 
                                        className="absolute inset-0 w-full h-full object-cover"
                                     />
                                )}
                            </div>

                            {/* Info Section */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wide uppercase mb-6 self-start">
                                    {parrot.species?.name}
                                </div>
                                
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parrot.name}</h1>
                                
                                <div className="flex flex-wrap gap-4 text-gray-700 mb-8 border-b border-gray-100 pb-8">
                                    <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 min-w-[100px]">
                                        <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Gender</span>
                                        <span className="font-bold text-gray-900 capitalize">{parrot.gender}</span>
                                    </div>
                                    <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 min-w-[100px]">
                                        <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Age</span>
                                        <span className="font-bold text-gray-900">{parrot.age} years</span>
                                    </div>
                                    <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 min-w-[100px]">
                                        <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Cage?</span>
                                        <span className={`font-bold ${parrot.comes_with_cage ? 'text-emerald-600' : 'text-gray-900'}`}>
                                            {parrot.comes_with_cage ? '✅ Included' : 'No Cage'}
                                        </span>
                                    </div>
                                    <div className="bg-gray-50 px-5 py-3 rounded-2xl border border-gray-100 min-w-[100px]">
                                        <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Views</span>
                                        <span className="font-bold text-gray-900">{parrot.views}</span>
                                    </div>
                                </div>

                                <div className="prose prose-emerald mb-8 text-gray-600 leading-relaxed max-w-none">
                                    <div className="mb-8">
                                        <h3 className="text-xl text-gray-900 font-bold mb-3 flex items-center gap-2">
                                            <span>📝</span> About {parrot.name}
                                        </h3>
                                        <p className="text-lg text-gray-500 font-light leading-relaxed">{parrot.description}</p>
                                    </div>
                                    
                                    <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100">
                                        <h3 className="text-lg text-emerald-800 font-bold mb-3 flex items-center gap-2">
                                            <span>✨</span> Personality
                                        </h3>
                                        <p className="text-emerald-900/80">{parrot.personality}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                                    <div>
                                        <span className="block text-sm text-gray-500 mb-1">Adoption Fee</span>
                                        <span className="text-4xl font-black text-emerald-600 tracking-tight">
                                            ${Number(parrot.adoption_fee).toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    {auth?.user ? (
                                        <Link 
                                            href={route('applications.create', parrot.id)}
                                            className="px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-1 transform flex items-center gap-2"
                                        >
                                            <span>Apply For Adoption</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </Link>
                                    ) : (
                                        <Link 
                                            href={route('login')}
                                            className="px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all duration-300 shadow-xl hover:shadow-emerald-500/30"
                                        >
                                            Login to Adopt
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Similar Parrots */}
                    {similarParrots.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Friends</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {similarParrots.map((similar) => (
                                    <Link key={similar.id} href={route('parrots.show', similar.id)} className="block group">
                                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                                            <div className="aspect-square bg-gray-100 relative">
                                                <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-300">🦜</div>
                                                 {similar.image_url && (
                                                     <img 
                                                        src={similar.image_url} 
                                                        alt={similar.name} 
                                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                     />
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition">{similar.name}</h3>
                                                <p className="text-sm text-gray-500">{similar.age} years • {similar.gender}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-12 mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-gray-400">
                             <p>&copy; 2026 ParrotNest. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
