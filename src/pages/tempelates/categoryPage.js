import React from "react"
import {graphql} from "gatsby"
import categorySingle from '../../components/categorySingle'

import { Link, useStaticQuery } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CourseCard from "../../components/courseCard"

const singleCategory = ({data, pageContext}) => {
    console.log(pageContext.category)
    const category = pageContext.category
    console.log(data)
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





export const singleCategoryQuery = graphql`
    query SingleCategoryQuery($category: String!) {
            courses {
              externalResources(where: {categories_some: {category: $category}}) {
                id
                title
                description
                linkURL
                logoURL
                categories{
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

export default singleCategory