import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categorizes = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://your-api-url.com/categories') // Replace with your real API
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to load categories', err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Product Categories</h2>

      {categories.length === 0 ? (
        <p className="text-center text-gray-600">Loading categories...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to={`/categories/${category.name}`} key={index}>
              <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
                <img
                  src={category.imageUrl || "https://via.placeholder.com/150"}
                  alt={category.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorizes;
