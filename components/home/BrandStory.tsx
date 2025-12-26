import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function BrandStory() {
  return (
    <Reveal effect="slide-up">
      <section
        className="
          py-16              
          sm:py-20             
          md:py-28             
          relative overflow-hidden
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/bg-mandala.png"
            alt="Background texture"
            fill
            className="object-cover"
          />
        </div>

        {/* Decorative Shape */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

            {/* Image */}
            <div
              className="
                relative rounded-3xl overflow-hidden shadow-2xl
                transition-transform duration-500
                hover:scale-105
              "
            >
              <Image
                src="/images/nani1.png"
                alt="Nani making achar"
                width={540}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text */}
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">

              <h2
                className="
                  text-3xl sm:text-4xl md:text-5xl
                  font-extrabold text-red-900
                "
              >
                A Taste Passed Down
              </h2>

              <p
                className="
                  text-base sm:text-lg md:text-xl 
                  leading-relaxed
                "
              >
                100% natural ingredients, no preservatives and slow sun-ripening—
                the way our ancestors made it.
              </p>

              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Hand-selected spices",
                  "Traditional mixing",
                  "Sun-ripened",
                  "Sealed for freshness",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      flex flex-col md:flex-row 
                      items-center md:items-center 
                      text-base sm:text-lg
                    "
                  >
                    <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-0 md:mr-3 mb-1 md:mb-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
