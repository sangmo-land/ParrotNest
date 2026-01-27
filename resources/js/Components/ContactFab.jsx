import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaWhatsapp, FaHeadset } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ContactFab({ contact }) {
    const [isOpen, setIsOpen] = useState(false);

    const phone = contact?.phone || "";
    const email = contact?.email || "";

    // Format phone for WhatsApp (remove spaces, dashes, etc.)
    const whatsappNumber = phone.replace(/[\s\-\(\)]/g, "");

    const contactOptions = [
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            href: `https://wa.me/${whatsappNumber}`,
            color: "bg-green-500 hover:bg-green-600",
            delay: 0,
        },
        {
            name: "Email",
            icon: FaEnvelope,
            href: `mailto:${email}`,
            color: "bg-blue-500 hover:bg-blue-600",
            delay: 0.05,
        },
        {
            name: "Call",
            icon: FaPhone,
            href: `tel:${phone}`,
            color: "bg-orange-500 hover:bg-orange-600",
            delay: 0.1,
        },
    ];

    return (
        <div className="fixed bottom-6 right-24 z-[99] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-3 mb-4"
                    >
                        {contactOptions.map((option, index) => (
                            <motion.a
                                key={option.name}
                                href={option.href}
                                target={option.name === "WhatsApp" ? "_blank" : "_self"}
                                rel={option.name === "WhatsApp" ? "noopener noreferrer" : ""}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                transition={{ delay: option.delay, duration: 0.2 }}
                                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white transition-all ${option.color}`}
                                title={option.name}
                            >
                                <option.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
                    isOpen
                        ? "bg-gray-400"
                        : "bg-purple-600 hover:bg-purple-700"
                } text-white`}
            >
                {isOpen ? <IoClose size={24} /> : <FaHeadset size={24} />}
            </motion.button>
        </div>
    );
}
