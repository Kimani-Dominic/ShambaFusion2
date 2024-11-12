// src/components/Impact.jsx
import React from 'react';

function Impact() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Our Impact</h2>
                <p className="text-gray-700 text-center mb-8">
                    At ShambaFusion, we are dedicated to making a positive difference in the lives of local farmers and the community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-green-100 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold mb-4">Empowering Farmers</h3>
                        <p className="text-gray-700">
                            We provide farmers with a platform to reach customers directly, ensuring fair prices and sustainable practices.
                        </p>
                    </div>
                    <div className="p-6 bg-yellow-100 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold mb-4">Community Support</h3>
                        <p className="text-gray-700">
                            Our marketplace promotes local economies, encouraging customers to buy fresh produce from their neighbors.
                        </p>
                    </div>
                    <div className="p-6 bg-blue-100 rounded-lg shadow-md text-center">
                        <h3 className="text-2xl font-semibold mb-4">Sustainable Practices</h3>
                        <p className="text-gray-700">
                            We advocate for eco-friendly farming methods, helping to protect the environment for future generations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
