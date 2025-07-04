'use client';

import classes from "@/src/app/[locale]/components/menu/menu.module.css";
import MenuLink from "@/src/app/[locale]/components/menu/menuLink";
import { Link as LangLink } from "@/src/i18n/navigation";
import Image from 'next/image';
import UKFlag from '@/public/icons/uk-flag.png';
import SVFlag from '@/public/icons/swe-flag.png';
import { usePathname } from 'next/navigation'

import { useTranslations } from 'next-intl';

export default function Menu({ locale }: { locale: string }) {
  const t = useTranslations('links');
  const switchLocale = locale === 'en' ? 'sv' : 'en';
  const pathname = usePathname().replace('/' + locale, "");

  return (
    <nav className={classes.menu}>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <MenuLink href="/projects">{t("myProjects")}</MenuLink>
        </li>
        <li className={classes.menuItem}>
          <MenuLink href="/gallery">{t("gallery")}</MenuLink>
        </li>
        <li className={classes.menuItem}>
          <MenuLink href="/aboutme">{t("aboutMe")}</MenuLink>
        </li>
        <div className={classes.languageSwitcher}>
          <LangLink href={pathname} locale={switchLocale}>
            {switchLocale === 'en' ? <Image src={UKFlag} alt="English" /> : <Image src={SVFlag} alt="Swedish" />}
          </LangLink>
        </div>
      </ul>
    </nav>
  );
}