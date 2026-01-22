import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaRobot,
    FaPaperPlane,
    FaTimes,
    FaCommentDots,
    FaRedo,
} from "react-icons/fa";
import axios from "axios";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: "bot",
            text: "Squawk! Hello! I'm Polly, your AI assistant. I can help you with adoption, care tips, or finding the perfect feathered friend. What's on your mind?",
            options: [
                "Adoption Process",
                "Shipping",
                "Diet & Care",
                "Available Parrots",
            ],
        },
    ]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        // User message
        const newUserMsg = { id: Date.now(), type: "user", text: text };
        setMessages((prev) => [...prev, newUserMsg]);
        setInputText("");
        setIsTyping(true);

        try {
            const response = await axios.post("/chatbot/message", {
                message: text,
            });

            const newBotMsg = {
                id: Date.now() + 1,
                type: "bot",
                text: response.data.response,
                options: null, // Backend could provide this later
            };

            setMessages((prev) => [...prev, newBotMsg]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 1,
                    type: "bot",
                    text: "Squawk! My brain connection is a bit fuzzy. Please try again later.",
                    options: null,
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleOptionClick = (option) => {
        handleSendMessage(option);
    };

    const handleRestart = () => {
        setMessages([
            {
                id: 1,
                type: "bot",
                text: "Squawk! Hello! I'm Polly, your AI assistant. I can help you with adoption, care tips, or finding the perfect feathered friend. What's on your mind?",
                options: [
                    "Adoption Process",
                    "Shipping",
                    "Diet & Care",
                    "Available Parrots",
                ],
            },
        ]);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden mb-4 border border-gray-100"
                        style={{ maxHeight: "600px", height: "80vh" }}
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full">
                                    <FaRobot className="text-emerald-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">
                                        ParrotBot AI
                                    </h3>
                                    <span className="flex items-center gap-1 text-xs text-emerald-100 opacity-90">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleRestart}
                                    className="text-white/80 hover:text-white hover:bg-emerald-500/50 p-2 rounded-lg transition"
                                    title="Restart Chat"
                                >
                                    <FaRedo className="hidden sm:block" />
                                    <FaRedo className="sm:hidden w-3 h-3" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 hover:text-white hover:bg-emerald-500/50 p-2 rounded-lg transition"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                                            msg.type === "user"
                                                ? "bg-emerald-600 text-white rounded-br-none"
                                                : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                                        }`}
                                    >
                                        {msg.type === "user" ? (
                                            <p className="leading-relaxed whitespace-pre-wrap">
                                                {msg.text}
                                            </p>
                                        ) : (
                                            <div
                                                className="prose prose-sm prose-emerald max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 leading-relaxed"
                                                dangerouslySetInnerHTML={{
                                                    __html: msg.text,
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <div className="flex gap-1">
                                            <span
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: "0ms",
                                                }}
                                            ></span>
                                            <span
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: "150ms",
                                                }}
                                            ></span>
                                            <span
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{
                                                    animationDelay: "300ms",
                                                }}
                                            ></span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Render Options for the last message if it's from bot and has options */}
                            {!isTyping &&
                                messages[messages.length - 1]?.type === "bot" &&
                                messages[messages.length - 1]?.options && (
                                    <div className="flex flex-wrap gap-2 mt-2 ml-1">
                                        {messages[
                                            messages.length - 1
                                        ].options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    handleOptionClick(opt)
                                                }
                                                className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition font-medium"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(inputText);
                                }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) =>
                                        setInputText(e.target.value)
                                    }
                                    placeholder="Ask about parrots..."
                                    className="flex-1 bg-gray-50 text-gray-800 text-sm rounded-full border-transparent focus:border-emerald-500 focus:bg-white focus:ring-0 px-4 py-2.5 transition"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim() || isTyping}
                                    className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-700 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPaperPlane
                                        size={14}
                                        className="ml-0.5"
                                    />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
                    isOpen
                        ? "bg-gray-400 rotate-90"
                        : "bg-emerald-600 hover:bg-emerald-700"
                } text-white`}
            >
                {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={28} />}
            </motion.button>
        </div>
    );
}
