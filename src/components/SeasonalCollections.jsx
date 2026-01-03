import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import winterImg from '../assets/images/seasonal_winter_solstice.png';
import autumnImg from '../assets/images/seasonal_autumn_harvest.png';
import frostImg from '../assets/images/seasonal_first_frost.png';
import velvetImg from '../assets/images/seasonal_velvet_midnight_v2.png';

const collections = [
    {
        id: 1,
        name: 'Winter Solstice',
        mood: 'Deep greens, berries, & dormant branches.',
        year: '2024',
        img: winterImg,
        width: 'md:w-[40vw] lg:w-[500px]'
    },
    {
        id: 2,
        name: 'Autumn Harvest',
        mood: 'Dried florals, wheat, & warm ambers.',
        year: '2024',
        img: autumnImg,
        width: 'md:w-[25vw] lg:w-[350px]'
    },
    {
        id: 3,
        name: 'First Frost',
        mood: 'Silver sage, eucalyptus, & white blooms.',
        year: '2025',
        img: frostImg,
        width: 'md:w-[30vw] lg:w-[400px]'
    },
    {
        id: 4,
        name: 'Velvet Midnight',
        mood: 'Burgundy dahlias & dark foliage.',
        year: '2025',
        img: velvetImg,
        width: 'md:w-[50vw] lg:w-[600px]'
    },
];

export default function SeasonalCollections() {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", isMobile ? "-70%" : "-55%"]);

    return (
        <section ref={targetRef} id="seasonal" className={`relative ${isMobile ? 'h-auto py-24' : 'h-[300vh]'} bg-verdant-cream text-verdant-forest overflow-clip`}>
            {isMobile ? (
                <div className="px-6 flex flex-col gap-12">
                    <div className="mb-12">
                        <span className="font-sans text-xs tracking-[0.2em] uppercase text-verdant-sage mb-6 block">Editorial</span>
                        <h2 className="font-serif text-5xl mb-6 leading-[0.9]">Seasonal<br /><span className="italic text-verdant-forest/40">Edit</span></h2>
                        <p className="font-sans text-sm text-verdant-brown/80 leading-relaxed max-w-xs">
                            A curated selection of floral landscapes, inspired by the shifting rhythms of nature.
                        </p>
                    </div>

                    {collections.map((col, index) => (
                        <div key={col.id} className="flex flex-col gap-6 border-b border-verdant-forest/10 pb-12">
                            <div className="relative aspect-square overflow-hidden rounded-lg">
                                <img src={col.img} alt={col.name} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 font-serif text-5xl text-white opacity-40 mix-blend-overlay">0{index + 1}</div>
                            </div>
                            <div>
                                <h3 className="font-serif text-3xl mb-1">{col.name}</h3>
                                <p className="font-sans text-xs uppercase tracking-widest opacity-60 text-verdant-sage mb-2">{col.mood}</p>
                                <span className="font-mono text-[10px] text-verdant-brown/40 uppercase tracking-widest">{col.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 items-center">
                        {/* Intro Block */}
                        <div className="flex-none w-[300px] md:w-[400px] pr-12 border-r border-verdant-forest/10 mr-12">
                            <span className="font-sans text-xs tracking-[0.2em] uppercase text-verdant-sage mb-6 block">Editorial</span>
                            <h2 className="font-serif text-6xl md:text-8xl mb-8 leading-[0.9]">Seasonal<br /><span className="italic text-verdant-forest/40">Edit</span></h2>
                            <p className="font-sans text-sm md:text-md text-verdant-brown/80 leading-relaxed max-w-xs">
                                A curated selection of floral landscapes, inspired by the shifting rhythms of nature.
                            </p>
                            <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-widest text-verdant-brown/50">
                                <span>Scroll to Explore</span>
                                <div className="w-12 h-[1px] bg-verdant-forest/20"></div>
                            </div>
                        </div>

                        {collections.map((col, index) => (
                            <div
                                key={col.id}
                                className={`relative flex-none h-[60vh] md:h-[70vh] flex flex-col group ${col.width}`}
                            >
                                {/* Image Container with Parallax Internal */}
                                <div className="relative flex-1 overflow-hidden w-full mb-6">
                                    <motion.div
                                        className="absolute inset-0 w-full h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <img
                                            src={col.img}
                                            alt={col.name}
                                            className="w-full h-full object-cover filter brightness-95 contrast-105"
                                        />
                                    </motion.div>

                                    {/* Overlay Number */}
                                    <div className="absolute top-0 right-0 p-6 z-20 font-serif text-6xl md:text-8xl text-white opacity-40 mix-blend-overlay">
                                        0{index + 1}
                                    </div>
                                </div>

                                {/* Minimal Info */}
                                <div className="flex justify-between items-end border-t border-verdant-forest/10 pt-4">
                                    <div>
                                        <h3 className="font-serif text-3xl md:text-4xl mb-1">{col.name}</h3>
                                        <p className="font-sans text-xs uppercase tracking-widest opacity-60 text-verdant-sage">{col.mood}</p>
                                    </div>
                                    <span className="font-mono text-xs text-verdant-brown/40">{col.year}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] mix-blend-multiply"></div>
        </section>
    );
}
