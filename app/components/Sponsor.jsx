import React from "react";
import { useMediaQuery } from "./useMediaQuery";


export const sponsors = [
    "CrowdPad",
    "SunCrypto",
    "Edvoy",
    "Giggr",
    "HavenSpire",
    "HoverRobotix",
    "IDP",
    "Languify",
  
];

export const sponsorLinks = [
  
];

const Sponsor = ({ content, title, link, isVisible = true }) => {
  const isLargeScreen = useMediaQuery("(min-width: calc(120vh))");
  const isTouchingRef = React.useRef(false);
  const startPosRef = React.useRef({ x: 0, y: 0 });
  const hasMoved = React.useRef(false);

  const openLink = () => {
    if (link && !hasMoved.current && isVisible) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const handleMouseDown = (e) => {
    if (!link || !isVisible) return;
    isTouchingRef.current = true;
    hasMoved.current = false;
    startPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isTouchingRef.current) return;
    const deltaX = Math.abs(e.clientX - startPosRef.current.x);
    const deltaY = Math.abs(e.clientY - startPosRef.current.y);
    if (deltaX > 3 || deltaY > 3) {
      hasMoved.current = true;
    }
  };

  const handleMouseUp = (e) => {
    if (!link || !isVisible) return;
    e.preventDefault();
    e.stopPropagation();
    if (isTouchingRef.current && !hasMoved.current) {
      openLink();
    }
    isTouchingRef.current = false;
    hasMoved.current = false;
  };

  const handleTouchStart = (e) => {
    if (!link || !isVisible) return;
    e.stopPropagation();
    isTouchingRef.current = true;
    hasMoved.current = false;
    const touch = e.touches[0];
    startPosRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    if (!isTouchingRef.current) return;
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - startPosRef.current.x);
    const deltaY = Math.abs(touch.clientY - startPosRef.current.y);
    if (deltaX > 3 || deltaY > 3) {
      hasMoved.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (!link || !isVisible) return;
    e.preventDefault();
    e.stopPropagation();
    if (isTouchingRef.current && !hasMoved.current) {
      openLink();
    }
    isTouchingRef.current = false;
    hasMoved.current = false;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={`sponsor bg-[#d9d9d909] w-full aspect-[1/1.3] flex justify-center items-center relative ${
          isLargeScreen
            ? `xl:h-[55vh] lg:h-[40vh]`
            : `2xl:h-[40vh] xl:h-[35vh] lg:h-[32vh] md:h-[30vh] sm:h-[28vh] h-[200px]`
        } rounded-md shadow-lg ${link && isVisible ? 'cursor-pointer' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
      >
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {content}
        </div>
      </div>
      <div className="w-full mt-2 px-2 flex justify-center items-center min-h-[3rem]">
        <p className={`text-white text-sm md:text-lg orbitron-regular break-words text-center leading-tight select-none`}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Sponsor;