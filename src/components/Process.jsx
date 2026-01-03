import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Flower, Truck } from 'lucide-react';
import processBg from '../assets/images/gallery_spring_1766829165282.png';

const steps = [
    {
        id: 1,
        title: 'The Selection',
        desc: 'We hand-pick every stem from local growers, ensuring peak freshness.',
        icon: Scissors
    },
    {
        id: 2,
        title: 'The Composition',
        desc: 'Each arrangement is built organically, mimicking the wild.',
        icon: Flower
    },
    {
        id: 3,
        title: 'The Delivery',
        desc: 'Hand-delivered with care, ready to transform your space.',
        icon: Truck
    },
];

export default function Process() {
    return (
        <section id="process" className="py-32 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={processBg}
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-verdant-cream/80 mix-blend-lighten" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl text-verdant-forest mb-4">Our Process</h2>
                    <p className="font-sans text-verdant-brown/80 max-w-md mx-auto">From the field to your table, an intentional journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-verdant-sage/30 z-0"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/50">
                                <step.icon className="w-8 h-8 text-verdant-forest/80 group-hover:text-verdant-forest transition-colors" />
                            </div>
                            <h3 className="font-serif text-xl text-verdant-forest mb-3">{step.title}</h3>
                            <p className="font-sans text-sm text-verdant-brown/80 leading-relaxed max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
