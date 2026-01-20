import Image from "next/image";
import Card from "../components/Card";

export default function Gallery() {
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

            <div>
                <Card />
            </div>

        </div>
    )
}