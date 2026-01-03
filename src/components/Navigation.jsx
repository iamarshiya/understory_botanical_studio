import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({ onMenuClick, onCartClick, cartCount = 0 }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-500 ${scrolled ? 'bg-verdant-forest/30 backdrop-blur-md shadow-sm border-b border-verdant-cream/10 py-4' : 'bg-transparent py-6 mix-blend-difference'}`}>
            <div className="relative flex justify-between items-center max-w-[1920px] mx-auto text-verdant-cream">
                {/* Left: Menu Toggle */}
                <div className="flex items-center gap-4 group cursor-pointer z-[60]" onClick={onMenuClick}>
                    <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-500 ease-out" />
                    <span className="hidden md:block font-sans tracking-widest text-xs uppercase opacity-80 group-hover:opacity-100 transition-opacity">Menu</span>
                </div>

                {/* Center: Brand Title */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none w-max">
                    <h1
                        className="font-serif text-lg sm:text-xl md:text-3xl tracking-wide cursor-pointer whitespace-nowrap leading-tight pointer-events-auto"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Understory<span className="hidden sm:inline"> - Botanical Studio</span>
                    </h1>
                </div>

                {/* Right: Cart Icon */}
                <div className="flex items-center gap-6 z-[60]">
                    <button className="relative cursor-pointer hover:scale-110 transition-transform duration-500 ease-out" onClick={onCartClick}>
                        <ShoppingBag className="w-5 h-5" />
                        <AnimatePresence>
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    className="absolute -top-1 -right-1 w-4 h-4 bg-verdant-sage rounded-full flex items-center justify-center text-[8px] font-sans font-bold text-verdant-forest shadow-lg"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>
        </nav>
    );
}
