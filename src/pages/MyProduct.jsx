import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import Card from '../Components/Card';
import { Link } from 'react-router';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProduct, setMyProduct] = useState([]);


    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_server}/all-products/email/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                const products = Array.isArray(data) ? data : [data];
                setMyProduct(products);
            })
            .catch((err) => {
                console.log(err);
                if (myProduct.length === 0) {
                    toast.error("No Product Available");
                } else {
                    toast.error("Product load Unsuccessfully.");
                }
            });
    }, [user?.email, myProduct.length]);




    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className='container mx-auto'>
                    {myProduct.length === 0 ? (
                        <div className="flex flex-col items-center justify-center min-h-[40vh]">
                            <p className="text-xl font-semibold mb-4">No Product Available</p>
                            <Link to="/add-products">
                                <button className="bg-[#FA6C48] text-white px-6 py-2 rounded hover:bg-white hover:text-[#FA6C48] hover:border hover:border-[#FA6C48] duration-150">
                                    Add Product
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 container mx-auto space-y-10 my-20'>
                            {myProduct.map(product => (
                                <Card
                                    product={product}
                                    key={product._id}
                                    myProduct={myProduct}
                                    setMyProduct={setMyProduct}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default MyProduct;