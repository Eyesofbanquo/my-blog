import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Article = props => {
  const image = props.data.image.url
  const articleTitle = props.data.title.text
  const articlePreviewText = props.data.paragraph_preview.text

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{articleTitle}</p>
      </header>

      <div className="card-content">
        <div className="content">{articlePreviewText}</div>
      </div>
    </div>
    // <div className="main-container" style={{ display: "flex" }}>
    //   <img alt="" src={props.data.image.url} width={200} />
    //   <div
    //     className="main-container-rhs"
    //     style={{ display: "flex", "flex-direction": "column" }}
    //   >
    //     <Link to={`/blog/${props.slug}`} className="c-article">
    //       <h2>{props.data.title.text}</h2>
    //     </Link>
    //     <p>{props.data.paragraph_preview.text}</p>
    //   </div>
    // </div>
  )
}

export default Article
