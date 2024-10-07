// src/components/MeetTheFarmer.jsx
import React from 'react';

const MeetTheFarmer = ({ farmers }) => {
    return (
        <section className="py-12 bg-gray-50 px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Meet the Farmers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {farmers.map((farmer) => (
                    <div key={farmer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={farmer.imageUrl}
                            alt={farmer.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{farmer.name}</h3>
                            <p className="text-sm text-gray-600">{farmer.location}</p>
                            <p className="text-gray-700 mt-2">{farmer.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetTheFarmer;
