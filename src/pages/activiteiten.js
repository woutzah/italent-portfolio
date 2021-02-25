import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
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
            backgroundImage: `url(${axxes_logo})`,
          }}
        >
          <span class="card-title">
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
          <span class="card-title">
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
          <span class="card-title">
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
