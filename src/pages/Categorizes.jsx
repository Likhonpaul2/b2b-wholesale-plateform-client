import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar2";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";

const Categorizes = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Category | B2B Wholesale Platform";
    }, []);

    useEffect(() => {
        setLoading(true);

        fetch(`${import.meta.env.VITE_server}/all-products`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                const uniqueCategories = Array.from(
                    new Set(data.map((p) => p.category))
                );
                setCategories(uniqueCategories);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading products:", err);
                setLoading(false);
            });
    }, []);

    const filteredProducts = selectedCategory
        ? allProducts.filter((product) => product.category === selectedCategory)
        : allProducts;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <Navbar />

            <main className="container mx-auto px-4 py-10 min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Browse by Category
                </h2>

                {/* Category Buttons */}
                <div className="flex overflow-x-auto gap-3 mb-10 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <button
                        className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border 
              ${selectedCategory === ""
                                ? "bg-orange-500 text-white border-orange-500 shadow-md"
                                : "bg-white text-gray-700 hover:bg-orange-100"
                            }`}
                        onClick={() => setSelectedCategory("")}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border
                ${selectedCategory === category
                                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                                    : "bg-white text-gray-700 hover:bg-orange-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product._id}

                            >
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">
                        No products found in this category.
                    </p>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Categorizes;
