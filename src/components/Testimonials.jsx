import React from 'react';

export default function Testimonials() {
    return (
        <section className="py-32 bg-verdant-cream text-center px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-verdant-sage/20 rounded-full blur-[100px] pointer-events-none animate-float"></div>

            <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-2xl relative z-10 mx-4">
                <svg className="w-12 h-12 text-verdant-clay/60 mx-auto mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.896 14.389 16.33 15.122 16.33H19.018C19.682 16.33 20.013 16.896 20.013 18V20.828C20.013 21.932 19.682 22.498 19.018 22.498H14.017V21ZM5.016 21L5.016 18C5.016 16.896 5.389 16.33 6.122 16.33H10.017C10.682 16.33 11.013 16.896 11.013 18V20.828C11.013 21.932 10.682 22.498 10.017 22.498H5.016V21Z" />
                </svg>

                <blockquote className="font-serif text-3xl md:text-5xl text-verdant-forest leading-tight mb-10 italic">
                    "Understory - Botanical Studio transformed our space completely. The arrangements feel alive, wild, and incredibly sophisticated."
                </blockquote>

                <cite className="font-sans text-verdant-brown not-italic tracking-[0.2em] text-xs uppercase opacity-80">
                    — Elena & Marcus, Private Event
                </cite>
            </div>
        </section>
    );
}
