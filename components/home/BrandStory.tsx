import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@heroicons/react/24/solid"; // optional icons

export default function BrandStory() {
  return (
    <Reveal effect="slide-left">
    <section className="py-32 bg-gradient-to-b from-[#fbf6ef] to-white relative overflow-hidden">
      {/* Optional decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/nani.jpg"
              alt="Nani making achar"
              width={540}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-900">
              A Taste Passed Down
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              100% natural ingredients, no preservatives and slow sun-ripening—
              the way our Nani & Ammi made it.
            </p>

            <ul className="space-y-3">
              {["Hand-selected spices", "Traditional mixing", "Sun-ripened", "Sealed for freshness"].map((item) => (
                <li key={item} className="flex items-center text-gray-800 text-lg">
                  <CheckIcon className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-4 inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              Explore Our Pickles
            </button>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}
