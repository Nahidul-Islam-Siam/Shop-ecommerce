import Image from 'next/image';
import React from 'react';

const Categories = () => {
    const categories = [
        {
            id: 1,
            image: '/img.png',
            title: 'Golf Bat',
            price: '$19.00',
            discount: '50%',
            hot: true,
        },
        {
            id: 2,
            image: '/i5.png',
            title: 'Glove Balls',
            price: '$30.00',
            discount: '20%',
            hot: true,
        },
        {
            id: 3,
            image: '/i6.png',
            title: 'Glovs Bags',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        {
            id: 4,
            image: '/i7.png',
            title: 'Clothing & Rainwear',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        {
            id: 5,
            image: '/i8.png',
            title: 'Footwear',
            price: '$25.00',
            discount: '',
            hot: false,
        },
        {
            id: 6,
            image: '/i3.png',
            title: 'Accessory',
            price: '$25.00',
            discount: '',
            hot: false,
        }
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Shop By Categories</h1>
            <div className="container mx-auto p-4">
                <div className='grid grid-cols-3 gap-4'>
                    {
                        categories.map(category => (
                            <div key={category.id} className="relative w-full h-64 flex flex-col">
                                <div className="relative w-full h-4/5">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mt-4 text-center">{category.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;
