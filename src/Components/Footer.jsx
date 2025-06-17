import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
                
                <div>
                    <h3 className="text-xl font-bold mb-4">B2B Platform</h3>
                    <p className="text-sm text-gray-300">
                        A trusted platform for wholesale buyers and sellers.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
                        <li><Link to="/categories" className="hover:text-orange-400">Categories</Link></li>
                        <li><Link to="/all-products" className="hover:text-orange-400">All Products</Link></li>
                        <li><Link to="/add-products" className="hover:text-orange-400">Add Product</Link></li>
                        <li><Link to="/cart" className="hover:text-orange-400">Cart</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
                        <li><Link to="/help" className="hover:text-orange-400">Help Center</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Contact</h4>
                    <p className="text-sm text-gray-300">Email: likhonpaul2@gmail.com</p>
                    <p className="text-sm text-gray-300">Phone: +880 172509-5122</p>
                    <p className="text-sm text-gray-300 mt-2">Location: Tangail, Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} B2B Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
