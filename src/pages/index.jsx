import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Article from "../components/article"
import { graphql } from "gatsby"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const IndexPage = props => {
  return (
    <Layout>
      <div className="page">
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `eyesofbanquo`, `Eyesofbanquo`]}
        />
        <div
          className="message-container"
          css={css`
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            justify-content: center;
            margin: 1rem;
          `}
        >
          <article
            className="message is-primary"
            css={css`
              width: 40%;
              height: 30%;
            `}
          >
            <div className="message-header">
              <p>Hello visitor</p>
              <button className="delete"></button>
            </div>

            <div className="message-body">I ❤️ Megan</div>
          </article>
        </div>
        {props.data.articles.edges.map(article => (
          <Article slug={article.node.uid} data={article.node.data} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query Articles {
    articles: allPrismicArticle {
      edges {
        node {
          data {
            title {
              text
            }
            image {
              url
              alt
            }
            paragraph_preview {
              text
            }
          }
          uid
        }
      }
    }
  }
`
