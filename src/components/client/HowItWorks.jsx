// src/components/HowItWorks.jsx
import React from 'react';

function HowItWorks() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-600">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                            <h3 className="text-xl font-semibold text-red-600">Sign Up</h3>
                        </div>
                        <p className="text-gray-700">
                            Create an account on our platform to get started. It's quick and easy!
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                            <h3 className="text-xl font-semibold text-red-600">Browse Products</h3>
                        </div>
                        <p className="text-gray-700">
                            Explore a wide range of fresh produce directly from local farmers.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                            <h3 className="text-xl font-semibold text-red-600">Place Your Order</h3>
                        </div>
                        <p className="text-gray-700">
                            Select the products you want and place your order with just a few clicks.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                            <h3 className="text-xl font-semibold text-red-600">Payment</h3>
                        </div>
                        <p className="text-gray-700">
                            Choose your preferred payment method for a secure transaction.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                            <h3 className="text-xl font-semibold text-red-600">Delivery</h3>
                        </div>
                        <p className="text-gray-700">
                            Sit back and relax as your fresh produce is delivered right to your doorstep.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                            <h3 className="text-xl font-semibold text-red-600">Enjoy!</h3>
                        </div>
                        <p className="text-gray-700">
                            Enjoy fresh, quality produce from local farmers, knowing you're making a difference!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
