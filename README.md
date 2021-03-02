# Barry's Burgers

**[Live link](https://cssttr.jchm.dev/)**

## Table of Contents

<table>
    <tr>
        <td align="center"><a href="#week-4">4️⃣ Week 4<a></td>
        <td align="center"><a href="#week-3">3️⃣ Week 3<a></td>
        <td align="center"><a href="#week-2">2️⃣ Week 2<a></td>
        <td align="center"><a href="#week-1">1️⃣ Week 1<a></td>
    </tr>
</table>

## Week 4

### Restricties

Als restricties had ik twee kleuren en level AAA WCAG gekozen. Als je de burger niet mee rekent, is het gebruik van twee kleuren gelukt. Naast zwart en wit (geen kleuren), heb ik twee verschillende kleuren bruin gebruikt. Ik heb custom proporties voor de hsl waardes aangemaakt, zodat ik deze in de hele pagina kon gebruiken en alleen de alpha waarde hoefde aan te passen. Ik vond dit wel een leuke uitdaging.

### Trots

Zelf ben ik wel trots op de burger (incl. de laser animatie). Ik heb het met 1 div (uiteindelijk met twee i.v.m. de hover) gemaakt. Daarnaast is de laser met een polygon gemaakt. Ik had in eerste instantie echt geen idee wat dit was en hoe het werkte. Dit zijn van die typische dingen waar je nooit de tijd voor neemt, maar wel leuk zijn om te weten.

Daarnaast heb ik ergens `section:not(:first-of-type) > header` gebruikt. Dit is niet onwijs speciaal, maar in het begin had ik echt geen idee hoe al deze selectoren werkten. Dit is dan even een voorbeeld, maar zo waren er nog een aantal van dit soort dingen. Ik heb het gevoel dat ik, met wellicht wat moeite, elk element in de DOM zou kunnen selecteren zonder een class te gebruiken.

### Uitdagende experimenten

Ik zal het niet mislukt noemen, aangezien er een hoop dingen zijn die ik geleerd, maar het selecteren van een vorm of kleuren is wel mislukt. Ik had graag gezien dat de gebruiker dit kon aanpassen, maar ik krijg/kreeg dit niet werkend zonder JavaScript.

Daarnaast heb ik ontzettend veel tijd besteed aan het werkend krijgen van het ‘keuzemenu’ (voor de achtergrond). Door een optie te kiezen, moet de achtergrond aangepast worden. Alleen deze achtergrond staat op een hele andere plek in de DOM. Zo ben ik wel even zoet geweest om dat werkend te krijgen. Ik ben niet tevreden met de manier hoe het nu staat in de DOM, maar het werkt in ieder geval wel. Ik vind het zelf een beetje rommelig staan, maar in mijn optiek kan het niet anders.

### Wat wil ik meer gaan doen

Het maken van custom properties op basis van de HSL values. Door dit te doen creëer je consistentie, maar is het nog wel mogelijk om hier en daar de alpha aan te passen. Stel dat je een button hebt, dan zou je de hover state bijvoorbeeld een alpha van 0.5 kunnen geven. Hetzelfde geldt voor schaduwen bijvoorbeeld. Door de restrictie van twee kleuren moest ik creatief zijn en anders was ik hier nooit op gekomen.

Daarnaast ga ik vaker gebruik maken van selectoren. In een hoop projecten is er een code standaard waar bijvoorbeeld BEM gebruikt MOET worden. Hier ben ik niet op tegen, aangezien ik hier groot voorstander van ben. Wél kan ik in mijn eigen projecten vaker selectoren gebruiken. Ik wist in het begin niet echt het verschil tussen bijvoorbeeld ~ + en >. Dit weet ik niet wel en eigenlijk is het super krachtig. Ik zeg niet dat ik geen classes meer ga gebruiken, maar zeker wel minder snel.

## Week 3

### Structuur aangebracht

Ik merkte dat mijn style.css enorm groot werd en daarom heb ik het geprobeerd om te ordenen. Op ten duur wist ik niet meer waar ik moest zijn om iets aan te passen en dit gaf mij een reden om het allemaal even beter te structureren. Zelf ben ik bekend met gebruiken van components in JavaScript en daarom heb ik geprobeerd om alle css in dit project ook op deze manier te ordenen.

### Single div burger

Door de talk van Olivia Ng leek het mij leuk om ook wat te gaan doen met een single div. Ik heb toen een beetje op [singlediv.com](http://singlediv.com) en CodePen gekeken en uiteindelijk kwam ik erachter dat ik in dit geval het beste een box-shadow kon gebruiken. Zelf wist ik niet dat je dit hiervoor kon gebruiken, dus dat was ook wel leuk om eens te doen. Uiteindelijk heb ik er ook nog een laser aan toegevoegd. Dit alles heeft mij wel bijna twee dagen gekost, maar dit soort dingen zou ik anders nooit gedaan hebben. Bij die laser heb ik bijvoorbeeld nog gekeken naar een (geanimeerde) polygon. Polygons waren wat mij betreft een groot raadsel. Door middel van Clippy is het mij gelukt om het iets minder raadselachtig te maken. Bij de polygon animatie heb ik ook wat comments voor mijzelf neergezet, zodat ik een beter overzicht heb van wat het is. Daarnaast maak ik bij dat soort dingen veel gebruik van custom properties, zodat ik weet waar alles voor staat.

<details>
<summary>Screenshot van startpunt in Clippy. Vanuit daar ben ik gewoon wat dingen gaan proberen: </summary>

![Clippath in Clippy](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week3/clippy-polygon.png)

</details>

### Draaien van cards

Het leek mij wel leuk om op de achterkant van de cards nog wat tekst neer te zetten. Op ten duur begreep ik wel dat er een div aan toegevoegd moet worden om het over effect te laten werken. Dit duurde enige tijd, maar uiteindelijk heb ik het werkend.

### Accessibility

Een van mijn restricties was A11y. Ik heb hier al wel eens goed naar gekeken, maar ik betrap mezelf erop dat ik weer een hoop ben vergeten. Om deze reden leek het mij leuk om hier ook naar te kijken.

Wordt aangevuld..

### Talks

Bij bijvoorbeeld de talk van Vitaly kwamen er een hoop links aan bod. Hier heb ik er een hoop van gekopieerd en in een Google Docs geplakt. Door deze links ben ik op een hoop andere links gekomen waar veel informatie te vinden was, zoals Google Fonts, LCS Colors & Container Queries. Google Fonts kopieerde ik altijd gewoon in mijn projecten, alsof er niets aan de hand was, alleen ik had nooit de neiging gehad om die link eens te bezoeken en kijken wat ik nou eigenlijk allemaal inlaadde. Vitaly liet bijvoorbeeld iets zien als `@font-face`, terwijl ik daar nog nooit van gehoord had. Na het openen van zo'n `fonts.googleapis.com` weet ik nu wat hierachter zit. Dit is even een voorbeeld, maar zo was ik na de talk nog wel ruim een uur bezig om nog meer dingen op te zoeken. Super leerzaam al die talks.

### Aanpassingen plan

In week 1 vertelde ik dat ik een stylesheet per schermgrootte wilde gaan doen. Dit had ik nog nooit gedaan en leek mij wel leuk. Achteraf gezien ben ik hier vanaf gestapt, aangezien het niet de leesbaarheid van mijn code zou bevorderen. Ik maak nu gebruik van components en media queries horen daarom gewoon het de desbetreffende map.

Daarnaast wilde ik nog naar andere restricties en/of contexten kijken als ik tijd over had, maar eigenlijk heb ik niet zo heel veel tijd over. Door te experimenteren met verschillende dingen heb ik minder tijd over dan dat ik dacht. Is in principe niet erg, maar ik ben er nu achter gekomen dat ik deze dingen niet meer ga halen.

## Week 2

### Engraving effect

Ik heb geprobeerd om een engraving effect te creëren. Het was mijn idee om de menukaart van hout te maken. Het leek mij in ieder geval wel een toevoeging hebben. Vervolgens leek het mij tof om een soort graveer effect te hebben (dus dat de tekst in het hout zit). Dit heb ik geprobeerd met een text shadow te doen. Ik heb me wel verdiept in wat text shadow ongeveer is, dus dat is goed. Overigens ben ik niet erg tevreden met het resultaat. Als je heel goed kijkt (en inzoomt) zie je het effect wel een beetje. Het lukte mij niet om het nog mooier te maken.

<details>
<summary>Screenshot van het engraving effect op de kaarten: </summary>

![Engraving effect](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week2/engraving-effect.png)

</details>

### Schaakbord achtergrond

In een typisch Amerikaans restaurant zie je vaak een ‘checkered’ vloer. Dit effect wilde ik ook creëren bij het menu. Dit heb ik gedaan door middel van een linear-gradient. Bij het maken hiervan kreeg ik direct het idee om het dynamisch te maken. Ik vond het erg lastig om dit zonder JavaScript te doen, maar uiteindelijk is het veranderen van de grootte gelukt. Het leek mij ook wel een leuk idee om de vorm aan te passen (d.m.v. degrees) en de kleur. Dit was echter te lastig met alleen CSS, dus daarom heb ik dit niet gedaan. Ook heb ik er een effect aan toegevoegd, zodat deze met een transitie van grootte veranderd. Voegt toch nog wel iets toe.

<details>
<summary>Video die laat zien hoe het animeren eruit ziet: </summary>

![Checkered background](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week2/checkered-background.gif)

</details>

### Print

In principe ben ik in week drie ook nog bezig geweest met print, maar in week 2 heb ik wel het meeste gedaan. Ik wist niet eens dat dit kon, dus er ging een wereld voor mij open. Dit neemt niet weg dat ik geen fan ben van print, aangezien browsers vaak een eigen wil hebben en niet willen luisteren. Zo heb ik bijvoorbeeld zowel een `break-inside: avoid`, als een` page-break-inside: avoid` toegepast. Beiden doen ze niet wat ze moeten doen (in Chrome niet, maar in Safari al helemaal niet).

Uiteindelijk half opgelost door wat `margin-top`. Heb heel wat oplossingen (online) gezien, maar geen een oplossing/trucje scheen bij mij te helpen.

<details>
<summary>Voorkant menu in print: </summary>

![Voorkant menu in print](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week2/voorkant-menu-print.png)

</details>

<details>
<summary>Probleem print wat niet lekker werkt: </summary>

![Probleem bij print](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week2/probleem-print.png)

</details>

## Week 1

Ik heb gekozen voor de menu opdracht. Het lijkt mij leuk om een menu van een klassiek Amerikaans burger restaurant te maken.

De context die ik ga gebruiken is **print-stylesheet**. Het lijkt mij ook leuk om te kijken naar **prefers-color-scheme** & **aspect-ratio**. Mocht ik genoeg tijd hebben, dan ga ik zeker met deze aan de slag.

Daarnaast kies ik voor de restricties **twee kleuren** & **level AAA WCAG**. Ook hier heb ik een extra restrictie waar ik mee aan de slag ga, mocht ik tijd genoeg hebben. Dit is **optimalisatie**. Ik ben erg benieuwd hoe dit werkt en daarom verdiep ik mij hier graag in.

De kleuren die in dit soort restaurants te zien zijn, zijn vaak rood & wit. Daarnaast wordt er regelmatig gebruik gemaakt van een geblokte zwart met witte (vergelijkbaar met een schaakbord) vloer én wordt neon verlichting vaak íets te veel gebruikt. Met dat laatste zijn wel wat leuke dingen mogelijk. Concreet zullen de kleuren **rood**, **wit** en **zwart** het vaakst terugkomen.

Er zijn een aantal technieken waarvan ik op voorhand al weet dat ik deze wil gaan gebruiken. In eerste instantie zijn dit _selectoren_ & _pseudo-classes_. Ik werk al lange tijd met CSS, maar tot op heden koos ik altijd voor de 'klassen manier'. Af en toe wel eens een `::after`, maar bij een `ul li:nth-child(3)` kies ik al snel voor een class of id. Het lijkt mij leuk om eens in de selectoren te duiken, omdat ik denk dat ik het best wel leuk ga vinden.

N.a.v. van de talk van Nils leek het mij ook leuk om gebruik te maken van _counters_. In welke vorm weet ik nog niet, maar ik was/ben nog niet bekend met deze techniek en verdiep mij er daarom graag wat meer in.

Daarnaast wil ik mij in het algemeen verdiepen in CSS functies. Er zijn er velen, zoals _calc()_, _clamp()_ & _attr()_. Ik ga ze vast niet allemaal nodig hebben, maar ik wil wel gaan kijken wat functies in CSS precies zijn en of er misschien verborgen (?) functies zijn waar weinig mensen vanaf weten. Misschien valt het achteraf wel mee, maar de uitkomsten zal ik hoe dan ook ergens in deze README delen.

Wat mij tenslotte nog wel interessant lijkt, is het gebruik maken van verschillende CSS-bestanden op basis van de scherm grootte. Ik kwam erachter dat je door middel van iets als `<link rel="stylesheet" media="screen and (min-device-width: 800px)" href="800.css"/>` een stylesheet kan inladen voor alleen die grootte van het scherm. Dit ligt ook weer in lijn met het gebruiken van een apart `print.css` bestand. Zelf gebruik ik altijd media queries en ik denk dat dit ook mijn voorkeur heeft. Tóch wil ik het proberen om te kijken of het iets is.

Tijdens het ontwikkelen zal ik ongetwijfeld nog wat andere CSS-technieken vinden. Deze zal ik dan per week toevoegen aan de README.

Mijn uitdaging zal de **Selector First CSS-aanpak** zijn. Zelf ben ik gewend om met klassen te werken en het zal dus voor mij nog wel een uitdaging zijn om straks een pagina te hebben zonder klassen. Neemt niet weg dat ik het een leuke uitdaging vind, omdat ik mij meer moet gaan verdiepen in bijv. _selectors_ en _specificity_.

In het begin merkte ik dat ik veel moeite had met de schetsen, omdat ik nog niet echt wist wat ik wilde. ik ben eerst in CSS gaan experimenteren met CSS-technieken die ik nog niet kende en vanuit daar kwamen er een hoop ideeën. Deze heb ik vervolgens in een schets gestopt en deze is hieronder te vinden.

<details>
<summary>Schets van eerste week: </summary>

![Schets week 1](https://github.com/jochemvogel/css-to-the-rescue-2021/blob/master/docs/week1/schets-week1.jpg)

</details>
