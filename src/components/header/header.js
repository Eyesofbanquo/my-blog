import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../styles/bulma.component.sass"

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu">
      <div class="navbar-start">
        <Link
          className="navbar-item"
          to="/"
          style={{ color: `white`, textDecoration: `none`, fontWeight: `bold` }}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
