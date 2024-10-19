import React from 'react';
import ProductCard from './ProductCard';
import ProductSlider from './ProductSlider';

const Feature = () => {
    const products = [
        {
            id: 1,
            image: '/product-image1.png',
            title: 'Shark - Men’s Cabretta White Golf Glove',
            price: '$19.00',
            discount: '50%',
            hot: true,
        },
        {
            id: 2,
            image: '/i2.png',
            title: 'Greg Norman - Men’s Shark Logo Golf Polo Shirt',
            price: '$30.00',
            discount: '20%',
            hot: true,
        },
        {
            id: 3,
            image: '/i3.png',
            title: 'G/Fore - Men’s Left Glove Snow 2023',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        {
            id: 4,
            image: '/i3.png',
            title: 'G/Fore - Men’s Left Glove Snow 2023',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        {
            id: 5,
            image: '/i3.png',
            title: 'G/Fore - Men’s Left Glove Snow 2023',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        // Add more products as needed
    ];
    return (
        <div>
            {/* <ProductCard></ProductCard> */}
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
            <ProductSlider products={products} />
        </div>
        </div>
    );
};

export default Feature;