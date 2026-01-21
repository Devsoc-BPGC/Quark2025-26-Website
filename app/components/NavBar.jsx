"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Orbitron } from "next/font/google";
import { Menu, X } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: "700" });

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navBtn = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "EVENTS", path: "/events" },
    { label: "SPONSORS", path: "/sponsors" },
    { label: "GALLERY", path: "/gallery" },
    { label: "OUR TEAM", path: "/team" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-3 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-blue-500/20">
        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex gap-7 text-white/80 text-sm ${orbitron.className}`}
        >
          {navBtn.map((item) => (
            <Link key={item.label} href={item.path}>
              <li className="relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-110
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400
                after:transition-all after:duration-300 hover:after:w-full
                hover:[filter:drop-shadow(0_0_6px_rgba(56,189,248,0.9))]">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* Register Button */}
        <a
          href="https://register.bitsquark.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:block text-white text-3xl ${orbitron.className}
          transition-all duration-300 hover:scale-110
          hover:[filter:drop-shadow(0_0_10px_rgba(56,189,248,1))]`}
        >
          REGISTER
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cyan-400 hover:text-white transition"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40
        flex flex-col items-center justify-center gap-8
        transition-all duration-500
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        {navBtn.map((item) => (
          <Link key={item.label} href={item.path} onClick={() => setOpen(false)}>
            <span
              className={`text-white text-2xl ${orbitron.className}
              transition-all duration-300 hover:text-cyan-400 hover:scale-110
              hover:[filter:drop-shadow(0_0_10px_rgba(56,189,248,1))]`}
            >
              {item.label}
            </span>
          </Link>
        ))}

        <a
          href="https://register.bitsquark.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 text-3xl text-white ${orbitron.className}
          hover:text-cyan-400 transition-all duration-300
          hover:[filter:drop-shadow(0_0_14px_rgba(56,189,248,1))]`}
        >
          REGISTER
        </a>
      </div>
    </>
  );
};

export default NavBar;
