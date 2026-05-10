import { useState } from 'react';
import { User, Package, MapPin, Settings, LogOut } from 'lucide-react';

const tabs = [
  { id: 'orders', name: 'My Orders', icon: Package },
  { id: 'profile', name: 'Profile Details', icon: User },
  { id: 'address', name: 'Addresses', icon: MapPin },
  { id: 'settings', name: 'Settings', icon: Settings },
];

const orders = [
  { id: '#MODA-123', date: 'Oct 24, 2023', total: '$145.00', status: 'Delivered', color: 'bg-green-100 text-green-700' },
  { id: '#MODA-124', date: 'Oct 28, 2023', total: '$85.50', status: 'Shipped', color: 'bg-blue-100 text-blue-700' },
  { id: '#MODA-125', date: 'Nov 01, 2023', total: '$250.00', status: 'Processing', color: 'bg-yellow-100 text-yellow-700' },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold mb-8 dark:text-white">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-ink-700 rounded-xl shadow-sm p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {tabs.map(tab => (
              <button 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold w-full whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-primary-50 dark:bg-ink-600 text-primary-500' : 'text-ink-500 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-ink-600'}`}
              >
                <tab.icon size={18} /> {tab.name}
              </button>
            ))}
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold w-full text-red-500 hover:bg-red-50 dark:hover:bg-ink-600 mt-auto">
              <LogOut size={18} /> Logout
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-grow bg-white dark:bg-ink-700 p-6 rounded-xl shadow-sm min-h-[400px]">
          {activeTab === 'orders' && (
            <div>
              <h2 className="font-display text-2xl font-bold dark:text-white mb-6">Order History</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b dark:border-ink-600 text-ink-400 dark:text-surface-300 text-sm">
                    <tr>
                      <th className="pb-3 font-semibold">Order</th>
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold">Total</th>
                      <th className="pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm dark:text-white">
                    {orders.map(order => (
                      <tr key={order.id} className="border-b dark:border-ink-600 last:border-0">
                        <td className="py-4 font-semibold text-primary-500">{order.id}</td>
                        <td className="py-4">{order.date}</td>
                        <td className="py-4">{order.total}</td>
                        <td className="py-4"><span className={`px-3 py-1 rounded-full text-xs font-bold ${order.color}`}>{order.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div>
              <h2 className="font-display text-2xl font-bold dark:text-white mb-6">Profile Details</h2>
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">First Name</label><input type="text" defaultValue="John" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
                <div><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Last Name</label><input type="text" defaultValue="Doe" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
                <div className="col-span-2"><label className="block text-sm font-medium text-ink-500 dark:text-surface-300 mb-1">Email</label><input type="email" defaultValue="john@moda.com" className="w-full border border-surface-200 dark:border-ink-500 dark:bg-ink-600 dark:text-white rounded-lg p-3 outline-none" /></div>
                <div className="col-span-2"><button className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full font-semibold transition-colors">Save Changes</button></div>
              </div>
            </div>
          )}

          {activeTab === 'address' && (
             <div>
               <h2 className="font-display text-2xl font-bold dark:text-white mb-6">Saved Addresses</h2>
               <div className="border border-dashed border-ink-200 dark:border-ink-500 rounded-xl p-8 text-center max-w-sm">
                 <MapPin size={32} className="mx-auto text-ink-300 dark:text-ink-400 mb-3" />
                 <p className="font-semibold dark:text-white mb-2">No saved addresses</p>
                 <button className="text-primary-500 font-semibold text-sm">+ Add New Address</button>
               </div>
             </div>
          )}

          {activeTab === 'settings' && (
             <div>
               <h2 className="font-display text-2xl font-bold dark:text-white mb-6">Settings</h2>
               <div className="space-y-4 max-w-lg">
                 <div className="flex items-center justify-between border-b dark:border-ink-500 pb-4">
                   <div><h4 className="font-semibold dark:text-white">Email Notifications</h4><p className="text-sm text-ink-400">Receive order updates and offers</p></div>
                   <div className="w-12 h-6 bg-primary-500 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                 </div>
               </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
}