import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
    const { user, SignOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    // Replace 3 with dynamic cart count if using CartContext or Redux
    // const cartItemCount = 3;

    const handleLogout = () => {
        SignOut()
            .then(() => {})
            .catch((err) => console.error(err));
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }
                >
                    Categories
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-products"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }
                >
                    All Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-products"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }
                >
                    Add Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-products"
                    className={({ isActive }) =>
                        isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                    }
                >
                    My Product
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-orange-500">
                    B2B Platform
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {navLinks}
                </ul>

                {/* Desktop Cart & User Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Cart Icon */}
                    <Link to="/cart" className="relative text-gray-700 hover:text-orange-500">
                        <FaShoppingCart className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {cartCount}
                        </span>
                    </Link>

                    {user ? (
                        <>
                            <div className="relative group">
                                <img
                                    src={user.photoURL || "https://i.ibb.co/2kR5zq0/default-avatar.png"}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover cursor-pointer"
                                />
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                                    {user.displayName}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="space-y-2 text-gray-700">{navLinks}</ul>

                    {/* Mobile Cart */}
                    <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 my-4">
                        <FaShoppingCart className="text-xl" />
                        <span>Cart ({cartCount})</span>
                    </Link>

                    {/* Mobile User Auth */}
                    <div className="mt-2">
                        {user ? (
                            <>
                                <div className="flex items-center space-x-2 mb-2">
                                    <img
                                        src={user.photoURL || "https://i.ibb.co/JwqV6zYJ/0667f41f-22f7-455f-9b72-13bf41523a18-1.jpg"}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-orange-400 object-cover"
                                    />
                                    <span className="block">{user.displayName}</span>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 cursor-pointer">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
