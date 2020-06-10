import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import "../../styles/bulma.component.sass"

class PostTemplate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { post } = this.props.data.post
    console.log(post)
    return (
      <div class="container">
        <h1>This will be where the posts live</h1>
      </div>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query PostQuery($id: String) {
    post: prismicPost(id: { eq: $id }) {
      data {
        body {
          ... on PrismicPostBodyImage {
            id
            items {
              code {
                html
                text
              }
              content {
                text
                html
              }
              header {
                text
                html
              }
            }
          }
        }
      }
    }
  }
`
