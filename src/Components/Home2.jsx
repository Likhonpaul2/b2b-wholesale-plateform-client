import React from 'react';
import { Link } from 'react-router';
import Slider from './Slider';

const Home2 = () => {
  return (
    <div>
      {/* hero */}
      <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to B2B Wholesale Platform</h1>
          <p className="text-lg md:text-xl mb-6">
            Discover and manage wholesale products across multiple industries. Streamlined. Fast. Reliable.
          </p>
          <Link to="/all-products">
            <button className="bg-white text-orange-500 font-semibold py-2 px-6 rounded hover:bg-orange-100 transition cursor-pointer">
              Browse Products
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Categories or Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Top Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Electronics & Gadgets',
              'Fashion & Apparel',
              'Industrial Machinery & Tools',
              'Health & Beauty',
              'Home & Kitchen Appliances',
              'Automotive Parts & Accessories',
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg p-6 text-center transition"
              >
                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                <Link to={`/product-categories/${category}`} className="text-orange-500 font-medium hover:underline">
                  Explore Products →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* slider Section */}
      <section className="py-16 bg-white">
        <Slider />
      </section>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We connect B2B buyers with trusted wholesale suppliers. Our platform ensures seamless transactions, secure data, and a wide variety of categories for every business need.
          </p>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="italic mb-4">"This platform made sourcing products so much easier for our business!"</p>
              <span className="font-semibold text-orange-500">— Alex, Retailer</span>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="italic mb-4">"Reliable suppliers and fast communication. Highly recommended."</p>
              <span className="font-semibold text-orange-500">— Priya, Distributor</span>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="italic mb-4">"A wide variety of products and excellent customer support."</p>
              <span className="font-semibold text-orange-500">— John, Wholesaler</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
