import Image from "next/image";
import Reveal from "@/components/Reveal";
const products = [
  {
    title: "Spicy Chilli Achar",
    price: "PKR. 1000",
    img: "/images/chilli Achaar mockup copy.png",
    badge: "Best Seller",
  },
  {
    title: "Onion Achaar",
    price: "PKR. 1000",
    img: "/images/Onion Achaar mockup.png",
  },
  {
    title: "Garlic Achaar",
    price: "PKR. 1000",
    img: "/images/Garlic Achaar mockup copy.png",
    badge: "Limited",
  },
  {
    title: "Mix Achaar",
    price: "PKR. 1000",
    img: "/images/Mix Achaar mockup.png",
    badge: "Limited",
  },
];

export default function Showcase() {
  return (
    <Reveal effect="zoom">
    <section className="py-32 bg-gradient-to-b from-[#fbf6ef] to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-20 text-red-900">
          Signature Pickles Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {products.map((item) => (
            <div
              key={item.title}
              className="bg-black/25 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center text-center
                         transition-transform transform hover:-translate-y-4 hover:scale-105 
                         hover:shadow-2xl duration-500 relative border border-white/20"
            >
              <div className="w-full h-64 relative mb-6 drop-shadow-[0_0_25px_rgba(255,70,70,0.6)]">


                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />

                {item.badge && (
                  <div className="absolute top-4 left-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1 rounded-r-full font-semibold shadow-lg transform -rotate-12 text-sm">
                    {item.badge}
                  </div>
                )}
              </div>

              <h3 className="font-bold text-2xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xl text-gray-700 mb-6">{item.price}</p>

              <button className="mt-auto bg-gradient-to-r from-yellow-500 to-yellow-600 
                hover:from-yellow-600 hover:to-yellow-500 
                text-white font-semibold px-8 py-3 
                rounded-xl shadow-lg hover:shadow-2xl 
                transition-all duration-300">
                BUY NOW
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}
