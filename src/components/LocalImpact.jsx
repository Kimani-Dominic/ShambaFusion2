// src/components/LocalImpact.jsx
import React from 'react';

function LocalImpact({ stats }) {
    return (
        <section className="py-16 bg-indigo-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-green-600">Our Local Impact</h2>
                <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                    At ShambaFusion, we are committed to empowering local farmers, supporting sustainable practices, 
                    and delivering fresh, high-quality produce to our customers. Here's how we’re making a difference.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 container mx-auto mb-12">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-5xl font-bold text-green-500">{stat.value}</h3>
                        <p className="text-gray-600 mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <h3 className="text-xl font-semibold text-green-500 mb-4">Success Stories</h3>
                <p className="text-gray-700 max-w-xl mx-auto">
                    "Since joining ShambaFusion, my family farm has seen a 30% increase in income. We now reach customers directly 
                    and have built lasting relationships with buyers."
                </p>
                <p className="mt-4 text-green-500">- Mary Njoroge, Sunrise Farms</p>
            </div>
            <div className="text-center mt-8">
                <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-500 transition">
                    Join Us and Make a Difference
                </button>
            </div>
        </section>
    );
}

export default LocalImpact;
