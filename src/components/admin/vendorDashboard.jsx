// import React from 'react';

// const VendorDashboard = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h3 className="text-2xl font-semibold mb-4">Vendor Overview</h3>
//       <ul className="space-y-4">
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Current Deliveries:</span>
//           <span className="text-gray-900 font-semibold">0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Earnings:</span>
//           <span className="text-gray-900 font-semibold">$0</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Performance Metrics:</span>
//           <span className="text-gray-900 font-semibold">N/A</span>
//         </li>
//         <li className="flex justify-between items-center">
//           <span className="text-gray-700 font-medium">Pending Requests:</span>
//           <span className="text-gray-900 font-semibold">0</span>
//         </li>
//       </ul>
//       <div className="mt-6 text-center">
//         <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
//           View Delivery Status
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VendorDashboard;

import React from 'react';
import { Truck, DollarSign, BarChart2, Clock, ChevronRight, Bell } from 'lucide-react';

const VendorDashboard = () => {
  const stats = [
    { title: "Current Deliveries", value: 0, icon: Truck, color: "bg-blue-500" },
    { title: "Earnings", value: "$0", icon: DollarSign, color: "bg-green-500" },
    { title: "Performance Score", value: "N/A", icon: BarChart2, color: "bg-yellow-500" },
    { title: "Pending Requests", value: 0, icon: Clock, color: "bg-purple-500" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold text-gray-800">Vendor Overview</h3>
        <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-full ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <h4 className="text-gray-600 font-medium">{stat.title}</h4>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h4>
        <ul className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Delivery #{1000 + index}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
          <span>View Delivery Status</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default VendorDashboard;