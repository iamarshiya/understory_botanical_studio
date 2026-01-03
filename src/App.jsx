import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import SignatureArrangements from './components/SignatureArrangements';
import SeasonalCollections from './components/SeasonalCollections';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import MenuOverlay from './components/MenuOverlay';
import CartOverlay from './components/CartOverlay';
import BouquetBuilder from './components/BouquetBuilder';
import Events from './components/Events';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { ...item, uniqueId: Date.now() }]);
    setIsCartOpen(true); // Open cart to show feedback
  };

  const removeFromCart = (uniqueId, clearAll = false) => {
    if (clearAll) {
      setCartItems([]);
    } else {
      setCartItems((prev) => prev.filter(item => item.uniqueId !== uniqueId));
    }
  };

  return (
    <div className="w-full min-h-screen bg-verdant-cream text-verdant-forest selection:bg-verdant-sage selection:text-white overflow-x-hidden">
      <div className="relative w-full overflow-x-hidden">
        <Navigation
          onMenuClick={() => setIsMenuOpen(true)}
          onCartClick={() => setIsCartOpen(true)}
          cartCount={cartItems.length}
        />

        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <CartOverlay
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onRemove={removeFromCart}
        />

        <main className="relative z-10 w-full overflow-x-hidden">
          <Hero />
          <About />
          <SignatureArrangements addToCart={addToCart} />
          <SeasonalCollections />
          <BouquetBuilder addToCart={addToCart} />
          <Process />
          <Events />
          <Testimonials />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
