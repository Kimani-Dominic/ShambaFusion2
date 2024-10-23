import { useState, useEffect } from 'react';

// Example transactions data (replace this with API data later)
const mockTransactions = [
  {
    id: 'TX12345',
    method: 'MPesa',
    amount: '500 KES',
    date: '2024-10-01',
    status: 'Completed',
  },
  {
    id: 'TX67890',
    method: 'Bank Transfer',
    amount: '1200 KES',
    date: '2024-10-02',
    status: 'Pending',
  },
  {
    id: 'TX11223',
    method: 'Airtel Money',
    amount: '700 KES',
    date: '2024-10-03',
    status: 'Failed',
  },
  // Add more transactions for demonstration
];

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  // Simulating API call to fetch transactions (replace with real API call)
  useEffect(() => {
    // Simulate loading data (replace this with an API call)
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Transaction History</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border">Transaction ID</th>
              <th className="p-4 border">Method</th>
              <th className="p-4 border">Amount</th>
              <th className="p-4 border">Date</th>
              <th className="p-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="p-4 border">{transaction.id}</td>
                  <td className="p-4 border">{transaction.method}</td>
                  <td className="p-4 border">{transaction.amount}</td>
                  <td className="p-4 border">{transaction.date}</td>
                  <td
                    className={`p-4 border ${
                      transaction.status === 'Completed'
                        ? 'text-green-600'
                        : transaction.status === 'Pending'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    {transaction.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 border text-center">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
