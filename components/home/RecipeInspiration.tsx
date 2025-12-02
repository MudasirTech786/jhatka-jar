import Image from "next/image";

const recipes = [
  { name: "Paratha with Achar", img: "/images/paratha.png" },
  { name: "Daal Chawal", img: "/images/daal.png" },
  { name: "Chicken Karahi", img: "/images/karahi.png" },
  { name: "Shaami Kabab", img: "/images/shami.png" },
];

export default function RecipeInspiration() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#fffaf2] to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-red-900">
          Recipe Inspiration
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {recipes.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              <p className="mt-3 font-semibold text-lg text-gray-800">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
