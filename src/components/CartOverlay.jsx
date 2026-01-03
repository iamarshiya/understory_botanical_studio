import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartOverlay({ isOpen, onClose, cartItems = [], onRemove }) {
    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => {
        const priceString = String(item.price || '0');
        const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
        return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const [isCheckingOut, setIsCheckingOut] = React.useState(false);

    const handleCheckout = () => {
        setIsCheckingOut(true);
        setTimeout(() => {
            onRemove(null, true);
            setTimeout(() => {
                setIsCheckingOut(false);
                onClose();
            }, 3000);
        }, 1500);
    };

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop with Blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-verdant-forest/30 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Sidebar with Glassmorphism */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 z-[101] h-full w-full sm:w-[500px] md:w-[450px] bg-[#F6F4EF] shadow-2xl p-6 sm:p-8 flex flex-col border-l border-verdant-forest/5"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        {isCheckingOut ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                                    className="w-24 h-24 bg-verdant-forest rounded-full flex items-center justify-center text-verdant-cream"
                                >
                                    <ShoppingBag className="w-10 h-10" />
                                </motion.div>
                                <div>
                                    <h2 className="font-serif text-3xl italic text-verdant-forest mb-2">Thank You</h2>
                                    <p className="font-sans text-verdant-brown">Your order is being arranged.</p>
                                </div>
                            </motion.div>
                        ) : (
                            <>
                                <div className="flex justify-between items-center mb-10 pb-4 border-b border-verdant-forest/10">
                                    <h2 className="font-serif text-3xl italic">Your Selection</h2>
                                    <button onClick={onClose} className="p-2 hover:bg-verdant-forest/5 rounded-full transition-colors">
                                        <X className="w-6 h-6 transition-transform duration-500 hover:rotate-90" />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto custom-scrollbar overscroll-contain">
                                    {cartItems.length === 0 ? (
                                        <div className="h-full flex flex-col items-center justify-center opacity-40">
                                            <ShoppingBag className="w-12 h-12 mb-4" />
                                            <p className="font-serif text-xl">Your bag is empty.</p>
                                        </div>
                                    ) : (
                                        <AnimatePresence>
                                            {cartItems.map(item => (
                                                <motion.div
                                                    key={item.uniqueId}
                                                    layout
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, x: -50 }}
                                                    className="flex gap-6 mb-8 group"
                                                >
                                                    <div className="w-24 h-32 bg-verdant-sage/20 rounded-lg overflow-hidden relative shadow-inner">
                                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-between py-1">
                                                        <div>
                                                            <div className="flex justify-between items-start">
                                                                <h3 className="font-serif text-xl">{item.title}</h3>
                                                                <p className="font-sans font-medium">{item.price}</p>
                                                            </div>
                                                            <p className="text-xs text-verdant-brown uppercase tracking-widest mt-2 opacity-60 line-clamp-1">{item.description || 'Standard Edition'}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => onRemove(item.uniqueId)}
                                                            className="flex items-center gap-2 text-xs text-red-900/40 mt-2 hover:text-red-900 transition-colors uppercase tracking-widest self-start group-hover:text-red-900/80"
                                                        >
                                                            <Trash2 className="w-3 h-3" /> Remove
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    )}
                                </div>

                                <div className="border-t border-verdant-forest/10 pt-8 mt-6">
                                    <div className="flex justify-between items-end mb-8">
                                        <span className="font-sans text-xs uppercase tracking-[0.2em] opacity-60">Subtotal</span>
                                        <span className="font-serif text-3xl">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        disabled={cartItems.length === 0}
                                        className="w-full py-5 bg-verdant-forest text-verdant-cream font-sans text-xs uppercase tracking-[0.2em] hover:bg-verdant-sage hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Proceed to Checkout
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
