
import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, BarChart2, Package, DollarSign, ShoppingCart } from 'lucide-react';
import { API_BASE_URL } from '@/apiConfig';

// Sample product data (you'd usually fetch this from an API)
const initialProducts = [
  { id: 1, name: 'Tomatoes', price: 2.5, quantity: 100, sold: 20 },
  { id: 2, name: 'Potatoes', price: 1.5, quantity: 50, sold: 30 },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', quantity: '', description: '', image: '' });
  const [editProduct, setEditProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Fetch products from an API or database in a real application
    setProducts(initialProducts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async(e) => {
    e.preventDefault();
    try {
      const product = { ...newProduct, id: products.length + 1, sold: 0 };
      // setProducts([...products, product]);
      const data = {...product, farmer: localStorage.getItem('userId')}
      console.log(data);
      
      const response = await fetch(`${API_BASE_URL}post_product/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(data)
      });
      if(response.ok) {
        console.log("Added products successfully");
        setNewProduct({ name: '', price: '', quantity: '' });
        setIsFormVisible(false);
      }else {
        console.log("something went wrong");
        
      }
    } catch(err) {
      console.log(err);
      
    }

    
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setIsFormVisible(true);
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts(products.map(p => (p.id === editProduct.id ? editProduct : p)));
    setEditProduct(null);
    setIsFormVisible(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Product Management</h2>

      <div className="mb-6">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center"
        >
          <Plus className="mr-2" size={20} />
          {isFormVisible ? 'Cancel' : 'Add New Product'}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={editProduct ? handleUpdateProduct : handleAddProduct} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={editProduct ? editProduct.name : newProduct.name}
                onChange={editProduct ? e => setEditProduct({ ...editProduct, name: e.target.value }) : handleInputChange}
                placeholder="Enter product name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
              <input
                id="category"
                type="text"
                name="category"
                value={editProduct ? editProduct.category : newProduct.category}
                onChange={editProduct ? e => setEditProduct({ ...editProduct, category: e.target.value }) : handleInputChange}
                placeholder="Enter product category"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <input
                id="price"
                type="number"
                name="price"
                value={editProduct ? editProduct.price : newProduct.price}
                onChange={editProduct ? e => setEditProduct({ ...editProduct, price: e.target.value }) : handleInputChange}
                placeholder="Enter price"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                value={editProduct ? editProduct.quantity : newProduct.quantity}
                onChange={editProduct ? e => setEditProduct({ ...editProduct, quantity: e.target.value }) : handleInputChange}
                placeholder="Enter quantity"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                id="description"
                type="text"
                name="description"
                value={editProduct ? editProduct.description : newProduct.description}
                onChange={editProduct ? e => setEditProduct({ ...editProduct, description: e.target.value }) : handleInputChange}
                placeholder="Enter Description"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />

            </div>

            

          </div>
          <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            {editProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-gray-600">Quantity</th>
              <th className="px-4 py-2 text-left text-gray-600">Sold</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">{product.sold}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleEditProduct(product)} className="text-yellow-500 hover:text-yellow-600 mr-2">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-800">Product Performance Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Total Products</div>
            <Package className="text-blue-500" size={24} />
          </div>
          <div className="text-3xl font-bold mt-2">{products.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Total Sold</div>
            <ShoppingCart className="text-green-500" size={24} />
          </div>
          <div className="text-3xl font-bold mt-2">{products.reduce((acc, p) => acc + p.sold, 0)}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">Total Revenue</div>
            <DollarSign className="text-yellow-500" size={24} />
          </div>
          <div className="text-3xl font-bold mt-2">
            ${products.reduce((acc, p) => acc + p.price * p.sold, 0).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;