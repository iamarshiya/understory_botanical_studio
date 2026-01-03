import React from 'react';
import { motion } from 'framer-motion';
import founderImg from '../assets/images/founder_portrait_1766829595354.png';

export default function About() {
    return (
        <section id="about" className="relative w-full py-32 md:py-48 px-6 bg-verdant-cream overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Image Column - Founder Portrait */}
                <div className="relative order-2 md:order-1 flex justify-center md:justify-end">
                    <motion.div
                        className="relative w-64 h-64 md:w-96 md:h-96"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Masked Image Container */}
                        <div className="w-full h-full rounded-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20 p-3 shadow-2xl relative z-10">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                {/* Using local image */}
                                <img
                                    src={founderImg}
                                    alt="Founder portrait"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>

                        {/* Decorative element */}
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-4 -right-4 w-24 h-24 border border-dashed border-verdant-clay/50 rounded-full z-[-1]"
                        />
                    </motion.div>
                </div>

                {/* Text Column */}
                <div className="order-1 md:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-sans text-verdant-clay text-xs tracking-widest uppercase mb-4 block">About Us</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-verdant-forest mb-8 leading-tight">
                            Rooted in nature, <br /> curated for <span className="italic text-verdant-sage">calm.</span>
                        </h2>
                        <p className="font-sans text-verdant-brown/80 leading-relaxed text-lg mb-6">
                            Understory began with a simple belief: that flowers are not just decorations, but mediums of storytelling. We forage, gather, and compose with an editor's eye, stripping away the unnecessary to reveal the raw beauty of form and season.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-verdant-sage"></div>
                            <p className="font-serif italic text-verdant-forest text-lg">Sustainable sourcing. Intentional design.</p>
                        </div>

                        <div className="mt-10">
                            {/* Signature image placeholder removed */}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
