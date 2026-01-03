import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="relative bg-verdant-forest text-verdant-cream py-32 px-6 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-verdant-sage/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-verdant-clay/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

                {/* Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center h-full"
                >
                    <span className="block font-sans text-xs tracking-[0.2em] uppercase mb-8 text-verdant-sage">Get in Touch</span>
                    <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-none">
                        Let's create something <br /> <span className="italic font-light opacity-80 text-verdant-sage">beautiful.</span>
                    </h2>

                    <div className="flex flex-col gap-12 mb-16 font-sans text-sm tracking-wide opacity-80">
                        <div>
                            <p className="uppercase text-verdant-sage text-xs mb-2 tracking-widest">Visit Us</p>
                            <p>128 Organic Ave, Portland, OR</p>
                        </div>
                        <div>
                            <p className="uppercase text-verdant-sage text-xs mb-2 tracking-widest">Hours</p>
                            <p>Tue - Sat: 10am - 6pm</p>
                            <p>Sun - Mon: Closed</p>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-lg mt-12 md:mt-0"
                >
                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-verdant-sage transition-colors font-serif text-lg placeholder:font-sans placeholder:text-xs placeholder:uppercase placeholder:tracking-widest"
                                />
                            </div>
                            <div className="group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-verdant-sage transition-colors font-serif text-lg placeholder:font-sans placeholder:text-xs placeholder:uppercase placeholder:tracking-widest"
                                />
                            </div>
                        </div>
                        <div className="group">
                            <textarea
                                placeholder="Message"
                                rows={3}
                                className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-verdant-sage transition-colors font-serif text-lg placeholder:font-sans placeholder:text-xs placeholder:uppercase placeholder:tracking-widest resize-none"
                            />
                        </div>

                        <button className="mt-6 py-5 w-full bg-verdant-cream text-verdant-forest rounded-full hover:bg-verdant-sage hover:text-white transition-all duration-500 font-sans tracking-[0.2em] uppercase text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Send Inquiry
                        </button>
                    </form>
                </motion.div>

            </div>

            <footer className="mt-32 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                <h1 className="font-serif text-3xl tracking-wide">Understory <span className="text-verdant-sage italic">- Botanical Studio</span></h1>
                <div className="flex gap-12 font-sans text-[10px] mt-8 md:mt-0 uppercase tracking-[0.3em]">

                </div>
            </footer>
        </section>
    );
}
