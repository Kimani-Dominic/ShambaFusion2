// src/components/CustomerSupport.jsx
import React from 'react';
import { PhoneIcon, AtSymbolIcon, ChatBubbleLeftIcon, MapPinIcon } from '@heroicons/react/24/outline'; // Icons for better UX

const CustomerSupport = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Customer Support</h2>
                <p className="text-gray-700 text-center mb-12">We are always here to assist you. Feel free to reach out to us through any of the following methods.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Phone Support */}
                    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <PhoneIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                        <p className="text-gray-600">Call us at:</p>
                        <p className="text-gray-800 font-bold">+254 123 456 789</p>
                    </div>

                    {/* Email Support */}
                    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <AtSymbolIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                        <p className="text-gray-600">Email us at:</p>
                        <p className="text-gray-800 font-bold">support@shambafusion.com</p>
                    </div>

                    {/* Live Chat Support */}
                    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <ChatBubbleLeftIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                        <p className="text-gray-600">Chat with us live:</p>
                        <a href="#" className="text-green-500 font-bold underline">Start Chat</a>
                    </div>

                    {/* Physical Location */}
                    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
                        <MapPinIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                        <p className="text-gray-600">Our Office Location:</p>
                        <p className="text-gray-800 font-bold">123 Farmer Street, Nairobi, Kenya</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSupport;
