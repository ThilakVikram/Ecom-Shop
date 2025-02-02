import React, { useState } from 'react';

export default function AddNewProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });
  const [error, setError] = useState('');

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      setError('All fields are required');
      return;
    }

    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', description: '' });
    setError('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Seller Dashboard</h1>

      {/* Add Product Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Product</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="p-3 border rounded-md shadow-sm w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="p-3 border rounded-md shadow-sm w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Product Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="p-3 border rounded-md shadow-sm w-full mt-4 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddProduct}
          className="mt-4 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Product
        </button>
      </section>

      {/* Products List Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product List</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products added yet.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Price</th>
                <th className="px-4 py-2 text-left text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-700">{product.name}</td>
                  <td className="px-4 py-2 text-gray-700">{product.price}</td>
                  <td className="px-4 py-2 text-gray-700">{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
