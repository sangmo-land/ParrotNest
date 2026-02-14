import { Head, Link, router, usePage } from "@inertiajs/react";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    RiShoppingCartLine,
    RiSearchLine,
    RiFilter3Line,
    RiImageLine,
    RiHeartLine,
    RiHeartFill,
    RiShareLine,
    RiCheckLine,
    RiGridFill,
    RiListUnordered,
    RiStarFill,
    RiStarHalfFill,
    RiStarLine,
    RiFacebookFill,
    RiPinterestFill,
    RiTwitterXFill,
    RiMailLine,
    RiCloseLine,
    RiArrowLeftSLine,
    RiArrowRightSLine,
} from "react-icons/ri";

export default function Shop({ auth, products, categories, filters }) {
    const [search, setSearch] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || "all",
    );
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [likedImages, setLikedImages] = useState({});
    const [shareMenuOpen, setShareMenuOpen] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [cart, setCart] = useState(() => {
        // Initialize cart from localStorage
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("parrotnest_cart");
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    const [addedToCart, setAddedToCart] = useState({});
    const [viewMode, setViewMode] = useState("grid");

    // Create a ref to track the first render
    const firstRender = useRef(true);

    // Live search effect with debounce
    useEffect(() => {
        // Skip the initial render to prevent unnecessary requests on load
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        const timeoutId = setTimeout(() => {
            router.get(
                "/shop",
                {
                    category:
                        selectedCategory === "all"
                            ? undefined
                            : selectedCategory,
                    search: search || undefined,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    only: ["products", "filters"],
                    replace: true, // Use replace to avoid polluting history stack with every keystroke
                },
            );
        }, 300); // 300ms debounce

        return () => clearTimeout(timeoutId);
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Search is handled by useEffect now, this just prevents form submission
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        router.get(
            "/shop",
            {
                category: category === "all" ? undefined : category,
                search: search || undefined,
            },
            {
                preserveState: true,
                preserveScroll: true,
                only: ["products", "filters"],
            },
        );
    };

    // Helper to resolve image URLs - now handles array of images
    const getImageUrl = (image) => {
        if (!image) return "/images/placeholder.jpg";
        if (image.startsWith("http")) return image;
        return `/storage/${image}`;
    };

    // Get all images for a product as an array
    const getProductImages = (images) => {
        if (!images || (Array.isArray(images) && images.length === 0))
            return ["/images/placeholder.jpg"];
        if (!Array.isArray(images)) return [getImageUrl(images)];
        return images.map((img) => getImageUrl(img));
    };

    // Set specific image index
    const setImageIndex = (productId, index) => {
        setCurrentImageIndex((prev) => ({ ...prev, [productId]: index }));
    };

    // Toggle like for a specific product image
    const toggleLike = (productId, imageIdx) => {
        const key = `${productId}-${imageIdx}`;
        setLikedImages((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Share image functionality
    const SITE_URL = "https://theparrotnest.org";
    const getShareUrl = (product) => `${SITE_URL}/shop?product=${product.slug}`;

    const shareToFacebook = (product) => {
        const url = getShareUrl(product);
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            "_blank",
            "width=600,height=400",
        );
        setShareMenuOpen(null);
    };

    const shareToPinterest = (product, imageUrl) => {
        const url = getShareUrl(product);
        const media = imageUrl.startsWith("http")
            ? imageUrl
            : `${SITE_URL}${imageUrl}`;
        window.open(
            `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(product.name)}`,
            "_blank",
            "width=600,height=400",
        );
        setShareMenuOpen(null);
    };

    const shareToTwitter = (product) => {
        const url = getShareUrl(product);
        const text = `Check out ${product.name} at The Parrot Nest!`;
        window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
            "_blank",
            "width=600,height=400",
        );
        setShareMenuOpen(null);
    };

    const shareToEmail = (product) => {
        const url = getShareUrl(product);
        const subject = `Check out ${product.name} at The Parrot Nest!`;
        const body = `I found this amazing product and thought you might like it:\n\n${product.name}\n${url}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setShareMenuOpen(null);
    };

    const toggleShareMenu = (productId) => {
        setShareMenuOpen(shareMenuOpen === productId ? null : productId);
    };

    // Close share menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setShareMenuOpen(null);
        if (shareMenuOpen) {
            document.addEventListener("click", handleClickOutside);
            return () =>
                document.removeEventListener("click", handleClickOutside);
        }
    }, [shareMenuOpen]);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("parrotnest_cart", JSON.stringify(cart));
        // Dispatch custom event to notify navbar of cart update
        window.dispatchEvent(new Event("cartUpdated"));
    }, [cart]);

    // Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id,
            );
            if (existingItem) {
                // Increase quantity if already in cart
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            } else {
                // Add new item to cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        // Show "Added!" feedback
        setAddedToCart((prev) => ({ ...prev, [product.id]: true }));

        // Reset feedback after 2 seconds
        setTimeout(() => {
            setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
        }, 2000);
    };

    return (
        <>
            <Head title="Shop - ParrotNest" />
            <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
                <PublicNavbar auth={auth} />

                {/* Hero Section */}
                <div className="bg-emerald-900 text-white py-16 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold mb-4 font-montserrat tracking-tight"
                        >
                            Essentials for Your Feathered Friends
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-emerald-100 max-w-2xl mx-auto"
                        >
                            High-quality cages, perches, and accessories.
                        </motion.p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
                    {/* Filters & Control Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-200 gap-4">
                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full md:w-auto">
                            <form
                                onSubmit={handleSearch}
                                className="relative w-full md:w-64"
                            >
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50 transition-colors"
                                />
                                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </form>
                            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                                <button
                                    onClick={() => handleCategoryChange("all")}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                        selectedCategory === "all"
                                            ? "bg-emerald-600 text-white shadow-md"
                                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                                >
                                    All Products
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() =>
                                            handleCategoryChange(cat)
                                        }
                                        className={`px-5 py-2 rounded-full text-sm font-bold capitalize transition-all whitespace-nowrap ${
                                            selectedCategory === cat
                                                ? "bg-emerald-600 text-white shadow-md"
                                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-gray-500 text-sm font-medium">
                                Showing {products.length} results
                            </div>
                            <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-md transition-all ${
                                        viewMode === "grid"
                                            ? "bg-white text-emerald-600 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                    title="Grid view"
                                >
                                    <RiGridFill className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-md transition-all ${
                                        viewMode === "list"
                                            ? "bg-white text-emerald-600 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                    title="List view"
                                >
                                    <RiListUnordered className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid/List */}
                    {products.length > 0 ? (
                        viewMode === "grid" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence>
                                    {products.map((product, index) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.05,
                                            }}
                                            key={product.id}
                                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
                                        >
                                            {(() => {
                                                const images = getProductImages(
                                                    product.images,
                                                );
                                                const currentIdx =
                                                    currentImageIndex[
                                                        product.id
                                                    ] || 0;
                                                const hasMultipleImages =
                                                    images.length > 1;

                                                return (
                                                    <div className="flex flex-col">
                                                        {/* Main Image Container */}
                                                        <div
                                                            className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer"
                                                            onClick={() => {
                                                                setSelectedProduct(
                                                                    product,
                                                                );
                                                                setModalImageIndex(
                                                                    currentIdx,
                                                                );
                                                            }}
                                                        >
                                                            <img
                                                                src={
                                                                    images[
                                                                        currentIdx
                                                                    ]
                                                                }
                                                                alt={`${product.name} - Image ${currentIdx + 1}`}
                                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                                            />

                                                            {/* Product Tags - Top Left */}
                                                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
                                                                {product.free_delivery && (
                                                                    <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                                                        Free
                                                                        Delivery
                                                                    </span>
                                                                )}
                                                                {product.is_best && (
                                                                    <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                                                        Best
                                                                    </span>
                                                                )}
                                                                {product.is_popular && (
                                                                    <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                                                                        Popular
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {/* Image count badge - Bottom Left */}
                                                            {hasMultipleImages && (
                                                                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                                                    <RiImageLine className="w-3.5 h-3.5" />
                                                                    <span>
                                                                        {currentIdx +
                                                                            1}
                                                                        /
                                                                        {
                                                                            images.length
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )}

                                                            {/* Like and Share buttons */}
                                                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                                                <button
                                                                    onClick={(
                                                                        e,
                                                                    ) => {
                                                                        e.preventDefault();
                                                                        toggleLike(
                                                                            product.id,
                                                                            currentIdx,
                                                                        );
                                                                    }}
                                                                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
                                                                    title="Like this image"
                                                                >
                                                                    {likedImages[
                                                                        `${product.id}-${currentIdx}`
                                                                    ] ? (
                                                                        <RiHeartFill className="w-5 h-5 text-red-500" />
                                                                    ) : (
                                                                        <RiHeartLine className="w-5 h-5" />
                                                                    )}
                                                                </button>
                                                                <div className="relative">
                                                                    <button
                                                                        onClick={(
                                                                            e,
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            e.stopPropagation();
                                                                            toggleShareMenu(
                                                                                `grid-${product.id}`,
                                                                            );
                                                                        }}
                                                                        className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110"
                                                                        title="Share this product"
                                                                    >
                                                                        <RiShareLine className="w-5 h-5" />
                                                                    </button>
                                                                    {shareMenuOpen ===
                                                                        `grid-${product.id}` && (
                                                                        <div
                                                                            className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[160px] z-50"
                                                                            onClick={(
                                                                                e,
                                                                            ) =>
                                                                                e.stopPropagation()
                                                                            }
                                                                        >
                                                                            <button
                                                                                onClick={() =>
                                                                                    shareToFacebook(
                                                                                        product,
                                                                                    )
                                                                                }
                                                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                            >
                                                                                <RiFacebookFill className="w-5 h-5 text-[#1877F2]" />
                                                                                Facebook
                                                                            </button>
                                                                            <button
                                                                                onClick={() =>
                                                                                    shareToPinterest(
                                                                                        product,
                                                                                        images[
                                                                                            currentIdx
                                                                                        ],
                                                                                    )
                                                                                }
                                                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                            >
                                                                                <RiPinterestFill className="w-5 h-5 text-[#E60023]" />
                                                                                Pinterest
                                                                            </button>
                                                                            <button
                                                                                onClick={() =>
                                                                                    shareToTwitter(
                                                                                        product,
                                                                                    )
                                                                                }
                                                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                            >
                                                                                <RiTwitterXFill className="w-5 h-5 text-black" />
                                                                                Twitter/X
                                                                            </button>
                                                                            <button
                                                                                onClick={() =>
                                                                                    shareToEmail(
                                                                                        product,
                                                                                    )
                                                                                }
                                                                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                            >
                                                                                <RiMailLine className="w-5 h-5 text-gray-600" />
                                                                                Email
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* Category badge */}
                                                            <div className="absolute bottom-3 right-3">
                                                                <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                                    {
                                                                        product.category
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Thumbnail Images - Only show if multiple images */}
                                                        {hasMultipleImages && (
                                                            <div className="flex gap-2 p-2 bg-gray-50">
                                                                {images.map(
                                                                    (
                                                                        img,
                                                                        idx,
                                                                    ) => (
                                                                        <button
                                                                            key={
                                                                                idx
                                                                            }
                                                                            onClick={(
                                                                                e,
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                setImageIndex(
                                                                                    product.id,
                                                                                    idx,
                                                                                );
                                                                            }}
                                                                            className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                                                                                idx ===
                                                                                currentIdx
                                                                                    ? "ring-2 ring-emerald-500 ring-offset-1"
                                                                                    : "opacity-60 hover:opacity-100"
                                                                            }`}
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    img
                                                                                }
                                                                                alt={`${product.name} - Thumbnail ${idx + 1}`}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        </button>
                                                                    ),
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })()}

                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat line-clamp-1">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-2 line-clamp-2 flex-grow">
                                                    {product.description}
                                                </p>

                                                {product.free_next_day_delivery && (
                                                    <p className="text-emerald-600 text-sm font-semibold mb-2">
                                                        Free Next Day Delivery
                                                    </p>
                                                )}

                                                {/* Star Ratings */}
                                                <div className="flex items-center mb-4">
                                                    {[...Array(5)].map(
                                                        (_, i) => {
                                                            const rating =
                                                                parseFloat(
                                                                    product.rating,
                                                                ) || 4.0;
                                                            if (
                                                                i <
                                                                Math.floor(
                                                                    rating,
                                                                )
                                                            ) {
                                                                return (
                                                                    <RiStarFill
                                                                        key={i}
                                                                        className="w-4 h-4 text-amber-400"
                                                                    />
                                                                );
                                                            } else if (
                                                                i < rating
                                                            ) {
                                                                return (
                                                                    <RiStarHalfFill
                                                                        key={i}
                                                                        className="w-4 h-4 text-amber-400"
                                                                    />
                                                                );
                                                            } else {
                                                                return (
                                                                    <RiStarLine
                                                                        key={i}
                                                                        className="w-4 h-4 text-gray-300"
                                                                    />
                                                                );
                                                            }
                                                        },
                                                    )}
                                                    <span className="text-xs text-gray-500 ml-1">
                                                        (
                                                        {product.rating_count ||
                                                            0}
                                                        )
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex flex-col">
                                                        <span className="text-2xl font-bold text-emerald-600">
                                                            $
                                                            {parseFloat(
                                                                product.price,
                                                            ).toFixed(2)}
                                                        </span>
                                                        {product.previous_price &&
                                                            parseFloat(
                                                                product.previous_price,
                                                            ) >
                                                                parseFloat(
                                                                    product.price,
                                                                ) && (
                                                                <span className="text-sm text-gray-400 line-through">
                                                                    was: $
                                                                    {parseFloat(
                                                                        product.previous_price,
                                                                    ).toFixed(
                                                                        2,
                                                                    )}
                                                                </span>
                                                            )}
                                                    </div>
                                                    {(() => {
                                                        const cartItem =
                                                            cart.find(
                                                                (item) =>
                                                                    item.id ===
                                                                    product.id,
                                                            );
                                                        const isInCart =
                                                            !!cartItem;
                                                        const justAdded =
                                                            addedToCart[
                                                                product.id
                                                            ];

                                                        return (
                                                            <button
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.preventDefault();
                                                                    addToCart(
                                                                        product,
                                                                    );
                                                                }}
                                                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors duration-300 ${
                                                                    justAdded
                                                                        ? "bg-emerald-600 text-white"
                                                                        : "bg-amber-500 text-white hover:bg-amber-600"
                                                                }`}
                                                            >
                                                                {justAdded ? (
                                                                    <>
                                                                        <RiCheckLine className="w-4 h-4" />
                                                                        Added!
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <RiShoppingCartLine className="w-4 h-4" />
                                                                        Add to
                                                                        Cart
                                                                        {isInCart && (
                                                                            <span className="ml-1 bg-white/20 px-1.5 rounded-full text-xs">
                                                                                {
                                                                                    cartItem.quantity
                                                                                }
                                                                            </span>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </button>
                                                        );
                                                    })()}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        ) : (
                            /* List View */
                            <div className="flex flex-col gap-4">
                                <AnimatePresence>
                                    {products.map((product, index) => {
                                        const images = getProductImages(
                                            product.images,
                                        );
                                        const currentIdx =
                                            currentImageIndex[product.id] || 0;
                                        const cartItem = cart.find(
                                            (item) => item.id === product.id,
                                        );
                                        const isInCart = !!cartItem;
                                        const justAdded =
                                            addedToCart[product.id];

                                        return (
                                            <motion.div
                                                layout
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.03,
                                                }}
                                                key={product.id}
                                                className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 flex flex-row"
                                            >
                                                {/* Image Section */}
                                                <div
                                                    className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-64 md:h-auto flex-shrink-0 bg-gray-100 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectedProduct(
                                                            product,
                                                        );
                                                        setModalImageIndex(
                                                            currentIdx,
                                                        );
                                                    }}
                                                >
                                                    <img
                                                        src={images[currentIdx]}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Category and Tags */}
                                                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 flex flex-wrap gap-1 max-w-[80%]">
                                                        <span className="bg-white/90 backdrop-blur-sm text-emerald-800 text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full uppercase">
                                                            {product.category}
                                                        </span>
                                                        {product.free_delivery && (
                                                            <span className="bg-emerald-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full hidden sm:inline-block">
                                                                Free Delivery
                                                            </span>
                                                        )}
                                                        {product.is_best && (
                                                            <span className="bg-amber-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full hidden sm:inline-block">
                                                                Best
                                                            </span>
                                                        )}
                                                        {product.is_popular && (
                                                            <span className="bg-rose-500 text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full hidden sm:inline-block">
                                                                Popular
                                                            </span>
                                                        )}
                                                    </div>
                                                    {/* Like/Share buttons - hidden on mobile */}
                                                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 flex gap-1 hidden sm:flex">
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                toggleLike(
                                                                    product.id,
                                                                    currentIdx,
                                                                );
                                                            }}
                                                            className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-1.5 shadow-sm transition-all"
                                                        >
                                                            {likedImages[
                                                                `${product.id}-${currentIdx}`
                                                            ] ? (
                                                                <RiHeartFill className="w-4 h-4 text-red-500" />
                                                            ) : (
                                                                <RiHeartLine className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                        <div className="relative">
                                                            <button
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    toggleShareMenu(
                                                                        `list-${product.id}`,
                                                                    );
                                                                }}
                                                                className="bg-white/90 hover:bg-white text-gray-700 rounded-full p-1.5 shadow-sm transition-all"
                                                            >
                                                                <RiShareLine className="w-4 h-4" />
                                                            </button>
                                                            {shareMenuOpen ===
                                                                `list-${product.id}` && (
                                                                <div
                                                                    className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[160px] z-50"
                                                                    onClick={(
                                                                        e,
                                                                    ) =>
                                                                        e.stopPropagation()
                                                                    }
                                                                >
                                                                    <button
                                                                        onClick={() =>
                                                                            shareToFacebook(
                                                                                product,
                                                                            )
                                                                        }
                                                                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        <RiFacebookFill className="w-5 h-5 text-[#1877F2]" />
                                                                        Facebook
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            shareToPinterest(
                                                                                product,
                                                                                images[
                                                                                    currentIdx
                                                                                ],
                                                                            )
                                                                        }
                                                                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        <RiPinterestFill className="w-5 h-5 text-[#E60023]" />
                                                                        Pinterest
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            shareToTwitter(
                                                                                product,
                                                                            )
                                                                        }
                                                                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        <RiTwitterXFill className="w-5 h-5 text-black" />
                                                                        Twitter/X
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            shareToEmail(
                                                                                product,
                                                                            )
                                                                        }
                                                                        className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                                                    >
                                                                        <RiMailLine className="w-5 h-5 text-gray-600" />
                                                                        Email
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    {/* Thumbnails for list view - hidden on mobile */}
                                                    {images.length > 1 && (
                                                        <div className="absolute bottom-2 left-2 hidden sm:flex gap-1">
                                                            {images
                                                                .slice(0, 4)
                                                                .map(
                                                                    (
                                                                        img,
                                                                        idx,
                                                                    ) => (
                                                                        <button
                                                                            key={
                                                                                idx
                                                                            }
                                                                            onClick={(
                                                                                e,
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                setImageIndex(
                                                                                    product.id,
                                                                                    idx,
                                                                                );
                                                                            }}
                                                                            className={`w-8 h-8 rounded overflow-hidden border-2 transition-all ${
                                                                                idx ===
                                                                                currentIdx
                                                                                    ? "border-emerald-500"
                                                                                    : "border-white/50 opacity-70 hover:opacity-100"
                                                                            }`}
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    img
                                                                                }
                                                                                alt=""
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        </button>
                                                                    ),
                                                                )}
                                                            {images.length >
                                                                4 && (
                                                                <span className="w-8 h-8 rounded bg-black/50 text-white text-xs font-bold flex items-center justify-center">
                                                                    +
                                                                    {images.length -
                                                                        4}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content Section */}
                                                <div className="flex-grow p-3 sm:p-5 flex flex-col justify-between min-w-0">
                                                    <div>
                                                        <h3 className="text-sm sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 font-montserrat line-clamp-2 sm:line-clamp-1">
                                                            {product.name}
                                                        </h3>
                                                        {/* Star Ratings */}
                                                        <div className="flex items-center gap-0.5 mb-1 sm:mb-2">
                                                            {[...Array(5)].map(
                                                                (_, i) => {
                                                                    const rating =
                                                                        parseFloat(
                                                                            product.rating,
                                                                        ) ||
                                                                        4.0;
                                                                    if (
                                                                        i <
                                                                        Math.floor(
                                                                            rating,
                                                                        )
                                                                    ) {
                                                                        return (
                                                                            <RiStarFill
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400"
                                                                            />
                                                                        );
                                                                    } else if (
                                                                        i <
                                                                        rating
                                                                    ) {
                                                                        return (
                                                                            <RiStarHalfFill
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400"
                                                                            />
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <RiStarLine
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300"
                                                                            />
                                                                        );
                                                                    }
                                                                },
                                                            )}
                                                            <span className="text-xs text-gray-500 ml-1">
                                                                (
                                                                {product.rating_count ||
                                                                    0}
                                                                )
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3 hidden sm:block">
                                                            {
                                                                product.description
                                                            }
                                                        </p>
                                                        {product.free_next_day_delivery && (
                                                            <p className="text-emerald-600 text-xs sm:text-sm font-semibold">
                                                                Free Next Day
                                                                Delivery
                                                            </p>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 sm:mt-4 gap-1 sm:gap-2">
                                                        <div className="flex flex-col">
                                                            <span className="text-lg sm:text-2xl font-bold text-emerald-600">
                                                                $
                                                                {parseFloat(
                                                                    product.price,
                                                                ).toFixed(2)}
                                                            </span>
                                                            {product.previous_price &&
                                                                parseFloat(
                                                                    product.previous_price,
                                                                ) >
                                                                    parseFloat(
                                                                        product.price,
                                                                    ) && (
                                                                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                                                                        was: $
                                                                        {parseFloat(
                                                                            product.previous_price,
                                                                        ).toFixed(
                                                                            2,
                                                                        )}
                                                                    </span>
                                                                )}
                                                        </div>
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                addToCart(
                                                                    product,
                                                                );
                                                            }}
                                                            className={`flex items-center justify-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-colors duration-300 flex-shrink-0 ${
                                                                justAdded
                                                                    ? "bg-emerald-600 text-white"
                                                                    : "bg-amber-500 text-white hover:bg-amber-600"
                                                            }`}
                                                        >
                                                            {justAdded ? (
                                                                <>
                                                                    <RiCheckLine className="w-4 h-4" />
                                                                    Added!
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <RiShoppingCartLine className="w-4 h-4" />
                                                                    Add to Cart
                                                                    {isInCart && (
                                                                        <span className="ml-1 bg-white/20 px-1.5 rounded-full text-xs">
                                                                            {
                                                                                cartItem.quantity
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </>
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>
                        )
                    ) : (
                        <div className="text-center py-20">
                            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <RiSearchLine className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                No products found
                            </h3>
                            <p className="text-gray-500">
                                Try adjusting your category filter.
                            </p>
                            <button
                                onClick={() => handleCategoryChange("all")}
                                className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700 underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                <Footer />
            </div>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const images = getProductImages(
                                    selectedProduct.images,
                                );
                                const rating =
                                    parseFloat(selectedProduct.rating) || 4.0;

                                return (
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="relative md:w-1/2 bg-gray-100">
                                            <img
                                                src={images[modalImageIndex]}
                                                alt={selectedProduct.name}
                                                className="w-full h-64 md:h-[500px] object-cover"
                                            />

                                            {/* Close Button */}
                                            <button
                                                onClick={() =>
                                                    setSelectedProduct(null)
                                                }
                                                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                            >
                                                <RiCloseLine className="w-6 h-6" />
                                            </button>

                                            {/* Navigation Arrows */}
                                            {images.length > 1 && (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            setModalImageIndex(
                                                                (prev) =>
                                                                    prev === 0
                                                                        ? images.length -
                                                                          1
                                                                        : prev -
                                                                          1,
                                                            )
                                                        }
                                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                                    >
                                                        <RiArrowLeftSLine className="w-6 h-6" />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setModalImageIndex(
                                                                (prev) =>
                                                                    prev ===
                                                                    images.length -
                                                                        1
                                                                        ? 0
                                                                        : prev +
                                                                          1,
                                                            )
                                                        }
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                                                    >
                                                        <RiArrowRightSLine className="w-6 h-6" />
                                                    </button>
                                                </>
                                            )}

                                            {/* Thumbnail Strip */}
                                            {images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 rounded-lg p-2">
                                                    {images.map((img, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() =>
                                                                setModalImageIndex(
                                                                    idx,
                                                                )
                                                            }
                                                            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                                                idx ===
                                                                modalImageIndex
                                                                    ? "border-emerald-500"
                                                                    : "border-transparent opacity-60 hover:opacity-100"
                                                            }`}
                                                        >
                                                            <img
                                                                src={img}
                                                                alt=""
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Details Section */}
                                        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[500px]">
                                            {/* Category Badge */}
                                            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
                                                {selectedProduct.category}
                                            </span>

                                            {/* Product Name */}
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-montserrat">
                                                {selectedProduct.name}
                                            </h2>

                                            {/* Star Rating */}
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => {
                                                    if (
                                                        i < Math.floor(rating)
                                                    ) {
                                                        return (
                                                            <RiStarFill
                                                                key={i}
                                                                className="w-5 h-5 text-amber-400"
                                                            />
                                                        );
                                                    } else if (i < rating) {
                                                        return (
                                                            <RiStarHalfFill
                                                                key={i}
                                                                className="w-5 h-5 text-amber-400"
                                                            />
                                                        );
                                                    } else {
                                                        return (
                                                            <RiStarLine
                                                                key={i}
                                                                className="w-5 h-5 text-gray-300"
                                                            />
                                                        );
                                                    }
                                                })}
                                                <span className="text-sm text-gray-500 ml-2">
                                                    (
                                                    {selectedProduct.rating_count ||
                                                        0}{" "}
                                                    reviews)
                                                </span>
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {selectedProduct.free_delivery && (
                                                    <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                        Free Delivery
                                                    </span>
                                                )}
                                                {selectedProduct.is_best && (
                                                    <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                        Best Seller
                                                    </span>
                                                )}
                                                {selectedProduct.is_popular && (
                                                    <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                        Popular
                                                    </span>
                                                )}
                                                {selectedProduct.free_next_day_delivery && (
                                                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                        Free Next Day Delivery
                                                    </span>
                                                )}
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {selectedProduct.description}
                                            </p>

                                            {/* Price */}
                                            <div className="mb-6">
                                                <span className="text-3xl font-bold text-emerald-600">
                                                    $
                                                    {parseFloat(
                                                        selectedProduct.price,
                                                    ).toFixed(2)}
                                                </span>
                                                {selectedProduct.previous_price &&
                                                    parseFloat(
                                                        selectedProduct.previous_price,
                                                    ) >
                                                        parseFloat(
                                                            selectedProduct.price,
                                                        ) && (
                                                        <span className="ml-3 text-lg text-gray-400 line-through">
                                                            $
                                                            {parseFloat(
                                                                selectedProduct.previous_price,
                                                            ).toFixed(2)}
                                                        </span>
                                                    )}
                                            </div>

                                            {/* Stock Info */}
                                            <p className="text-sm text-gray-500 mb-6">
                                                {selectedProduct.stock > 0 ? (
                                                    <span className="text-emerald-600 font-semibold">
                                                        {selectedProduct.stock}{" "}
                                                        in stock
                                                    </span>
                                                ) : (
                                                    <span className="text-red-500 font-semibold">
                                                        Out of stock
                                                    </span>
                                                )}
                                            </p>

                                            {/* Add to Cart Button */}
                                            <button
                                                onClick={() => {
                                                    addToCart(selectedProduct);
                                                }}
                                                disabled={
                                                    selectedProduct.stock === 0
                                                }
                                                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg transition-colors duration-300 ${
                                                    addedToCart[
                                                        selectedProduct.id
                                                    ]
                                                        ? "bg-emerald-600 text-white"
                                                        : selectedProduct.stock ===
                                                            0
                                                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                          : "bg-amber-500 text-white hover:bg-amber-600"
                                                }`}
                                            >
                                                {addedToCart[
                                                    selectedProduct.id
                                                ] ? (
                                                    <>
                                                        <RiCheckLine className="w-5 h-5" />
                                                        Added to Cart!
                                                    </>
                                                ) : (
                                                    <>
                                                        <RiShoppingCartLine className="w-5 h-5" />
                                                        Add to Cart
                                                    </>
                                                )}
                                            </button>

                                            {/* Share Section */}
                                            <div className="mt-6 pt-6 border-t border-gray-200">
                                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                                    Share this product
                                                </p>
                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() =>
                                                            shareToFacebook(
                                                                selectedProduct,
                                                            )
                                                        }
                                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
                                                        title="Share on Facebook"
                                                    >
                                                        <RiFacebookFill className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            shareToPinterest(
                                                                selectedProduct,
                                                                images[
                                                                    modalImageIndex
                                                                ],
                                                            )
                                                        }
                                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E60023] text-white hover:opacity-90 transition-opacity"
                                                        title="Share on Pinterest"
                                                    >
                                                        <RiPinterestFill className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            shareToTwitter(
                                                                selectedProduct,
                                                            )
                                                        }
                                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-90 transition-opacity"
                                                        title="Share on Twitter/X"
                                                    >
                                                        <RiTwitterXFill className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            shareToEmail(
                                                                selectedProduct,
                                                            )
                                                        }
                                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 text-white hover:opacity-90 transition-opacity"
                                                        title="Share via Email"
                                                    >
                                                        <RiMailLine className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
