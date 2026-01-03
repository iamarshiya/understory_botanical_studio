import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBackground from '../assets/images/hero_background_1766829147990.png';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-verdant-forest">
            {/* Background Parallax Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroBackground}
                    alt="Deep green botanical background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl"
                >
                    <span className="block font-sans text-verdant-cream text-xs md:text-sm tracking-[0.3em] mb-6 uppercase opacity-90">
                        Handcrafted Botanical Arrangements
                    </span>
                    <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-verdant-cream leading-[1.1] md:leading-[0.9] mb-10 tracking-tight">
                        Understory <br className="hidden md:block" /> Botanical <br className="hidden md:block" /> Studio
                    </h1>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative overflow-hidden px-10 py-4 rounded-full border border-verdant-cream/30 text-verdant-cream font-sans text-xs tracking-[0.2em] uppercase hover:bg-verdant-cream hover:text-verdant-forest transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]"
                    >
                        <span className="relative z-10">Explore Arrangements</span>
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-verdant-cream/60 z-20 flex flex-col items-center gap-2"
            >
                <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-8 bg-verdant-cream/40"></div>
            </motion.div>
        </div>
    );
}
