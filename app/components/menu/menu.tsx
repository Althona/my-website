import Link from "next/link";
import classes from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={classes.menu}>
      <ul className={classes.menuList}>
        <li className={classes.menuItem}>
          <Link href="/">About Me</Link>
        </li>
        <li className={classes.menuItem}>
          <Link href="/projects">My Projects</Link>
        </li>
        <li className={classes.menuItem}>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}