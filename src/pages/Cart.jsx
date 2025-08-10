import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar2";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import Footer from "../Components/Footer";
import Spinner from "../Components/Spinner";  // Make sure you have a Spinner component

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        document.title = "Cart Items | B2B Wholesale Platform";
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setLoading(true); // start loading
        fetch(`${import.meta.env.VITE_server}/cart/email/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data);
                setLoading(false); // done loading
            })
            .catch(() => {
                toast.error("Failed to load cart items");
                setLoading(false); // done loading even on error
            });
    }, [user]);

    const handleRemove = (itemId, productId, mainQuantity) => {
        fetch(`${import.meta.env.VITE_server}/update-main-quantity/${productId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ main_quantity: mainQuantity }),
        })
            .then((res) => res.json())
            .then(() => {
                fetch(`${import.meta.env.VITE_server}/cart/delete/${itemId}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then(() => {
                        setCartItems((prev) => prev.filter((item) => item._id !== itemId));
                        toast.success("Item removed from cart");
                    })
                    .catch(() => toast.error("Remove failed"));
            })
            .catch(() => toast.error("Failed to update product quantity"));
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
                <Navbar cartCount={cartItems.length} />
            </header>

            <main className="container mx-auto px-4 py-10 flex-grow">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 border-b pb-4">
                    Your Cart
                </h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500 mt-20 text-lg">
                        Your cart is empty.
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <div className="h-48 overflow-hidden rounded-t-lg">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>Brand:</strong> {item.brand}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>Category:</strong> {item.category}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1 line-clamp-3">
                                        <strong>Description:</strong> {item.description}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>Buying Date:</strong> {item.buying_date || "N/A"}
                                    </p>
                                    <p className="text-sm text-gray-600 mb-4">
                                        <strong>Minimum Buying Quantity:</strong>{" "}
                                        {item.minimum_selling_quantity}
                                    </p>

                                    <button
                                        onClick={() =>
                                            handleRemove(item._id, item.productId, item.main_quantity)
                                        }
                                        className="mt-auto px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                        aria-label={`Remove ${item.name} from cart`}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
