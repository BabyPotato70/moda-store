import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <ShoppingBag
          size={64}
          className="text-surface-300 dark:text-ink-500 mb-4"
        />
        <h2 className="font-display text-3xl font-bold mb-4 dark:text-white">
          Your cart is empty
        </h2>
        <Link
          to="/shop"
          className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8 dark:text-white">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white dark:bg-ink-700 p-4 rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold dark:text-white">{item.name}</h3>
                <p className="text-primary-500 font-bold">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 bg-surface-100 dark:bg-ink-600 rounded"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-semibold dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="p-1 bg-surface-100 dark:bg-ink-600 rounded"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-ink-300 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-80 bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm h-fit sticky top-24">
          <h3 className="font-bold text-lg mb-4 dark:text-white">
            Order Summary
          </h3>
          <div className="space-y-2 text-sm text-ink-400 dark:text-surface-300 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          <div className="border-t dark:border-ink-600 pt-4 flex justify-between font-bold text-lg dark:text-white mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block text-center bg-primary-500 text-white py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
