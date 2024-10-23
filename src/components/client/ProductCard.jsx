// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 mt-1">Price: ${product.price}</p>
                
                {/* Farmer Details */}
                <div className="mt-4 bg-gray-100 p-3 rounded">
                    <h4 className="text-sm font-medium text-gray-700">Farmer: {product.farmer.name}</h4>
                    <p className="text-sm text-gray-600">{product.farmer.location}</p>
                    <p className="text-xs text-gray-500 mt-1">{product.farmer.bio}</p>
                </div>

                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
