"use client"
import Image from "next/image";
import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function Gallery() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => prev + 0.15);
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen">
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
                        src={'image 27.svg'}
                        fill
                        alt="character.svg"
                        draggable={false}
                    />
                </div>
            </div>

            <div className="font-(family-name:--font-orbitron) font-extrabold text-8xl absolute bottom-0 p-3">
                GALLERY
            </div>

            <div className="absolute bottom-0 w-screen h-screen
                perspective-[1000px] transform-3d flex justify-center items-center transform -rotate-x-23
                pb-85
            ">
                <div 
                    className="relative w-0 h-0"
                    style={{ 
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotation}deg)`
                    }}
                >
                    {[0,1,2,3,4,5,6,7,8].map(i => (
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            key={i}
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: `rotateY(${i * 40}deg) rotateX(-5deg) translateZ(450px)`
                            }}
                        >
                            <Card />
                        </span>
                    ))}
                </div>
            </div>
        </div>

    )
}