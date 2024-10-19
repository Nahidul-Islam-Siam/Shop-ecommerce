'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation'; // For Navigation buttons
import 'swiper/css/pagination'; // For Pagination
import ProductCard from './ProductCard';
import { Navigation, Pagination } from 'swiper/modules';

const ProductSlider = ({ products }) => {
    return (
        <div className="my-12">
            {/* Swiper component */}
            <Swiper
                spaceBetween={20}   // Space between slides
                slidesPerView={4}    // Number of slides visible
                navigation          // Enable navigation buttons (prev/next)
                pagination={{ clickable: true }}  // Enable pagination
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                }}
                modules={[Navigation, Pagination]} // Importing Swiper modules
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
