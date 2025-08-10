import React, { useEffect, useState } from "react";
import Navbar2 from "../Components/Navbar2";
import Card from "../Components/Card";
import { Link } from "react-router";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";  // Import your Spinner component

const AllProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);
    const [view, setView] = useState("card");
    const [sortOrder, setSortOrder] = useState("");
    const [loading, setLoading] = useState(true); // <-- Add loading state

    useEffect(() => {
        document.title = "All Products | B2B Wholesale Platform";
    }, []);

    useEffect(() => {
        setLoading(true); // start loading
        fetch(`${import.meta.env.VITE_server}/all-products`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data);
                setLoading(false); // done loading
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false); // done loading even on error
            });
    }, []);

    const handleFilterToggle = () => {
        if (!showFiltered) {
            const filtered = allProducts.filter((p) => Number(p.main_quantity) > 100);
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
        if (order === "asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (order === "desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        setFilteredProducts(sortedProducts);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar2 />
            </header>

            <main className="container mx-auto my-10 px-4 flex-grow">
                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white shadow rounded-lg p-4">
                    {/* Available Products Toggle */}
                    <div className="flex items-center space-x-3">
                        <label className="font-semibold text-gray-700">Available Only</label>
                        <input
                            onClick={handleFilterToggle}
                            type="checkbox"
                            defaultChecked
                            className="toggle toggle-primary"
                        />
                    </div>

                    {/* Sort & View Controls */}
                    <div className="flex flex-wrap gap-3">
                        <select
                            value={sortOrder}
                            onChange={handleSortChange}
                            className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 transition"
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>

                        <select
                            value={view}
                            onChange={handleViewChange}
                            className="border px-3 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 transition"
                        >
                            <option value="card">Card View</option>
                            <option value="table">Table View</option>
                        </select>
                    </div>
                </div>

                {/* Card View */}
                {view === "card" && (
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}
                                className="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-200"
                            >
                                <Card product={product} className="flex-1" />
                            </div>
                        ))}
                    </div>
                )}

                {/* Table View */}
                {view === "table" && (
                    <div className="overflow-x-auto mt-6 bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-orange-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-700 uppercase tracking-wider">Image</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-700 uppercase tracking-wider">Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-700 uppercase tracking-wider">Brand</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-orange-700 uppercase tracking-wider">Category</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-orange-700 uppercase tracking-wider">Rating</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-orange-700 uppercase tracking-wider">Main Quantity</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-orange-700 uppercase tracking-wider">Min Sell Qty</th>
                                    <th className="px-4 py-3 text-center text-xs font-medium text-orange-700 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProducts.map((product) => (
                                    <tr
                                        key={product._id}
                                        className="hover:bg-orange-50 transition-colors cursor-pointer"
                                    >
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-14 w-14 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-700 font-medium">
                                            {product.name}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                                            {product.brand}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                                            {product.category}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-center text-yellow-500 font-semibold">
                                            ⭐ {product.rating}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-center text-gray-700">
                                            {product.main_quantity}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-center text-gray-700">
                                            {product.minimum_selling_quantity}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap text-center">
                                            <Link to={`/update-product/${product._id}`}>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-1 rounded-md bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition"
                                                >
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

            <Footer />
        </div>
    );
};

export default AllProduct;
