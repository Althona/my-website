import Link from "next/link";
import classes from "@/src/app/[locale]/projects/page.module.css";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations();

  return (
    <>
      <h1>{t("myProjects.title")}</h1>
      <p>{t("myProjects.description")}</p>
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