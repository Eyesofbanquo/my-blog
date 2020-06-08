import React from "react"

const ArticleDetail = props => {
  return (
    <div className="page">
      <img src={props.image} alt="" />
      <div
        className="c-article-content"
        dangerouslySetInnerHTML={{ __html: props.paragraph }}
      ></div>
    </div>
  )
}

export default ArticleDetail
