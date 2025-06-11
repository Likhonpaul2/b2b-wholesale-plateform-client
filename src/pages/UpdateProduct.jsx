import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Link, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateProduct, setUpdateProduct] = useState("");


    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/all-products/${id}`)
            .then((res) => res.json())
            .then((data) => setUpdateProduct(data))
            .catch((error) => {
                console.error('Error fetching products:', error);
                toast.error('Failed to load product.');
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateFromData = Object.fromEntries(formData.entries());


        // update data in DB 
        fetch(`${import.meta.env.VITE_server}/update-product/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateFromData)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Product Updated Successfully.");
                    navigate("/all-products");
                } else {
                    toast.error("No Changes made.")
                }
            })
            .catch(() => {
                toast.error("Update Failed");
            })

    }



    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className='container mx-auto'>


                    {/* Breadcrumbs */}
                    <div className='p-5 border-b border-gray-300'>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/all-products">Update Product</Link></li>
                                <li>{updateProduct.name}</li>
                            </ul>
                        </div>
                    </div>

                    {/* update form  */}
                    <div>
                        <h1 className="text-3xl font-bold my-6 text-center ">Update Product</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-4 max-w-xl mx-auto bg-white p-6 shadow mb-10">
                            <div>
                                <label className="font-medium">Image URL:</label>
                                <input defaultValue={updateProduct.image} name="image" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Name:</label>
                                <input defaultValue={updateProduct.name} name="name" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Brand:</label>
                                <input defaultValue={updateProduct.brand} name="brand" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Category:</label>
                                <select name="category" defaultValue={updateProduct.category} className="w-full input input-bordered" required>
                                    <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                                    <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                                    <option value="Fashion & Apparel">Fashion & Apparel</option>
                                    <option value="Industrial Machinery & Tools">Industrial Machinery & Tools</option>
                                    <option value="Health & Beauty">Health & Beauty</option>
                                    <option value="Automotive Parts & Accessories">Automotive Parts & Accessories</option>
                                    <option value="Office Supplies & Stationery">Office Supplies & Stationery</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-medium">Rating (1-5):</label>
                                <input defaultValue={updateProduct.rating} name="rating" type="number" step="0.1" min="1" max="5" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Description:</label>
                                <textarea defaultValue={updateProduct.description} name="description" className="w-full textarea textarea-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Main Quantity:</label>
                                <input defaultValue={updateProduct.main_quantity} name="main_quantity" type="number" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Minimum Selling Quantity:</label>
                                <input defaultValue={updateProduct.minimum_selling_quantity} name="minimum_selling_quantity" type="number" className="w-full input input-bordered" required />
                            </div>
                            <button type="submit" className="bg-[#FA6C48] text-white py-2 px-4 rounded hover:bg-white hover:text-[#FA6C48] hover:border hover:border-[#FA6C48] duration-150  cursor-pointer">
                                Update Product
                            </button>
                        </form>
                    </div>



                </div>










            </main>
        </div>
    );
};

export default UpdateProduct;