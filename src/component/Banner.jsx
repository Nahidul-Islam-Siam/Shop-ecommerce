import Image from 'next/image';
import React from 'react';
import { Poppins } from '@next/font/google';


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const Banner = () => {
    return (
        <div className={`relative flex items-center h-[500px] lg:h-[820px] ${poppins.variable}`}> {/* Increase height here */}
          
            <Image 
                src="/banner.png" 
                alt="Banner Image"
                layout="fill"
                objectFit="cover"
                priority={true} 
                className="rounded" 
            />

       
            <div className="absolute left-14 right-10 -top-12 bottom-0 w-7/12 h-full flex flex-col justify-center items-start p-8 text-white ">
                <h1 className={`text-7xl font-bold bg-[linear-gradient(180deg,#000000_0%,#00000020_0%,#ffffff_100%)] bg-clip-text text-transparent`}>
                    More than <br /> just a game. <br /> It&apos;s a lifestyle.
                </h1>
                <p className="mt-4 text-lg">
                    Whether you&apos;re just starting out, have played <br /> your whole life, or you&apos;re a Tour pro, your <br /> swing is like a fingerprint.
                </p>
                <a href="#_" className="px-5 py-2.5 relative rounded group font-medium text-white inline-block mt-6">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative">Shop Now</span> {/* Updated button text */}
                </a>
            </div>
        </div>
    );
};

export default Banner;
