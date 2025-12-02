import Hero from "@/components/home/Hero";
import FreeSample from "@/components/home/FreeSample";
import Showcase from "@/components/home/Showcase";
import BrandStory from "@/components/home/BrandStory";
import RecipeInspiration from "@/components/home/RecipeInspiration";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="bg-[#f7f3e9]">
      <Hero />
      <FreeSample />
      <Showcase />
      <BrandStory />
      <RecipeInspiration />
      <Testimonials />
      <Footer />
    </main>
  );
}
