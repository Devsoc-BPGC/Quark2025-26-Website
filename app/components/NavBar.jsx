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
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50 flex justify-between items-center px-10 py-2">
         <ul className="hidden lg:flex gap-7 font-medium text-white/80">
          {navBtn.map((item) => (
            <Link key={item.label} href={item.path}>
              <div className={`hover:text-white hover:scale-110 transition-all text-sm m-2 duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:[filter:drop-shadow(0_4px_6px_rgba(100,180,255,1))_drop-shadow(0_8px_15px_rgba(59,130,246,0.8))_drop-shadow(0_15px_30px_rgba(59,130,246,0.4))] ${orbitron.className}`}>{item.label}</div>
            </Link>
          ))}
        </ul>
        <Link href="/register" className={`text-white ${orbitron.className} text-3xl py-2 transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:[filter:drop-shadow(0_4px_6px_rgba(100,180,255,1))_drop-shadow(0_8px_15px_rgba(59,130,246,0.8))_drop-shadow(0_15px_30px_rgba(59,130,246,0.4))]`}>
            REGISTER
        </Link>
    </nav>
  )
}

export default NavBar