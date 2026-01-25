"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  const info = [
    {
      name: "Prakhar Singh Sengar",
      role: "Quark Convener",
      contact: "+91 6264296725",
      src: "/team/prakhar1.jpg",
    },
    {
      name: "Arnav Mathur",
      role: "Chief Coordinator QuarkC",
      contact: "+91 8073921173",
      src: "/team/arnav1.jpg",
    },
    {
      name: "Jehan Daftari",
      role: "Events Head QuarkC",
      contact: "+91 8767844449 ",
      src: "/team/jehan1.jpg",
    },
    {
      name: "Aarav Jain",
      role: "Chief Coordinator Depp",
      contact: "+91 8218368422",
      src: "/team/aarav1.jpg",
    },
    {
      name:  "Priyanshu Talwar",
      role: "Sub Coordinator DevSoc",
      contact: "+91 9310616595",
      src: "/team/priyanshu.jpg",
    },
    {
      name: "Sai Sridhar",
      role: "WebD Head DevSoc",
      contact: "+91 9741437140",
      src: "/team/sridhar.png",
    },
    {
      name: "Siya Goel",
      role: "UiUx Head DevSoc",
      contact: "+91 9902229040",
      src: "/team/siya.jpg",
    },
    {
      name: "Balram Bhala",
      role: "Marketing and Media Head DOSM",
      contact: "+91 7366920771",
      src: "/team/balram1.png",
    },
    {
      name: "Arpit Gupta",
      role: "Quark Sponsorship Head DOSM",
      contact: "+91 9971722057",
      src: "/team/arpit1.jpg",
    },
    {
      name: "Kaustubh Phaltankar",
      role: "Quark Finance Head DOFAM",
      contact: "+91 9029514563",
      src: "/team/kaustubh1.jpg",
    },
    // {
    //   name: "Tanya Khathuria",
    //   role: "Quark Coordinator Backstage",
    //   contact: "+91 7850072511",
    //   src: "/team/tanya1.jpg",
    // }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-auto text-white">
      <Image
        src="/DDD3.jpg"  
        alt="bg"
        fill
        priority
        className="object-cover -z-20"
      />


      <div className="pt-28 pb-6 text-center">
        <h1 className="orbitron-bold text-5xl md:text-7xl tracking-widest text-white-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
          OUR TEAM
        </h1>
      </div>

      {/* Grid */}
      <div className="px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {info.map((person, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center backdrop-blur-lg bg-black/40 border border-purple-500/30 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:border-white-400 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <div className="relative w-40 h-40 mb-5">
              <div className="absolute inset-0 rounded-full border-2 border-white-400  opacity-70 group-hover:opacity-100" />

              <Image
                src={person.src}
                alt={person.name}
                fill
                className="rounded-full object-cover p-2"
                sizes="160px"
              />
            </div>

            <h2 className="orbitron-regular text-xl text-white-300 text-center">
              {person.name}
            </h2>

            <p className="text-purple-300 text-sm text-center mt-1">
              {person.role}
            </p>

            <p className="text-white-500 text-sm text-center mt-2 tracking-wider">
              {person.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
