import React, { useContext } from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

const AddProduct = () => {
    const { user } = useContext(AuthContext);


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
                <Navbar />
            </header>
            <main>
                <div className='container mx-auto'>


                    {/* Breadcrumbs */}
                    <div className='p-5 border-b border-gray-300'>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Add Product</li>
                            </ul>
                        </div>
                    </div>

                    {/* update form  */}
                    <div>
                        <h1 className="text-3xl font-bold my-6 text-center ">Add New Product</h1>
                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-4 max-w-xl mx-auto bg-white p-6 shadow mb-10">
                            <div>
                                <label className="font-medium">Image URL:</label>
                                <input name="image" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Name:</label>
                                <input name="name" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Brand:</label>
                                <input name="brand" type="text" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Category:</label>
                                <select name="category" className="w-full input input-bordered" required>
                                    <option value="select" disabled>Select</option>
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
                                <input name="rating" type="number" step="0.1" min="1" max="5" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Description:</label>
                                <textarea name="description" className="w-full textarea textarea-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Main Quantity:</label>
                                <input name="main_quantity" type="number" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">Minimum Selling Quantity:</label>
                                <input name="minimum_selling_quantity" type="number" className="w-full input input-bordered" required />
                            </div>
                            <div>
                                <label className="font-medium">User Name:</label>
                                <input name="user_name" type="text" className="w-full input input-bordered" readOnly defaultValue={user.displayName} />
                            </div>
                            <div>
                                <label className="font-medium">User Email:</label>
                                <input name="user_email" type="text" className="w-full input input-bordered" readOnly defaultValue={user.email} />
                            </div>
                            <button type="submit" className="bg-[#FA6C48] text-white py-2 px-4 rounded hover:bg-white hover:text-[#FA6C48] hover:border hover:border-[#FA6C48] duration-150  cursor-pointer">
                                Add
                            </button>
                        </form>
                    </div>



                </div>










            </main>
        </div>
    );
};

export default AddProduct;