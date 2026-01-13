"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Hero from "@/components/home/Hero";
import FreeSample from "@/components/home/FreeSample";
import Showcase from "@/components/home/Showcase";
import BrandStory from "@/components/home/BrandStory";
import RecipeInspiration from "@/components/home/RecipeInspiration";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#f7f3e9]">

      {/* NAVBAR */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2
          w-[94%] max-w-7xl
          px-4 sm:px-6 lg:px-10 py-3
          flex items-center justify-between
          rounded-2xl
          bg-black/40 backdrop-blur-md
          border border-white/20
          z-50
          shadow-lg
        "
      >
        {/* LEFT LOGO */}
        <div className="flex items-center gap-3 text-white">
          <Image src="/images/logo.png" alt="Jhatka Jar" width={48} height={48} />
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold">Jhatka Jar</span>
            <span className="text-xs text-white/80 -mt-1">Premium Pickles</span>
          </div>
        </div>

        {/* CENTER MENU DESKTOP */}
        <div className="hidden lg:flex gap-8 text-base font-semibold absolute left-1/2 -translate-x-1/2 text-white">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-yellow-300 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("showcase")}
            className="hover:text-yellow-300 transition"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-300 transition"
          >
            Contact
          </button>
        </div>

        {/* WHATSAPP DESKTOP */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/923249165123"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-500 hover:bg-green-600
              text-white font-semibold text-lg
              px-6 py-2 rounded-full
              shadow-md transition-all duration-300
            "
          >
            WhatsApp Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md p-6 flex flex-col gap-6 lg:hidden rounded-b-2xl">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setOpen(false); }}
              className="text-white text-xl font-semibold hover:text-yellow-300 text-left"
            >
              Home
            </button>
            <button
              onClick={() => { scrollToSection("showcase"); setOpen(false); }}
              className="text-white text-xl font-semibold hover:text-yellow-300 text-left"
            >
              Products
            </button>
            <button
              onClick={() => { scrollToSection("contact"); setOpen(false); }}
              className="text-white text-xl font-semibold hover:text-yellow-300 text-left"
            >
              Contact
            </button>

            <a
              href="https://wa.me/923249165123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                bg-green-500 hover:bg-green-600
                text-white font-semibold text-lg
                px-5 py-3 rounded-lg
                shadow-md transition-all duration-300
                text-center
              "
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>

      {/* PAGE SECTIONS */}
      <Hero />
      <FreeSample />

      {/* Showcase Section with ID */}
      <div id="showcase">
        <Showcase />
      </div>

      <Testimonials />
      <BrandStory />
      <RecipeInspiration />

      {/* Contact Section with ID */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
