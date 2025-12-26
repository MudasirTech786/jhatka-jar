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
    <Reveal effect="slide-up">
      <section className="py-20 md:py-32 relative overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/bg-mandala.png"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-center text-red-900">
            Recipe Inspiration
          </h2>

          {/* Responsive Grid */}
          <div
            className="
              grid
              grid-cols-2       /* smaller images on mobile */
              sm:grid-cols-2
              md:grid-cols-4
              gap-4 sm:gap-8
            "
          >
            {recipes.map((r) => (
              <div
                key={r.name}
                className="
                  relative
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  border border-white/20
                  transition-transform duration-500
                  hover:scale-105
                  aspect-[1/1.2]      /* smaller aspect ratio on mobile */
                  sm:aspect-[3/4]      /* taller on larger screens */
                "
              >
                {/* Image */}
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Label */}
                <div className="absolute bottom-4 w-full text-center px-2">
                  <p className="text-white text-sm sm:text-xl font-semibold drop-shadow-lg">
                    {r.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}
