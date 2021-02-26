import React from "react"
import { Link } from "gatsby"

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

const ActiviteitenPage = () => (
  <Layout>
    <h1 className="title-center">Overzicht</h1>
    <div className="cards">
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${wd_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Woolly Development</h3>
          </span>
        </span>
        <span className="card-summary">
          Onderhouden van open source projectjes (Java) en de community die
          daarrond hangt.
        </span>
        <span className="card-meta">Zelf aangebracht, online</span>
        <span className="card-meta">22 januari 2020 - heden</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${selligent_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: Data Engineering & Data Science at scale</h3>
          </span>
        </span>
        <span className="card-summary">
          Tijdens dit seminarie werd er een interactieve workshop gehouden rond
          het verwerken van gegevens. Ook werd dieper ingegaan op het begrip
          “data”.
        </span>
        <span className="card-meta">online</span>
        <span className="card-meta">29 december 2020, 09u00 – 12u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${eurofins_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: TDD</h3>
          </span>
        </span>
        <span className="card-summary">
          In dit seminarie werd besproken wat Test Driven Development is en
          waarom het zo populair is. Er werd ook een praktisch voorbeeld
          uitgewerkt met PHP en Java.
        </span>
        <span className="card-meta">online</span>
        <span className="card-meta">2 december 2020, 09u00 – 11u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${ericsson_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: Op weg naar 5G</h3>
          </span>
        </span>
        <span className="card-summary">
          De geschiedenis van telefonie en mobiel internet kwam hier naar voor.
          Verder werd ook de tijdlijn van het mobiel internet behandeld en de
          impact en toepassingen van het opkomende 5G besproken.
        </span>
        <span className="card-meta">online</span>
        <span className="card-meta">25 november 2020, 09u00 – 11u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${pxl_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Innovatieroute UI/UX</h3>
          </span>
        </span>
        <span className="card-summary">
          Hier werden we ondergedompeld in de wereld van UI en UX. Er waren
          verschillende infosessies en workshops over UI en UX design.
          Uiteindelijk moesten we daadwerkelijk een applicatie ontwerpen.
        </span>
        <span className="card-meta">Hogeschool PXL, Corda Campus</span>
        <span className="card-meta">7 oktober 2020 - 9 oktober 2020</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${pxl_logo})`,
          }}
        >
          <span className="card-title">
            <h3>POP-sessies 2019-2020</h3>
          </span>
        </span>
        <span className="card-summary">
          In deze 3 sessies werden de groepen van het Research project dichter
          bij elkaar gebracht en werd er onderzocht welke talenten en
          vaardigheden er zich in elke groep bevonden. Dit werd gedaan aan de
          hand van workshops en zelfreflectie.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">3 maart 2020, namiddag</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${grasshopper_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: User Experience in Software Platforms</h3>
          </span>
        </span>
        <span className="card-summary">
          De customer journey stond hier centraal. Tips en tricks om deze
          optimaal te maken voor klanten werden hier toegelicht. Ook ging er
          heel wat aandacht naar het begrip UX design.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">3 maart 2020, 09u00 - 12u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${evance_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: De wondere wereld van Firebase</h3>
          </span>
        </span>
        <span className="card-summary">
          In dit seminarie werd een chatapplicatie gemaakt met Firebase. De
          verschillende mogelijkheden van Firebase werden besproken samen met de
          voor- en nadelen ervan.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">25 februari 2020, 09u00 - 12u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${acait_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: ACA IT-Solutions Machine Learning</h3>
          </span>
        </span>
        <span className="card-summary">
          Hier werd informatie gegeven over machine learning en werden er
          hands-on voorbeelden uitgewerkt in Java. In de voorbeelden werd
          gebruik gemaakt van AWS pre-trained models.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">18 februari 2020, 08u30 - 12u30</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${axxes_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: My first datacenter</h3>
          </span>
        </span>
        <span className="card-summary">
          In dit seminarie werd een inleiding gegeven over het begrip “Cloud”.
          Er werden ook concrete voorbeelden en toepassingen besproken.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">15 mei 2019, 09u30 – 12u30</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${trase_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: Hands-on introduction to smart contracts</h3>
          </span>
        </span>
        <span className="card-summary">
          Hier werd eerst besproken wat smart contracts zijn en waarvoor ze
          nuttig kunnen zijn. Verder werd er ook een concreet voorbeeld
          uitgewerkt met Ethereum.
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">6 maart 2019, 08u30 – 12u00</span>
      </a>
      <a className="card" href="#">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${superlab_logo})`,
          }}
        >
          <span className="card-title">
            <h3>Seminarie: Don’t make me think</h3>
          </span>
        </span>
        <span className="card-summary">
          Dit seminarie was gebaseerd op het boek van Steve Krug over de basis
          van application usability. De basisconcepten van UX-design werden
          uitgelegd en waarom dit belangrijk is
        </span>
        <span className="card-meta">Hogeschool PXL, B-blok</span>
        <span className="card-meta">27 februari 2019, 09u30 – 12u00</span>
      </a>
    </div>
  </Layout>
)

export default ActiviteitenPage
