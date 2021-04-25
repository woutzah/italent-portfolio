import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import NavBar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `80%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
