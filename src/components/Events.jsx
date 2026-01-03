import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import galaImg from '../assets/images/events_gala.png';

const eventImages = [
    { id: 1, type: 'Wedding', description: 'Timeless elegance for your special day.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', width: 'md:col-span-2' },
    { id: 2, type: 'Corporate', description: 'Professional ambiance with a natural touch.', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800', width: 'md:col-span-1' },
    { id: 3, type: 'Garden Party', description: 'Whimsical arrangements for outdoor joy.', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800', width: 'md:col-span-1' },
    { id: 4, type: 'Gala', description: 'Grand designs for unforgettable nights.', img: galaImg, width: 'md:col-span-2' },
];

export default function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInquire = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);
    return (
        <section id="events" className="py-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-sans text-verdant-clay text-xs tracking-widest uppercase mb-2 block">Celebrations & Gatherings</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-verdant-forest mb-6">Events & Weddings</h2>
                        <p className="font-sans text-verdant-brown/80 leading-relaxed">
                            From intimate garden weddings to grand corporate galas, we curate floral landscapes that transform spaces.
                            Every arrangement is designed to reflect the mood, season, and your unique vision.
                        </p>
                    </div>
                    <button
                        onClick={handleInquire}
                        className="px-8 py-4 border border-verdant-forest text-verdant-forest hover:bg-verdant-forest hover:text-verdant-cream transition-all duration-300 font-serif italic text-lg rounded-full"
                    >
                        Inquire for Event
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {eventImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-xl ${item.width}`}
                        >
                            <img
                                src={item.img}
                                alt={item.type}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-500">
                                <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl italic">{item.type}</h3>
                                    <p className="font-sans text-xs text-white/80 mt-1 max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">{item.description}</p>
                                    <div className="w-0 group-hover:w-full h-0.5 bg-white/80 mt-2 transition-all duration-700 ease-out"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Inquiry Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-verdant-forest/40 backdrop-blur-sm z-[100]"
                            onClick={handleClose}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4"
                        >
                            <div className="bg-[#F6F4EF] w-full max-w-lg p-8 md:p-12 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-6 right-6 p-2 text-verdant-forest/50 hover:text-verdant-forest transition-colors rounded-full hover:bg-verdant-forest/5"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="text-center mb-8">
                                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-verdant-sage">Start the Conversation</span>
                                    <h3 className="font-serif text-3xl md:text-4xl mt-2 text-verdant-forest">Event Inquiry</h3>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setTimeout(handleClose, 1000); }}>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-white/50 border border-verdant-forest/10 p-4 rounded-lg focus:outline-none focus:border-verdant-forest/30 transition-colors font-sans"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full bg-white/50 border border-verdant-forest/10 p-4 rounded-lg focus:outline-none focus:border-verdant-forest/30 transition-colors font-sans"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <select className="w-full bg-white/50 border border-verdant-forest/10 p-4 rounded-lg focus:outline-none focus:border-verdant-forest/30 transition-colors font-sans text-verdant-brown/60">
                                                <option>Wedding</option>
                                                <option>Corporate</option>
                                                <option>Party</option>
                                                <option>Other</option>
                                            </select>
                                            <input
                                                type="date"
                                                className="w-full bg-white/50 border border-verdant-forest/10 p-4 rounded-lg focus:outline-none focus:border-verdant-forest/30 transition-colors font-sans text-verdant-brown/60"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Tell us about your event..."
                                            rows={3}
                                            className="w-full bg-white/50 border border-verdant-forest/10 p-4 rounded-lg focus:outline-none focus:border-verdant-forest/30 transition-colors font-sans resize-none"
                                        />
                                    </div>
                                    <button className="w-full py-4 bg-verdant-forest text-verdant-cream rounded-full hover:bg-verdant-sage transition-all duration-300 font-sans tracking-[0.2em] uppercase text-xs">
                                        Send Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
