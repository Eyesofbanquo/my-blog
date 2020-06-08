// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPrismicArticle {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const posts = result.data.allPrismicArticle.edges
  const blogPost = path.resolve(`./src/templates/post/index.jsx`)

  console.log(posts)
  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.uid}/`,
      component: blogPost,
      context: {
        slug: post.node.id,
      },
    })
  })
}
