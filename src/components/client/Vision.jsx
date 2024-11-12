// src/components/Vision.jsx
import React from 'react';

function Vision(){
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Our Vision</h2>
                <p className="text-gray-700 text-center mb-8">
                    At ShambaFusion, we envision a world where local farmers thrive, and communities are empowered through sustainable agriculture.
                </p>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-red-600">Our Goals:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>To connect millions of farmers to customers worldwide.</li>
                        <li>To promote sustainable farming practices that protect the environment.</li>
                        <li>To foster economic growth in local communities through direct sales.</li>
                        <li>To educate consumers about the benefits of buying local produce.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Vision;
