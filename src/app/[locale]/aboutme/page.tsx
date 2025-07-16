import classes from '@/app/aboutme/page.module.css';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations("aboutMe");
  const summery = useTranslations("aboutMe.resume.summery");
  const skills = useTranslations("aboutMe.resume.skills");
  const theory = useTranslations("aboutMe.resume.theory");
  const tools = useTranslations("aboutMe.resume.tools");
  const other = useTranslations("aboutMe.resume.other");

  return (
    <>
      <h1>{t("title")}</h1>
      <div>
        <h4>{summery("title")}</h4>
        <p>{summery("text")}</p>

        <h4>{skills("title")}</h4>

        <h4>{skills("subtitle")}</h4>
        <ul>
          <li>{skills("languages.nextjs")}</li>
          <li>{skills("languages.typescript")}</li>
          <li>{skills("languages.react")}</li>
          <li>{skills("languages.javascript")}</li>
          <li>{skills("languages.html")}</li>
        </ul>

        <h4>{theory("title")}</h4>
        <ul>
          <li>{theory("wcag")}</li>
          <li>{theory("ux")}</li>
          <li>{theory("scrum")}</li>
          <li>{theory("testing")}</li>
        </ul>

        <h4>{tools("title")}</h4>
        <ul>
          <li>{tools("vscode")}</li>
          <li>{tools("postman")}</li>
          <li>{tools("webstorm")}</li>
          <li>{tools("github")}</li>
          <li>{tools("jira")}</li>
        </ul>

        <h4>{other("title")}</h4>
        <ul>
          <li>{other("drivingLicense")}</li>
          <li>{other("languages")}</li>
        </ul>

        <h4>Erfarenhet:</h4>

        <h5>2021 - nuvarande Puzzel AB:</h5>
        <p>På Puzzel's produkt team fick jag möjligheten att arbeta i ett team där
          uppdraget var att bygga en ny webbapplikation som skulle ge
          kunden möjlighet att bygga sitt egna support flöde på webben utan att
          behöva några kunskaper inom IT. Applikationen byggdes i React
          Redux. Kunden hade alltså möjlighet att kunna välja om dom ville
          presentera en chat, en bubbla eller ett formulär och sedan välja vilken
          ordning det ska presenteras i. Vi byggde även en regel-motor som
          Kunden kunde avgöra när flödet skulle starta. Projektet har än så
          länge tagit oss 3 år.</p>

        <h5>2016 - 2021 Vergic AB:</h5>
        <p>Jag har arbetat i Vergics leverans team där jag fick arbeta i Javascript
          men även Angular mellan åt när kärnan i applikationen behövde
          uppdateras. Uppgiften var att arbeta med kunder, lyssna på deras
          problem samt krav för att sedan leverera en skräddarsydd lösning
          som kunde smälta in på kundens webbplats rent estetiskt.
          Jag var även ansvarig för workshops, samt träningsdagar för kunder
          och företagets partners. Det ledde till att jag också blev fick
          undervisa och ha ansvar för nya utvecklare som börjat i
          leverans-teamet.</p>

        <h4>Utbildning</h4>

        <p>2014			Mandarin (7,5 poäng), Fudan universitetet, Shanghai.</p>

        <p>2012 - 2015		Webbprogrammering  (120 poäng), Linneuniversitetet, Kalmar.</p>

        <h4>Personligt</h4>

        <p>Jag är en glad, skojfrisk och utåtriktad person som är född och uppväxt i Trelleborg. På fritiden spenderar jag mestadels av min tid med familjen och umgås med vänner.
          Jag motionerar kontinuerligt för att hålla kroppen aktiv. Jag har även ett intresse för geografisk politik men även asiatisk ekonomi och kultur.
          Jag brinner för att diskutera och lösa problem och finner glädje i att göra ett gott arbete, gärna tillsammans med andra. I övrigt är jag bra på att hantera stress,
          är tålmodig och social men presterar lika väl individuellt som jag gör i grupp.</p>
      </div>
    </>
  );
}