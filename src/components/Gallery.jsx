import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import springImg from '../assets/images/gallery_spring_1766829165282.png';
import desertImg from '../assets/images/gallery_desert_1766829180482.png';

const projects = [
    { id: 1, title: 'Wildflower Wedding', img: 'https://images.unsplash.com/photo-1519225468359-2996bcdcb771?q=80&w=1000&auto=format&fit=crop' },
    { id: 2, title: 'Autumn Table', img: 'https://images.unsplash.com/photo-1563241527-3004b7be0217?q=80&w=1000&auto=format&fit=crop' },
    { id: 3, title: 'Spring Awakening', img: springImg },
    { id: 4, title: 'Desert Bloom', img: desertImg },
];

export default function Gallery() {
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

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section ref={targetRef} className={`relative ${isMobile ? 'h-auto py-24 px-6' : 'h-[300vh]'} bg-verdant-forest text-verdant-cream`}>
            {isMobile ? (
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-serif text-5xl leading-tight">
                            Selected <br /> <span className="italic text-verdant-sage">Works</span>
                        </h2>
                        <p className="mt-6 font-sans opacity-70 max-w-xs">
                            A curation of our recent floral installations and botanical designs.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="relative aspect-[4/5] overflow-hidden rounded-lg group">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="font-serif text-2xl">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-16 px-24">
                        <div className="flex flex-col justify-center min-w-[400px]">
                            <h2 className="font-serif text-6xl leading-tight">
                                Selected <br /> <span className="italic text-verdant-sage">Works</span>
                            </h2>
                            <p className="mt-8 font-sans opacity-70 max-w-xs">
                                A curation of our recent floral installations and botanical designs.
                            </p>
                        </div>

                        {projects.map((project) => (
                            <div key={project.id} className="relative w-[600px] h-[70vh] group overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                                />
                                <div className="absolute bottom-8 left-8 z-20 overflow-hidden">
                                    <h3 className="font-serif text-3xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            )}
        </section>
    );
}
