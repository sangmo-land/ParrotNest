import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import SEO from '@/Components/SEO';
import PublicNavbar from '@/Components/PublicNavbar';
import Footer from '@/Components/Footer';
import Modal from '@/Components/Modal';
import { motion } from 'framer-motion';
import { FaHeart, FaPaw, FaStethoscope, FaSeedling, FaCreditCard, FaPaypal, FaLock, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from 'react-icons/fa';

export default function Donate({ auth }) {
    const [amount, setAmount] = useState('50');
    const [customAmount, setCustomAmount] = useState('');
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [cardType, setCardType] = useState('visa');

    const handleAmountSelect = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount('custom');
    };

    const handleCreditCardClick = () => {
        setShowPaymentModal(true);
    };

    const closeModal = () => {
        setShowPaymentModal(false);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            setShowPaymentModal(false);
            alert('Thank you for your donation (Simulation only)');
        }, 2000);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-montserrat text-gray-800">
            <SEO
                title="Donate - ParrotNest | Support Parrot Rescue & Rehabilitation"
                description="Support ParrotNest's mission to rescue and rehome parrots. Your donation helps provide medical care, food, and shelter for parrots in need."
                keywords="donate to parrot rescue, support parrot adoption, parrot charity, bird rescue donation, help parrots"
            />
            <PublicNavbar auth={auth} />

            {/* Hero Section */}
            <div className="relative bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552728089-57bdde30ebd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }} 
                ></div>
                
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-emerald-50 drop-shadow-lg">
                            Help Us Give Them Wings
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-emerald-100 font-medium leading-relaxed drop-shadow-md">
                            Your generous donation provides medical care, shelter, and love to rescued parrots waiting for their forever homes.
                        </p>
                    </motion.div>
                </div>
                
                {/* Curved divider */}
                <div className="absolute bottom-0 w-full z-20 overflow-hidden leading-none">
                    <svg className="relative block w-full h-12 md:h-16 text-gray-50" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 -mt-10 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Donation Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-amber-500"><FaHeart /></span>
                            Make a Donation
                        </h2>
                        <p className="text-gray-500 mb-8">Choose an amount to support our feathered friends.</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {['10', '25', '50', '100'].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => handleAmountSelect(val)}
                                    className={`py-4 px-2 rounded-xl font-bold text-lg border-2 transition-all duration-200 ${
                                        amount === val 
                                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md transform scale-105' 
                                            : 'border-gray-200 text-gray-600 hover:border-emerald-300 hover:bg-emerald-50/50'
                                    }`}
                                >
                                    ${val}
                                </button>
                            ))}
                        </div>

                        <div className="mb-8">
                            <div className={`relative rounded-xl border-2 transition-colors ${amount === 'custom' ? 'border-emerald-500 bg-emerald-50/30' : 'border-gray-200'}`}>
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-gray-500 font-bold text-lg">$</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder="Enter custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="block w-full pl-10 pr-4 py-4 rounded-xl border-none bg-transparent focus:ring-0 text-gray-800 font-bold placeholder-gray-400 text-lg"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={handleCreditCardClick}
                                className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
                            >
                                <FaCreditCard /> Donate via Credit Card
                            </button>
                            <button className="w-full bg-[#0070ba] text-white font-bold py-4 rounded-xl hover:bg-[#005ea6] transition shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3">
                                <FaPaypal /> Donate via PayPal
                            </button>
                        </div>
                        
                        <p className="text-center text-xs text-gray-400 mt-6">
                            ParrotNest is a registered non-profit. All donations are tax-deductible to the extent allowed by law.
                        </p>
                    </motion.div>

                    {/* Information Column */}
                    <div className="space-y-8 lg:pt-8">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Where your money goes</h3>
                            
                            <div className="grid gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-emerald-500 flex items-start gap-4">
                                    <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 shrink-0">
                                        <FaStethoscope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Veterinary Care</h4>
                                        <p className="text-gray-600 mt-1">Medical checkups, surgeries, and medications for sick and injured rescues.</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-amber-500 flex items-start gap-4">
                                    <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
                                        <FaSeedling className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Nutritious Food</h4>
                                        <p className="text-gray-600 mt-1">Providing fresh fruits, vegetables, and high-quality pellets for optimal health.</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-sky-500 flex items-start gap-4">
                                    <div className="bg-sky-100 p-3 rounded-full text-sky-600 shrink-0">
                                        <FaPaw className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-gray-900">Enrichment & Toys</h4>
                                        <p className="text-gray-600 mt-1">Stimulating toys and safe environments to keep intelligent minds active.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 text-center shadow-lg relative overflow-hidden border border-gray-100"
                        >
                             <div className="absolute top-0 right-0 -mr-10 -mt-10 opacity-5 text-emerald-500">
                                <FaHeart size={150} />
                             </div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900">Every Dollar Counts</h3>
                            <p className="mb-6 text-gray-600 font-medium text-lg italic leading-relaxed relative z-10">
                                "We are fully funded by the generosity of people like you. Without your support, we wouldn't be able to save these beautiful creatures."
                            </p>
                            <div className="font-bold text-lg relative z-10 text-gray-900">- The ParrotNest Team</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways To Help</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-bold mb-2">Foster a Parrot</h3>
                            <p className="text-gray-600">Open your home temporarily to a bird in need.</p>
                            <Link href="/foster" className="text-emerald-600 font-bold mt-4 inline-block hover:underline">Learn More</Link>
                        </div>
                        <div className="p-6 rounded-2xl hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
                             <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-xl font-bold mb-2">Donate Supplies</h3>
                            <p className="text-gray-600">We always need cages, toys, and cleaning supplies.</p>
                             <Link href="/wishlist" className="text-emerald-600 font-bold mt-4 inline-block hover:underline">View Wishlist</Link>
                        </div>
                        <div className="p-6 rounded-2xl hover:bg-gray-50 transition border border-transparent hover:border-gray-200">
                             <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                            <p className="text-gray-600">Donate your time to help clean, feed, and socialize.</p>
                             <Link href="/volunteer" className="text-emerald-600 font-bold mt-4 inline-block hover:underline">Join Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showPaymentModal} onClose={closeModal}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <FaLock className="text-emerald-600" size={20} />
                            Secure Donation
                        </h3>
                        <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handlePaymentSubmit}>
                        <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-500 mb-1">Donation Amount</p>
                            <p className="text-3xl font-bold text-emerald-700">
                                ${amount === 'custom' ? (customAmount || '0.00') : amount}.00
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Card Type</label>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setCardType('visa')}
                                        className={`p-2 rounded-lg border transition-all ${cardType === 'visa' ? 'border-emerald-500 ring-2 ring-emerald-200 bg-white' : 'border-gray-200 hover:border-emerald-200 bg-white'}`}
                                    >
                                        <img src="/images/cards/visa.svg" alt="Visa" className="h-8 w-auto object-contain" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCardType('mastercard')}
                                        className={`p-2 rounded-lg border transition-all ${cardType === 'mastercard' ? 'border-emerald-500 ring-2 ring-emerald-200 bg-white' : 'border-gray-200 hover:border-emerald-200 bg-white'}`}
                                    >
                                        <img src="/images/cards/mastercard.svg" alt="Mastercard" className="h-8 w-auto object-contain" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCardType('amex')}
                                        className={`p-2 rounded-lg border transition-all ${cardType === 'amex' ? 'border-emerald-500 ring-2 ring-emerald-200 bg-white' : 'border-gray-200 hover:border-emerald-200 bg-white'}`}
                                    >
                                        <img src="/images/cards/amex.svg" alt="American Express" className="h-8 w-auto object-contain" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCardType('discover')}
                                        className={`p-2 rounded-lg border transition-all ${cardType === 'discover' ? 'border-emerald-500 ring-2 ring-emerald-200 bg-white' : 'border-gray-200 hover:border-emerald-200 bg-white'}`}
                                    >
                                        <img src="/images/cards/discover.svg" alt="Discover" className="h-8 w-auto object-contain" />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                                <input type="text" className="w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="John Doe" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                <div className="relative">
                                    <input type="text" className="w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 pl-10" placeholder="0000 0000 0000 0000" required />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <FaCreditCard />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="MM/YY" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                    <input type="text" className="w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="123" required />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition shadow-md flex justify-center items-center gap-2 disabled:opacity-50"
                            >
                                {processing ? (
                                    <>Processing...</>
                                ) : (
                                    <>Pay ${amount === 'custom' ? (customAmount || '0') : amount}</>
                                )}
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
                                <FaLock size={10} /> 
                                Your payment information is encrypted and secure.
                            </p>
                        </div>
                    </form>
                </div>
            </Modal>

            <Footer />
        </div>
    );
}