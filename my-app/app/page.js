import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <Image
          src="/home/desktop2.png"
          alt="Quark 2026 - Quantum Insurgence"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Mobile Background */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <Image
          src="/home/mobile1.png"
          alt="Quark 2026 - Quantum Insurgence"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <a
        href="https://register.bitsquark.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute z-20
          cursor-pointer
          rounded-lg
          transition-all duration-300
          active:scale-95
          rotate-5
          
          /* Mobile positioning */
          bottom-[32%]
          left-[70%]
          -translate-x-1/2
          w-[55%]
          h-[6%]
          
          /* Small screens */
          sm:bottom-[28%]
          sm:left-[66%]
          sm:w-[40%]
          sm:h-[6%]
          
          /* Medium screens (tablets) */
          md:bottom-[18%]
          md:left-[75%]
          md:w-[30%]
          md:h-[7%]
          
          /* Large screens */
          lg:bottom-[20%]
          lg:w-[30%]
          lg:h-[7%]
          
          /* Extra large screens */
          xl:bottom-[8%]
          xl:w-[28%]
          xl:h-[9%]
        "
        aria-label="Register for Quark 2026"
      />
    </div>
  );
}
