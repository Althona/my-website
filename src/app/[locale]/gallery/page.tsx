"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter, useSearchParams } from 'next/navigation';
import nextImage from "@/public/icons/next-image.png";

import Modal from "@/src/app/[locale]/components/modal/modal";
import classes from "@/src/app/[locale]/gallery/page.module.css";
import { enlargedImageKeyHandler, galleryImages } from "@/src/app/[locale]/gallery/galleryTools";
import { useTranslations } from "next-intl";

export type GalleryImage = {
  image: StaticImageData;
  index: number;
};

export default function Gallery() {
  const params = useSearchParams();
  const router = useRouter();
  const t = useTranslations('gallery');

  const [enlargedImage, setEnlargedImage] = useState<GalleryImage | null>(null);

  const nextImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index + 1) % galleryImages.length
    : 0;
  const prevImageIndex: number = enlargedImage !== null
    ? (enlargedImage.index - 1 + galleryImages.length) % galleryImages.length
    : 0;

  function openEnlargedImage(image: GalleryImage) {
    setEnlargedImage(image);
    router.push(`?galleryPic=${image.index}`, { scroll: false });
  }

  function closeEnlargedImage() {
    setEnlargedImage(null);
    router.push('/gallery', { scroll: false });
  }

  enlargedImageKeyHandler(
    openEnlargedImage,
    closeEnlargedImage,
    enlargedImage,
    nextImageIndex,
    prevImageIndex
  );

  useEffect(() => {
    const galleryPic = params.get('galleryPic');
    if (galleryPic !== null) {
      const index = parseInt(galleryPic, 10);
      if (!isNaN(index) && index >= 0 && index < galleryImages.length) {
        openEnlargedImage({ image: galleryImages[index], index });
      }
    }
  }, [params, galleryImages]);

  return (
    <div className={classes.galleryWrapper}>
      <p className={classes.galleryText}>{t('description')}</p>
      {
        galleryImages.map((image, index) => (
          <div key={index} className={classes.galleryItem} onClick={() => openEnlargedImage({ image: image, index })}>
            <Image src={image} alt={t(`images.${index}.desc`)} />
            <div className={classes.galleryItemContent}>
              <h3>{t(`images.${index}.title`)}</h3>
              <p>{t(`images.${index}.desc`)}</p>
            </div>
          </div>
        ))
      }
      {enlargedImage &&
        <Modal close={closeEnlargedImage}>
          <button
            className={`${classes.switchImageButton} ${classes.previousButton}`}
            onClick={() => openEnlargedImage({ image: galleryImages[prevImageIndex], index: prevImageIndex })}
          >
            <Image
              className={classes.previousButtonIcon}
              src={nextImage}
              alt="Previous"
            />
          </button>
          <Image
            className={classes.enlargedImage}
            src={enlargedImage.image}
            alt={t(`images.${enlargedImage.index}.desc`)}
          />
          <div className={classes.enlargedImageText}>
            <h3>{t(`images.${enlargedImage.index}.title`)}</h3>
            <p>{t(`images.${enlargedImage.index}.desc`)}</p>
          </div>

          <button
            className={`${classes.switchImageButton} ${classes.nextButton}`}
            onClick={() => openEnlargedImage({ image: galleryImages[nextImageIndex], index: nextImageIndex })}
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