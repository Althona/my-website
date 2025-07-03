import classes from "@/src/app/components/menu/menu.module.css";
import MenuLink from "@/src/app/components/menu/menuLink";

import { useTranslations } from 'next-intl';

export default function Menu() {
  const t = useTranslations('links');

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
      </ul>
    </nav>
  );
}