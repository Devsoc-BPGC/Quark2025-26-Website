import React from "react";
import { useMediaQuery } from "./useMediaQuery";


export const sponsors = [
    { name: "NetApp", slab: "Powered by Partner", link: "https://www.netapp.com/", image: "/spons/netapp.png" },
    { name: "Analog Devices", slab: "Co-Powered By Partner", link: "https://www.analog.com/en/index.html", image: "/spons/analogdevices.png" },
    { name: "Krafton", slab: "Official Gaming Partner of BGMI", link: "https://esports.battlegroundsmobileindia.com/", image: "/spons/krafton.png" },
    { name: "Bisleri", slab: "Hydration Partner", link: "https://www.bisleri.com/", image: "/spons/bisleri.png" },
    { name: "Bisleri Limonata", slab: "Refreshment Partner", link: "https://www.bisleri.com/", image: "/spons/bislerilimonata.png" },
    { name: "Bisleri Bottles for Change", slab: "Sustainability Partner", link: "https://www.bisleri.com/", image: "/spons/bisleribottlesforchange.png" },
    { name: "RedBull", slab: "Official Energy Drink Partner", link: "https://www.redbull.com/in-en", image: "/spons/redbull.png" },
    { name: "Nongshim", slab: "Official Ramyun Partner", link: "https://www.ramavisionltd.com/nongshim/", image: "/spons/nongshim.png" },
    { name: "BenQ", slab: "Display Partner of Quark Hackathon", link: "https://www.benq.com/en-in/index.html", image: "/spons/benq.png" },
    { name: "IMS", slab: "Exam Prep Partner", link: "https://www.imsindia.com/", image: "/spons/ims.png" },
    { name: "Supertecher", slab: "Fest Partner", link: "https://www.superteacher.in/", image: "/spons/superteacher.png" },
    { name: "Seed", slab: "Global Education Partner", link: "https://seedglobaleducation.com/", image: "/spons/seed.png" },
    { name: "Posterwa", slab: "Stall Partner", link: "https://posterwa.com/", image: "/spons/posterwa.png" },
    { name: "Tagz", slab: "Snacking Partner", link: "https://tagzfoods.com/", image: "/spons/tagz.png" },
    { name: "OneIndia", slab: "Digital Media Partner", link: "https://www.oneindia.com/", image: "/spons/oneindia.png" },
    { name: "Spark Studios", slab: "Tech Partner", link: "https://www.sparkoriginals.com/", image: "/spons/sparkoriginals.png" },
    { name: "HoverRobotix", slab: "Powered by Partner of Roboficial", link: "https://hoverrobotix.com/", image: "/spons/hoverrobotix.png" },
    { name: "Jolochip", slab: "Heat Snacking Partner", link: "https://jolochip.com/", image: "/spons/jolochip.png" },
    { name: "TecSox", slab: "Associate Accessories Partner", link: "https://tecsox.com/", image: "/spons/tecsox.png" },
    { name: "RedBus", slab: "Official Bus Travel Partner", link: "https://www.redbus.in/", image: "/spons/redbus.png" },
    { name: "Cheeros", slab: "Associate Munching Partner", link: "https://cheerosindia.com/", image: "/spons/cheeros.png" },
    { name: "BRB", slab: "Popped Snacking Partner", link: "https://www.brbchips.com/", image: "/spons/brbchips.png" },
    { name: "Nature Day", slab: "Beverage Partner", link: "https://team24.in/", image: "/spons/koku.png" },
    { name: "Eldersons", slab: "Beverage Partner", link: "https://eldersonsbrews.com/", image: "/spons/eldersons.png" },
    { name: "OnTV", slab: "Transit Media Partner", link: "https://ontv.co.in/", image: "/spons/ontv.png" },
    { name: "IRVPL", slab: "Official Radio Partner", link: "https://indigomusic.com/", image: "/spons/indigomusic.png" },
    { name: "RDX Goa", slab: "Associate Media Partner", link: "https://rdxgoa.com/", image: "/spons/rdxgoa.png" },
    { name: "Youth Inc", slab: "Youth Media Partner", link: "https://youthincmag.com/", image: "/spons/youthinc.png" },
    { name: "Zex PR Wire", slab: "Official PR Partner", link: "https://zexprwire.com/", image: "/spons/zexprwire.png" },
    { name: "Campus Karma", slab: "Associate Media Partner", link: "https://www.campuskarma.in/", image: "/spons/campuskarma.png" },
    { name: "Sanctify", slab: "Media Partner", link: "https://www.sanctify.in/", image: "/spons/sanctify.png" },
    { name: "Economic Diplomacy", slab: "Festival Media Partner", link: "https://www.economicdiplomacy.in/", image: "/spons/economicdiplomacy.png" },
    { name: "Silicon India", slab: "Digital Media Partner", link: "https://www.siliconindia.com/", image: "/spons/siliconindia.png" },
    { name: "startupnews.fyi", slab: "Media Partner", link: "https://startupnews.fyi/", image: "/spons/startupnews.png" },
    { name: "Women's Era", slab: "Digital Media Partner", link: "https://www.womansera.com/", image: "/spons/womansera.png" },
    { name: "Campus Times Pune", slab: "Associate Media Partner", link: "https://www.campustimespune.com/", image: "/spons/campustimespune.png" },
    { name: "InterviewBuddy", slab: "Interview Partner of QSTP", link: "https://interviewbuddy.net/", image: "/spons/interviewbuddy.png" },
    { name: "Altered Security", slab: "CRTP Certificate Partner", link: "https://www.alteredsecurity.com/", image: "/spons/alteredsecurity.png" },
    { name: "Rabbit Invest", slab: "Campus Ambassador Partner", link: "https://rabbitinvest.com/", image: "/spons/rabbitinvest.png" },
    { name: "Secure with Techies", slab: "Campus Ambassador Partner", link: "https://www.securewithtechies.com/", image: "/spons/securewithtechies.png" },
    { name: "Annex Mice", slab: "Official Travel Partner", link: "https://www.annexmiceindia.com/", image: "/spons/annexmice.png" },
    { name: "Book My Mentor", slab: "Associate Educational Partner of QSTP", link: "https://bookmymentor.com/", image: "/spons/bookmymentor.png" },
    { name: "Koed", slab: "Official Skill Development Partner of QSTP", link: "https://www.koed.in/", image: "/spons/koed.png" },
];

const Sponsor = ({ content, title, slab, link, isVisible = true }) => {
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
      <div className="w-full mt-2 px-2 flex flex-col justify-center items-center min-h-[4rem]">
        <p className={`text-white text-xs md:text-base orbitron-bold break-words text-center leading-tight select-none`}>
          {title}
        </p>
        {slab && (
          <p className={`text-gray-300 text-[10px] md:text-xs orbitron-regular break-words text-center leading-tight select-none mt-1 overflow-hidden line-clamp-2`}>
            {slab}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sponsor;