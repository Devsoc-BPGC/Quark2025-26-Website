"use client";
import React from 'react'
import Link from "next/link";
import { Orbitron} from 'next/font/google';
const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });

const NavBar = () => {

    const navBtn = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "EVENTS", path: "/events" },
    { label: "SPONSORS", path: "/sponsors" },
    { label: "GALLERY", path: "/gallery" },
  ];

  return (
    <nav className=" sticky top-0 left-0 w-full bg-transparent z-50 flex justify-between items-center px-20 py-10">
         <ul className="hidden lg:flex gap-8 text-[0.75rem] font-medium text-white/80">
          {navBtn.map((item) => (
            <Link key={item.label} href={item.path}>
              <div className={`hover:text-white transition-colors text-2xl m-3 duration-300 ${orbitron.className}`}>{item.label}</div>
            </Link>
          ))}
        </ul>
        <Link href="/register" className={`text-white ${orbitron.className} text-3xl px-6 py-2 transition-colors duration-300`}>
            Register
        </Link>
    </nav>
  )
}

export default NavBar