import classes from '@/src/app/[locale]/aboutme/page.module.css';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const summary = useTranslations("aboutMe.resume.summary");
  const skills = useTranslations("aboutMe.resume.skills");
  const theory = useTranslations("aboutMe.resume.theory");
  const tools = useTranslations("aboutMe.resume.tools");
  const other = useTranslations("aboutMe.resume.other");
  const experience = useTranslations("aboutMe.resume.experience");
  const education = useTranslations("aboutMe.resume.education");
  const personal = useTranslations("aboutMe.resume.personal");

  return (
    <>
      <div className={classes.aboutMeWrapper}>
        <h4 className={classes.summaryTitle}>{summary("title")}</h4>
        <p className={classes.summaryText}>{summary("text")}</p>

        <h4 className={classes.resumeTitle}>{skills("title")}</h4>

        <h4 className={classes.resumeSubtitle}>{skills("subtitle")}</h4>
        <ul className={classes.skillsList}>
          <li className={classes.skillItem}>{skills("languages.nextjs")}</li>
          <li className={classes.skillItem}>{skills("languages.typescript")}</li>
          <li className={classes.skillItem}>{skills("languages.react")}</li>
          <li className={classes.skillItem}>{skills("languages.javascript")}</li>
          <li className={classes.skillItem}>{skills("languages.html")}</li>
        </ul>

        <h4 className={classes.theoryTitle}>{theory("title")}</h4>
        <ul className={classes.theoryList}>
          <li className={classes.theoryItem}>{theory("wcag")}</li>
          <li className={classes.theoryItem}>{theory("ux")}</li>
          <li className={classes.theoryItem}>{theory("scrum")}</li>
          <li className={classes.theoryItem}>{theory("testing")}</li>
        </ul>

        <h4 className={classes.toolsTitle}>{tools("title")}</h4>
        <ul className={classes.toolsList}>
          <li className={classes.toolItem}>{tools("vscode")}</li>
          <li className={classes.toolItem}>{tools("postman")}</li>
          <li className={classes.toolItem}>{tools("webstorm")}</li>
          <li className={classes.toolItem}>{tools("github")}</li>
          <li className={classes.toolItem}>{tools("jira")}</li>
        </ul>

        <h4 className={classes.otherTitle}>{other("title")}</h4>
        <ul className={classes.otherList}>
          <li className={classes.otherItem}>{other("drivingLicense")}</li>
          <li className={classes.otherItem}>{other("languages")}</li>
        </ul>

        <h4 className={classes.experienceTitle}>{experience("title")}</h4>

        <h5 className={classes.experienceSubtitle}>{experience("puzzel.title")}</h5>
        <p className={classes.experienceText}>{experience("puzzel.text")}</p>

        <h5 className={classes.experienceSubtitle}>{experience("vergic.title")}</h5>
        <p className={classes.experienceText}>{experience("vergic.text")}</p>

        <h4 className={classes.educationTitle}>{education("title")}</h4>

        <p className={classes.educationText}>{education("fudanUniversity")}</p>

        <p className={classes.educationText}>{education("linnaeusUniversity")}</p>

        <h4 className={classes.personalTitle}>{personal("title")}</h4>

        <p className={classes.personalText}>{personal("text")}</p>
      </div>
    </>
  );
}