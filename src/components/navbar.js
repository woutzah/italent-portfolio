import React from "react"
import Link from "gatsby-link"

const NavBar = () => (
  <div className="nav-container stroke">
    <ul>
      <li>
        <Link to="/">Over mij</Link>
      </li>
      <li>
        <Link to="/activiteiten">Activiteiten</Link>
      </li>
      <li>
        <Link to="/selectie">Selectie</Link>
      </li>
      <li>
        <Link to="/reflectie">Reflectie</Link>
      </li>
    </ul>
  </div>
)

export default NavBar
