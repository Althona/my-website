import { useEffect } from "react";

import { StaticImageData } from "next/image";
import image1 from "@/public/gallery/sg-1.png";
import image2 from "@/public/gallery/sg-2.png";
import image3 from "@/public/gallery/sg-3.png";
import image4 from "@/public/gallery/sg-4.png";
import image5 from "@/public/gallery/sg-5.png";
import image6 from "@/public/gallery/sg-6.png";
import image7 from "@/public/gallery/sg-7.png";
import image8 from "@/public/gallery/sg-8.png";
import image9 from "@/public/gallery/sg-9.png";
import image10 from "@/public/gallery/sg-10.png";

import { GalleryImage } from "@/src/app/[locale]/gallery/page";

export const galleryImages: { src: StaticImageData, title: string, desc: string }[] = [
    { src: image1, title: "Sleepover at the inlaws", desc: "Me and my daughters had a sleepover at the grandparents apartment in China" },
    { src: image2, title: "First steps", desc: "She just started walking and was very happy about it." },
    { src: image3, title: "Chinese breakfast", desc: "Visiting her granparents in China but she wasn't impressed by the food." },
    { src: image4, title: "Christmas", desc: "Oldest daughter is posing and ready to celebrate christmas with the rest of the family." },
    { src: image5, title: "Studio photo", desc: "Our first family photo" },
    { src: image6, title: "Sibling love", desc: "A moment of tenderness between the sisters." },
    { src: image7, title: "My wife and youngest daughter", desc: "Happiness captured." },
    { src: image8, title: "Wedding", desc: "We had our wedding in Shanghai with a view over the bond." },
    { src: image9, title: "Off to kindergarten", desc: "Excited for the first day of school and kindergarten." },
    { src: image10, title: "Me", desc: "This is the photo I am using as a profile picture." }
];

export function enlargedImageKeyHandler(
    enlargedImage: { index: number } | null,
    closeEnlargedImage: () => void,
    openEnlargedImage: (image: GalleryImage) => void,
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