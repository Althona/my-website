
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import profilePic from '@/public/profile-pic.jpg';
import classes from '@/src/app/[locale]/components/heading/heading.module.css';

export default function Heading() {
  const t: (key: string) => string = useTranslations();

  return (
    <header className={classes.heading}>
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />
      <Link href="/">
        <Image className={classes.profilePicture}
          src={profilePic}
          priority={true}
          alt={t('header.profilePictureAlt')} />
      </Link>
      <h1 className={classes.title}>{t('header.title')}</h1>
      <p>{t('header.description')}</p>
    </header>
  );
}