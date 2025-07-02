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
              {
                name: 'Electronics & Gadgets',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 21h8" />
                  </svg>
                ),
              },
              {
                name: 'Fashion & Apparel',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M16 3l4 4-8 8-8-8 4-4" />
                    <path d="M12 21V7" />
                  </svg>
                ),
              },
              {
                name: 'Industrial Machinery & Tools',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" />
                  </svg>
                ),
              },
              {
                name: 'Health & Beauty',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                name: 'Home & Kitchen Appliances',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
              },
              {
                name: 'Automotive Parts & Accessories',
                icon: (
                  <svg className="mx-auto mb-4 h-12 w-12 text-orange-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="7.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                    <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                    <path d="M6 16V10h12v6" />
                  </svg>
                ),
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg p-6 text-center transition"
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <Link to={`/product-categories/${category.name}`} className="text-orange-500 font-medium hover:underline">
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
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of businesses leveraging our platform for efficient sourcing and reliable partnerships.
          </p>
          <Link to="/register">
            <button className="bg-white text-orange-500 font-semibold py-2 px-6 rounded hover:bg-orange-100 transition cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">How do I register as a buyer or supplier?</h3>
              <p>Simply click on the "Get Started" button above and follow the registration process tailored for buyers or suppliers.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">Is there a fee to use the platform?</h3>
              <p>Browsing and joining are free. We offer premium features for businesses looking for advanced tools and analytics.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-2">How do I contact support?</h3>
              <p>You can reach our support team via the contact page or by emailing support@b2bplatform.com.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
