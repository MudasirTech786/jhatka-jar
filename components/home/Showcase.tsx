import Image from "next/image";

const products = [
  {
    title: "Spicy Chilli Achar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️🌶️",
    img: "/images/chillicard.jpg",
    badge: "Best Seller",
  },
  {
    title: "Onion Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️",
    img: "/images/onioncard.jpg",
  },
  {
    title: "Garlic Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️",
    img: "/images/garlicard.jpg",
    badge: "Limited",
  },
  {
    title: "Mix Achaar",
    price: "PKR. 1000",
    oldPrice: 2500,
    spice: "🌶️🌶️",
    img: "/images/mixcard.jpg",
    badge: "Limited",
  },
];

export default function Showcase() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-red-900">
          Our Products
        </h2>

        {/* Grid → now 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">

              {/* Image Container */}
              <div className="
                w-full relative rounded-xl overflow-hidden
                aspect-[1/1] sm:aspect-[3/4] lg:h-80
                group shadow-md
              ">

                {item.badge && (
                  <span className="
                    absolute top-2 left-2 bg-red-600 text-white text-xs 
                    px-3 py-1 rounded-full shadow-md z-20
                  ">
                    {item.badge}
                  </span>
                )}

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="
                    object-cover 
                    transition-transform duration-500 
                    group-hover:scale-110 md:group-hover:scale-125
                  "
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm sm:text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Spice */}
              <p className="text-lg mt-1">{item.spice}</p>

              {/* Price */}
              <p className="mt-1 text-sm sm:text-base font-bold text-gray-900">
                {item.price}
                <span className="text-red-500 line-through text-xs ml-1">
                  {item.oldPrice}
                </span>
              </p>

              {/* Button */}
              <a
                href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                <button className="
                  border text-black border-black px-3 py-1 rounded-md text-xs sm:text-sm
                  hover:bg-red-900 hover:text-white transition
                ">
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
