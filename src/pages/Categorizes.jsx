import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar2';
import Card from '../Components/Card';

const Categorizes = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/all-products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);

                // extract unique categories
                const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
                setCategories(uniqueCategories);
            })
            .catch(err => console.error("Error loading products:", err));
    }, []);

    const filteredProducts = selectedCategory
        ? allProducts.filter(product => product.category === selectedCategory)
        : allProducts;

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='container mx-auto my-10'>
                <h2 className='text-2xl font-bold text-center mb-6'>Browse by Category</h2>

                <div className='flex flex-wrap justify-center gap-4 mb-8'>
                    <button
                        className={`px-4 py-2 border rounded-full ${selectedCategory === '' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 cursor-pointer'}`}
                        onClick={() => setSelectedCategory('')}
                    >
                        All
                    </button>
                    {
                        categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 border rounded-full ${
                                    selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 cursor-pointer'
                                }`}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        filteredProducts.map(product => (
                            <Card key={product._id} product={product} />
                        ))
                    }
                </div>
            </main>
        </div>
    );
};

export default Categorizes;
