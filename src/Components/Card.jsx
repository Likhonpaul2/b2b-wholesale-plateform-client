import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';




const Card = ({ product }) => {
    const { name, rating, price, image } = product;

    return (
        <div className='w-[210px] h-[390px] border border-gray-300 hover:border-[#FA6C48] duration-200 hover:shadow-md'>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" className='w-[170px] h-auto py-[20px]' />
            </div>
            <div className='p-[20px] border-t border-gray-300'>
                <h2 className='font-semibold text-[15px]'>{name}</h2>
                <Rating
                    emptySymbol={<FaRegStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-400" />}
                    initialRating={rating}
                    onChange={(rate) => console.log(rate)}
                />
                <h3 className='text-[17px] text-[#FA6C48] font-bold'>{price} <span>BDT</span></h3>
                <button className='bg-[#FA6C48] text-white mt-5 w-full cursor-pointer hover:bg-white hover:text-[#FA6C48] duration-150 hover:border hover:border-[#FA6C48]'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Card;


