import { create } from 'zustand';

export const useStore = create((set) => ({
  // Cart State
  cart: [],
  addToCart: (product, qty = 1) => set((state) => {
    const exists = state.cart.find(item => item.id === product.id);
    if (exists) {
      return {
        cart: state.cart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity: qty }] };
  }),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id) })),
  updateQuantity: (id, qty) => set((state) => ({
    cart: state.cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item)
  })),
  
  // Wishlist State
  wishlist: [],
  toggleWishlist: (product) => set((state) => {
    const exists = state.wishlist.find(item => item.id === product.id);
    if (exists) {
      return { wishlist: state.wishlist.filter(item => item.id !== product.id) };
    }
    return { wishlist: [...state.wishlist, product] };
  }),

  // Dark Mode State
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  toggleDarkMode: () => set((state) => {
    const newMode = !state.darkMode;
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    return { darkMode: newMode };
  }),
}));