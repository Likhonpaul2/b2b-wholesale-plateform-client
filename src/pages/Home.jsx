import React, { useEffect } from 'react';
import Slider from '../Components/Slider';
import Home2 from '../Components/home2';



const Home = () => {
    useEffect(() => {
        document.title = "Home | B2B Wholesale Platform";
    }, []);
    return (
        <div>
            <Home2 />

        </div>
    );
};

export default Home;