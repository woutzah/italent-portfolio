import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welkom</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image style={{ maxWidth: `300px`, marginBottom: `1.45rem`, borderRadius: `50%`}} />
    </div>
    <p>Ik ben Wouter, 22 jaar, woonachtig te Kuringen en student aan de Hogeschool PXL. Ik volg op dit moment een professionele bachelor Toegepaste Informatica (applicatieontwikkeling). Vanaf maart begin ik als stagiair bij ACA-IT Solutions binnen COIN en rond ik op het einde van dit schooljaar mijn studie af. Hierna zou ik graag beginnen werken.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
