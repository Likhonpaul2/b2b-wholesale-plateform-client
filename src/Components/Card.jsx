import React from 'react';
import toast from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router';




const Card = ({ product,myProduct,setMyProduct}) => {
    const { _id, name, rating, price, image, user_email } = product;

    const handleDelete = (_id) => {
        fetch(`${import.meta.env.VITE_server}/my-product/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Group deleted successfully');
                    setMyProduct(myProduct.filter(product => product._id !== _id));
                } else {
                    toast.error('Failed to delete group');
                }
            })

    }

    return (
        <div className={`w-[210px] ${user_email ? "h-[430px]" : "h-[400px]"} border border-gray-300 hover:border-[#FA6C48] duration-200 hover:shadow-md`}>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" className='w-[170px] h-auto py-[20px]' />
            </div>
            <div className='p-[20px] border-t border-gray-300'>
                <h2 className='font-semibold text-[15px]'>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h2>
                {/* react rating  */}
                <Rating
                    emptySymbol={<FaRegStar className="text-[#FA6C48]" />}
                    fullSymbol={<FaStar className="text-[#FA6C48]" />}
                    initialRating={rating}
                    // onChange={(rate) => console.log(rate)}
                    readonly
                />
                <h3 className='text-[17px] text-[#FA6C48] font-bold'>{price} <span>BDT</span></h3>

                <Link to={`/all-products/${_id}`}>
                    <button className='bg-[#FA6C48] text-white mt-5 w-full cursor-pointer hover:bg-white hover:text-[#FA6C48] duration-150 hover:border hover:border-[#FA6C48]'>View Details</button>
                </Link>
                <Link to={`/update-product/${_id}`}>
                    <button className='bg-[#FA6C48] text-white mt-2 w-full cursor-pointer hover:bg-white hover:text-[#FA6C48] duration-150 hover:border hover:border-[#FA6C48]'>Update</button>
                </Link>
                {
                    user_email &&
                    <button
                        onClick={() => handleDelete(_id)}
                        className='bg-[#FA6C48] text-white mt-2 w-full cursor-pointer hover:bg-white hover:text-[#FA6C48] duration-150 hover:border hover:border-[#FA6C48]'>Delete</button>

                }
            </div>
        </div>
    );
};

export default Card;


