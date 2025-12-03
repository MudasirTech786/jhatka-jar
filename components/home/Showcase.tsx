import Image from "next/image";

const products = [
  {
    title: "Spicy Chilli Achar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️🌶️",
    img: "/images/Chilli card.jpg",
    badge: "Best Seller"
  },
  {
    title: "Onion Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️",
    img: "/images/Onion card.jpg",
  },
  {
    title: "Garlic Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️",
    img: "/images/Garlic card.jpg",
    badge: "Limited"
  },
  {
    title: "Mix Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️",
    img: "/images/Mix card.jpg",
    badge: "Limited"
  },
];

export default function Showcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 sm:mb-20 text-red-900">
          Our Products
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {/* Bigger Image Container */}
              <div className="w-full relative rounded-xl overflow-hidden 
                    aspect-[4/5] sm:aspect-[3/4] lg:h-80 group">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-150"
                />
              </div>


              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Spice Level */}
              <p className="text-2xl mt-1">{item.spice}</p>

              {/* Price */}
              <p className="mt-1 text-lg font-bold text-gray-900">
                {item.price}{" "}
                <span className="text-red-500 line-through text-sm ml-1">
                  {item.oldPrice}
                </span>
              </p>

              {/* Button */}
              <a
                href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 border border-black px-6 py-2 rounded-md hover:bg-red-900 hover:text-white transition">
                  SHOP NOW
                </button>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
