import Image from "next/image";

export default function Card({ image }) {
    return (
        <div className="relative w-[150px] h-[200px]">
            <Image
                src={image}
                fill
                alt="gallery"
                className="object-cover rounded-xl"
                draggable={false}
            />
        </div>
    );
}
