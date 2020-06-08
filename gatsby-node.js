// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/pages/post.jsx`)
    resolve(
      graphql(`
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
      `).then(result => {
        const posts = result.data.allPrismicArticle.edges
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
      })
    )
  })
}
