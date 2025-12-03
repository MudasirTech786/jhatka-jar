import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
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
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/shop" className="hover:underline">Shop</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:underline">Returns & Refunds</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-white/70 text-sm mb-2">
              123 Jhatka Street, Lahore, Pakistan
            </p>
            <p className="text-white/70 text-sm mb-2">
              Email: <a href="mailto:info@jhatkajar.com" className="underline">info@jhatkajar.com</a>
            </p>
            <p className="text-white/70 text-sm">
              Phone: <a href="tel:+923001234567" className="underline">+92 300 1234567</a>
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
