import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar2';
import toast from 'react-hot-toast';
import Card from '../Components/Card';

const Cart = () => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_server}/cart`)
            .then(res => res.json())
            .then((data) => {
                setCartItem(data);
            })
            .catch((err)=>{
                console.log(err);
                toast.error("Cart Items Load Unsuccessfully");
            })
    }, [])
    return (
        <div>
            <header>
                <Navbar cartItem={cartItem}></Navbar>
            </header>
            <main>
                <div className='container mx-auto'>
                    <div className='border-b border-gray-300'>
                        <h2 className='text-center text-3xl font-bold my-5'>Cart</h2>
                    </div>
                    <div>
                        {
                            // cartItem.map(item =><Card item={item} key={item.productId}></Card>)
                            cartItem.length
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Cart;