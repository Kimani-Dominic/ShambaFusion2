
// src/components/ProductListing.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products = [] }) => {
    return (
        <section className="py-8 px-6">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductListing;
