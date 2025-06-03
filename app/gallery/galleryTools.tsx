import { useEffect } from "react";

import { StaticImageData } from "next/image";
import image1 from "../../public/gallery/sg-1.png";
import image2 from "../../public/gallery/sg-2.png";
import image3 from "../../public/gallery/sg-3.png";
import image4 from "../../public/gallery/sg-4.png";
import image5 from "../../public/gallery/sg-5.png";
import image6 from "../../public/gallery/sg-6.png";
import image7 from "../../public/gallery/sg-7.png";
import image8 from "../../public/gallery/sg-8.png";

export const galleryImages: { src: StaticImageData, title: string, desc: string }[] = [
  { src: image1, title: "Me and my daughters", desc: "Sleepover at the grandparents apartment." },
  { src: image2, title: "Youngest daughter", desc: "She just started walking and was very happy about it." },
  { src: image3, title: "Oldest daughter", desc: "Visiting her granparents in China and wasn't impressed by the food." },
  { src: image4, title: "Oldest daughter", desc: "Poesing and ready to celebrate christmas with the rest of the family." },
  { src: image5, title: "Me", desc: "This is the photo I am using as a profile picture." },
  { src: image6, title: "Both children", desc: "Oldest and youngest daughter's hugging." },
  { src: image7, title: "My wife and youngest daughter", desc: "Happiness captured." },
  { src: image8, title: "Me and my wife's wedding", desc: "Had our wedding in Shanghai with a view over the bond." },
];

export function enlargedImageKeyHandler(
    enlargedImage: {index: number} | null, 
    closeEnlargedImage: () => void,
    openEnlargedImage: (image: { src: StaticImageData, desc: string, index: number }) => void, 
    nextImageIndex: number, 
    prevImageIndex: number) {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                closeEnlargedImage();
            } else if (e.code === 'ArrowRight') {
                openEnlargedImage({ ...galleryImages[nextImageIndex], index: nextImageIndex });
            } else if (e.code === 'ArrowLeft') {
                openEnlargedImage({ ...galleryImages[prevImageIndex], index: prevImageIndex });
            }
        };
        if (enlargedImage !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [enlargedImage, openEnlargedImage, closeEnlargedImage]);
};