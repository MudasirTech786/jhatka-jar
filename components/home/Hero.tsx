"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-[95vh] bg-cover bg-right bg-no-repeat text-white flex items-center"
      style={{ backgroundImage: "url('/images/Onion Achaar mockup.png')" }}
    >

      {/* NAVBAR */}
      <nav
        className="
          absolute top-4 left-1/2 -translate-x-1/2
          w-[92%] max-w-7xl
          px-5 lg:px-10 py-3
          flex items-center justify-between
          rounded-2xl
          bg-black/25 backdrop-blur-md
          border border-white/20
          z-20
        "
      >
        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Jhatka Jar"
            width={48}
            height={48}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold">Jhatka Jar</span>
            <span className="text-xs text-white/80 -mt-1">Premium Pickles</span>
          </div>
        </div>

        {/* CENTER MENU (DESKTOP) — NOW lg ONLY */}
        <div className="
          hidden lg:flex 
          gap-8 text-base font-semibold 
          mx-auto absolute left-1/2 -translate-x-1/2
        ">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/shop" className="text-white">Shop</Link>
          <Link href="/products" className="text-white">Products</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>

        {/* RIGHT BUTTONS (DESKTOP) — NOW lg ONLY */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/login" className="text-white text-lg font-semibold">
            Log In
          </Link>

          <Link
            href="/signup"
            className="bg-[#F9D99A] text-black px-5 py-2 rounded-full font-semibold shadow-md"
          >
            Sign Up
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="
            absolute top-full left-0 w-full 
            bg-black/70 backdrop-blur-md 
            p-6 flex flex-col gap-6 lg:hidden 
            rounded-b-2xl
          ">
            <Link href="/" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Home
            </Link>

            <Link href="/shop" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Shop
            </Link>

            <Link href="/products" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Products
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Contact
            </Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="bg-white/20 px-4 py-3 rounded-md text-white text-center text-lg border border-white/20"
            >
              Log In
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="bg-[#F9D99A] text-black px-4 py-3 rounded-md text-center text-lg font-semibold"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-32 z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug drop-shadow-xl">
            Authentic Pakistani Achar — Made the Traditional Way.
          </h1>

          <p className="text-lg text-white/90 drop-shadow-md">
            Handcrafted in small batches using real spices passed down through generations.
          </p>

          <div className="flex gap-4">
            <Link
              href="/shop"
              className="bg-black text-white font-semibold px-6 py-3 rounded-md shadow-lg"
            >
              SHOP NOW
            </Link>

            <Link
              href="/flavours"
              className="border border-white text-white font-semibold px-6 py-3 rounded-md shadow-lg"
            >
              VIEW FLAVOURS
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE EMPTY */}
        <div className="hidden md:block"></div>

      </div>
    </section>
  );
}
