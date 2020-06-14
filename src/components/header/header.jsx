import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "../../styles/bulma.component.sass"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const HeaderLinkSkeleton = props => {
  const { className, children, to } = props
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

const HeaderLink = styled(HeaderLinkSkeleton)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`

const HeaderLinkProps = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  "& :hover": {
    color: "red",
  },
}

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
      css={css`
        background: rebeccapurple;
        margin-bottom: 1.45rem;

        .navbar-menu.is-active {
          background-color: orange;
        }

        .navbar-item:hover,
        .navbar-item:focus {
          color: black;
          background-color: yellow;
        }
      `}
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
          css={css`
            color: white;
            background-color: red;
            &:hover {
              color: black;
              background-color: yellow;
            }
          `}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div className={`navbar-menu ${active}`} id="navbarContent">
        <div className="navbar-start">
          <HeaderLink className="navbar-item" to="/">
            {siteTitle}
          </HeaderLink>
          <HeaderLink className="navbar-item" to="/blog">
            Blog
          </HeaderLink>
          <HeaderLink className="navbar-item" to="/blog">
            About
          </HeaderLink>
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
