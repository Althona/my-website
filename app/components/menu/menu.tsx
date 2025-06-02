import classes from "./menu.module.css";
import MenuLink from "./menuLink";

export default function Menu() {

  return (
    <nav className={classes.menu}>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <MenuLink href="/projects">My Projects</MenuLink>
        </li>
        <li className={classes.menuItem}>
          <MenuLink href="/gallery">Gallery</MenuLink>
        </li>
        <li className={classes.menuItem}>
          <MenuLink href="/aboutme">About Me</MenuLink>
        </li>
      </ul>
    </nav>
  );
}