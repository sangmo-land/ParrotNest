import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, parrots, species, filters }) {
    
    // Helper to apply filters
    const handleFilterChange = (key, value) => {
        router.get('/parrots', { ...filters, [key]: value }, {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <Head title="Available Parrots - ParrotNest" />
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
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Services
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/health-guarantee" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Health & Guarantee</Link>
                                        <Link href="/delivery-shipping" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200">Delivery & Shipping</Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Care Center
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/care-guide" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Parrot Care Guide</Link>
                                        <Link href="/feeding-tips" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200">Feeding & Care Tips</Link>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <button className="flex items-center font-montserrat px-6 py-3 text-base font-bold uppercase tracking-widest text-white hover:bg-emerald-600/60 hover:text-white rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                                        Company
                                        <svg className="w-4 h-4 ml-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    <div className="absolute left-0 w-72 mt-2 bg-white/95 backdrop-blur-sm text-gray-800 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border border-emerald-100 overflow-hidden">
                                        <Link href="/reviews" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">Reviews</Link>
                                        <Link href="/about-us" className="block px-6 py-4 text-base font-semibold hover:bg-emerald-50 hover:text-emerald-700 hover:pl-8 transition-all duration-200 border-b border-gray-100/50">About Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Hero */}
                <div className="relative bg-white border-b border-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50 opacity-90"></div>
                     {/* Abstract Decoration */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                    <div className="absolute top-0 -left-24 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                Adoption Center
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 font-montserrat mb-6 tracking-tight drop-shadow-sm">
                                Find Your Feathered <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Soulmate</span>
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                                Every parrot has a story. Browse our available friends below and find the one that sings to your heart.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
                    <div className="flex flex-col md:flex-row gap-8">
                        
                        {/* Filters Sidebar */}
                        <div className="w-full md:w-72 flex-shrink-0">
                            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sticky top-32 backdrop-blur-sm bg-white/95">
                                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                                        <span className="text-xl">🔍</span> Filters
                                    </h3>
                                </div>
                                
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Species</label>
                                        <select 
                                            value={filters.species_id || ''} 
                                            onChange={(e) => handleFilterChange('species_id', e.target.value)}
                                            className="w-full rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-emerald-500 focus:ring-emerald-500 transition-colors text-sm py-2.5 shadow-sm"
                                        >
                                            <option value="">All Species</option>
                                            {species.map(s => (
                                                <option key={s.id} value={s.id}>{s.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Gender</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Male', 'Female'].map(g => (
                                                <button
                                                    key={g}
                                                    onClick={() => handleFilterChange('gender', filters.gender === g ? '' : g)}
                                                    className={`py-2 px-3 rounded-xl text-sm font-semibold border transition-all ${
                                                        filters.gender === g 
                                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm' 
                                                            : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-300 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {g}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-emerald-300 cursor-pointer transition-all hover:shadow-sm bg-white group">
                                            <input 
                                                type="checkbox" 
                                                checked={filters.good_with_children === "1" || filters.good_with_children === true} 
                                                onChange={(e) => handleFilterChange('good_with_children', e.target.checked ? "1" : "")}
                                                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 w-5 h-5 mr-3"
                                            />
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700 transition-colors">Good with Children</span>
                                        </label>
                                    </div>
                                    
                                     {/* Clear Filters Button */}
                                     {(filters.species_id || filters.gender || filters.good_with_children) && (
                                        <button 
                                            onClick={() => router.get('/parrots')}
                                            className="w-full text-center text-sm text-rose-500 hover:text-white hover:bg-rose-500 border border-rose-200 hover:border-rose-500 rounded-xl font-bold py-2.5 flex items-center justify-center gap-2 transition-all shadow-sm"
                                        >
                                            <span>✕</span> Clear All Filters
                                        </button>
                                     )}
                                </div>
                            </div>
                        </div>

                        {/* Parrots Grid */}
                        <div className="flex-1">
                            {parrots.data.length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                                    <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-5xl filter grayscale opacity-50">🦜</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">No parrots found</h3>
                                    <p className="text-gray-500 mt-2 max-w-md mx-auto">We couldn't find any feathered friends matching your criteria. Try clearing your filters or check back later!</p>
                                    <button 
                                        onClick={() => router.get('/parrots')}
                                        className="mt-8 px-8 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-500/30"
                                    >
                                        View All Parrots
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {parrots.data.map((parrot) => (
                                        <div key={parrot.id} className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group flex flex-col h-full overflow-hidden">
                                            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                                                 {/* Placeholder for parrot image - assuming logic is similar to featured parrots */}
                                                <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center text-emerald-200 text-6xl">
                                                    🦜
                                                </div>
                                                {/* If there was an image attribute, we would use it here */}
                                                {parrot.images && parrot.images.length > 0 ? (
                                                     <img 
                                                     src={`/storage/${parrot.images[0]}`} 
                                                     alt={parrot.name} 
                                                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                 />
                                                ): parrot.image_url && (
                                                     <img 
                                                     src={parrot.image_url} 
                                                     alt={parrot.name} 
                                                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                 />
                                                )}
                                                
                                                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                                                    {parrot.comes_with_cage && (
                                                        <div className="bg-emerald-500/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg flex items-center gap-1.5 border border-emerald-400/50 animate-fade-in-up">
                                                            <span>🏠</span> Cage Inc.
                                                        </div>
                                                    )}
                                                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-lg border border-white/50">
                                                        {parrot.age} years
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="p-6 flex flex-col flex-1 relative">
                                                <div className="absolute top-0 right-6 transform -translate-y-1/2 p-3 bg-emerald-600 rounded-2xl shadow-lg border-4 border-white">
                                                    <span className="text-xl font-bold text-white">
                                                        ${Number(parrot.adoption_fee).toLocaleString()}
                                                    </span>
                                                </div>

                                                <div className="mb-4 pt-2">
                                                    <span className="text-xs font-bold tracking-wider uppercase text-emerald-600 mb-1 block">
                                                        {parrot.species?.name}
                                                    </span>
                                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
                                                        {parrot.name}
                                                    </h3>
                                                </div>
                                                
                                                <div className="space-y-4 mb-8 flex-1">
                                                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed h-10">
                                                        {parrot.description}
                                                    </p>
                                                    <div className="flex items-center flex-wrap gap-2 text-xs font-medium text-gray-600">
                                                        <span className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-2 py-1.5 rounded-lg">
                                                            <span className={parrot.gender === 'Male' ? 'text-blue-500' : parrot.gender === 'Female' ? 'text-pink-500' : 'text-gray-400'}>●</span>
                                                            {parrot.gender}
                                                        </span>
                                                        {parrot.good_with_children && (
                                                            <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 py-1.5 rounded-lg flex items-center gap-1">
                                                                👶 Kid Friendly
                                                            </span>
                                                        )}
                                                        <span className="bg-gray-50 border border-gray-100 px-2 py-1.5 rounded-lg truncate max-w-[120px]" title={parrot.personality}>
                                                            {parrot.personality ? parrot.personality.split(',')[0] : 'Sweet'}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                <div className="grid grid-cols-2 gap-3 mt-auto">
                                                    <Link 
                                                        href={route('parrots.show', parrot.id)}
                                                        className="text-center px-4 py-3 bg-white border-2 border-gray-100 text-gray-700 font-bold rounded-xl hover:border-emerald-500 hover:text-emerald-600 active:scale-95 transition-all duration-200 text-sm"
                                                    >
                                                        Details
                                                    </Link>
                                                    <Link 
                                                        href={route('applications.create', parrot.id)}
                                                        className="text-center px-4 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-emerald-600 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 text-sm flex items-center justify-center gap-2"
                                                    >
                                                        Adopt <span className="text-emerald-300">➜</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                             {/* Pagination */}
                             {parrots.links && parrots.links.length > 3 && (
                                <div className="mt-16 flex justify-center">
                                    <nav className="flex items-center gap-2 p-1 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100">
                                        {parrots.links.map((link, i) => (
                                            link.url ? (
                                                <Link
                                                    key={i}
                                                    href={link.url}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                                                        link.active 
                                                            ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
                                                            : 'bg-transparent text-gray-500 hover:bg-emerald-50 hover:text-emerald-700'
                                                    }`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span
                                                    key={i}
                                                    className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold text-gray-300 cursor-not-allowed"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            )
                                        ))}
                                    </nav>
                                </div>
                             )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-16 mt-20 border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-3xl">🦜</span> ParrotNest
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Dedicated to finding loving forever homes for our feathered friends. 
                                    Every parrot deserves a second chance at happiness.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-6 text-gray-200">
                                    Quick Links
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/parrots"
                                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                                        >
                                            Browse Parrots
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/species"
                                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                                        >
                                            Species Guide
                                        </Link>
                                    </li>
                                    {auth?.user ? (
                                        <li>
                                            <Link
                                                href="/dashboard"
                                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                                            >
                                                My Dashboard
                                            </Link>
                                        </li>
                                    ) : (
                                        <>
                                            <li>
                                                <Link
                                                    href="/login"
                                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/register"
                                                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-6 text-gray-200">Contact</h4>
                                <p className="text-gray-400 mb-2">
                                    Email: <a href="mailto:info@parrotnest.com" className="hover:text-emerald-400 transition-colors">info@parrotnest.com</a>
                                </p>
                                <p className="text-gray-400">
                                    Phone: <span className="text-white font-medium">(555) 123-4567</span>
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-12 pt-12 text-center text-gray-500">
                            <p>&copy; 2026 ParrotNest. All rights reserved. Designed with ❤️ for birds.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
