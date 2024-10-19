// components/ShopCollection.js
import Image from 'next/image';

const collections = [
  {
    name: "Juniors Set",
    image: "/Paste image.png",
    link: "#",
  },
  {
    name: "Men's Set",
    image: "/Paste image1.png",
    link: "#",
  },
  {
    name: "Women's Set",
    image: "/Paste image2.png",
    link: "#",
  },
];

const ShopCollection = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shop Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-blue-400 p-4 flex flex-col items-center">
          <div className="relative w-full h-64 md:h-full">
            <Image
              src={collections[0].image}
              alt={collections[0].name}
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold mt-4">{collections[0].name}</h3>
          <a href={collections[0].link} className="text-blue-600 mt-2">
            Collections &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {collections.slice(1).map((collection, index) => (
            <div key={index} className="border border-gray-300 p-4 flex flex-col items-center">
              <div className="relative w-full h-32">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{collection.name}</h3>
              <a href={collection.link} className="text-blue-600 mt-2">
                Collections &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCollection;
