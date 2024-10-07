// src/components/FAQ.jsx
import React, { useState } from 'react';
import faqs from '../data/faq.js';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-6">
            <button 
                onClick={toggleFAQ}
                className="w-full text-left text-lg font-semibold bg-gray-100 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                {question}
                <span className={`float-right transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    &#x25BC;
                </span>
            </button>
            {isOpen && (
                <div className="mt-2 px-4 py-2 bg-white rounded-lg shadow-inner">
                    <p className="text-gray-600">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {


    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
