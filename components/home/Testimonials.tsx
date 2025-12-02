import Image from "next/image";
import Reveal from "@/components/Reveal";
const reviews = [
  { name: "Sakshi K., Lahore", img: "/images/rev1.png", text: "This achar tastes just like my Nani's!" },
  { name: "Ayesha P., Karachi", img: "/images/rev2.png", text: "Spicy, traditional and perfect." },
  { name: "Fatima A., Islamabad", img: "/images/rev3.png", text: "Fresh, sun-ripened flavour." },
];

export default function Testimonials() {
  return (
    <Reveal effect="zoom">
      <section className="py-32">

        {/* Mandala background image */}
        <div className="absolute inset-0 opacity-20 -z-10">
          <Image
            src="/images/bg-mandala.png"
            alt="Mandala background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-red-900">
            What Our Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {reviews.map((r, index) => (
              <div
                key={index}
                className="
            relative 
            rounded-3xl 
            p-8 
            flex flex-col items-center text-center
            transition-transform duration-500
            hover:-translate-y-4 hover:rotate-1
            
            bg-black/25 
            backdrop-blur-md
            border border-white/20
            shadow-md
          "
              >
                {/* Subtle background texture for card */}
                <div className="absolute inset-0 bg-[url('/images/spice-texture.png')] bg-cover bg-center opacity-5 rounded-3xl -z-10"></div>

                <div className="relative -mt-20 mb-4">
                  <div className="
              w-28 h-28 rounded-full overflow-hidden relative
              bg-black/20 backdrop-blur-md
              border border-white/20
              shadow-sm
            ">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-red-400 text-3xl mb-4">“</div>

                <p className="text-gray-100 text-base md:text-lg italic mb-6">
                  {r.text}
                </p>

                <h3 className="font-semibold text-lg text-white">{r.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Reveal>
  );
}
