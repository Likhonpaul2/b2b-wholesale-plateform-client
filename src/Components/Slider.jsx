import React from 'react';
import { Link } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Banner1 from "../assets/img/Angro-header_bg.jpg"
import Banner2 from "../assets/img/Angro-slider_home2.jpg"
import Banner3 from "../assets/img/Banner.jpg"

const Slider = () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="w-full h-[500px] md:h-[600px]  overflow-hidden"
        >
            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img
                        src={Banner1}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10 flex items-center justify-center">
                        <div className="text-white text-center px-4 space-y-6">
                            <p className="text-xl md:text-2xl font-medium">B2B WooCommerce MarketPlace</p>
                            <h2 className="text-4xl md:text-6xl font-bold">Sale Up to 30%</h2>
                            <Link to="/">
                                <button className="mt-4 px-8 py-3 bg-[#FA6C48] hover:bg-white hover:text-black transition font-bold uppercase  text-lg cursor-pointer">
                                    Explore Fresh
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img
                        src={Banner2}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex items-center justify-center">
                        <div className="text-white px-4 space-y-6">
                            <div className='bg-[#FA6C48] w-35 px-3 py-1'>NEWLY ARRIVED</div>
                            <h2 className="text-4xl md:text-6xl font-bold">Special: Buy two,Get one Free</h2>
                            <p className="text-xl md:text-2xl font-medium">Get a special discounted price at <span className='text-6xl'>$29</span></p>
                            
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative w-full h-full">
                    <img
                        src={Banner3}
                        alt="Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex items-center justify-center">
                        <div className="text-white px-4 space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold">Organic Vegies & Fruits</h2>
                            <p className="text-xl md:text-2xl font-medium">Big sale 39% when buying from the collection</p>
                            <Link to="/">
                                <button className="mt-4 px-8 py-3 bg-[#FA6C48] hover:bg-white hover:text-black transition font-bold uppercase  text-lg cursor-pointer">
                                    view more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
