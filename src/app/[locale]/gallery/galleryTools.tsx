import { useEffect } from "react";

import { StaticImageData } from "next/image";
import image0 from "@/public/gallery/sg-0.png";
import image1 from "@/public/gallery/sg-1.png";
import image2 from "@/public/gallery/sg-2.png";
import image3 from "@/public/gallery/sg-3.png";
import image4 from "@/public/gallery/sg-4.png";
import image5 from "@/public/gallery/sg-5.png";
import image6 from "@/public/gallery/sg-6.png";
import image7 from "@/public/gallery/sg-7.png";
import image8 from "@/public/gallery/sg-8.png";
import image9 from "@/public/gallery/sg-9.png";
import { GalleryImage } from "@/src/app/[locale]/gallery/page";

export const galleryImages: StaticImageData [] = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
];

export function enlargedImageKeyHandler(
    openEnlargedImage: (image: GalleryImage) => void,
    closeEnlargedImage: () => void,
    enlargedImage: { index: number } | null,
    nextImageIndex: number,
    prevImageIndex: number) {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                closeEnlargedImage();
            } else if (e.code === 'ArrowRight') {
                openEnlargedImage({ image: galleryImages[nextImageIndex], index: nextImageIndex });
            } else if (e.code === 'ArrowLeft') {
                openEnlargedImage({ image: galleryImages[prevImageIndex], index: prevImageIndex });
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