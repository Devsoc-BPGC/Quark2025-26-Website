"use client"
import Image from "next/image";
import Card from "../components/Card";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
    const [rotation, setRotation] = useState(0);
    const scrollRef = useRef(null);

    // 👉 Edit this when adding images
    const images = [
        "/gallery/img1.jpeg",
        "/gallery/img2.jpeg",
        "/gallery/img3.jpeg",
        "/gallery/img4.jpeg",
        "/gallery/img5.jpeg",
        "/gallery/img6.jpeg",
        "/gallery/img7.jpeg",
        "/gallery/img8.jpeg",
        "/gallery/img9.jpeg",
        "/gallery/img10.jpeg",
        "/gallery/img11.jpeg",
        "/gallery/img14.jpeg",
        "/gallery/img15.jpeg",
        "/gallery/img16.jpeg",
        "/gallery/img17.jpeg",
        "/gallery/img18.jpeg",
        "/gallery/img19.jpeg",
        "/gallery/img20.jpeg",
    ];

    // Desktop rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 0.15);
        }, 16);

        return () => clearInterval(interval);
    }, []);

    // Mobile auto scroll
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrame;
        let speed = 0.4;
        let isDown = false;

        const start = () => isDown = true;
        const end = () => isDown = false;

        el.addEventListener("touchstart", start);
        el.addEventListener("touchend", end);

        const autoScroll = () => {
            if (!isDown) {
                if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += speed;
                }
            }
            animationFrame = requestAnimationFrame(autoScroll);
        };

        animationFrame = requestAnimationFrame(autoScroll);

        return () => {
            cancelAnimationFrame(animationFrame);
            el.removeEventListener("touchstart", start);
            el.removeEventListener("touchend", end);
        };
    }, []);

    return (
        <div className="h-screen w-screen overflow-hidden">

            {/* ---------------- DESKTOP (3D CAROUSEL) ---------------- */}
            <div className="hidden lg:block h-screen">

                <div className="h-screen flex flex-col justify-end">
                    <Image
                        src={'/Gallery.svg'}
                        fill
                        alt="bg.svg"
                        className="object-cover"
                        draggable={false}
                    />
                    <div className="h-[85%] relative">
                        <Image
                            src={'/image 27.svg'}
                            fill
                            alt="character.svg"
                            draggable={false}
                        />
                    </div>
                </div>

                <div className="font-(family-name:--font-orbitron) text-white font-extrabold text-8xl absolute bottom-0 py-4 px-8 overflow-hidden">
                    GALLERY
                </div>

                <div className="absolute bottom-0 w-screen h-screen
                    perspective-[1000px] transform-3d flex justify-center items-center
                    transform -rotate-x-14 -translate-y-1/4"
                >
                    <div
                        className="relative w-0 h-0"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${rotation}deg)`
                        }}
                    >
                        {images.map((img, i) => (
                            <span
                                key={i}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `rotateY(${i * (360 / images.length)}deg) rotateX(-5deg) translateZ(460px)`
                                }}
                            >
                                <Card image={img} />
                            </span>
                        ))}
                    </div>
                </div>
            </div>


            {/* ---------------- MOBILE / TABLET ---------------- */}
            <div className="lg:hidden h-screen w-screen relative bg-black">

                <Image
                    src={'/Gallery.svg'}
                    fill
                    alt="bg.svg"
                    className="object-cover opacity-40"
                    draggable={false}
                />

                <div className="relative z-10 flex flex-col h-full">

                    <div className="text-white font-extrabold text-5xl px-6 pt-8 font-(family-name:--font-orbitron)">
                        GALLERY
                    </div>

                    {/* Auto scrolling gallery */}
                    <div
                        ref={scrollRef}
                        className="flex-1 mt-8 overflow-x-auto overflow-y-hidden scroll-smooth"
                    >
                        <div className="flex snap-x snap-mandatory">
                            {[...images, ...images].map((img, i) => (
                                <div
                                    key={i}
                                    className="ml-[4%] snap-center shrink-0"

                                >
                                    <Card image={img} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[45%] mt-6">
                        <Image
                            src={'/image 27.svg'}
                            fill
                            alt="character.svg"
                            draggable={false}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}
