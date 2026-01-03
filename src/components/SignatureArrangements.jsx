import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

import etherealImg from '../assets/images/signature_ethereal_1766829611206.png';
import autumnImg from '../assets/images/autumn_harvest.png';
import morningMistImg from '../assets/images/gallery_spring_1766829165282.png';
import desertRoseImg from '../assets/images/gallery_desert_1766829180482.png';
import velvetNightImg from '../assets/images/signature_velvet_1766829628799.png';

// Using local images where available, fallbacks to Placeholder or Unsplash if missing
const arrangements = [
    { id: 1, title: 'The Ethereal', price: '$85', img: etherealImg, description: 'White lilies and delicate baby\'s breath, perfect for peaceful moments.' },
    { id: 2, title: 'Autumn Harvest', price: '$120', img: autumnImg, description: 'Warm orange tones with dried wheat and marigolds.' },
    { id: 3, title: 'Morning Mist', price: '$100', img: morningMistImg, description: 'Soft pastels and eucalyptus for a refreshing start.' },
    { id: 4, title: 'Desert Rose', price: '$110', img: desertRoseImg, description: 'Hardy succulents paired with dusty pink roses.' },
    { id: 5, title: 'Velvet Night', price: '$150', img: velvetNightImg, description: 'Deep red roses and dark foliage for dramatic elegance.' },
    { id: 6, title: 'Soft Dawn', price: '$75', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800', description: 'Light pinks and creams, capturing the first light of day.' },
];

export default function SignatureArrangements({ addToCart }) {
    return (
        <section id="signature" className="py-24 px-6 bg-verdant-cream">
            <div className="max-w-[1920px] mx-auto text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-verdant-forest mb-4">Signature Arrangements</h2>
                <p className="font-sans text-verdant-brown/70 tracking-wide uppercase text-xs">Curated for the Season</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {arrangements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className={`group relative overflow-hidden rounded-lg h-[450px] md:h-96 shadow-sm hover:shadow-xl transition-shadow duration-500`}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Glass Overlay - Visible on hover for desktop, always visible or easily accessible on mobile */}
                        <div className="absolute inset-x-4 bottom-4 translate-y-2 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
                            {/* Darker backdrop for better contrast on light images */}
                            <div className="bg-verdant-forest/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl text-verdant-cream shadow-2xl">
                                <div className="flex justify-between items-baseline mb-2 md:mb-4">
                                    <h3 className="font-serif text-xl md:text-2xl italic">{item.title}</h3>
                                    <span className="font-sans text-[10px] md:text-xs font-bold tracking-wider px-2 md:py-1 bg-white/10 rounded-full border border-white/10">{item.price}</span>
                                </div>
                                <p className="font-sans text-[10px] md:text-xs mb-3 md:mb-4 opacity-90 leading-relaxed font-light line-clamp-2 md:line-clamp-none">{item.description}</p>

                                <button
                                    onClick={() => addToCart(item)}
                                    className="w-full py-2.5 md:py-3 bg-verdant-cream text-verdant-forest hover:bg-white text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg transform active:scale-95"
                                >
                                    <Plus className="w-4 h-4" /> Add to Bag
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-16 block md:hidden">
                <button className="text-verdant-forest font-serif italic border-b border-verdant-forest/30 pb-1">View All Collection</button>
            </div>
        </section>
    );
}
