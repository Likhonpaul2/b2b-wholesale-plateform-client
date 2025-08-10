import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar2';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Spinner from '../Components/Spinner';

const Categorizes = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true); // Start with loading = true

    useEffect(() => {
        document.title = "Category | B2B Wholesale Platform";
    }, []);

    useEffect(() => {
        setLoading(true); // Start loading

        fetch(`${import.meta.env.VITE_server}/all-products`)
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
                setCategories(uniqueCategories);
                setLoading(false); // Done loading
            })
            .catch(err => {
                console.error("Error loading products:", err);
                setLoading(false); // Also stop loading on error
            });
    }, []);

    const filteredProducts = selectedCategory
        ? allProducts.filter(product => product.category === selectedCategory)
        : allProducts;

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='container mx-auto my-10 min-h-screen'>
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
                                className={`px-4 py-2 border rounded-full ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 cursor-pointer'}`}
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
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Categorizes;
