// components/PromoSection.js
import Image from 'next/image';

const PromoSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white relative mt-4 h-96">
      <div className="md:w-1/2 w-full h-64 md:h-auto relative">
        <Image
          src="/images.png"
          alt="Golf Promo"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col items-start justify-center p-10 space-y-4 relative">
        <span className="text-green-400 font-semibold">LIMITED EDITION</span>
        <h2 className="text-4xl font-bold">Hurry up! 30% OFF</h2>
        <p>Find clubs that are right for your game</p>
        <div className="flex space-x-2">
          <div className="bg-gray-800 text-white px-2 py-1 rounded">02</div>
          <div className="bg-gray-800 text-white px-2 py-1 rounded">12</div>
          <div className="bg-gray-800 text-white px-2 py-1 rounded">45</div>
          <div className="bg-gray-800 text-white px-2 py-1 rounded">05</div>
        </div>
        <button className="bg-green-500 text-black px-4 py-2 rounded">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default PromoSection;
