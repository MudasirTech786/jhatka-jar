"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#c78d1e] text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png" // replace with your logo
            alt="Jhatka Jar Logo"
            width={65}
            height={65}
            className="rounded"
          />
          <span className="font-bold text-xl">Jhatka Jar</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-yellow-200 text-[#c3541e]">Home</Link>
          <Link href="/shop" className="hover:text-yellow-200">Shop</Link>
          <Link href="/flavours" className="hover:text-yellow-200">Flavours</Link>
          <Link href="/contact" className="hover:text-yellow-200">Contact</Link>

          <div className="flex gap-4 ml-4">
            <Link
              href=""
              className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
            >
              Log in
            </Link>
            <Link
              href=""
              className="px-4 py-2 bg-black rounded-md hover:bg-gray-900 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#c78d1e] border-t border-white/20">
          <div className="flex flex-col p-6 gap-4 text-lg">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/flavours" onClick={() => setOpen(false)}>Flavours</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="px-4 py-2 border border-white rounded-md text-center"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-black rounded-md text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
