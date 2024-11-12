import { Link } from "react-router-dom";

function Featured({products}) {
    return (
        <>
            <section className="py-12 mb-1 bg-neutral-100" >
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold text-red-600">Featured Tomatoes</h2>
                <p className="text-gray-600 mt-2">Discover the best tomatoes from local farmers</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                        <p className="text-red-600 font-bold mt-4">KES {product.price}</p>
                        
                    </div>
                ))}
            </div>
                    
            <div className="container mx-auto text-center mb-8">
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    <Link to="/market">
                        Buy Now
                    </Link>
                </button>
            </div>
            </section>
        </>
    )
}

export default Featured;