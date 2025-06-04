"use client";
import Image, { StaticImageData } from "next/image";
import nextImage from "../../public/icons/next-image.png";

import Modal from "../components/modal/modal";
import classes from "./page.module.css";
import { enlargedImageKeyHandler, galleryImages } from "./galleryTools";
import { useState } from "react";

export default function Gallery() {

  const [enlargedImage, setEnlargedImage] = useState<{
    src: StaticImageData,
    title: string,
    desc: string,
    index: number
  } | null>(null);

  const nextImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index + 1) % galleryImages.length
    : 0;
  const prevImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index - 1 + galleryImages.length) % galleryImages.length
    : 0;

  function openEnlargedImage(image: { src: StaticImageData, title: string, desc: string, index: number }) {
    setEnlargedImage(image);
  }

  function closeEnlargedImage() {
    setEnlargedImage(null);
  }

  enlargedImageKeyHandler(enlargedImage, closeEnlargedImage, openEnlargedImage, nextImageIndex, prevImageIndex);


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