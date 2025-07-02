import React from 'react';
import { Link } from 'react-router';

const Footer = () => {

    const handleClickScroll = () => {
        window.scrollTo(0,0)
    }
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
                        <li><Link to="/" className="hover:text-orange-400" onClick={handleClickScroll}>Home</Link></li>
                        <li><Link to="/categories" className="hover:text-orange-400" onClick={handleClickScroll}>Categories</Link></li>
                        <li><Link to="/all-products" className="hover:text-orange-400" onClick={handleClickScroll}>All Products</Link></li>
                        <li><Link to="/add-products" className="hover:text-orange-400" onClick={handleClickScroll}>Add Product</Link></li>
                        <li><Link to="/cart" className="hover:text-orange-400" onClick={handleClickScroll}>Cart</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="#" className="hover:text-orange-400">Privacy Policy</Link></li>
                        <li><Link to="#" className="hover:text-orange-400">Terms & Conditions</Link></li>
                        <li><Link to="#" className="hover:text-orange-400">Help Center</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-3">Contact</h4>
                    <p className="text-sm text-gray-300">Email: likhonpaul2@gmail.com</p>
                    <p className="text-sm text-gray-300">Phone: +880 172509-5122</p>
                    <p className="text-sm text-gray-300 mt-2">Location: Tangail, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="flex justify-center mt-8 space-x-6">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
                >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
                >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.239-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/>
                    </svg>
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
                >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z"/>
                    </svg>
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-2xl"
                >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323 1.281.059 1.69.072 4.946.072s3.665-.013 4.946-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                </a>
            </div>

            <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} B2B Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
