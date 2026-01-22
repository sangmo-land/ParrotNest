import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { 
            id: 1, 
            type: 'bot', 
            text: "Squawk! Hello! I'm Polly, your AI assistant. I can help you with adoption, care tips, or finding the perfect feathered friend. What's on your mind?",
            options: ['Adoption Process', 'Shipping', 'Diet & Care', 'Available Parrots']
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const knowledgeBase = {
        'adoption': "Our adoption process is simple! 1. Browse our available parrots. 2. Submit an application. 3. Brief interview. 4. Bring your new friend home! We ensure all birds go to loving, prepared homes.",
        'shipping': "We offer safe, climate-controlled shipping across the country for $150. We use specialized pet couriers to ensure your parrot arrives happy and healthy.",
        'delivery': "We offer safe, climate-controlled shipping across the country for $150. We use specialized pet couriers to ensure your parrot arrives happy and healthy.",
        'cost': "Adoption fees vary by species. Budgies start around $25, while larger Macaws can range from $1,000 to $3,000 depending on age and rarity.",
        'price': "Adoption fees vary by species. Budgies start around $25, while larger Macaws can range from $1,000 to $3,000 depending on age and rarity.",
        'diet': "A healthy parrot diet consists of 60% high-quality pellets, 30% fresh vegetables & fruits, and 10% seeds/nuts as treats. Avoid avocado, chocolate, and onions!",
        'food': "A healthy parrot diet consists of 60% high-quality pellets, 30% fresh vegetables & fruits, and 10% seeds/nuts as treats. Avoid avocado, chocolate, and onions!",
        'care': "Parrots need a spacious cage, daily social interaction, and mental stimulation (toys!). They are intelligent social creatures that thrive on attention.",
        'available': "You can view all our available parrots on the 'Shop' or 'Available Parrots' page. We update our listings weekly!",
        'shop': "You can view all our available parrots on the 'Shop' or 'Available Parrots' page. We update our listings weekly!",
        'contact': "You can reach us via email at support@parrotnest.com or call us at (555) 123-4567 during business hours.",
        'hello': "Squawk! Hi there! How can I help you today?",
        'hi': "Squawk! Hi there! How can I help you today?",
        'thanks': "You're welcome! Let me know if you need anything else. Squawk!",
    };

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        // User message
        const newUserMsg = { id: Date.now(), type: 'user', text: text };
        setMessages(prev => [...prev, newUserMsg]);
        setInputText('');
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            let botResponse = "I'm not sure about that. Could you try asking about adoption, shipping, or care?";
            let options = null;

            const lowerText = text.toLowerCase();
            
            // Simple keyword matching
            for (const [key, value] of Object.entries(knowledgeBase)) {
                if (lowerText.includes(key)) {
                    botResponse = value;
                    break;
                }
            }

            // Contextual options
            if (lowerText.includes('adoption')) {
                options = ['View Available Parrots', 'Application Form', 'Shipping Info'];
            } else if (lowerText.includes('care') || lowerText.includes('diet')) {
                options = ['Safe Foods', 'Cage Requirements', 'Vet Info'];
            }

            const newBotMsg = { 
                id: Date.now() + 1, 
                type: 'bot', 
                text: botResponse,
                options: options 
            };
            
            setMessages(prev => [...prev, newBotMsg]);
            setIsTyping(false);
        }, 1000); // 1.5s delay
    };

    const handleOptionClick = (option) => {
        handleSendMessage(option);
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
                        style={{ maxHeight: '600px', height: '80vh' }}
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white p-2 rounded-full">
                                    <FaRobot className="text-emerald-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">ParrotBot AI</h3>
                                    <span className="flex items-center gap-1 text-xs text-emerald-100 opacity-90">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white hover:bg-emerald-500/50 p-2 rounded-lg transition"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((msg) => (
                                <div 
                                    key={msg.id} 
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                                            msg.type === 'user' 
                                                ? 'bg-emerald-600 text-white rounded-br-none' 
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                                        }`}
                                    >
                                        <p className="leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Render Options for the last message if it's from bot and has options */}
                            {!isTyping && messages[messages.length - 1]?.type === 'bot' && messages[messages.length - 1]?.options && (
                                <div className="flex flex-wrap gap-2 mt-2 ml-1">
                                    {messages[messages.length - 1].options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(opt)}
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
                                onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}
                                className="flex gap-2"
                            >
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Ask about parrots..."
                                    className="flex-1 bg-gray-50 text-gray-800 text-sm rounded-full border-transparent focus:border-emerald-500 focus:bg-white focus:ring-0 px-4 py-2.5 transition"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputText.trim() || isTyping}
                                    className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-700 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaPaperPlane size={14} className="ml-0.5" />
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
                    isOpen ? 'bg-gray-400 rotate-90' : 'bg-emerald-600 hover:bg-emerald-700'
                } text-white`}
            >
                {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={28} />}
            </motion.button>
        </div>
    );
}
