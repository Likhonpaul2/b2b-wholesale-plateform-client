import React, { useEffect, useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import Card from '../Components/Card';
import { Link } from 'react-router';
import Footer from '../Components/Footer';

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);
    const [view, setView] = useState('card');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        document.title = "All Products | B2B Wholesale Platform";
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/all-products`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleFilterToggle = () => {
        if (!showFiltered) {
            const filtered = allProducts.filter(
                p => Number(p.main_quantity) > 100
            );
            setFilteredProducts(filtered);
            setShowFiltered(true);
        } else {
            setFilteredProducts(allProducts);
            setShowFiltered(false);
        }
    };

    const handleViewChange = (e) => {
        setView(e.target.value);
    };

    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        let sortedProducts = [...filteredProducts];
        if (order === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
    };

    return (
        <div>
            <header>
                <Navbar2 />
            </header>

            <main className="container mx-auto my-10 px-4 min-h-screen">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className='flex items-center space-x-2'>
                        <h2 className="font-semibold">Available Products</h2>
                        <input
                            onClick={handleFilterToggle}
                            type="checkbox"
                            defaultChecked
                            className="toggle"
                        />
                    </div>

                    <div className="flex gap-3">
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="border px-3 py-2 rounded"
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>

                        <select
                            value={view}
                            onChange={handleViewChange}
                            className="border px-3 py-2 rounded"
                        >
                            <option value="card">Card View</option>
                            <option value="table">Table View</option>
                        </select>
                    </div>
                </div>

                {view === 'card' && (
                    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                        {filteredProducts.map(product => (
                            <Card product={product} key={product._id} />
                        ))}
                    </div>
                )}

                {view === 'table' && (
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-orange-100">
                                    <th className="p-3 border">Image</th>
                                    <th className="p-3 border">Name</th>
                                    <th className="p-3 border">Brand</th>
                                    <th className="p-3 border">Category</th>
                                    <th className="p-3 border">Rating</th>
                                    <th className="p-3 border">Main Quantity</th>
                                    <th className="p-3 border">Min Sell Qty</th>
                                    <th className="p-3 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(product => (
                                    <tr key={product._id} className="hover:bg-orange-50 text-center">
                                        <td className="p-2 border">
                                            <img src={product.image} alt="" className="h-14 w-14 object-cover rounded" />
                                        </td>
                                        <td className="p-2 border">{product.name}</td>
                                        <td className="p-2 border">{product.brand}</td>
                                        <td className="p-2 border">{product.category}</td>
                                        <td className="p-2 border">⭐ {product.rating}</td>
                                        <td className="p-2 border">{product.main_quantity}</td>
                                        <td className="p-2 border">{product.minimum_selling_quantity}</td>
                                        <td className="p-2 border">
                                            <Link to={`/update-product/${product._id}`}>
                                                <button className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">
                                                    Update
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AllProduct;
