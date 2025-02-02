import React, { useState } from 'react';
import { Link } from 'react-router';

export default function HomePageSeller() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: '$10.00', description: 'A cool product.' },
    { name: 'Product 2', price: '$20.00', description: 'Another great product.' },
    // Example products
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Seller Dashboard</h1>

      {/* Add New Product Link */}
      <div className="mb-6 text-center">
        <Link
          to="/add-product"
          className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add New Product
        </Link>
      </div>

      {/* Products List Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Existing Products</h2>
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
