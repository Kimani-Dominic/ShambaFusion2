// src/components/FarmerProfile.jsx
import React from 'react';

const FarmerProfile = ({ farmer }) => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Farmer's image */}
                    <img
                        src={farmer.imageUrl}
                        alt={farmer.name}
                        className="w-full h-64 object-cover"
                    />
                    {/* Farmer's Details */}
                    <div className="p-6">
                        <h2 className="text-3xl font-bold">{farmer.name}</h2>
                        <p className="text-sm text-gray-600">{farmer.location}</p>
                        <p className="mt-4 text-gray-700">{farmer.bio}</p>
                        
                        {/* Farmer's Products */}
                        <h3 className="text-lg font-semibold mt-6">Products</h3>
                        <ul className="list-disc pl-5">
                            {farmer.products.map((product, index) => (
                                <li key={index} className="text-gray-600">{product}</li>
                            ))}
                        </ul>

                        {/* Contact Info */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold">Contact Details</h3>
                            <p>Email: <a href={`mailto:${farmer.email}`} className="text-indigo-500">{farmer.email}</a></p>
                            <p>Phone: <a href={`tel:${farmer.phone}`} className="text-indigo-500">{farmer.phone}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FarmerProfile;
