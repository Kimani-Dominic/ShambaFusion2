import { useState } from "react";

const AddressBook = () => {
    const [addresses, setAddresses] = useState([
      { id: 1, name: 'Home', address: '123 Main Street' },
      { id: 2, name: 'Work', address: '456 Office Ave' },
    ]);
  
    const handleDelete = (id) => {
      setAddresses(addresses.filter((address) => address.id !== id));
    };
  
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Manage Your Addresses</h3>
        <ul className="space-y-4">
          {addresses.map((address) => (
            <li key={address.id} className="flex justify-between p-4 bg-gray-100 rounded-lg">
              <div>
                <p className="font-semibold">{address.name}</p>
                <p>{address.address}</p>
              </div>
              <button
                onClick={() => handleDelete(address.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
  
        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md">
          Add New Address
        </button>
      </div>
    );
  };
  
  export default AddressBook;
  