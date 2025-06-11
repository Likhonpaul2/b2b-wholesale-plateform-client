import React, { useContext} from 'react';
import { Link, NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, SignOut, darkMode, setDarkMode } = useContext(AuthContext);

    // dark mode 
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }


    const handleLogout = () => {
        SignOut()
            .then(() => {
                toast.success("Logout Successfully");
            })
            .catch(err => {
                toast.error("Logout Failed");
                console.log(err);
            })
    }

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
                All Product
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
        <div className="border-b">
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
                    {user ? (
                        <>
                            <div className="group relative cursor-pointer">
                                <img
                                    src={user?.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                />
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                                    {user.displayName || "User"}
                                </div>
                            </div>
                            <Link to="/"
                                onClick={handleLogout}
                            >
                                <button
                                    className="font-bold border cursor-pointer text-lg uppercase w-30 h-8 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#e75d3a]"
                                >
                                    Logout
                                </button>
                            </Link>
                        </>
                    ) : (
                        <Link to="/login">
                            <button
                                className="font-bold border cursor-pointer text-lg uppercase w-30 h-8 text-[#000000] justify-center transition-colors duration-300 hover:bg-[#E7AA3A]"
                            >
                                Login
                            </button>
                        </Link>
                    )}
                    {
                        darkMode === true
                            ?
                            <MdDarkMode size={25} className='cursor-pointer' onClick={handleDarkMode} />
                            :
                            <MdLightMode size={25} className='cursor-pointer' onClick={handleDarkMode} />
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;