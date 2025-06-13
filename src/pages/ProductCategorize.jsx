import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar2';
import Card from '../Components/Card';
import { useParams } from 'react-router';

const ProductCategorize = () => {
    const [categories, setCategories] = useState([]);
    const { category } = useParams();


    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/product-categorize/${category}`)
            .then(res => res.json())
            .then((data) => {
                setCategories(data);
            })
    }, [category])


    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='min-h-screen'>
                <h2 className='text-center my-5 text-3xl font-thin'>{category}</h2>

                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 container mx-auto space-y-10 my-20'>
                    {
                        categories.map(product => <Card product={product} key={product._id}></Card>)
                    }
                </div>

            </main>
        </div>
    );
};

export default ProductCategorize;