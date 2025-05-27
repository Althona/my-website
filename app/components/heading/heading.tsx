import classes from './heading.module.css';
import Image from 'next/image';
import profilePic from '../../../public/profile-pic.jpg.jpg';

export default function Heading({title, description}: {title: string; description: string}) {
  return (
    <header className={classes.heading}>
      <Image className={classes.profilePicture} src={profilePic} alt="Latana's profile picture"/>
      <h1 className={classes.title}>{title}</h1>
      <p>{description}</p>
    </header>
  );
}