import React from "react"
import { Link } from "gatsby"
import "./style.scss"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const Article = props => {
  const image = props.data.image.url
  const articleTitle = props.data.title.text
  const articlePreviewText = props.data.paragraph_preview.text
  const slug = props.slug

  return (
    <Link to={`/blog/${slug}`}>
      <div
        className="card"
        css={css`
          box-shadow: none;
          border-radius: 1em;
          border: 1px solid rgba(0, 0, 0, 0.2);
          overflow: hidden;

          &:hover {
            border: 1px solid rebeccapurple;
          }

          &:hover .card-header {
            background-color: rebeccapurple;
          }
          &:hover .card-header-title {
            color: white;
          }

          .card-header {
          }
        `}
      >
        <header className="card-header">
          <p className="card-header-title">{articleTitle}</p>
        </header>

        <div className="card-content">
          <div className="content">{articlePreviewText}</div>
        </div>
      </div>
    </Link>
  )
}

export default Article
