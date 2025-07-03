"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import nextImage from "@/public/icons/next-image.png";

import Modal from "@/src/app/components/modal/modal";
import classes from "@/src/app/[locale]/gallery/page.module.css";
import {enlargedImageKeyHandler, galleryImages} from "@/src/app/[locale]/gallery/galleryTools";

export type GalleryImage = {
  src: StaticImageData;
  title: string;
  desc: string;
  index: number;
};

export default function Gallery() {
  const params = useSearchParams();
  const router = useRouter();

  const [enlargedImage, setEnlargedImage] = useState<GalleryImage | null>(null);

  const nextImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index + 1) % galleryImages.length
    : 0;
  const prevImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index - 1 + galleryImages.length) % galleryImages.length
    : 0;

  function openEnlargedImage(image: GalleryImage) {
    setEnlargedImage(image);
    console.log(router);
    router.push(`?galleryPic=${image.index}`, { scroll: false });
  }

  function closeEnlargedImage() {
    setEnlargedImage(null);
    router.push('/gallery', { scroll: false });
  }

  enlargedImageKeyHandler(enlargedImage, closeEnlargedImage, openEnlargedImage, nextImageIndex, prevImageIndex);

  useEffect(() => {
    const galleryPic = params.get('galleryPic');
    if (galleryPic !== null) {
      const index = parseInt(galleryPic, 10);
      if (!isNaN(index) && index >= 0 && index < galleryImages.length) {
        openEnlargedImage({ ...galleryImages[index], index });
      }
    }
  }, [params, galleryImages]);

  return (
    <div className={classes.galleryWrapper}>
      <p className={classes.galleryText}>All the images are real pictures reimagined with the help of ChatGPT.
        It is a way for me to show my family without exposing my children to the internet, since I take their privacy very seriously.</p>
      {
        galleryImages.map((image, index) => (
          <div key={index} className={classes.galleryItem} onClick={() => openEnlargedImage({ src: image.src, title: image.title, desc: image.desc, index })}>
            <Image src={image.src} alt={image.title} />
            <div className={classes.galleryItemContent}>
              <h3>{image.title}</h3>
              <p>{image.desc}</p>
            </div>
          </div>
        ))
      }
      {enlargedImage &&
        <Modal close={closeEnlargedImage}>
          <button
            className={`${classes.switchImageButton} ${classes.previousButton}`}
            onClick={() => openEnlargedImage({ ...galleryImages[prevImageIndex], index: prevImageIndex })}
          >
            <Image
              className={classes.previousButtonIcon}
              src={nextImage}
              alt="Previous"
            />
          </button>
          <Image
            className={classes.enlargedImage}
            src={enlargedImage.src}
            alt={enlargedImage.desc}
          />
          <div className={classes.enlargedImageText}>
            <h3>{enlargedImage.title}</h3>
            <p>{enlargedImage.desc}</p>
          </div>

          <button
            className={`${classes.switchImageButton} ${classes.nextButton}`}
            onClick={() => openEnlargedImage({ ...galleryImages[nextImageIndex], index: nextImageIndex })}
          >
            <Image
              className={classes.nextButtonIcon}
              src={nextImage}
              alt="Next"
            />
          </button>
        </Modal>
      }
    </div>
  );
}