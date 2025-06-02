import classes from './heading.module.css';
import Image from 'next/image';
import profilePic from '../../../public/profile-pic.jpg.jpg';
import Link from 'next/link';

export default function Heading({ title, description }: { title: string; description: string }) {
  return (
    <header className={classes.heading}>
      <Link href="/">
        <Image className={classes.profilePicture} src={profilePic} alt="Latana's profile picture" />
      </Link>
      <h1 className={classes.title}>{title}</h1>
      <p>{description}</p>
    </header>
  );
}