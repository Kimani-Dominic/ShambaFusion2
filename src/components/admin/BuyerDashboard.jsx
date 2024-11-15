// import React from 'react';

// const BuyerDashboard = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h3 className="text-2xl font-semibold mb-4">Buyer Overview</h3>
//       <ul className="space-y-4">
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Recent Purchases:</span>
//           <span className="text-gray-900 font-semibold">No recent purchases</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Total Amount Spent:</span>
//           <span className="text-gray-900 font-semibold">$0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Pending Deliveries:</span>
//           <span className="text-gray-900 font-semibold">None</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Favorite Products:</span>
//           <span className="text-gray-900 font-semibold">No favorite products</span>
//         </li>
//       </ul>
//       <div className="mt-6 text-center">
//         <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md">
//           View More Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BuyerDashboard;

import React from 'react';
import { ShoppingBag, DollarSign, Truck, Heart, ChevronRight, Bell, Search } from 'lucide-react';

const BuyerDashboard = () => {
  const stats = [
    { title: "Recent Purchases", value: "No recent purchases", icon: ShoppingBag, color: "bg-blue-500" },
    { title: "Total Amount Spent", value: "KES 0", icon: DollarSign, color: "bg-green-500" },
    { title: "Pending Deliveries", value: "None", icon: Truck, color: "bg-yellow-500" },
    { title: "Favorite Products", value: "No favorite products", icon: Heart, color: "bg-red-500" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <h3 className="text-3xl font-bold text-gray-800">Buyer Overview</h3>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-full ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-800">{stat.value}</span>
            </div>
            <h4 className="text-gray-600 font-medium">{stat.title}</h4>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Recommended Products</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
              <div className="w-full h-32 bg-gray-200 rounded-md mb-4"></div>
              <h5 className="font-medium text-gray-800">Product Name</h5>
              <p className="text-sm text-gray-500">$XX.XX</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* <div className="mt-8 flex justify-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
          <span>View More Details</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div> */}
    </div>
  );
};

export default BuyerDashboard;