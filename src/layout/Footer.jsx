// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-red-600 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Branding Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold">ShambaFusion</h3>
                    <p className="text-sm mt-2 text-gray-200">
                        Empowering farmers, connecting consumers, fostering sustainability.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/market" className="hover:text-gray-300">Market</Link></li>
                        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                        <li><Link to="/account" className="hover:text-gray-300">Account</Link></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <p className="mt-2 text-gray-200">Email: info@shambafusion.com</p>
                    <p className="mt-1 text-gray-200">Phone: +254 700 000 000</p>

                    {/* Social Media Icons */}
                    <div className="mt-4 flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="hover:text-gray-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="hover:text-gray-300">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-8 border-t-gray-600 border-green-700 pt-4">
                <p className="text-sm text-gray-300">
                    &copy; {new Date().getFullYear()} ShambaFusion. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
