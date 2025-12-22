import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  return (
    <Reveal effect="slide-up">
      <section
        className="
          relative overflow-hidden
          py-20 sm:py-24 md:py-32
          bg-gradient-to-b from-[#2F8A57] to-[#25724A]
          text-white
        "
      >
        {/* Background Mandala Image */}
        <div className="absolute inset-0 opacity-20 z-0">
          <Image
            src="/images/bg-mandala.png"
            alt="Traditional mandala texture"
            fill
            className="object-cover"
          />
        </div>

        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">

          {/* Main Heading */}
          <h2
            className="
              text-center
              text-3xl sm:text-4xl md:text-5xl
              font-extrabold
              leading-tight
              max-w-4xl
              mx-auto
              mb-16
            "
          >
            Unraveling the Artisan Magic Behind <br className="hidden sm:block" />
            Jhatka Jar’s Legendary Pickle Craftsmanship
          </h2>

          {/* Two Column Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">

            {/* Left Column */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                Authentic Ingredients Secret {" "}
                <span className="inline-block bg-yellow-400 text-black px-2 py-0.5 rounded">
                  Revealed 
                </span>
              </h3>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Our meticulously sourced red chillies and hand-selected spices
                transform ordinary ingredients into extraordinary culinary
                masterpieces. Every element is chosen with care, following
                generations-old traditions that honor purity, balance, and
                flavor.
              </p>
            </div>

            {/* Right Column */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                Handcrafted Pickle Making{" "}
                <span className="inline-block bg-yellow-400 text-black px-2 py-0.5 rounded">
                  Process
                </span>
              </h3>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Each pickle batch undergoes a sacred ritual of sun-curing,
                patient mixing, and careful resting. This slow, handcrafted
                process allows flavors to mature naturally, guaranteeing a
                bold explosion of taste in every single bite.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Reveal>
  );
}
