import React from "react"
import {graphql} from "gatsby"
// import categorySingle from '../../components/categorySingle'

import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CourseCard from "../../components/courseCard"

const singleCategory = ({data}) => {
    // console.log(pageContext.category)
    // const category = pageContext.category
    // console.log(data)
    return (
        <Layout>
          <SEO title="Cassandra: All Courses" />
          <h1 className="courses-top-title">You can view all the available courses here.</h1>
          <Link to="/">Go back to the homepage</Link>
          <div className="container">
                          <section className="post-feed">
                              {data.courses.externalResources.map( course => (
                                  // The tag below includes the markup for each course
                                  <CourseCard key={course.id} course={course} />
                                // console.log(data)
                                  
                              ))}
                          </section>
                          {/* <Pagination pageContext={pageContext} /> */}
              </div>
        </Layout>
        )
}

export default singleCategory

export const query = graphql`
    query SingleCategoryQuery($slug: String) {
        courses {
            externalResources(where: {categories_some: {category: $slug}}) {
              id
              title
              description
              linkURL
              logoURL
              categories(where: {}) {
                id
                category
              }
              votes {
                positive
              }
            }
          }
    }
`