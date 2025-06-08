import React from 'react';
import { Link, NavLink } from 'react-router';
import ClickBtn from './ClickBtn';
import { FaShoppingCart } from 'react-icons/fa';
import { SiGooglemarketingplatform } from 'react-icons/si';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {

    const NavLinks =
        <>
            <NavLink to="/" className={({ isActive }) =>
                isActive
                    ? 'text-black-500 font-semibold underline underline-offset-4'
                    : 'text-black hover:underline hover:underline-offset-4 transition duration-700'
            }>
                Home
            </NavLink>
            <NavLink to="/categories" className={({ isActive }) =>
                isActive
                    ? 'text-black-500 font-semibold underline underline-offset-4'
                    : 'text-black  hover:underline hover:underline-offset-4 transition duration-700'
            }>
                Categories
            </NavLink>

            <NavLink to="/all-products" className={({ isActive }) =>
                isActive
                    ? 'text-black-500 font-semibold underline underline-offset-4'
                    : 'text-black  hover:underline hover:underline-offset-4 transition duration-700'
            }>
                All Products
            </NavLink>
            <NavLink to="/add-products" className={({ isActive }) =>
                isActive
                    ? 'text-black-500 font-semibold underline underline-offset-4'
                    : 'text-black  hover:underline hover:underline-offset-4 transition duration-700'
            }>
                Add Products
            </NavLink>
            <NavLink to="/my-products" className={({ isActive }) =>
                isActive
                    ? 'text-black-500 font-semibold underline underline-offset-4'
                    : 'text-black  hover:underline hover:underline-offset-4 transition duration-700'
            }>
                My Products
            </NavLink>
        </>




    return (
        <div className="bg-[var(--light_bg_color:#f6f6f6)] border-b">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="text-2xl"><span></span>B2B WHOLESALE</a>
                </div>
                <div className="navbar-center hidden lg:flex space-x-5">

                    {NavLinks}

                </div>
                <div className="navbar-end space-x-5">
                    <FaShoppingCart size={25} className='cursor-pointer' />
                    <Link to="/login">
                        <button
                            className="font-bold border cursor-pointer text-lg uppercase w-30 h-10 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#E7AA3A]"
                        >
                            Login
                        </button>
                    </Link>
                    
                    <MdDarkMode size={25} />
                    <MdLightMode size={25} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;