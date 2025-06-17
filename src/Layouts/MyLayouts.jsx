import React from 'react';
import Navbar2 from '../Components/Navbar2';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MyLayouts = () => {
    return (
        <div>
            <Navbar2/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MyLayouts;