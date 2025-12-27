"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = "923029476438"; // ✅ country code + number, no + or 00
    const text = `Hello! I am ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank"); // Open WhatsApp with prefilled message
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 text-red-900">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-2 text-black">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-black">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 text-white font-semibold py-3 rounded-lg hover:bg-red-800 transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
