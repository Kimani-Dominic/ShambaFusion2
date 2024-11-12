// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { API_BASE_URL } from '@/apiConfig';
import products from '@/data/products';

const ProductListing = () => {
    // const [products, setProducts] = useState([]);

    // // Fetch products from the database
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch(`${API_BASE_URL}api/farmproducts/get_products/`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProducts(data);
    //             } else {
    //                 console.error("Failed to fetch products.");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching products:", error);
    //         }
    //     };
        
    //     fetchProducts();
    // }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductListing;
