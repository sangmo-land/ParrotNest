import { Head, Link, useForm } from "@inertiajs/react";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import PublicNavbar from "@/Components/PublicNavbar";
import Footer from "@/Components/Footer";
import {
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
    FaLink,
    FaInstagram,
    FaTiktok,
    FaCheck,
} from "react-icons/fa";

const CommentItem = ({
    comment,
    depth = 0,
    replyingTo,
    handleReply,
    submitComment,
    data,
    setData,
    setReplyingTo,
    processing,
    errors,
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className={`flex gap-4 ${depth > 0 ? "mt-4" : ""}`}>
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-bold flex-shrink-0">
                {comment.user ? comment.user.name[0] : "G"}
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-stone-900">
                        {comment.user
                            ? comment.user.name
                            : comment.guest_name || "Guest"}
                    </span>
                    <span className="text-xs text-stone-400">
                        {new Date(comment.created_at).toLocaleDateString(
                            undefined,
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            },
                        )}
                    </span>
                </div>
                <p className="text-stone-600 leading-relaxed bg-stone-50 p-4 rounded-xl rounded-tl-none mb-2">
                    {comment.body}
                </p>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={() => handleReply(comment.id)}
                        className="text-emerald-600 text-xs font-bold hover:underline"
                    >
                        Reply
                    </button>
                    {comment.replies && comment.replies.length > 0 && (
                        <>
                            <span className="text-stone-300">•</span>
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-stone-500 text-xs font-bold hover:text-stone-700 flex items-center gap-1"
                            >
                                {isExpanded ? (
                                    <>
                                        <span>−</span> Hide Replies
                                    </>
                                ) : (
                                    <>
                                        <span>+</span> Show{" "}
                                        {comment.replies.length} Replies
                                    </>
                                )}
                            </button>
                        </>
                    )}
                </div>

                {replyingTo === comment.id && (
                    <form onSubmit={submitComment} className="mt-4">
                        <textarea
                            value={data.body}
                            onChange={(e) =>
                                setData((prev) => ({
                                    ...prev,
                                    body: e.target.value,
                                }))
                            }
                            placeholder="Write a reply..."
                            className="w-full rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[80px] resize-y p-3 text-sm text-stone-700 placeholder-stone-400 bg-white"
                            autoFocus
                        ></textarea>
                        {errors.body && (
                            <div className="text-red-500 text-xs mt-1">
                                {errors.body}
                            </div>
                        )}
                        <div className="flex justify-end gap-2 mt-2">
                            <button
                                type="button"
                                onClick={() => setReplyingTo(null)}
                                className="text-stone-400 hover:text-stone-600 text-xs font-bold px-3 py-1"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing || errors.body}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full font-bold text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing && replyingTo === comment.id
                                    ? "Posting..."
                                    : "Reply"}
                            </button>
                        </div>
                    </form>
                )}

                {isExpanded &&
                    comment.replies &&
                    comment.replies.length > 0 && (
                        <div className="mt-4 pl-4 border-l-2 border-stone-100">
                            {comment.replies.map((reply) => (
                                <CommentItem
                                    key={reply.id}
                                    comment={reply}
                                    depth={depth + 1}
                                    replyingTo={replyingTo}
                                    handleReply={handleReply}
                                    submitComment={submitComment}
                                    data={data}
                                    setData={setData}
                                    setReplyingTo={setReplyingTo}
                                    processing={processing}
                                    errors={errors}
                                />
                            ))}
                        </div>
                    )}
            </div>
        </div>
    );
};

export default function Show({ auth, parrot, similarParrots, comments }) {
    const [toast, setToast] = useState(null);

    const showNotification = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    const handleCopyLink = async (platform = null) => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            if (platform) {
                showNotification(`Link copied! Ready to share on ${platform}.`);
            } else {
                showNotification("Link copied to clipboard!");
            }
        } catch (err) {
            console.error("Failed to copy text: ", err);
            showNotification("Failed to copy link");
        }
    };

    const [mainImage, setMainImage] = useState(
        parrot.images && parrot.images.length > 0
            ? `/storage/${parrot.images[0]}`
            : null,
    );

    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors,
        setError,
        clearErrors,
    } = useForm({
        body: "",
        parent_id: null,
    });

    // Real-time validation
    useEffect(() => {
        if (!data.body || data.body.length < 3) {
            clearErrors("body");
            return;
        }

        const timer = setTimeout(() => {
            axios
                .post(route("comments.validate"), { body: data.body })
                .then(() => {
                    clearErrors("body");
                })
                .catch((error) => {
                    if (error.response && error.response.status === 422) {
                        setError("body", error.response.data.errors.body[0]);
                    }
                });
        }, 500);

        return () => clearTimeout(timer);
    }, [data.body]);

    const [replyingTo, setReplyingTo] = useState(null);

    const submitComment = (e) => {
        e.preventDefault();
        post(`/parrots/${parrot.id}/comments`, {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setReplyingTo(null);
            },
        });
    };

    const handleReply = (commentId) => {
        if (!auth.user) {
            // Optional: redirect to login or show modal
            alert("Please log in to reply.");
            return;
        }
        setReplyingTo(commentId);
        clearErrors("body"); // Clear errors from previous context
        setData((prev) => ({ ...prev, parent_id: commentId, body: "" })); // Reset body when switching reply target
    };

    // Build recursive tree
    const commentTree = useMemo(() => {
        if (!comments) return [];
        const map = {};
        const roots = [];

        // First pass: map of items
        comments.forEach((comment) => {
            map[comment.id] = { ...comment, replies: [] };
        });

        // Second pass: attach structure
        comments.forEach((comment) => {
            if (comment.parent_id && map[comment.parent_id]) {
                map[comment.parent_id].replies.push(map[comment.id]);
            } else {
                roots.push(map[comment.id]);
            }
        });

        // Helper to sort by date recursively (optional, depending on backend sort)
        // comments are already sorted by latest on backend, so roots are latest first.
        // replies might need sorting if they weren't strictly ordered.
        // Let's assume backend sort is sufficient for now or add explicit sort here.

        return roots;
    }, [comments]);

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-stone-800">
            <Head title={`${parrot.name} - Available for Adoption`} />

            <PublicNavbar auth={auth} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Section */}
                        <div className="bg-stone-50 h-96 lg:h-auto min-h-[500px] relative">
                            {/* Breadcrumb Overlay */}
                            <div className="absolute top-6 left-6 z-10 flex text-xs font-bold uppercase tracking-widest text-white/80 bg-black/20 backdrop-blur px-3 py-1.5 rounded-full">
                                <Link
                                    href="/parrots"
                                    className="hover:text-white"
                                >
                                    Available
                                </Link>
                                <span className="mx-2">/</span>
                                <span>{parrot.name}</span>
                            </div>

                            {mainImage ? (
                                mainImage.endsWith(".mp4") ||
                                mainImage.endsWith(".mov") ||
                                mainImage.endsWith(".avi") ? (
                                    <video
                                        controls
                                        src={mainImage}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={mainImage}
                                        alt={parrot.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
                                    <span className="text-9xl mb-4 opacity-50">
                                        🦜
                                    </span>
                                    <span className="uppercase tracking-widest text-sm font-bold">
                                        Image Not Available
                                    </span>
                                </div>
                            )}

                            {/* Thumbnails (Images & Video) */}
                            {(parrot.images || parrot.video) && (
                                <div className="absolute bottom-6 left-6 right-6 flex gap-3 overflow-x-auto pb-2 noscrollbar">
                                    {parrot.images &&
                                        parrot.images.map((img, index) => (
                                            <button
                                                key={`img-${index}`}
                                                onClick={() =>
                                                    setMainImage(
                                                        `/storage/${img}`,
                                                    )
                                                }
                                                className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                                                    mainImage ===
                                                    `/storage/${img}`
                                                        ? "border-[#D4AF37] shadow-lg scale-105"
                                                        : "border-white/50 opacity-80 hover:opacity-100"
                                                }`}
                                            >
                                                <img
                                                    src={`/storage/${img}`}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}

                                    {/* Video Thumbnail */}
                                    {parrot.video && (
                                        <button
                                            onClick={() =>
                                                setMainImage(
                                                    `/storage/${parrot.video}`,
                                                )
                                            }
                                            className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all flex items-center justify-center bg-black/50 ${
                                                mainImage ===
                                                `/storage/${parrot.video}`
                                                    ? "border-[#D4AF37] shadow-lg scale-105"
                                                    : "border-white/50 opacity-80 hover:opacity-100"
                                            }`}
                                        >
                                            <span className="text-white text-2xl">
                                                ▶
                                            </span>
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="mb-2">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                                    {parrot.species?.name}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
                                {parrot.name}
                            </h1>

                            {/* Social Share Buttons */}
                            <div className="flex flex-col gap-3 mb-8">
                                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                                    Share
                                </span>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                                                "_blank",
                                            )
                                        }
                                        className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                                        title="Share on Facebook"
                                    >
                                        <FaFacebookF size={16} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out ${parrot.name} on ParrotNest!`)}&url=${encodeURIComponent(window.location.href)}`,
                                                "_blank",
                                            )
                                        }
                                        className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white transition-all transform hover:scale-110"
                                        title="Share on Twitter"
                                    >
                                        <FaTwitter size={16} />
                                    </button>
                                    <button
                                        onClick={() =>
                                            window.open(
                                                `https://wa.me/?text=${encodeURIComponent(`Check out ${parrot.name} on ParrotNest! ${window.location.href}`)}`,
                                                "_blank",
                                            )
                                        }
                                        className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all transform hover:scale-110"
                                        title="Share on WhatsApp"
                                    >
                                        <FaWhatsapp size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleCopyLink("Instagram");
                                            window.open(
                                                "https://www.instagram.com/",
                                                "_blank",
                                            );
                                        }}
                                        className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110"
                                        title="Share on Instagram (Copy Link)"
                                    >
                                        <FaInstagram size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleCopyLink("TikTok");
                                            window.open(
                                                "https://www.tiktok.com/",
                                                "_blank",
                                            );
                                        }}
                                        className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white hover:bg-black transition-all transform hover:scale-110 border border-stone-800"
                                        title="Share on TikTok (Copy Link)"
                                    >
                                        <FaTiktok size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleCopyLink()}
                                        className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-600 hover:text-white transition-all transform hover:scale-110"
                                        title="Copy Link"
                                    >
                                        <FaLink size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 pb-10 border-b border-stone-100">
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Gender
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg flex justify-center gap-1">
                                        {parrot.gender === "Male" ? (
                                            <span className="text-blue-500">
                                                ♂
                                            </span>
                                        ) : (
                                            <span className="text-rose-500">
                                                ♀
                                            </span>
                                        )}
                                        {parrot.gender}
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Age
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg">
                                        {parrot.age} Yrs
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        Bonus
                                    </span>
                                    <span
                                        className={`font-bold text-lg ${
                                            parrot.comes_with_cage
                                                ? "text-[#D4AF37]"
                                                : "text-stone-800"
                                        }`}
                                    >
                                        {parrot.comes_with_cage
                                            ? "Included"
                                            : "None"}
                                    </span>
                                </div>
                                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 text-center">
                                    <span className="block text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">
                                        ID #
                                    </span>
                                    <span className="font-bold text-stone-800 text-lg">
                                        {parrot.id}1092
                                    </span>
                                </div>
                            </div>

                            <div className="prose prose-stone mb-10 text-stone-600 leading-relaxed">
                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
                                    About Me
                                </h3>
                                <p className="mb-6">{parrot.description}</p>

                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">
                                    Personality
                                </h3>
                                <p>{parrot.personality}</p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-stone-100">
                                <div>
                                    <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                                        Adoption Fee
                                    </span>
                                    <span className="text-4xl font-serif font-bold text-stone-900 tracking-tight">
                                        $
                                        {Number(
                                            parrot.adoption_fee,
                                        ).toLocaleString()}
                                    </span>
                                </div>

                                {auth?.user ? (
                                    <Link
                                        href={route(
                                            "applications.create",
                                            parrot.id,
                                        )}
                                        className="px-10 py-5 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/30 transform active:scale-95"
                                    >
                                        Apply Now
                                    </Link>
                                ) : (
                                    <Link
                                        href={route("login")}
                                        className="px-8 py-5 border-[2px] border-stone-200 text-stone-500 font-bold uppercase tracking-widest text-sm rounded-xl hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                                    >
                                        Log in to Adopt
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                {parrot.video && (
                    <div className="mt-8 bg-white rounded-[2rem] shadow-sm border border-stone-100 p-8 sm:p-12">
                        <h3 className="text-2xl font-bold font-serif text-stone-900 mb-8 flex items-center gap-3">
                            <span>📹</span> Video of {parrot.name}
                        </h3>
                        <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200">
                            <video
                                controls
                                src={`/storage/${parrot.video}`}
                                className="w-full max-h-[600px] object-cover"
                                controlsList="nodownload"
                            />
                        </div>
                    </div>
                )}

                {/* Comments Section */}
                {comments && (
                    <div className="mt-16 bg-white rounded-[2rem] shadow-sm border border-stone-100 p-8 sm:p-12">
                        <h3 className="text-2xl font-bold font-serif text-stone-900 mb-8 flex items-center gap-3">
                            <span>💬</span> Comments
                            <span className="text-base font-sans font-medium text-stone-400">
                                ({comments.length})
                            </span>
                        </h3>

                        <div className="space-y-8 mb-12">
                            {commentTree.length > 0 ? (
                                commentTree.map((comment) => (
                                    <CommentItem
                                        key={comment.id}
                                        comment={comment}
                                        replyingTo={replyingTo}
                                        data={data}
                                        setData={setData}
                                        handleReply={handleReply}
                                        submitComment={submitComment}
                                        setReplyingTo={setReplyingTo}
                                        processing={processing}
                                        errors={errors}
                                    />
                                ))
                            ) : (
                                <p className="text-stone-500 italic text-center py-8">
                                    No comments yet. Be the first to say hello
                                    to {parrot.name}!
                                </p>
                            )}
                        </div>

                        {/* Comment Form */}
                        <div className="border-t border-stone-100 pt-8">
                            <h4 className="font-bold text-lg mb-4">
                                Leave a Comment
                            </h4>
                            {auth.user ? (
                                <form
                                    onSubmit={(e) => {
                                        // Ensure parent_id is null for main form
                                        if (replyingTo) {
                                            setReplyingTo(null);
                                            setData((prev) => ({
                                                ...prev,
                                                parent_id: null,
                                            }));
                                        }
                                        submitComment(e);
                                    }}
                                >
                                    <div className="mb-4">
                                        <textarea
                                            value={
                                                replyingTo === null
                                                    ? data.body
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData({
                                                    body: e.target.value,
                                                    parent_id: null,
                                                })
                                            }
                                            placeholder={`Ask a question or share some love for ${parrot.name}...`}
                                            className="w-full rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[100px] resize-y p-4 text-stone-700 placeholder-stone-400 bg-stone-50/50"
                                        ></textarea>
                                        {errors.body && replyingTo === null && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.body}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={
                                                processing ||
                                                (replyingTo === null &&
                                                    errors.body)
                                            }
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {processing && replyingTo === null
                                                ? "Posting..."
                                                : "Post Comment"}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="bg-stone-50 rounded-xl p-8 text-center border border-stone-100">
                                    <p className="text-stone-600 mb-4">
                                        Please log in to leave a comment.
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <Link
                                            href={route("login")}
                                            className="text-emerald-600 font-bold hover:underline"
                                        >
                                            Log In
                                        </Link>
                                        <span className="text-stone-300">
                                            |
                                        </span>
                                        <Link
                                            href={route("register")}
                                            className="text-emerald-600 font-bold hover:underline"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Similar Parrots */}
                {similarParrots.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl pt-1">❤️</span>
                            <h2 className="text-3xl font-serif font-bold text-stone-900">
                                You Might Also Like
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {similarParrots.map((similar) => (
                                <Link
                                    key={similar.id}
                                    href={route("parrots.show", similar.id)}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                        <div className="aspect-[4/5] bg-stone-100 relative overflow-hidden">
                                            {similar.images &&
                                            similar.images.length > 0 ? (
                                                <img
                                                    src={`/storage/${similar.images[0]}`}
                                                    alt={similar.name}
                                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-4xl text-stone-200">
                                                    🦜
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-[#D4AF37] transition-colors mb-1">
                                                {similar.name}
                                            </h3>
                                            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
                                                {similar.age} years •{" "}
                                                {similar.gender}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <Footer />

            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-stone-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 border border-stone-700 backdrop-blur-sm bg-opacity-95"
                    >
                        <div className="bg-[#D4AF37] rounded-full p-1 text-stone-900">
                            <FaCheck size={10} />
                        </div>
                        <span className="font-medium text-sm">{toast}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
