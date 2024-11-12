// src/components/DirectFromFarmers.jsx
import React from 'react';

function DirectFromFarmers({ farmers }) {
    return (
        <section className="py-12 mb-1 bg-zinc-100">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-red-600">Direct from Farmers</h2>
                <p className="text-gray-700 mt-2">
                    Experience the freshest produce directly from trusted local farmers.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                {farmers.map((farmer) => (
                    <div key={farmer.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <img 
                            src={farmer.image} 
                            alt={farmer.name} 
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{farmer.name}</h3>
                        <p className="text-gray-600">{farmer.farmName}</p>
                        <p className="text-gray-600 mt-2 italic">"{farmer.testimonial}"</p>
                        {/* <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition">
                            View Products
                        </button> */}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default DirectFromFarmers;
