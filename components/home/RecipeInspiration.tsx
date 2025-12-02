import Image from "next/image";
import Reveal from "@/components/Reveal";

const recipes = [
  { name: "Paratha with Achar", img: "/images/paratha.png" },
  { name: "Daal Chawal", img: "/images/daal.png" },
  { name: "Chicken Karahi", img: "/images/karahi.png" },
  { name: "Shaami Kabab", img: "/images/shami.png" },
];

export default function RecipeInspiration() {
  return (
    <Reveal effect="slide-right">
      <section className="py-32 relative overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/bg-mandala.png" // same background as your other sections
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-red-900">
            Recipe Inspiration
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {recipes.map((r) => (
              <div
                key={r.name}
                className="
                  rounded-3xl
                  p-4
                  flex flex-col items-center text-center
                  transition-transform duration-500
                  hover:scale-105

                  bg-black/25 
                  backdrop-blur-md
                  shadow-lg
                  border border-white/20
                "
              >
                {/* Image */}
                <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="mt-3 font-semibold text-lg text-gray-100">
                  {r.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
