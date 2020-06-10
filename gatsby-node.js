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
      allPrismicCoding {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const articles = result.data.allPrismicArticle.edges
  const article = path.resolve(`./src/templates/article/index.jsx`)

  const codings = result.data.allPrismicCoding.edges
  const codePost = path.resolve(`./src/templates/coding/index.jsx`)

  const posts = result.data.allPrismicPost.edges
  const postTemplate = path.resolve(`./src/templates/post/index.jsx`)

  console.log(posts)

  articles.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.uid}/`,
      component: article,
      context: {
        slug: post.node.id,
      },
    })
  })

  codings.forEach((code, index) => {
    createPage({
      path: `/coding/${code.node.uid}`,
      component: codePost,
      context: {
        slug: code.node.id,
      },
    })
  })

  posts.forEach((post, index) => {
    createPage({
      path: `/post/${post.node.uid}`,
      component: postTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}
