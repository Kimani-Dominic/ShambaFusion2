// src/components/ServiceHours.jsx
import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline'; // Icon for visual enhancement

const ServiceHours = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Our Service Hours</h2>
                <p className="text-gray-700 text-center mb-12">We're here to help during the following hours:</p>

                <div className="flex justify-center">
                    <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center max-w-sm">
                        <ClockIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-4">Customer Support Hours</h3>
                        <ul className="text-gray-600">
                            <li className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</li>
                            <li className="mb-2">Saturday: 10:00 AM - 4:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHours;
