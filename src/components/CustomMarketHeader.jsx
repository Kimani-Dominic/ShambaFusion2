// src/components/CustomHeader.jsx
import React from 'react';
import { ShoppingCartIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const CustomHeader = () => {
    return (
        <header className="bg-white shadow-md pt-20 pb-5 px-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Search Bar */}
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500 mr-2" />
                    <input 
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none w-full"
                    />
                </div>

                {/* Filter Icon */}
                <div className="flex items-center ml-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
                        <FunnelIcon className="h-6 w-6 mr-1" />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Shopping Cart */}
                <div className="flex items-center">
                    <button className="relative flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">
                        <ShoppingCartIcon className="h-6 w-6" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;
