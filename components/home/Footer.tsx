"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: scroll to top if id not found
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Reveal effect="slide-up">
      <footer className="bg-black/50 backdrop-blur-lg text-white py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Jhatka Jar" width={48} height={48} />
              <div className="leading-tight">
                <span className="text-xl font-bold">Jhatka Jar</span>
                <span className="text-sm text-white/70 block">Premium Pickles</span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Authentic handmade pickles with traditional flavors. Bringing heritage to your table.
            </p>

            <div className="flex gap-4 mt-3 text-white/80 text-lg">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("top")}
                  className="hover:underline text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("showcase")}
                  className="hover:underline text-left"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:underline text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>FAQ</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-white/70 text-sm mb-2">
              Email: <a href="mailto:info@jhatkajar.com" className="underline">jhatkajar@gmail.com</a>
            </p>
            <p className="text-white/70 text-sm">
              Phone: <a href="tel:+923249165123" className="underline">+92 324 9165123</a>
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70 text-xs sm:text-sm">
          © 2025 Jhatka Jar — All Rights Reserved.
        </div>
      </footer>
    </Reveal>
  );
}
