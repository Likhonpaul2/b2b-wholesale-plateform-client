import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const MyLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MyLayouts;