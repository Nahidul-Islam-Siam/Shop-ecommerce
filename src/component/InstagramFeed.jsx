// components/InstagramFeed.js
import Image from 'next/image';

const images = [
  "/i2.png",
  "/i3.png",
  "/i4.png",
  "/i5.png",
  "/i6.png",
  "/i7.png",
  "/i8.png",
];

const InstagramFeed = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-sm uppercase font-bold tracking-widest text-gray-500">Newsfeed</h2>
        <h1 className="text-3xl font-bold mb-2">Instagram</h1>
        <p className="text-gray-500">Follow us on social media for more discount & promotions</p>
        <p className="text-blue-600">@3elegant_official</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-48">
            <Image
              src={image}
              alt={`Instagram image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
