import { Head, Link } from '@inertiajs/react';
import PublicNavbar from '@/Components/PublicNavbar';
import Footer from '@/Components/Footer';

export default function Reviews({ auth, reviews }) {
    // Helper to render stars
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    // Helper to get initials
    const getInitials = (name) => {
        if (!name) return '';
        const names = name.split(' ');
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Happy Families</h1>
                        <p className="text-xl max-w-2xl mx-auto text-emerald-100 drop-shadow-md">
                            Read about the heartwarming journeys of parrots finding their forever homes.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
                    <div className="flex flex-col gap-12">
                        {reviews.data.map((review, index) => (
                            <div 
                                key={review.id} 
                                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
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
                                                {getInitials(review.reviewer_name)}
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
                                            <span className="font-bold text-gray-900 text-lg">{review.reviewer_name}</span>
                                            {review.location && (
                                                <span className="text-sm text-gray-500 font-medium flex items-center mt-1">
                                                    <span className="mr-1 text-emerald-500">📍</span> {review.location}
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400 font-medium">
                                            {new Date(review.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                     {reviews.links && reviews.links.length > 3 && (
                        <div className="mt-16 flex justify-center flex-wrap gap-2">
                             {reviews.links.map((link, key) => (
                                link.url ? (
                                    <Link
                                        key={key}
                                        href={link.url}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            link.active 
                                            ? 'bg-emerald-600 text-white shadow-md' 
                                            : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ) : (
                                    <span
                                        key={key}
                                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 border border-gray-100 bg-gray-50"
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
