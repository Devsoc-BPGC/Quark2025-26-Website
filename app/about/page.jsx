"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className=" h-screen w-full overflow-auto">
      <Image
        src="/about.jpg"
        alt="Background"
        fill
        className="object-cover object-right -z-10"
        draggable={false}
      />
      <div className="relative z-1 flex flex-col lg:h-full h-[calc(100vh-6rem)] top-20 lg:top-0">
        <div className="flex flex-col lg:flex-row grow">
          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-10 relative ">
            <div className="w-full  lg:max-w-lg aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-2xl"
                src="https://www.youtube.com/embed/0wWZ4LZeoY8?autoplay=1&mute=1&playsinline=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="p-4 lg:p-10 w-full lg:w-1/2 flex flex-col justify-center">
            {" "}
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 lg:p-8 border border-white/20 text-center">
              <div className="orbitron-bold text-white text-3xl lg:text-5xl font-bold mb-4">
                ABOUT US
              </div>
              <div className="orbitron-regular text-sm lg:text-base">
                Quark, the annual technical festival of BITS Pilani K. K. Birla
                Goa Campus, is one of India&apos;s most vibrant student driven
                tech fests, blending innovation, competition, and creativity
                into a three days celebration of science and engineering.
                Organized entirely by students, Quark brings together
                participants from colleges across the country for a rich lineup
                of coding contests, robotics battles, research presentations,
                workshops, and guest lectures by industry leaders and
                researchers. Beyond the competitions, the festival creates an
                electric atmosphere on campus with exhibitions, tech showcases,
                and collaborative learning spaces where ideas turn into
                prototypes and curiosity turns into discovery. Quark is not just
                a fest.It&apos;s a platform where students experience the thrill
                of building, experimenting, and pushing the boundaries of
                technology together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
