import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative flex items-center h-72 sm:h-80 lg:h-96">
            <Image 
                src="/banner.png" // Replace with your image path
                alt="Banner Image" 
                layout="fill" 
                objectFit="cover" 
                className="rounded" // Optional: Add rounded corners if desired
            />
            <div className="absolute left-0 top-0 w-7/12 h-full flex flex-col justify-center p-8 text-white">
                <h1 className="text-4xl font-bold">More than <br /> just a game. <br /> It’s a lifestyle.</h1>
                <p className="mt-4 text-lg">Whether you’re just starting out, have played <br /> your whole life, or you're a Tour pro, your <br /> swing is like a fingerprint.</p>
                <a href="#" className="mt-6 inline-block px-8 py-3 text-lg font-semibold rounded bg-violet-600 hover:bg-violet-700">Shopping Now</a>
            </div>
        </div>
    );
};

export default Banner;
    