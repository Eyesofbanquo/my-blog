/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header.jsx"
import "./layout.css"
import "../../styles/bulma.component.sass"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          email
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        class="container"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          css={css`
            margin-top: 1em;
          `}
        >
          © {new Date().getFullYear()},{" "}
          <a href={`mailto:${data.site.siteMetadata.email}`}>@donderapps</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
