import React, { useContext, useEffect, useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import { Link, useParams, useNavigate } from 'react-router';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const [buyQuantity, setBuyQuantity] = useState(1);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_server}/all-products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
        toast.error('Failed to load product.');
      });
  }, [id]);

  const handleDecrease = () => {
    if (buyQuantity > 1) {
      setBuyQuantity(prev => prev - 1);
    }
  };

  const handleIncrease = () => {
    setBuyQuantity(prev => prev + 1);
  };

  const handleBuy = async () => {
    if (!user) {
      toast.error('You must be logged in to buy.');
      return navigate('/login');
    }

    if (buyQuantity < productDetails.minimum_selling_quantity) {
      return toast.error(`Minimum order: ${productDetails.minimum_selling_quantity} pcs`);
    }

    // const order = {
    //   productId: productDetails._id,
    //   buyerEmail: user.email,
    //   buyerName: user.displayName,
    //   quantity: buyQuantity
    // };

    // try {
    //   const addCart = await fetch(`${import.meta.env.VITE_server}/cart`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(order)
    //   });

    //   if (!addCart.ok) throw new Error('Cart insert failed.');

    //   const updateStock = await fetch(`${import.meta.env.VITE_server}/all-products/${id}/decrease`, {
    //     method: 'PATCH',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ quantity: buyQuantity })
    //   });

    //   if (!updateStock.ok) throw new Error('Stock update failed.');

    //   toast.success('Added to cart successfully!');
    //   document.getElementById('my_modal_3').close();
    // } catch (err) {
    //   console.error(err);
    //   toast.error('Something went wrong!');
    // }
  };

  if (!productDetails) return <Spinner />;

  return (
    <div>
      <header>
        <Navbar2 />
      </header>

      <main>
        <div className='container mx-auto'>
          {/* Breadcrumbs */}
          <div className='p-5 border-b border-gray-300'>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-products">All Product</Link></li>
                <li>{productDetails.name}</li>
              </ul>
            </div>
          </div>

          {/* Product details */}
          <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            {/* Image */}
            <div className='mt-10 flex justify-center items-center'>
              <img src={productDetails.image} alt={productDetails.name} />
            </div>

            {/* Info */}
            <div className='p-5'>
              <div className='py-5 border-b border-gray-300'>
                <h2 className='text-4xl font-semibold'>{productDetails.name}</h2>
                <div className='mt-3 flex items-center gap-2'>
                  <span>Rating:</span>
                  <Rating
                    emptySymbol={<FaRegStar className="text-[#FA6C48]" />}
                    fullSymbol={<FaStar className="text-[#FA6C48]" />}
                    initialRating={productDetails.rating}
                    readonly
                  />
                  <span>({productDetails.rating})</span>
                </div>
              </div>

              <div className='py-5'>
                <h2 className='text-[#e75d3a] text-2xl font-medium'>
                  {productDetails.price} <span>BDT</span>
                </h2>
                <p className='mt-2'>{productDetails.description}</p>
                <p className='font-bold mt-2'>Brand: {productDetails.brand}</p>
                <p className='font-bold'>Category: <span className="badge badge-neutral">{productDetails.category}</span></p>
                <p className='font-bold'>Available: {productDetails.main_quantity} pcs</p>
              </div>

              {/* Buy Modal */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box rounded-none">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer">✕</button>
                  </form>
                  <h3 className="text-lg font-semibold mb-3">Checkout</h3>
                  <p><strong>Name:</strong> {user?.displayName}</p>
                  <p><strong>Email:</strong> {user?.email}</p>
                  <p><strong>Product:</strong> {productDetails.name}</p>
                  <p><strong>Min Order:</strong> {productDetails.minimum_selling_quantity} pcs</p>
                  <p><strong>Total Price:</strong> {productDetails.price * buyQuantity} BDT</p>

                  <div className="flex items-center my-4 gap-3">
                    <button className="bg-gray-300 px-3 py-1 cursor-pointer" onClick={handleDecrease}>-</button>
                    <span className="text-lg font-bold">{buyQuantity}</span>
                    <button className="bg-gray-300 px-3 py-1 cursor-pointer" onClick={handleIncrease}>+</button>
                  </div>
                  {/* Show error if quantity is less than minimum */}
                  {buyQuantity < productDetails.minimum_selling_quantity && (
                    <p className="text-red-500 mb-2">
                      Minimum order quantity is {productDetails.minimum_selling_quantity} pcs.
                    </p>
                  )}
                  <div className="flex justify-end">
                    <button
                      onClick={handleBuy}
                      className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 cursor-pointer"
                    >
                      Confirm Buy
                    </button>
                  </div>
                </div>
              </dialog>

              {/* Buy Button */}
              <button
                className="font-bold border text-lg uppercase w-30 h-8 text-white bg-[#FA6C48] hover:text-[#FA6C48] hover:bg-white mt-4 cursor-pointer"
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
