// components/ProductCard.js
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="p-4">
            <div className="border rounded-lg p-4 relative">
                {product.hot && (
                    <span className="absolute top-2 z-10 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">HOT</span>
                )}
                <div className="relative w-full h-64">
                    <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <p className="mt-2 text-lg">{product.price}</p>
                {product.discount && (
                    <p className="text-green-500 text-sm">{product.discount} off</p>
                )}
                <button className="mt-4 px-4 py-2 bg-black text-white rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
