import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { Check, CreditCard, Truck, ClipboardList } from 'lucide-react';

export default function Checkout() {
  const { cart } = useStore();
  const [step, setStep] = useState(1);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const steps = [
    { id: 1, name: 'Shipping', icon: Truck },
    { id: 2, name: 'Payment', icon: CreditCard },
    { id: 3, name: 'Review', icon: ClipboardList }
  ];

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
        <h2 className="font-display text-3xl font-bold mb-4 dark:text-white">Your cart is empty</h2>
        <Link to="/shop" className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step >= s.id ? 'bg-primary-500 text-white' : 'bg-surface-100 dark:bg-ink-700 text-ink-400'}`}>
              {step > s.id ? <Check size={18} /> : <s.icon size={18} />}
              <span className="font-semibold text-sm hidden sm:inline">{s.name}</span>
            </div>
            {i < steps.length - 1 && <div className={`w-12 md:w-24 h-1 mx-2 rounded ${step > s.id ? 'bg-primary-500' : 'bg-surface-100 dark:bg-ink-700'}`}></div>}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-6 dark:text-white">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">First Name</label><input type="text" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Last Name</label><input type="text" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 outline-none" /></div>
                <div className="col-span-2"><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Address</label><input type="text" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">City</label><input type="text" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Zip Code</label><input type="text" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 outline-none" /></div>
              </div>
              <button onClick={() => setStep(2)} className="mt-6 bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full font-semibold transition-colors">Continue to Payment</button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-6 dark:text-white">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-4 border-2 border-primary-500 bg-primary-50 dark:bg-ink-600 p-4 rounded-xl cursor-pointer">
                  <input type="radio" name="payment" checked readOnly className="w-5 h-5 text-primary-500" />
                  <CreditCard size={24} className="text-primary-500" />
                  <span className="font-semibold dark:text-white">Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-4 border border-surface-200 dark:border-ink-500 p-4 rounded-xl cursor-pointer hover:border-ink-300">
                  <input type="radio" name="payment" className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold dark:text-white">Cash on Delivery</span>
                </label>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="col-span-2"><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Card Number</label><input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Expiry</label><input type="text" placeholder="MM/YY" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">CVC</label><input type="text" placeholder="123" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(1)} className="border border-ink-200 dark:border-ink-500 py-3 px-8 rounded-full font-semibold dark:text-white hover:bg-surface-50 dark:hover:bg-ink-600 transition-colors">Back</button>
                <button onClick={() => setStep(3)} className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full font-semibold transition-colors">Review Order</button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm">
              <h2 className="font-display text-2xl font-bold mb-6 dark:text-white">Order Review</h2>
              <div className="space-y-4 border-b dark:border-ink-500 pb-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h4 className="font-semibold dark:text-white">{item.name}</h4>
                      <p className="text-sm text-ink-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="border border-ink-200 dark:border-ink-500 py-3 px-8 rounded-full font-semibold dark:text-white hover:bg-surface-50 dark:hover:bg-ink-600 transition-colors">Back</button>
                <button onClick={() => alert('Order Placed!')} className="bg-accent-500 hover:bg-accent-600 text-white py-3 px-8 rounded-full font-semibold transition-colors">Place Order</button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="w-full md:w-auto">
          <div className="bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="font-bold text-lg mb-4 dark:text-white">Order Summary</h3>
            <div className="space-y-2 text-sm text-ink-400 dark:text-surface-300 mb-4">
              <div className="flex justify-between"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between"><span>Tax</span><span>${(total * 0.08).toFixed(2)}</span></div>
            </div>
            <div className="border-t dark:border-ink-600 pt-4 flex justify-between font-bold text-lg dark:text-white">
              <span>Total</span><span>${(total + total * 0.08).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}