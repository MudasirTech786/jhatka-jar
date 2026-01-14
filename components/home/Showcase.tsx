import Image from "next/image";
import { Truck } from "lucide-react";

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
    <section className="py-16 sm:py-20 lg:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-red-900">
          Our Signature Pickles
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-white border border-gray-200 overflow-hidden
                         transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-gray-100 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* BADGES */}
                <div className="absolute top-2 left-2 flex flex-wrap gap-1 z-10">
                  {item.badge && (
                    <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-red-600 text-white">
                      {item.badge}
                    </span>
                  )}
                  <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-green-600 text-white">
                    Free Sample
                  </span>
                </div>

                {/* HANDMADE STICKER */}
                <div className="absolute top-2 right-2 w-16 sm:w-20 lg:w-24">
                  <Image
                    src="/images/handmade-sticker.png"
                    alt="Handmade & No Preservatives"
                    width={96}
                    height={96}
                    className="rounded-full shadow-lg"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-5 text-center">
                {/* TITLE */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
                  {item.title}
                </h3>

                {/* SPICE */}
                <div className="mt-1 text-sm sm:text-lg">
                  {item.spice}
                </div>

                {/* PRICE */}
                <div className="mt-4">
                  <p className="text-sm sm:text-lg font-bold text-gray-900">
                    Rs. 350{" "}
                    <span className="text-[11px] sm:text-sm font-medium">
                      / 250g
                    </span>
                  </p>
                  <p className="text-[11px] sm:text-sm text-red-700 font-semibold mt-0.5">
                    3 Jars for Rs. 1000
                  </p>
                </div>

                {/* SHIPPING */}
                <div className="mt-2 flex justify-center items-center gap-1 text-[10px] sm:text-xs text-green-700">
                  <Truck size={12} />
                  Free shipping above Rs. 1000
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/923249165123?text=I%20want%20to%20order%20Jhatka%20Jar%20pickle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 sm:mt-6"
                >
                  <button className="w-full py-2 sm:py-3 rounded-xl bg-red-600 text-white text-xs sm:text-base font-semibold tracking-wide hover:bg-red-700 transition">
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
