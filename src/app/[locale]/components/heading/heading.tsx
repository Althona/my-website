import classes from '@/src/app/[locale]/components/heading/heading.module.css';
import Image from 'next/image';
import profilePic from '@/public/profile-pic.jpg';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Heading() {
  const t = useTranslations('header');

  return (
    <header className={classes.heading}>
      <Link href="/">
        <Image className={classes.profilePicture} src={profilePic} alt="Latana's profile picture" />
      </Link>
      <h1 className={classes.title}>{t('title')}</h1>
      <p>{t('description')}</p>
    </header>
  );
}