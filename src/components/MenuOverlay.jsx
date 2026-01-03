import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MenuOverlay({ isOpen, onClose }) {
    const links = [
        { label: 'Shop', id: 'signature' },
        { label: 'Seasonal', id: 'seasonal' },
        { label: 'Events & Weddings', id: 'events' },
        { label: 'Our Story', id: 'about' },
        { label: 'Process', id: 'process' },
        { label: 'Contact', id: 'contact' },
    ];

    const handleLinkClick = (id) => {
        onClose();
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-verdant-forest/60 text-verdant-cream flex flex-col justify-center items-center backdrop-blur-xl"
                >
                    <div className="absolute top-6 right-6 md:right-12">
                        <X
                            className="w-8 h-8 cursor-pointer hover:rotate-90 transition-transform duration-500"
                            onClick={onClose}
                        />
                    </div>

                    <nav className="flex flex-col gap-8 text-center">
                        {links.map((item, index) => (
                            <motion.button
                                key={item.label}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
                                onClick={() => handleLinkClick(item.id)}
                                className="font-serif text-3xl sm:text-4xl md:text-6xl hover:text-verdant-sage transition-colors italic hover:not-italic bg-transparent border-none cursor-pointer"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
