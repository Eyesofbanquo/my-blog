import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogExcerpt from "../components/blog-excerpt/blog-excerpt.jsx"

const BlogPage = props => {
  const { posts } = props.data
  console.log(posts)
  return (
    <Layout>
      <div>
        {posts.edges.map(post => (
          <>
            {console.log(post)}
            {/* <h1>{post.node.data.body[0].items[0].header.text}</h1>
            <p>{post.node.data.body[0].items[0].content.text}</p> */}
            <BlogExcerpt />
          </>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPosts {
    posts: allPrismicPost {
      edges {
        node {
          data {
            body {
              ... on PrismicPostBodyImage {
                items {
                  code {
                    html
                    text
                  }
                  content {
                    html
                    text
                  }
                  header {
                    html
                    text
                  }
                }
              }
            }
          }
          id
          uid
        }
      }
    }
  }
`
