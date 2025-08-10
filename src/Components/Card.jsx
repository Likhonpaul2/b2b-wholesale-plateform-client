import React from 'react';
import toast from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router';

const Card = ({ product, myProduct, setMyProduct }) => {
    const { _id, name, rating, price, image, user_email } = product;

    const handleDelete = (_id) => {
        fetch(`${import.meta.env.VITE_server}/my-product/delete/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success('Product deleted successfully');
                    setMyProduct(myProduct.filter((product) => product._id !== _id));
                } else {
                    toast.error('Failed to delete product');
                }
            });
    };

    return (
        <div className="flex flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-[#FA6C48] transition duration-300 w-full max-w-[260px] sm:max-w-[300px] bg-white hover:scale-105">
            {/* Image */}
            <div className="flex justify-center items-center p-4">
                <img
                    src={image}
                    alt={name}
                    className="max-h-48 w-auto object-contain rounded-lg"
                />
            </div>

            {/* Content */}
            <div className="px-4 pb-4 border-t border-gray-200 flex flex-col flex-1">
                <h2 className="font-semibold text-lg sm:text-xl line-clamp-2">{name}</h2>

                {/* Rating */}
                <div className="mt-1">
                    <Rating
                        emptySymbol={<FaRegStar className="text-[#FA6C48]" />}
                        fullSymbol={<FaStar className="text-[#FA6C48]" />}
                        initialRating={rating}
                        readonly
                    />
                </div>

                {/* Price */}
                <h3 className="text-xl text-[#FA6C48] font-bold mt-2">
                    {price} <span className="text-sm">BDT</span>
                </h3>

                {/* Buttons */}
                <div className="mt-auto space-y-2">
                    <Link to={`/all-products/${_id}`}>
                        <button className="w-full py-2 bg-[#FA6C48] text-white font-medium rounded-lg hover:bg-white hover:text-[#FA6C48] border border-transparent hover:border-[#FA6C48] transition">
                            View Details
                        </button>
                    </Link>
                    <Link to={`/update-product/${_id}`}>
                        <button className="w-full py-2 mt-2 bg-[#FA6C48] text-white font-medium rounded-lg hover:bg-white hover:text-[#FA6C48] border border-transparent hover:border-[#FA6C48] transition">
                            Update
                        </button>
                    </Link>
                    {user_email && (
                        <button
                            onClick={() => handleDelete(_id)}
                            className="w-full py-2 bg-[#FA6C48] text-white font-medium rounded-lg hover:bg-white hover:text-[#FA6C48] border border-transparent hover:border-[#FA6C48] transition"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
