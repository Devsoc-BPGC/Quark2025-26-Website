"use client";
import Image from "next/image";
import Sponsor, { sponsors, sponsorLinks } from "../components/Sponsor";
import ScrollBar from "../components/ScrollBar";
import {
  handleWheel,
  getScale,
  getTranslate,
  setScale,
  setOpacity,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  darkToLight,
} from "../components/Functions";
import { useState, useEffect } from "react";
import { useMediaQuery } from "../components/useMediaQuery";

export default function Sponsors() {
  const sponsorLogos = Array.from({ length: 8 });
  const isLargeScreen = useMediaQuery("(min-width: calc(120vh))");
  const [thumbTop, setThumbTop] = useState(10);

  const list = [
    { range: [10, 35], translate: [35, 60] },
    { range: [35, 60], translate: [60, 85] },
    { range: [60, 85], translate: [85, 110] },
    // { range: [85, 110], translate: [110, 135] },
    // { range: [110, 135], translate: [135, 160] },
    // { range: [135, 160], translate: [160, 185] },
    // { range: [160, 185], translate: [185, 210] },
    // { range: [185, 210], translate: [210, 235] },
    // { range: [210, 235], translate: [235, 260] },
    // { range: [235, 260], translate: [260, 285] },
    // { range: [260, 285], translate: [285, 310] },
    // { range: [285, 310], translate: [310, 335] },
    // { range: [310, 335], translate: [335, 360] },
    // { range: [335, 360], translate: [360, 385] },
    // { range: [360, 385] },
  ];

  // ✅ Compute real scroll end from animation data
  const maxThumbTop = Math.max(
    ...list.map((item) =>
      item.translate ? item.translate[1] : item.range[1]
    )
  );

  // ✅ Clamp thumbTop AFTER wheel/touch updates it
  useEffect(() => {
    if (thumbTop > maxThumbTop) setThumbTop(maxThumbTop);
    if (thumbTop < 10) setThumbTop(10);
  }, [thumbTop, maxThumbTop]);

  useEffect(() => {
    document.querySelector(".scroll").style.opacity =
      thumbTop === maxThumbTop ? 0 : 0.23;

    const main = document.querySelector(".main");
    if (!main) return;

    const touchMoveHandler = (e) =>
      handleTouchMove(e, setThumbTop, thumbTop);

    main.addEventListener("touchmove", touchMoveHandler, {
      passive: false,
    });

    return () => {
      main.removeEventListener("touchmove", touchMoveHandler);
    };
  }, [thumbTop, maxThumbTop]);

  return (
    <div
      className="main relative w-screen h-full overflow-hidden"
      onWheel={(e) => handleWheel(e, setThumbTop)}
      onTouchStart={handleTouchStart}
      onTouchEnd={() => handleTouchEnd(setThumbTop)}
    >
      <div className="scroll h-screen absolute top-0 right-0 z-30 transition-opacity duration-200 ease-linear">
        <ScrollBar setThumbTop={setThumbTop} thumbTop={thumbTop} />
      </div>

      <Image
        src="/DDD1.jpg"
        fill
        alt="Background"
        className="object-cover"
        priority
        draggable={false}
      />

      <div className="flex justify-center items-center flex-col h-screen list">
        <div
          className="title relative z-10 font-bold orbitron-bold md:w-[70vw] w-[80vw] flex flex-wrap text-center md:top-[10vh] text-white 2xl:text-[5vw] lg:text-[70px] text-[45px] sm:text-[55px] drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          style={{
            transform: `scale(${getScale(
              thumbTop,
              10,
              50
            )}) translateY(${getTranslate(thumbTop, 10, 50)})`,
            opacity: darkToLight(thumbTop, 10, 35) / 100,
          }}
        >
          OUR SPONSORS & MEDIA PARTNERS
        </div>

        {list.map((style, i) => {
          const perPage = isLargeScreen ? 3 : 4;
          const blockSponsors = sponsorLogos.slice(
            i * perPage,
            (i + 1) * perPage
          );
          const currentOpacity = setOpacity(
            thumbTop,
            style.range[0],
            style.range[1]
          );
          const isBlockVisible = currentOpacity > 0.5;

          return (
            <div
              key={i}
              className="absolute z-10 origin-top bg-transparent backdrop-blur-lg"
              style={{
                transform: `scale(${setScale(
                  thumbTop,
                  style.range[0] + 10,
                  style.range[1]
                )}) ${
                  style.translate
                    ? `translateY(${getTranslate(
                        thumbTop,
                        style.translate[0],
                        style.translate[1]
                      )}) scale(${getScale(
                        thumbTop,
                        style.translate[0],
                        style.translate[1]
                      )})`
                    : ""
                }`,
                opacity: currentOpacity,
                pointerEvents: isBlockVisible ? "auto" : "none",
              }}
            >
              {isLargeScreen ? (
                <div className="flex justify-center items-center gap-[2vw]">
                  {blockSponsors.map((_, idx) => {
                    const sponsorIndex = i * perPage + idx + 1;
                    return (
                      <Sponsor
                        key={`${i}-${idx}`}
                        content={
                          <Image
                            src={`/spons/${sponsorIndex}.png`}
                            alt="Sponser"
                            fill
                            className="object-contain"
                          />
                        }
                        title={sponsors[sponsorIndex - 1]}
                        link={sponsorLinks[sponsorIndex - 1]}
                        isVisible={isBlockVisible}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-[2vw]">
                  {blockSponsors.map((_, idx) => {
                    const sponsorIndex = i * perPage + idx + 1;
                    return (
                      <Sponsor
                        key={`${i}-${idx}`}
                        content={
                          <Image
                            src={`/spons/${sponsorIndex}.png`}
                            alt="Sponser"
                            fill
                            className="object-contain"
                          />
                        }
                        title={sponsors[sponsorIndex - 1]}
                        link={sponsorLinks[sponsorIndex - 1]}
                        isVisible={isBlockVisible}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
