import React from "react"
import { Link } from "gatsby"

const BlogExcerpt = props => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>

      <div className="content">Hehe haha hoho yes</div>
    </div>
  )
}

export default BlogExcerpt
