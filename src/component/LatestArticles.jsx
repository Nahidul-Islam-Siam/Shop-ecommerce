
import Image from 'next/image';

const articles = [
  {
    title: "Air Jordan x Travis Scott Event",
    image: "/img container.png",
    link: "#",
  },
  {
    title: "The timeless classics on the green",
    image: "/img container1.png",
    link: "#",
  },
  {
    title: "The 2023 Ryder Cup",
    image: "/img container2.png",
    link: "#",
  },
];

const LatestArticles = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Articles</h2>
        <a href="#" className="text-blue-600">
          View More &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="border border-gray-300 p-4 flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{article.title}</h3>
            <a href={article.link} className="text-blue-600 mt-2">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
