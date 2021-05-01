import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import Layout from "../components/layout"

import overzichtfeatures1 from "../images/overzichtfeatures1.jpg"
import overzichtfeatures2 from "../images/overzichtfeatures2.jpg"
import overzichtwireframes from "../images/overzichtwireframes.png"
import klaslokaal from "../images/klaslokaal.jpg"
import opdrachtentestrond from "../images/opdrachttestronde.png"
import opgavewedstrijd from "../images/opgavewedstrijd.png"
import scoreboard from "../images/scoreboard.jpg"
import wd_logo from "../images/wdlogo.png"
import chatbrawl from "../images/chatbrawl.png"
import developers from "../images/developers.png"
import farmfrenzy from "../images/farmfrenzy.png"
import litebansbridge from "../images/litebansbridge.png"
import membercount from "../images/membercount.png"
import purepunish from "../images/purepunish.png"
import ramshard from "../images/ramshard.png"
import trello from "../images/trello.png"

export default function SelectiePage() {
  return (
    <Layout>
      <h1 className="title-center">Selectie</h1>
      <Tabs>
        <TabList
          id="tabs"
          defaultIndex={`2`}
          className=".react-tabs__tab--selected"
        >
          <Tab>Innovatieroute UI/UX</Tab>
          <Tab>Hackathon: Google Hash Code</Tab>
          <Tab>Woolly Development</Tab>
        </TabList>
        <div id="panels">
          <TabPanel>
            <p>Van woensdag 7 oktober tot en met 9 oktober werd ik samen met een 25-tal andere studenten van het laatste
              jaar ondergedompeld in de wereld van UI en UX. Gedurende deze drie dagen werden er verscheidene workshops
              ingepland om ons zo kennis te laten maken met het vak.
            </p>
            <p>
              Woensdag werd de spits afgebeten door twee enthousiaste werknemers van het bedrijf AppWise. Zij gaven
              ons
              eerst een korte theoretische uitleg over de implementatie van een Customer Experience binnen een
              project.
              Na deze korte uiteenzetting werden we dan aan het werk gezet. De grote groep van leerlingen werd
              onderverdeeld in kleinere groepjes van vijf leerlingen. We kregen dan de opdracht om nieuwe functies in
              kaart te brengen voor de populaire app Tinder. We moesten in het achterhoofd houden dat het de bedoeling
              was dat door de nieuwe functies die we bedachten, Tinder meer winst zou genereren. Al gauw ging ons
              groepje aan de slag en begon ik met het uittekenen van een mindmap.
            </p>
            <div>
              <img src={overzichtfeatures1} alt="picture" />
              <img src={overzichtfeatures2} alt="picture" />
            </div>
            <p>
              Na het brainstormen kwamen we tot deze nieuwe features. Na wat feedback van de organisatoren was het dan
              aan ons om onze features te pitchen voor de rest van de groep. Natuurlijk was de ene feature al wat
              haalbaarder dan de andere, maar dat maakte niet zo veel uit. Aan het einde van de dag werd er dan nog
              feedback gevraagd over de gegeven workshop aan de hand van een Mentimeter.
            </p>
            <p>
              De tweede dag werd verzorgd door drie werknemers van de Xplore group. In dit tweede onderdeel van de
              innovatieroute werd de focus gelegd op het praktisch uitwerken van het UX-design van het prille begin tot
              het eindproduct. In de voormiddag werden er presentaties gehouden over het uitwerken van wireframes
              a.d.h.v. de customer journey, het concreet uitwerken met Marvel en de wireframes omzetten naar prototypes.
            </p>
            <p>Na deze theoretische informatie was het de bedoeling dat we voor onszelf gingen uitmaken wat wij als
              studenten zouden veranderen binnen de infrastructuur van de Hogeschool PXL. Dit ging dan vooral over de
              informatievoorziening. We werden opgedeeld in groepjes. Elk team moest een ander onderwerp kiezen. Mijn
              team koos voor een app die de verschillende kanalen, waarlangs de hogeschool PXL communiceert, samenvoegt
              tot één geheel. Deze app zou dan alle andere kanalen moeten vervangen. Met behulp van Marvel was het dan
              de bedoeling dat we een aantal wireframes zouden uitwerken. Op het einde van de dag moesten we onze
              wireframes dan ook voorstellen aan de rest van de groep en kregen we ook feedback. In het algemeen waren
              de organisatoren tevreden over onze uitwerking.</p>
            <div className="title-center">
            <img src={overzichtwireframes} alt="picture" />
            </div>
            <p>
              De laatste dag begon met een uiteenzetting over het omvormen van wireframes naar prototypes, user testing
              en design handoff. Na deze presentaties gingen we weer aan de slag met dezelfde groepjes van de vorige
              dag. Nu was het aan ons om de wireframes van de vorige dag om te zetten naar een prototype. We hadden ons
              per twee binnen ons groepje achter een onderdeel van de wireframes gezet. Tibo en ik begonnen aan het
              uitwerken van het menu van de catering en het informatieblad PXL-Breeze. Al gauw hadden we door dat onze
              prototypes niet uniform waren, doordat we ons groepje hadden opgesplitst. Dit hadden we opgelost door goed
              met elkaar te communiceren en alles op elkaar af te stellen. Op het einde van de dag, nadat onze
              prototypes waren afgewerkt, moesten we deze voor een laatste keer pitchen en kregen we weer feedback.
            </p>
            <p>
              In het algemeen was ik aangenaam verrast door de innovatieroute zelf. Ik heb veel bijgeleerd. Eén van de
              dingen waar ik zelf in gegroeid ben is het appreciëren van een goede uitwerking van het UX-design van een
              applicatie. Vóór de innovatieroute zou ik hieraan nooit zoveel tijd besteed hebben, maar nu heb ik
              ingezien waarom het zo belangrijk is.
            </p>
            <p>
              Ik was ook heel tevreden met de twee groepjes waarin ik gezeten heb. Iedereen leek heel gemotiveerd om bij
              te leren. Het was leuk om te zien dat bij de omzetting van onze wireframes naar een prototype, de
              applicatie tot leven kwam. Ook al was dat niet letterlijk zo. Ook het feit dat we weer eens mochten
              presenteren tijdens de lockdown deed deugd. Nog eens sociaal contact deed wonderen. Ik heb veel bijgeleerd
              en ik vond de manier van overbrengen ook zeer geslaagd. De combinatie van theorie en presentaties met
              praktische workshops was zeer goed geregeld.
            </p>
            <p>
              Tijdens deze innovatieroute heb ik ook een aantal tools leren kennen. Ik vond Marvel zelf makkelijk in
              gebruik, maar er was te weinig diepgang in de functionaliteit. Ik denk voor het latere professionele leven
              dat er waarschijnlijk betere en flexibelere tools bestaan. Over het programma Figma was ik wel heel
              tevreden. Ik was vooral verrast door de functies die het aanbood om samen te werken. Dit heb ik later ook
              gebruikt in de uitwerking van het IT-Project.
            </p>
            <p>
              Naar de toekomst toe ga ik zeker en vast meer tijd nemen om wireframes en prototypes te maken of te
              bestuderen. Uiteindelijk zijn ze een stijlgids om elk teamlid op eenzelfde lijn te krijgen.
            </p>
          </TabPanel>
          <TabPanel>
            <p>Als laatste onderdeel van I-talent was het noodzakelijk om nog mee te doen aan een hackathon. We hadden
              keuze uit twee hackathons. Ik heb gekozen om mee te doen aan Google Hash Code.</p>
            <p>Samen met drie junior-collega’s was het de bedoeling dat we meededen aan de wedstrijd georganiseerd door
              Google op 25 februari 2021. Ik zat in het team met een zeer goede vriend en twee andere junior-collega’s
              waarmee ik had samengewerkt tijdens het IT-project.</p>
            <p>Het doel van de wedstrijd was zeer duidelijk. We moesten binnen een bepaalde tijdslimiet een oplossing
              bedenken voor een wiskundig probleem a.d.h.v. software. Om ons voor te bereiden op de daadwerkelijke
              wedstrijd hebben we de voorbeeldopgave de woensdag voor de wedstrijd opgelost. Deze opgave ging over een
              fictieve pizzeria die zo optimaal mogelijk pizza’s met verschillende ingrediënten moest leveren aan
              verscheidene teams. Er werden punten toegekend afhankelijk van hoeveel unieke ingrediënten er per team
              geleverd werden en een aantal randvoorwaarden waaraan voldaan moest worden.</p>
            <p>Om te beginnen aan het uitwerken van de oplossing moesten we eerst een keuze maken over hoe we gingen
              samenwerken aan hetzelfde project. Door corona was de wedstrijd volledig online waardoor er gebruik
              gemaakt moest worden van collaboratietools. We waren van mening dat we samen en tegelijk wouden kunnen
              schrijven en niet wouden berusten op een enkele persoon die zijn scherm zou delen. We zijn begonnen met
              een aantal Java tools uit te proberen, maar die waren niet functioneel genoeg. Daarom zijn we uiteindelijk
              overgestapt naar Visual Studio en besloten we om de oplossing in csharp uit te schrijven.</p>
            <div className="title-center">
            <img src={opdrachtentestrond} alt="picture" />
            </div>
            <p>Na wat prullen hadden we dan uiteindelijk een oplossing uitgeschreven. Helaas ging er door het
              disfunctioneren van het programma data verloren, waardoor we de oplossing zelf niet konden uploaden. Het
              was een goede leerschool om die problemen op te lossen voor aanvang van de wedstrijd.</p>
            <p>De dag nadien was het dan zover. Om half zeven stipt was er een livestream, verzorgd door Google zelf,
              waarin uitleg gegeven zou worden over het probleem dat opgelost moest worden. Om het communiceren
              makkelijker te maken en de samenhorigheid te stimuleren, werd er een online hub opgezet door het bedrijf
              Info Support. Het was een soort online klaslokaal waarin de deelnemers van de Hogeschool PXL dan aparte
              kamers hadden om zo te communiceren tijdens de wedstrijd.</p>
            <div className="title-center">
            <img src={klaslokaal} alt="picture" />
            </div>
            <p>Uiteindelijk begon de livestream en werd er een korte uitleg gegeven over de wedstrijd. Ze wisten ons ook
              te melden dat de editie van dit jaar de grootste editie ooit was. Dit jaar lag de focus vooral op Google
              Maps. Het probleem van de wedstrijd van dit jaar was dat er uit een bestand auto’s, straten, routes en
              kruispunten moesten uitgelezen worden. De opdracht was dat we zoveel mogelijk auto’s op hun eindbestemming
              moesten krijgen door een systeem te bedenken dat de stoplichten op het einde van elke straat zou
              regelen.</p>
            <div className="title-center">
            <img src={opgavewedstrijd} alt="picture" />
            </div>
            <p>In het begin was het even uitzoeken, maar al gauw gingen we per twee verder zoeken naar de oplossing. Ik
              ging aan de slag met het uitwerken van de domeinklassen. Dit om een simulatie te krijgen van onze
              oplossing. Na de voorziene vier uur was het dan de bedoeling om ons resultaat up te loaden. Helaas hadden
              we niet genoeg tijd om alles in te dienen, waardoor we een aantal punten zijn misgelopen. Uiteindelijk
              hebben we toch nog 5.7 miljoen punten kunnen behalen. Dit is zeker niet slecht voor een eerste keer.</p>
            <div className="title-center">
            <img src={scoreboard} alt="picture" />
            </div>
            <p>Voor ik aan de wedstrijd begon was ik niet echt enthousiast. Ik dacht dat het weer een standaard
              verplichte PXL-opdracht zou zijn. Dit kwam mede doordat ik geen idee had hoe het was om mee te doen aan
              programmeerwedstrijd.</p>
            <p>Maar al gauw veranderde die mening. Tijdens het registratieproces en het doornemen van de regels begon ik
              inzicht te krijgen waarom dat bepaalde mensen deze wedstrijden zo leuk vinden en ik kan ze geen ongelijk
              geven. Ik ben van nature vrij competitief ingesteld waardoor ik ook direct er volledig voor wou gaan. Ik
              was ook zeer tevreden met het team waarmee ik zou deelnemen aan de wedstrijd. Drie goede vrienden die
              zowel hard kunnen werken als plezier kunnen maken. Dit was ook de ideale omgeving om in te werken.</p>
            <p>Ik was ook verschoten van de complexiteit van de opdrachten. Het was leuk om te zien dat je met
              verscheidene randvoorwaarden en extra details moest rekening houden. Hierdoor werd de oplossing flexibel
              en waren er ook meerdere oplossingen mogelijk.</p>
            <p>Het is mij ook duidelijk geworden dat de huidige collaboratietools nog niet op punt staan. Waarschijnlijk
              komt dit omdat bedrijven hier pas op ingezet hebben toen de coronacrisis begon. Maar deze ervaring was
              niet altijd even soepel. Uiteindelijk met wat extra moeite is het allemaal goedgekomen.</p>
            <p>Als ik later, wanneer ik werk, nog eens de kans krijg om mee te doen aan een soortgelijke wedstrijd, dan
              ga ik dit zeker doen. Het grootste deel draait natuurlijk om het programmeren en het oplossen van het
              probleem, maar het groepsgebeuren is iets wat mij ook zeker aansprak. Het was nog eens leuk om een
              groepsactiviteit te doen. Door het coronavirus is dit niet altijd mogelijk.</p>
          </TabPanel>
          <TabPanel>
            <div className="title-center">
              <img src={wd_logo} alt="picture" />
            </div>
            <p>De activiteit waar ik het meest trots op ben is de community die ik heb opgebouwd rond mijn open source
              Java-projecten. Gedurende anderhalf jaar tijd heb ik samen met een goede vriend dit opgebouwd. Deze vriend
              heet Oliver Maenen en is nu ook mijn medestudent in de richting toegepaste informatica. Deze open source
              projecten zijn plug-ins voor het spel Minecraft.</p>
            <p>Vroeger in mijn jeugdige jaren hebben we samen een Minecraft-server gehost. We huurden dan een dedicated
              server waarop verschillende mensen van over verschillende werelddelen konden meespelen. Na een zeer leuke
              tijd waren we allebei het spel zelf beu. We waren al wat ouder geworden en het spel was in onze ogen niet
              meer hetzelfde zoals ervoor. Daarom leek het ons een goed idee om onze passie voor het spel te gebruiken
              om onze programmeervaardigheden te verbeteren.</p>
            <p>Een Minecraft plug-in is eigenlijk een stuk software dat extra functionaliteit toevoegt aan het spel.
              Deze kunnen gedownload worden via verscheidene websites en fora. Deze fora geven ontwikkelaars de
              mogelijkheid om hun plug-ins voor te stellen a.d.h.v. een informatieve pagina. Deze pagina kan de
              ontwikkelaar invullen naar wens. Meestal staat deze boordevol informatie over hoe de plug-in zelf werkt.
              Dit kan via een saaie tekst gedaan worden, maar ikzelf doe het via een mooie grafische lay-out die gevuld
              is met afbeeldingen.</p>
            <p>Concreet ben ik in het begin van 2020 van start gegaan met het ontwikkelen van plug-ins. Ik heb
              ondertussen vier plug-ins uitgewerkt die online beschikbaar zijn. Deze plug-ins en hun broncode zijn terug
              te vinden via Github (https://github.com/woutzah).</p>
            <h1>ChatBrawl</h1>
            <p>Een eerste plug-in die ik ontwikkeld heb heet ChatBrawl. ChatBrawl maakt het mogelijk voor spelers om
              deel te nemen aan verscheidene wedstrijden. Deze wedstrijden worden aangekondigd via de Minecraft-chat.
              Spelers kunnen prijzen verkrijgen in de vorm van extra materialen wanneer ze winnen.</p>
            <p>In het begin heb ik de Java-kennis die ik op school heb opgedaan moeten gebruiken. Om het spel zelf aan
              te spreken en te manipuleren moest ik gebruik maken van een externe API. Deze API heet de SpigotAPI. Deze
              API stelt een framework ter beschikking met verschillende voorgemaakte functies en klassen die ik kon
              gebruiken. Na een hobbelig traject kon ik uiteindelijk een eerste versie van de plug-in opleveren.</p>
            <p>Naast het ontwikkelen zelf was het ook belangrijk dat de plug-in een goede pagina had die ik kon
              gebruiken om de plug-in ter beschikking te stellen op fora. Ik heb daarom met Photoshop mijn eerste pagina
              gemaakt.</p>
            <div className="title-center">
              <img src={chatbrawl} alt="picture" />
            </div>
            <p>Door de plug-in online te posten groeide er een community van gebruikers van de plug-in. Bij deze
              gebruikers waren natuurlijk ook mensen die hulp nodig hadden met het configureren of bugs rapporteerden.
              Hierdoor groeide de plug-in waardoor er nood was aan een centraal punt waarlangs communicatie kon
              gebeuren. Dit centrale punt werd uiteindelijk de Woolly Development Discord-server. Hier kom ik later op
              terug.</p>
            <h1>LiteBansbridge</h1>
            <p>Een tweede plug-in die ik gemaakt heb is LiteBansBridge. LiteBansBridge is een plug-in die het mogelijk
              maakt om moderatie van spelers te synchroniseren naar een gewenste Discord-server. Wanneer er een bepaalde
              speler zijn toegang tot de server wordt afgenomen, wordt dit bijvoorbeeld gelogd in een Discord-channel.
              Omdat mijn vorige plug-in wat naambekendheid kreeg werd ik benaderd door een server owner. Deze server
              owner wou dit idee voor haar server laten uitwerken door mij tegen betaling. Dit is ook de eerste keer dat
              ik erachter kwam dat er veel potentieel zit in het maken van plug-ins.</p>
            <p>Voor de uitwerking moest ik gebruik maken van zowel de SpigotAPI als de DiscordAPI, aangezien er een
              extra gegeven bij kwam kijken. Nadat ik de plug-in had uitgewerkt voor haar, deed ze mij een gunst. Ik
              mocht de plug-in publiceren onder mijn naam. Dit heb ik dan uiteindelijk ook gedaan. Het resultaat werd
              goed ontvangen door de community.</p>
            <div className="title-center">
            <img src={litebansbridge} alt="picture" />
            </div>
            <h1>PurePunish</h1>
            <p>Mijn derde plug-in was opnieuw een commissie die ik moest uitwerken voor een server owner. Deze plug-in
              was wel van een groter kaliber. PurePunish is een plug-in die een abstractielaag vormt voor het beheren
              van spelers. Spelers kunnen namelijk gestraft worden wanneer ze slecht gedrag vertonen op een server.
              Daarom zijn er meestal ook verschillende moderatoren aanwezig om in te grijpen en te straffen waar nodig.
              Natuurlijk is het moeilijk om spelers op dat vlak gelijk te behandelen, aangezien niet elke moderator een
              bepaalde overtreding even erg vindt. PurePunish is een systeem dat hier verandering in brengt en ervoor
              zorgt dat elke speler gelijk behandeld wordt.</p>
            <div className="title-center">
            <img src={purepunish} alt="picture" />
            </div>
            <h1>FarmFrenzy</h1>
            <p>Na drie gratis plug-ins heb ik dan uiteindelijk ook een premium plug-in ontwikkeld. Deze is niet gratis
              en vereist de gebruiker om een licentie te kopen in ruil voor downloadrechten. Aangezien de community op
              het moment van de release al tamelijk groot was, leek dit mij een goed idee om te doen. Hierdoor kan ik
              doen wat ik graag doe gecombineerd met een aardig zakcentje.</p>
            <p>FarmFrenzy is een plug-in die focust op dieren in het spel. Er wordt als het ware een nieuwe dimensie
              gecreëerd rond de dieren. Dit is ook de plug-in waar het meeste tijd in gestoken is.</p>
            <div className="title-center">
            <img src={farmfrenzy} alt="picture" />
            </div>
            <h1>Woolly Development Discord</h1>
            <p>De Woolly Development Discord-server is het kanaal waarlangs alle communicatie gebeurt. In deze server
              zijn verschillende channels aangemaakt waarlangs gebruikers van onze plug-ins om hulp kunnen vragen.
              Daarnaast kunnen ze ook suggesties doen voor eventuele nieuwe features. Elke dag komen er nieuwe mensen
              bij in deze server. Op dit moment zitten we rond de kaap van 777 leden.</p>
            <div className="title-center">
            <img src={membercount} alt="picture" />
            </div>
            <p>Doordat de community aan het groeien was leek het ons ook een goed idee om onze programmeervaardigheden
              aan te scherpen en de community nog meer te laten groeien. We hadden het idee om andere ontwikkelaars, die
              ook hun eigen plug-ins hebben, te vragen of ze deel wouden uitmaken van de community. Na een aantal
              gesprekken maakten vijf nieuwe ontwikkelaars deel uit van onze community. Deze kregen dan ook elk op hun
              beurt support channels voor hun plug-ins. Hierdoor groeide de server nog verder.
            </p>
            <div className="title-center">
            <img src={developers} alt="picture" />
            </div>
            <p>Doordat we nu met een aantal ontwikkelaars samenwerkten, ontstond er ook de mogelijkheid om extra
              commissies aan te nemen van server owners die een op maat gemaakte plug-in nodig hadden. Oliver en ik
              deden de administratie en verdeelden het werk. We hielden alle projecten bij via een overzicht op Trello.
              Verder deden we ook de communicatie met de klant, deden we inschattingen en volgden we eventuele bugs op
              wanneer deze zich voordeden.</p>
            <div className="title-center">
            <img src={trello} alt="picture" />
            </div>
            <p>Naast de commissies hebben we ook een Patreon-plan opgesteld. Een Patreon-plan is een manier waarlangs
              mensen die ons willen steunen een maandelijkse bijdrage kunnen doen in de vorm van een betaalde
              subscriptie. In ruil krijgen ze hier dan een aantal voordelen voor. Een volledige lijst kan teruggevonden
              worden op onze Patreon-pagina (https://www.patreon.com/woollydevelopment).</p>
            <p>Doordat we opgemerkt waren door een aantal instanties hebben we ook een partnership kunnen sluiten met
              Ramshard. Ramshard is een hostingbedrijf. In ruil voor reclame mochten we gratis serverruimte weggeven aan
              onze community.</p>
            <div className="title-center">
            <img src={ramshard} alt="picture" />
            </div>
            <p>Al dit harde werk resulteerde in een goed draaiende community waar we veel mensen online konden
              samenbrengen. Daarnaast konden we ook verder onze programmeervaardigheden en softskills verbeteren.</p>
            <p>Om te beginnen ben ik heel blij dat ik dit avontuur ben aangegaan met Oliver. Het was zeker niet altijd
              even makkelijk, maar het resultaat mag er zijn. Op dit moment is Woolly Development nog altijd aan het
              groeien. Ik kijk er ook naar uit wat de toekomst brengt.</p>
            <p>In het begin had ik het heel moeilijk om persoonlijke dingen, die ik vóór Woolly Development deed, te
              combineren met het onderhouden van de server. Ik heb hier dan ook uit geleerd om steeds een goede planning
              op te stellen. Deze les heb ik ook meegenomen naar mijn stage.</p>
            <p>Verder vond ik de omgeving van Woolly Development zeer geschikt om bij te leren. Doordat we eigenlijk
              bestaan uit een team van zeven ontwikkelaars, was er altijd wel iemand die een oplossing had voor een
              probleem. We deelden ook vaak kennis onder elkaar, waardoor iedereen ook steeds bijleerde.</p>
            <p>Hiernaast heb ik ook geleerd om niet steeds over mij heen te laten lopen. In het begin deed ik veel
              toegevingen naar klanten toe. Maar doorheen de tijd heb ik geleerd om assertiever te zijn op het vlak van
              onderhandelen. Het is belangrijk om te weten hoeveel je zelf waard bent.</p>
            <p>Ik heb heel veel mooie momenten en kansen gekregen door Woolly Development. Ik ben daarom ook de
              community dankbaar. Het einde van Wooly Development is zeker nog niet in zicht. De dingen die ik doorheen
              het parkoers geleerd heb ga ik zeker en vast meenemen naar het werkveld. Ik denk dat deze ervaring zeker
              en vast een meerwaarde gaat bieden binnen het bedrijfsleven.</p>
          </TabPanel>
        </div>
      </Tabs>
    </Layout>
  )
}
