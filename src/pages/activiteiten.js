import React from "react"

import Layout from "../components/layout"
import wd_logo from "../images/wdlogo.png"
import selligent_logo from "../images/selligent.png"
import eurofins_logo from "../images/eurofins.png"
import ericsson_logo from "../images/ericsson.png"
import pxl_logo from "../images/pxlogo.png"
import grasshopper_logo from "../images/grasshopper.png"
import evance_logo from "../images/evance.png"
import acait_logo from "../images/acait.jpg"

import axxes_logo from "../images/axxes.jpg"
import trase_logo from "../images/trase.jpg"
import superlab_logo from "../images/superlab.png"
import ActivityCard from "../components/activity-card"

const ActiviteitenPage = () => (
  <Layout>
    <h1 className="title-center">Overzicht</h1>
    <div className="cards">
      <ActivityCard imageUrl={wd_logo} title="Woolly Development" description="Onderhouden van open source projectjes (Java) en de community die
          daarrond hangt." place="Zelf aangebracht, online" time="22 januari 2020 - heden" />
      <ActivityCard imageUrl={selligent_logo} title="Seminarie: Data Engineering & Data Science at scale" description=" Tijdens dit seminarie werd er een interactieve workshop gehouden rond
          het verwerken van gegevens. Ook werd dieper ingegaan op het begrip
          “data”." place="online" time="29 december 2020, 09u00 – 12u00" />
      <ActivityCard imageUrl={eurofins_logo} title="Seminarie: TDD" description="In dit seminarie werd besproken wat Test Driven Development is en
          waarom het zo populair is. Er werd ook een praktisch voorbeeld
          uitgewerkt met PHP en Java." place={"online"} time={"2 december 2020, 09u00 – 11u00"} />
      <ActivityCard imageUrl={ericsson_logo} title={"Seminarie: Op weg naar 5G"}
                    description={"De geschiedenis van telefonie en mobiel internet kwam hier naar voren. Verder werd ook de tijdlijn van het mobiel internet behandeld en de impact en toepassingen van het opkomende 5G besproken."}
                    place={"online"} time={"25 november 2020, 09u00 – 11u00"} />
      <ActivityCard imageUrl={pxl_logo} title={"Innovatieroute UI/UX"}
                    description={" Hier werden we ondergedompeld in de wereld van UI en UX. Er waren verschillende infosessies en workshops over UI en UX design. Uiteindelijk moesten we daadwerkelijk een applicatie ontwerpen."}
                    place={"Hogeschool PXL, Corda Campus"} time={"7 oktober 2020 - 9 oktober 2020"} />
      <ActivityCard imageUrl={pxl_logo} title={"POP-sessies 2019-2020"}
                    description={"In deze 3 sessies werden de groepen van het Research project dichter bij elkaar gebracht en werd er onderzocht welke talenten en vaardigheden er zich in elke groep bevonden. Dit werd gedaan aan dehand van workshops en zelfreflectie."}
                    place={"Hogeschool PXL, B-blok"} time={"3 maart 2020, namiddag"} />
      <ActivityCard imageUrl={grasshopper_logo} title={"Seminarie: User Experience in Software Platforms"}
                    description=" De customer journey stond hier centraal. Tips en tricks om deze
          optimaal te maken voor klanten werden hier toegelicht. Ook ging er
          heel wat aandacht naar het begrip UX design." place={"Hogeschool PXL, B-blok"}
                    time={"3 maart 2020, 09u00 - 12u00"} />
      <ActivityCard imageUrl={evance_logo} title={"Seminarie: De wondere wereld van Firebase"} description=" In dit seminarie werd een chatapplicatie gemaakt met Firebase. De
          verschillende mogelijkheden van Firebase werden besproken samen met de
          voor- en nadelen ervan." place={"Hogeschool PXL, B-blok"} time={"25 februari 2020, 09u00 - 12u00"} />
      <ActivityCard imageUrl={acait_logo} title={"Seminarie: ACA IT-Solutions Machine Learning"} description="Hier werd informatie gegeven over machine learning en werden er
          hands-on voorbeelden uitgewerkt in Java. In de voorbeelden werd
          gebruik gemaakt van AWS pre-trained models." place={"Hogeschool PXL, B-blok"}
                    time={"18 februari 2020, 08u30 - 12u30"} />
      <ActivityCard imageUrl={axxes_logo} title={"Seminarie: My first datacenter"} description="In dit seminarie werd een inleiding gegeven over het begrip “Cloud”.
          Er werden ook concrete voorbeelden en toepassingen besproken." place={"Hogeschool PXL, B-blok"}
                    time={"15 mei 2019, 09u30 – 12u30"} />
      <ActivityCard imageUrl={trase_logo} title={"Seminarie: Hands-on introduction to smart contracts"} description=" Hier werd eerst besproken wat smart contracts zijn en waarvoor ze
          nuttig kunnen zijn. Verder werd er ook een concreet voorbeeld
          uitgewerkt met Ethereum." place={"Hogeschool PXL, B-blok"} time={"6 maart 2019, 08u30 – 12u00"} />
      <ActivityCard imageUrl={pxl_logo} title={"POP-sessies 2018-2019"}
                    description="In deze 3 sessies werden de groepen van het Research project dichter bij elkaar gebracht en werd er onderzocht welke talenten en vaardigheden er zich in elke groep bevonden. Dit werd gedaan aan de hand van workshops en zelfreflectie."
                    place={"Hogeschool PXL, B-blok"} time={"27/02/19, namiddag"} />
      <ActivityCard imageUrl={superlab_logo} title={"Seminarie: Don’t make me think"} description="Dit seminarie was gebaseerd op het boek van Steve Krug over de basis
          van application usability. De basisconcepten van UX-design werden
          uitgelegd en waarom dit belangrijk is" place={"Hogeschool PXL, B-blok"}
                    time={"27 februari 2019, 09u30 – 12u00"} />
      <ActivityCard imageUrl={pxl_logo} title={"Seminarie: Digital@breakfast"}
                    description="Dit seminarie ging gepaard met een rijkelijk ontbijt in de cafetaria van de D-blok van de Hogeschool PXL. Er werd verteld over drones en Droneport in Sint-Truiden."
                    place={"Hogeschool PXL, D-blok"} time={"20/02/19, 08u00 – 09u30"} />
      <ActivityCard imageUrl={pxl_logo} title={"Projectweek 2018-2019"}
                    description="Tijdens deze week werden er verschillende hands-on workshops en seminaries georganiseerd. Dit was de inleidende week voor de aanvang van het Research Project."
                    place={"Hogeschool PXL, Corda Campus"} time={"11/02/19 – 15/02/19"} />
    </div>
  </Layout>
)

export default ActiviteitenPage
