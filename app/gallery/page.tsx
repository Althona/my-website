import Image from "next/image";
import image1 from "../../public/gallery/sg-1.png";
import image2 from "../../public/gallery/sg-2.png";
import image3 from "../../public/gallery/sg-3.png";
import image4 from "../../public/gallery/sg-4.png";
import image5 from "../../public/gallery/sg-5.png";
import image6 from "../../public/gallery/sg-6.png";
import image7 from "../../public/gallery/sg-7.png";
import image8 from "../../public/gallery/sg-8.png";
import classes from "./page.module.css";

export default function gallery() {
  return (
    <div className={classes.galleryWrapper}>
      <div className={classes.galleryItem}>
        <Image src={image1} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Me and my daughters</h3>
          <p>Sleepover at the grandparents apartment.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image2} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Youngest daughter</h3>
          <p>She just started walking and was very happy about it.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image3} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Oldest daughter</h3>
          <p>Visiting her granparents in China and wasn't impressed by the food.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image4} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Oldest daughter</h3>
          <p>Poesing and ready to celebrate christmas with the rest of the family.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image5} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Me</h3>
          <p>This is the photo I am using as a profile picture.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image6} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Both children</h3>
          <p>Oldest and youngest daughter's hugging.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image7} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>My wife and youngest daughter</h3>
          <p>Happiness captured.</p>
        </div>
      </div>
      <div className={classes.galleryItem}>
        <Image src={image8} alt="whatever" />
        <div className={classes.galleryItemTitle}>
          <h3>Me and my wife's wedding</h3>
          <p>Happiness captured.</p>
        </div>
      </div>
    </div>
  );
}