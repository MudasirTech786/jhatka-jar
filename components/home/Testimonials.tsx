import Image from "next/image";

const reviews = [
  { name: "Sakshi K., Lahore", img: "/images/rev1.png", text: "This achar tastes just like my Nani's!" },
  { name: "Ayesha P., Karachi", img: "/images/rev2.png", text: "Spicy, traditional and perfect." },
  { name: "Fatima A., Islamabad", img: "/images/rev3.png", text: "Fresh, sun-ripened flavour." },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#fff4e6] to-[#fffaf2] relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-red-900">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-4 hover:rotate-1 hover:shadow-3xl duration-500"
            >
              {/* Subtle spice texture behind the card */}
              <div className="absolute inset-0 bg-[url('/images/spice-texture.png')] bg-cover bg-center opacity-10 rounded-3xl -z-10"></div>

              {/* Profile image floating above the card */}
              <div className="relative -mt-16 mb-4 w-24 h-24">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              {/* Quote icon */}
              <div className="text-red-400 text-3xl mb-4">“</div>

              {/* Testimonial text */}
              <p className="text-gray-800 text-base md:text-lg italic mb-6">{r.text}</p>

              {/* Customer name */}
              <h3 className="font-semibold text-lg text-red-900">{r.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
