"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Orbitron, Jersey_15 } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

const jersey15 = Jersey_15({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function EventModal({ panel, onClose }) {
  if (!panel) return null;

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[90%] md:max-w-[85%] h-[90vh] flex flex-col p-8 md:p-12 pb-[40px] rounded-[5px] backdrop-blur-sm overflow-hidden animate-scaleIn"
        style={{
          backgroundColor: "rgba(28, 19, 56, 0.95)",
          border: "1px solid #5B10B2",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white hover:scale-130 transition-all p-2  rounded-full text-3xl font-bold leading-none cursor-pointer duration-300"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* LEFT CONTENT COLUMN */}
        <div className="flex flex-col items-start justify-start h-full w-full md:w-1/2 z-20">
          
          {/* TITLE */}
          <h1 className={`${jersey15.className} pl-4 md:pl-20 text-5xl md:text-[5vw] leading-none text-gray-200 tracking-wide uppercase mb-6 shrink-0 animate-slideInLeft`}>
            {panel.name}
          </h1>

          {/* EVENTS LIST CONTAINER */}
          <div
            className="w-full md:w-[500px] max-h-[480px] rounded-[5px] relative flex-none mt-auto overflow-y-auto animate-slideInLeft"
            style={{
              backgroundColor: "rgba(29, 23, 57, 0.8)",
              border: "2px solid #5300B2",
              boxSizing: "border-box",
              animationDelay: "0.1s",
            }}
          >
            {/* INNER LIST */}
            <div className="w-full h-full p-6 md:p-8 flex flex-col gap-4 justify-center items-start">
              {panel.events.map((event, index) => (
                <div
                  key={index}
                  className={`${orbitron.className} w-fit min-w-[140px] text-center text-white text-lg md:text-2xl border border-[#5300B2]/50 py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#5300B2] hover:scale-105 tracking-wider shadow-md animate-slideInLeft`}
                  style={{ 
                    backgroundColor: "#0D0303",
                    animationDelay: `${0.2 + index * 0.05}s`
                  }}
                >
                  {event.name}
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* ROBOT IMAGE LAYER */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[90%] h-[115%] pointer-events-none z-10 flex items-end justify-end animate-slideInRight">
          <div className="relative w-full h-full">
            <Image
              src={panel.robotImageUrl || "/events-robot.png"}
              alt={`${panel.name} Robot`}
              fill
              className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
