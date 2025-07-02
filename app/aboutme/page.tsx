import classes from '@/app/aboutme/page.module.css';

export default function AboutMe() {
  const locale = 'sv'; // This would typically be dynamically set based on the user's locale preference

  console.log(locale);

  return (
    <>
      <h1>About me</h1>
      <div>
        <h4>Summering</h4>
<p>Jag tog examen sommaren 2015 från Linneuniversitetet där jag fick lära mig programmera objektorienterat.
  Jag har 5 års erfarenhet i leverans teamet hos Vergic AB där jag arbetade i Javascript och Angular och 3 års erfarenhet i produktteamet hos Puzzel 
  AB där jag arbetade i React Redux.</p>

<h4>Datakunskap</h4>

<h4>Programspråk:</h4>
<ul>
  <li>NextJS</li>
  <li>TypeScript</li>
  <li>React-Redux</li>
  <li>JavaScript</li>
  <li>HTML och CSS</li>
</ul>

<h4>Teoretiskt:</h4>
<ul>
  <li>Wcag 2.2</li>
  <li>Grund nivå i UX & webb-design</li>
  <li>SCRUM</li>
  <li>Blackbox testning och whitebox testning</li>
</ul>


<h4>Övriga färdigheter:</h4>
<ul>
  <li>Innehar Körkort B</li>
  <li>Talar flytande svenska och engelska.</li>
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