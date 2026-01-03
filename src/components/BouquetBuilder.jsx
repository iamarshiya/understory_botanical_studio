import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Gift, Plus } from 'lucide-react';

import roseImg from '../assets/images/rose.png';
import liliesImg from '../assets/images/elegant_lilies.png';
import peoniesImg from '../assets/images/soft_peonies.png';

export default function BouquetBuilder({ addToCart }) {
    const [mode, setMode] = useState('mood'); // 'mood' or 'custom'
    const [customSelection, setCustomSelection] = useState({
        flowers: [],
        paper: null,
        ribbon: null
    });

    const moods = [
        { id: 'romantic', label: 'Romantic', description: 'Deep reds and soft pinks, designed to express love.', flowers: 'Red Roses, Peonies', price: '$95', img: roseImg },
        { id: 'cheer', label: 'Cheer Up', description: 'Bright yellows and oranges to lift spirits.', flowers: 'Sunflowers, Daisies', price: '$75', img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800' },
        { id: 'peace', label: 'Sympathy', description: 'Calming whites and greens for peaceful thoughts.', flowers: 'Lilies, Eucalyptus', price: '$85', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800' },
        { id: 'wild', label: 'Wild & Free', description: 'An untamed mix of wildflowers and grasses.', flowers: 'Wildflowers, Grasses', price: '$110', img: 'https://images.unsplash.com/photo-1464695110811-dcf3903dc2f4?auto=format&fit=crop&q=80&w=800' },
    ];

    const customOptions = {
        flowers: [
            { id: 'roses', label: 'Classic Roses', price: 60, img: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=300' },
            { id: 'lilies', label: 'Elegant Lilies', price: 55, img: liliesImg },
            { id: 'mixed', label: 'Seasonal Mix', price: 45, img: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=300' },
            { id: 'peonies', label: 'Soft Peonies', price: 65, img: peoniesImg },
            { id: 'tulips', label: 'Spring Tulips', price: 50, img: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=300' },
        ],
        papers: [
            { id: 'kraft', label: 'Kraft Paper', color: '#D4B996' },
            { id: 'white', label: 'Crisp White', color: '#FFFFFF' },
            { id: 'black', label: 'Midnight Black', color: '#1A1A1A' },
            { id: 'news', label: 'Newsprint', color: '#F0EAD6' },
        ],
        ribbons: [
            { id: 'silk_pink', label: 'Blush Silk', color: '#F4C2C2' },
            { id: 'velvet_red', label: 'Red Velvet', color: '#800020' },
            { id: 'twine', label: 'Rustic Twine', color: '#8B4513' },
            { id: 'satin_gold', label: 'Gold Satin', color: '#D4AF37' },
        ]
    };

    const toggleFlower = (flowerId) => {
        setCustomSelection(prev => {
            const exists = prev.flowers.includes(flowerId);
            if (exists) {
                return { ...prev, flowers: prev.flowers.filter(id => id !== flowerId) };
            } else {
                if (prev.flowers.length >= 3) return prev;
                return { ...prev, flowers: [...prev.flowers, flowerId] };
            }
        });
    };

    const calculateCustomPrice = () => {
        let total = 0;
        customSelection.flowers.forEach(fid => {
            const f = customOptions.flowers.find(opt => opt.id === fid);
            if (f) total += f.price;
        });
        return total === 0 ? 0 : total + 15;
    };

    const handleCustomAdd = () => {
        if (customSelection.flowers.length > 0 && customSelection.paper && customSelection.ribbon) {
            const selectedFlowers = customSelection.flowers.map(fid => customOptions.flowers.find(f => f.id === fid));
            const paper = customOptions.papers.find(p => p.id === customSelection.paper);

            addToCart({
                title: `Custom Bouquet`,
                price: `$${calculateCustomPrice()}`,
                img: selectedFlowers[0].img,
                uniqueId: Date.now(),
                description: `${selectedFlowers.map(f => f.label).join(', ')} wrapped in ${paper.label}`
            });
        }
    };

    return (
        <section className="py-24 bg-verdant-cream relative">
            <div className="max-w-[1920px] mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-verdant-forest mb-4">Design Your Moment</h2>
                    <p className="font-sans text-verdant-brown/70 tracking-wide uppercase text-xs">Curated by mood or created by you</p>
                </div>

                <div className="flex justify-center gap-8 mb-16 border-b border-verdant-forest/10 pb-1 max-w-md mx-auto">
                    <button
                        onClick={() => setMode('mood')}
                        className={`pb-4 px-4 text-lg font-serif transition-colors duration-300 relative ${mode === 'mood' ? 'text-verdant-forest' : 'text-verdant-brown/40 hover:text-verdant-brown'}`}
                    >
                        Mood Matched
                        {mode === 'mood' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-verdant-forest" />}
                    </button>
                    <button
                        onClick={() => setMode('custom')}
                        className={`pb-4 px-4 text-lg font-serif transition-colors duration-300 relative ${mode === 'custom' ? 'text-verdant-forest' : 'text-verdant-brown/40 hover:text-verdant-brown'}`}
                    >
                        Build Your Own
                        {mode === 'custom' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-verdant-forest" />}
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {mode === 'mood' ? (
                        <motion.div
                            key="mood"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {moods.map((mood) => (
                                <div key={mood.id} className="group cursor-pointer">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                        <img src={mood.img} alt={mood.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-serif text-2xl mb-2 group-hover:text-verdant-forest transition-colors">{mood.label}</h3>
                                        <p className="text-sm text-verdant-brown/70 mb-3">{mood.flowers}</p>
                                        <p className="font-sans font-bold text-verdant-forest mb-4">{mood.price}</p>
                                        <button
                                            onClick={() => addToCart({ title: mood.label, price: mood.price, img: mood.img, uniqueId: Date.now(), description: mood.description })}
                                            className="px-6 py-2 border border-verdant-forest/20 rounded-full text-xs uppercase tracking-widest hover:bg-verdant-forest hover:text-verdant-cream transition-all"
                                        >
                                            Add to Bag
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="custom"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="space-y-16">
                                {/* Flowers */}
                                <div>
                                    <div className="text-center mb-8 px-4">
                                        <span className="text-xs font-bold text-verdant-sage uppercase tracking-widest">Step 01</span>
                                        <h3 className="font-serif text-2xl md:text-3xl mt-2">Select Your Blooms</h3>
                                        <p className="text-sm text-verdant-brown/60 mt-2">Choose up to 3 varieties</p>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4 overflow-x-hidden">
                                        {customOptions.flowers.map(f => {
                                            const isSelected = customSelection.flowers.includes(f.id);
                                            return (
                                                <div
                                                    key={f.id}
                                                    onClick={() => toggleFlower(f.id)}
                                                    className={`cursor-pointer group flex flex-col items-center gap-3 p-3 md:p-4 rounded-xl transition-all ${isSelected ? 'bg-white shadow-md ring-1 ring-verdant-forest' : 'hover:bg-white/50'}`}
                                                >
                                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
                                                        <img src={f.img} alt={f.label} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="font-serif text-md">{f.label}</p>
                                                        <p className="text-xs text-verdant-brown/60 mt-1">${f.price}</p>
                                                    </div>
                                                    {isSelected && <div className="w-2 h-2 rounded-full bg-verdant-forest mt-1"></div>}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Paper */}
                                <div>
                                    <div className="text-center mb-8">
                                        <span className="text-xs font-bold text-verdant-sage uppercase tracking-widest">Step 02</span>
                                        <h3 className="font-serif text-3xl mt-2">Choose Wrapping</h3>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-6">
                                        {customOptions.papers.map(p => (
                                            <div
                                                key={p.id}
                                                onClick={() => setCustomSelection(prev => ({ ...prev, paper: p.id }))}
                                                className={`cursor-pointer flex flex-col items-center gap-3`}
                                            >
                                                <div
                                                    className={`w-16 h-16 rounded-full shadow-inner transition-all ${customSelection.paper === p.id ? 'ring-2 ring-offset-2 ring-verdant-forest scale-110' : 'hover:scale-105'}`}
                                                    style={{ backgroundColor: p.color, border: '1px solid rgba(0,0,0,0.1)' }}
                                                />
                                                <span className={`text-xs uppercase tracking-wider ${customSelection.paper === p.id ? 'font-bold' : 'opacity-60'}`}>{p.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ribbon */}
                                <div>
                                    <div className="text-center mb-8">
                                        <span className="text-xs font-bold text-verdant-sage uppercase tracking-widest">Step 03</span>
                                        <h3 className="font-serif text-3xl mt-2">Finishing Touch</h3>
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {customOptions.ribbons.map(r => (
                                            <button
                                                key={r.id}
                                                onClick={() => setCustomSelection(prev => ({ ...prev, ribbon: r.id }))}
                                                className={`px-6 py-3 rounded-full text-sm transition-all flex items-center gap-3 border ${customSelection.ribbon === r.id ? 'border-verdant-forest bg-verdant-forest text-verdant-cream' : 'border-gray-200 bg-white hover:border-verdant-forest/40'}`}
                                            >
                                                <div className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: r.color }}></div>
                                                {r.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex flex-col items-center justify-center pt-8 border-t border-verdant-forest/10">
                                    <div className="text-center mb-6">
                                        <p className="font-serif text-4xl text-verdant-forest">${calculateCustomPrice()}</p>
                                        <p className="text-xs text-verdant-brown/50 mt-2 uppercase tracking-widest">Total Estimated Price</p>
                                    </div>
                                    <button
                                        disabled={customSelection.flowers.length === 0 || !customSelection.paper || !customSelection.ribbon}
                                        onClick={handleCustomAdd}
                                        className="px-12 py-4 bg-verdant-forest text-verdant-cream uppercase tracking-widest text-xs rounded-full hover:bg-verdant-sage transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 shadow-lg hover:shadow-xl transform active:scale-95"
                                    >
                                        <Gift className="w-4 h-4" /> Add Custom Bouquet to Bag
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
