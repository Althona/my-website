import Link from "next/link";
import classes from "./page.module.css";

export default function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <p>This is the about My work.</p>
      <div className={classes.itemWrapper}>
        <Link className={classes.linkItem} href="/projects/memory">
          <h2 className={classes.linkTitle}>Memory Game</h2>
          <p className={classes.linkDescription}>Play a fun memory game to test your skills!</p>
        </Link>
        <Link className={classes.linkItem} href="/projects/memory">
          <h2 className={classes.linkTitle}>Memory Game</h2>
          <p className={classes.linkDescription}>Play a fun memory game to test your skills!</p>
        </Link>
        <Link className={classes.linkItem} href="/projects/memory">
          <h2 className={classes.linkTitle}>Memory Game</h2>
          <p className={classes.linkDescription}>Play a fun memory game to test your skills!</p>
        </Link>
      </div>
    </>
  );
}