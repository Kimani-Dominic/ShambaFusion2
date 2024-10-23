import { useState } from 'react';
import ordersData from '../../data/orders';


const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  // Filter orders based on search term
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = ordersData.filter(
      (order) =>
        order.date.includes(e.target.value) ||
        order.status.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredOrders(filtered);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by date or status..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Order List */}
      <div>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div key={order.id} className="p-4 mb-4 border-b">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">Order Date: {order.date}</p>
                  <p>Status: {order.status}</p>
                  <p>Total Amount: ${order.totalAmount}</p>
                </div>
                {/* View Details / Cancel Order */}
                <div className="flex space-x-4">
                  {order.status === 'Pending' && (
                    <button className="text-red-500 hover:underline">
                      Cancel Order
                    </button>
                  )}
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <p className="font-medium">Products:</p>
                <ul className="list-disc ml-4">
                  {order.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
