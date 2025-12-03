"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-[95vh] bg-cover bg-center bg-no-repeat text-white flex items-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-0" />

      {/* NAVBAR */}
      <nav className="absolute top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between rounded-2xl bg-black/25 backdrop-blur-md border border-white/20 z-20">
        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Jhatka Jar" width={48} height={48} />
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold">Jhatka Jar</span>
            <span className="text-xs text-white/80 -mt-1">Premium Pickles</span>
          </div>
        </div>

        {/* CENTER MENU */}
        <div className="hidden lg:flex gap-8 text-base font-semibold mx-auto absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/shop" className="hover:text-yellow-300 transition">Shop</Link>
          <Link href="/products" className="hover:text-yellow-300 transition">Products</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        {/* WHATSAPP DESKTOP */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-2 rounded-full shadow-md transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden text-white ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black/75 backdrop-blur-md p-6 flex flex-col gap-6 lg:hidden rounded-b-2xl">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/products", label: "Products" },
              { href: "/contact", label: "Contact" }
            ].map((item, i) => (
              <Link key={i} href={item.href} onClick={() => setOpen(false)} className="text-white text-xl font-semibold hover:text-yellow-300">
                {item.label}
              </Link>
            ))}

            <a
              href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-5 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        )}
      </nav>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 
  grid grid-cols-1 md:grid-cols-2 gap-10 items-center
  mt-40 sm:mt-48 md:mt-36 z-10">

        <div className="relative max-w-xl mx-auto md:mx-0">

          {/* PREMIUM GLASS GRADIENT CARD */}
          <div className="
      absolute inset-0 
      bg-gradient-to-br from-black/70 via-black/40 to-black/20
      backdrop-blur-md 
      rounded-3xl 
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      border border-white/10
      -z-10
    " />

          <div className="p-8 sm:p-10 space-y-6">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Authentic Pakistani <span className="text-yellow-400">Achar</span> —
              <br />Made the Traditional Way.
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Crafted in small batches using handpicked spices and time-honoured
              family recipes.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

              <Link
                href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                className="
            bg-red-600 hover:bg-red-700 
            text-white font-semibold 
            px-8 py-3 rounded-xl 
            shadow-lg shadow-red-900/40
            transition duration-200
            text-center text-lg
          "
              >
                SHOP NOW
              </Link>

              <Link
                href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
                className="
            px-8 py-3 rounded-xl 
            text-lg font-semibold 
            border border-yellow-400 
            text-yellow-300
            hover:bg-yellow-400 hover:text-black 
            transition duration-200
            backdrop-blur-sm
            text-center
          "
              >
                VIEW FLAVOURS
              </Link>

            </div>

          </div>
        </div>

        <div className="hidden md:block" />
      </div>


    </section>
  );
}