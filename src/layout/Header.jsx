
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-green-500 text-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Branding */}
                <div className="text-xl font-bold">
                    <Link to="/" className="text-white hover:text-gray-200">
                        ShambaFusion
                    </Link>
                </div>
                
                {/* Navigation Links */}
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/market" className="hover:text-gray-300">Market</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    <Link to="/admin-panel" className="hover:text-gray-300">Account</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
