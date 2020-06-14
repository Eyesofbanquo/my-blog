import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const HeaderLinkSkeleton = props => {
  const { className, children, to } = props
  return (
    <Link to={to}>
      <div className={className}>{children}</div>
    </Link>
  )
}

const HeaderLink = styled(HeaderLinkSkeleton)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
  width: 100%;
`

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
          background-color: white;
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
