// src/components/Team.jsx
import React from 'react';
import teamMembers from '../data/team.js';

function Team(){

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
                            <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600 mb-2">{member.role}</p>
                            <p className="text-gray-700">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
