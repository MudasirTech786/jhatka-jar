import Image from "next/image";
import Reveal from "@/components/Reveal";

const reviews = [
  { name: "Sakshi K., Lahore", img: "/images/rev1.png", text: "This achar tastes just like my Nani's!" },
  { name: "Ayesha P., Karachi", img: "/images/rev2.png", text: "Spicy, traditional and perfect." },
  { name: "Fatima A., Islamabad", img: "/images/rev3.png", text: "Fresh, sun-ripened flavour." },
];

export default function Testimonials() {
  return (
    <Reveal effect="slide-up">
      <section className="py-20 md:py-32 relative">

        {/* Background Mandala */}
        <div className="absolute inset-0 opacity-20 -z-10">
          <Image
            src="/images/bg-mandala.png"
            alt="Mandala background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 sm:mb-20 text-red-900">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {reviews.map((r, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-3xl
                  p-5 sm:p-8
                  flex flex-col items-center text-center
                  transition-transform duration-500
                  hover:-translate-y-3 hover:rotate-1
                  bg-white
                  border border-white/30
                  shadow-lg
                "
              >
                {/* Subtle background texture */}
                <div className="absolute inset-0 bg-[url('/images/spice-texture.png')] bg-cover bg-center opacity-5 rounded-3xl -z-10"></div>

                {/* Avatar */}
                <div className="relative -mt-10 sm:-mt-16 mb-4">
                  <div
                    className="
                      w-24 h-24 sm:w-28 sm:h-28 
                      rounded-full overflow-hidden relative
                      bg-black/20 backdrop-blur-md
                      border border-white/20
                      shadow-sm
                    "
                  >
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-red-400 text-3xl mb-3 sm:mb-4">“</div>

                <p className="text-gray-900 text-base sm:text-lg italic mb-4 sm:mb-6">
                  {r.text}
                </p>

                <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                  {r.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
