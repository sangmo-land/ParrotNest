import { Head, Link, router, usePage } from "@inertiajs/react";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    RiShoppingCartLine,
    RiDeleteBinLine,
    RiAddLine,
    RiSubtractLine,
    RiArrowLeftLine,
    RiSecurePaymentLine,
    RiCheckboxCircleLine,
} from "react-icons/ri";

export default function Cart({ auth }) {
    const [cart, setCart] = useState([]);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutComplete, setCheckoutComplete] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');
    const [isBuyNow, setIsBuyNow] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: auth?.user?.name || "",
        email: auth?.user?.email || "",
        phone: "",
        address: "",
        city: "",
        notes: "",
    });

    // Load cart or buy-now item from localStorage
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('buyNow')) {
            const buyNowItem = localStorage.getItem('parrotnest_buynow');
            if (buyNowItem) {
                setIsBuyNow(true);
                setCart([JSON.parse(buyNowItem)]);
                return;
            }
        }
        const saved = localStorage.getItem("parrotnest_cart");
        if (saved) {
            setCart(JSON.parse(saved));
        }
    }, []);

    // Save cart to localStorage (skip in buy-now mode)
    useEffect(() => {
        if (!isBuyNow) {
            localStorage.setItem("parrotnest_cart", JSON.stringify(cart));
            // Dispatch custom event to notify navbar of cart update
            window.dispatchEvent(new Event("cartUpdated"));
        }
    }, [cart, isBuyNow]);

    // Helper to resolve image URLs
    const getImageUrl = (images) => {
        if (!images || (Array.isArray(images) && images.length === 0))
            return "/images/placeholder.jpg";
        const image = Array.isArray(images) ? images[0] : images;
        if (image.startsWith("http")) return image;
        return `/storage/${image}`;
    };

    // Update quantity
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Remove from cart
    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.id !== productId));
    };

    // Clear cart
    const clearCart = () => {
        setCart([]);
    };

    // Calculate totals
    const subtotal = cart.reduce(
        (sum, item) => sum + parseFloat(item.price) * item.quantity,
        0
    );
    const shipping = subtotal > 100 ? 0 : 15;
    const total = subtotal + shipping;

    // Handle checkout
    const handleCheckout = (e) => {
        e.preventDefault();
        setIsCheckingOut(true);

        router.post('/orders', {
            customer_name: customerInfo.name,
            customer_email: customerInfo.email,
            customer_phone: customerInfo.phone,
            address: customerInfo.address,
            city: customerInfo.city,
            notes: customerInfo.notes,
            items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
        }, {
            preserveScroll: true,
            onSuccess: (page) => {
                const number = page.props.flash?.success;
                if (number) {
                    setOrderNumber(number);
                }
                if (isBuyNow) {
                    localStorage.removeItem('parrotnest_buynow');
                }
                clearCart();
                setIsCheckingOut(false);
                setCheckoutComplete(true);
            },
            onError: () => {
                setIsCheckingOut(false);
            },
        });
    };

    // Checkout complete view
    if (checkoutComplete) {
        return (
            <>
                <Head title="Order Complete - ParrotNest" />
                <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
                    <PublicNavbar auth={auth} />

                    <div className="flex-grow flex items-center justify-center py-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-xl p-12 text-center max-w-md mx-4"
                        >
                            <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <RiCheckboxCircleLine className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Order Placed!
                            </h1>
                            {orderNumber && (
                                <p className="text-emerald-700 font-semibold mb-2">
                                    Order #{orderNumber}
                                </p>
                            )}
                            <p className="text-gray-600 mb-8">
                                Thank you for your order! We'll contact you shortly to confirm
                                your purchase and arrange delivery.
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                            >
                                Continue Shopping
                            </Link>
                        </motion.div>
                    </div>

                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <Head title={isBuyNow ? "Checkout - ParrotNest" : "Shopping Cart - ParrotNest"} />
            <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
                <PublicNavbar auth={auth} />

                {/* Header */}
                <div className="bg-emerald-900 text-white py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            href="/shop"
                            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-4 transition"
                        >
                            <RiArrowLeftLine className="w-5 h-5" />
                            Continue Shopping
                        </Link>
                        <h1 className="text-4xl font-extrabold font-montserrat">
                            {isBuyNow ? "Checkout" : "Shopping Cart"}
                        </h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                    {cart.length === 0 ? (
                        // Empty cart
                        <div className="text-center py-20">
                            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                <RiShoppingCartLine className="w-12 h-12 text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Your cart is empty
                            </h2>
                            <p className="text-gray-500 mb-8">
                                Looks like you haven't added any items yet.
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                            >
                                <RiShoppingCartLine className="w-5 h-5" />
                                Start Shopping
                            </Link>
                        </div>
                    ) : (
                        // Cart with items
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {cart.length} {cart.length === 1 ? "Item" : "Items"}
                                    </h2>
                                    <button
                                        onClick={clearCart}
                                        className="text-red-600 hover:text-red-700 text-sm font-semibold"
                                    >
                                        Clear Cart
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {cart.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4"
                                        >
                                            {/* Product Image */}
                                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <img
                                                    src={getImageUrl(item.images)}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 capitalize">
                                                    {item.category}
                                                </p>
                                                <p className="text-emerald-600 font-bold mt-1">
                                                    ${parseFloat(item.price).toFixed(2)}
                                                </p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex flex-col items-end justify-between">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition"
                                                    title="Remove"
                                                >
                                                    <RiDeleteBinLine className="w-5 h-5" />
                                                </button>

                                                <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity - 1)
                                                        }
                                                        className="p-2 hover:bg-gray-200 rounded-l-lg transition"
                                                    >
                                                        <RiSubtractLine className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity + 1)
                                                        }
                                                        className="p-2 hover:bg-gray-200 rounded-r-lg transition"
                                                    >
                                                        <RiAddLine className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Order Summary & Checkout */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-32">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                                        Order Summary
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping</span>
                                            <span>
                                                {shipping === 0 ? (
                                                    <span className="text-emerald-600">Free</span>
                                                ) : (
                                                    `$${shipping.toFixed(2)}`
                                                )}
                                            </span>
                                        </div>
                                        {shipping > 0 && (
                                            <p className="text-xs text-gray-500">
                                                Free shipping on orders over $100
                                            </p>
                                        )}
                                        <div className="border-t pt-3">
                                            <div className="flex justify-between text-lg font-bold text-gray-900">
                                                <span>Total</span>
                                                <span>${total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Checkout Form */}
                                    <form onSubmit={handleCheckout} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={customerInfo.name}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        name: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={customerInfo.email}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={customerInfo.phone}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        phone: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Delivery Address *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={customerInfo.address}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        address: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                City *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={customerInfo.city}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        city: e.target.value,
                                                    })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                                Order Notes
                                            </label>
                                            <textarea
                                                value={customerInfo.notes}
                                                onChange={(e) =>
                                                    setCustomerInfo({
                                                        ...customerInfo,
                                                        notes: e.target.value,
                                                    })
                                                }
                                                rows={2}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                                                placeholder="Any special instructions..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isCheckingOut}
                                            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isCheckingOut ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <RiSecurePaymentLine className="w-5 h-5" />
                                                    Place Order
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            By placing your order, you agree to our terms and
                                            conditions. Payment will be arranged upon confirmation.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <Footer />
            </div>
        </>
    );
}
