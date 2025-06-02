"use client";
import Image, { StaticImageData } from "next/image";
import image1 from "../../public/gallery/sg-1.png";
import image2 from "../../public/gallery/sg-2.png";
import image3 from "../../public/gallery/sg-3.png";
import image4 from "../../public/gallery/sg-4.png";
import image5 from "../../public/gallery/sg-5.png";
import image6 from "../../public/gallery/sg-6.png";
import image7 from "../../public/gallery/sg-7.png";
import image8 from "../../public/gallery/sg-8.png";

import Modal from "../components/modal/modal";
import classes from "./page.module.css";
import { useState } from "react";

export default function gallery() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [enlargedImage, setEnlargedImage] = useState<{ src: StaticImageData, desc: string } | null>(null);

  function openEnlargedImage(image: { src: StaticImageData, desc: string }) {
    setOpenModal(true);
    setEnlargedImage(image);
  }

  function closeEnlargedImage() {
    setOpenModal(false);
    setEnlargedImage(null);
  }

  return (
    <div className={classes.galleryWrapper}>
      <p className={classes.galleryText}>All the images are real pictures reimagined with the help of ChatGPT.
        It is a way for me to show my family without exposing my children to the internet, since I take their privacy very seriously.</p>
      {
        galleryImages.map((image, index) => (
          <div key={index} className={classes.galleryItem} onClick={() => openEnlargedImage({ src: image.src, desc: image.desc })}>
            <Image src={image.src} alt={image.title} />
            <div className={classes.galleryItemTitle}>
              <h3>{image.title}</h3>
              <p>{image.desc}</p>
            </div>
          </div>
        ))
      }
      {enlargedImage &&
        <Modal close={closeEnlargedImage}>
          <Image
            className={classes.enlargedImage}
            src={enlargedImage.src}
            alt={enlargedImage.desc}
          />
        </Modal>
      }
    </div>
  );
}

const galleryImages: { src: StaticImageData, title: string, desc: string }[] = [
  { src: image1, title: "Me and my daughters", desc: "Sleepover at the grandparents apartment." },
  { src: image2, title: "Youngest daughter", desc: "She just started walking and was very happy about it." },
  { src: image3, title: "Oldest daughter", desc: "Visiting her granparents in China and wasn't impressed by the food." },
  { src: image4, title: "Oldest daughter", desc: "Poesing and ready to celebrate christmas with the rest of the family." },
  { src: image5, title: "Me", desc: "This is the photo I am using as a profile picture." },
  { src: image6, title: "Both children", desc: "Oldest and youngest daughter's hugging." },
  { src: image7, title: "My wife and youngest daughter", desc: "Happiness captured." },
  { src: image8, title: "Me and my wife's wedding", desc: "Had our wedding in Shanghai with a view over the bond." },
];