import React, { useContext, useEffect } from 'react';
import Navbar2 from '../Components/Navbar2';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import Footer from '../Components/Footer';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        document.title = "Add Product | B2B Wholesale Platform";
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addProduct = Object.fromEntries(formData.entries());

        // add product into the database 
        fetch(`${import.meta.env.VITE_server}/add-product`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    toast.success("Product Added Successfully");
                    form.reset();
                }
            })
            .catch(() => {
                toast.error("Product Added Failed");
                console.log("error");
            })

    }


    return (
        <div>
            <header>
                <Navbar2 />
            </header>
            <main className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 py-8">

                    {/* Breadcrumb */}
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                        <Link to="/" className="flex items-center hover:text-orange-500">
                            <span className="material-icons text-sm mr-1"></span> Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-orange-500">Add Product</span>
                    </div>

                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>
                        <p className="text-gray-500">Fill out the form below to add a product to your catalog.</p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-lg p-8 grid gap-6 max-w-3xl mx-auto"
                    >
                        {/* Product Info Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">📦 Product Info</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                                <input name="name" placeholder="Product Name" className="input input-bordered w-full" required />
                                <input name="brand" placeholder="Brand" className="input input-bordered w-full" required />
                                <select name="category" className="select select-bordered w-full" required>
                                    <option disabled>Select Category</option>
                                    <option>Electronics & Gadgets</option>
                                    <option>Home & Kitchen Appliances</option>
                                    <option>Fashion & Apparel</option>
                                    <option>Industrial Machinery & Tools</option>
                                    <option>Health & Beauty</option>
                                    <option>Automotive Parts & Accessories</option>
                                    <option>Office Supplies & Stationery</option>
                                </select>
                                <input name="rating" type="number" step="0.1" min="1" max="5" placeholder="Rating (1-5)" className="input input-bordered w-full" required />
                                <input name="main_quantity" type="number" placeholder="Main Quantity" className="input input-bordered w-full" required />
                                <input name="minimum_selling_quantity" type="number" placeholder="Min Selling Qty" className="input input-bordered w-full" required />
                            </div>
                            <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full mt-4" required />
                        </div>

                        {/* User Info Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-700 mb-3">👤 User Info</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input name="user_name" type="text" defaultValue={user.displayName} readOnly className="input input-bordered w-full bg-gray-100" />
                                <input name="user_email" type="email" defaultValue={user.email} readOnly className="input input-bordered w-full bg-gray-100" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                        >
                            Add Product
                        </button>
                    </form>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AddProduct;