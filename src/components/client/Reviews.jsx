// src/components/Testimonials.jsx
import React from 'react';

function Testimonials({ reviews }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-green-500">What Our Users Are Saying</h2>
                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Hear from the farmers and customers who have found success and satisfaction through ShambaFusion.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-green-50 p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            {review.image ? <img 
                                src={review.image} 
                                alt={review.name} 
                                className="w-16 h-16 object-cover rounded-full mr-4"
                            /> : <div className="w-12 h-12 bg-primary rounded-full mr-4 flex items-center justify-center bg-green-500 text-white font-bold">{review.name.charAt(0)}</div>}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                                <p className="text-sm text-gray-600">{review.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">"{review.message}"</p>
                        <div className="text-green-500">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
