import Image from "next/image";

const products = [
  {
    title: "Spicy Chilli Achar",
    spice: "🌶️🌶️🌶️",
    img: "/images/chillicard.jpg",
    badge: "Best Seller",
  },
  {
    title: "Onion Achaar",
    spice: "🌶️🌶️",
    img: "/images/onioncard.jpg",
  },
  {
    title: "Garlic Achaar",
    spice: "🌶️",
    img: "/images/garlicard.jpg",
    badge: "Limited",
  },
  {
    title: "Mix Achaar",
    spice: "🌶️🌶️",
    img: "/images/mixcard.jpg",
    badge: "Limited",
  },
];

export default function Showcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 text-red-900">
          Our Signature Pickles
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center group">
              
              {/* Image with badges */}
              <div className="relative w-full aspect-[1/1] sm:aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {item.badge && (
                    <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-red-600 text-white">
                      {item.badge}
                    </span>
                  )}
                  <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-green-600 text-white">
                    Free Sample
                  </span>
                </div>

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product title */}
              <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Spice level */}
              <p className="text-lg mt-1">{item.spice}</p>

              {/* Button */}
              <a
                href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full"
              >
                <button
                  className="w-full py-3 text-sm sm:text-base font-semibold text-white rounded-full bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  REQUEST SAMPLE
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
