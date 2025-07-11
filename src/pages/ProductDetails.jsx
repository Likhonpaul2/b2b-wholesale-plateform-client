import React, { useContext, useEffect, useState } from 'react';
import Navbar2 from '../Components/Navbar2';
import { Link, useParams, useNavigate } from 'react-router';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';
import Spinner from '../Components/Spinner';
import toast from 'react-hot-toast';
import Footer from '../Components/Footer';

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState(null);
  const [buyQuantity, setBuyQuantity] = useState(1);

  useEffect(() => {
    document.title = "Product Details | B2B Wholesale Platform";
  }, []);

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


    const updateQuantity = productDetails.main_quantity - buyQuantity;

    fetch(`${import.meta.env.VITE_server}/update-main-quantity/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ main_quantity: updateQuantity })
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          document.getElementById('my_modal_3').close();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error('Something went wrong!');
      });



    const order = {
      productId: productDetails._id,
      image: productDetails.image,
      name: productDetails.name,
      brand: productDetails.brand,
      category: productDetails.category,
      main_quantity: productDetails.main_quantity,
      minimum_selling_quantity: productDetails.minimum_selling_quantity,
      price: productDetails.price,
      rating: productDetails.rating,
      description: productDetails.description,
      buyerEmail: user.email,
      buyerName: user.displayName,
      quantity: buyQuantity,
      buying_date: new Date().toISOString().split('T')[0] // Only date in YYYY-MM-DD format
    };

    fetch(`${import.meta.env.VITE_server}/add-product-cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Add to cart Successfully!');
        } else {
          toast.error("Add to cart unsuccessfully")
        }
      })
      .catch(() => {

      })


  };

  if (!productDetails) return <Spinner />;

  return (
    <div>
      <header>
        <Navbar2 />
      </header>

      <main>
        <div className='container mx-auto min-h-screen'>
          {/* Breadcrumbs form daisy UI */}
          <div className='p-5 border-b border-gray-300'>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-products">All Product</Link></li>
                <li>{productDetails.name}</li>
              </ul>
            </div>
          </div>

          {/* product  */}
          <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            {/* Image */}
            <div className='mt-10 flex justify-center items-center'>
              <img src={productDetails.image} alt={productDetails.name} />
            </div>

            {/* details */}
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

              {/* buy modal */}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box rounded-none">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer">✕</button>
                  </form>
                  <h3 className="text-3xl font-semibold mb-3 text-[#FA6C48]">Checkout</h3>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
