'use client';

import Image from 'next/image';
import classes from "@/src/app/[locale]/components/menu/menu.module.css";
import MenuLink from "@/src/app/[locale]/components/menu/menuLink";
import { Link as LangLink, usePathname } from "@/src/i18n/navigation";
import UKFlag from '@/public/icons/uk-flag.png';
import SVFlag from '@/public/icons/swe-flag.png';

import { useTranslations } from 'next-intl';

type MenuProps = {
  locale: string;
};

export default function Menu({ locale }: MenuProps) {
  const t = useTranslations('links');
  const switchLocale = locale === 'en' ? 'sv' : 'en';
  const path = usePathname();

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
        <li className={classes.languageSwitcher}>
          <LangLink href={path} locale={switchLocale}>
            {switchLocale === 'en' ? <Image src={UKFlag} alt="English" /> : <Image src={SVFlag} alt="Swedish" />}
          </LangLink>
        </li>
      </ul>
    </nav>
  );
}