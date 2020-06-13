import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../../styles/bulma.component.sass"

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState("")

  const menuBurgerClicked = () => {
    switch (active) {
      case "":
        setActive("is-active")
        break
      case "is-active":
        setActive("")
        break
    }
  }

  return (
    <nav
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div
          className={`navbar-burger ${active}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarContent"
          onClick={menuBurgerClicked}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${active}`} id="navbarContent">
        <div className="navbar-start">
          <Link
            className="navbar-item"
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontWeight: `bold`,
            }}
          >
            {siteTitle}
          </Link>
          <Link
            className="navbar-item"
            to="/blog"
            style={{ color: `white`, textDecoration: `none` }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
