"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import panelsData from '@/data/panels.json';
import { Orbitron,Pixelify_Sans } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'], weight: '700' });
const pixelify = Pixelify_Sans({ subsets: ['latin'], weight: '400' });

const EventsPage = () => {
  const panels = panelsData.panels;
  
  // Create layout pattern: 3, 2, 3, 2
  const getCardLayout = (index) => {
    const pattern = index % 5;
    if (pattern === 0 || pattern === 1 || pattern === 2) return 'lg:col-span-4'; // 3 cards
    return 'lg:col-span-6'; // 2 cards
  };

  return (
    <div className="min-h-screen w-full" style={{backgroundImage: "url('/bg.png')" , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className={`text-5xl md:text-7xl font-bold text-white mb-12 md:mb-16 tracking-tight ${orbitron.className}`}>
          Events
        </h1>

        {/* Panels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {panels.map((panel, index) => (
            <Link
              href={`/events/${panel.id}`}
              key={panel.id}
              className={`${getCardLayout(index)} group`}
            >
              <div className="relative overflow-hidden rounded-xl transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="relative w-full h-[260px] overflow-hidden ">
                  <div className="absolute inset-0 z-10" />
                  <Image
                    src={panel.imageUrl}
                    alt={panel.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 "
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Panel Name */}
                <div className="p-6">
                  <h3 className={`text-2xl md:text-3xl text-white text-center transition-colors duration-300 tracking-wider ${pixelify.className}`}>
                    {panel.name}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
