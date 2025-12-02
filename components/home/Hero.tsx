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

        {/* RIGHT BUTTON (DESKTOP) — WHATSAPP ONLY */}
<div className="hidden lg:flex items-center">
  <a
    href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-3
      bg-green-500 hover:bg-green-600
      text-white font-semibold text-lg
      px-6 py-2 rounded-full
      shadow-md shadow-green-700/30
      transition-all duration-300
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M16.004 2.003c-7.732 0-14 6.268-14 14 0 2.473.646 4.886 1.873 7.02L2 30l7.17-1.846A13.93 13.93 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.453c-2.24 0-4.455-.602-6.38-1.742l-.457-.27-4.254 1.095 1.133-4.148-.298-.477A11.44 11.44 0 0 1 4.557 16c0-6.306 5.14-11.446 11.446-11.446 6.305 0 11.445 5.14 11.445 11.446s-5.14 11.456-11.445 11.456zm6.207-8.63c-.338-.169-2.003-.988-2.313-1.102-.31-.113-.536-.169-.761.17-.225.338-.872 1.102-1.07 1.327-.197.225-.394.253-.732.084-.338-.169-1.427-.526-2.718-1.68-1.005-.895-1.684-2-1.882-2.338-.197-.338-.021-.52.148-.689.152-.151.338-.394.507-.591.169-.197.225-.338.338-.563.113-.225.056-.422-.028-.591-.084-.169-.761-1.827-1.043-2.503-.275-.66-.556-.57-.761-.58-.197-.008-.422-.01-.648-.01-.225 0-.591.084-.902.422-.31.338-1.183 1.157-1.183 2.821s1.211 3.273 1.38 3.499c.169.225 2.382 3.637 5.77 5.088.808.349 1.439.557 1.932.713.811.258 1.55.222 2.133.135.651-.097 2.003-.818 2.285-1.607.282-.789.282-1.464.197-1.607-.084-.142-.31-.225-.648-.394z"/>
    </svg>

    WhatsApp Us
  </a>
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

            <Link href="/" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Shop
            </Link>

            <Link href="/" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Products
            </Link>

            <Link href="/" onClick={() => setOpen(false)} className="text-white text-xl font-semibold">
              Contact
            </Link>

            <a
              href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
    flex items-center justify-center gap-3
    bg-green-500 hover:bg-green-600
    text-white font-semibold text-lg
    px-5 py-3 rounded-md
    shadow-md shadow-green-700/30
    transition-all duration-300
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M16.004 2.003c-7.732 0-14 6.268-14 14 0 2.473.646 4.886 1.873 7.02L2 30l7.17-1.846A13.93 13.93 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-14-14-14zm0 25.453c-2.24 0-4.455-.602-6.38-1.742l-.457-.27-4.254 1.095 1.133-4.148-.298-.477A11.44 11.44 0 0 1 4.557 16c0-6.306 5.14-11.446 11.446-11.446 6.305 0 11.445 5.14 11.445 11.446s-5.14 11.456-11.445 11.456zm6.207-8.63c-.338-.169-2.003-.988-2.313-1.102-.31-.113-.536-.169-.761.17-.225.338-.872 1.102-1.07 1.327-.197.225-.394.253-.732.084-.338-.169-1.427-.526-2.718-1.68-1.005-.895-1.684-2-1.882-2.338-.197-.338-.021-.52.148-.689.152-.151.338-.394.507-.591.169-.197.225-.338.338-.563.113-.225.056-.422-.028-.591-.084-.169-.761-1.827-1.043-2.503-.275-.66-.556-.57-.761-.58-.197-.008-.422-.01-.648-.01-.225 0-.591.084-.902.422-.31.338-1.183 1.157-1.183 2.821s1.211 3.273 1.38 3.499c.169.225 2.382 3.637 5.77 5.088.808.349 1.439.557 1.932.713.811.258 1.55.222 2.133.135.651-.097 2.003-.818 2.285-1.607.282-.789.282-1.464.197-1.607-.084-.142-.31-.225-.648-.394z" />
              </svg>

              WhatsApp Us
            </a>

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
              href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-red-700 hover:scale-105 transition duration-200"
            >
              SHOP NOW
            </Link>

            <Link
              href="https://wa.me/923029476438?text=I%20want%20a%20free%20Jhatka%20Jar%20sample"
              className="border-2 border-yellow-400 text-yellow-200 px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-yellow-400 hover:text-black transition duration-200"
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
