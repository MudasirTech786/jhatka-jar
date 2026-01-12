import Image from "next/image";
import { Check, Truck } from "lucide-react";

const products = [
  {
    title: "Chilli Achar",
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
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
          Our Signature Pickles
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/5] bg-gray-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* BADGES */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.badge && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-600 text-white">
                      {item.badge}
                    </span>
                  )}
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-600 text-white">
                    Free Sample
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-1 text-lg">{item.spice}</div>

                {/* FEATURES */}
                <div className="flex justify-center gap-3 mt-4 text-xs">
  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
    <Check size={12} className="text-green-600" />
    No Preservatives
  </span>

  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
    <Check size={12} className="text-green-600" />
    Homemade
  </span>
</div>


                {/* PRICE */}
                <div className="mt-5">
                  <p className="text-lg font-bold text-gray-900">
                    Rs. 350 <span className="text-sm font-medium">/ 250g</span>
                  </p>
                  <p className="text-sm text-red-700 font-semibold mt-1">
                    3 Jars for Rs. 1000
                  </p>
                </div>

                {/* SHIPPING */}
                <div className="mt-3 flex justify-center items-center gap-1 text-xs text-green-700">
                  <Truck size={14} /> Free shipping above Rs. 1000
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/923029476438?text=I%20want%20to%20order%20Jhatka%20Jar%20pickle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6"
                >
                  <button className="w-full py-3 rounded-xl bg-red-600 text-white font-semibold tracking-wide hover:bg-red-700 transition">
                    ORDER NOW
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
