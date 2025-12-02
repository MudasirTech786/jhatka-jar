import Image from "next/image";
import Reveal from "@/components/Reveal";

const products = [
  { title: "Spicy Chilli Achar", price: "PKR. 1000", spice: "🌶️🌶️🌶️", img: "/images/chilli.png", badge: "Best Seller" },
  { title: "Onion Achaar", price: "PKR. 1000", spice: "🌶️🌶️", img: "/images/Onion.png" },
  { title: "Garlic Achaar", price: "PKR. 1000", spice: "🌶️", img: "/images/garlic.png", badge: "Limited" },
  { title: "Mix Achaar", price: "PKR. 1000", spice: "🌶️🌶️", img: "/images/pickle.png", badge: "Limited" },
];

export default function Showcase() {
  return (
    <Reveal effect="zoom">
      <section className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-gray-900">
            Signature Pickles Showcase
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 place-items-center">
  {products.map((item, index) => (
    <div
      key={item.title}
      className={`
        bg-white rounded-2xl p-10 w-[300px]
        shadow-lg hover:shadow-2xl transition-all duration-300
        flex flex-col items-center text-center
        ${
          index === 0
            ? "-rotate-6"
            : index === 1
            ? "rotate-4"
            : index === 2
            ? "-rotate-5"
            : "rotate-6"
        }
      `}
    >
      {/* Product Image */}
      <div className="w-48 h-64 relative mb-8">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
        {item.title}
      </h3>

      {/* Icons */}
      <div className="text-3xl mb-4">{item.spice}</div>

      {/* Price */}
      <p className="text-2xl font-bold text-gray-900 mb-4">
        {item.price}
      </p>

      {/* Button */}
      <button className="bg-[#8B4B2E] hover:bg-[#723b22] text-white font-semibold px-8 py-3 rounded-full shadow-md w-full">
        ADD TO CART
      </button>
    </div>
  ))}
</div>



        </div>
      </section>
    </Reveal>
  );
}
