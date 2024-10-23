import { useState } from 'react';

const Disputes = () => {
  const [disputes, setDisputes] = useState([
    {
      id: 1,
      title: 'Issue with Delivery',
      status: 'Pending',
      raisedBy: 'Buyer',
      details: 'The product was not delivered on time.',
      createdAt: '2024-10-08',
    },
    {
      id: 2,
      title: 'Product Not as Described',
      status: 'Resolved',
      raisedBy: 'Seller',
      details: 'The buyer claimed the product quality was not as described.',
      createdAt: '2024-09-25',
    },
  ]);

  const [newDispute, setNewDispute] = useState({
    title: '',
    details: '',
  });

  const [viewDispute, setViewDispute] = useState(null); // State for viewing individual disputes

  const handleDisputeSubmit = (e) => {
    e.preventDefault();
    if (newDispute.title && newDispute.details) {
      setDisputes([
        ...disputes,
        { ...newDispute, id: disputes.length + 1, status: 'Pending', createdAt: new Date().toISOString().slice(0, 10) },
      ]);
      setNewDispute({ title: '', details: '' });
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6">Dispute Management</h2>

      {/* Dispute List */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Disputes</h3>
        <ul className="space-y-4">
          {disputes.map((dispute) => (
            <li key={dispute.id} className="p-4 bg-gray-100 rounded-lg flex justify-between">
              <div>
                <h4 className="font-semibold">{dispute.title}</h4>
                <p>Status: <span className="font-bold">{dispute.status}</span></p>
                <p>Raised By: {dispute.raisedBy}</p>
                <p>Date: {dispute.createdAt}</p>
              </div>
              <button
                onClick={() => setViewDispute(dispute)}
                className="text-blue-600 hover:underline"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* View Dispute Details */}
      {viewDispute && (
        <div className="p-4 bg-white border border-gray-200 rounded-md mb-8">
          <h3 className="text-2xl font-bold mb-4">Dispute Details</h3>
          <p><strong>Title:</strong> {viewDispute.title}</p>
          <p><strong>Status:</strong> {viewDispute.status}</p>
          <p><strong>Details:</strong> {viewDispute.details}</p>
          <p><strong>Raised By:</strong> {viewDispute.raisedBy}</p>
          <p><strong>Date:</strong> {viewDispute.createdAt}</p>
          <button
            onClick={() => setViewDispute(null)}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}

      {/* Raise a New Dispute */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Raise a New Dispute</h3>
        <form onSubmit={handleDisputeSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-medium">
              Dispute Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newDispute.title}
              onChange={(e) => setNewDispute({ ...newDispute, title: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-gray-700 font-medium">
              Dispute Details
            </label>
            <textarea
              id="details"
              name="details"
              value={newDispute.details}
              onChange={(e) => setNewDispute({ ...newDispute, details: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500"
          >
            Submit Dispute
          </button>
        </form>
      </div>
    </div>
  );
};

export default Disputes;
