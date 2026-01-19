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

export default function EventsPage() {
  const events = [
    "Robowars",
    "Roboclench",
    "Robosoccer",
    "Robosumo",
    "Robo race",
    "LFR",
  ];

  return (
    <main
      className="w-screen h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        background: "radial-gradient(circle at center, #1a0b2e 0%, #000000 100%)",
      }}
    >
      {/* =========================================================
         MAIN CARD
         - pb-[40px]: Maintains the 40px gap at the bottom.
      ========================================================= */}
      <div
        className="relative w-[90%] md:w-[85%] h-[90vh] flex flex-col p-8 md:p-12 pb-[40px] rounded-[5px] backdrop-blur-sm overflow-hidden"
        style={{
          backgroundColor: "rgba(28, 19, 56, 0.8)",
          border: "1px solid #5B10B2",
        }}
      >
        {/* LEFT CONTENT COLUMN */}
        <div className="flex flex-col items-start justify-start h-full w-full md:w-1/2 z-20">
          
          {/* TITLE */}
          <h1 className={`${jersey15.className} pl-20 text-6xl md:text-[5vw] leading-none text-gray-200 tracking-wide uppercase mb-6 shrink-0`}>
            Roboficial
          </h1>

          {/* =========================================================
             FRAME 4 (Events List Container)
             - w-[500px] / h-[480px]: Kept the "Almost Square" size.
          ========================================================= */}
          <div
            className="w-full md:w-[500px] h-[480px] rounded-[5px] relative flex-none mt-auto"
            style={{
              backgroundColor: "rgba(29, 23, 57, 0.8)",
              border: "2px solid #5300B2",
              boxSizing: "border-box",
            }}
          >
            {/* INNER LIST
                - gap-4: Adjusted spacing slightly for bigger text.
            */}
            <div className="w-full h-full p-8 flex flex-col gap-4 justify-center items-start">
              {events.map((item, index) => (
                <div
                  key={index}
                  // UPDATED STYLES HERE:
                  // text-2xl: Much bigger text.
                  // py-2 px-4: Reduced padding to compensate (so buttons don't get huge).
                  className={`${orbitron.className} w-fit min-w-[140px] text-center text-white text-xl md:text-2xl border border-[#5300B2]/50 py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#5300B2] hover:scale-105 tracking-wider shadow-md`}
                  style={{ backgroundColor: "#0D0303" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* =========================================================
           ROBOT IMAGE LAYER (MASSIVE)
           - w-[90%] / h-[115%]
        ========================================================= */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[90%] h-[115%] pointer-events-none z-10 flex items-end justify-end">
          <div className="relative w-full h-full">
            <Image
              src="/events-robot.png"
              alt="Mech Robot"
              fill
              className="object-contain object-bottom md:object-right-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}