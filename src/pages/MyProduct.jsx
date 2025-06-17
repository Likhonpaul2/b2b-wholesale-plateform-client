import React, { useContext, useEffect, useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';
import Card from '../Components/Card';
import { Link } from 'react-router';
import Footer from '../Components/Footer';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProduct, setMyProduct] = useState([]);

    useEffect(() => {
        document.title = "My Product | B2B Wholesale Platform";
    }, []);


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
                <Navbar2 />
            </header>
            <main>
                <div className='container mx-auto min-h-screen'>
                    {myProduct.length === 0 ? (
                        <div className="flex flex-col items-center justify-center min-h-[40vh]">
                            {/* Animated SVG illustration for no product available */}
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                fill="none"
                                className="mb-4"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="10"
                                    y="40"
                                    width="100"
                                    height="60"
                                    rx="10"
                                    fill="#F3F4F6"
                                >
                                    <animate
                                        attributeName="y"
                                        values="40;38;40"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </rect>
                                <rect
                                    x="25"
                                    y="55"
                                    width="70"
                                    height="30"
                                    rx="5"
                                    fill="#E5E7EB"
                                >
                                    <animate
                                        attributeName="y"
                                        values="55;53;55"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </rect>
                                <path
                                    d="M40 70h40"
                                    stroke="#D1D5DB"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                >
                                    <animate
                                        attributeName="stroke"
                                        values="#D1D5DB;#FA6C48;#D1D5DB"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </path>
                                <circle
                                    cx="60"
                                    cy="65"
                                    r="4"
                                    fill="#FA6C48"
                                >
                                    <animate
                                        attributeName="r"
                                        values="4;7;4"
                                        dur="1.2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <path
                                    d="M60 45v10"
                                    stroke="#D1D5DB"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                >
                                    <animate
                                        attributeName="stroke"
                                        values="#D1D5DB;#FA6C48;#D1D5DB"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </path>
                                <ellipse
                                    cx="60"
                                    cy="105"
                                    rx="30"
                                    ry="5"
                                    fill="#F3F4F6"
                                >
                                    <animate
                                        attributeName="rx"
                                        values="30;35;30"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </ellipse>
                            </svg>
                            <p className="text-xl font-semibold mb-4">No Product Available</p>
                            <Link to="/add-products">
                                <button className="bg-[#FA6C48] text-white px-6 py-2 rounded hover:bg-white hover:text-[#FA6C48] hover:border hover:border-[#FA6C48] duration-150 cursor-pointer">
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
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MyProduct;