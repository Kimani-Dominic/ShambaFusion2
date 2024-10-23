import { useState } from 'react';
import TransactionHistory from './BuyerTransactionHistory';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    phoneNumber: '',
    accountNumber: '',
    bankName: '',
  });

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
    setPaymentDetails({
      phoneNumber: '',
      accountNumber: '',
      bankName: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment based on the selected method
    console.log('Payment Details:', paymentDetails);
    alert(`Payment method: ${selectedMethod} \nDetails: ${JSON.stringify(paymentDetails)}`);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Choose Payment Method</h2>

      <form onSubmit={handleSubmit}>
        {/* Select Payment Method */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-2">Select Payment Method</label>
          <select
            value={selectedMethod}
            onChange={handleMethodChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">-- Choose Payment Method --</option>
            <option value="mpesa">MPesa</option>
            <option value="airtel_money">Airtel Money</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Dynamic Fields for MPesa and Airtel Money */}
        {(selectedMethod === 'mpesa' || selectedMethod === 'airtel_money') && (
          <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={paymentDetails.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        )}

        {/* Dynamic Fields for Bank Transfer */}
        {selectedMethod === 'bank_transfer' && (
          <>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={paymentDetails.bankName}
                onChange={handleInputChange}
                placeholder="Enter your bank name"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={paymentDetails.accountNumber}
                onChange={handleInputChange}
                placeholder="Enter your account number"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Proceed to Payment
        </button>
      </form>
      <TransactionHistory />
    </div>
  );
};

export default PaymentMethods;
