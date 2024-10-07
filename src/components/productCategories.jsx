
import React from 'react';

function ProductCategories({ categories }) {
    return (
        <section className="py-12 mb-1 bg-emerald-50">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-green-500">Explore Product Categories</h2>
                <p className="text-gray-600 mt-2">Find your desired produce from different categories</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
                {categories.map((category) => (
                    <div key={category.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                        <p className="text-gray-600 mt-2">{category.description}</p>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-white hover:text-green-500 transition">
                            Shop {category.name}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProductCategories;
