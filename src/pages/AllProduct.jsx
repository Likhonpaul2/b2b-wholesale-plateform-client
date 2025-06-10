import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';

const AllProduct = () => {
    const [allProducts,setAllProducts] = useState([]);


    useEffect(()=>{
        fetch(`${import.meta.env.VITE_server}/all-products`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setAllProducts(data);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    },[])


    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 container mx-auto space-y-10 my-20'>
                    {
                        allProducts.map(product => <Card product={product} key={product._id}></Card>)
                    }
                </div>
            </main>
        </div>
    );
};

export default AllProduct;