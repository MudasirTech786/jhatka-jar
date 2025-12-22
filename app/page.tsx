import Hero from "@/components/home/Hero";
import FreeSample from "@/components/home/FreeSample";
import Showcase from "@/components/home/Showcase";
import BrandStory from "@/components/home/BrandStory";
import RecipeInspiration from "@/components/home/RecipeInspiration";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="text-[#F7EEDC]">

      {/* Hero + Free Sample */}
      <section className="bg-gradient-to-b from-[#2A1A12] to-[#3A2318]">
        <Hero />
        <FreeSample />
      </section>

      <section className="bg-gradient-to-b from-[#3A2318] to-[#4A2E15]">
        <Showcase />
      </section>

      <section className="bg-gradient-to-b from-[#4A2E15] to-[#5A3A22]">
        <BrandStory />
      </section>

      <section className="bg-gradient-to-b from-[#5A3A22] to-[#6A4730]">
        <RecipeInspiration />
      </section>

      <section className="bg-gradient-to-b from-[#6A4730] to-[#1A0F0A]">
        <Testimonials />
      </section>

      <section>
        <Footer />
      </section>

    </main>
  );
}

