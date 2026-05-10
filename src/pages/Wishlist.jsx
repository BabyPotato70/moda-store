import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <Heart size={64} className="text-surface-300 dark:text-ink-500 mb-4" />
        <h2 className="font-display text-3xl font-bold mb-4 dark:text-white">Your Wishlist is Empty</h2>
        <p className="text-ink-400 dark:text-surface-300 mb-6">Save items you love by clicking the heart icon.</p>
        <Link to="/shop" className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8 dark:text-white">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <motion.div 
            key={item.id} 
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white dark:bg-ink-700 rounded-xl shadow-sm overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold dark:text-white mb-1">{item.name}</h3>
              <p className="text-primary-500 font-bold mb-4">${item.price.toFixed(2)}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => { addToCart(item); toggleWishlist(item); }}
                  className="flex-grow bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingCart size={16} /> Move to Cart
                </button>
                <button 
                  onClick={() => toggleWishlist(item)}
                  className="p-2 border border-surface-200 dark:border-ink-500 rounded-full hover:bg-red-50 hover:text-red-500 hover:border-red-500 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}