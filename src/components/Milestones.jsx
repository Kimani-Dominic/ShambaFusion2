// src/components/Milestones.jsx

import milestones from '../data/milestones.js';

import React from 'react';

function Milestones() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Our Milestones</h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="flex-1 bg-white p-6 rounded-lg shadow-md mb-4 md:mb-0">
                            <h3 className="text-2xl font-semibold mb-2">{milestone.year}</h3>
                            <p className="text-gray-700">{milestone.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
