import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import axxes_logo from "../images/axxes.jpg"

const ActiviteitenPage = () => (
  <Layout>
    <SEO title="Overzicht" />
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
        <span className="card-meta">15 mei 2019, 09u30 – 12u30</span>
      </a>
    </div>
  </Layout>
)

export default ActiviteitenPage
