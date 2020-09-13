/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql(`
    query {
      courses {
        categories {
          id
          category
        }
      }
    }
    `)

    // Pagination:
    // const postsPerPage = 20
    // const numPages = Math.ceil(data.courses.categories.length / postsPerPage)
    // Array.from({ length: numPages}).forEach(_, i) => {
    //     actions.createPages({
    //         path: cate
                // unfinished: https://youtu.be/7xTMu-nUDqY
    //     })
    // }

    data.courses.categories.forEach(category => {
        const slug = category.category
        const categoryName = category.category
        console.log(categoryName)
        actions.createPage({
            path: slug,
            component: require.resolve(`./src/pages/tempelates/categoryPage`),
            context: {category: categoryName},
        })
    })

}
