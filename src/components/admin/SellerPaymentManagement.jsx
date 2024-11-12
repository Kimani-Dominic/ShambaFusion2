import React, { useState } from 'react';
import { DollarSign, Calendar, CreditCard, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

// Sample transaction data
const initialTransactions = [
  { id: 1, date: '2024-10-01', amount: 15000, method: 'M-Pesa', status: 'Completed' },
  { id: 2, date: '2024-09-28', amount: 20000, method: 'Bank Transfer', status: 'Completed' },
  { id: 3, date: '2024-09-20', amount: 10000, method: 'Airtel Money', status: 'Pending' },
  { id: 4, date: '2024-10-05', amount: 17500, method: 'M-Pesa', status: 'Completed' },
  { id: 5, date: '2024-10-03', amount: 80000, method: 'Airtel Money', status: 'Pending' },
];

const PaymentManagement = () => {
  const [transactions] = useState(initialTransactions);
  const totalEarnings = transactions.reduce((total, transaction) => {
    return total + (transaction.status === 'Completed' ? transaction.amount : 0);
  }, 0);

  const paymentMethods = [
    { name: 'M-Pesa', icon: '📱' },
    { name: 'Airtel Money', icon: '📞' },
    { name: 'Bank Transfer', icon: '🏦' },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Payment Management</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Earnings Overview</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Earnings</span>
            <span className="text-3xl font-bold text-green-600">KES {totalEarnings.toFixed(2)}</span>
          </div>
          <div className="mt-4">
            <button className="text-blue-600 hover:text-blue-800 flex items-center">
              View detailed report <ArrowUpRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Payment Options</h3>
          <ul className="space-y-2">
            {paymentMethods.map((method, index) => (
              <li key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
                <span className="text-2xl mr-3">{method.icon}</span>
                <span className="text-gray-700">{method.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-700">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{transaction.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {/* <DollarSign className="h-5 w-5 text-gray-400 mr-2" /> */}
                      <span className="text-sm font-medium text-gray-900">KES {transaction.amount.toFixed(2)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{transaction.method}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status === 'Completed' ? (
                        <CheckCircle className="h-4 w-4 mr-1" />
                      ) : (
                        <Clock className="h-4 w-4 mr-1" />
                      )}
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;