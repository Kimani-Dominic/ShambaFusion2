// import React from 'react';

// const SellerDashboard = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h3 className="text-2xl font-semibold mb-4">Seller Overview</h3>
//       <ul className="space-y-4">
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Total Sales:</span>
//           <span className="text-gray-900 font-semibold">$0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Pending Orders:</span>
//           <span className="text-gray-900 font-semibold">0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Products Listed:</span>
//           <span className="text-gray-900 font-semibold">0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">General Sales Chart:</span>
//           <span className="text-gray-900 font-semibold">Chart Data Placeholder</span>
//         </li>
//       </ul>
//       <div className="mt-6 text-center">
//         <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md">
//           View Sales Analytics
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;

import React from 'react';
import { DollarSign, ShoppingCart, Package, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100 p-8 ">
      <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Seller Overview</h3>
      <ul className="space-y-6">
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
          <div className="flex items-center space-x-3">
            <DollarSign className="text-green-500 w-6 h-6" />
            <span className="text-gray-700 font-medium">Total Sales:</span>
          </div>
          <span className="text-gray-900 font-bold text-xl">KES 0</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="text-blue-500 w-6 h-6" />
            <span className="text-gray-700 font-medium">Pending Orders:</span>
          </div>
          <span className="text-gray-900 font-bold text-xl">0</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
          <div className="flex items-center space-x-3">
            <Package className="text-purple-500 w-6 h-6" />
            <span className="text-gray-700 font-medium">Products Listed:</span>
          </div>
          <span className="text-gray-900 font-bold text-xl">0</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-md">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-red-500 w-6 h-6" />
            <span className="text-gray-700 font-medium">General Sales Chart:</span>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Link to="/admin-panel/analytics">View sales analytics</Link>
        </button>
        </li>
      </ul>
      <div className="mt-8 text-center">
        
      </div>
    </div>
  );
};

export default SellerDashboard;