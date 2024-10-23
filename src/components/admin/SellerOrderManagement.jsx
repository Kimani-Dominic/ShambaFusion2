
import React, { useState } from 'react';
import { CheckCircle, Clock, ShoppingBag, User, Calendar, ChevronRight } from 'lucide-react';

// Sample order data
const initialOrders = [
  { id: 1, customer: 'John Doe', items: 'Tomatoes, Potatoes', status: 'Pending', date: '2024-10-01' },
  { id: 2, customer: 'Jane Smith', items: 'Onions', status: 'Completed', date: '2024-09-28' },
  { id: 3, customer: 'Alice Johnson', items: 'Carrots, Celery', status: 'Pending', date: '2024-10-02' },
  { id: 4, customer: 'Bob Williams', items: 'Apples, Bananas', status: 'Completed', date: '2024-09-30' },
];

const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState('pending');

  const handleUpdateStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const pendingOrders = orders.filter(order => order.status === 'Pending');
  const completedOrders = orders.filter(order => order.status === 'Completed');

  const OrderTable = ({ orders, showActions }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            {showActions && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-2" />
                  <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-gray-400 mr-2" />
                  <div className="text-sm text-gray-500">{order.items}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status === 'Completed' ? <CheckCircle className="h-4 w-4 mr-1" /> : <Clock className="h-4 w-4 mr-1" />}
                  {order.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div className="text-sm text-gray-500">{order.date}</div>
                </div>
              </td>
              {showActions && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleUpdateStatus(order.id, 'Completed')}
                    className="text-indigo-600 hover:text-indigo-900 flex items-center"
                  >
                    Complete <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Order Management</h2>

      <div className="mb-6">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="pending">Pending Orders</option>
            <option value="completed">Order History</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('pending')}
              className={`${
                activeTab === 'pending'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              } px-3 py-2 font-medium text-sm rounded-md`}
            >
              Pending Orders
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`${
                activeTab === 'completed'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-500 hover:text-gray-700'
              } px-3 py-2 font-medium text-sm rounded-md`}
            >
              Order History
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'pending' && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Pending Orders</h3>
          <OrderTable orders={pendingOrders} showActions={true} />
        </>
      )}

      {activeTab === 'completed' && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Order History</h3>
          <OrderTable orders={completedOrders} showActions={false} />
        </>
      )}
    </div>
  );
};

export default OrderManagement;