"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
        relative w-full 
        min-h-[60vh]
        sm:min-h-[70vh]
        md:min-h-[100vh]
        bg-cover bg-center bg-no-repeat
        text-white flex items-center
      "
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0" />

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

  {/* CENTER MENU */}
  <div className="hidden lg:flex gap-8 text-base font-semibold absolute left-1/2 -translate-x-1/2 text-white">
    <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
    <Link href="/shop" className="hover:text-yellow-300 transition">Shop</Link>
    <Link href="/products" className="hover:text-yellow-300 transition">Products</Link>
    <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
  </div>

  {/* WHATSAPP DESKTOP */}
  <div className="hidden lg:flex items-center">
    <a
      href="https://wa.me/923029476438"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2
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
      {[
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Contact" }
      ].map((item, i) => (
        <Link
          key={i}
          href={item.href}
          onClick={() => setOpen(false)}
          className="text-white text-xl font-semibold hover:text-yellow-300"
        >
          {item.label}
        </Link>
      ))}

      <a
        href="https://wa.me/923029476438"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="
          flex items-center justify-center gap-3
          bg-green-500 hover:bg-green-600
          text-white font-semibold text-lg
          px-5 py-3 rounded-lg
          shadow-md transition-all duration-300
        "
      >
        WhatsApp Us
      </a>
    </div>
  )}
</nav>


      {/* HERO CONTENT */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center mt-32 sm:mt-40 md:mt-36 z-10">

        {/* 📱 MOBILE VIEW */}
        <div className="block md:hidden w-full flex flex-col items-center text-center relative mb-6">
          <h1 className="text-3xl font-extrabold leading-snug mb-4 mt-4 break-words drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
            Ancient Secrets of <span className="text-yellow-400">Pickle</span> —
            <br />
            Making Unveiled by <span className="text-yellow-400">Jhatka Jar.</span>
          </h1>

          <Link
            href="https://wa.me/923029476438"
            className="
              inline-block bg-red-600 hover:bg-red-700 text-white font-semibold
              px-7 py-2.5 rounded-lg shadow-lg shadow-red-900/40
              transition duration-200 text-base mt-1
            "
          >
            SHOP NOW
          </Link>
        </div>

        {/* 🖥 DESKTOP CONTENT */}
        <div className="hidden md:flex flex-col justify-start relative max-w-xl w-full px-10 py-12">

          {/* AUTO GLASS BACKGROUND */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-br from-black/70 via-black/40 to-black/20
              backdrop-blur-xl
              rounded-3xl border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              -z-10
            "
          />

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Ancient Secrets of <span className="text-yellow-400">Pickle</span> —
            <br />
            Making Unveiled by <span className="text-yellow-400">Jhatka Jar.</span>
          </h1>

          <p className="text-base text-gray-100/80 mb-6">
            Our pickle-making process is a love letter to generations of desi culinary magic where every vegetable is lovingly sun-cured and
            every spice ground with the passion of our ancestors crafting flavors that dance on your taste buds.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://wa.me/923029476438"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-red-900/40 transition"
            >
              SHOP NOW
            </Link>

            <Link
              href="#products"
              className="bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/50 text-yellow-400 px-6 py-3 rounded-xl font-bold transition"
            >
              VIEW FLAVOURS
            </Link>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
