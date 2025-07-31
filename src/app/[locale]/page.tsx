
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("frontPage");

  return (
    <>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.subtitle}>
        <span>{t("text")}</span>
        <a className={styles.link} href={t("link.url")} target='_blank'>{t("link.text")}</a>
      </p>
    </>
  );
}
