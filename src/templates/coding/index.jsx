import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

class Coding extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props.data.code
    console.log(data)
    return (
      <div>
        <h1>This is a code post</h1>
        <div
          className="c-coding-content"
          dangerouslySetInnerHTML={{ __html: data.html }}
        />
      </div>
    )
  }
}

export default Coding

export const query = graphql`
  query Coding($slug: String) {
    code: prismicCoding(id: { eq: $slug }) {
      id
      data {
        code_block {
          html
          raw
          text
        }
      }
    }
  }
`
