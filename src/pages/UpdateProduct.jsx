import React, { useEffect, useState } from "react";
import Navbar2 from "../Components/Navbar2";
import { Link, useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import Footer from "../Components/Footer";
import { FaHome, FaBoxOpen, FaSave } from "react-icons/fa";
import Spinner from "../Components/Spinner";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateProduct, setUpdateProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        document.title = "Update Product | B2B Wholesale Platform";
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/all-products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUpdateProduct(data);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to load product.");
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.target);
        const updateFromData = Object.fromEntries(formData.entries());

        fetch(`${import.meta.env.VITE_server}/update-product/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateFromData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Product Updated Successfully.");
                    navigate("/all-products");
                } else {
                    toast.error("No changes made.");
                }
            })
            .catch(() => {
                toast.error("Update Failed");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar2 />
            <main className="container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="py-4 text-sm flex items-center gap-2 text-gray-500">
                    <Link to="/" className="flex items-center gap-1 hover:text-[#FA6C48]">
                        <FaHome /> Home
                    </Link>
                    <span>/</span>
                    <Link to="/all-products" className="hover:text-[#FA6C48]">
                        All Products
                    </Link>
                    <span>/</span>
                    <span className="flex items-center gap-1 text-gray-700 font-medium">
                        <FaBoxOpen /> Update Product
                    </span>
                </div>

                {/* Content */}
                <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Left Side: Product Image */}
                    <div className="flex flex-col items-center">
                        <img
                            src={updateProduct.image}
                            alt={updateProduct.name}
                            className="w-full max-w-md rounded-lg shadow-md object-cover"
                        />
                        <p className="mt-3 text-gray-500 text-sm">
                            Current Product Image
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div>
                        <h1 className="text-2xl font-bold mb-6 text-gray-800">
                            Update Product Details
                        </h1>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            {[
                                { label: "Image URL", name: "image", type: "text" },
                                { label: "Name", name: "name", type: "text" },
                                { label: "Brand", name: "brand", type: "text" },
                                { label: "Rating (1-5)", name: "rating", type: "number", step: "0.1", min: "1", max: "5" },
                                { label: "Main Quantity", name: "main_quantity", type: "number" },
                                { label: "Minimum Selling Quantity", name: "minimum_selling_quantity", type: "number" },
                            ].map((field, idx) => (
                                <div key={idx}>
                                    <label className="font-medium block mb-1 text-gray-700">{field.label}</label>
                                    <input
                                        defaultValue={updateProduct[field.name]}
                                        name={field.name}
                                        type={field.type}
                                        step={field.step}
                                        min={field.min}
                                        max={field.max}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FA6C48] shadow-sm"
                                        required
                                    />
                                </div>
                            ))}

                            {/* Category */}
                            <div>
                                <label className="font-medium block mb-1 text-gray-700">Category</label>
                                <select
                                    name="category"
                                    defaultValue={updateProduct.category}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FA6C48] shadow-sm"
                                    required
                                >
                                    <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                                    <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                                    <option value="Fashion & Apparel">Fashion & Apparel</option>
                                    <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
                                    <option value="Health & Beauty">Health & Beauty</option>
                                    <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
                                    <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="font-medium block mb-1 text-gray-700">Description</label>
                                <textarea
                                    defaultValue={updateProduct.description}
                                    name="description"
                                    className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#FA6C48] shadow-sm"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white bg-[#FA6C48] hover:bg-white hover:text-[#FA6C48] hover:border hover:border-[#FA6C48] transition-all duration-200 font-medium shadow-md ${submitting ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                            >
                                <FaSave />
                                {submitting ? "Updating..." : "Update Product"}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UpdateProduct;
