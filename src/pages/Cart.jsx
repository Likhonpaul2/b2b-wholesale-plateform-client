import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar2';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import Footer from '../Components/Footer';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        document.title = "Cart Items | B2B Wholesale Platform";
    }, []);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/cart/email/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCartItems(data);
            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to load cart items");
            })
    }, [user])

    const handleRemove = (itemId, productId, mainQuantity) => {


        // Step 1: Update product main quantity
        fetch(`${import.meta.env.VITE_server}/update-main-quantity/${productId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ main_quantity: mainQuantity })
        })
            .then(res => res.json())
            .then(() => {
                // Step 2: Remove from cart after updating main quantity
                fetch(`${import.meta.env.VITE_server}/cart/delete/${itemId}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
                        toast.success("Item removed from cart");
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error("Remove failed");
                    });
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to update product quantity");
            });
    };

    return (
        <div>
            <header>
                <Navbar cartCount={cartItems.length} />
            </header>
            <main className="container mx-auto px-4 min-h-screen">
                <div className='border-b border-gray-300'>
                    <h2 className='text-center text-3xl font-bold my-5'>Your Cart</h2>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600 mt-10">No items in cart</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {cartItems.map(item => (
                            <div key={item._id} className="border p-4 rounded shadow-md bg-white">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded mb-4" />
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p><strong>Brand:</strong> {item.brand}</p>
                                <p><strong>Category:</strong> {item.category}</p>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>Buying Date:</strong> {item.buying_date || 'N/A'}</p>
                                <p><strong>Minimum Buying Quantity:</strong> {item.minimum_selling_quantity}</p>
                                <button
                                    onClick={() => handleRemove(item._id, item.productId, item.main_quantity)}
                                    className="mt-4 px-4 py-2 bg-red-500 text-white  hover:bg-red-600 cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Cart;
