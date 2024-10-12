import { useState } from 'react';

function Role({ onSelectRole }) {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (role) => {
        setSelectedRole(role);
        onSelectRole(role);  // Passes the selected role to the parent component
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
            <h2 className="text-3xl font-bold mb-8">Choose Your Role</h2>
            <div className="space-y-6 w-full max-w-2xl">

                {/* Buyer Role */}
                <div
                    onClick={() => handleRoleChange('Buyer')}
                    className={`p-6 bg-white rounded-lg shadow-md cursor-pointer ${
                        selectedRole === 'Buyer' ? 'border-4 border-blue-500' : 'border'
                    } hover:border-blue-500 transition-all`}
                >
                    <h3 className="text-xl font-semibold">Buyer</h3>
                    <p className="mt-2 text-gray-600">
                        As a buyer, you will have direct access to purchase products from farmers without any middlemen. 
                        Enjoy fresh produce and support local agriculture.
                    </p>
                </div>

                {/* Seller Role */}
                <div
                    onClick={() => handleRoleChange('Seller')}
                    className={`p-6 bg-white rounded-lg shadow-md cursor-pointer ${
                        selectedRole === 'Seller' ? 'border-4 border-green-500' : 'border'
                    } hover:border-green-500 transition-all`}
                >
                    <h3 className="text-xl font-semibold">Seller (Farmer)</h3>
                    <p className="mt-2 text-gray-600">
                        As a seller, you can list your products directly to interested buyers. Cut out the middlemen and 
                        gain control over your pricing and distribution.
                    </p>
                </div>

                {/* Vendor Role */}
                <div
                    onClick={() => handleRoleChange('Vendor')}
                    className={`p-6 bg-white rounded-lg shadow-md cursor-pointer ${
                        selectedRole === 'Vendor' ? 'border-4 border-red-500' : 'border'
                    } hover:border-red-500 transition-all`}
                >
                    <h3 className="text-xl font-semibold">Vendor (Logistics Provider)</h3>
                    <p className="mt-2 text-gray-600">
                        As a vendor, you'll assist with logistics and delivery of products from sellers to buyers, 
                        ensuring a smooth and efficient process for both parties.
                    </p>
                </div>

            </div>

            {/* Display the selected role */}
            <div className="mt-8">
                {selectedRole && (
                    <p className="text-lg font-bold">
                        You have selected: <span className="text-blue-600">{selectedRole}</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Role;
