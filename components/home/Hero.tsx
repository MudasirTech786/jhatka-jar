"use client";

import { useState } from "react";

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
      {/* */}
    </section>
  );
}
